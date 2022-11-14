import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { ReactComponent as AirBnbLogo } from "../../SVG/Vector.svg";
import { ReactComponent as MetaBnbLogo } from "../../SVG/metabnb.svg";
import "./Navbar.style.css"

const Navbar = () => {
  return (
    <Box sx={{width: "95%", height: "48px", margin: "auto", marginTop: "30px"}} className="navbar" >
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
             <AirBnbLogo />
             <MetaBnbLogo className="meta" />
        </Box>
     
      <Box className="link-cont" sx={{marginTop: "47px", display:{sm:"none",md:"none", xs: "none", lg:"flex",} }}>
        <Link className="links">Home</Link>
        <Link className="links">Place to stay</Link>
        <Link className="links">NFTS</Link>
        <Link className="links">Community</Link>
      </Box>
      <Button variant="contained" className="con-btn">Connect Wallet</Button>
    </Box>
  );
};

export default Navbar;
