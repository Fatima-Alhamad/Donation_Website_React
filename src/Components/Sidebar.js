import React, { useEffect, useState } from "react";
import "../App.css";
import api from "./api";
import { Link, NavLink } from "react-router-dom";
import Logout from "../Pages/Logout";

function Sidebar({ id ,handleActiveOption}) {
  const [loggedAdmin, setLoggedAdmin] = useState(null);
  function activeOption(option){
    handleActiveOption(option);
  }
  useEffect(() => {
    async function getData() {
      try {
        const res = await api.get(`/admins/${id}`);
        const data = res.data;
        setLoggedAdmin(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  return (
    <div className="Sidebar mx-0  position-relative ">
      {loggedAdmin !== null ? (
        <div className="container ">
          <div className="d-md-block d-none">
          <div className="user mx-2">
            <div className="imgHolderSB rounded-circle overflow-hidden  text-center  ">
              <img src={loggedAdmin.img} alt="img" className="img-fluid " />
            </div>
            <div className="adminName">
              <h4 className="fs-9 text-light loggedAdminName mt-1">
                {loggedAdmin.name}
              </h4>
            </div>
          </div>
          </div>
          <div className="SidebarContent mt-3">
            <ul className="w-100 p-0">
              <li className="container" onClick={()=>activeOption('volunteers')}>
                <div className="row w-100 lh-lg mt-3 p-2">
                  <div className="SBicon  col-md-4  col-12 lh-sm  d-hidden d-md-flex">
                    <img
                      src="../images/people-group-solid.svg"
                      alt="img"
                      className="img-fluid "
                    />
                  </div>
                  <div className="SBcontent flex-70 col-8">
                    <NavLink
                      to={""}
                      className="text-decoration-none fs-md-6 text-light lh-lg d-md-block d-none"
                    >
                      Volunteers
                    </NavLink>
                  </div>
                </div>
              </li>
              <li className="container"  onClick={()=>activeOption('donations')}>
                <div className="row w-100 lh-lg mt-3 p-2">
                  <div className="SBicon  col-md-4  col-12 lh-sm d-block  ">
                    <img
                      src="../images/hand-holding-heart-solid.svg"
                      alt="img"
                      className="img-fluid "
                    />
                  </div>
                  <div className="SBcontent flex-70 col-8 ">
                    <NavLink
                      to={""}
                      className="text-decoration-none fs-md-6 text-light lh-lg d-md-block d-none"
                    >
                      Donations
                    </NavLink>
                  </div>
                </div>
              </li>
              <li className="container" onClick={()=>activeOption('demonstrations')}>
                <div className="row w-100 lh-lg mt-3 p-2">
                  <div className="SBicon  col-md-4 col-12 lh-sm ">
                    <img
                      src="../images/hand-fist-solid.svg"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="SBcontent flex-70 col-8">
                    <NavLink
                      to={""}
                      className="text-decoration-none fs-md-6 text-light lh-lg d-md-block d-none "
                    >
                      Demonstrations
                    </NavLink>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="logout mx-2 d-flex justify-content-around align-items-center position-absolute bottom-0 start-0">
            <div className="imgContSB rounded-circle overflow-hidden  text-center lh-sm h-40 d-md-block d-none ">
              <img src={loggedAdmin.img} alt="img" className="img-fluid  " />
            </div>
            <div className="adminName align-self-center d-grid ">
              <NavLink
                to={"/logout"}
                className="text-decoration-none fs-6 text-light lh-lg"
              >
                Logout
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default Sidebar;
