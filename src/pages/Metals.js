import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeadingOne from "../components/HeadingOne";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import cryptoBanner from "../img/crypto-banner.png";
import cloudMoney from "../svgs/verify.svg";
import trade from "../svgs/trade.svg";
import { IoStarOutline } from "react-icons/io5";
import rebrandingImages from "../img/rebranding-images-crypto-2-1.webp";
import rebrandingImage1 from "../img/rebranding-images-card-1.webp";
import currency from "../svgs/currencies.svg";
import gold from "../img/gold-01.svg";
import philoro from "../img/philoro-Logo.webp";
import proaurum from "../img/proaurum-logo.webp";
import brinks from "../img/brinks-logoblack-3.webp";
import iconRegister from "../img/icons-register.svg";
import iconVerify from "../img/icons-verify.svg";
import iconDeposit from "../img/icons-deposit.svg";
import icontTrade from "../img/icons-trade.svg";
import { faqMetals } from "../data";
import "../css/metals.css";

const Metals = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      return setActiveIndex(null);
    }

    setActiveIndex(index);
  };

  return (
    <>
      <NavBar />
      <div className="metals-section">
        <div className="section-header">
          <div className="metals-header-section">
            <p className="commodities-sub-header">
              GOLD • PLATINUM • SILVER • PALLADIUM
            </p>
            <div className="section-heading-1">
              <HeadingOne header="Mercuryo Metals: Fortify your portfolio" />
            </div>
            <p className="commodities-text header-commodities-text header-text-width">
              No matter the stock price, you can own fractions of your favourite
              companies from as little as €1 with zero commissions{" "}
              {/* <br /> */}
              and tight spreads.
            </p>
            <div className="section-button">
              <Link
                className="start-trading-btn"
                to=""
                style={
                  {
                    // background: "#27D17F",
                    // padding: "15px 45px",
                    // borderRadius: "5px",
                    // color: "#FFFFFF",
                    // fontSize: "1.3rem",
                    // display: "inline-block",
                  }
                }
                handleClick={() => {}}
              >
                Get started
              </Link>
            </div>
          </div>
          <div className="section-header-banner-div">
            <img
              className="section-header-banner"
              src={cryptoBanner}
              alt="Crypto-banner"
            />
          </div>
        </div>
      </div>
      <div className="metals-section-2">
        <div className="crypto-section-div">
          <div className="crypto-icon-container">
            <div className="crypto-icon-btn-div">
              <div className="crypto-icon-div">
                <img className="trade-icon" src={cloudMoney} alt="" />
              </div>
              <div>
                <p className="commodities-text crypto-text">
                  MiFID II investment firm.
                  <br /> PSD 2 payment institution.
                </p>
              </div>
            </div>
            <div className="crypto-icon-btn-div">
              <div className="crypto-icon-div">
                <img className="trade-icon" src={trade} alt="" />
              </div>
              <div>
                <p className="commodities-text crypto-text">
                  Fully compliant with AML5.
                  <br />
                  Funds secured in offline wallets.
                </p>
              </div>
            </div>
            <div className="crypto-icon-btn-div">
              <div className="crypto-icon-div">
                <IoStarOutline className="trusted-icon" />
              </div>
              <div>
                <p className="commodities-text crypto-text">
                  Great rating on Trustpilot.
                  <br /> Over 5 million happy users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {" "}
        <div className="home-section-invest-2">
          <div className="home-invest-section-text-cont">
            <p className="commodities-sub-header">PHYSICALLY BACKED</p>
            <div className="home-invest-section-header">
              <HeadingOne header="Vaulted metals from €1" />
            </div>
            <p className="home-invest-text">
              Buy a piece of Bitcoin. Invest in the coins and tokens you believe
              in starting from €1
            </p>
          </div>
          <div>
            <img
              className="home-section-image"
              src={rebrandingImages}
              alt="Rebranding-icon"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="home-section-invest-2 home-section-invest-3">
          <div className="home-invest-section-text-cont">
            <p className="commodities-sub-header">ALLOCATED & SECURED</p>
            <div className="home-spend-section-header">
              <HeadingOne header="Own what you buy" />
            </div>
            <p className="home-invest-text">
              Use the Mercuryo Card to spend crypto, precious metals and other
              assets anywhere you want.
            </p>
          </div>
          <div>
            <img
              className="home-section-image"
              src={rebrandingImage1}
              alt="Rebranding-icon"
            />
          </div>
        </div>
      </div>

      <div className="home-section-invest-2">
        <div className="home-invest-section-text-cont">
          <p className="commodities-sub-header">Diversification</p>
          <div className="home-invest-section-header">
            <HeadingOne header="Diversify the risk" />
          </div>
          <p className="home-invest-text">
            Buy a piece of Bitcoin. Invest in the coins and tokens you believe
            in starting from €1
          </p>
        </div>
        <div>
          <img
            className="home-section-image"
            src={rebrandingImages}
            alt="Rebranding-icon"
          />
        </div>
      </div>

      <div className="sourced-and-stored-section">
        <div className="sourced-logo-div">
          <p>Sourced and stored by</p>
          <div className="sourced-logo-cont">
            <img className="sourced-logo" src={gold} alt="" />
            <img className="sourced-logo" src={philoro} alt="" />
            <img className="sourced-logo" src={proaurum} alt="" />
            <img className="sourced-logo" src={brinks} alt="" />
          </div>
        </div>
      </div>

      <div>
        {" "}
        <div className="do-it-on-mercuryo-metals">
          <div>
            <div>
              <img
                className="currency-img"
                src={currency}
                alt="Currency-icon"
              />
            </div>
            <div>
              <p className="do-it-on-merc-heading">Do it all on Bitpanda</p>
              <p className="commodities-text crypto-text all-on-merc-text">
                If you have the Bitpanda App, you can invest in crypto alongside
                your stocks* and metals – all in one place.
              </p>
              <Link
                to=""
                style={{
                  background: "#27D17F",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  color: "#000000",
                  fontSize: ".8rem",
                  marginTop: "1.2rem",
                  display: "inline-block",
                }}
                handleClick={() => {}}
              >
                Get started
              </Link>
            </div>
          </div>
          <div>
            <div>
              <img
                className="currency-img"
                src={currency}
                alt="Currency-icon"
              />
            </div>
            <div>
              <p className="do-it-on-merc-heading">Do it all on Bitpanda</p>
              <p className="commodities-text crypto-text all-on-merc-text">
                If you have the Bitpanda App, you can invest in crypto alongside
                your stocks* and metals – all in one place.
              </p>
              <Link
                to=""
                style={{
                  background: "#27D17F",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  color: "#000000",
                  fontSize: ".8rem",
                  marginTop: "1.2rem",
                  display: "inline-block",
                }}
                handleClick={() => {}}
              >
                Get started
              </Link>
            </div>
          </div>

          <div>
            <div>
              <img
                className="currency-img"
                src={currency}
                alt="Currency-icon"
              />
            </div>
            <div>
              <p className="do-it-on-merc-heading">Do it all on Bitpanda</p>
              <p className="commodities-text crypto-text all-on-merc-text">
                If you have the Bitpanda App, you can invest in crypto alongside
                your stocks* and metals – all in one place.
              </p>
              <Link
                to=""
                style={{
                  background: "#27D17F",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  color: "#000000",
                  fontSize: ".8rem",
                  marginTop: "1.2rem",
                  display: "inline-block",
                }}
                handleClick={() => {}}
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="start-trading-commodities">
          <p className="commodities-sub-header text-centered">
            HOW DOES IT WORK?
          </p>
          <h2 className="all-in-one-header text-centered">
            Start trading metals in minutes
          </h2>

          <div className="start-trading-icon-div">
            <div className="start-trading-icon-div-2">
              <div>
                <img
                  className="start-trading-image"
                  src={iconRegister}
                  alt="Register-icon"
                />
              </div>
              <div className="start-trading-text-cont">
                <p className="sub-header-start-trading">1. Register</p>
                <p className="commodities-text">
                  Sign up to create your free Mercuryo account
                </p>
              </div>
            </div>
            <div className="start-trading-icon-div-2">
              <div>
                <img
                  className="start-trading-image"
                  src={iconVerify}
                  alt="Verify-icon"
                />
              </div>
              <div className="start-trading-text-cont">
                <p className="sub-header-start-trading">2. Verify</p>
                <p className="commodities-text">
                  Verify your identify with one of our trusted verification
                  partners
                </p>
              </div>
            </div>
            <div className="start-trading-icon-div-2">
              <div>
                <img
                  className="start-trading-image"
                  src={iconDeposit}
                  alt="Deposit-icon"
                />
              </div>
              <div className="start-trading-text-cont">
                <p className="sub-header-start-trading">3. Deposit</p>
                <p className="commodities-text">
                  Deposit your funds securely through our supported options
                </p>
              </div>
            </div>
            <div className="start-trading-icon-div-2">
              <div>
                <img
                  className="start-trading-image"
                  src={icontTrade}
                  alt="Trade-icon"
                />
              </div>
              <div className="start-trading-text-cont">
                <p className="sub-header-start-trading">4. Trade</p>
                <p className="commodities-text four-icons-text-width">
                  Buy, sell and swap commodities* 24/7
                </p>
              </div>
            </div>
          </div>

          <div className="start-trading-button">
            <Link
              className="start-trading-btn"
              handleClick={() => {}}
            >
              Get started
            </Link>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <div className="faq-commodities-header">
          <HeadingOne header="FAQ" />
        </div>
        <div className="faq-container">
          {faqMetals.map((item, index) => (
            <div key={index} className="faq-div">
              <div className="faq-sub-div">
                <p className="faq-question">{item.question}</p>
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleFAQ(index)}
                >
                  {activeIndex === index ? "−" : "+"}
                </p>
              </div>
              {activeIndex === index && (
                <p className="faq-answer">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="faq-note-text-div">
        <p className="faq-note-text">
          This information is a marketing communication and is provided for
          informational purposes only. It does not constitute advice,
          recommendation or solicitation to enter into any transaction.
          Commodities are the underlying Exchange Traded Commodities of
          contracts offered as Mercuryo Commodities and are brought to you by
          Mercuryo Financial Services GmbH. For more information consult the
          prospectus at Mercuryo.com. Capital at risk. The financial instrument
          "Mercuryo Commodities" is not tradable on exchanges or other trading
          venues, but can be resold to Mercuryo at any time under the terms and
          conditions stated in the GTC and the contracts. The investment in
          securities involves risks. A total loss is possible.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Metals;
