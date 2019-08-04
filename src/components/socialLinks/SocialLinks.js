import React from "react";
import { Box, Link, Icon } from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  social: {
    display: "flex",
    height: "20vh",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
}));

function SocialLinks() {
  const classes = useStyles();

  return (
    <Box className={classes.social}>
      <Link href="https://github.com/trevorsinnott">
        <Icon className={clsx("fab fa-github")} />
        Github
      </Link>
      <Link href="https://www.linkedin.com/in/trevor-sinnott-1a8809174/">
        <Icon className={clsx("fab fa-linkedin-in")} />
        Linkedin
      </Link>
      <Link href="mailto: sinnott.trevor@gmail.com">
        <Icon className={clsx("far fa-envelope")} />
        email
      </Link>
    </Box>
  );
}

export default SocialLinks;
