import React from "react";
import { Navbar } from "../index";
import "./HomePage.css";
import girlImg from "../../assets/images/girl.png";
function HomePage() {
  return (
    <div className="homepage">
      <Navbar />
      <div className="landing-section">
        <div className="top-headings">
          <h3 className="top-heading-1">Success stories</h3>
          <h1 className="top-heading-2">
            Every success journey <br /> we’ve encountered.
          </h1>
        </div>
        <div className="about-section">
          <div className="left-about-section">
            <img src={girlImg} alt="girlImg" className="girl-img" />
            <div className="about-box-1"></div>
            <div className="about-box-2"></div>
            <div className="about-box-3"></div>
          </div>
          <div className="right-about-section">
            <h3 className="about-heading">
              Enhance fortune 50 company’s insights teams research capabilities
            </h3>
            <div className="dots"></div>
            <button>Explore More </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
