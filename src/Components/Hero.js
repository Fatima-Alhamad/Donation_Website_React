import { Link } from "react-router-dom";
import "../App.css";
function Hero(){
    return(<div className="hero">
        <div className="container-fluid d-flex align-items-center mt-1">
        <div className="row">
          <div className="col col-12 col-md-9 col-sm-12">
            <h1 className="lh-md">
              Your donation can
              <span style={{"color": "#dc3545"}}> Rewrite</span> their story:<br />
              Create Opportunities for Gaza's Children
            </h1>
            <Link to="/donate" type="button" className="btn btn-danger"
              >Donate Now </Link>
          </div>
        </div>
      </div>
    </div>);
}   
export default Hero;       