import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import CustomButton from "../components/styles/Custombutton";
import Footer from "../components/Footer";
import ChartOverview from "../components/ChartOverview";
import videoFrame from "../img/videoframe_1047.png";
import "../css/figma.css";
import regulated from "../img/regulated.svg";
import secure from "../img/secure.svg";
import trusted from "../img/trusted.svg";
import investBci from "../img/invest-bci.png";
import investCrypto from "../img/invest-crypto.png";
import investStocks from "../img/invest-stocks_2-resized.png";
import etfs from "../img/ETFs.png";
import commodities from "../img/Commodities.png";
import metals from "../img/Invest-Metals.png";
import homepage from "../img/Homepage-card.png";
import smallBanner from "../img/Small-banner.png";
import customersHoldings from "../img/customer-holdings.png";
import deposit3 from "../img/Deposit_3.png";
import blog from "../img/Blog.png";
import academy from "../img/Academy.png";
import community from "../img/Community(1).svg";
import contactUs from "../img/Contact-us.svg";

const Figma = () => {
  const Card = ({ textSmall, textMedium, image, linkText }) => {
    return (
      <div className="home-card-background">
        <div className="home-card-up">
          <h2 className="card-text-big">{textMedium}</h2>
          <p className="commodities-text home-text-medium header-commodities-text">
            {textSmall}
          </p>
        </div>
        <div>
          <img className="home-card-image" src={image} alt="Crypto-index" />
        </div>
      </div>
    );
  };
  return (
    <>
      <NavBar />
      <div className="section-home">
        <div className="home-header-cont">
          <div className="home-header-left">
            <div className="home-header-div">
              <h1 className="home-main-header">
                Investing
                <br /> you can trust
              </h1>
            </div>
            <div>
              <Link
                className="start-trading-btn"
                // style={{
                //   background: "#27D17F",
                //   padding: "15px 45px",
                //   borderRadius: "5px",
                //   color: "#FFFFFF",
                //   fontSize: "1.3rem",
                // }}
                handleClick={() => {}}
              >
                Start investing
              </Link>
            </div>
          </div>
          <div className="home-header-right">
            <img className="home-banner" src={videoFrame} alt="" />
            <p className="commodities-text color header-commodities-text">
              Past performance is no indication of future performance.
            </p>
          </div>
        </div>

        <div className="section-trusted">
          <div className="section-reg-sec-trusted">
            <div className="start-trading-icon-div home-style-sec">
              <div className="start-trading-icon-div-2 border-right">
                <div className="home-start-trading-image-div">
                  <img
                    className="start-trading-image home-start-trading-image"
                    src={regulated}
                    alt="Regulated-icon"
                  />
                </div>
                <p className="sub-header-start-trading">Regulated</p>
                <p className="commodities-text">
                  Austria based and European regulated
                  <br /> crypto & securities broker platform
                </p>
                <Link
                  to="/stocks"
                  style={{
                    background: "#27D17F",
                    padding: "8px 20px",
                    borderRadius: "5px",
                    color: "#FFFFFF",
                    fontSize: ".7",
                    textDecoration: "none",
                    fontWeight: 600,
                    marginTop: "1rem",
                  }}
                  handleClick={() => {}}
                >
                  Read more
                </Link>
              </div>
              <div className="start-trading-icon-div-2 home-style-sec border-right">
                <div className="home-start-trading-image-div">
                  <img
                    className="start-trading-image home-start-trading-image"
                    src={secure}
                    alt="Secure-icon"
                  />
                </div>
                <p className="sub-header-start-trading">Safe and secure</p>
                <p className="commodities-text">
                  Funds secured in offline wallets.
                  <br /> Fully compliant with European data,
                  <br /> IT and money laundering security
                  <br /> standards
                </p>
                <Link
                  to="/stocks"
                  style={{
                    background: "#27D17F",
                    padding: "8px 20px",
                    borderRadius: "5px",
                    color: "#FFFFFF",
                    fontSize: ".7",
                    textDecoration: "none",
                    fontWeight: 600,
                    marginTop: "1rem",
                  }}
                  handleClick={() => {}}
                >
                  Read more
                </Link>
              </div>
              <div className="start-trading-icon-div-2 home-style-sec">
                <div className="home-start-trading-image-div">
                  <img
                    className="start-trading-image home-start-trading-image"
                    src={trusted}
                    alt="Trusted-icon"
                  />
                </div>
                <p className="sub-header-start-trading">Trusted</p>
                <p className="commodities-text">
                  Deposit your funds securely <br />
                  through our supported
                  <br /> options
                </p>
                <Link
                  to="/stocks"
                  style={{
                    background: "#27D17F",
                    padding: "8px 20px",
                    borderRadius: "5px",
                    color: "#FFFFFF",
                    fontSize: ".7",
                    textDecoration: "none",
                    fontWeight: 600,
                    marginTop: "1rem",
                  }}
                  handleClick={() => {}}
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="home-section-invest">
          <div className="section-invest-container">
            <p className="commodities-sub-header invest-centered-text">
              INVEST
            </p>
            <p className="ukas-text ukas-text-big invest-centered-text">
              All your investments.
              <br /> All on Bitpanda.
            </p>
            <div className="home-section-cards">
              <Card
                textSmall="Buy, sell & swap the cryptocurrencies you want anytime, anywhere."
                textMedium="Cryptocurrencies"
                image={investCrypto}
              />
              <Card
                textSmall="Invest in fractions of your favourite companies without committing to a whole share"
                textMedium="Stocks*"
                image={investStocks}
              />
              <Card
                textSmall="Invest in fractions of your favourite ETFs* without committing to a whole share"
                textMedium="ETFs*"
                image={etfs}
              />
              <Card
                textSmall="Buy, sell & swap the cryptocurrencies you want anytime, anywhere."
                textMedium="Cryptocurrencies"
                image={commodities}
              />
              <Card
                textSmall="Buy, sell & swap the cryptocurrencies you want anytime, anywhere."
                textMedium="Cryptocurrencies"
                image={investBci}
              />
              <Card
                textSmall="Buy, sell & swap the cryptocurrencies you want anytime, anywhere."
                textMedium="Cryptocurrencies"
                image={metals}
              />
            </div>
          </div>
        </div>

        <div className="home-features-section">
          <div>
            <p className="commodities-sub-header invest-centered-text">
              FEATURES{" "}
            </p>
            <p className="ukas-text ukas-text-big invest-centered-text">
              More than an investment platform
            </p>
            <div className="spotlight-container home-spotlight-cont  background-light">
              <div>
                <p className="mercury-spotlight mercury-light">
                  INVEST WITH ZERO DEPOSIT FEES
                </p>
                <h2 className="spotlight-text-bg text-bg-light">
                  More money in your
                  <br /> portfolio
                </h2>
                <p className="spotlight-text-medium text-medium-light home-feature-text">
                  No deposit and withdrawal fees, on all payment methods for all
                  fiat currencies. More money in your portfolio means more
                  opportunities to grow your investments and make impactful
                  decisions, and that's exactly what we're here for.
                </p>
                <Link
                  to=""
                  style={{
                    background: "#27D17F",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    color: "#FFFFFF",
                    display: "inline-block",
                    marginTop: "2rem",
                  }}
                  handleClick={() => {}}
                >
                  Read more
                </Link>
              </div>
              <div className="home-features-card-div">
                <img className="home-features-card" src={homepage} alt="" />
              </div>
            </div>
            <div className="home-features-spotlight">
              <div className="spotlight-container home-spotlight">
                <p className="mercury-spotlight">MERCURYO SPOTLIGHT</p>
                <h2 className="spotlight-text-bg">
                  Meet the new stars
                  <br /> on the crypto horizon
                </h2>
                <p className="spotlight-text-medium spotlight-text-width">
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
                <div>
                  <img
                    className="home-features-banner"
                    src={smallBanner}
                    alt="Small-Banner"
                  />
                </div>
              </div>
              <div className="spotlight-container home-spotlight-1">
                <p className="mercury-spotlight home-mercury">SECURITY</p>
                <h2 className="spotlight-text-bg">Best-in-class security</h2>
                <p className="spotlight-text-medium spotlight-text-width">
                  Our ISO27001 certification proves that we follow the highest
                  security standards.
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
                <div>
                  <img
                    className="home-features-banner"
                    src={customersHoldings}
                    alt="Small-Banner"
                  />
                </div>
              </div>
            </div>
            <div className="home-features-spot-button">
              <Link
                to=""
                style={{
                  background: "#27D17F",
                  padding: "15px 35px",
                  borderRadius: "5px",
                  color: "#FFFFFF",
                  fontSize: "1rem",
                }}
                handleClick={() => {}}
              >
                See all features
              </Link>
            </div>
          </div>
        </div>

        <div className="home-get-started-section">
          <p className="commodities-sub-header invest-centered-text">
            HOW IT WORKS{" "}
          </p>
          <p className="ukas-text ukas-text-big invest-centered-text">
            Get started in minutes
          </p>
          <div className="home-get-started-slide">
            <div className="home-get-started-slide-cont">
              <div>
                <img className="deposit-img" src={deposit3} alt="Deposit" />
              </div>
              <div className="home-get-started-details">
                <p className="home-slide-number">01</p>
                <p className="home-slide-title">Verify</p>
                <p className="home-slide-text">
                  Verify your identity with one of our trusted verification
                  partners.
                </p>
                <Link
                  to=""
                  style={{
                    background: "#27D17F",
                    padding: "8px 15px",
                    borderRadius: "5px",
                    color: "#FFFFFF",
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

        <div className="home-price-section">
          <p className="commodities-sub-header invest-centered-text">
            HOW IT WORKS{" "}
          </p>
          <p className="ukas-text ukas-text-big invest-centered-text">
            Get started in minutes
          </p>

          <ChartOverview />

          <div className="start-trading-button">
            <Link
              to=""
              className="start-trading-btn"
              style={
                {
                  // background: "#27D17F",
                  // padding: "15px 45px",
                  // borderRadius: "5px",
                  // color: "#FFFFFF",
                  // fontSize: "1.3rem",
                  // fontWeight: 400,
                }
              }
              handleClick={() => {}}
            >
              See all prices
            </Link>
          </div>
        </div>

        <div className="home-learn-section">
          <p className="commodities-sub-header invest-centered-text">LEARN</p>
          <p className="ukas-text ukas-text-big invest-centered-text">
            Boost your financial literacy skills
          </p>
          <div className="home-learn-financials">
            <div className="spotlight-container  home-learn home-spotlight">
              <p className="mercury-spotlight home-blog">BITPANDA BLOG</p>
              <h2 className="spotlight-text-bg learn-text-big">
                Meet the new stars
                <br /> on the crypto horizon
              </h2>
              <Link
                to=""
                style={{
                  borderRadius: "5px",
                  color: "#ffffff",
                  marginTop: "1rem",
                  display: "inline-block",
                  fontWeight: 400,
                  borderBottom: "1px solid white",
                }}
                handleClick={() => {}}
              >
                Visit Blog
              </Link>
              <div>
                <img
                  className="home-features-banner"
                  src={blog}
                  alt="Small-Banner"
                />
              </div>
            </div>
            <div className="spotlight-container home-spotlight-1">
              <p className="mercury-spotlight home-mercury">BITPANDA ACADEMY</p>
              <h2 className="spotlight-text-bg learn-text-big">
                Learn all about investing,
                <br /> Bitcoin and blockchain
              </h2>
              <Link
                to=""
                style={{
                  borderRadius: "5px",
                  color: "#ffffff",
                  marginTop: "1rem",
                  display: "inline-block",
                  fontWeight: 400,
                  borderBottom: "1px solid white",
                }}
                handleClick={() => {}}
              >
                Visit Academy
              </Link>
              <div>
                <img
                  className="home-features-banner"
                  src={academy}
                  alt="Small-Banner"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="home-section-questions-cont">
            <p className="commodities-sub-header invest-centered-text">HELP</p>
            <p className="ukas-text ukas-text-big invest-centered-text">
              Questions? We’re here for you
            </p>
            <div className="home-sub-questions-cont">
              <div className="start-trading-icon-div-2 border-right">
                <div className="home-section-quest-icon">
                  <img
                    className="start-trading-image home-start-trading-image"
                    src={community}
                    alt="Register-icon"
                  />
                </div>
                <p className="sub-header-start-trading">Community</p>
                <p className="commodities-text">
                  Join our online community so you can <br />
                  be the first to hear about company <br />
                  news, new products and more.
                </p>
                <Link
                  to=""
                  style={{
                    background: "#27D17F",
                    padding: "8px 15px",
                    borderRadius: "5px",
                    color: "#FFFFFF",
                    fontSize: ".8rem",
                    marginTop: "1.2rem",
                    display: "inline-block",
                  }}
                  handleClick={() => {}}
                >
                  Join us
                </Link>
              </div>
              <div className="start-trading-icon-div-2 border-right">
                <div className="home-section-quest-icon">
                  <img
                    className="start-trading-image home-start-trading-image"
                    src={contactUs}
                    alt="Register-icon"
                  />
                </div>
                <p className="sub-header-start-trading">Contact us</p>
                <p className="commodities-text">
                  Our Mercuryo Helpdesk is filled with in-
                  <br /> depth articles, and if you need more help,
                  <br /> we are always available to lend a helping <br />
                  hand through our contact form.
                </p>
                <Link
                  to=""
                  style={{
                    background: "#27D17F",
                    padding: "8px 15px",
                    borderRadius: "5px",
                    color: "#FFFFFF",
                    fontSize: ".8rem",
                    marginTop: "1.2rem",
                    display: "inline-block",
                  }}
                  handleClick={() => {}}
                >
                  Go to HelpDesk
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Figma;
