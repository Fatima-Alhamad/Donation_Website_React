import "../App.css";
import { useForm } from "react-hook-form";
import api from "../Components/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [admins, setAdmins] = useState([]);
  const[loggedAdmin,setLoggedAdmin]=useState(null);
  const [authenError,setAuthenError]=useState("");
  const [authen,setAuthen]=useState("")
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    async function getData() {
      try {
        const res = await api.get("/admins");
        setAdmins(res.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, []);
  function submit(data) {
    localStorage.setItem("isLoggedIn", "false");
    let isLoggedIn = false;

    for (let i = 0; i < admins.length; i++) {
      if (
        data.email === admins[i].email &&
        data.password === admins[i].password
      ) {
        isLoggedIn = true;
        setLoggedAdmin(admins[i]);
        setAuthen("authentucating...");
      

        break;
      }
    }

    if (isLoggedIn) {
      localStorage.setItem("isLoggedIn", "true");
       if(admins.length>0 && loggedAdmin!==null){
        navigate(`/dashboard/${loggedAdmin.id}`);
       }
    } else {
      setAuthenError("incorrect email or password");
    }
  }

  return (
    <section
      className="h-100 gradient-form"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: "185px" }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1 hopeTeam">
                        Hope Team Only!
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit(submit)}>
                      <p>Please login to your account</p>

                      <div className=" mb-4">
                        <input
                          {...register("email", {
                            required: "email is required",
                            validate: (value) => {
                              if (!value.includes("@")) {
                                return "email should include @";
                              }
                            },
                          })}
                          type="text"
                          id="form2Example11"
                          className="form-control"
                          placeholder=" email address"
                        />
                        <p className="fs-9 text-danger fw-light">
                          {errors.email ? `* ${errors.email.message}` : ""}
                        </p>
                      </div>

                      <div data-mdb-input-init className=" mb-4">
                        <input
                          {...register("password", {
                            required: "password is required",
                            validate: (value) => {
                              if (value.length < 8) {
                                return "at least 8 characters";
                              }
                            },
                          })}
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="password"
                        />
                        <p className="fs-9 text-danger fw-light">
                          {errors.password
                            ? `* ${errors.password.message}`
                            : authen}
                        </p>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary  gradient-custom-2 mb-3 w-100"
                          type="submit"
                        >
                          Log in
                        </button>
                        <p className="fs-9 text-danger fw-light">{authenError?authenError:""}</p>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4 text-center">
                    <h4 className="mb-4 hopeTeam">HOPE TEAM</h4>
                    <div className="loginImg overflow-hidden">
                      <img
                        src="..\images\login2.jpg"
                        className="img-fluid "
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
