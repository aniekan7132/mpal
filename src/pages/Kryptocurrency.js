import React from "react";
import { Link } from "react-router-dom";
import HeadingOne from "../components/HeadingOne";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Academy } from "./Security";
import cloudMoney from "../svgs/verify.svg";
import trade from "../svgs/trade.svg";
import { IoStarOutline } from "react-icons/io5";
import rebrandingImages from "../img/rebranding-images-crypto-2-1.webp";
import rebrandingImage1 from "../img/rebranding-images-card-1.webp";
import taxWitholding from "../img/tax-withholding.png";
import currency from "../svgs/currencies.svg";
import iconRegister from "../img/icons-register.svg";
import iconVerify from "../img/icons-verify.svg";
import iconDeposit from "../img/icons-deposit.svg";
import icontTrade from "../img/icons-trade.svg";
import cryptoBanner from "../img/crypto-banner.png";
import "../css/kryptocurrency.css";

const Kryptocurrency = () => {
  return (
    <>
      <NavBar />
      <div className="cryptocurrency-section">
        <div className="crypto-header-section">
          <div>
            <p className="commodities-sub-header">
              BITCOIN • ETHEREUM • POLKADOT • 400+ MORE
            </p>
            <div className="section-heading-1">
              <HeadingOne header="Join the crypto movement " />
            </div>
            <p className="commodities-text header-commodities-text">
              Invest in Bitcoin, Ethereum, Polkadot and more fast, secure and
              24/7.
            </p>
            <div className="section-button">
              <Link
                to=""
                className="etf-get-started-btn"
                // style={{
                //   background: "#27D17F",
                //   padding: "15px 45px",
                //   borderRadius: "5px",
                //   color: "#FFFFFF",
                //   fontSize: "1.3rem",
                //   display: "inline-block",
                // }}
                handleClick={() => {}}
              >
                Get started
              </Link>
            </div>
          </div>
          <div>
            <img
              className="section-header-banner"
              src={cryptoBanner}
              alt="Crypto-banner"
            />
          </div>
        </div>

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
                <Link
                  to=""
                  style={{
                    color: "#000000",
                    fontSize: ".9rem",
                    display: "inline-block",
                    fontWeight: 600,
                    marginTop: "3rem",
                    borderBottom: "1px solid #27D17F",
                  }}
                  handleClick={() => {}}
                >
                  View licence
                </Link>
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
                <Link
                  to=""
                  style={{
                    color: "#000000",
                    fontSize: ".9rem",
                    display: "inline-block",
                    fontWeight: 600,
                    marginTop: "3rem",
                    borderBottom: "1px solid #27D17F",
                  }}
                  handleClick={() => {}}
                >
                  Read more
                </Link>
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
                <Link
                  to=""
                  style={{
                    color: "#000000",
                    fontSize: ".9rem",
                    display: "inline-block",
                    fontWeight: 600,
                    marginTop: "3rem",
                    borderBottom: "1px solid #27D17F",
                  }}
                  handleClick={() => {}}
                >
                  Read reviews
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="home-section-invest-2">
            <div className="home-invest-section-text-cont">
              <p className="commodities-sub-header">INVEST</p>
              <div className="home-invest-section-header">
                <HeadingOne header="Get started from just €1" />
              </div>
              <p className="home-invest-text">
                Buy a piece of Bitcoin. Invest in the coins and tokens you
                believe in starting from €1
              </p>
            </div>
            <div className="home-section-image-div">
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
              <p className="commodities-sub-header">SPEND</p>
              <div className="home-spend-section-header">
                <HeadingOne header="Spend your crypto like cash" />
              </div>
              <p className="home-invest-text">
                Use the Mercuryo Card to spend crypto, precious metals and other
                assets anywhere you want.
              </p>
            </div>
            <div className="home-section-image-div">
              <img
                className="home-section-image"
                src={rebrandingImage1}
                alt="Rebranding-icon"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="home-section-invest-2 home-track-section">
            <div className="home-invest-section-text-cont">
              <p className="commodities-sub-header">TRACK</p>
              <div className="home-track-section-header">
                <HeadingOne header="Follow the crypto market" />
              </div>
              <p className="home-invest-text">
                Track your price movements with targeted notifications, set up
                price alerts to move with the market or HODL as long as you
                want.
              </p>
            </div>
            <div className="home-section-image-div">
              <img
                className="home-section-image"
                src={rebrandingImage1}
                alt="Rebranding-icon"
              />
            </div>
          </div>
        </div>

        <div className="home-austria-exclusive">
          <div className="spotlight-container home-spotlight-cont home-austria-background">
            <div>
              <p className="mercury-spotlight mercury-light">
                EXCLUSIVE FOR AUSTRIA
              </p>
              <h2 className="spotlight-text-bg home-austria-text-big">
                Simplifying crypto tax
                <br /> reporting
              </h2>
              <p className="spotlight-text-medium text-medium-light home-austria-text">
                You can now leverage our streamlined process that’s
                <br /> designed to be fully compliant with new Austrian tax
                <br /> regulations, while also helping you maximise your
                potential returns.
              </p>
              <Link
                className="crypto-tax-btn"
                to=""
                // style={{
                //   background: "#27D17F",
                //   padding: "10px 20px",
                //   borderRadius: "5px",
                //   color: "#FFFFFF",
                //   display: "inline-block",
                //   marginTop: "2rem",
                // }}
                handleClick={() => {}}
              >
                Read more
              </Link>
            </div>
            <div className="home-features-card-div">
              <img className="home-features-card" src={taxWitholding} alt="" />
            </div>
          </div>
        </div>

        <div className="do-it-on-mercuryo">
          <div>
            <div>
              <img
                className="currency-img"
                src={currency}
                alt="Currency-icon"
              />
            </div>
            <div>
              <p className="do-it-on-merc-heading">Do it all on Mercuryo</p>
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

        <div className="crypto-learn-overall-wrapper">
          <div className="crypto-learn-section">
            <div className="crypto-learn-div">
              <p className="commodities-sub-header">LEARN</p>
              <h2 className="spotlight-text-bg crypto-learn-text-big">
                Start your journey to financial freedom with Mercuryo.
              </h2>
              <div className="academy-grid-cont crypto-grid-cont">
                <Academy
                  academyHeader="ACADEMY"
                  academyText="Learn all about crypto"
                />
                <Academy
                  academyHeader="ACADEMY"
                  academyText="What are maker and taker fees?"
                />
                <Academy
                  academyHeader="BLOG"
                  academyText="6 questions about bitcoin you might be too scared to ask"
                />
                <Academy
                  academyHeader="BLOG"
                  academyText="How to buy my first digital assets"
                />
                <Academy academyHeader="HELPDESK" academyText="What are NFTs" />
                <Academy
                  academyHeader="BLOG"
                  academyText="How Mercuryo makes money with Mercuryo stocks"
                />
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
              Get started in minutes
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
                <div className="start-trading-text-cont">
                  <img
                    className="start-trading-image"
                    src={icontTrade}
                    alt="Trade-icon"
                  />
                </div>
                <div className="start-trading-text-cont">
                  <p className="sub-header-start-trading">4. Trade</p>
                  <p className="commodities-text">
                    Buy, sell and swap commodities* 24/7
                  </p>
                </div>
              </div>
            </div>

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
                Get started
              </Link>
            </div>
            <div className="crypto-risk-text">
              <p className="commodities-text header-commodities-text">
                Mercury Stocks enables investing in fractional stocks.
                Fractional stocks in Europe are always enabled via a contract
                which replicates the underlying stock or ETF (financial
                instruments pursuant to section 1 item 7 lit. d WAG 2018).
                Investing in stocks and ETFs carries risks. For more details see
                the prospectus at Mercury.com.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Kryptocurrency;
