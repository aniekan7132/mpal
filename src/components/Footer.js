import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer-section">
      <div className="footer-sub-section">
        <div className="footer-log-div">
          <Link className="navbar-logo" to="/">
            Mercuryo<span>INVESTMENT • PAL</span>
          </Link>
        </div>
        <div className="footer-link-cont">
          <div className="footer-links-div">
            <p>Invest</p>
            <Link className="footer-link" to="/cryptocurrency">
              Cryptocurrency
            </Link>
            <Link className="footer-link" to="/stocks">
              Stocks
            </Link>
            <Link className="footer-link" to="/etfs">
              EFTs
            </Link>
            <Link className="footer-link" to="/metals">
              Metals
            </Link>
            <Link className="footer-link" to="/commodities">
              Commodities*
            </Link>
          </div>
          <div className="footer-links-div">
            <p>Company</p>
            <Link className="footer-link" to="">
              About
            </Link>
            <Link className="footer-link" to="/how-to-get-started">
              Ho to get started
            </Link>
            <Link className="footer-link" to="/who-can-use-mercuryo">
              Who can use Mercuryo
            </Link>
          </div>
          <div className="footer-links-div">
            <p>Follow</p>
            <Link className="footer-link" to="">
              LinkedIn
            </Link>
            <Link className="footer-link" to="">
              Twitter
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-text-content">
        <p className="footer-content-text">
          Cryptocurrency buy and sell services are provided by MoneyMaple Tech
          LTD registered at 810 Quayside Drive, suite 205, New Westminster, BC
          V3M 6B9, Canada under incorporation number BC1306168, MSB registration
          number: M21565803. IBAN services are provided by Monetley LTD,
          operating under the laws of England and Wales, registered at 2nd
          Floor, Berkeley Square House, Berkeley Square, London, United Kingdom,
          W1J 6BD, registered in the FCA as Electronic Money Institution (EMI)
          (FCA Reference number: 900921). Be aware of scams: Mercuryo provides
          its services only via Mercuryo.io, Mercuryopal.com and the official
          mobile application. Mercuryo is not affiliated with any other similar
          website domains and is not responsible for any acts taken by their
          owners.
        </p>
      </div>
      <div className="footer-copyright-div">
        <div className="footer-copyright-links">
          <Link className="footer-copyright-link" to="">
            Privacy Policy
          </Link>
          <Link className="footer-copyright-link" to="">
            Terms of Service
          </Link>
          <Link className="footer-copyright-link" to="">
            Cookie Policy
          </Link>
        </div>
        <p className="footer-copyright-text">&copy; {year} Bitpanda GmbH</p>
      </div>
    </div>
  );
};

export default Footer;
