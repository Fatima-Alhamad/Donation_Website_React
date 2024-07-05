import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container p-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="myContent d-flex align-items-center">
              <img
                src="../spa-solid (1).svg"
                alt=""
                className="img-fluid logo"
              />
              <h1>Hope</h1>
            </div>
            <p>
              Ready to create a positive impact in the lives of Gaza's children?
              <br />
              You've come to the perfect place!
            </p>
            <Link to="/donate" type="button" className="btn btn-danger">
              Donate Now
            </Link>
          </div>
          <div className="col-12 col-md-3">
            <h4 id="Contact">Contact Us</h4>
            <div className="myContent d-flex align-items-center">
              <img
                src="images/location-dot-solid.svg"
                alt=""
                className="img-fluid icons"
              />
              <p>Lebanon</p>
            </div>

            <div className="myContent d-flex align-items-center">
              <img
                src="images/phone-solid.svg"
                alt=""
                className="img-fluid icons"
              />
              <p>+961 78 988 571</p>
            </div>

            <div className="myContent d-flex align-items-center">
              <img
                src="images/envelope-solid.svg"
                alt=""
                className="img-fluid icons"
              />
              <p>Fatima@gmail.com</p>
            </div>
          </div>
          <div className="col-12 col-md-3"></div>
        </div>
      </div>
      <div className="footerbottom text-center">
        <p>
          Copyright &copy;2024;Done by
          <span className="designer">Fatima</span>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
