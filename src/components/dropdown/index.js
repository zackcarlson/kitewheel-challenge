import React, { Component } from "react";
import Search from "../search";
import arrow from "../../assets/images/arrow.svg";
import "./index.css";

class Dropdown extends Component {
  constructor(props){
    super(props);
    this.state = {
      listOpen: false,
      list: [
        {id: 0, title: "Test1"},
        {id: 1, title: "Test2"},
        {id: 2, title: "Test3"},
        {id: 3, title: "Test4"},
        {id: 4, title: "Test5"},
        {id: 5, title: "Test6"}
      ]
    };
  }

  toggleList(e){
    e.stopPropagation();
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  render() {
    const { listOpen, list } = this.state;
    const arrowDirection = listOpen ? "down" : "right";

    return(
      <div className="dropdown">
        <div className="dropdown-header">
          <div className="dropdown-header-arrow" onClick={(e) => this.toggleList(e)}>
            <img 
              src={arrow}
              alt="Arrow Icon"
              className={`arrow-icon ${arrowDirection}`}
            />
          </div>
        </div>
        {listOpen && 
          <div className="dropdown-list-wrapper">
            <Search/>
            <ul className="dropdown-list">
              {list.map(item => (
                <li 
                  className="dropdown-list-item"
                  key={item.id}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        }
      </div>
    );
  }
}

export default Dropdown;