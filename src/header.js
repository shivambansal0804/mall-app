import React from "react";
import "./header.css";
import logo from "./logo_banner.png";
const Header = () => {
  return (
    <div className="header-container">
      <div className="top-header">

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="header-options">
          <span>MALLS</span>
          <span>PREMIUM OUTLETS</span>
          <span>FIND A CENTER</span>
          <span>CONTACT</span>
        </div>
      </div>
      <div className="logo">
          <img src={logo}></img>
      </div>
      <div className="black-banner">
        <ul>
          <li>Create an Account</li>
          <li>FAQs</li>
          <li>Privacy Policy</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

