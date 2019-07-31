import React, { Component } from "react";
import Header from "../header/Header";
import About from "../about/About";
import { Container, CssBaseline } from "@material-ui/core";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: "Notes App",
          description:
            "A notes app PWA that allows users to create, edit and delete notes and format using markdown.",
          liveLink: "https://notes-app.now.sh/",
          codeLink: "https://github.com/trevorsinnott/reactNotesApp"
        },
        {
          title: "My Odin Blog",
          description:
            "A responsive blog and personal site built using Ruby on Rails. Has articles, projects and contact.",
          liveLink: "https://my-odin-blog.herokuapp.com/",
          codeLink: "https://my-odin-blog.herokuapp.com/"
        },
        {
          title: "Calculator",
          description:
            "A simple calculator built using vanilla JavaScript, HTML and CSS.",
          liveLink: "https://trevorsinnott.github.io/calculator/",
          codeLink: "https://github.com/trevorsinnott/calculator"
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Container>
          <About />
          <Skills />
          <Projects projectDetails={this.state.projects} />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
