import React from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FcManager } from "react-icons/fc";
import { ImEmbed2 } from "react-icons/im";
import { GiMountainClimbing } from "react-icons/gi";
import { IconContext } from "react-icons";

const Nav = () => {
  return (
    <nav>
      <IconContext.Provider value={{ color: "#4db5ff" }}>
        <a href="#">
          <AiFillHome />
        </a>
        <a href="#about">
          <FcManager />
        </a>
        <a href="#experience">
          <GiMountainClimbing />
        </a>
        <a href="#portfolio">
          <ImEmbed2 />
        </a>
        <a href="#contact">
          <BsFillTelephoneFill />
        </a>
      </IconContext.Provider>
    </nav>
  );
};

export default Nav;
