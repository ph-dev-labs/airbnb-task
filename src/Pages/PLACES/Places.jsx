import React from "react";
import { Box } from "@mui/material";
import "./Places.style.css";
import Nft from "../../components/Cards/Nft";
import { Link } from "react-router-dom";
import Setting from "../../IMAGES/setting-5setting.svg";
import Nft1 from "../../IMAGES/Frame-1511.svg";
import Nft2 from "../../IMAGES/Frame-1512.svg";
import Nft3 from "../../IMAGES/Frame-1513.svg";
import Nft4 from "../../IMAGES/Frame-151.svg";
import Nft5 from "../../IMAGES/Frame-1515.svg";
import Nft6 from "../../IMAGES/Frame-1516.svg";
import Nft7 from "../../IMAGES/Frame-1517.svg";
import Nft8 from "../../IMAGES/Frame-1518.svg";
import Modal from "../../components/Modal/Modal";

const Places = (props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box className="link-conts">
        <Link className="link" to="/">
          Resturant
        </Link>
        <Link className="link" to="/places">
          Cottage
        </Link>
        <Link className="link">Castle</Link>
        <Link className="link">Fantasy city</Link>
        <Link className="link">Beach</Link>
        <Link className="link">Carbin</Link>
        <Link className="link">Off-grid</Link>
        <Link className="link">Farm</Link>
        <Link className="link setting-cont">
          Location
          <img src={Setting} alt="setting-logo" className="setting" />
        </Link>
      </Box>
      {props.modal && (
        <Box
          sx={{
            position: "absolute",
            zIndex: "1000",
            transform: "translateX(400px)",
            marginTop: "300px",
          }}
        >
          <Modal onclick={props.onclick} />
        </Box>
      )}
      <Box sx={{ alignItems: "center" }} className="grid-conts">
        <Nft
          nft={Nft1}
          location="King Desert"
          price="1MBT per night"
          distance="2345 km away"
          duration="available for 2weeks stay"
        />
        <Nft
          nft={Nft2}
          location="King Desert"
          price="1MBT per night"
          distance="2345 km away"
          duration="available for 2weeks stay"
        />
        <Nft
          nft={Nft3}
          location="King Desert"
          price="1MBT per night"
          distance="2345 km away"
          duration="available for 2weeks stay"
        />
        <Nft
          nft={Nft4}
          location="King Desert"
          price="1MBT per night"
          distance="2345 km away"
          duration="available for 2weeks stay"
        />
        <Nft
          nft={Nft5}
          location="King Desert"
          price="1MBT per night"
          distance="2345 km away"
          duration="available for 2weeks stay"
        />
        <Nft
          nft={Nft6}
          location="King Desert"
          price="1MBT per night"
          distance="2345 km away"
          duration="available for 2weeks stay"
        />
        <Nft
          nft={Nft7}
          location="King Desert"
          price="1MBT per night"
          distance="2345 km away"
          duration="available for 2weeks stay"
        />
        <Nft
          nft={Nft8}
          location="King Desert"
          price="1MBT per night"
          distance="2345 km away"
          duration="available for 2weeks stay"
        />
        <Nft
          nft={Nft1}
          location="King Desert"
          price="1MBT per night"
          distance="2345 km away"
          duration="available for 2weeks stay"
        />
        <Nft
          nft={Nft2}
          location="King Desert"
          price="1MBT per night"
          distance="2345 km away"
          duration="available for 2weeks stay"
        />

        <Nft
          nft={Nft5}
          location="King Desert"
          price="1MBT per night"
          distance="2345 km away"
          duration="available for 2weeks stay"
        />
        <Nft
          nft={Nft6}
          location="King Desert"
          price="1MBT per night"
          distance="2345 km away"
          duration="available for 2weeks stay"
        />
        <Nft
          nft={Nft4}
          location="King Desert"
          price="1MBT per night"
          distance="2345 km away"
          duration="available for 2weeks stay"
        />
        <Nft
          nft={Nft5}
          location="King Desert"
          price="1MBT per night"
          distance="2345 km away"
          duration="available for 2weeks stay"
        />
        <Nft
          nft={Nft6}
          location="King Desert"
          price="1MBT per night"
          distance="2345 km away"
          duration="available for 2weeks stay"
        />
        <Nft
          nft={Nft7}
          location="King Desert"
          price="1MBT per night"
          distance="2345 km away"
          duration="available for 2weeks stay"
        />
      </Box>
    </Box>
  );
};

export default Places;
