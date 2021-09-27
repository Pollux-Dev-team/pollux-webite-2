import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <section className="home">
      <img className="home-img" src="./Assets/images/home-img.jpg" alt="" />
      <div className="home-content">
        <h1>
          We help to achieve <br /> your goals.
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ad atque
          numquam ratione impedit, voluptatibus possimus maxime nulla, id
          tenetur adipisci perferendis aliquam similique, rem iure cum eos
          exercitationem omnis ab aliquid ipsa sapiente architecto?
        </p>
        <Link to="/contact">
          <p className="btn">Get Started</p>
        </Link>
      </div>
    </section>
  );
};

export default HomeContent;
