import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [active, setActive] = useState(false);
  let BackgroundNormal = "/Assets/images/menu.png";
  let BackgroundActive = "/Assets/images/close.png";

  return (
    <div>
      <header>
        <div className="logo">Pollux Development</div>
        <div
          className={active ? "toggle active" : "toggle"}
          style={{
            backgroundImage: `url(${
              active ? BackgroundActive : BackgroundNormal
            })`,
          }}
          onClick={() => {
            setActive(!active);
          }}
        ></div>
        <div className={active ? "navigation active" : "navigation"}>
          <ul>
            <Link
              to="/"
              onClick={() => {
                setActive(!active);
              }}
            >
              <li>
                <p>Home</p>
              </li>
            </Link>
            <Link
              to="/services"
              onClick={() => {
                setActive(!active);
              }}
            >
              <li>
                <p>Services</p>
              </li>
            </Link>
            <Link
              to="/work"
              onClick={() => {
                setActive(!active);
              }}
            >
              <li>
                <p>Work</p>
              </li>
            </Link>
            <li>
              <p>Contact</p>
            </li>
          </ul>
          <div className="social-bar">
            <ul>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <img src="./Assets/images/Socials/facebook.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <img src="./Assets/images/Socials/twitter.png" alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="./Assets/images/Socials/instagram.png" alt="" />
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