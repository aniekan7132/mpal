import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import HeadingOne from "../components/HeadingOne";
import CustomButton from "../components/styles/Custombutton";
import Footer from "../components/Footer";
import ericDemuth from "../img/ceoeric-demuth-2.jpg";
import paulKlanschek from "../img/Paul-Klanschek.jpg"
import christiamTrummer from "../img/christian-trummer-1.jpg";
import { FaXTwitter } from "react-icons/fa6";
import iconBullet from "../img/icon-bullet-purpule.svg";
import "../css/aboutUs.css";

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <div className="section-about-us">
        <div className="about-us-container">
          <div className="about-us">
            <div className="about-us-details">
              <p className="commodities-sub-header">ABOUT US</p>
              <div className="about-us-header">
                <HeadingOne header="Investing. Now available to everyone." />
              </div>
              <p className="commodities-text header-commodities-text width-for-text">
                At Mercuryo, we see investing differently. Today’s financial
                system is complex, exclusive and expensive - making it hard for
                the typical person to start investing.{" "}
              </p>
              <p className="commodities-text header-commodities-text width-for-text">
                So, we’re building a platform without digital walls and complex
                barriers. A platform that empowers you to see new possibilities
                for your money - and helps make them a reality.{" "}
              </p>
            </div>
            <div className="about-video">
              <img className="" src={christiamTrummer} alt="" />
            </div>
          </div>
        </div>

        <div className="about-us-img-cont">
          <div className="aboutus-wrapper">
            <div className="aboutus-img-div">
              <div>
                <img className="about-img" src={ericDemuth} alt="Eric-Demuth" />
              </div>
              <p className="about-us-name">Eric Demuth</p>
              <p className="commodities-text header-commodities-text remove-margin">
                CEO
              </p>
              <div>
                <FaXTwitter className="aboutus-twitter-icon" />
                <Link className="about-us-twitter" to="">
                  @eric_demuth
                </Link>
              </div>
            </div>
            <div className="aboutus-img-div">
              <div>
                <img
                  className="about-img"
                  src={paulKlanschek}
                  alt="Paul-Klanschek"
                />
              </div>
              <p className="about-us-name">Paul Klanschek</p>
              <p className="commodities-text header-commodities-text remove-margin">
                CEO
              </p>
              <div>
                <FaXTwitter className="aboutus-twitter-icon" />
                <Link className="about-us-twitter" to="">
                  @TwinWinNerD
                </Link>
              </div>
            </div>
            <div className="aboutus-img-div">
              <div>
                <img
                  className="about-img"
                  src={christiamTrummer}
                  alt="Christian-Trummer"
                />
              </div>
              <p className="about-us-name">Christian Trummer</p>
              <p className="commodities-text header-commodities-text remove-margin">
                Chief Scientist
              </p>
              <div>
                <FaXTwitter className="aboutus-twitter-icon" />
                <Link className="about-us-twitter" to="">
                  @christiant5r
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="aboutus-who-we-are">
          <div>
            <HeadingOne header="Who we are" />
            <p className="commodities-text header-commodities-text">
              Mercuryo was founded in 2014 in Vienna, Austria with the aim of
              making investing accessible for everyone. Our goal since day one
              was to reimagine what it means to invest, by making simple,
              easy-to-use financial products for everyone.
            </p>
            <p className="commodities-text header-commodities-text">
              Now, 8 years later, and with more than 700 team members and 5
              million users, we're one of the most successful fintechs in
              Europe. With a PSD2 payment service provider licence and E-Money
              licence, state-of-the-art security and streamlined user
              experience, we make it possible for both first-time investors and
              seasoned experts to invest in what they believe in.
            </p>
            <p className="commodities-text header-commodities-text">
              Our user-friendly, trade-everything platform empowers you to
              invest in the stocks, cryptocurrencies, metals, commodities and
              crypto indices you want — with any amount of money.
            </p>
          </div>

          <div className="about-us-statistics">
            <div className="aboutus-numbers-div">
              <p className="aboutus-numbers">700+</p>
              <p className="commodities-text header-commodities-text remove-margin">
                Team members
              </p>
            </div>
            <div className="aboutus-numbers-div">
              <p className="aboutus-numbers">50+</p>
              <p className="commodities-text header-commodities-text remove-margin">
                Nationalities in the team
              </p>
            </div>
            <div className="aboutus-numbers-div">
              <p className="aboutus-numbers">5,000,000+</p>
              <p className="commodities-text header-commodities-text remove-margin">
                Users
              </p>
            </div>
          </div>
        </div>

        <div className="aboutus-changing-the-world">
          <div className="aboutus-changing-the-world-cont">
            <HeadingOne header="We’re changing the way the world views investing" />
            <p className="commodities-text commodities-text-mobile">
              Mercuryo is backed by a team of world-class experts and the best
              technology talent. To stay at the forefront of innovation, we're
              always working on strengthening our position as Europe’s leading
              retail investment platform.
            </p>
            <div className="aboutus-button">
              {" "}
              <Link
                to=""
                className="join-our-team"
                // style={{
                //   background: "#27D17F",
                //   padding: "15px 45px",
                //   borderRadius: "5px",
                //   color: "#FFFFFF",
                //   fontSize: "1.3rem",
                // }}
                handleClick={() => {}}
              >
                Join our team
              </Link>
            </div>
          </div>
        </div>

        <div className="aboutus-what-we-do">
          <HeadingOne header="What we do" />
          <p className="commodities-text header-commodities-text">
            Our user-friendly, trade-everything platform empowers you to invest
            in the stocks,
            <br /> cryptocurrencies and metals you want, with any amount of
            money.
          </p>
          <div className="what-we-do-bullet-cont">
            <div className="what-we-do-left">
              <div className="icon-bullet-div">
                <div>
                  <img className="bullet-icon" src={iconBullet} alt="Icon" />
                </div>
                <p className="commodities-text color header-commodities-text">
                  Buy, sell or swap 3,000+ digital assets like crypto, stocks,
                  precious metals, ETFs and crypto indices.
                </p>
              </div>
              <div className="icon-bullet-div">
                <div>
                  <img className="bullet-icon" src={iconBullet} alt="Icon" />
                </div>
                <p className="commodities-text color header-commodities-text">
                  Automate regular investments with savings plans
                </p>
              </div>
              <div className="icon-bullet-div">
                <div>
                  <img className="bullet-icon" src={iconBullet} alt="" />
                </div>
                <p className="commodities-text color header-commodities-text">
                  Invest in any asset on Bitpanda from €1
                </p>
              </div>
              <div className="aboutus-button-2">
                {" "}
                <Link
                  to=""
                  className="start-ivesting-today"
                  // style={{
                  //   background: "#27D17F",
                  //   padding: "15px 45px",
                  //   borderRadius: "5px",
                  //   color: "#FFFFFF",
                  //   fontSize: "1.3rem",
                  // }}
                  handleClick={() => {}}
                >
                  Start investing today
                </Link>
              </div>
            </div>
            <div className="what-we-do-right">
              <div className="icon-bullet-div">
                <div>
                  <img className="bullet-icon" src={iconBullet} alt="Icon" />
                </div>
                <p className="commodities-text color header-commodities-text">
                  Wide range of payment and payout providers
                </p>
              </div>
              <div className="icon-bullet-div">
                <div>
                  <img className="bullet-icon" src={iconBullet} alt="Icon" />
                </div>
                <p className="commodities-text color header-commodities-text">
                  Use EUR, CHF, GBP, USD, PLN, DKK, SEK, HUF or CZK to pay or
                  cash out
                </p>
              </div>
              <div className="icon-bullet-div">
                <div>
                  <img className="bullet-icon" src={iconBullet} alt="Icon" />
                </div>
                <p className="commodities-text color-2 header-commodities-text">
                  Mercuryo GmbH is a registered digital assets service provider
                  with the Austrian Financial Market Authority (FMA) under
                  FM-GwG and with the French Autorité des marchés financiers
                  (AMF) under PACTE law. The Bitpanda Payments GmbH holds a PSD2
                  licence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
