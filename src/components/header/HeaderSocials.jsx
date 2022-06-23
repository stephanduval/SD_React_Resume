import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiHackerrank } from "react-icons/si";
import { IconContext } from "react-icons";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <IconContext.Provider value={{ color: "#4db5ff" }}>
        {" "}
        <a href="https://linkedin.com" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com" target="_blank">
          <BsGithub />
        </a>
        <a href="https://github.com" target="_blank">
          <SiHackerrank />
        </a>
      </IconContext.Provider>
    </div>
  );
};

export default HeaderSocials;
