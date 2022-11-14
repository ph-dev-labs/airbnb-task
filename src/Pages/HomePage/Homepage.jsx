import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Home1 from "../../IMAGES/image-3.jpg";
import Home2 from "../../IMAGES/image-4.jpg";
import Home3 from "../../IMAGES/image-5.jpg";
import Home4 from "../../IMAGES/image-6.jpg";
import Logo1 from "../../SVG/Group-59536.svg";
import Logo2 from "../../SVG/Group-4038.svg";
import Logo3 from "../../SVG/logo.svg";
import "./Homepage.style.css";
import MetaHome from "../../components/metaverse-image/MetaHome";
import Holder from "../../components/Logo-holder/Holder";
import Nft from "../../components/Cards/Nft";

const Homepage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {lg:"row", sm: "column", xs: "column"},
          justifyContent: "space-evenly",
        }}
        mt={5}
      >
        <Box sx={{ width: {lg:"60%", sm: "100%", xs: "100%", md: "100%"}, transform: "translateX(30px)" }}>
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
            justifyContent: {lg: "space-around", sm: "space-evenly", xs: "space-evenly", md: "space-evenly"},
            alignContent: "center",
            transform:{lg: "translateX(-70px)"},
            height: "480px",
          }}
          mt={5}
        >
          <Box
            className="meta-home-cont"
            sx={{ transform: "translateY(110px)" }}
          >
            <MetaHome image={Home1} />
            <MetaHome image={Home2} />
          </Box>
          <Box className="meta-home-cont">
            <MetaHome image={Home3} />
            <MetaHome image={Home4} />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "70px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "90px",
          justifyContent: "space-evenly",
          backgroundImage:
            "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
        }}
      >
        <Holder logo={Logo1} title="MBToken" caribbean />
        <Holder logo={Logo2} title="METAMASK" />
        <Holder logo={Logo3} title="opeanSea" poppings />
      </Box>
      <Box>
        <Typography variant="h4" component="h5" className="adv-text">
          Inspiration for your next adventure
        </Typography>
        <Box
          sx={{
            transform: "translateY(80px)",
            width: "1240px",
            height: "968px",
            margin: "auto",
          }}
        >
          <Grid container spacing={1} rowSpacing={1} sx={{alignItems: "center"}}>
            <Grid item sm={12} md={6} lg={3}>
              <Nft />1
            </Grid>
            <Grid item sm={12} md={6} lg={3}>
              <Nft />2
            </Grid>
            <Grid item sm={12} md={4} lg={3}>
              <Nft />3
            </Grid>
            <Grid item sm={12} md={4} lg={3}>
              <Nft />4
            </Grid>
            <Grid item sm={12} md={4} lg={3}>
              <Nft />5
            </Grid>
            <Grid item sm={12} md={4} lg={3}>
              <Nft />6
            </Grid>
            <Grid item sm={12} md={4} lg={3}>
              <Nft />7
            </Grid>
            <Grid item sm={12} md={4} lg={3}>
              <Nft />8
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
