import React from "react";

function Project(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a href={props.liveLink}>Live Site</a>
      <a href={props.codeLink}>Github</a>
    </div>
  );
}

export default Project;
