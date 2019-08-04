import React from "react";
import { Typography, AppBar, Toolbar, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  hero: {
    height: "80vh",
    borderRadius: "0",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: `no-repeat`,
    backgroundAttachment: "fixed",
    backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)),
      url(https://images.unsplash.com/photo-1519331582073-283f1a211a3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2038&q=80)`
  },
  title: {
    height: "80vh",
    backgroundColor: "rgb(63, 81, 181, 0)"
  },
  scroll: {
    height: "80vh"
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.scroll} textAlign="center">
      <Paper className={classes.hero} />
      <AppBar className={classes.title} position="absolute">
        <Toolbar />
        <Box m="auto">
          <Typography variant="h1">Trevor Sinnott</Typography>
          <Typography variant="h4">Front-End Developer</Typography>
        </Box>
      </AppBar>
    </Box>
  );
}

export default Header;
