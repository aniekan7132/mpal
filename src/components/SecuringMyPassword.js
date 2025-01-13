import React from 'react'
import nike from "../img/nike.png";
import "../css/securingMyPassword.css";

const SecuringMyPassword = ({header, text}) => {
  return (
    <div className="securing-password-cont">
      <div>
        <img className="nike" src={nike} alt="icon" />
      </div>
      <div className="securing-password-text-div">
        <b className="ukas-header">{header}</b>
        <p className="ukas-text">
          {text}
        </p>
      </div>
    </div>
  );
}

export default SecuringMyPassword