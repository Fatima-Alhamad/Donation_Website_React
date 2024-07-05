import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../Components/api";
import "../donation.css";
import { useState } from "react";
import "../PopUp.css";

function Donate() {
  let [trigger, setTrigger] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function submit(data) {
    const donor = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      age: data.age,
      country: data.country,
      amount: data.amount,
      method: data.method,
    };
    try {
      await api.post("/donors", donor);
      setTrigger(true);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="container-fluid d-flex justify-content-between parentd " id="parentContainerVolunteer">
      <div className="row d-flex justify-content-between  ">
        {!trigger ? (
          <div className="col-6 col-md-4 col-12 d-flex align-items-center mt-5 mx-3">
            <div className="myContent position-relative ml-3 mt-5">
              <img
                src="images/handshake-angle-solid (1).svg"
                alt=""
                className="img-fluid handshake"
              />
               <h1 className="contentPara">
                Absolutely!<br />
                Let's ignite change by donating to Gaza!
              </h1>
              <p className="contentPara">
                Your donation can be a beacon of hope for Gaza's children,
                lighting up their futures with education, healthcare, and love
              </p>
            </div>
          </div>
        ) : (
          ""
        )}

        {!trigger ? (
          <div
            className="col-12 col-md-4  donationForm mt-5 mx-3 "
            data-aos="zoom-in"
          >
            <form className="p-3 text-light" id="Donate" onSubmit={handleSubmit(submit)}>
              <h2 className="">Lets Donate!</h2>
              <div className="row mb-2">
                <label for="name" className="form-label">
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
                <label for="exampleInputEmail1" className="form-label">
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
                  <label for="Age" className="form-label">
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
                  <label for="country" className="form-label">
                    Country
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Syria"
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
                <label for="amount" className="form-label">
                  Amount
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="amount"
                  placeholder=""
                  {...register("amount", {
                    required: "* amount are required",
                  })}
                />
                <p className="fs-9 text-danger fw-light">
                  {errors.amount ? errors.amount.message : ""}
                </p>
              </div>
              <label for="method" className="form-label">
                Payment method
              </label>
              <br />
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="paypal"
                  {...register("method", {
                    required: "payment method is required",
                  })}
                />
                <label class="form-check-label" for="inlineRadio1">
                  Paypal
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="credit card"
                  value="credit card"
                  {...register("method", {
                    required: "payment method is required",
                  })}
                />
                <label class="form-check-label" for="inlineRadio2">
                  Credit card
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="payoneer"
                  value="payoneer"
                  {...register("method", {
                    required: "payment method is required",
                  })}
                />
                <label class="form-check-label" for="inlineRadio2">
                  Payoneer
                </label>
              </div>{" "}
              <br />
              <button type="submit" className="btn btn-danger mt-3">
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div className="popupD text-light">
            <div className="img-holder w-25 h-25 position-absolute top-0 start-50 translate-middle  rounded-circle text-center ">
              <img
                src="..\images\red.svg"
                alt="img"
                className="img-fluid w-50 h-100 bg-light rounded-circle"
              />
            </div>
            <div className="popupInner position-relative  p-5 text-center ">
              <h4>Thank you!</h4>
              <p> your Support was received</p>
              <Link
                to={"/"}
                className="closeBtn position-absolute  bottom-0 start-50 translate-middle-x  btn btn-danger mb-2"
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

export default Donate;
