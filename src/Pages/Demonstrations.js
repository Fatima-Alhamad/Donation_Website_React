import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import DemoCards from "./DemoCards";
import { useState, useEffect } from "react";
import api from "../Components/api";
import Footer from "../Components/Footer";

function Demonstrations() {
  const [demonstrations, setDemonstrations] = useState([]);
  const [err, setErr] = useState(null);
  const [query, setQuery] = useState("");
  useEffect(() => {
    try {
      async function getData() {
        const res = await api.get(`/demonstrations?location=${query}`);
        const data = res.data;

        setDemonstrations(data);
      }
      getData();
    } catch (error) {
      setErr(error.message);
    }
  }, [query]);
  function handleSubmit(e) {
    e.preventDefault();
    let search = e.target.search.value;
    setQuery(search);
  }

  return (
    <div className="">
      <Navbar />
      <div className="demonstrations">
        <div className="container-fluid d-flex align-items-center mt-1">
          <div className="row">
            <div className=" col-12 col-md-9 demonstrationsContent rounded-3 mx-3">
              <h1 className="lh-md text-light demonstrationsContentH p-3">
                Arise, O{" "}
                <span style={{ color: "#dc3545" }}> REVOLUTIONARY </span>,
                <br /> and let your voice be heard by the world!
              </h1>
            </div>
          </div>
        </div>
      </div>

      
      
        <div className="container-fluid ">
        <div className="row d-flex justify-content-between  mt-5 demoNav Participate">
          <div className="col-6 align-self-start ">
            {" "}
            <h2 className="text-center mt-5 text-danger demonstrationsContentH">
            <span className="mx-2">Demonstrations</span>
            <img src="../images/hand-fist-solid.svg" alt="img" className="img-fluid demImg "/>
            
            </h2>
          </div>
          <div className=" col-6 my-5 ">
            <form onSubmit={handleSubmit} className="">
              <div className="input-group">
                <div className="form-outline" data-mdb-input-init>
                  <input
                    id="search-input"
                    type="search"
                    className="form-control h-100 w-100 "
                    placeholder="Search Location"
                    name="search"
                  />
                </div>
                <button
                  id="search-button"
                  type="submit"
                  className="btn btn-danger"
                >
                  <i className="fas fa-search">
                    <img
                      src="../images/magnifying-glass-solid.svg"
                      alt="img"
                      className=" img-fluid searchImg"
                    />
                  </i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      

      <div className="container"></div>
        <div className="row d-flex justify-content-between ">
          {demonstrations.length > 0 ? (
            demonstrations.map((demo, index) => (
              <div className="col-md-3 col-6  my-5 " key={index}>
                <DemoCards demo={demo} />
              </div>
            ))
          ) : err ? (
            err
          ) : (
            <div className="alert alert-danger text-center">
              No Result Found
            </div>
          )}
        </div>
     
      <Footer />
    </div>
  );
}

export default Demonstrations;
