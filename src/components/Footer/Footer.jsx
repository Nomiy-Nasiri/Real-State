import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" />
          <span className="secondaryText">
            heloasdf asd aSD asd aSD Asd aSD ASD ASDasd ASDAsd
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">new yourk 3423 st 23 UGA</span>
          <div className="flexCenter f-menu">
            <span className="secondaryText">Property</span>
            <span className="secondaryText">Services</span>
            <span className="secondaryText">Product</span>
            <span className="secondaryText">About Us </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
