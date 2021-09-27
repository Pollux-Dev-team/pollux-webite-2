import React from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <section>
      <div className="title">
        <h1>Contact us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam,
          debitis rerum! Ut eligendi officia quaerat. Atque at nihil reiciendis
          culpa a distinctio mollitia similique iusto delectus quisquam non
          voluptate,
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
