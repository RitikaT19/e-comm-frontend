import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/sidebar.css";
import Button from "../Button/Button";
import {logout} from "../../../actions/login"
import{LogoutButton} from "../LogoutButton/LogoutButton"

export const SideBar: React.FC = () => {
  return (
    <div className="sidebar-main-div">
      <div className="sidebar-title">
        <NavLink exact className="dashboard" to="/dashboard">
          Admin Dashboard
        </NavLink>
      </div>
      <div id="sidebar_buttons" >
        <NavLink exact className="active_class" activeClassName = "main-nav-active" to="/category">
          Category
        </NavLink>
        <NavLink exact className="active_class" activeClassName = "main-nav-active" to="/product/61a9c8ed84e2105f6245bd4b">
          Product
        </NavLink>
        <NavLink exact className="active_class" activeClassName = "main-nav-active" to="/sign-up">
          Make admin
        </NavLink>
        <div className = "sidebar-logout-button">
        <LogoutButton
        buttonText = "Logout"
        logoutClick = {()=>logout()}/>
        </div>
        
      </div>
    </div>
  );
};
