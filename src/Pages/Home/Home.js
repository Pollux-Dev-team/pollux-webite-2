import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <section className="home">
      <img className="home-img" src="./Assets/images/home-img.jpg" alt="" />
      <div className="home-content">
        <h1>
          We build software for people
          <br /> who want to make a difference
        </h1>
        <p>
          Pollux is a small and enthusiastic company with the customer as its
          inspiration. We enjoy our work and take pride in what we do. Our aim
          is to create online solutions for businesses and organizations that
          increase their visibility, generate new ideas and ultimately improve
          their online presence
        </p>
        <Link to="/contact">
          <p className="btn">Get Started</p>
        </Link>
      </div>
    </section>
  );
};

export default HomeContent;
