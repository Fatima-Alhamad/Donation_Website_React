import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function DemoCards({ demo }) {
  let [participants, setParticipants] = useState(0);
  useEffect(() => {
    if (demo && demo.Participants && demo.Participants.length > 0) {
      setParticipants(demo.Participants.length);
    } else {
      setParticipants(0);
    }
  }, [demo.Participants]);
  return (
    <div>
      <div className="card demoContainer " style={{ width: "18rem" }}>
        <img
          src={demo.ImageSrc}
          className="card-img-top img-fluid "
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{demo.title}</h5>
          <p className="card-text">{demo.description}</p>
          <div className="container-fluid">
            <div className="row my-3 ">
              <div className="col-8" style={{ marginTop: "40px" }}>
                {" "}
                <img
                  src="images/calendar-days-regular.svg"
                  alt=""
                  className="img-fluid demoImgs "
                />
                <p className=" demopara ">
                  {demo.date} <br />
                  {demo.time}
                </p>
              </div>
              <div className="col-4 d-flex align-items-center">
             
                <img
                  src="images/location-dot-solidred.svg"
                  alt=""
                  className="img-fluid demoImgs "
                />
                <p className=" demopara">{demo.location}</p>
               

              </div>
             
             

            </div>
          </div>
          <div className="row">
            <div className="col-6"><Link
            to={`/participate/${demo.id}`}
            className="btn btn-danger rounded-pill mx-auto"
          >
            Participate
          </Link></div>
          <div className="col-6">
          <div className="row d-flex  justify-content-start gap-0">
              
              <div className="col-1 SBiconD text-end"><img src="../images/hand-fist-solid.svg" alt="img" className="img-fluid "/></div>
              <div className="col-1 lh-lg text-start Dcontent">{participants}</div>
                
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoCards;
