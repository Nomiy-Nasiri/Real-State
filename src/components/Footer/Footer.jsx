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
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
