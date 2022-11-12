import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "./Homepage.style.css";

const Homepage = () => {
  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
        }}
        mt={5}
      >
        <Box sx={{ width: "65%" }}>
          <Typography variant="h4" component="h5" className="desc-title">
            Rent a Place away from Home in the Metaverse
          </Typography>
          <Typography variant="h6" component="p" className="desc">
            we provide luxury and affordable houses in the metaverse, get a
            chance to turn your imagination to a reality in your comfort zone
          </Typography>
          <Box m={5}>
            <input type="text" placeholder="search for a location" className="search-field"></input>
            <Button variant="contained" className="sb-btn">submit</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
