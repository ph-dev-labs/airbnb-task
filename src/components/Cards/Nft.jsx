import { Box, Typography } from "@mui/material";
import React from "react";
import "./Nft.styles.css";
import Heart from "../../IMAGES/heartheart.svg";
import Star from "../../IMAGES/Star-2start.svg";

const Nft = (props) => {
  return (
    <Box className="nft-holder">
      <Box>
        <img src={props.nft} alt="META-HOME" className="nft-i" />
        <img src={Heart} alt="HEART" className="heart" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: "18px",
          marginRight: "18px",
          marginTop: "14px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Red Rose",

            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "13px",

            color: "#434343",
          }}
        >
          {props.location}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Red Rose",

            fontWeight: "700",
            fontSize: "12px",
            lineHeight: "13px",

            color: "#434343",
          }}
        >
          {props.price}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: "18px",
          marginRight: "18px",
          marginTop: "10px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Red Rose",

            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "13px",

            color: "#434343",
          }}
        >
          {props.distance}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Red Rose",

            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "13px",

            color: "#434343",
          }}
        >
          {props.duration}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "92px",
          height: "12px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "15px",
         
        }}
      >
        <img src={Star} alt="STAR" />
        <img src={Star} alt="STAR" />
        <img src={Star} alt="STAR" />
        <img src={Star} alt="STAR" />
        <img src={Star} alt="STAR" />
      </Box>
    </Box>
  );
};

export default Nft;
