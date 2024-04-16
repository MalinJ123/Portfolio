import working from "../images/me-working.jpg";
import me from "../images/me.jpg";
import "../styles/start.css";
import { useState } from "react";
function Start() {
  const [activeTab, setActiveTab] = useState("Skills");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
      <section className="about">
        <div className="about__container">
          <img className="img" src={me} alt="" />
        </div>

        <div className="about__container">
          <article className="about__container--description">
            <h1 className="about__container--title">Abolut Me</h1>
            Under min yrkesresa insåg jag mitt intresse för IT och
            webbutveckling. Detta ledde mig till min pågående utbildning som
            Frontend-utvecklare. Där jag fokuserar på att fördjupa mina
            kunskaper inom UI/UX, HTML, CSS, JavaScript, React, +
            Backend-utveckling med Node.js, AWS, Firebase, MongoDb etc
          </article>
          <div className="about__container--nav">
            <nav
              className={`navbar ${activeTab === "Skills" ? "active" : ""}`}
              onClick={() => handleTabClick("Skills")}
            >
              Skills
            </nav>

            <nav
              className={`navbar ${activeTab === "Experience" ? "active" : ""}`}
              onClick={() => handleTabClick("Experience")}
            >
              Experience
            </nav>

            <nav
              className={`navbar ${activeTab === "Education" ? "active" : ""}`}
            onClick={()=> handleTabClick("Education")}>
              Education
            </nav>
          </div>

          <article className="nav__description--container">
            {activeTab === "Skills" && (<div>
              <h5 className="nav__description--title"> UI/UX </h5>
              <p>Designing Web/app interfaces</p>

              <h5 className="nav__description--title">Frontend Develpment</h5>
              <p>
                HTML, CSS, JavaScript, React, TypeScript, Node.js, Responsive
                Design, Git, Npm package
              </p>
            </div>)}
            {activeTab === "Experience" && (
               <div>
               <h5 className="nav__description--title">Experience</h5>
               <p>Your experience details here...</p>
             </div>
            )}

            {activeTab === "Education" && (
               <div>
               <h5 className="nav__description--title">Education</h5>
               <p>Your education details here...</p>
             </div>
            )}
            
          </article>
        </div>
      </section>
    </>
  );
}
export default Start;
