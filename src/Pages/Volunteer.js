import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../Components/api";
import "../volunteer.css";
import { useState } from "react";
import "../PopUp.css";

function Volunteer() {
  let [trigger, setTrigger] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function submit(data) {
    const volunteer = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      age: data.age,
      country: data.country,
      major: data.major,
      hours: data.hours,
      field: data.field,
    };
    try {
      await api.post("/volunteers", volunteer);
      setTrigger(true);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="container-fluid  parent " id="parentContainerVolunteer">
      <div className="row d-flex justify-content-between  ">
        {!trigger ? (
          <div className="col-6 col-md-3 col-12 d-flex align-items-center mt-5">
            <div className="myContent position-relative ml-3 mt-5">
              <img
                src="images/handshake-angle-solid (1).svg"
                alt=""
                className="img-fluid handshake"
              />
              <h1 className="contentPara">
                Contributions <br />
                to Habitat htmlFor Humanity
              </h1>
              <p className="contentPara">
                In the heart of adversity, your time becomes Link lifeline.
                Volunteer htmlFor Gaza's children—be their hope, their mentor, their
                advocate.
              </p>
            </div>
          </div>
        ) : (
          ""
        )}

        {!trigger ? (
          <div
            className="col-12 col-md-5  volunteerForm mt-5 "
            data-aos="zoom-in"
          >
            <form
              className="p-3"
              id="volunteer"
              onSubmit={handleSubmit(submit)}
            >
              <h2 className="">Lets Volunteer!</h2>
              <div className="row mb-2">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    {...register("firstName", {
                      required: "* first name is required",
                    })}
                  />
                  <p className="fs-9 text-danger fw-light">
                    {errors.firstName ? errors.firstName.message : ""}
                  </p>
                </div>

                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    {...register("lastName", {
                      required: "* last name is required",
                    })}
                  />
                  <p className="fs-9 text-danger fw-light">
                    {errors.lastName ? errors.lastName.message : ""}
                  </p>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1Volunteer"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "* email address is required",
                    validate: (value) => {
                      if (!value.includes("@")) {
                        return "* email should includes @";
                      }
                    },
                  })}
                />
                <p className="fs-9 text-danger fw-light">
                  {errors.email ? errors.email.message : ""}
                </p>
              </div>

              <div className="row mb-2">
                <div className="col">
                  <label htmlFor="Age" className="form-label">
                    Age
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="18"
                    {...register("age", {
                      required: "* age is required",
                    })}
                  />
                  <p className="fs-9 text-danger fw-light">
                    {errors.age ? errors.age.message : ""}
                  </p>
                </div>
                <div className="col">
                  <label htmlFor="country" className="form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="syria"
                    {...register("country", {
                      required: "* country is required",
                    })}
                  />
                  <p className="fs-9 text-danger fw-light">
                    {errors.country ? errors.country.message : ""}
                  </p>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="Major" className="form-label">
                  Major
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Mojor"
                  placeholder="Write your Major"
                  {...register("major", {
                    required: "* major is required",
                  })}
                />
                <p className="fs-9 text-danger fw-light">
                  {errors.major ? errors.major.message : ""}
                </p>
              </div>

              <div className="mb-3">
                <label htmlFor="hours" className="form-label">
                  On average, how many hours per week would you be able to
                  volunteer with us?
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="hours"
                  placeholder=""
                  {...register("hours", {
                    required: "* hours are required",
                  })}
                />
                <p className="fs-9 text-danger fw-light">
                  {errors.hours ? errors.hours.message : ""}
                </p>
              </div>
              <label className="" htmlFor="">
                What is the field you want to volunteer in?
              </label>
              <br />
              <div className="mb-3">
                <select
                  {...register("field", {
                    required: "* field is required",
                  })}
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option>Open this select menu</option>
                  <option value="Event Organizers">Event Organizers</option>
                  <option value="Social Media Advocates">
                    Social Media Advocates
                  </option>
                  <option value="Healthcare Volunteers">
                    Healthcare Volunteers
                  </option>
                  <option value="Child Protection">Child Protection</option>
                </select>
                <p className="fs-9 text-danger fw-light">
                  {errors.field ? errors.field.message : ""}
                </p>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div className="popup">
            <div className="img-holder w-25 h-25 position-absolute top-0 start-50 translate-middle  rounded-circle text-center ">
              <img
                src="..\images\circle-check-regular.svg"
                alt="img"
                className="img-fluid w-50 h-100 bg-light rounded-circle"
              />
            </div>
            <div className="popupInner position-relative bg-red p-5 text-center ">
              <h4>Thank you!</h4>
              <p> your application was sent</p>
              <Link
                to={"/"}
                className="closeBtn position-absolute  bottom-0 start-50 translate-middle-x  btn btn-success mb-2"
              >
                back to home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Volunteer;
