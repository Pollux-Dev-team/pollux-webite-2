import React from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <section className="contactSection">
      <div className="title">
        <h1>Contact us</h1>
        <p>
          Feel free to contact us if you have any questions or concerns. We are
          more than happy to help.
        </p>
      </div>
      <div className="contact">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
};

export default ContactPage;
