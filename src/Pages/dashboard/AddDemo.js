import React from 'react'
import { useForm } from 'react-hook-form'
import api from '../../Components/api';
import { useNavigate } from 'react-router-dom';

function AddDemo({loggedAdmin}) {
    const navigate=useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm();
    async function submit(data){
        let newDemo={
            ImageSrc:"../images/pro3.jpg",
            title:data.title,
            admin:data.admin,
            description:data.description,
            location:data.location,
            date:data.date,
            time:data.time,
            Participants:[]
        }
        try{
           await api.post("/demonstrations",newDemo);
           navigate(`/dashboard/${loggedAdmin}`);
        }
        catch(error){
            console.log(error.message);
        }
    }

  return (
    <div>
       <form className="row g-3 p-5 Participate rounded-3 mt-5 mx-5" onSubmit={handleSubmit(submit)}>
          <h4>
            Add Demonstration
            
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
            <label htmlFor="inputEmail4" className="form-label" >
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
              Add
            </button>
          </div>
        </form>
    </div>
  )
}

export default AddDemo
