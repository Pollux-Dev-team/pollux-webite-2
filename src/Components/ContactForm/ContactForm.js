import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <form>
        <div className="row">
          <div className="input50">
            <input type="text" placeholder="First Name"></input>
          </div>
          <div className="input50">
            <input type="text" placeholder="Last Name"></input>
          </div>
        </div>
        <div className="row">
          <div className="input50">
            <input type="text" placeholder="Email"></input>
          </div>
          <div className="input50">
            <input type="text" placeholder="Subject"></input>
          </div>
        </div>
        <div className="row">
          <div className="input100">
            <textarea placeholder="Message"></textarea>
          </div>
        </div>
        <div className="row">
          <div className="input100">
            <input type="submit" value="Send" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
