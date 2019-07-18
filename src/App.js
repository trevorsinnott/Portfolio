import React from "react";

function App() {
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
          Hi! I'm Trevor, a front-end developer who loves learning and building
          new things. Whether that's making PWA's with React, going to developer
          meetups, or writing command line games in Ruby. I love surrounding
          myself with people who are passionate and curious about what they do.
          If that means you, please get in touch!
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
        <div>
          <h2>Notes App</h2>
          <p>
            A notes app PWA that allows users to create, edit and delete notes
            and format using markdown.
          </p>
          <a href="https://notes-app.now.sh/">Live Site</a>
          <a href="https://github.com/trevorsinnott/reactNotesApp">Github</a>
        </div>
        <div>
          <h2>My Odin Blog</h2>
          <p>
            A responsive blog and personal site built using Ruby on Rails. Has
            articles, projects and contact.
          </p>
          <a href="https://my-odin-blog.herokuapp.com/">Live Site</a>
          <a href="https://github.com/trevorsinnott/my_odin_blog">Github</a>
        </div>
        <div>
          <h2>Calculator</h2>
          <p>
            A simple calculator built using vanilla JavaScript, HTML and CSS.
          </p>
          <a href="https://trevorsinnott.github.io/calculator/">Live Site</a>
          <a href="https://github.com/trevorsinnott/calculator">Github</a>
        </div>
      </article>
    </div>
  );
}

export default App;
