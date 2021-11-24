import React from "react";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import "../../styles/sidebar.css";
export const SideBar: React.FC = () => {
  return (
    <>
      <nav className="nav-menu active">
        <ul className="nav-menu-items">
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
