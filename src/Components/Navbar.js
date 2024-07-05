import "../App.css";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  p-3  bg-body">
      <div className="container">
        <Link className="navbar-brand" to="#">
          <img
            src="../spa-solid (1).svg"
            alt="logo"
            className="img-fluid logo"
          />
          <span
            style={{ "font-family": "Roboto Slab", "font-weight": "600" }}
            className="mx-2"
          >
            Hope
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link  links" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
           
            <li className="nav-item">
              <NavLink className="nav-link links " to="/volunteer">
                Volunteer Now
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link links " to="/demonstrations">
                Demonstrations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link links " to="/contactUs">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
