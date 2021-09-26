import React from "react";
import "./Home.css";

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
        <a className="btn">Get Started</a>
      </div>
    </section>
  );
};

export default HomeContent;
