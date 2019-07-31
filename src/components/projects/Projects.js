import React from "react";
import Project from "../project/Project";
import uuid from "uuid";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  projects: {
    height: "100vh"
  }
}));

function Projects(props) {
  const projectList = props.projectDetails.map(project => {
    const key = uuid.v1();
    return (
      <Project
        key={key}
        title={project.title}
        description={project.description}
        liveLink={project.liveLink}
        codeLink={project.codeLink}
      />
    );
  });

  const classes = useStyles();

  return (
    <Container className={classes.projects}>
      <Typography variant="h2" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projectList}
      </Grid>
    </Container>
  );
}

export default Projects;
