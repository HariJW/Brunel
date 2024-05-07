import React from "react";
import "./Navbar.css";
import logoImg from "../../assets/images/logo.png";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo-section">
        <img src={logoImg} alt="logo-img" className="logo-img" />
      </div>
      <div className="navbar-btns-section ">
        <button className="navbar-btn navbar-btn-1">Get Projects</button>
        <button className="navbar-btn navbar-btn-2">Onboard Talent</button>
      </div>
    </div>
  );
}

export default Navbar;
