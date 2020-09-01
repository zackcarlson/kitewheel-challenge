import React from "react";
import plus from "../../assets/images/plus.svg";
import "./index.css";

const CreateProject = (props) => (
  <button className="create-project">
    <img src={plus} alt="Plus Icon"/>
    Create Project
  </button>
);

export default CreateProject;