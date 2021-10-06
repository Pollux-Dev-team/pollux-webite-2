import React from "react";
import "./WorkPage.css";
import data from "../../Fixtures/portfolio.json";
import WorkItem from "../../Components/WorkItem/WorkItem";

const WorkPage = () => {
  return (
    <section className="workSection">
      <div className="title">
        <h1>Some of our finest work</h1>
        <p>
          We are comitted to creating simple and powerful websites to boost our
          clients' online presence, but don't take our word for it. Check out
          our latest work.
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
