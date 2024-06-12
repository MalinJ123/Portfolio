import React, { useState, useEffect } from "react";
import "../styles/portfolio.css";

import firefly1 from "../images/portfolio/firefly/firefly1.png";
import firefly2 from "../images/portfolio/firefly/firefly2.png";
import firefly3 from "../images/portfolio/firefly/firefly3.png";
import firefly from "../images/portfolio/firefly/firefly.png";

import alberto1 from "../images/portfolio/albertos/alberto1.png";
import alberto2 from "../images/portfolio/albertos/alberto2.png";
import alberto3 from "../images/portfolio/albertos/alberto3.png";
import albertosskiss from "../images/portfolio/albertos/alberto4.png";

import betterwebb from "../images/portfolio/betterwebb/battrewebb.png";
import betterstart from "../images/portfolio/betterwebb/betterstart.png";
import info from "../images/portfolio/betterwebb/info.png";
import info2 from "../images/portfolio/betterwebb/info2.png";



import m1 from "../images/portfolio/middags/m1.png";
import m2 from "../images/portfolio/middags/m2.png";
import m3 from "../images/portfolio/middags/m3.png";

import summer1 from "../images/portfolio/summer/summer1.png";
import summer2 from "../images/portfolio/summer/summer2.png";
import summer3 from "../images/portfolio/summer/summer3.png";
import summer4 from "../images/portfolio/summer/summer4.png";

const portfolios = [
  {
    title: "firefly app",
    images: [firefly1, firefly2, firefly3, firefly],
    description:
      "Firefly is my design based on the collected user data for a prototype second-hand app in 2022.",
  },
  {
    title: "Albertos Resturang app",
    images: [alberto1, alberto2, alberto3, albertosskiss],
    description:
      "Alberto is my design based on the collected user data for a prototype restaurant app in 2022.",
  },
  {
    title: "Betterwebb",
    images: [betterwebb, betterstart, info, info2],
    description:
      "This is me THEN pushing myself to the next level. Betterwebb is my design for a seminarium app in 2022.",
  },
];

const apps = [
  {
    title: "Middagshörnan",
    images: [m1, m2, m3],
    description: "This is a fictional restaurant built with React that includes the following functionalities , professional appearance,  menu display, total order price, form validation, responsive design, a login ( username: admin, password: mums), where you can add, delete and edit dishes.",
    link: "https://malinj123.github.io/MegaTurtles/", 
  },
  {
    title: "Sommar app",
    images:[summer1, summer2, summer3, summer4],
    description: "For this project, I developed an online webshop using an API to market summer toys. Design wasn't the primary focus, I prioritized implementing functionality. The platform accommodates two user types: customers and administrators. Key features include robust search capabilities, sortable products by name and price, and comprehensive cart functionality allowing users to add, remove, and edit items, while displaying the total price accurately. Responsive design, a login ( username: admin, password: password), where you can add, delete and edit dishes.",
    link : "https://main--exquisite-taiyaki-f6b45b.netlify.app/#/",
  }
];

function Portfolio() {
  const [currentIndices, setCurrentIndices] = useState(
    new Array(portfolios.length).fill(0)
  );
  const [currentAppIndices, setCurrentAppIndices] = useState(
    new Array(apps.length).fill(0)
  );

  useEffect(() => {
    portfolios.forEach((_, portfolioIndex) => {
      const card = document.querySelectorAll(".portfolio__container-card")[
        portfolioIndex
      ];
      const images = card.querySelectorAll(".portfolio-img");
      showImage(images, currentIndices[portfolioIndex]);
    });
  }, [currentIndices]);


  useEffect(() => {
    apps.forEach((_, appIndex) => {
      const card = document.querySelectorAll(".apps__container-card")[appIndex];
      const images = card.querySelectorAll(".apps-img");
      showImage(images, currentAppIndices[appIndex]);
    });
  }, [currentAppIndices]);


  function showImage(images, index) {
    images.forEach((img, i) => {
      if (i === index) {
        img.classList.remove("hidden");
      } else {
        img.classList.add("hidden");
      }
    });
  }

  function nextImage(event, indicesSetter, indices, index) {
    const images = event.target.parentNode.querySelectorAll("img");
    indicesSetter((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[index] = (prevIndices[index] + 1) % images.length;
      return newIndices;
    });
  }

  function prevImage(event, indicesSetter, indices, index) {
    const images = event.target.parentNode.querySelectorAll("img");
    indicesSetter((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[index] =
        (prevIndices[index] - 1 + images.length) % images.length;
      return newIndices;
    });
  }

  return (
    <section className="portfolio">
      <h2 className="portfolio-h2">
        My journey to learn Figma, based on UI/UX 2022
      </h2>
      <p className="portfolio-description">
        During my UI and UX training, I learned not only how to gather essential
        user data through creating empathy maps, user journey maps, feedback
        grids, top findings, research results, style guides, and much more, but
        also how to use Figma.
      </p>
      <p className="portfolio-description">
        To excel in design and user interface, you need to practice consistently
      </p>
      <div className="portfolio__container">
        {portfolios.map((portfolio, portfolioIndex) => (
          <div className="portfolio__container-card" key={portfolioIndex}>
            <h2 className="portfolio__card-title">{portfolio.title}</h2>
            <div className="portfolio-img-container">
              {portfolio.images.map((image, imageIndex) => (
                <img
                  key={imageIndex}
                  className="portfolio-img hidden"
                  src={image}
                  alt={portfolio.title}
                />
              ))}
              <button
                className="prev"
                onClick={(event) => prevImage(event, portfolioIndex)}
              >
                ❮
              </button>
              <button
                className="next"
                onClick={(event) => nextImage(event, portfolioIndex)}
              >
                ❯
              </button>
            </div>
            <p className="portfolio__card-description">
              {portfolio.description}
            </p>
          </div>
        ))}
      </div>


 <h2 className="portfolio-h2">Other Projects</h2>
      <div className="apps__container">
        {apps.map((app, appIndex) => (
          <div className="apps__container-card" key={appIndex}>
            <h2 className="apps__card-title">{app.title}</h2>
            <div className="apps-img-container">
              {app.images.map((image, imageIndex) => (
                <img
                  key={imageIndex}
                  className="apps-img hidden"
                  src={image}
                  alt={app.title}
                />
              ))}
              <button
                className="prev"
                onClick={(event) =>
                  prevImage(event, setCurrentAppIndices, currentAppIndices, appIndex)
                }
              >
                ❮
              </button>
              <button
                className="next"
                onClick={(event) =>
                  nextImage(event, setCurrentAppIndices, currentAppIndices, appIndex)
                }
              >
                ❯
              </button>
            </div>
            <p className="apps__card-description">{app.description}</p>
            <p className="apps__card-description">{app.link}</p>

          </div>
        ))}
      </div>
    </section>
  );
}


export default Portfolio;
