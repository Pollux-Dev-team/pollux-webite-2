import React from "react";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="info-box">
        <img src="/Assets/images/address.png" className="contact-icon" alt="" />
        <div className="details">
          <h4>Address</h4>
          <p>28 Neon Tower, New York City, USA</p>
        </div>
      </div>
      <div className="info-box">
        <img src="/Assets/images/email.png" className="contact-icon" alt="" />
        <div className="details">
          <h4>Email</h4>
          <a href="mailto:polluxfam@gmail.com">polluxfam@gmail.com</a>
          <a href="mailto:polluxfam@gmail.com">polluxfam@gmail.com</a>
        </div>
      </div>
      <div className="info-box">
        <img src="/Assets/images/call.png" className="contact-icon" alt="" />
        <div className="details">
          <h4>Call</h4>
          <a href="tel:201270887883">+20 127 088 7886</a>
          <a href="tel:201270887883">+20 127 088 7886</a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
