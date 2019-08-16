import React from "react";
import { Typography, makeStyles, Container, Grid, Card, CardMedia, CardContent } from "@material-ui/core";
import Skills from "../skills/Skills";

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
      container
      item
      spacing={3}
      direction="row"
      alignItems="center"
      justify="center"
    >
      <Grid item lg={3} md={3} sm={3}>
        <Skills />
      </Grid>
      <Grid item lg={9} md={9} sm={9}>
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
    </Grid>
  );
}

export default About;
