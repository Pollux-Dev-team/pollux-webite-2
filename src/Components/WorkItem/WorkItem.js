import React from "react";
import "./WorkItem.css";

const WorkItem = ({ element }) => {
  return (
    <div>
      <div className="item">
        <img src={element.img} alt="" />
        <div className="action">
          <a href="https://facebook.com">Launch</a>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
