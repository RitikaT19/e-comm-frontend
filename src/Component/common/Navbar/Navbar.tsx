import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar: React.FC = () => {
  return (
    <div className="navbar-main-div">
      <div className="navbar-title">
        <NavLink exact className="dashboard" to="/category">
          Admin Dashboard
        </NavLink>
      </div>
      <div id="navbar_buttons">
        {/* <NavLink exact className="active_class" to="/">
          Login
        </NavLink> */}
      </div>
    </div>
  );
};
