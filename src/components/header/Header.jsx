import React from "react";
import "./header.css";
import CallToActionBTN from "./CallToActionBTN";
import StephanDuValPhoto from "../../assets/stephanduval-image.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <h5>Hello I'm</h5>
        <h1>Stephan DuVal</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CallToActionBTN />
        <HeaderSocials />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

        <div className="stephanduvalphoto">
          <img src={StephanDuValPhoto} alt="myphoto" />
        </div>
      </div>
    </header>
  );
};

export default Header;
//
