import React from "react";

function Portfolio() {
  return (
    <div className="portfolio">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>I am a web developer with experience in building responsive and user-friendly websites.</p>
        </section>
        <section id="projects">
          <h2>My Projects</h2>
          <ul>
            <li>
              <h3>Project 1</h3>
              <p>A brief description of the project and its features.</p>
            </li>
            <li>
              <h3>Project 2</h3>
              <p>A brief description of the project and its features.</p>
            </li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <br />
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <br />
            <label>
              Message:
              <textarea name="message"></textarea>
            </label>
            <br />
            <input type="submit" value="Send" />
          </form>
        </section>
      </main>
      <footer>
        <p>Copyright © {new Date().getFullYear()} My Portfolio</p>
      </footer>
    </div>
  );
}

export default Portfolio;