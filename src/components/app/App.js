import React, { Component } from "react";
import Header from "../header/Header";
// import About from "../about/About";
import { Container, CssBaseline, createMuiTheme, Grid } from "@material-ui/core";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import { ThemeProvider } from "@material-ui/styles";
import SocialLinks from "../socialLinks/SocialLinks";

const theme = createMuiTheme({});

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
          codeLink: "https://github.com/trevorsinnott/reactNotesApp",
          image: "./notesApp.png",
          color: "rgb(63, 81, 181, .4)"
        },
        {
          title: "My Odin Blog",
          description:
            "A responsive blog and personal site built using Ruby on Rails. Has articles, projects and contact.",
          liveLink: "https://my-odin-blog.herokuapp.com/",
          codeLink: "https://my-odin-blog.herokuapp.com/",
          image: "./odinBlog.png",
          color: "rgb(139, 219, 160, 0.4)"
        },
        {
          title: "Calculator",
          description:
            "A simple calculator built using vanilla JavaScript, HTML and CSS.",
          liveLink: "https://trevorsinnott.github.io/calculator/",
          codeLink: "https://github.com/trevorsinnott/calculator",
          image: "./calculator.png",
          color: "rgb(111, 143, 162, .4)"
        }
      ]
    };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container style={{ padding: 44 }}>
          <Grid container spacing={10}>
            {/* <About /> */}
            <Projects projectDetails={this.state.projects} />
            <Skills />
          </Grid>
        </Container>
        <SocialLinks />
      </ThemeProvider>
    );
  }
}

export default App;
