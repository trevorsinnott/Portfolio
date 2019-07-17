import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trevor Sinnott</h1>
        <h2>Front-End Developer</h2>
        <div>
          <a href="https://github.com/trevorsinnott">github</a>
          <a href="https://www.linkedin.com/in/trevor-sinnott-1a8809174/">
            linkedin
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
    </div>
  );
}

export default App;
