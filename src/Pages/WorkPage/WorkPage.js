import React from "react";
import "./WorkPage.css";
import data from "../../Fixtures/portfolio.json";
import WorkItem from "../../Components/WorkItem/WorkItem";

const WorkPage = () => {
  return (
    <section>
      <div className="title">
        <h1>Some of our finest wrok</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam,
          debitis rerum! Ut eligendi officia quaerat. Atque at nihil reiciendis
          culpa a distinctio mollitia similique iusto delectus quisquam non
          voluptate, autem commodi esse quod nesciunt repudiandae asperiores.
          Praesentium repudiandae minus, officia natus mollitia necessitatibus
          ut rem ipsum autem voluptates quam facere.
        </p>
      </div>

      <div className="portfolio">
        {data.map((element) => {
          return <WorkItem element={element} key={element.id} />;
        })}
      </div>
    </section>
  );
};

export default WorkPage;
