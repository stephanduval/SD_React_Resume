import React from "react";
import "./footer.css";
import { RiGithubFill, RiFacebookFill, RiLinkedinFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { FaHackerrank } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        STEPHAN DUVAL
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfollio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <IconContext.Provider value={{ color: "#4db5ff", size: "1.4em" }}>
        <div className="footer__socials">
          <a href="https://www.facebook.com/stephan.duval.5" target="_blank">
            <RiFacebookFill />
          </a>

          <a href="https://github.com/stephanduval" target="_blank">
            <RiGithubFill />
          </a>
          <a href="https://www.linkedin.com/in/stephanduval/" target="_blank">
            <RiLinkedinFill />
          </a>
          <a href="https://www.hackerrank.com/Stephan_DuVal" target="_blank">
            <FaHackerrank />
          </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; STEPHAN DUVAL</small>
        </div>
      </IconContext.Provider>
    </footer>
  );
};

export default Footer;
