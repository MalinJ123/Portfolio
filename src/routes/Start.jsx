import working from "../images/me-working.jpg";
import "../styles/start.css";
function Start() {
  return (
    <>
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
          <img src={working} className="hero-img" alt="When i'm programming" />
        </div>
      </section>
    </>
  );
}
export default Start;
