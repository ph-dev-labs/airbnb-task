import { Box, Typography } from "@mui/material";
import React from "react";
import "./Holder.style.css"

const Holder = (props) => {
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }} className="holders">
        <img src={props.logo} alt="LOGO" className="holder"/>
        <h1 className={props.caribbean ? "carri" : props.poppings ? "poppings" : "inter"}>{props.title}</h1>
      </Box>
    </Box>
  );
};

export default Holder;
