import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../css/howToGetStarted.css";
import { GrCircleAlert } from "react-icons/gr";

export const GetStartedHeader = ({ getStartedHeader, className }) => {
  return <h2 className={`${"get-started-header"} ${className}`}>{getStartedHeader}</h2>;
};

export const GetStartedText = ({ getStartedText }) => {
  return <p className="get-started-text">{getStartedText}</p>;
};

const GetStartedLink = ({ linkText }) => {
  return (
    <>
      {" "}
      <li className="list">
        <Link className="get-started-link">{linkText}</Link>
      </li>
    </>
  );
};

export const GetStartedTextBig = ({ textBig }) => {
  return <p className="caution-text-big">{textBig}</p>;
};

export const GetStartedNote = ({ note, noteText, className }) => {
  return (
    <div className={`${"caution-div"} ${className}`}>
      <div>
        <GrCircleAlert className="caution-icon" />
      </div>
      <div>
        <p className="caution-text">
          <span className="note">{note} </span>
          {noteText}
        </p>
      </div>
    </div>
  );
};

export const GetStartedTip = ({ note, noteText, className }) => {
  return (
    <div className={`${"tip-div"} ${className}`}>
      <div>
        <GrCircleAlert className="tip-icon" />
      </div>
      <div>
        <p className="tip-text">
          <span className="tip">{note} </span>
          {noteText}
        </p>
      </div>
    </div>
  );
};

const HowToGetStarted = () => {
  return (
    <div>
      <NavBar />
      <div className="get-started-section">
        <GetStartedHeader getStartedHeader="Create, verify and secure your account" />
        <GetStartedText
          getStartedText="The first step in joining the Bitpanda family is creating an account,
      which is easy and only takes a couple of minutes of your time:"
        />
        <GetStartedLink linkText="How do I create an account?" />
        {/* <li className="list">
          <Link className="get-started-link">How do I create an account?</Link>
        </li> */}
        <GetStartedNote
          note="Note:"
          noteText="Opening and Maintaining a
          Mercuryo is 100% free of charge"
        />
        <GetStartedText getStartedText="Next, Mercuryo users are required to verify their Mercuryo accounts due to the AML5 EU regulation. Verification is a quick and easy process, which we are happy to support you with in the following article:" />
        <GetStartedLink linkText="How to verify?" />
        <GetStartedNote
          note="Note:"
          noteText="To use our services, you need to be at least 18 years of age. Additionally, please check if you reside in one of the countries which the verification process is supported in and make sure to use one of the accepted documents for verification. "
        />
        <GetStartedText getStartedText="Verified? Great – now it is time to make sure your account is safe. As your security is our priority, we strongly recommend that you enable two-factor authentication (2FA). For further information, feel free to have a look at the following articles:" />
        <GetStartedLink linkText="What is two-factor authentication (2FA) and how do I activate it?" />
        <GetStartedLink linkText="How can I secure my Mercuryo account?" />
        <GetStartedNote
          note="Note:"
          noteText="Do not give anyone remote access to your device and do not share your login details with anyone. Bitpanda will never ask for your password or personal information."
        />
        <GetStartedHeader getStartedHeader="Which services does Mercuryo offer?" />
        <GetStartedText getStartedText="Now that you have successfully verified and secured your account, you can start using the full scope of Bitpanda. Here is what you can do:" />
        <GetStartedTextBig textBig="Manage your fiat wallet and buy or sell cryptocurrencies" />
        <GetStartedText getStartedText="Through your personal fiat wallet, you may deposit funds to or withdraw them from your account at any time. Also, your wallet gives you the option to buy and sell cryptocurrencies 24/7. To find out more about how this is done, please follow the steps outlined in the following articles: " />
        <GetStartedLink linkText="How can I deposit money to my fiat wallet and how do I buy cryptocurrencies?" />
        <GetStartedLink linkText="How can I sell cryptocurrencies and how do I withdraw money from my fiat wallet?" />
        <GetStartedNote
          note="Note:"
          noteText="Please note that any bank account you want to use on Mercuryo for deposits and withdrawals must be in your name, with the minimum amount for fiat transactions being EUR 10."
        />
        <GetStartedNote
          note="Note:"
          noteText="Note: Please pay attention to the deposit and withdrawal limits for fiat and cryptocurrencies."
        />
        <GetStartedNote
          note="Note:"
          noteText="Tip: If your bank supports SEPA Instant, transfers up to EUR 100,000 arrive within minutes. Otherwise, it might take 1-3 business days."
        />
        <GetStartedTextBig textBig="Deposit and send cryptocurrencies" />
        <GetStartedText getStartedText="If you send coins to your deposit addresses, your Bitpanda wallet will be automatically credited with the correct amount, after confirmation by the blockchain network. To deposit cryptocurrencies to your Bitpanda wallet or to send your cryptocurrencies from Bitpanda to another wallet, please follow the steps in the articles below:" />
        <GetStartedLink linkText="How can I deposit cryptocurrencies?" />
        <GetStartedLink linkText="How can I send my cryptocurrencies?" />
        <GetStartedNote
          note="Note:"
          noteText="If a cryptocurrency is in trade only mode, it means it is currently only available for purchase and sale on Bitpanda. Once all the wallet features are available, we will announce this."
        />
        <GetStartedTextBig textBig="Buy and sell Mercuryo metals" />
        <GetStartedText getStartedText="With Mercuryo Metals, we give you the ability to trade and swap gold, silver, palladium and platinum on Bitpanda. You will be trading metal tokens that are backed by physical metal supplies safely stored in a secure vault in Switzerland. For more detailed information, please refer to the article below:" />
        <GetStartedLink linkText="How do I create a savings plan" />
        <GetStartedTextBig textBig="Conduct online payment transactions with your own Mercuryo Card" />
        <GetStartedText getStartedText="The Mercuryo Card is the easiest way to spend your investments online and in shops all across the globe. You can use all supported cryptocurrency wallets, metals wallets, Bitpanda Stocks, and the EUR wallet for your daily purchases. For more detailed information, please refer to the article below:" />
        <GetStartedLink linkText="What is the Mercuryo Card and what are its benefits?" />
        <GetStartedHeader getStartedHeader="Any questions?" />
        <GetStartedText getStartedText="To stay in touch with us and read about the latest crypto developments, you might want to visit our Mercuryo Blog or find out about where you can follow Mercuryo on social media." />
        <GetStartedNote
          note="Note:"
          noteText="To be notified about updates, click on Subscribe to updates on our status page and select the relevant topics you would like to be notified about."
        />
        <GetStartedText getStartedText="If you still have open questions, please do not hesitate to contact us." />
      </div>
      <Footer />
    </div>
  );
};

export default HowToGetStarted;
