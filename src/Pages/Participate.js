import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import api from "../Components/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Participate() {
  const { demoId } = useParams();
  const [selectedDemo, setSelectedDemo] = useState("");
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function submit(data) {
    const newParticipant = {
      fullName: data.fullName,
      email: data.email,
    };
    let updatedSelectedDemo={
      ImageSrc: selectedDemo.ImageSrc,
      title:selectedDemo.title,
      description: selectedDemo.description,
      location: selectedDemo.location,
      admin: selectedDemo.admin,
      id: selectedDemo.id,
      time: selectedDemo.time,
      hour: selectedDemo.hour,
      Participants: [...selectedDemo.Participants,newParticipant]
    }

    try {
      await api.put(`/demonstrations/${demoId}`,updatedSelectedDemo);
      setSelectedDemo(updatedSelectedDemo);
      navigate("/demonstrations")
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    async function getData() {
      const res = await api.get(`/demonstrations/${demoId}`);
      const data = res.data;
      setSelectedDemo(data);
    }
    getData();
  }, [selectedDemo]);

  return (
    <div className="container w-100">
      <div className="row w-100">
        <div className="col-12 col-md-8   mt-5 ">
          <div className="card w-50" style={{ width: " 18rem" }}>
            <img src={selectedDemo.ImageSrc} className="img-fluid" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{selectedDemo.title}</h4>
              <h6 className="card-title">
                Organized by : {selectedDemo.admin}
              </h6>
              <p className="card-text">{selectedDemo.description}</p>
              <h6 className="card-text">
                Location:
                {selectedDemo.location}
              </h6>
              <h6 className="card-text">
                Time:
                {selectedDemo.date} / {selectedDemo.time}
              </h6>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mt-5">
          <form
            className="Participate p-5 rounded-3"
            onSubmit={handleSubmit(submit)}
          >
            <h5>
              Raise your voice for Gaza ; your silence only amplifies their
              suffering
            </h5>
            <br />
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id=""
                placeholder="Full Name"
                {...register("fullName", {
                  required: "* name is required",
                })}
              />
              <label> Full Name</label>
              <p className="fs-9 text-danger fw-light">
                {errors.fullName ? errors.fullName.message : ""}
              </p>
            </div>
            <div className="form-floating ">
              <input
                type="text"
                className="form-control"
                id=""
                placeholder="name@example.com"
                {...register("email", {
                  required: "* email address is required",
                  validate: (value) => {
                    if (!value.includes("@")) {
                      return "* email should includes @";
                    }
                  },
                })}
              />
              <label>Email address</label>
              <p className="fs-9 text-danger fw-light">
                {errors.email ? errors.email.message : ""}
              </p>
            </div>
            <br />
            <button type="submit" className="btn btn-danger mt-3">
              Participate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Participate;

