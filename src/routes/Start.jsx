import working from "../images/me-working.jpg";
// import me from "../images/me.jpg";
import "../styles/start.css";
// import { useState } from "react";


function Start() {


  return (
    <>
      <body>
        <section className="wrapper">
          <div className="wrapper__container">
            <div className="wrapper__containe">
              <h4>Frontend Developer</h4>
              <h1>
                Hi, I'm <span className="green">Malin</span>
              </h1>
              <h1>From Sweden, Karlstad</h1>
            </div>

            <div className="wrapper__container-button-container">
              <button className="wrapper__container-button">
                More Information
              </button>
            </div>
          </div>

          <div className="wrapper__container">
            <img
              src={working}
              className="hero-img"
              alt="When i'm programming"
            />
          </div>
        </section>
      
      
      </body>
    </>
  );
}
export default Start;
