import React from "react";
import "./portfolio.css";
// import GitHubCalendar from "react-github-calendar";
import NBACK from "../../assets/Portfolio/n-Back.png";

const portfolioData = [
  {
    id: 1,
    image: NBACK,
    title: "Hannes Hepner Cognitive Reappraisal & N-Back ExpeNriment",
    github: "https://github.com/stephanduval",
    demo: "https://dashboard.heroku.com/apps/n-back-experiment",
    description:
      "An interactable real world study that uses Hooks and Redux to track users as they respond to cognitive tests ",
  },
  {
    id: 2,
    image: NBACK,
    title: "Hannes Hepner Cognitive Reappraisal & N-Back ExpeNriment",
    github: "https://github.com/stephanduval",
    demo: "https://dashboard.heroku.com/apps/n-back-experiment",
    description:
      "An interactable real world study that uses Hooks and Redux to track users as they respond to cognitive tests ",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <div className="section__title">Portfolio</div>
      {/* <GitHubCalendar username="stephanduval" blockRadius="15" /> */}

      <div className="container portfolio__container">
        {portfolioData.map(
          ({ id, image, title, github, demo, description }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-links">
                  <div className="portfolio__GitHub-link">
                    <a href={github} target="blank">
                      Github
                    </a>
                  </div>
                  <div className="portfolio_item-cta">
                    <a href={demo} className="btn btn-primary" target="blank">
                      Live Demo
                    </a>
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
