import React from "react";
import "./portfolio.css";
// import GitHubCalendar from "react-github-calendar";
import NBACK from "../../assets/Portfolio/n-Back.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      {/* <GitHubCalendar username="stephanduval" blockRadius="15" /> */}

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={NBACK}
              alt="annes Hepner Cognitive Reappraisal and n-Back Experiment"
            ></img>
          </div>
          <h3>Hannes Hepner Cognitive Reappraisal & N-Back ExpeNriment</h3>
          <a href="https://github.com/stephanduval" target="blank">
            Github
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
