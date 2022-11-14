import { Card, CardMedia } from '@mui/material'
import React from 'react'
import "./MetaHome.style.css"

const MetaHome = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="meta-card">
      <CardMedia
        component="img"
        height="180"
        image={props.image}
        alt="METAVERSE-HOME"
      />
    </Card>
  )
}

export default MetaHome