import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Home1 from "../../IMAGES/image-3.jpg";
import Home2 from "../../IMAGES/image-4.jpg";
import Home3 from "../../IMAGES/image-5.jpg";
import Home4 from "../../IMAGES/image-6.jpg";
import "./Homepage.style.css";
import MetaHome from "../../components/metaverse-image/MetaHome";

const Homepage = () => {
  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignContent: "center",
        }}
        mt={5}
      >
        <Box sx={{ width: "60%", transform: "translateX(30px)" }}>
          <Typography variant="h4" component="h5" className="desc-title">
            Rent a Place away from Home in the Metaverse
          </Typography>
          <Typography variant="h6" component="p" className="desc">
            we provide luxury and affordable houses in the metaverse, get a
            chance to turn your imagination to a reality in your comfort zone
          </Typography>
          <Box m={5}>
            <input
              type="text"
              placeholder="search for a location"
              className="search-field"
            ></input>
            <Button variant="contained" className="sb-btn">
              submit
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignContent: "center",
            transform: "translateX(-50px)",
            height: "480px",
          }}
          mt={5}
        >
          <Box className="meta-home-cont"  sx={{transform: "translateY(110px)"}}>
            <MetaHome image={Home1} />
            <MetaHome image={Home2} />
          </Box>
          <Box className="meta-home-cont">
            <MetaHome image={Home3} />
            <MetaHome image={Home4} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
