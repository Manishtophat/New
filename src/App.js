import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { white } from "@mui/material/colors";
// import { Grid } from "@material-ui/core";
// import { SendIcon } from "@material-ui/core/Icon";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import RecommendBorderIcon from "@mui/icons-material/Recommend";
import RecommendIcon from "@mui/icons-material/Recommend";

import { TextField } from "@mui/material";

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
  },
  media: {
    height: 100,
  },
  input: {
    color: "white",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <center style={{ backgroundColor: "#0d1b2a" }}>
      <div style={{ margin: 10 }}>
        <TextField
          label="Small Outlined Input"
          variant="outlined"
          size="small"
          color="warning"
          style={{ margin: 10, backgroundColor: "#9d8189" }}
        />
      </div>
      <div>
        <TextField
          label="Normal Filled Input"
          variant="filled"
          color="secondary"
          style={{ backgroundColor: "#9d8189" }}
        />
      </div>
      <div>
        <TextField
          label="Normal Standard Input"
          variant="standard"
          color="success"
          style={{
            marginTop: 10,
            backgroundColor: "#9d8189",
          }}
        />
      </div>
      <Card className={classes.root} style={{ marginTop: 10 }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://th.bing.com/th/id/OIP.XIN7_KAGB31P4cef8k3yxAHaE8?pid=ImgDet&rs=1"
            title="Contemplative Reptile"
          />
          <CardContent
            style={{
              backgroundColor: "#fff3b0",
              textDecorationColor: "white",
            }}
          >
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            style={{ backgroundColor: "#240046", color: "#FFFFFF" }}
          >
            Share
          </Button>
          <Button
            size="small"
            style={{ backgroundColor: "#8d99ae", color: "#FFFFFF" }}
          >
            Share
          </Button>
          <Button
            size="small"
            style={{ backgroundColor: "#62b6cb", color: "#FFFFFF" }}
          >
            Share
          </Button>
        </CardActions>
      </Card>
      <div style={{ backgroundColor: "#FFFFFF", marginTop: 4 }}>
        <Checkbox color="secondary" />
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        <Checkbox
          icon={<RecommendBorderIcon />}
          checkedIcon={<RecommendIcon />}
        />
      </div>
    </center>
  );
}
