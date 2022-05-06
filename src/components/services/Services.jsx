import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Container from "@mui/material/Container";
import MainMenu from "./main-menu/MainMenu";

const Services = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
      <div className="wrapper">
        <Sidebar />
        <MainMenu />
      </div>
      </Container>
    </div>
  );
};

export default Services;
