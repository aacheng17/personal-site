import React from "react";

class Page {
  constructor(path, navLink, slides) {
    this.path = path;
    this.navLink = navLink;
    this.slides = slides;
  }
}

class Slide {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}

const pages = [
  new Page(
    "/",
    "Aaron Cheng",
    [
      new Slide(
        "",
        <div>
          <h3>Hi, I'm Aaron. Welcome to my online resume!</h3>
          <b>A bit about me</b><br/>
          • I'm a software engineer at Hyperproof<br/>
          • I used to tutor stuff like coding and piano<br/>
          • (You can see my students' scathing critiques of me <a href="https://tutors.com/nj/sayreville/math-tutors/aaron-cheng-tutoring" target="_blank" rel="noopener noreferrer">here</a>)<br/>
          • I'm interested in game design, jazz piano, and philosophies of science<br/><br/>
          This website is my online resume! Happy reading :)<br/><br/>
          <a href="https://www.linkedin.com/in/aaron-cheng-b93a711a7/" target="_blank" rel="noopener noreferrer">LinkedIn</a> - <a href="https://github.com/aacheng17" target="_blank" rel="noopener noreferrer">GitHub</a> - <a href="mailto: aacheng17@gmail.com">Email</a> - <a href="https://drive.google.com/drive/u/0/folders/1xerhk576vISiP_rmWC8atil-u3VYzTeo" target="_blank" rel="noopener noreferrer">Resume PDF</a>
        </div>
      )
    ]
  ),
  new Page(
    "/experience",
    "Experience",
    [
      new Slide(
        "Work",
        <div>
          <div style={{ textAlign: "center" }}>
          <h1>Work</h1>
          </div>

          <h2>Software Engineer at Hyperproof</h2>
          <p>2022 - Present<br />
          • Full stack development of cloud-based compliance management web app using Java, C#, Golang, TypeScript, React, NodeJS, PostgreSQL
          </p>

          <h2>Software Development Engineer at Amazon Web Services</h2>
          <p>2021 - 2022<br />
          • Backend development for RDS SQL Server Multi-Availability Zone database services using Java, C#, SQL Server
          </p>

          <h2>Founder and Tutor of <a href="https://tutors.com/nj/sayreville/math-tutors/aaron-cheng-tutoring" target="_blank" rel="noopener noreferrer">A* Tutoring</a></h2>
          <p>2013 - Present<br />
          • In-person and online tutoring in programming, K-12 math, high school physics, piano, and English
          </p>

          <h2>Freelance Musician</h2>
          <p>2017 - Present<br />
          • Perform classical, jazz, and pop music at local events and weddings
          </p>

          <h2>Intern at iCIMS</h2>
          <p>2020<br />
          • Build and deployment of full stack web app
          </p>

          <h2>Tutor at Mathnasium Learning Center</h2>
          <p>2019 - 2021<br />
          • Taught small groups of K-12 math students
          </p>

          <h2>Music and Tech Intern for the Rockit! Live Foundation</h2>
          <p>2018 - 2019<br />
          • Managed website, social media, posters, flyers, and advertising
          </p>

          <h2>Video Production Intern at Cinecall Productions</h2>
          <p>2017<br />
          • Produced documentary and concert videos
          </p>
        </div>
      ),
      new Slide(
        "Skills",
        <div>
          <div style={{ textAlign: "center" }}>
            <h1>Skills</h1>
          </div>
          <h2>Experienced</h2>
          <p>Java, C#, JavaScript (TypeScript, ReactJS), Python, SQL (SQL Server, PostgreSQL), Git</p>
          <h2>Proficient</h2>
          <p>Golang</p>
          <h2>Other Software</h2>
          <p>
            Gamemaker Studio, Unity<br />
            Reaper, Audacity, Finale<br />
            Adobe Premiere, NCH Videopad Editor, Inkscape Vector Graphics<br />
            Blender, Autodesk Inventor<br/>
            Flutter, Dart<br/>
          </p>
          <br/>
        </div>
      ),
      new Slide(
        "Education",
        <div>
          <div style={{ textAlign: "center" }}>
            <h1>Education</h1>
          </div>
          <p>
            Computer Science, B.S. from Rutgers University 2021<br/>
            Philosophy Minor<br/>
            Music Minor<br/>
            Recording Arts Certificate<br/>
          </p>
          <h2>Coursework</h2>
          <ul>
            <li>Data Structures</li>
            <li>Computer Architecture</li>
            <li>Algorithm Design and Analysis</li>
            <li>Linear Algebra</li>
            <li>Discrete Structures</li>
            <li>Software Methodology</li>
            <li>Systems Programming</li>
            <li>Principles of Programming Languages</li>
            <li>Principles of Data Management</li>
            <li>Internet Technology</li>
            <li>Brain Inspired Computing</li>
            <li>Computer Security</li>
          </ul>
          <ul>
            <li>AI Ethics</li>
            <li>Modal Logic</li>
            <li>Philosophy of Physics</li>
            <li>Metaphysics</li>
          </ul>
          <ul>
            <li>Music Theory and Analysis</li>
            <li>World Music</li>
            <li>Business of Music</li>
            <li>Digital Audio Composition</li>
            <li>Production: Recording and Mixing</li>
          </ul>
          <ul>
            <li>Creative Writing</li>
            <li>Multimedia Composition</li>
            <li>Information Technology and Informatics</li>
            <li>Communication and Information Processes</li>
            <li>Research: Politics of Climate Change</li>
          </ul>
          <br/>
        </div>
      )
    ],
  ),
  new Page(
    "/portfolio",
    "Personal Projects",
    [
      new Slide(
        "Projects",
        <div>
          <p>If you'd like to try out these apps, please note that some of them are on free hosting services and may take a minute to load.</p>
          <h2>Piano Lights</h2>
          <p>
            Stylish 3D piano midi file visualizer.<br/>Built with: Unity, C#.<br/>
            <a href="https://www.youtube.com/watch?v=50TrGN4quV4" target="_blank" rel="noopener noreferrer">Watch</a>
          </p>
          <h2>Total TKD Sparring</h2>
          <p>
            WIP full stack web app for collaboratively scoring sparring matches by World Taekwondo guidelines<br/>Build with: Golang, JavaScript, HTML/CSS<br/>
            <a href="https://total-tkd-sparring.herokuapp.com/">Link</a>
          </p>
          <h2>Idiot Boy</h2>
          <p>
            Simple visualization of a spiking neural network that learns to recognize numbers, named for its poor performance during early development.<br/>Built with: Gamemaker Studio.<br/>
            <a href="https://www.youtube.com/watch?v=ArK8bcnidL0" target="_blank" rel="noopener noreferrer">Watch</a>
          </p>
          <h2>Personal Site</h2>
          <p>
            The website you're on!<br/>Built with: ReactJS.<br/>
            <a href="https://github.com/aacheng17/personal-site" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
          <h2>BadTranslator</h2>
          <p>
          Website and back end API for laughably bad translations.<br/>Built with: Flutter and Dart, NodeJS. Uses the Google Translate API.<br/>
            <a href="https://badtranslator-284415.web.app/#/" target="_blank" rel="noopener noreferrer">Link</a><br/>
            <a href="https://github.com/aacheng17/BadTranslator" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
          <h2>Game Portfolio</h2>
          <p>
            Ongoing personal game development project.<br/>
            <a href="https://aacheng.itch.io" target="_blank" rel="noopener noreferrer">itch.io</a>
          </p>
          <h2>Ratings Site</h2>
          <p>
            Full stack web app that scrapes and aggregates popular movie data from IMDb, Rotten Tomatoes, and MetaCritic.<br/>Built with: Java Spring, ReactJS, MySQL, Python<br/>
            <a href="https://github.com/aacheng17/RatingsSite" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
          <br/>
        </div>
      )
    ],
  )
]

export default pages;