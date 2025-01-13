import React from "react";
import NavBar from "../components/NavBar";
import "../css/features.css";
import CustomButton from "../components/styles/Custombutton";
import PopularFeatures from "../components/PopularFeatures";
import Footer from "../components/Footer";

const Features = () => {
  return (
    <div className="features-section">
      <NavBar />
      <div>
        <h2 className="features-header">
          Products and features <br /> to get the most out <br /> of Mercuryo
        </h2>
      </div>

      <div className="spotlight-section">
        <div className="spotlight-container">
          <div>
            <p className="mercury-spotlight">MERCURYO SPOTLIGHT</p>
            <h2 className="spotlight-text-bg">
              Meet the new stars
              <br /> on the crypto horizon
            </h2>
            <p className="spotlight-text-medium">
              With Bitpanda Spotlight you can invest in fast-moving, hard to
              find crypto coins and projects
            </p>
            <CustomButton
              style={{
                background: "#f0f0f0",
                padding: "10px 20px",
                borderRadius: "5px",
                color: "black",
                marginTop: "1rem",
              }}
              handleClick={() => {}}
            >
              Learn more
            </CustomButton>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>

        <div className="spotlight-container background-light">
          <div>
            <p className="mercury-spotlight mercury-light">
              MERCURYO SPOTLIGHT
            </p>
            <h2 className="spotlight-text-bg text-bg-light">
              Meet the new stars
              <br /> on the crypto horizon
            </h2>
            <p className="spotlight-text-medium text-medium-light">
              With Bitpanda Spotlight you can invest in fast-moving, hard to
              find crypto coins and projects
            </p>
            <CustomButton
              className="mobile-spotlight-btn"
              style={{
                background: "#27D17F",
                padding: "10px 20px",
                borderRadius: "5px",
                color: "#FFFFFF",
                marginTop: "1rem",
              }}
              handleClick={() => {}}
            >
              Learn more
            </CustomButton>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>

      <PopularFeatures />
      <Footer />
    </div>
  );
};

export default Features;
