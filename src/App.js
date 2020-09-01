import React, { Component } from "react";
import Nav from "./components/nav";
import Projects from "./pages/projects";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Projects/>
      </div>
    );
  }
}

export default App;
