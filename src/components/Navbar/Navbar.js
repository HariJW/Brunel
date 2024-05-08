import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../../assets/images/logo.png";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar-logo-section">
        <img src={logoImg} alt="logo-img" className="logo-img" />
      </div>
      <div className="navbar-btns-section ">
        <button
          className="navbar-btn navbar-btn-1"
          onClick={() => navigate("/GetProjects")}
        >
          Get Projects
        </button>

        <button className="navbar-btn navbar-btn-2" onClick={() => navigate()}>
          Onboard Talent
        </button>
      </div>
    </div>
  );
}

export default Navbar;
