import { Box, Typography } from '@mui/material'
import React from 'react'
import "./Nft.styles.css"

const Nft = (props) => {
  return (
    <Box className='nft-holder'>
        <Box>
            <img src={props.nft} alt="META-HOME"/>
            <img src="" alt="HEART"/>
        </Box>
        <Box>
            <Typography>{props.location}</Typography>
            <Typography>{props.price}</Typography>
        </Box>
        <Box>
            <Typography>{props.distance}</Typography>
            <Typography>{props.duration}</Typography>
        </Box>
        <Box>
            <img src="" alt="STAR"/>
            <img src="" alt="STAR"/>
            <img src="" alt="STAR"/>
            <img src="" alt="STAR"/>
            <img src="" alt="STAR"/>
        </Box>
    </Box>
  )
}

export default Nft