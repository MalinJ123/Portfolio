import working from "../images/me-working.jpg";
import me from "../images/me.jpg";
import "../styles/start.css";
import { useState } from "react";
import calender from "../images/portfolio/calernder.png"
import hangman from "../images/portfolio/hangman.png"
import pokemon from "../images/portfolio/pokemon.png"

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
            <h1 className="about__container--title">About Me</h1>
            During my career journey, I realized my interest in IT and web
            development. This led me to pursue my ongoing education as a
            Frontend Developer, where I focus on deepening my skills in UI/UX,
            HTML, CSS, JavaScript, React, and backend development with Node.js,
            Next.js AWS, Firebase, MongoDB, etc
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
              onClick={() => handleTabClick("Education")}
            >
              Education
            </nav>
          </div>

          <article className="nav__description--container">
            {activeTab === "Skills" && (
              <div>
                <h5 className="nav__description--title"> UI/UX </h5>
                <p className="nav__description--text">
                  Designing Web/app interfaces
                </p>

                <h5 className="nav__description--title">Frontend Develpment</h5>
                <p className="nav__description--text">
                  HTML, CSS, JavaScript, React, TypeScript, Node.js, Responsive
                  Design, Git, Npm package
                </p>
              </div>
            )}
            {activeTab === "Experience" && (
              <div>
                <h5 className="nav__description--title">2016 - 2021</h5>
                <p className="nav__description--text">
                  Bränslepumpsmontör - Albin Komponents
                </p>
                <h5 className="nav__description--title">2015 </h5>
                <p className="nav__description--text">
                  Nightreceptionist - Langly, Caribbean ( 6 months )
                </p>

                <h5 className="nav__description--title">Other merits </h5>
                <ul className="nav__description--text">
                  <ol>B Driver's license and access to car</ol>
                  <ol>Truck license A1 - A4, B1 - B3</ol>
                  <ol>Cash register</ol>
                </ul>
              </div>
            )}

            {activeTab === "Education" && (
              <div>
                <h5 className="nav__description--title">2022 - 2024</h5>
                <p className="nav__description--text">
                  Frontend Developer - HTML, CSS, JavaScript, React, MUI,
                  Node.js, Next.js and lots more
                </p>
                <h5 className="nav__description--title">2021 - 2022</h5>
                <p className="nav__description--text">
                  .Net Fundamental - C# Fundamentals, Web development, Design,
                  Cloud platforms & Internet of things. AI & Cognitive service,
                  Agile Development{" "}
                </p>
              </div>
            )}
          </article>
        </div>
      </section>
       <section className="portfolio">
       
           <h2 className="">Portfolio</h2>
          <div className="portfolio__container">

            <div className="portfolio__container-card">
              <h2> hej</h2>
              <img className="portfolio-img" src={calender} alt="" />
              <p>description</p>
            </div>

            <div className="portfolio__container-card">
            <h2> hej</h2>
              <img className="portfolio-img" src={pokemon} alt="" />
              <p>description</p>
            </div>

            <div className="portfolio__container-card">
            <h2> hej</h2>
              <img className="portfolio-img" src={hangman} alt="" />
              <p>description</p>
          </div>
          <div className="portfolio__container-card">
              <h2> hej</h2>
              <img className="portfolio-img" src={calender} alt="" />
              <p>description</p>
            </div>

            <div className="portfolio__container-card">
            <h2> hej</h2>
              <img className="portfolio-img" src={pokemon} alt="" />
              <p>description</p>
            </div>
            

          </div>
       </section>
    </>
  );
}
export default Start;
