import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const getMenuOpenStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      // console.log(menuOpen)
      return {
        right: !menuOpen && "-100%",
        
      };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="" />
        <OutsideClickHandler 
        onOutsideClick={()=>{
          setMenuOpen(false)
        }}>

        <div className=" flexCenter h-menu" style={getMenuOpenStyles(menuOpen)}>
          <a href=""> Resedencies</a>
          <a href="">Our Value</a>
          <a href="">Contact us</a>
          <a href="">Get started</a>
          <button className="button">
            <a href=""> contact</a>
          </button>
        </div>
        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
        </OutsideClickHandler>
      </div>
    </section>
  );
};

export default Header;
