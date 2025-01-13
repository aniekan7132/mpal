import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import HeadingOne from "../components/HeadingOne";
import CustomButton from "../components/styles/Custombutton";
import Footer from "../components/Footer";
import "../css/commodities.css";
import cloudMoney from "../svgs/verify.svg";
import trade from "../svgs/trade.svg";
import verify from "../svgs/verify.svg";
import lpVisual from "../img/lp-visual.webp";
import lpVisual2 from "../img/lp-visual-2.webp";
import lpVisual3 from "../img/lp-visual-3.webp";
import { TbArrowsTransferDown } from "react-icons/tb";
import iconRegister from "../img/icons-register.svg";
import iconVerify from "../img/icons-verify.svg";
import iconDeposit from "../img/icons-deposit.svg";
import icontTrade from "../img/icons-trade.svg";
import { IoMdClose } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import cryptoBanner from "../img/crypto-banner.png";
// import { useState } from "react";

const Commodities = () => {
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
            {close && <IoMdAdd className="icon" onClick={handleOpen} />}
            {open && <IoMdClose className="icon" onClick={handleClose} />}
          </p>
        </div>
        {open && <p className="faq-answer">{faqAnswer}</p>}
      </div>
    );
  };

  return (
    <div>
      <>
        <NavBar />
        <div className="commodities-section">
          <div className="overall-commodities-header-cont">
            <div>
              <div className="commodities-header">
                <HeadingOne header="The simple way to buy and sell commodities*" />
              </div>
              <div>
                {" "}
                <p className="commodities-text header-commodities-text header-text-width">
                  Start trading key commodities* like oil, natural gas,
                  aluminium, wheat and more, from as little as €1.
                </p>
              </div>
              <div className="commodities-button">
                <div>
                  <Link
                    className="start-trading-btn"
                    // style={{
                    //   background: "#27D17F",
                    //   padding: "15px 45px",
                    //   borderRadius: "5px",
                    //   color: "#FFFFFF",
                    //   fontSize: "1.3rem",
                    //   fontWeight: 600,
                    // }}
                    handleClick={() => {}}
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>
            <div className="commodities-header-image-div">
              <img
                className="section-header-banner"
                src={cryptoBanner}
                alt="Crypto-banner"
              />
            </div>
          </div>

          <div className="commodities-icon-container">
            <div className="commodities-icon-div">
              <div className="trade-icon-div">
                <img className="trade-icon" src={cloudMoney} alt="" />
              </div>
              <div>
                <p className="commodities-text">
                  Earn from short term
                  <br /> price movements
                </p>
              </div>
            </div>
            <div className="commodities-icon-div">
              <div className="trade-icon-div">
                <img className="trade-icon" src={trade} alt="" />
              </div>
              <div>
                <p className="commodities-text">
                  Invest 24/7, <br />
                  even on weekends
                </p>
              </div>
            </div>
            <div className="commodities-icon-div">
              <div className="trade-icon-div">
                <TbArrowsTransferDown />
              </div>
              <div>
                <p className="commodities-text">
                  Diversify and hedge
                  <br /> against inflation
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="all-in-one-place-cont">
          <div className="all-in-one-image-div">
            <img className="all-in-one-image" src={lpVisual} alt="" />
          </div>
          <div className="all-in-one-right-div">
            <p className="commodities-sub-header">ALL IN ONE PLACE</p>
            <h2 className="all-in-one-header">
              Trade oil, gas and 28 other commodities*
            </h2>
            <p className="commodities-text header-commodities-text">
              Get access to the commodities* you want — right alongside your
              crypto, stocks* and metals.
            </p>
            <div className="commodities-button">
              <Link
                className="start-trading-btn"
                // style={{
                //   background: "#27D17F",
                //   padding: "15px 45px",
                //   borderRadius: "5px",
                //   color: "#FFFFFF",
                //   fontSize: "1.3rem",
                //   fontWeight: 400,
                // }}
                handleClick={() => {}}
              >
                Get started
              </Link>
            </div>
          </div>
        </div>

        <div className="all-in-one-place-cont all-in-one-place-cont-2 no-border-bottom">
          <div className="all-in-one-image-div">
            <img className="all-in-one-image" src={lpVisual2} alt="" />
          </div>
          <div className="all-in-one-right-div">
            <p className="commodities-sub-header">DIVERSIFY YOUR PORTFOLIO</p>
            <h2 className="all-in-one-header">Hedge against inflation</h2>
            <p className="commodities-text header-commodities-text">
              Counter rising living costs and benefit from the short term price
              movements of key commodities*.
            </p>
            <div className="commodities-button">
              <Link
                className="start-trading-btn"
                // style={{
                //   background: "#27D17F",
                //   padding: "15px 45px",
                //   borderRadius: "5px",
                //   color: "#FFFFFF",
                //   fontSize: "1.3rem",
                //   fontWeight: 400,
                // }}
                handleClick={() => {}}
              >
                Get started
              </Link>
            </div>
          </div>
        </div>

        <div className="all-in-one-place-cont no-border-bottom">
          <div className="all-in-one-image-div">
            <img className="all-in-one-image" src={lpVisual3} alt="" />
          </div>
          <div className="all-in-one-right-div">
            <p className="commodities-sub-header">Start with €1</p>
            <h2 className="all-in-one-header">
              Trade oil, gas and 28 other commodities*
            </h2>
            <p className="commodities-text header-commodities-text">
              Like all Bitpanda assets, you can start investing in your
              favourite commodities* with as little as €1.
            </p>
            <div className="commodities-button">
              <Link
                className="start-trading-btn"
                // style={{
                //   background: "#27D17F",
                //   padding: "15px 45px",
                //   borderRadius: "5px",
                //   color: "#FFFFFF",
                //   fontSize: "1.3rem",
                //   fontWeight: 400,
                // }}
                handleClick={() => {}}
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
        <div className="start-trading-commodities">
          <p className="commodities-sub-header text-centered">
            HOW DOES IT WORK?
          </p>
          <h2 className="all-in-one-header text-centered">
            Start trading commodities* in minutes
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
              // style={{
              //   background: "#27D17F",
              //   padding: "15px 45px",
              //   borderRadius: "5px",
              //   color: "#FFFFFF",
              //   fontSize: "1.3rem",
              //   fontWeight: 400,
              // }}
              handleClick={() => {}}
            >
              Get started
            </Link>
          </div>
          <div className="commodities-risk-test">
            <p className="commodities-text header-commodities-text">
              Risks of investing in Mercuryo Commodities:
            </p>
            <ul className="commodities-text header-commodities-text ">
              <li>Considerable price fluctuations are possible</li>
              <li>Capital loss is possible</li>
              <li>
                Price risk, credit risk, liquidity risk, counterparty risk and
                currency risk are applicable
              </li>
            </ul>
          </div>
        </div>
        <div className="faq-section">
          <div className="faq-commodities-header">
            <HeadingOne header="FAQ" />
          </div>
          <div className="faq-container">
            <Faq
              faqQuestion="What are the main advantages in investing in Mercuryo commodities"
              faqAnswer="Mercuryo Commodities is a simple and innovative way to participate in the price movements of commodities* without all the financial complexity. You can now invest in your preferred commodities*, any time you want. Want to gain short term exposure to key commodities? Mercuryo Commodities is a great way to do that."
              handleOpen={handleClickOpen}
              handleClose={handleClickClose}
            />
            <Faq
              faqQuestion="How are you able to offer commodities? Am I investing in actual commodities"
              faqAnswer="You invest in the actual underlying Exchange Traded Commodities (ETCs) through derivative contracts - and Mercuryo holds 100% of the underlying ETCs. Each derivative contract is always worth as much as the respective ETC"
            />
            <Faq
              faqQuestion="What is the difference between ETCs and ETFs?"
              faqAnswer="Commodity ETFs invest in a commodity or basket or commodities; either by buying or selling the underlying commodity the ETF is meant to track. ETCs on the other hand, normally tracks the price of a single commodity or a commodity index and allows exposure as those prices fluctuate."
            />
            <Faq
              faqQuestion="Aren't metals a commodity? How's this different from  Mercuryo Metals"
              faqAnswer="Yes. Metals are known as hard commodities and indeed they are. However, with Mercuryo Metals and unlike with Commodities, you buy shares of real gold, silver, palladium and platinum bars that are physically held in a secure vault."
            />
            <Faq
              faqQuestion="Which assets are available on Mercuryo"
              faqAnswer="We are constantly expanding our product offering. Since feedback from our community is important to us, you will also have the opportunity to submit your suggestions on what we should list next. Please note that Bitpanda Commodities are only available on the Mercuryo Platform"
            />
            <Faq
              faqQuestion="Who can invest on Mercuryo commodities"
              faqAnswer="Anyone with residence in a European country can invest in ETCs on Mercuryo"
            />
            <Faq
              faqQuestion="How should i decide which asset to invest in?"
              faqAnswer="Sometimes, it isn’t easy to choose the right asset. That’s why we provide additional information for every asset. You can find company descriptions, analyst ratings, performance indicators and other KPIs on Bitpanda. For more information, please refer to our Helpdesk. Keep in mind that, as with other asset classes, Bitpanda will never provide any investment advice."
            />
            <Faq
              faqQuestion="What are tax implications for income associated with Bitpanda commodities*?"
              faqAnswer="Since it’s possible that your investments can generate income and capital gains, there might be tax implications that you should be aware of. These implications depend on the tax rules of your home country, i.e. the country in which you are considered a resident for tax purposes. It is your responsibility to understand how to declare and pay taxes. "
            />
            <Faq
              faqQuestion="Can I set up a savings plan for Mercuryo Commodities"
              faqAnswer="Yes. You can buy ETCs on a daily, weekly, biweekly or monthly basis. Set up as many savings plans as you want and combine commodities purchases with your other regular digital asset investments. This way you can diversify your portfolio while at the same time benefit from the cost average effect."
            />
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
            prospectus at Mercuryo.com. Capital at risk. The financial
            instrument "Mercuryo Commodities" is not tradable on exchanges or
            other trading venues, but can be resold to Mercuryo at any time
            under the terms and conditions stated in the GTC and the contracts.
            The investment in securities involves risks. A total loss is
            possible.
          </p>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default Commodities;
