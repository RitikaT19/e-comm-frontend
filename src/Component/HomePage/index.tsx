import React from "react";
import { SideBar } from "../common/SideBar/Sidebar";
import { Container } from "../common/WhiteContainer/Container";
import "../styles/home.css"
export const Home: React.FC = () => {
  return (
    <div className="home-main-div">
      <SideBar />
      <div className="container-div">
        <Container>hi</Container>
      </div>
    </div>
  );
};
