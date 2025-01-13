import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import HeadingOne from "../components/HeadingOne";
import cryptoBanner from "../img/crypto-banner.png";
import tradegate from "../img/Tradegate_Exchange_logo.webp";
import ls from "../img/LS.svg";
import "../css/etfs.css";
import currency from "../svgs/currencies.svg";
import swap from "../svgs/swap.svg";
import Footer from "../components/Footer";
import { faqEtfs } from "../data";

const Etfs = () => {
  // const faqData = [
  //   {
  //     question:
  //       "What are the main advantages in investing in Mercuryo commodities?",
  //     answer:
  //       "You invest in the actual underlying Exchange Traded Commodities (ETCs) through derivative contracts - and Mercuryo holds 100% of the underlying ETCs. Each derivative contract is always worth as much as the respective ETC",
  //   },
  //   {
  //     question: "How does React work?",
  //     answer: "React creates a virtual DOM to efficiently update the UI.",
  //   },
  //   {
  //     question: "What is JSX?",
  //     answer:
  //       "JSX is a syntax extension for JavaScript that allows you to write HTML in React.",
  //   },
  //   {
  //     question:
  //       "How are you able to offer commodities? Am I investing in actual commodities",
  //     answer:
  //       "You invest in the actual underlying Exchange Traded Commodities (ETCs) through derivative contracts - and Mercuryo holds 100% of the underlying ETCs. Each derivative contract is always worth as much as the respective ETC",
  //   },
  //   {
  //     question: "What is the difference between ETCs and ETFs?",
  //     answer:
  //       "Commodity ETFs invest in a commodity or basket or commodities; either by buying or selling the underlying commodity the ETF is meant to track. ETCs on the other hand, normally tracks the price of a single commodity or a commodity index and allows exposure as those prices fluctuate.",
  //   },
  //   {
  //     question:
  //       "Aren't metals a commodity? How's this different from  Mercuryo Metals",
  //     answer:
  //       "Yes. Metals are known as hard commodities and indeed they are. However, with Mercuryo Metals and unlike with Commodities, you buy shares of real gold, silver, palladium and platinum bars that are physically held in a secure vault.",
  //   },
  //   {
  //     question: "Which assets are available on Mercuryo",
  //     answer:
  //       "We are constantly expanding our product offering. Since feedback from our community is important to us, you will also have the opportunity to submit your suggestions on what we should list next. Please note that Bitpanda Commodities are only available on the Mercuryo Platform",
  //   },
  //   {
  //     question: "Who can invest on Mercuryo commodities",
  //     answer:
  //       "Anyone with residence in a European country can invest in ETCs on Mercuryo",
  //   },
  //   {
  //     question: "How should i decide which asset to invest in?",
  //     answer:
  //       "Sometimes, it isn’t easy to choose the right asset. That’s why we provide additional information for every asset. You can find company descriptions, analyst ratings, performance indicators and other KPIs on Bitpanda. For more information, please refer to our Helpdesk. Keep in mind that, as with other asset classes, Bitpanda will never provide any investment advice.",
  //   },
  //   {
  //     question:
  //       "What are tax implications for income associated with Bitpanda commodities*?",
  //     answer:
  //       "Since it’s possible that your investments can generate income and capital gains, there might be tax implications that you should be aware of. These implications depend on the tax rules of your home country, i.e. the country in which you are considered a resident for tax purposes. It is your responsibility to understand how to declare and pay taxes. ",
  //   },
  //   {
  //     question: "Can I set up a savings plan for Mercuryo Commodities",
  //     answer:
  //       "Yes. You can buy ETCs on a daily, weekly, biweekly or monthly basis. Set up as many savings plans as you want and combine commodities purchases with your other regular digital asset investments. This way you can diversify your portfolio while at the same time benefit from the cost average effect.",
  //   },
  // ];

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
      <div className="section-etfs">
        <div className="section-header">
          <div>
            <p className="commodities-sub-header">
              STOCKS* & ETFs* • 24/7 • COMMISSION FREE
            </p>
            <div className="section-heading-1">
              <HeadingOne header="Wall Street without the walls" />
            </div>
            <p className="commodities-text header-commodities-text">
              No matter the stock price, you can own fractions of your favourite
              companies from as little as €1 with zero commissions and tight
              spreads.
            </p>
            <div className="section-button">
              <Link
                className="etf-get-started-btn"
                to=""
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
          <div className="section-header-banner-div">
            <img
              className="section-header-banner"
              src={cryptoBanner}
              alt="Crypto-banner"
            />
            <p className="commodities-text mobile-past-performance-text">
              Past performance is fictional, for illustrative purposes only{" "}
              <br /> and no indication of future performance.
            </p>
          </div>
        </div>
        <div className="partners-logo-container">
          <p className="commodities-text header-commodities-text">
            Our partners:
          </p>
          <div className="partners-logo-div">
            <img className="partners-logo" src={ls} alt="" />
            <img className="partners-logo-1" src={tradegate} alt="" />
          </div>
        </div>
      </div>
      <div className="sub-etf-section">
        <div className="section-header section-header-2">
          <div className="section-header-container-left">
            <div className="commodities-sub-header-cont">
              <p className="commodities-sub-header">FRACTIONAL ASSETS</p>
            </div>
            <div className="section-heading">
              <HeadingOne header="Invest in fractions or the whole thing" />
            </div>
            <p className="commodities-text header-commodities-text">
              No matter the stock price, you can own fractions of your favourite
              companies from as little as €1.
            </p>
          </div>
          <div className="section-header-banner-div">
            <img
              className="section-header-banner"
              src={cryptoBanner}
              alt="Crypto-banner"
            />
            <p className="commodities-text">
              Past performance is fictional, for illustrative purposes only and
              no indication of future performance.
            </p>
          </div>
        </div>
      </div>
      <div className="sub-etf-section sub-section-padding">
        <div className="section-header">
          <div className="section-header-container-left">
            <div className="commodities-sub-header-cont">
              <p className="commodities-sub-header">INVEST 24/7</p>
            </div>
            <div className="section-heading">
              <HeadingOne header="Markets closed? Not anymore" />
            </div>
            <p className="commodities-text header-commodities-text">
              Invest whenever you want, even when the traditional stock market
              is closed.
            </p>
          </div>
          <div className="section-header-banner-div">
            <img
              className="section-header-banner"
              src={currency}
              alt="Crypto-banner"
            />
            <p className="commodities-text">
              Past performance is fictional, for illustrative purposes only and
              no indication of future performance.
            </p>
          </div>
        </div>
      </div>
      <div className="sub-etf-section sub-section-padding">
        <div className="section-header section-header-2">
          <div className="section-header-container-left">
            <div className="commodities-sub-header-cont">
              <p className="commodities-sub-header">
                SECURE WITH REDUCED COUNTERPARTY RISK
              </p>
            </div>
            <div className="section-heading">
              <HeadingOne header="Fully backed by physical assets" />
            </div>
            <p className="commodities-text header-commodities-text">
              Your investments are physically backed and held by a custody bank
              - keeping them safe at all times and reducing counterparty risk.
            </p>
          </div>
          <div className="section-header-banner-div">
            <img
              className="section-header-banner"
              src={swap}
              alt="Crypto-banner"
            />
          </div>
        </div>
      </div>
      <div className="sub-etf-section sub-section-padding">
        <div className="section-header">
          <div className="section-header-container-left">
            <div className="commodities-sub-header-cont">
              <p className="commodities-sub-header">ZERO COMMISSIONS</p>
            </div>
            <div className="section-heading">
              <HeadingOne header="Commission-free trading with tight spreads" />
            </div>
            <p className="commodities-text header-commodities-text">
              <li className="commission-list-items">No account fees</li>
              <li className="commission-list-items">No management fees</li>
              <li className="commission-list-items">No list fees</li>
              <li className="commission-list-items">No FX fees</li>
              <li className="commission-list-items">
                No fees on distributions or other payouts
              </li>
              <li className="commission-list-items">
                We don't charge commissions on any trades, ever.
              </li>
            </p>
          </div>
          <div className="section-header-banner-div">
            <img
              className="section-header-banner"
              src={swap}
              alt="Crypto-banner"
            />
            {/* <video width="320" height="240" controls>
            <source src={stocks} type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
            </video> */}
          </div>
        </div>
      </div>
      <div className="sub-etf-section sub-section-padding">
        <div className="section-header">
          <div className="section-header-container-left">
            <div className="commodities-sub-header-cont">
              <p className="commodities-sub-header">
                24/7 • FRACTIONAL • ZERO COMMISSIONS • SECURITY
              </p>
            </div>
            <div className="section-heading">
              <HeadingOne header="How does this work?" />
            </div>
            <p className="commodities-text header-commodities-text">
              1. Mercuryo purchases the underlying stocks through partner
              exchanges
            </p>
            <p className="commodities-text header-commodities-text">
              2. Our custody bank partners hold the stocks for safekeeping
            </p>
            <p className="commodities-text header-commodities-text">
              3. You invest in fractions of the stocks via derivatives
            </p>
          </div>
          <div className="section-header-banner-div">
            <img
              className="section-header-banner"
              src={swap}
              alt="Crypto-banner"
            />
            {/* <video width="320" height="240" controls>
            <source src={stocks} type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
            </video> */}
          </div>
        </div>
      </div>
      <div className="common-questions">
        <p className="commodities-sub-header footer-padding">FAQ</p>
        <div>
          <p className="common-questions-text">
            Common questions from
            <br /> investors like you"
          </p>
        </div>
        <div className="etf-faq-cont">
          {faqEtfs.map((item, index) => (
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
        {/* </div> */}
        <div className="faq-note-text-div">
          <p className="faq-note-text">
            This information is a marketing communication and is provided for
            informational purposes only. It does not constitute advice,
            recommendation or solicitation to enter into any transaction.
            Commodities are the underlying Exchange Traded Commodities of
            contracts offered as Mercuryo Commodities and are brought to you by
            Mercuryo Financial Services GmbH. For more information consult the
            prospectus at Mercuryo.com. Capital at risk. The financial
            instrument "Mercuryo Commodities" is not tradable on exchanges or
            other trading venues, but can be resold to Mercuryo at any time
            under the terms and conditions stated in the GTC and the contracts.
            The investment in securities involves risks. A total loss is
            possible.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Etfs;
