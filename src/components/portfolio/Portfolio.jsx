import React from "react";
import "./portfolio.css";
import GitHubCalendar from "react-github-calendar";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div> className="portfolio__item-image"</div>
          <h3>This is a portfolio title</h3>
          <a href="https"


        </article>
      </div>
      <GitHubCalendar username="stephanduval" blockRadius="15" />
    </section>
  );
};

export default Portfolio;
