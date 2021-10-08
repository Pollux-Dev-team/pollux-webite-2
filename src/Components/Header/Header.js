import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [active, setActive] = useState(false);
  let BackgroundNormal = "/Assets/images/menu.png";
  let BackgroundActive = "/Assets/images/close.png";

  return (
    <div>
      <header>
        <Link to="/">
          <div className={active ? "logo active" : "logo"}>
            <LazyLoad><img alt="logo" src="/logo.png" /></LazyLoad>
          </div>
        </Link>
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
            <Link
              to="/contact"
              onClick={() => {
                setActive(!active);
              }}
            >
              <li>
                <p>Contact</p>
              </li>
            </Link>
          </ul>
          <div className="social-bar">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/polluxteam"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/Assets/images/Socials/facebook.png"
                    alt="Facebook"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/polluxteam"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/Assets/images/Socials/twitter.png" alt="Twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/pollux_team/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/Assets/images/Socials/instagram.png"
                    alt="Instagram"
                  />
                </a>
              </li>
            </ul>
            <a href="mailto:polluxafam@gmail.com" className="email-icon">
              <img src="/Assets/images/email.png" alt="facebook" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
