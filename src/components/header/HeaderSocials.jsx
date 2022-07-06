import React from "react";
import { RiGithubFill, RiFacebookFill, RiLinkedinFill } from "react-icons/ri";
import { FaHackerrank } from "react-icons/fa";
import { IconContext } from "react-icons";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <IconContext.Provider value={{ color: "#4db5ff", size: "1.4em" }}>
        {" "}
        <a href="https://linkedin.com" target="_blank">
          <RiLinkedinFill />
        </a>
        <a href="https://github.com" target="_blank">
          <RiGithubFill />
        </a>
        <a
          href="https://github.https://www.hackerrank.com/Stephan_DuVal"
          target="_blank"
        >
          <FaHackerrank />
        </a>
      </IconContext.Provider>
    </div>
  );
};

export default HeaderSocials;
