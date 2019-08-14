import React from "react";
import { Typography, makeStyles, Avatar, Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  about: {
    height: "120vh"
  },
  avatar: {
    height: 100,
    width: 100
  }
}));

function About() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.about}
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justify="center"
    >
      <Grid
        container
        item
        lg={12}
        md={12}
        sm={12}
        justify="center"
        alignItems="center"
      >
        <Avatar className={classes.avatar} src="./avatar.jpg">
          TS
        </Avatar>
      </Grid>
      <Grid item lg={10} md={10} sm={10}>
        <Typography className={classes.content} variant="body1">
          Hi! I'm Trevor, and I'm excited about learning and building new
          things. Whether that's making PWA's with React, going to developer
          meetups, or writing command line games in Ruby. I love surrounding
          myself with people who are passionate and curious about what they do.
          If that means you, please get in touch!
        </Typography>
      </Grid>
    </Grid>
  );
}

export default About;
