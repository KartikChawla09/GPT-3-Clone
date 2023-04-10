import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-box">
      <h1 className="gradient__text main-text">
        Do you want to step in to the future before others
      </h1>
      <div className="boxed">
        <p>Request Early Access</p>
      </div>
      <div className="footer-links">
        <div className="footer-links-box1">
          <h1>GPT-3</h1>
          <p>
            Crechterwoord K12 182 DK Alknjkcb,<br></br> All Rights Reserved
          </p>
        </div>
        <div className="footer-links-box2">
          <h3>Links</h3>
          <h6>Overans</h6>
          <h6>Social Media</h6>
          <h6>Counters</h6>
          <h6>Contact</h6>
        </div>
        <div className="footer-links-box3">
          <h3>Company</h3>
          <h6>Terms & Conditions</h6>
          <h6>Privacy Policy</h6>
          <h6>Contact</h6>
        </div>
        <div className="footer-links-box4">
          <h3>Get In Touch</h3>
          <h6>Kartik Chawla</h6>
          <h6>Phone Number</h6>
          <h6>info@kartik.com</h6>
        </div>
      </div>
      <h6 className="copyright">© 2021 GPT-3. All rights reserved.</h6>
    </div>
  );
};

export default Footer;
