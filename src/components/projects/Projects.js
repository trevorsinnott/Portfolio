import React from "react";
import Project from "../project/Project";
import uuid from "uuid";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  projects: {
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
        image={project.image}
        color={project.color}
      />
    );
  });

  const classes = useStyles();

  return (
    <Grid item container justify="center" className={classes.projects}>
      <Grid item>
        <Typography variant="h2" gutterBottom>
          Projects
        </Typography>
      </Grid>
      <Grid container item justify="space-evenly" spacing={3}>
        {projectList}
      </Grid>
    </Grid>
  );
}

export default Projects;
