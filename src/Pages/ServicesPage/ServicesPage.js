import React from "react";
import "./Services.css";
import data from "../../Fixtures/services.json";
import Service from "../../Components/Service/Service";

const ServicesPage = () => {
  return (
    <section className="servicesSection">
      <div className="title">
        <h1>Services that we can help you with :</h1>
        <p>
          We offer a wide range of services for businesses. Whatever your
          business needs, we can help you achieve it. We realize that each
          business we work with is different and we try to be open to new ideas
          and creative solutions. Here you can find out about our main services
          we offer
        </p>
      </div>
      <div className="services">
        {data.map((serviceElement, index) => {
          return <Service element={serviceElement} key={index} />;
        })}
      </div>
    </section>
  );
};

export default ServicesPage;
