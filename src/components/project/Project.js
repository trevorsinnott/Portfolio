import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  makeStyles,
<<<<<<< HEAD
=======
  CardActionArea,
>>>>>>> master
  CardActions,
  Button
} from "@material-ui/core";

const useStyles = makeStyles({
  media: {
    height: 200,
    backgroundSize: "contain",
    backgroundPosition: "center"
  }
});

function Project(props) {
  const classes = useStyles();

  return (
    <Grid item lg={4} md={6} sm={12}>
      <Card>
        <CardMedia
          href={props.liveLink}
          className={classes.media}
          image={props.image}
          style={{ backgroundColor: props.color }}
        />
        <CardContent>
          <Typography variant="h2">{props.title}</Typography>
          <p>{props.description}</p>
        </CardContent>
        <CardActions>
          <Button href={props.liveLink}>Live Site</Button>
          <Button href={props.codeLink}>Github</Button>
          {/* <a href={}>Live Site</a>
          <a href={props.codeLink}>Github</a> */}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Project;
