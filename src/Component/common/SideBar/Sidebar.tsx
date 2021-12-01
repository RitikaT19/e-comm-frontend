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
      <div id="sidebar_buttons">
        <NavLink exact className="active_class" to="/category">
          Category
        </NavLink>
        <NavLink exact className="active_class" to="/product/61974a3625fde0c069255ed5">
          Product
        </NavLink>
        <NavLink exact className="active_class" to="/sign-up">
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
