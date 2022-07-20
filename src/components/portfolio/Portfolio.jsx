import React from "react";
import "./portfolio.css";
import NBACK_LOGO from "../../assets/Portfolio/n-Back.png";
import ESNAIL_LOGO from "../../assets/Portfolio/ColorEsnailSnail.png";
import MAILCLERK_LOGO from "../../assets/Portfolio/mailclerk-white.jpg";

const portfolioData = [
  {
    id: 1,
    image: NBACK_LOGO,
    title: "Hannes Hepner Research",
    subtitle:
      "This program is used in real-world psychological research.   Designed to run on a server or in React Native.  Built using React & JS",
    github: "https://github.com/stephanduval/HannesHepnerDissertationProject",
    demo: "https://n-back-experiment.herokuapp.com/",
    description:
      "An interactable real world study that uses Hooks and Redux to track users as they respond to cognitive tests ",
  },
  {
    id: 2,
    image: ESNAIL_LOGO,
    title: "eSnail.ca",
    subtitle:
      "Mail handling website. Serves 100+ customers weekly. This webservice is built on Kohanna PHP.",
    github: "https://github.com/stephanduval",
    demo: "https://www.esnail.ca/",
    description:
      "An interactable real world study that uses Hooks and Redux to track users as they respond to cognitive tests ",
  },
  {
    id: 3,
    image: MAILCLERK_LOGO,
    title: "MailClerk.com",
    subtitle:
      "Updated version of eSnail for the United-States. This version has better client management features and integration with Notatize.com. This webservice is built on Laravel PHP.",
    github: "https://github.com/stephanduval",
    demo: "https://www.esnail.ca/",
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
          ({ id, image, title, subtitle, github, demo, description }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} id={id}></img>
                </div>
                <h3>{title}</h3>
                <h4>{subtitle}</h4>

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
