import React, { useState } from "react";
import logo from "../../assets/images/kitewheel-logo.svg";
import bell from "../../assets/images/bell.svg";
import user from "../../assets/images/user.svg";
import ask from "../../assets/images/ask.svg";
import "./index.css";

const Nav = (props) => {
  const [clickedNavItem, setClickedNavItem] = useState(null);

  const handleNavItemClick = (e) => {
    let clickedItem = e.target.getAttribute('data-id');
    setClickedNavItem(clickedItem);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Kitewheel Logo" className="logo"/>
      <ul className="nav-list">
        <li 
          className={clickedNavItem === "1" ? "nav-list-item active" : "nav-list-item"}
          data-id="1" 
          onClick={handleNavItemClick}
        >
          Projects
        </li>
        <li 
          className={clickedNavItem === "2" ? "nav-list-item active" : "nav-list-item"}
          data-id="2" 
          onClick={handleNavItemClick}
        >
          Admin
        </li>
        <li className="icon-item">
          <img src={bell} alt="Bell Icon" className="list-icon bell"/>
        </li>
        <li className="icon-item">
          <img src={user} alt="User Icon" className="list-icon user"/>
        </li>
        <li className="icon-item">
          <img src={ask} alt="Ask Icon" className="list-icon ask"/>
        </li>
      </ul>
    </div>
  );
};

export default Nav;