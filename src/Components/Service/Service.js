import React from "react";
import "./Service.css";
import LazyLoad from "react-lazyload";

const Service = ({ element }) => {
  return (
    <div className="service">
      <div className="icon">
        <LazyLoad><img src={element.img} alt="" /></LazyLoad>
        <h2>{element.name}</h2>
        {element.description}
      </div>
    </div>
  );
};

export default Service;
