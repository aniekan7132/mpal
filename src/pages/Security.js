import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import "../css/security.css";
import Svg from "../components/Svg";
import HeadingOne from "../components/HeadingOne";
import SecurityCard from "../components/SecurityCard";
import Footer from "../components/Footer";
import ukas from "../img/ukas.webp";
import btcLogo from "../img/btc-logo.webp";
import socReport from "../img/soc-report.webp";
import SecuringMyPassword from "../components/SecuringMyPassword";
import propertyImage from "../img/property-home-b.png";
import iconAcademy from "../img/icon-academy.svg";
import {
  faqSecurity,
  academy,
  platformSecurity,
  securityCard,
  securingMyPassword,
} from "../data";

export const Academy = ({ academyHeader, academyText }) => {
  return (
    <div className="academy-div">
      <div className="academy-image-div">
        <img className="academy-image" src={iconAcademy} alt="Academy-icon" />
      </div>
      <div className="academy-text-div">
        <p className="academy-text">{academyHeader}</p>
        <p className="academy-sub-text">{academyText}</p>
      </div>
    </div>
  );
};

const Security = () => {
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
      <div className="security-section">
        <div className="security-container security-light">
          <h2 className="security-text-bg text-bg-light">
            Why your assets are
            <br /> safe with us
          </h2>
          <p className="security-text-medium text-medium-light">
            Customer safety is our first goal - this is how we approach
            <br />
            security.
          </p>
        </div>

        <div>
          <img className="security-header-img" src={btcLogo} alt="Btc-logo" />
        </div>
      </div>
      <div>
        <Svg />
      </div>

      <div className="security-card-container">
        <div className="security-main-header">
          <HeadingOne header="Security at Bitpanda" />
        </div>
        <div className="security-card-div">
          {securityCard.map((item, i) => (
            <SecurityCard
              key={i}
              headerText={item.headerText}
              text={item.text}
              className={item.className ? `${item.className}` : ""}
            />
          ))}
        </div>

        <div className="ukas-container">
          <div className="security-image-div">
            <img className="security-image" src={ukas} alt="banner" />
          </div>
          <div className="ukas-container-right">
            <b className="ukas-header">Best-in-class security</b>
            <p className="ukas-text">
              Possessing internally maintained security programs is one thing,
              but having them measure up to industry standards and validating
              them by achieving best-in-class certifications is another. The
              latter is much more difficult and time-consuming, but if you want
              to be a safe and rigorously regulated company, it is necessary and
              worthwhile. Our ISO27001 certification proves we do it.
            </p>
            <Link>Read more</Link>
          </div>
        </div>
        <div className="ukas-container ukas-container-reverse">
          <div className="security-image-div">
            <img
              className="security-image security-image-2"
              src={socReport}
              alt="banner"
            />
          </div>
          <div className="ukas-container-right">
            <b className="ukas-header">Secure and regulated</b>
            <p className="ukas-text">
              We have attained the SOC 2 Type 1 report. This is a significant
              achievement that demonstrates our ongoing commitment to the
              highest security and compliance standards.
            </p>
            <Link>Read more</Link>
          </div>
        </div>
        <div className="ukas-container ukas-container-video">
          <div>
            {/* <img className="security-image" src={socReport} alt="banner" /> */}
            <video className="video" controls width="250">
              <source src="/media/cc0-videos/flower.webm" type="video/webm" />
              <source src="/media/cc0-videos/flower.mp4" type="video/mp4" />
              Download the
              <a href="/media/cc0-videos/flower.webm">WEBM</a>
              or
              <a href="/media/cc0-videos/flower.mp4">MP4</a>
              video.
            </video>
          </div>
          <div className="ukas-container-right center-right-div">
            <p className="ukas-text ukas-text-big ukas-text-width">
              Which licences should a trustworthy crypto broker have?
            </p>
            <Link>Read more</Link>
          </div>
        </div>

        <div className="securing-main-header">
          <HeadingOne header="Keeping your account secure" />
        </div>
        <div className="securing-password-grid">
          {securingMyPassword.map((item, i) => (
            <SecuringMyPassword key={i} header={item.header} text={item.text} />
          ))}
        </div>
      </div>

      <div className="platform-security-section-cont">
        <div className="platform-main-header">
          <HeadingOne header="Platform Security" />
        </div>

        <div className="platform-card-security-div">
          {platformSecurity.map((item, i) => (
            <div key={i} className="platform-card-background">
              <b className="ukas-header">{item.platformHeader}</b>
              <p className="ukas-text">{item.platformText}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mercury-custody-section">
        <div className="mercury-custody-div">
          <div className="property-icon-div">
            <img className="property-icon" src={propertyImage} alt="property" />
          </div>
          <div className="ukas-container-right ukas-container-green">
            <b className="ukas-header ukas-header-white">Mercury Custody</b>
            <p className="ukas-text ukas-text-white">
              Mercuryo Custody is the insured, user-friendly custodial wallet
              platform for institutional-grade security, automation and
              management of crypto assets across blockchains and DeFi.
            </p>
            <Link className="ukas-link-white">Discover more</Link>
          </div>
        </div>
      </div>

      <div className="academy-section">
        <div>
          <HeadingOne header="Academy" />
        </div>
        <div className="academy-grid-cont">
          {academy.map((item, i) => (
            <div key={i} className="academy-div">
              <div className="academy-image-div">
                <img
                  className="academy-image"
                  src={iconAcademy}
                  alt="Academy-icon"
                />
              </div>
              <div className="academy-text-div">
                <p className="academy-text">{item.academyHeader}</p>
                <p className="academy-sub-text">{item.academyText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="faq-section">
        {faqSecurity.map((item, index) => (
          <div key={index} className="faq-div">
            <div className="faq-sub-div">
              <p className="faq-question">{item.question}</p>
              <p style={{ cursor: "pointer" }} onClick={() => toggleFAQ(index)}>
                {activeIndex === index ? "−" : "+"}
              </p>
            </div>
            {activeIndex === index && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="faq-note-text-div">
        <p className="faq-note-text">
          Please note that this is an abbreviated statement for informational
          purposes only and this statement is not legally binding. For all
          details regarding the legal customer relationship as well as the trust
          agreement the respective <Link>general terms and conditions</Link>{" "}
          apply and please refer to them. Any insolvency procedure in any
          European jurisdiction is subject to mandatory European and local law
          and therefore the assessment of the competent insolvency administrator
          and the competent courts. For this reason, the statements in this
          information as well as the general terms and conditions are not
          conclusive and there remains a risk that this legal setup will be
          qualified differently.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Security;
