import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import HeadingOne from "../components/HeadingOne";
import Footer from "../components/Footer";
import "../css/whoCanUseMercuryo.css";
import helpdeskBanner from "../img/helpdesk_banner.jpg";
import { GetStartedText } from "./HowToGetStarted";
import { GetStartedHeader } from "./HowToGetStarted";
import { GetStartedNote } from "./HowToGetStarted";
import { GetStartedTip } from "./HowToGetStarted";
import cta from "../img/cta_ticket.svg";
import feedback from "../img/cta_feedback.svg"
import faq from "../img/cta_faq.svg"

const WhoCanUseMercuryo = () => {
  return (
    <div>
      <NavBar />
      <div className="section-who-can-use">
        <div>
          <HeadingOne header="Who can use Mercuryo?" />
        </div>

        <div>
          <img
            className="helpdesk-banner"
            src={helpdeskBanner}
            alt="Helpdesk-banner"
          />
        </div>

        <GetStartedText getStartedText="At Mercuryo, we strive to make our services available to as many people as possible, which is why we are always on a mission to break down the barriers to personal finance and bring traditional financial products into the 21st century." />

        <GetStartedHeader getStartedHeader="Requirements" />
        <div className="requirement-div">
          <p className="requirement-text">
            Before joining us, there are a few things you need to keep in mind:
          </p>
          <ul className="requirement-list-div">
            <li>You must be at least 18 years of age</li>
            <li>
              You must possess a valid identity document issued by one of your
              country
            </li>
            <li>
              You must reside in any of the countries where our services are
              currently available
            </li>
          </ul>
        </div>

        <GetStartedHeader getStartedHeader="Ticked all the boxes?" />

        <p className="requirement-text">
          Great! Why not <Link>sign up</Link> and join the Bitpanda family?
        </p>

        <GetStartedHeader getStartedHeader="Don’t meet all three requirements?" />

        <p className="requirement-text">
          There is unfortunately nothing we can do to complete your verification
          if you don't meet all of the above points as our verification services
          are unable to verify your account.
        </p>
        <p className="requirement-text">
          Furthermore, persons with US citizenship or who are located in the
          United States may not become a Mercuryo user according to regulatory
          reasons.
        </p>
        <GetStartedTip
          note="Tip:"
          noteText="As Mercuryo is growing rapidly, we might include other documents and countries in the future, but we cannot guarantee this at this point. Any update regarding this topic will be published on the Mercuryo Blog and in the linked articles mentioned above."
        />

        <GetStartedHeader getStartedHeader="Interested in a business account?" />

        <p className="requirement-text">
          If you are interested in creating an account for your business, start
          by signing up.
        </p>
      </div>
      <div className="still-have-questions">
        <div className="left-container">
          <GetStartedHeader
            getStartedHeader="Still have questions?"
            className="get-started-header-white"
          />
          <p className="reach-out">Reach out to us directly</p>
        </div>

        <div>
          <div className="card-wrapper-container">
            <div className="card-wrapper">
              <div>
                <img src={cta} />
              </div>
              <b className="card-header">Support ticket</b>
              <p className="card-text">Submit a request about your problem</p>
            </div>
            <div className="card-wrapper">
              <div>
                <img src={faq} />
              </div>
              <b className="card-header">FAQ</b>
              <p className="card-text">
                Get an overview about frequently asked questions
              </p>
            </div>
            <div className="card-wrapper">
              <div>
                <img src={feedback} />
              </div>
              <b className="card-header">Feedback</b>
              <p className="card-text">
                Not happy with something? Raise a complaint
              </p>
            </div>
          </div>
          <p className="link-text">
            As a Mercuryo Club member, you have additional options to reach out.{" "}
            <Link className="login-link">Login</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WhoCanUseMercuryo;
