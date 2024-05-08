import React from "react";
import { Navbar, Accordion } from "../index";
import { accordionData } from "../../content";
import "./HomePage.css";
import girlImg from "../../assets/images/girl.png";
import Alogo from "../../assets/images/a.png";
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
      <div className="questions-section">
        <div className="questions-left-section">
          <div className="question-headings">
            <h3 className="question-heading-1">Whats on your mind</h3>
            <h1 className="question-heading-2">Ask Questions</h1>
          </div>
          <img src={Alogo} alt="Alogo" className="Alogo" />
        </div>
        <div className="questions-right-section">
          <div className="accordion">
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
