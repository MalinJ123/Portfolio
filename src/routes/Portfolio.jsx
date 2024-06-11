import calender from "../images/portfolio/calernder.png";
import hangman from "../images/portfolio/hangman.png";
import pokemon from "../images/portfolio/pokemon.png";
import React, { useState, useEffect } from "react";
import "../styles/portfolio.css";

import hund1 from "../images/portfolio/hund1.jpg";
import hund2 from "../images/portfolio/hund2.jpg";
import hund3 from "../images/portfolio/hund3.jpg";

import katt1 from "../images/portfolio/katt1.jpg";
import katt2 from "../images/portfolio/katt2.jpg";
import katt3 from "../images/portfolio/katt3.jpg";


const portfolios = [
  {
    title: "Kalender app",
    images: [hund1, hund2, hund3],
    description: "description Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus beatae aspernatur saepe doloremque, accusantium dolores amet fuga laudantium odio quisquam explicabo rem blanditiis labore facilis perferendis quam nihil magnam.",
  },
  {
    title: "Andra app",
    images: [katt1, katt2, katt3],
    description: "description Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus beatae aspernatur saepe doloremque, accusantium dolores amet fuga laudantium odio quisquam explicabo rem blanditiis labore facilis perferendis quam nihil magnam.",
  },
  {
    title: "Tredje app",
    images:[hangman, pokemon, calender],
    description: "description Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus beatae aspernatur saepe doloremque, accusantium dolores amet fuga laudantium odio quisquam explicabo rem blanditiis labore facilis perferendis quam nihil magnam.",
  }
];

function Portfolio() {
  const [currentIndices, setCurrentIndices] = useState(new Array(portfolios.length).fill(0));

  useEffect(() => {
    portfolios.forEach((_, portfolioIndex) => {
      const card = document.querySelectorAll(".portfolio__container-card")[portfolioIndex];
      const images = card.querySelectorAll(".portfolio-img");
      showImage(images, currentIndices[portfolioIndex]);
    });
  }, [currentIndices]);

  function showImage(images, index) {
    images.forEach((img, i) => {
      if (i === index) {
        img.classList.remove("hidden");
      } else {
        img.classList.add("hidden");
      }
    });
  }

  function nextImage(event, portfolioIndex) {
    const images = event.target.parentNode.querySelectorAll(".portfolio-img");
    setCurrentIndices(prevIndices => {
      const newIndices = [...prevIndices];
      newIndices[portfolioIndex] = (prevIndices[portfolioIndex] + 1) % images.length;
      return newIndices;
    });
  }

  function prevImage(event, portfolioIndex) {
    const images = event.target.parentNode.querySelectorAll(".portfolio-img");
    setCurrentIndices(prevIndices => {
      const newIndices = [...prevIndices];
      newIndices[portfolioIndex] = (prevIndices[portfolioIndex] - 1 + images.length) % images.length;
      return newIndices;
    });
  }

  return (
    <section className="portfolio">
      <h2 className="portfolio-h2">Portfolio</h2>
      <div className="portfolio__container">
        {portfolios.map((portfolio, portfolioIndex) => (
          <div className="portfolio__container-card" key={portfolioIndex}>
            <h2 className="portfolio__card-title">{portfolio.title}</h2>
            <div className="portfolio-img-container">
              {portfolio.images.map((image, imageIndex) => (
                <img key={imageIndex} className="portfolio-img hidden" src={image} alt={portfolio.title} />
              ))}
              <button className="prev" onClick={(event) => prevImage(event, portfolioIndex)}>
                ❮
              </button>
              <button className="next" onClick={(event) => nextImage(event, portfolioIndex)}>
                ❯
              </button>
            </div>
            <p className="portfolio__card-description">{portfolio.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;