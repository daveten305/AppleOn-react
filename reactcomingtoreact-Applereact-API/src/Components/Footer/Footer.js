import React from "react";
import  Image from '../images/icons/icons/16.png'
import $ from 'jquery';


export default function Footer() {
  
    if ($(window).width() <= 768){	
      $('.footer-links-wrapper').addClass("someClass");
  }else{
      $('.footer-links-wrapper').removeClass("someClass");
  }
  $(window).on('resize', function(event){
      if ($(window).width() <= 768){	
            $('.footer-links-wrapper').addClass("someClass");
      }else{
            $('.footer-links-wrapper').removeClass("someClass");
            $('.footer-links-wrapper ul').show();
      }	
  });
  
  // Footer collapse functionality 
  $(document).on("click", ".someClass h3", function(){
      $(this).next('ul').slideToggle();
      $(this).toggleClass("expanded");
      
  });
  return (
    <div>
      <footer className="footer-wrapper">
        <div className="container">
          <div className="upper-text-container">
            <p>
              1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
              promotional pricing is after trade‑in of iPhone 8 Plus and iPhone
              X in good condition. Additional trade‑in values require purchase
              of a new iPhone, subject to availability and limits. Must be at
              least 18. Apple or its trade-in partners reserve the right to
              refuse or limit any Trade In transaction for any reason. In‑store
              trade‑in requires presentation of a valid, government-issued photo
              ID (local law may require saving this information). Sales tax may
              be assessed on full value of new iPhone. Additional terms from
              Apple or Apple’s trade-in partners may apply. Monthly pricing:
              Available to qualified customers and requires 0% APR, 24-month
              installment loan with Citizens One or Apple Card Monthly
              Installments and iPhone activation with AT&T, Sprint, T-Mobile, or
              Verizon. Taxes and shipping not included. Additional Apple Card
              Monthly Installments terms are in the
              <a
                href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
                target="_blank/"
              >
                Customer Agreement
              </a>
              . Additional iPhone Payments terms are
              <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
                here
              </a>
              .
            </p>
            <p>
              2. Subscription required.
              <br />
              <br />
              Magic Keyboard sold separately.
              <br />
              <br />
              Apple TV+ is $4.99/month after free trial. One subscription per
              Family Sharing group. Offer good for 3 months after eligible
              device activation. Plan automatically renews until cancelled.
              Restrictions and other{" "}
              <a href="https://www.apple.com/promo/">terms </a> apply.
            </p>
          </div>
          <div className="footer-links-wrapper row">
            <div className="links-wrapper-1 col-sm-12 col-md">
              <h3 className="fisrtCol">Shop and Learn</h3>
              <ul id="column0">
                <li>
                  <a href="/apple/">Mac</a>
                </li>
                <li>
                  <a href="/apple/">iPad</a>
                </li>
                <li>
                  <a href="/apple/">iPhone</a>
                </li>
                <li>
                  <a href="/apple/">Watch</a>
                </li>
                <li>
                  <a href="/apple/">TV</a>
                </li>
                <li>
                  <a href="/apple/">Music</a>
                </li>
                <li>
                  <a href="/apple/">AirPods</a>
                </li>
                <li>
                  <a href="/apple/">HomePod</a>
                </li>
                <li>
                  <a href="/apple/">iPod touch</a>
                </li>
                <li>
                  <a href="/apple/">Accessories</a>
                </li>
                <li>
                  <a href="/apple/">Gift Cards</a>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-2 col-sm-12 col-md">
              <h3 className="secondCol">Services</h3>
              <ul id="column1">
                <li>
                  <a href="/apple/">Apple Music</a>
                </li>
                <li>
                  <a href="/apple/">Apple News+</a>
                </li>
                <li>
                  <a href="/apple/">Apple TV+</a>
                </li>
                <li>
                  <a href="/apple/">Apple Arcade</a>
                </li>
                <li>
                  <a href="/apple/">Apple Card</a>
                </li>
                <li>
                  <a href="/apple/">iCloud</a>
                </li>
              </ul>
              <h3 className="secondCol1">Account</h3>
              <ul id="third">
                <li>
                  <a href="/apple/">Manage Your Apple ID</a>
                </li>
                <li>
                  <a href="/apple/">Apple Store Account</a>
                </li>
                <li>
                  <a href="/apple/">iCloud.com</a>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-3 col-sm-12 col-md">
              <h3 className="fourth">Apple Store</h3>
              <ul id="fourth4">
                <li>
                  <a href="/apple/">Find a Store</a>
                </li>
                <li>
                  <a href="/apple/">Genius Bar</a>
                </li>
                <li>
                  <a href="/apple/">Today at Apple</a>
                </li>
                <li>
                  <a href="/apple/">Apple Camp</a>
                </li>
                <li>
                  <a href="/apple/">Field Trip</a>
                </li>
                <li>
                  <a href="/apple/">Apple Store App</a>
                </li>
                <li>
                  <a href="/apple/">Refurbished and Clearance</a>
                </li>
                <li>
                  <a href="/apple/">Financing</a>
                </li>
                <li>
                  <a href="/apple/">Apple Trade In</a>
                </li>
                <li>
                  <a href="/apple/">Order Status</a>
                </li>
                <li>
                  <a href="/apple/">Shopping Help</a>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-4 col-sm-12 col-md">
              <h3 className="fifth">For Business</h3>
              <ul id="fifth5">
                <li>
                  <a href="/apple/">Apple and Business</a>
                </li>
                <li>
                  <a href="/apple/">Shop for Business</a>
                </li>
              </ul>
              <h3 className="sixth">For Education</h3>
              <ul id="sixth6">
                <li>
                  <a href="/apple/">Apple and Education</a>
                </li>
                <li>
                  <a href="/apple/">Shop for College</a>
                </li>
              </ul>
              <h3 className="seventh">For Healthcare</h3>
              <ul id="seventh7">
                <li>
                  <a href="/apple/">Manage Your Apple ID</a>
                </li>
                <li>
                  <a href="/apple/">Apple Store Account</a>
                </li>
                <li>
                  <a href="/apple/">iCloud.com</a>
                </li>
              </ul>
              <h3 className="eight">For Government</h3>
              <ul id="eight8">
                <li>
                  <a href="/apple/">Apple and Education</a>
                </li>
                <li>
                  <a href="/apple/">Shop for College</a>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-5 col-sm-12 col-md">
              <h3 className="ninth">Apple Values</h3>
              <ul id="ninth9">
                <li>
                  <a href="/apple/">Find a Store</a>
                </li>
                <li>
                  <a href="/apple/">Genius Bar</a>
                </li>
                <li>
                  <a href="/apple/">Today at Apple</a>
                </li>
                <li>
                  <a href="/apple/">Apple Camp</a>
                </li>
                <li>
                  <a href="/apple/">Field Trip</a>
                </li>
                <li>
                  <a href="/apple/">Apple Store App</a>
                </li>
              </ul>
              <h3 className="tenth">About Apple</h3>
              <ul id="tenth10">
                <li>
                  <a href="/apple/">Find a Store</a>
                </li>
                <li>
                  <a href="/apple/">Genius Bar</a>
                </li>
                <li>
                  <a href="/apple/">Today at Apple</a>
                </li>
                <li>
                  <a href="/apple/">Apple Camp</a>
                </li>
                <li>
                  <a href="/apple/">Field Trip</a>
                </li>
                <li>
                  <a href="/apple/">Apple Store App</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-apple-wrapper">
            More ways to shop: <a href="/apple/">Find an Apple Store</a> or
            <a href="/apple/">other retailer</a> near you. Or call
            1-800-MY-APPLE.
          </div>
          <div className="copyright-wrapper row">
            <div
              className="
              copyright
              col-sm-12
              order-2
              col-md-8
              order-md-1
              col-lg-4
              order-lg-1
            "
            >
              Copyright &copy; 2020 Apple Inc. All rights reserved.
            </div>
            <div className="footer-links-terms col-sm-12 order-3 col-lg-6 order-lg-2">
              <ul>
                <li>
                  <a href="/apple/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/apple/">Terms of Use</a>
                </li>
                <li>
                  <a href="/apple/">Sales and Refunds</a>
                </li>
                <li>
                  <a href="/apple/">Legal</a>
                </li>
                <li>
                  <a href="/apple/">Site Map</a>
                </li>
              </ul>
            </div>
            <div
              className="
              footer-country
              col-sm-12
              order-1
              col-md-4
              order-md-2
              text-md-right
              col-lg-2
              order-lg-3
            ">
              <div className="flag-wrapper"><img src={Image} alt="" />
              </div>
                          
              <div className="footer-country-name">United States</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
