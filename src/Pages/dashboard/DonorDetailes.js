import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../../Components/api";

function DonorDetailes({ loggedAdmin }) {
  const [selectedDonor, setSelectedDonor] = useState([]);
  const navigate = useNavigate();
  const { donorId } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const res = await api.get(`/donors/${donorId}`);
        setSelectedDonor(res.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, [selectedDonor]);
  return (
    <div className="d-flex justify-content-center align-items-center">
      {selectedDonor ? (
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
              {selectedDonor.firstName} {selectedDonor.lastName}
            </h5>
            <p class="card-text">{selectedDonor.email}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">amount: {selectedDonor.amount}</li>
            <li class="list-group-item">country: {selectedDonor.country}</li>
            <li class="list-group-item">age: {selectedDonor.age}</li>
            <li class="list-group-item">method : {selectedDonor.method}</li>
          </ul>
          <div class="card-body">
            <Link
              className="btn btn-danger"
              onClick={() => {
                navigate(`/dashboard/${loggedAdmin}`);
              }}
            >
              back to dashboard
            </Link>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default DonorDetailes;
