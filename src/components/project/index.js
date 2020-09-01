import React from "react";
import graph from "../../assets/images/graph.svg";
import "./index.css";

const Project = ({title, desc}) => (
  <div className="project-list-item">
    <header>
      <span className="title-wrapper">
        <h3>{title}</h3>
      </span>
      <button className="view-metrics-btn">
        <img src={graph} alt="Graph Icon"/>
        View Metrics
      </button>
    </header>

    <p>{desc}</p>
  </div>
);

export default Project;