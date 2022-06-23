import React from "react";
import "./portfolio.css";
import GitHubCalendar from "react-github-calendar";

const Portfolio = () => {
  return (
    <section id="portfolio">
      Portfolio
      <GitHubCalendar username="stephanduval" blockRadius="15" />
    </section>
  );
};

export default Portfolio;
