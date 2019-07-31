import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

function Project(props) {
  return (
    <Grid item xs>
      <Card>
        <CardContent>
          <Typography variant="h2">{props.title}</Typography>
          <p>{props.description}</p>
          <a href={props.liveLink}>Live Site</a>
          <a href={props.codeLink}>Github</a>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Project;
