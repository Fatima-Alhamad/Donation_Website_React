import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"

function Causes() {
  const [card, setCard] = useState([]);
  let info = [
    {
      ImageSrc: "../images/img3.avif",
      title: "Health and Nutrition",
      description:
        "Malnutrition rates are high. Donations provide nutritious meals,preventing long-term health issues. Medical supplies and vaccinations save lives.",
    },
    {
      ImageSrc: "../images/img2.jpg",
      title: "Childhood Interrupted",
      description:
        "Gaza's children have endured trauma, loss, and violence. Donations help restore their childhood. Support mental health services and safe spaces for healing.",
    },
    {
      ImageSrc: "../images/img5.jpg",
      title: "Humanitarian Crisis",
      description:
        "Gaza faces an ongoing humanitarian crisis due to conflict,displacement, and limited resources.Donations directly impact children's lives by providing food",
    },
  ];
  useEffect(() => {
    setCard(info);
  }, []);
  return (
    <div className="causes text-center mt-5">
      <h1 id="causesToDonate" data-aos="fade-up" data-aos-duration="500">
        <br />
        Causes
      </h1>
      <br />
      <p id="causesToDonate" data-aos="fade-up" data-aos-duration="500">
        Amidst the echoes of conflict, Gaza's children bear the weight of
        hardship.
      </p>
      <br />
      <div className="container">
        <div className="row">
          {card.map((ele) => (
            <div className="col-4 ">
              <div class="d-flex justify-content-center">
                <div class="imgHolder">
                  <img
                    src={`${ele.ImageSrc}`}
                    alt=""
                    className="img-fluid rounded-3 mt-3"
                  />
                </div>
              </div>
              <br />
              <h4>{ele.title}</h4>
              <br />
              <p>{ele.description}</p>
              <br />
              <Link to="/donate" type="button" className="btn btn-danger mb-5">
                Donate Now
              </Link>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Causes;
