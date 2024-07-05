import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../Components/api";

function VolunteersA({
  handleDelete,
  acceptedApp,
  rejectedApp,
  handleAccepted,
}) {
  const [volunteers, setVolunteers] = useState([]);
  const [err, setErr] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const res = await api.get("/volunteers");
        const volunteersWithAccepted = res.data.map((volunteer) => ({
          ...volunteer,
          accepted: false,
        }));
        setVolunteers(volunteersWithAccepted);
      } catch (error) {
        setErr(error.message);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      try {
        const res = await api.get("/volunteers");
        setVolunteers(res.data);
      } catch (error) {
        setErr(error.message);
      }
    }
    getData();
  }, [volunteers]);
  async function AcceptedVolunteer(e) {
    try {
      await api.put(`/volunteers/${e.id}`, { ...e, accepted: true });
      setVolunteers((prevVolunteers) => {
        return prevVolunteers.map((volunteer) =>
          volunteer.id === e.id ? { ...volunteer, accepted: true } : volunteer
        );
      });

      handleAccepted();
    } catch (error) {
      console.error("Error accepting volunteer:", error);
      
    }
  }

  return (
    <div className="container">
       <nav className="navbar navbar-light bg-light d-flex justify-content-between container ">
        <div className="">
      
          <Link className="navbar-brand text-danger demonstrationsContentH" to="/volunteer">
            Volunteers
          </Link>
        </div>
        <div className="">
          <Link className="navbar-brand " to="/volunteer">
            {" "}
            <img
              src="../images/plus-solid.svg"
              alt="donate"
              title="donate"
              className="img-fluid plus"
            />
          </Link>
        </div>
      </nav>

      <div className="row d-flew justify-content-between mt-3">
        <div className="col-4 border  border-3 border-success lh-lg p-3 fw-bold rounded-3">
          Accepted Applications:{acceptedApp.current}{" "}
        </div>
        <div className="col-4 border  border-3 border-danger lh-lg p-3 fw-bold rounded-3">
          Rejected Applications: {rejectedApp.current}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 mx-5">
          {volunteers.length > 0 ? (
            <table className="table table-hover ">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Major</th>
                  <th scope="col">More</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody>
                {volunteers.map((e) => (
                  <tr key={e.id}>
                    <th scope="row">{e.id}</th>
                    <td>{e.firstName}</td>
                    <td>{e.lastName}</td>
                    <td>{e.major}</td>
                    <td>
                      <Link to={`/dashboard/volunteering/${e.id}`}>more</Link>
                    </td>
                    {e.accepted ? (
                      <td>
                        <div className="acceptingVolunteer  h-25  rounded-circle text-center " style={{width:"65px"}}>
                          <img
                            src="..\..\images\circle-check-regular.svg"
                            alt="img"
                            className="img-fluid w-50 h-100 bg-light rounded-circle"
                          />
                        </div>
                      </td>
                    ) : (
                      <td className="">
                        <Link
                          to=""
                          className="btn btn-danger mx-1"
                          onClick={() => {
                            handleDelete(e.id);
                          }}
                        >
                          reject
                        </Link>
                        <Link
                          className="btn btn-success"
                          onClick={() => {
                            AcceptedVolunteer(e);
                          }}
                        >
                          accept
                        </Link>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : err ? (
            err
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </div>
  );
}

export default VolunteersA;
