import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar: React.FC = () => {
  return (
    <div className="navbar-main-div">
      <div className="navbar-title">
        <NavLink exact className="dashboard" to="/dashboard">
          Admin Dashboard
        </NavLink>
      </div>
      <div id="navbar_buttons">
        <NavLink exact className="active_class" to="/sign-up">
          Sign-up
        </NavLink>
        <NavLink exact className="active_class" to="/login">
          Login
        </NavLink>
      </div>
    </div>
  );
};
