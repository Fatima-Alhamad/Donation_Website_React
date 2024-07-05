import { useState,useEffect } from "react";
import "../App.css"
function CardParent() {
  const [card, setCard] = useState([]);
  let info = [
     {
      ImageSrc: "/images/wheat-awn-solid.svg",
      title: "Nutrition and Food Security",
      description:
        "Supply nutritious meals to combat malnutrition. Distribute food packages especially during emergencies",
    },
    {
      ImageSrc: "/images/suitcase-medical-solid.svg",
      title: "Healthcare and Medical Aid",
      description:
        "Ensure access to medical care, vaccinations, and essential medicines. Equip hospitals and clinics to serve children's health needs",
    },
    {
      ImageSrc: "/images/tents-solid.svg",
      title: "Shelter and Safety",
      description:
        "Provide emergency shelters and housing for displaced families. Ensure access to clean water, sanitation, and hygiene facilities",
    },
  ];
  useEffect(()=>{setCard(info);},[])
  return( <div className="card mt-5">
    <div className="container">
    <div className="row ">
        {card.map((ele)=>(<div className="col-4 ">
            <div class="d-flex justify-content-center p-2">
              <div class="imgHolder ">
                <img src={`${ele.ImageSrc}`} alt="" />
              </div>
            </div>
            <br />
            <h4>{ele.title}</h4>
            <br />
            <p>
              {ele.description}
            </p>
            <br />
        </div>))
        }
    </div>
  </div>
  </div>
   ) ;
}
export default CardParent;
