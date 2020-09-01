import React, { useState }from "react";
import Project from "../project";
import "./index.css";

const ProjectList = (props) => {
  const projects = [
    {title: "Project1", id: 0, desc: "Testing"},
    {title: "Project2", id: 1, desc: "Testing"},
    {title: "Project3", id: 2, desc: "Testing"},
    {title: "Project4", id: 3, desc: "Testing"},
    {title: "Project3", id: 4, desc: "Testing"},
    {title: "Project4", id: 5, desc: "Testing"},
    {title: "Project3", id: 6, desc: "Testing"},
    {title: "Project4", id: 7, desc: "Testing"},
  ];

  return (
    <div className="project-list">
      {projects && projects.map(({title, id, desc}) => (
        <Project title={title} key={id} desc={desc}/>
      ))}
    </div>
  );
};

export default ProjectList;