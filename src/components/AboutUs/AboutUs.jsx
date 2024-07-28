import React from "react";
import "./AboutUs.css";

export default function About() {
  return (
    <div className="About">
      <div className="cards">
        <div className="card">
          <img
            className="main-pic"
            src="/images/ayyoub.png"
            alt="Ayyoub Belibel"
          />
          <h1>Ayyoub Belibel</h1>
          <h2>Full Stack Developer</h2>
          <div className="icons">
            <a
              href="https://github.com/ayoublos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./media-logos/github.png" className="github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayyoub-belibel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./media-logos/linkedin.png" className="linkedin icon" />
            </a>
            <a href={`mailto:${"abelibel@pursuit.org"}`}>
              <img src="./media-logos/gmail.png" className="gmail icon" />
            </a>
          </div>
        </div>
        <div className="card">
          <img
            className="main-pic"
            src="./images/abdel.png"
            alt="Abdel Sayedahmed"
          />
          <h1>Abdel Sayedahmed</h1>
          <h2>Full Stack Developer</h2>
          <div className="icons">
            <a
              href="https://github.com/AbdelSayedahmed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./media-logos/github.png" className="github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdelsayedahmed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./media-logos/linkedin.png" className="linkedin icon" />
            </a>
            <a href={`mailto:${"asayedahmed@pursuit.org"}`}>
              <img src="./media-logos/gmail.png" className="gmail icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
