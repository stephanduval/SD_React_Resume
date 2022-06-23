import React from "react";
import { useState } from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FcManager } from "react-icons/fc";
import { ImEmbed2 } from "react-icons/im";
import { GiMountainClimbing } from "react-icons/gi";
import { IconContext } from "react-icons";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <IconContext.Provider value={{ color: "#4db5ff" }}>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiFillHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("about")}
          className={activeNav === "about" ? "active" : ""}
        >
          <FcManager />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("experience")}
          className={activeNav === "experience" ? "active" : ""}
        >
          <GiMountainClimbing />
        </a>
        <a
          href="#portfolio"
          onClick={() => setActiveNav("portfolio")}
          className={activeNav === "portfolio" ? "active" : ""}
        >
          <ImEmbed2 />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("contact")}
          className={activeNav === "contact" ? "active" : ""}
        >
          <BsFillTelephoneFill />
        </a>
      </IconContext.Provider>
    </nav>
  );
};

export default Nav;
