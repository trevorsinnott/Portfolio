import React, { Component } from "react";
import Project from "../project/Project";

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
    const projects = this.state.projects.map(project => {
      return (
        <Project
          title={project.title}
          description={project.description}
          liveLink={project.liveLink}
          codeLink={project.codeLink}
        />
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1>Trevor Sinnott</h1>
          <h2>Front-End Developer</h2>
          <div>
            <a href="https://github.com/trevorsinnott">Github</a>
            <a href="https://www.linkedin.com/in/trevor-sinnott-1a8809174/">
              Linkedin
            </a>
          </div>
        </header>
        <article>
          <h1>About</h1>
          <p>
            Hi! I'm Trevor, a front-end developer who loves learning and
            building new things. Whether that's making PWA's with React, going
            to developer meetups, or writing command line games in Ruby. I love
            surrounding myself with people who are passionate and curious about
            what they do. If that means you, please get in touch!
          </p>
        </article>
        <article>
          <h1>Skills</h1>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Ruby</li>
          </ul>
        </article>
        <article>
          <h1>Projects</h1>
          {projects}
        </article>
      </div>
    );
  }
}

export default App;
