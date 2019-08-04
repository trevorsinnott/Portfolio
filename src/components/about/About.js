import React from "react";
import { Typography, makeStyles, Avatar, Grid } from "@material-ui/core";
import { loadCSS } from "fg-loadcss";

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

  React.useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
  }, []);

  return (
    <Grid
      className={classes.about}
      container
      spacing={3}
      direction="column"
      alignItems="center"
      justify="space-evenly"
    >
      <Grid
        container
        item
        lg={4}
        md={4}
        sm={4}
        justify="center"
        alignItems="center"
      >
        <Avatar className={classes.avatar} src="./avatar.jpg">
          TS
        </Avatar>
      </Grid>
      <Grid item lg={8} md={8} sm={8}>
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
