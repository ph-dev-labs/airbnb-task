import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { ReactComponent as AirBnbLogo } from "../../SVG/Vector.svg";
import { ReactComponent as MetaBnbLogo } from "../../SVG/metabnb.svg";
import "./Navbar.style.css";

const Navbar = (props) => {
  return (
    <Box
      sx={{ width: "95%", height: "48px", margin: "auto", marginTop: "20px" }}
      className="navbar"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "300px"
        }}
      >
        <AirBnbLogo />
        <MetaBnbLogo className="meta" />
      </Box>

      <Box
        className="link-cont"
        sx={{
          marginTop: "27px",
          display: { sm: "none", md: "none", xs: "none", lg: "flex" },
        }}
      >
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/places">
          Place to stay
        </Link>
        <Link className="links">NFTS</Link>
        <Link className="links">Community</Link>
      </Box>
      <Button variant="contained" className="con-btn" onClick={props.onclick}>
        Connect Wallet
      </Button>
    </Box>
  );
};

export default Navbar;
