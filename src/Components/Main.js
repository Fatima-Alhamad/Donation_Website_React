import "../App.css";
function Main() {
  return (
    <div className="main mb-5">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col col-12 col-md-8 myContent mt-5">
            <p className="about">About Us</p>
            <br />
            <h1>
              Connect non-profits,
              <br />
              Donors,and businesses <br />
              from all over the world.
            </h1>
            <br />
            <p className="para">
              As a compassionate non-profit organization, we are the bridge
              <br />
              between hearts and hope. Our mission? Empowering Gaza's <br />
              children—those resilient souls who dance amidst the rubble, whose
              <br />
              laughter echoes through the chaos. We believe in transforming
              <br />
              vulnerability into opportunity
            </p>
          </div>
          <div className="col col-12 col-md-4 pic shadow mt-5 ">
            <img
              src="../images/soulofthesoul2.jpg_large"
              alt=""
              className="img-fluid soul my-0 mx-0 "

            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
