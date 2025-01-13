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
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

const PlatformSecurity = ({ platformHeader, platformText }) => {
  return (
    <>
      <div className="platform-card-background">
        <b className="ukas-header">{platformHeader}</b>
        <p className="ukas-text">{platformText}</p>
      </div>
    </>
  );
};

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
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);

  const handleClickOpen = (e) => {
    setOpen(true);
    setClose(false);
    e.stopPropagation();
  };

  const handleClickClose = () => {
    setOpen(false);
    setClose(true);
  };

  const Faq = ({ faqQuestion, faqAnswer, handleOpen, handleClose }) => {
    return (
      <div className="faq-div">
        <div className="faq-sub-div">
          <p className="faq-question">{faqQuestion}</p>
          <p>
            {close && <FaAngleDown className="icon" onClick={handleOpen}/>}
            {open && <IoIosArrowUp className="icon" onClick={handleClose}/>}
          </p>
        </div>
        {open && <p className="faq-answer">{faqAnswer}</p>}
      </div>
    );
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
          <SecurityCard
            headerText="Financial Transparency"
            text="Not only are we the leading European crypto investment platform, we are
        also one of the most regulated. We believe in doing things the right
        way, not the easy way, which is why we choose to be fully transparent,
        to acquire licences that see us monitored by multiple financial market
        authorities, and to have our funds and business practices regularly
        validated by external parties."
          />
          <SecurityCard
            headerText="User data protection"
            text="Mercury only processes your personal data for the purposes permitted according to GDPR. We do not use personal data for automated decision-making, including profiling, and we have several security measures in place to make sure your data is safely stored and processed."
            className="security-card-alt"
          />
          <SecurityCard
            headerText="Regulations, licences, registrations"
            text="The Mercury Group diligently follows European laws and regulations. We operate our businesses based on various VASP registrations, as well as MiFID II, E-Money and PSD II licences amongst all our core markets."
            className="security-card-alt"
          />
          <SecurityCard
            headerText="Asset protection"
            text="We prioritise keeping your assets safe, incorporating multiple security measures to protect them from potential threats. Crypto assets are stored in highly-secure cold storage facilities that are examined by an external auditor. Your assets are yours."
          />
          <SecurityCard
            headerText="Advanced Encryption"
            text="Mercury infrastructure and systems are secured with the most modern encryption technologies and supported by our dedicated security teams."
          />
          <SecurityCard
            headerText="24/7 Coverage"
            text="As the markets are open 24/7, so are we. Our Operations, Security and Engineering teams operate on a 24/7 coverage model to respond to any changes within the markets."
            className="security-card-alt"
          />
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
          <SecuringMyPassword
            header="Password Management"
            text="User passwords are stored using the most trusted and modern hashing algorithms. Nobody can read or decrypt them, including us."
          />
          <SecuringMyPassword
            header="MFA"
            text="If activated by the user (highly recommended by Bitpanda) time-based one-time passwords and multi-factor authentication to defend against security threats and additional 2FA in case of user password compromise."
          />
          <SecuringMyPassword
            header="KYC / AML"
            text="Robust KYC onboarding and verification procedures, and fully compliant with European regulation."
          />
          <SecuringMyPassword
            header="Account Lock"
            text="Users are prompted via email to verify every password reset request and to freeze their account if the request was not initiated by them."
          />
          <SecuringMyPassword
            header="Session Management"
            text="Bitpanda allows users to see which browsers and devices they are logged in from to control their account access."
          />
          <SecuringMyPassword
            header="Account monitoring"
            text="Important notifications to the user to ensure overview of user account activity."
          />
        </div>
      </div>

      <div className="platform-security-section-cont">
        <div className="platform-main-header">
          <HeadingOne header="Platform Security" />
        </div>

        <div className="platform-card-security-div">
          <PlatformSecurity
            platformHeader="Infrastructure safeguards"
            platformText="We have a system of layered technical defences in place to safeguard our platform and to uphold the confidentiality, integrity and availability of our infrastructure. Additionally, we practise secure software development lifecycle in order to build our products"
          />
          <PlatformSecurity
            platformHeader="Internal security measures"
            platformText="Our internal security teams ensure the day-to-day activities of our colleagues take place in a secure manner as part of a safe and controlled environment. We build and run our insider threat monitoring programme and regularly conduct training exercises to increase awareness of security topics across the organisation."
          />
          <PlatformSecurity
            platformHeader="Continuous security assessment"
            platformText="Routine assessments of our security controls and processes through exercises like penetration tests completed by reputable external parties, proactive internal threat hunting, as well as our public  ensure that we can prevent potential attacks and minimise risk."
          />
        </div>
      </div>

      <div className="mercury-custody-section">
        <div className="mercury-custody-div">
          <div className="property-icon-div">
            <img
              className="property-icon"
              src={propertyImage}
              alt="property-image"
            />
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
          <Academy
            academyHeader="WHAT ARE PUBLIC KEYS, PRIVATE KEYS AND WALLET ADDRESSES?"
            academyText=" Discover how private and public keys allow you to access encrypted
          information and to keep it secret from third parties."
          />
          <Academy
            academyHeader="HOW CAN I KEEP MY CRYPTOCURRENCIES SAFE?"
            academyText="Learn how practising safe cybersecurity habits and keeping your software up-to-date minimises the risk of losing your crypto."
          />
          <Academy
            academyHeader="CAN A CRYPTOCURRENCY GET HACKED OR SHUT DOWN?"
            academyText="Blockchain technology is designed to fend off hackers, but people and websites are easier targets. Learn how to stay safe"
          />
          <Academy
            academyHeader="WHAT IS A STOCK?"
            academyText="A stock represents ownership of a share in a publicly listed company and is usually a medium to long-term investment."
          />
          <Academy
            academyHeader="WHAT DOES TO DIVERSIFY YOUR PORTFOLIO MEAN?"
            academyText="Achieving a well-balanced portfolio means considering risk tolerance, costs, timing, weighting and diversified holdings"
          />
        </div>
      </div>

      <div className="faq-section">
        <Faq
          faqQuestion="Is Mercuryo safe?"
          faqAnswer="We take our users’ safety very seriously. Security is a natural and
            foundational part of everything we do from developing and deploying
            code to building and running our platform."
          handleOpen={handleClickOpen}
          handleClose={handleClickClose}
        />
        <Faq
          faqQuestion="Is Mercuryo regulated?"
          faqAnswer="We operate our businesses based on various VASP registrations, as well as MiFID II, E-Money and PSD II licences amongst all our core markets. The Mercuryo Group diligently follows European law and regulations, and Bitpanda Payments GmbH possesses a payment service provider licence under PSD2, recently becoming an E-Money Institute. Our stringent user verification processes are also fully compliant with AML5."
        />
        <Faq
          faqQuestion="Who owns my assets?"
          faqAnswer="When you invest with Bitpanda, you do. You are the beneficial owner of your assets (crypto assets and metals) and we hold them in custody, as a trustee. It’s your investment, your assets - we just keep them safe. All assets are held in a highly-secure environment. As a result, if something goes wrong, you will not be treated as an unsecured creditor and you don’t risk losing your assets. Instead, you assert the right of separation under Austrian law. For Bitpanda Stocks we have implemented a pledge system and all underlyings are held with a licensed custodian for securities (please refer to our prospectus). So whether you want to move it, trade it, invest it or grow it; it’s your investment, your choice."
        />
        <Faq
          faqQuestion="Is Mercuryo safe?"
          faqAnswer="We take our users’ safety very seriously. Security is a natural and
            foundational part of everything we do from developing and deploying
            code to building and running our platform."
        />
        <Faq
          faqQuestion="Does Mercuryo really have all clients asstes (all Crypto assets, BCI, Mercuryo Stocks, ETFs & Commodities   and Metals) backed 1:1?"
          faqAnswer="Yes, all of our customers' assets are physically backed up 1:1 and are stored in a highly secure environment."
        />
        <Faq
          faqQuestion="Do we speculate with client assets at all?"
          faqAnswer="No, we do not speculate with customers’ assets in any of the asset classes we offer to our customers (crypto assets, BCI, Bitpanda Stocks, ETFs & Commodities and Metals)."
        />
        <Faq
          faqQuestion="Mercuryo operates as a trustee - what does that mean for our clients?"
          faqAnswer="Bitpanda manages client assets as a trustee, the client remains the beneficial owner. But what does that mean?

Bitpanda holds clients crypto assets as trustee under a legally binding trust agreement with its customers and therefore there is a legally binding separation between our own assets and those of our customers.

We do not speculate with customers’ assets we hold. 

Customers have a right to separation and are not treated as unsecured creditors; therefore customers cannot lose their crypto assets in custody."
        />
        <Faq
          faqQuestion="How does ownership of the assets included in the crypto indices work?"
          faqAnswer="Ownership works just like with other assets. You are acquiring each single asset and not a basket."
        />
        <Faq
          faqQuestion="Do we plan on integrating hardware wallet interoperability?"
          faqAnswer="Thanks for your suggestion. We are working around the clock to improve our blockchain infrastructure, so our customers have all deposit/withdrawal options they need. Withdrawing or depositing to and from Bitpanda to your Ledger is already possible, by simply using your ERC-20 deposit/withdrawal address. A deeper integration is not planned right now, but we can consider it for the future. Hope this answers your question."
        />
        <Faq
          faqQuestion="What about 99% of BEST bring in 3 wallets? Are funds safe"
          faqAnswer="We are the safe custodian for our users and our distribution of user funds within these wallets is distributed between our many BEST holders.

These funds are on Bitpanda wallets, as BEST is our ecosystem token and users benefit most from the loyalty program, when they are holding it on our platform."
        />
        <Faq
          faqQuestion="What does cold wallet storage mean? How does it work?"
          faqAnswer="Mercuryo holds all assets of customers as a trustee and these are 100% backed by real assets and kept in a highly secure environment (warm and cold wallets). We do not speculate with our clients’ assets and they are never used as collateral."
        />
        <Faq
          faqQuestion="How does this work when Staking is involved?"
          faqAnswer="Thanks for your suggestion. We are working around the clock to improve our blockchain infrastructure, so our customers have all deposit/withdrawal options they need. Withdrawing or depositing to and from Bitpanda to your Ledger is already possible, by simply using your ERC-20 deposit/withdrawal address. A deeper integration is not planned right now, but we can consider it for the future. Hope this answers your question."
        />
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
