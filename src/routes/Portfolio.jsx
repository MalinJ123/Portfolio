import calender from "../images/portfolio/calernder.png";
import hangman from "../images/portfolio/hangman.png";
import pokemon from "../images/portfolio/pokemon.png";

import "../styles/portfolio.css";

function Portfolio(){

    return(
        <>
          <section className="portfolio">
          <h2 className="portfolio-h2">Portfolio</h2>

          {/* start of portfolio cards */}
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
    )
} export default Portfolio;