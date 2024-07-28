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
              <img src="./github.png" className="github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayyoub-belibel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./linkedin.png" className="linkedin icon" />
            </a>
            <a href={`mailto:${"abelibel@pursuit.org"}`}>
              <img src="./gmail.png" className="gmail icon" />
            </a>
          </div>
        </div>
        <div className="card">
          <img
            className="main-pic"
            src="https://ca.slack-edge.com/TCVA3PF24-U064KLDFYKB-1e41f20ca5e6-512"
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
              <img src="./github.png" className="github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdelsayedahmed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./linkedin.png" className="linkedin icon" />
            </a>
            <a href={`mailto:${"asayedahmed@pursuit.org"}`}>
              <img src="./gmail.png" className="gmail icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
