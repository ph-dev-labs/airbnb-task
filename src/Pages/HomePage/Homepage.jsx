import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Home1 from "../../IMAGES/image-3.jpg";
import Home2 from "../../IMAGES/image-4.jpg";
import Home3 from "../../IMAGES/image-5.jpg";
import Home4 from "../../IMAGES/image-6.jpg";
import Logo1 from "../../SVG/Group-59536.svg";
import Logo2 from "../../SVG/Group-4038.svg";
import Logo3 from "../../SVG/logo.svg";
import "./Homepage.style.css";
import Modal from "../../components/Modal/Modal";
import MetaHome from "../../components/metaverse-image/MetaHome";
import Holder from "../../components/Logo-holder/Holder";
import Nft from "../../components/Cards/Nft";
import Nft1 from "../../IMAGES/Frame-1511.svg";
import Nft2 from "../../IMAGES/Frame-1512.svg";
import Nft3 from "../../IMAGES/Frame-1513.svg";
import Nft4 from "../../IMAGES/Frame-151.svg";
import Nft5 from "../../IMAGES/Frame-1515.svg";
import Nft6 from "../../IMAGES/Frame-1516.svg";
import Nft7 from "../../IMAGES/Frame-1517.svg";
import Nft8 from "../../IMAGES/Frame-1518.svg";
import Skew1 from "../../IMAGES/Frame-595460000.svg";

const Homepage = (props) => {
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
          flexDirection: { lg: "row", sm: "column", xs: "column" },
          justifyContent: "space-evenly",
        }}
        mt={5}
      >
        <Box
          sx={{
            width: { lg: "60%", sm: "100%", xs: "100%", md: "100%" },
            transform: "translateX(30px)",
          }}
        >
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
            justifyContent: {
              lg: "space-around",
              sm: "space-evenly",
              xs: "space-evenly",
              md: "space-evenly",
            },
            alignContent: "center",
            transform: { lg: "translateX(-70px)" },
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
      {props.modal && (
        <Box
          sx={{
            position: "absolute",
            zIndex: "1000",
            transform: "translateX(400px)",
            marginTop: "-230px",
          }}
        >
          <Modal onclick={props.onclick} />
        </Box>
      )}
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
          <Box sx={{ alignItems: "center" }} className="grid-cont">
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
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          backgroundImage:
            "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
          border: "1px solid #000000",
          height: "774px",
        }}
      >
        <Box
          sx={{ width: "30%", margin: "auto", transform: "translateX(45px)" }}
        >
          <Typography className="learn-text">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundImage:
                "linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)",
              borderRadius: "8px",
              height: "48px",
              width: "156px",
            }}
          >
            <Typography className="learn-btn">Learn more</Typography>
          </Button>
        </Box>
        <Box sx={{ width: "55%", margin: "auto" }}>
          <img src={Skew1} className="size-i"  alt="skew"/>
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
