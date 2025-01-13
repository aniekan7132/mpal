import React from "react";
import { Link } from "react-router-dom";
import "../css/card.css";

const Card = ({ textSmall, textMedium, image, linkText}) => {
  return (
    <div className="card-background">
      <div className="card-right">
        <p className="card-text-small">{textSmall}</p>
        <h2 className="card-text-medium">
          {textMedium}
        </h2>
        <Link className="card-link"  to="">{linkText}</Link>
      </div>
      <div>
        <img className="card-image" src={image} alt="Crypto-index" />
      </div>
    </div>
  );
};

export default Card;
