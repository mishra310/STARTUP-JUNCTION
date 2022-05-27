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
          <p class="pa">StartupMuneem is a project that is designed with an idea to generate funds for start-ups by serving as a medium of communication between Start-ups and Investors."</p>
          </div>
        </div>
          <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: Lucknow.
            </p>
            <p>
            <a href="https://www.facebook.com/Startup-Muneem-105782222143086" className="facebook social">
        <FontAwesomeIcon icon={faFacebook}  />
      </a> &nbsp; MuneemStartup
            </p>
            <p>
            <a href="https://twitter.com/MuneemStartup" className="twitter social">
        <FontAwesomeIcon icon={faTwitter}  />
      </a> &nbsp; MuneemStartup
            </p>
            <p>
            <a href="https://www.instagram.com/startupmuneem/" className="twitter social">
        <FontAwesomeIcon icon={faInstagram}  />
      </a> &nbsp; Startupmuneem
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +91 7510 076 937.
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: startupmuneem3@gmail.com            </p>
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