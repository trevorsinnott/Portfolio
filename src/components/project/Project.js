import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  makeStyles,
  CardActions,
  Button
} from "@material-ui/core";

const useStyles = makeStyles({
  media: {
    height: 200,
    backgroundSize: "contain",
    backgroundPosition: "center"
  },
  content: {
    fontSize: ".875rem"
  },
  title: {
    fontSize: "4.285em"
  },
  subTitle: {
    fontSize: "1.15em"
  },
  "@media (max-width: 600px)": {
    content: {
      fontSize: ".6rem",
    },
    media: {
      backgroundColor: "green",
      display: "none"
    }
  }
});

function Project(props) {
  const classes = useStyles();

  return (
    <Grid item lg={4} md={6} sm={12} xs={12}>
      <Card>
        <CardMedia
          href={props.liveLink}
          className={classes.media}
          image={props.image}
          style={{ backgroundColor: props.color }}
        />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant="h2" gutterBottom>{props.title}</Typography>
          <Typography className={classes.subTitle} variant="subtitle1">{props.description}</Typography>
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
