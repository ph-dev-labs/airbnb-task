import { Box, Typography } from "@mui/material";
import React from "react";
import Logo from "../../IMAGES/Groupfoot-text.svg";
import Facebook from "../../IMAGES/facebook-263-721950facebook.svg";
import Insta from "../../IMAGES/instagram-216-721958insta.svg";
import Twitter from "../../IMAGES/twitter-241-721979twitter.svg";
import Copy from "../../IMAGES/Group-1355copyright.svg";
import "./Footer.style.css";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1D1D1E",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "322px",
      }}
      className="fott"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "230px"
        }}
      >
        <Box sx={{transform: "translateY(-30px)"}} className="losg">
          <img src={Logo} alt="FOOTER_LOGO" className="losg" />
        </Box>
        <Box className="footer-socials">
          <Box className="socials">
            <img src={Facebook} alt="SOCIALS" />
            <img src={Insta} alt="SOCIALS" />
            <img src={Twitter} alt="SOCIALS" />
          </Box>
          <img src={Copy} alt="copy-right" className="copy" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "250px"
        }}
      >
        <Typography className="f-title">Community</Typography>
        <Typography className="nft-link">NFT</Typography>
        <Typography className="nft-link">Tokens</Typography>
        <Typography className="nft-link">Landlords</Typography>
        <Typography className="nft-link">Discord</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "250px"
        }}
      >
        <Typography className="f-title">Places</Typography>
        <Typography className="nft-link">Castle</Typography>
        <Typography className="nft-link">Farm</Typography>
        <Typography className="nft-link">Beach</Typography>
        <Typography className="nft-link">Learn more</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "250px"
        }}
      >
        <Typography className="f-title">About us</Typography>
        <Typography className="nft-link">Road map</Typography>
        <Typography className="nft-link">Creators</Typography>
        <Typography className="nft-link">Career</Typography>
        <Typography className="nft-link">Contact us</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
