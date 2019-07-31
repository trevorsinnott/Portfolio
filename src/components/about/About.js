import React from "react";
import { Typography, Container, makeStyles } from "@material-ui/core";
import { loadCSS } from "fg-loadcss";

const useStyles = makeStyles(theme => ({
  about: {
    height: "100vh"
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
    <Container className={classes.about}>
      <Typography variant="h2">About</Typography>
      <Typography variant="body1" paragraph>
        Hi! I'm Trevor, a front-end developer who loves learning and building
        new things. Whether that's making PWA's with React, going to developer
        meetups, or writing command line games in Ruby. I love surrounding
        myself with people who are passionate and curious about what they do. If
        that means you, please get in touch!
      </Typography>
    </Container>
  );
}

export default About;
