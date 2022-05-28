import React from "react";

// import Myimage from "../image/promos/promos/promo_watch_series_6_lte__f8lrasjnry2y_small.jpg";

import Image2 from "../images/icons/icons/apple-tv-logo.png";
// import Image1 from "../images/home/home/actors.jpg";
import Image3 from "../images/icons/icons/watch-series5-logo.png";

import Image4 from "../images/icons/icons/arcade.png";
// import AppleNews from "../AppleNews/AppleNews";

export default function Main() {
  return (
    <div>
      <div>
        {/* function Firstsection() {
    return ( */}
        <div>
          <section className="first-hightlight-wrapper">
            <div className="container">
              <div className="title-wraper bold black">iPhone 12</div>

              <div className="description-wrapper black">Blast past fast.</div>
              <div className="price-wrapper grey">
                From $29.12/mo. for 24mo. or $699 before trade-in<sup>1</sup>
              </div>

              <div className="price-wrapper grey">
                Buy directly from Apple with special carrier offers.
              </div>

              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="apple">Learn more</a>
                  </li>
                  <li>
                    <a href="apple">Order</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        );
        {/* } */}
      </div>
      {/* function Secondsection() {
    return ( */}
      <div>
        <section className="second-hightlight-wrapper">
          <div className="container">
            {/* <div className="new-alert">
				New
			</div> */}

            <div className="title-wraper bold black">iphone12 pro</div>

            <div className="description-wrapper black">It's a leap year.</div>

            <div className="price-wrapper grey">
              From $41.62/mo. for 24mo. or $999 before trade-in<sup>2</sup>
              Buy directly from Apple with special carrier offers.
            </div>
            <div className="price-wrapper grey">
              Buy directly from Apple with special carrier offers.
            </div>

            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="apple">Learn more</a>
                </li>
                <li>
                  <a href="apple">Buy</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      ){/* } */}
      {/* function Thirdsection() {
    return ( */}
      <div>
        <section className="third-hightlight-wrapper">
          <div className="container">
            <div className="title-wraper bold">iPad Pro</div>

            <div className="description-wrapper">
              Supercharged by the Apple M1 chips.
            </div>

            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="apple">Learn more</a>
                </li>
                <li>
                  <a href="apple">Buy</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      ){/* } */}
      {/* function Fourthsection() {
    return ( */}
      <div>
        <section className="fourth-heghlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="left-side-container">
                  <div className="title-wraper">iMac</div>
                  <div className="description-wraper">Say hello.</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <a href="apple">Learn more</a>
                      </li>
                      <li>
                        <a href="apple">Buy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  <div className="title-wraper white">
                    <img src={/Myimage/} alt=""></img>
                  </div>

                  <div className="links-wrapper white">
                    <ul>
                      <li>
                        <a href="apple">Learn more</a>
                      </li>
                      <li>
                        <a href="apple">Buy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      ){/* } */}
      {/* function Fifthsection() {
    return ( */}
      <div>
        <section className="fifth-heghlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="left-side-container">
                  <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                      <img src={/Image1/} alt=""></img>
                    </div>
                  </div>

                  <div className="tvshow-logo-wraper">
                    <img src={Image2} alt=""></img>
                  </div>

                  <div className="watch-more-wrapper">
                    <a href="apple">Watch now on the Apple TV App</a>
                  </div>
                </div>
              </div>
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                      <img src={Image3} alt=""></img>
                    </div>
                  </div>
                  <div className="description-wraper">
                    With the Always-On Retina display.<br></br>
                    You’ve never seen a watch like this.
                  </div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <a href="apple">Learn more</a>
                      </li>
                      <li>
                        <a href="apple">Buy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      ){/* } */}
      {/* function Sixthsection() {
    return ( */}
      <div>
        <section className="sixth-heghlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="left-side-container">
                  <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                      <img src={Image4} alt=""></img>
                    </div>
                  </div>
                  <div className="description-wraper white">
                    Agent 8 is a small hero on a big mission.
                  </div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <a href="apple">
                          Play now<sup>2</sup>
                        </a>
                      </li>
                      <li>
                        <a href="apple">Learn about Apple Arcade</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  <div className="title-wraper">
                    Apple Card Monthly Installments
                  </div>
                  <div className="description-wraper">
                    Pay for your next iPhone over time, interest-free with Apple
                    Card.
                  </div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <a href="apple">Learn more</a>
                      </li>
                      <li>
                        <a href="apple">Apply now</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      ){/* } */}
    </div>
  );
}
