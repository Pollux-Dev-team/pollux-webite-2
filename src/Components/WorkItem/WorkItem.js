import React from "react";
import "./WorkItem.css";
import LazyLoad from "react-lazyload";

const WorkItem = ({ element }) => {
  return (
    <div>
      <div className="item">
        <LazyLoad><img src={element.img} alt="" /></LazyLoad>
        <div className="action">
          <a href={element.link} target="_blank" rel="noreferrer">
            Launch
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
