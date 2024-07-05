import React from "react";
import { useState, useEffect } from "react";
import api from "../../Components/api";
import { Link } from "react-router-dom";

function DemonstrationsA() {
  const [demonstrations, setDemonstrations] = useState([]);
  const [err, setErr] = useState("");
  useEffect(() => {
    async function getData() {
      try {
        const res = await api.get("/demonstrations");
        setDemonstrations(res.data);
      } catch (error) {
        setErr(error.message);
      }
    }
    getData();
  }, [demonstrations]);
  function handleDelete(id) {
    try {
      if (window.confirm("Are you sure you want to delete this demonstration?")) {
      api.delete(`/demonstrations/${id}`);}
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <nav className="navbar navbar-light bg-light d-flex justify-content-between container ">
        <div className="">
          <Link className="navbar-brand text-danger demonstrationsContentH" to="/demonstrations">
            demonstrations
          </Link>
        </div>
        <div className="">
          <Link className="navbar-brand " to="/dashboard/addDemonstrations">
            {" "}
            <img
              src="../images/plus-solid.svg"
              alt="Add demo"
              title="Add demonstration"
              className="img-fluid plus"
            />
          </Link>
        </div>
      </nav>

      {demonstrations.length > 0 ? (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Title</th>
              <th scope="col">Admin</th>
              <th scope="col">Location</th>
              <th scope="col">More</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {demonstrations.map((ele, index) => (
              <tr key={index}>
                <th scope="row">{ele.id}</th>
                <td>{ele.title}</td>
                <td>{ele.admin}</td>
                <td>{ele.location}</td>
                <td>
                  <Link to={`/dashboard/demonstrations/${ele.id}`}>more</Link>
                </td>
                <td>
                  {" "}
                  <Link
                    to=""
                    className="btn btn-danger mx-1 rounded-pill"
                    onClick={() => {
                      handleDelete(ele.id);
                    }}
                  >
                    delete
                  </Link>
                  <Link
                    className="btn btn-success rounded-pill"
                    to={`/dashboard/editDemonstrations/${ele.id}`}
                  >
                    edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : err ? (
        <p className="alert alert-danger text-center">{err}</p>
      ) : (
        <p className="alert alert-info text-center">Loading..</p>
      )}
    </div>
  );
}

export default DemonstrationsA;
