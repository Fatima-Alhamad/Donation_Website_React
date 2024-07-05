import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import api from "../../Components/api";
import { useNavigate } from "react-router-dom";

function EditDemo({ loggedAdmin }) {
  const [selectedDemo, setSelectedDemo] = useState(null);
  const { demoId } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  useEffect(() => {
    async function getData() {
      try {
        const res = await api.get(`/demonstrations/${demoId}`);
        const data = res.data;
        setSelectedDemo(data);
        setValue("title", data.title);
        setValue("description", data.description);
        setValue("location", data.location);
        setValue("admin", data.admin);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, [demoId]);
  async function submit(data) {
    const editedDemo = {
      ImageSrc: selectedDemo.ImageSrc,
      title: data.title,
      description: data.description,
      location: data.location,
      admin: data.admin,
      date: data.date,
      time: data.time,
      Participants: selectedDemo.Participants,
    };
    try {
      await api.put(`/demonstrations/${demoId}`, editedDemo);
      navigate(`/dashboard/${loggedAdmin}`);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="container">
      {selectedDemo ? (
        <form
          className="row g-3 p-5 Participate rounded-3 mt-5"
          onSubmit={handleSubmit(submit)}
        >
          <h4>
            Edit Demonstration{" "}
            <span className="text-danger">{selectedDemo.title}</span>
          </h4>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              {...register("title", {
                required: "* title is required",
              })}
            />
            <p className="fs-9 text-danger fw-light">
              {errors.title ? errors.title.message : ""}
            </p>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Admin
            </label>
            <input
              type="text"
              className="form-control"
              {...register("admin", {
                required: "* admin is required",
              })}
            />
            <p className="fs-9 text-danger fw-light">
              {errors.admin ? errors.admin.message : ""}
            </p>
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              description
            </label>
            <input
              type="text"
              className="form-control"
              {...register("description", {
                required: "* description is required",
              })}
            />
            <p className="fs-9 text-danger fw-light">
              {errors.description ? errors.description.message : ""}
            </p>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputEmail4" className="form-label">
              location
            </label>
            <input
              type="text"
              className="form-control"
              {...register("location", {
                required: "* location is required",
              })}
            />
            <p className="fs-9 text-danger fw-light">
              {errors.location ? errors.location.message : ""}
            </p>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputPassword4" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              {...register("date", {
                required: "* date is required",
              })}
            />
            <p className="fs-9 text-danger fw-light">
              {errors.date ? errors.date.message : ""}
            </p>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputPassword4" className="form-label">
              Time
            </label>
            <input
              type="time"
              className="form-control"
              {...register("time", {
                required: "* time is required",
              })}
            />
            <p className="fs-9 text-danger fw-light">
              {errors.time ? errors.time.message : ""}
            </p>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-danger">
              Edit
            </button>
          </div>
        </form>
      ) : (
        <div className="alert alert-info">Loading..</div>
      )}
    </div>
  );
}

export default EditDemo;
