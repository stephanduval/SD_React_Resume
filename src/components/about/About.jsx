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
      <h2>About Me</h2>
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
              <h5>Experience</h5>
              <small>2+ Years As a Developer</small>
              <small>14+ Years running a profitable web business.</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>2+ Clients</small>
              <small>100+ Usersj.</small>
            </article>
            <article className="about__card">
              <BiHomeSmile className="about__icon" />
              <h5>Projects</h5>
              <small>6 Completed Projects</small>
              <small>3 Currently in daily use</small>
            </article>
            <p>This is a writeup</p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
