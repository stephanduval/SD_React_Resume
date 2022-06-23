import React from "react";
import "./header.css";
import CallToActionBTN from "./CallToActionBTN";
import StephanDuValPhoto from "../../assets/stephanduval-image.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container.header__container">
        <h5>Hello I'm</h5>
        <h1>Stephan DuVal ...pp</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CallToActionBTN />
        <HeaderSocials />

        <div className="stephanduvalphoto">
          <img src={StephanDuValPhoto} alt="myphoto" />
        </div>

        <a href="#contact" className="scroll__down">
          {" "}
          Scroll Down{" "}
        </a>
      </div>
    </header>
  );
};

export default Header;
//
