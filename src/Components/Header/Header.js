import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header>
        <div className="logo">Pollux Development</div>
        <div className="toggle"></div>
        <div className="navigation">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
          <div className="social-bar">
            <ul>
              <li>
                <a href="https://facebook.com" target="_blank">
                  <img src="./Assets/images/facebook.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank">
                  <img src="./Assets/images/twitter.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank">
                  <img src="./Assets/images/instagram.png" alt="" />
                </a>
              </li>
            </ul>
            <a href="mailto:polluxafam@gmail.com" className="email-icon">
              <img src="./Assets/images/email.png" alt="" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
