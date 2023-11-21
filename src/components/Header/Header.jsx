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
  const handleMenuLinkClick = (targetId) => {
    setMenuOpen(false); // Close the menu when a link is clicked

    // Scroll to the target section
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="" />
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpen(false);
          }}
        >
          <div
            className=" flexCenter h-menu"
            style={getMenuOpenStyles(menuOpen)}
          >
            <a
              href="#residencies"
              onClick={() => handleMenuLinkClick("residencies")}
            >
              {" "}
              Resedencies
            </a>
            <a
              href="#our-values"
              onClick={() => handleMenuLinkClick("residencies")}
            >
              Our Value
            </a>
            <a
              href="#contact-us"
              onClick={() => handleMenuLinkClick("residencies")}
            >
              Contact us
            </a>
            <a
              href="#get-Started"
              onClick={() => handleMenuLinkClick("residencies")}
            >
              Get started
            </a>
            <button className="button">
              <a href="https://www.linkedin.com/in/noman-nasir-a0ba18295/">
                {" "}
                contact
              </a>
            </button>
          </div>
          <div
            className="menu-icon"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <BiMenuAltRight size={30} />
          </div>
        </OutsideClickHandler>
      </div>
    </section>
  );
};

export default Header;
