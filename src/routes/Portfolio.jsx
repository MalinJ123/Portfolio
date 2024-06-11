import React, { useState, useEffect } from "react";
// import calender from "../images/portfolio/calernder.png";
import hangman from "../images/portfolio/hangman.png";
import pokemon from "../images/portfolio/pokemon.png";
import "../styles/portfolio.css";

import hund1 from "../images/portfolio/hund1.jpg";
import hund2 from "../images/portfolio/hund2.jpg";
import hund3 from "../images/portfolio/hund3.jpg";




function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    document.querySelectorAll(".portfolio__container-card").forEach((card) => {
      const images = card.querySelectorAll(".portfolio-img");
      showImage(images, currentIndex);
    });
  }, [currentIndex]);

  function showImage(images, index) {
    images.forEach((img, i) => {
      if (i === index) {
        img.classList.remove("hidden");
      } else {
        img.classList.add("hidden");
      }
    });
  }

  function nextImage(event) {
    const images = event.target.parentNode.querySelectorAll(".portfolio-img");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function prevImage(event) {
    const images = event.target.parentNode.querySelectorAll(".portfolio-img");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  return (
    <section className="portfolio">
      <h2 className="portfolio-h2">Portfolio</h2>
      <div className="portfolio__container">
        <div className="portfolio__container-card">
          <h2 className="portfolio__card-title">Kalender app</h2>
          <div className="portfolio-img-container">
          
            <img className="portfolio-img hidden" src={hund1} alt="hangman" />
            <img className="portfolio-img hidden" src={hund2} alt="pokemon" />
            <img className="portfolio-img hidden" src={hund3} alt="pokemon" />
            <button className="prev" onClick={prevImage}>
              ❮
            </button>
            <button className="next" onClick={nextImage}>
              ❯
            </button>
          </div>
          <p className="portfolio__card-description">description Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus beatae aspernatur saepe doloremque, accusantium dolores amet fuga laudantium odio quisquam explicabo rem blanditiis labore facilis perferendis quam nihil magnam.</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

