import React from "react";
import "./Services.css";
import data from "../../Fixtures/services.json";
import Service from "../../Components/Service/Service";

const ServicesPage = () => {
  return (
    <section>
      <div className="title">
        <h1>Services that we can help you with</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam,
          debitis rerum! Ut eligendi officia quaerat. Atque at nihil reiciendis
          culpa a distinctio mollitia similique iusto delectus quisquam non
          voluptate, autem commodi esse quod nesciunt repudiandae asperiores.
          Praesentium repudiandae minus, officia natus mollitia necessitatibus
          ut rem ipsum autem voluptates quam facere.
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
