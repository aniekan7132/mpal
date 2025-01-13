import React from "react";
import "../css/securityCard.css";

const SecurityCard = ({headerText, text, className}) => {
  return (
    <div className={`${className} ? ${className} : ${"security-card"}`}>
      <b className="security-header">{headerText}</b>
      <p className="security-text">
        {text}
      </p>
    </div>
  );
};

export default SecurityCard;
