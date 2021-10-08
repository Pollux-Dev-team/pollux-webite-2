import React from "react";
import LazyLoad from "react-lazyload";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="info-box">
        <LazyLoad><img src="/Assets/images/email.png" className="contact-icon" alt="" /></LazyLoad>
        <div className="details">
          <h4>Email</h4>
          <a href="mailto:polluxfam@gmail.com">polluxfam@gmail.com</a>
        </div>
      </div>
      <div className="info-box">
        <img src="/Assets/images/call.png" className="contact-icon" alt="" />
        <div className="details">
          <h4>Call</h4>
          <a href="tel:201270887883">+20 127 088 7883</a>
          <a href="tel:201095228556">+20 109 522 8556</a>
        </div>
      </div>

      <div className="info-box">
        <LazyLoad>
          <img
            src="/Assets/images/Socials/facebook.png"
            className="contact-icon social-icon"
            alt="Facebook"
          />
        </LazyLoad>
        <div className="details">
          <h4>Facebook</h4>
          <a
            href="https://www.facebook.com/polluxteam"
            target="_blank"
            rel="noreferrer"
          >
            @polluxteam
          </a>
        </div>
      </div>
      <div className="info-box">
        <LazyLoad>
          <img
            src="/Assets/images/Socials/instagram.png"
            className="contact-icon social-icon-ig"
            alt="Instagram"
          />
        </LazyLoad>
        <div className="details">
          <h4>Instagram</h4>
          <a
            href="https://www.instagram.com/pollux_team/"
            target="_blank"
            rel="noreferrer"
          >
            @pollux_team
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
