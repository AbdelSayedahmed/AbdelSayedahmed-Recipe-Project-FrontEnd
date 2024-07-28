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
              <img
                src="https://github.blog/wp-content/uploads/2024/07/github-logo.png"
                className="github icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ayyoub-belibel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png"
                className="linkedin icon"
              />
            </a>
            <a href={`mailto:${"abelibel@pursuit.org"}`}>
              <img
                src="https://cdn2.downdetector.com/static/uploads/logo/gmail_logo_hSykdMC.jpeg"
                className="gmail icon"
              />
            </a>
          </div>
        </div>

        <div className="card">
          <img
            className="main-pic"
            src="https://ca.slack-edge.com/TCVA3PF24-U064KLDFYKB-1e41f20ca5e6-512"
            alt="AbdelSayed Ahmed"
          />
          <h1>AbdelSayed Ahmed</h1>
          <h2>Full Stack Developer</h2>
          <div className="icons">
            <a
              href="https://github.com/AbdelSayedahmed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://github.blog/wp-content/uploads/2024/07/github-logo.png"
                className="github icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/abdelsayedahmed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png"
                className="linkedin icon"
              />
            </a>
            <a href={`mailto:${"asayedahmed@pursuit.org"}`}>
              <img
                src="https://cdn2.downdetector.com/static/uploads/logo/gmail_logo_hSykdMC.jpeg"
                className="gmail icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
