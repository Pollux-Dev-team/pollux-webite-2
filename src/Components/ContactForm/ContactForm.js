import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [update, setupdate] = useState(0);
  const [valid, setValid] = useState(false);

  const sendEmail = (e) => {
    setSubmitted(true);
    e.preventDefault();
    const firstName = form.current.first_name.value;
    const lastName = form.current.last_name.value;
    const email = form.current.email.value;
    const mobile = form.current.mobile.value;
    const message = form.current.message.value;

    console.log(firstName, email, mobile, message);
    if (firstName && lastName && email && mobile) {
      setValid(true);
      emailjs
        .sendForm(
          "service_iq5nhuz",
          "template_wr1fymn",
          form.current,
          "user_TvonjRvDCWvR1qvNa5pcp"
        )
        .then(
          (result) => {
            setSubmitted(true);
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    setupdate(update + 1);
  };

  return (
    <div className="contact-form">
      <form ref={form} onSubmit={sendEmail}>
        {submitted && valid ? (
          <div className="success">Success! Thank you for contacting us!</div>
        ) : null}
        <div className="row first">
          <div className="input50">
            {submitted && form.current.first_name.value === "" ? (
              <p className="warning">Please enter your first name</p>
            ) : null}
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
            ></input>
          </div>
          <div className="input50">
            {submitted && form.current.last_name.value === "" ? (
              <p className="warning">Please enter your last name</p>
            ) : null}
            <input type="text" name="last_name" placeholder="Last Name"></input>
          </div>
        </div>
        <div className="row">
          <div className="input50">
            {submitted && form.current.email.value === "" ? (
              <p className="warning">Please enter your email</p>
            ) : null}
            <input
              type="text"
              className={
                submitted &&
                form.current.email.value !== "" &&
                form.current.mobile.value === ""
                  ? "wrong"
                  : ""
              }
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="input50">
            {submitted && form.current.mobile.value === "" ? (
              <p className="warning">Please enter your phone number</p>
            ) : null}
            <input
              type="text"
              className={
                submitted &&
                form.current.mobile.value !== "" &&
                form.current.email.value === ""
                  ? "wrong"
                  : ""
              }
              name="mobile"
              placeholder="Phone Number"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="input100">
            <textarea name="message" placeholder="Message"></textarea>
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
