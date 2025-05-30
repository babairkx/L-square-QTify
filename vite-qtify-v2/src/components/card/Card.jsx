import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Styles from "./Card.module.css";

const ActionAreaCard = ({ image, follow, songType, likes }) => {
  return (
    <div className={Styles.container}>
      <Card sx={{ width: 159, height: 205 }}>
        <CardActionArea>
          <CardMedia component="img" height="170" image={image} />
          <CardContent sx={{ padding: 0 }}>
            <div className={Styles.follow}>
              {!follow ? `${likes} Likes` : `${follow} Follows`}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
      <div className={Styles.songType}>{songType}</div>
    </div>
  );
};
export default ActionAreaCard;
