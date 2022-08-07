import React from "react";
import "./about.css";
import { GiIonicColumn } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { BiHomeSmile } from "react-icons/bi";
import StephanDuValBabyPhoto from "../../assets/stephanduval-throwingbaby.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <div className="section__title">About Me</div>
      <div className="about__container">
        <div className="about__me">
          <div className="about__me__image">
            <img src={StephanDuValBabyPhoto} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiIonicColumn className="about__icon" />
              <h2>Experience</h2>
              <br></br>
              <div div className="containerSmallText">
                2+ Years As a Developer
                <br></br>
                14+ Years running a profitable web business.
              </div>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h2>Clients</h2>
              <br></br>
              <div className="containerSmallText">
                <a href="https://www.esnail.ca">eSnail.ca</a> - 14 Year
                relationship managing their web-based business. Recently
                expanded and rebranded to{" "}
                <a href="https://www.mailclerk.com">MailClerk.com</a>
                <p></p>
                13,477 User Accounts Created since 2008
                <br></br>
                96 Active Users in 2022
              </div>
            </article>
            <article className="about__card">
              <BiHomeSmile className="about__icon" />
              <h2>Projects</h2>
              <br></br>
              <div className="containerSmallText">6 Completed Projects</div>
              <p></p>
              <h4>3 Currently in daily use:</h4>
              <br></br>
              <ul>
                <li>eSnail.ca</li>
                <li>MailClerk.com</li>
              </ul>
            </article>
          </div>
          <p>My name is Stephan DuVal. I am a Fullstack Developer.</p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
