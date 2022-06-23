import React from "react";
import Stephan_DuVal_Developer_Resume from "../../assets/Stephan_DuVal_Developer_Resume.pdf";

const CallToActionBTN = () => {
  return (
    <div className="calltoactionbtn">
      <a href={Stephan_DuVal_Developer_Resume} download className="btn">
        Download CV
      </a>
      {/* #contact focuses the user on the contact section */}
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CallToActionBTN;
