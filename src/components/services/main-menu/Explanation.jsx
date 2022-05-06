import React from "react";
import { ListItem } from "@mui/material";
import Paper from "@mui/material/Paper";
import Home from "../../../assets/Home.png";


const Explanation = () => {
  return (
    <ListItem xs={12}>
      <Paper
        xs={12}
        sx={{
          width: "100%",
          position: "relative",
          boxShadow: "none",
        }}
      >
        <h1 className="text-[24px]">აღმოაჩინე სერვისები</h1>
        <p>აირჩიე საუკეთესო გამოსავალი შენი ცხოვრებისთვის</p>
        <img className="home-pic" src={Home} alt="Home" />
      </Paper>
    </ListItem>
  );
};

export default Explanation;
