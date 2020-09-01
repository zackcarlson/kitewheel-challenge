import React from "react";
import Dropdown from "../../components/dropdown";
import Search from "../../components/search";
import CreateProject from "../../components/createproject";
import ProjectList from "../../components/projectlist";
import "./index.css";

const Projects = (props) => {
  return (
    <div className="projects">
      <header className="projects-header-wrapper">
        <div className="header-title">
          Kitewheel
        </div>
        <Dropdown/ >
        <div className="tools">
          <Search/>
          <CreateProject/>
        </div>
      </header>
      <ProjectList/>
    </div>
  );
};

export default Projects;