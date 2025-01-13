import React from 'react'
import "../css/svg.css";
import deposit from "../svgs/community.svg";
import community from "../svgs/community.svg";
import regulated from "../img/regulated.svg";
import trusted from "../img/trusted.svg";
import secure from "../img/secure.svg";


const Svg = () => {
  return (
    <div className="svg-overall-container">
      <div className="svg-container">
        <div className="svg-img-cont">
          <img className="svg-img" src={community} alt="Deposit-icon" />
        </div>
        <div className="svg-figure-div">
          <h3 className="svg-figure">+5,000,000</h3>
          <p className="svg-users">users</p>
        </div>
      </div>
      <div className="svg-container">
        <div className="svg-img-cont">
          <img className="svg-img" src={regulated} alt="Deposit-icon" />
        </div>
        <div className="svg-figure-div">
          <h3 className="svg-figure">16</h3>
          <p className="svg-users">European licences & registrations</p>
        </div>
      </div>
      <div className="svg-container">
        <div className="svg-img-cont">
          <img className="svg-img" src={trusted} alt="Deposit-icon" />
        </div>
        <div className="svg-figure-div">
          <h3 className="svg-figure">7.7k</h3>
          <p className="svg-users">trusted reviews</p>
        </div>
      </div>
      <div className="svg-container">
        <div className="svg-img-cont">
          <img className="svg-img" src={secure} alt="Deposit-icon" />
        </div>
        <div className="svg-figure-div">
          <h3 className="svg-figure">All</h3>
          <p className="svg-users">our funds are regularly validated</p>
        </div>
      </div>
    </div>
  );
}

export default Svg