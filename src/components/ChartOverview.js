import React, { useRef } from "react";
import { Link } from "react-router-dom";
import xau from "../img/xau.svg";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import "../css/chartOverview.css";

const ChartOverview = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 150;
    } else {
      current.scrollLeft += 150;
    }
  };

  return (
    <div className="chart-overall">
      <div className="chart-direction-buttons">
        <GrFormPreviousLink
          className="chart-direction-icons"
          onClick={() => scroll("left")}
        />
        <GrFormNextLink
          className="chart-direction-icons"
          onClick={() => scroll("right")}
        />
      </div>

      <div className="chart-section" ref={scrollRef}>
        <div className="chart-card-cont">
          <div className="chart-card">
            <div className="chart-card-header-div">
              <div>
                <img
                  className="chart-asset-logo"
                  src={xau}
                  alt="Asset Symbol"
                />
              </div>
              <div>
                <p className="chart-asset-name">Gold</p>
                <p className="asset-short-name">XAU</p>
              </div>
            </div>
            <div className="chart-card-price-cont">
              <p className="chart-asset-amount">$71.26</p>
              <p className="chart-price-movement">$1.15(-1.59%)</p>

              <div className="chart-line">CHART</div>
              <div>
                <Link className="chart-action-btn" to="">
                  Buy
                </Link>
              </div>
            </div>
          </div>
          <div className="chart-card">
            <div className="chart-card-header-div">
              <div>
                <img
                  className="chart-asset-logo"
                  src={xau}
                  alt="Asset Symbol"
                />
              </div>
              <div>
                <p className="chart-asset-name">Gold</p>
                <p className="asset-short-name">XAU</p>
              </div>
            </div>
            <div className="chart-card-price-cont">
              <p className="chart-asset-amount">$71.26</p>
              <p className="chart-price-movement">$1.15(-1.59%)</p>

              <div className="chart-line">CHART</div>
              <div>
                <Link className="chart-action-btn" to="">
                  Buy
                </Link>
              </div>
            </div>
          </div>
          <div className="chart-card">
            <div className="chart-card-header-div">
              <div>
                <img
                  className="chart-asset-logo"
                  src={xau}
                  alt="Asset Symbol"
                />
              </div>
              <div>
                <p className="chart-asset-name">Gold</p>
                <p className="asset-short-name">XAU</p>
              </div>
            </div>
            <div className="chart-card-price-cont">
              <p className="chart-asset-amount">$71.26</p>
              <p className="chart-price-movement">$1.15(-1.59%)</p>

              <div className="chart-line">CHART</div>
              <div>
                <Link className="chart-action-btn" to="">
                  Buy
                </Link>
              </div>
            </div>
          </div>
          <div className="chart-card">
            <div className="chart-card-header-div">
              <div>
                <img
                  className="chart-asset-logo"
                  src={xau}
                  alt="Asset Symbol"
                />
              </div>
              <div>
                <p className="chart-asset-name">Gold</p>
                <p className="asset-short-name">XAU</p>
              </div>
            </div>
            <div className="chart-card-price-cont">
              <p className="chart-asset-amount">$71.26</p>
              <p className="chart-price-movement">$1.15(-1.59%)</p>

              <div className="chart-line">CHART</div>
              <div>
                <Link className="chart-action-btn" to="">
                  Buy
                </Link>
              </div>
            </div>
          </div>
          <div className="chart-card">
            <div className="chart-card-header-div">
              <div>
                <img
                  className="chart-asset-logo"
                  src={xau}
                  alt="Asset Symbol"
                />
              </div>
              <div>
                <p className="chart-asset-name">Gold</p>
                <p className="asset-short-name">XAU</p>
              </div>
            </div>
            <div className="chart-card-price-cont">
              <p className="chart-asset-amount">$71.26</p>
              <p className="chart-price-movement">$1.15(-1.59%)</p>

              <div className="chart-line">CHART</div>
              <div>
                <Link className="chart-action-btn" to="">
                  Buy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartOverview;
