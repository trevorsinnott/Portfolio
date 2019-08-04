import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  hero: {
    color: "#fff",
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
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.hero}
    >
      <Grid item>
        <Typography variant="h1">Trevor Sinnott</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4">Front-End Developer</Typography>
      </Grid>
    </Grid>
  );
}

export default Header;
