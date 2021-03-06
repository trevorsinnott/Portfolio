import React from "react";
import { Typography, makeStyles, Grid, Card, CardMedia, CardContent } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  about: {
  },
  avatar: {
    height: 0,
    paddingTop: '54.25%',
    backgroundPosition: "top"
  },
  card: {
  }
}));

function About() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.about}
      item xs={12} sm={6}
    >
      <Card>
        <CardMedia className={classes.avatar} image="./avatar.jpg" />
        <CardContent>
          <Typography className={classes.content} variant="body1">
            Hi! I'm Trevor, and I'm excited about learning and building new
            things. Whether that's making PWA's with React, going to developer
            meetups, or writing command line games in Ruby. I love surrounding
            myself with people who are passionate and curious about what they do.
            If that means you, please get in touch!
            </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default About;
