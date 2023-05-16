import React from "react";
import { questions } from "./data.js";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

import Question from "./Question"
const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>About US</h4>
          <div className="footer-links">
          <p class="pa">Startup Junction is a project that is designed with an idea to generate funds for start-ups by serving as a medium of communication between Start-ups and Investors."</p>
          </div>
        </div>
          <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: Lucknow.
            </p>
            <p>
            <a href="https://www.facebook.com/startupjunction" className="facebook social">
        <FontAwesomeIcon icon={faFacebook}  />
      </a> &nbsp; startup_junction
            </p>
            <p>
            <a href="https://twitter.com/Muneemjunction" className="twitter social">
        <FontAwesomeIcon icon={faTwitter}  />
      </a> &nbsp; startup_junction
            </p>
            <p>
            <a href="https://www.instagram.com/startupjunction/" className="twitter social">
        <FontAwesomeIcon icon={faInstagram}  />
      </a> &nbsp; startup_junction
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +91 7800162000.
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: sjunction0012@gmail.com            </p>
           </div>
        </div>
        <div className="footer-box">
          <img src={"http://localhost:5000/images/logo.svg"} width="240px" alt="logo" />
  
        </div>
      </div>
    </section>
  );
};

export default Footer;