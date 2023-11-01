import React from "react";
import './Header.css'

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="" />
        <div className=" flexCenter h-menu" >
          <a href=""> Resedencies</a>
          <a href="">Our Value</a>
          <a href="">Contact us</a>
          <a href="">Get started</a>
          <button className="button">
          <a href=""> contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
