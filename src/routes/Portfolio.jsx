import React, { useState, useEffect } from "react";
import calender from "../images/portfolio/calernder.png";
import hangman from "../images/portfolio/hangman.png";
import pokemon from "../images/portfolio/pokemon.png";
import "../styles/portfolio.css";

function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    document.querySelectorAll(".portfolio__container-card").forEach((card) => {
      const images = card.querySelectorAll(".portfolio-img");
      showImage(images, currentIndex);
    });
  }, [currentIndex]);

  function showImage(images, index) {
    images.forEach((img, idx) => {
      img.classList.toggle("hidden", idx !== index);
    });
  }

  function nextImage() {
    setCurrentIndex((currentIndex) => {
      if (currentIndex === 2) {
        return 0;
      }
      return currentIndex + 1;
    });
  }

  function prevImage() {
    setCurrentIndex((currentIndex) => {
      if (currentIndex === 0) {
        return 2;
      }
      return currentIndex - 1;
    });
  }

  return (
    <section className="portfolio">
      <h2 className="portfolio-h2">Portfolio</h2>
      <div className="portfolio__container">
        <div className="portfolio__container-card">
          <h2 className="portfolio__card-title">Kalender app</h2>
          <div className="portfolio-img-container">
            <img className="portfolio-img" src={calender} alt="calender" />
            <img className="portfolio-img hidden" src={hangman} alt="hangman" />
            <img className="portfolio-img hidden" src={pokemon} alt="pokemon" />
            <button className="prev" onClick={prevImage}>
              ❮
            </button>
            <button className="next" onClick={nextImage}>
              ❯
            </button>
          </div>
          <p className ="portfolio__card-description">This calender app was made from 
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet dicta vitae repellendus adipisci explicabo, qui commodi reiciendis reprehenderit perspiciatis aut velit consequuntur odit repudiandae, provident accusamus aperiam. Velit, minima suscipit. </p>
        
        </div>


        <div className="portfolio__container-card">
          <h2 className="portfolio__card-title">Kalender app</h2>
          <div className="portfolio-img-container">
            <img className="portfolio-img" src={calender} alt="calender" />
            <img className="portfolio-img hidden" src={hangman} alt="hangman" />
            <img className="portfolio-img hidden" src={pokemon} alt="pokemon" />
            <button className="prev" onClick={prevImage}>
              ❮
            </button>
            <button className="next" onClick={nextImage}>
              ❯
            </button>
          </div>
          <p className ="portfolio__card-description">This calender app was made from 
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet dicta vitae repellendus adipisci explicabo, qui commodi reiciendis reprehenderit perspiciatis aut velit consequuntur odit repudiandae, provident accusamus aperiam. Velit, minima suscipit. </p>
        
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
