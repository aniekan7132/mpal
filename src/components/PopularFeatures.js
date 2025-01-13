import React from "react";
import HeadingOne from "../components/HeadingOne";
import Card from "./Card";
import cryptoIndex from "../img/crypto-index.png";
import savingsPlan from "../img/savings-plan.png";
import mercuryCard from "../img/mercury-card.png";
import bestReward from "../img/best-rewards.png";
import payments from "../img/payments.png";
import swap from "../img/swap.png"
import tellAfriend from "../img/tell-a-friend.png"
import affiliate from "../img/affiliate.png";
import "../css/popularFeatures.css";

const PopularFeatures = () => {
  return (
    <>
      <div className="popular-features-section">
        <div className="popular-features-header">
          <HeadingOne header="Popular features" />
        </div>
        <div className="card-container">
          <Card
            textSmall="BITPANDA CRYPTO INDEX"
            textMedium="Auto-invest in the whole crypto market"
            image={cryptoIndex}
            linkText="Get started"
          />
          <Card
            textSmall="SAVINGS PLAN"
            textMedium="Save effortlessly with a savings plan"
            image={savingsPlan}
            linkText="Get started"
          />
        </div>
      </div>
      <div className="popular-features-section">
        <div div className="popular-features-header">
          <HeadingOne header="Benefits & rewards" />
        </div>
        <div className="card-container">
          <Card
            textSmall="BITPANDA CARD"
            textMedium="A Visa card with cashback in Bitcoin"
            image={mercuryCard}
            linkText="Learn more"
          />
          <Card
            textSmall="SAVINGS PLAN"
            textMedium="Save effortlessly with a savings plan"
            image={bestReward}
            linkText="Learn more"
          />
        </div>
      </div>
      <div className="popular-features-section">
        <div div className="popular-features-header">
          <HeadingOne header="Save time & money" />
        </div>
        <div className="card-container">
          <Card
            textSmall="SWAP"
            textMedium="Exchange digital assets instantly"
            image={swap}
            linkText="Learn more"
          />
          <Card
            textSmall="SAVINGS PLAN"
            textMedium="Save effortlessly with a savings plan"
            image={payments}
            linkText="Learn more"
          />
        </div>
      </div>
      <div className="popular-features-section">
        <div div className="popular-features-header">
          <HeadingOne header="Make money" />
        </div>
        <div className="card-container">
          <Card
            textSmall="TELL-A-FRIEND PROGRAMME"
            textMedium="Invite your friends, earn rewards"
            image={tellAfriend}
            linkText="Learn more"
          />
          <Card
            textSmall="SAVINGS PLAN"
            textMedium="Save effortlessly with a savings plan"
            image={affiliate}
          />
        </div>
      </div>
    </>
  );
};

export default PopularFeatures;
