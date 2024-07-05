import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../Components/api";
import { useNavigate } from "react-router-dom";

function VolunteeringApp({ loggedAdmin, handleDelete, handleAccepted }) {
  const navigate = useNavigate();
  const { appId } = useParams();
  const [selectedApp, setSelectedApp] = useState({});
  useEffect(() => {
    async function getData() {
      const res = await api.get(`/volunteers/${appId}`);
      const data = res.data;
      setSelectedApp(data);
    }
    getData();
  }, [selectedApp]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      {selectedApp ? (
        <div
          class="card text-center border border-success w-75 "
          style={{ width: "18rem;" }}
        >
          <img
            src="../../images/Placeholder.png"
            class="card-img-top img-fluid    rounded-circle mx-auto d-block"
            style={{ width: "100px" }}
            alt="img"
          />
          <div class="card-body">
            <h5 class="card-title">
              {selectedApp.firstName} {selectedApp.lastName}
            </h5>
            <p class="card-text">{selectedApp.email}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">major: {selectedApp.major}</li>
            <li class="list-group-item">field: {selectedApp.field}</li>
            <li class="list-group-item">age: {selectedApp.age}</li>
            <li class="list-group-item">location : {selectedApp.location}</li>
            <li class="list-group-item">
              hours can spent: {selectedApp.hours} hours
            </li>
          </ul>
          <div class="card-body">
            <Link
              to=""
              className="btn btn-danger mx-2"
              onClick={() => {
                handleDelete(selectedApp.id);
                navigate(`/dashboard/${loggedAdmin}`);
              }}
            >
              reject
            </Link>
            <Link
              className="btn btn-success"
              onClick={() => {
                handleAccepted();
                navigate(`/dashboard/${loggedAdmin}`);
              }}
            >
              accept{" "}
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default VolunteeringApp;
