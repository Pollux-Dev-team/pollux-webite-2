import React from "react";
import "./Service.css";

const Service = ({ element }) => {
  return (
    <div className="service">
      <div className="icon">
        <img src={element.img} alt="" />
        <h2>{element.name}</h2>
        {element.description}
      </div>
    </div>
  );
};

export default Service;
