import working from "../images/me-working.jpg";
import me from "../images/me.jpg"
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
      <section className="about">
        <div className="about__container">
          <img className="img" src={me} alt="" />
        </div>
        <div className="about__container">
          <h1>Abolut Me</h1>
          <article>
            Under min yrkesresa insåg jag mitt intresse för IT och
            webbutveckling. Detta ledde mig till min pågående utbildning som
            Frontend-utvecklare. Där jag fokuserar på att fördjupa mina
            kunskaper inom UI/UX, HTML, CSS, JavaScript, React, +
            Backend-utveckling med Node.js, AWS, Firebase, MongoDb etc
          </article>

          <nav>Skills</nav>
          <nav>Experience</nav>
          <nav>Education</nav>

          <article>
           <div>
           <h5>UI/UX </h5>
            <p>Designing Web/app interfaces</p>
            
            <div>
            <h5>Frontend Develpment</h5>
            <p>HTML, CSS, JavaScript, React, TypeScript, Node.js, Responsive Design, Git, Npm package</p>
            
            </div>
           </div>
          </article>
        </div>
      </section>
    </>
  );
}
export default Start;
