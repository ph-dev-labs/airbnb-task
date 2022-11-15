import React from "react";
import "./Modal.style.css";
import { Box, Typography } from "@mui/material";
import Meta from "../../IMAGES/meta-sm.svg";
import Wallet from "../../IMAGES/wall-sm.svg";
import Chevron from "../../IMAGES/chevron.svg.svg"

const Modal = (props) => {
  console.log(props)
  return (
    <Box className="modal-box">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "78px",
          alignItems: "center",
          width: "568px",
          transform: "translateX(20px)",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Red Rose",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "24px",
            lineHeight: "30px",
            color: "#333333",
            textAlign: "center",
          }}
        >
          connect wallet
        </Typography>
        <Typography
          sx={{
            fontFamily: "Red Rose",
            fontStyle: "normal",
            fontWeight: "600",
            height: "24px",
            width: "24px",
            fontSize: "16px",
            lineHeight: "30px",
            color: "#333333",
            textAlign: "center",
          }}
          className="x"
        >
          X
        </Typography>
      </Box>
      <Box sx={{width: "100%", height: "0px", border: "1px solid #CFD8DC"}}>
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: "Red Rose",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#333333",
            marginTop: "20px",
            transform: "translateX(20px)"
          }}
        >
          choose your prefered wallet:
        </Typography>
        <Box className="wallet-cont">
          <Box className="hol">
            <img src={Meta} alt="meta-wallet" className="meta" />
            <Typography className="m">MetaMask</Typography>
          </Box>
          <img src={Chevron} alt="chevron" className="chev" onClick={props.onclick} />
        </Box>
        <Box className="wallet-cont">
          <Box className="hol">
            <img src={Wallet} alt="wallet" className="meta" />
            <Typography className="m">WalletConnect</Typography>
          </Box>
          <img src={Chevron} alt="chevron" className="chev" onClick={props.onclick} />
        </Box>
      </Box>
    </Box>
  );
};

export default Modal;
