import me from "../images/me.jpg";
import { useState } from "react";
import "../styles/about.css";
function About(){
    const [activeTab, setActiveTab] = useState("Skills");

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
    return(
        <>
          <section className="about">
          <img className="about__img" src={me} alt="Picture of Malin" />

          <div className="about__container">
            <article className="about__container--description">
              <h1 className="about__container--title">About Me</h1>
              During my career journey, I realized my interest in IT and web
              development. This led me to pursue my ongoing education as a
              Frontend Developer, where I focus on deepening my skills in UI/UX,
              HTML, CSS, JavaScript, React. <br />
              And development with Node.js, Next.js AWS, Firebase, MongoDB, etc
            </article>

            <div className="about__container--nav">
              <nav
                className={`navbar ${activeTab === "Skills" ? "active" : ""}`}
                onClick={() => handleTabClick("Skills")}
              >
                Skills
              </nav>

              <nav
                className={`navbar ${
                  activeTab === "Experience" ? "active" : ""
                }`}
                onClick={() => handleTabClick("Experience")}
              >
                Experience
              </nav>

              <nav
                className={`navbar ${
                  activeTab === "Education" ? "active" : ""
                }`}
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
                    Designing Web/app interfaces, figma, adobe XD,
                  </p>

                  <h5 className="nav__description--title">
                    Frontend Develpment
                  </h5>
                  <ul className="nav__description--text">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Node.js</li>
                    <li>Responsive Design</li>
                    <li>Git</li>
                    <li>Npm package</li>
                  </ul>
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
                    Cloud platforms & Internet of things. AI & Cognitive
                    service, Agile Development{" "}
                  </p>
                </div>
              )}
            </article>
          </div>
        </section></>
    )
} export default About; 