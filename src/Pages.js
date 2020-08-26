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
          <h2>Welcome to my personal website<br />I'm Aaron Cheng</h2>
          <p>-</p>
          <h3>
            Computer Science Student at Rutgers University
            <br />
            Founder and Teacher of A* Tutoring
            <br />
            Jazz and Pop Gig Pianist
            <br />
          </h3>
          <p>-</p>
          <a href="https://github.com/aacheng17">Github</a>
          <br/>
          <a href="https://www.linkedin.com/in/aaron-cheng-b93a711a7/">LinkedIn</a>
          <br/>
          <a href="https://app.joinhandshake.com/users/9912209">HandShake</a>
          <br/>
          <a href="https://aacheng.itch.io">itch.io</a>
          <br/>
          <a href="https://tutors.com/nj/sayreville/math-tutors/aaron-cheng-tutoring">A* Tutoring</a>
          <br/>
          <a href="http://aaronchengmusic.com">Music</a>

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
          <h2>Founder and Tutor of <a href="https://tutors.com/nj/sayreville/math-tutors/aaron-cheng-tutoring">A* Tutoring</a></h2>
          <p>2013 - Present<br />Private tutoring for programming, math, physics, music, and English</p>
          <h2>Intern at iCIMS</h2>
          <p>2020<br />Mentored by a senior software engineer and worked with fellow mentees to build a full stack web application.</p>
          <h2>Math Tutor at Mathnasium Learning Center</h2>
          <p>2019 - Present<br />K-12 math tutor</p>
          <h2><a href="https://aaronchengmusic.com">Freelance Musician</a></h2>
          <p>2017 - Present<br />Classical, jazz, and pop pianist for local events and weddings</p>
          <h2>Music and Tech Intern for the Rockit! Live Foundation</h2>
          <p>2018 - 2019<br />Editing and design for website, social media, flyers, photos, videos</p>
          <h2>Video Production Intern at Cinecall Productions</h2>
          <p>2017<br />Video editing for concerts and documentaries</p>
          <h2>Database Management Intern at Neteon Technologies</h2>
          <p>2017<br />Managing product information on company website</p>
        </div>
      ),
      new Slide(
        "Skills",
        <div>
          <div style={{ textAlign: "center" }}>
            <h1>Skills</h1>
          </div>
          <h2>Experienced</h2>
          <p>Python, Java</p>
          <h2>Proficient</h2>
          <p>C, JavaScript, HTML, CSS, Dart, SQL</p>
          <h2>Familiar</h2>
          <p>C#, Haskell, Prolog</p>
          <h2>Other Software</h2>
          <p>
            Git, Flutter<br />
            Gamemaker Studio, Unity<br />
            Reaper, Audacity, Finale<br />
            NCH Videopad Editor, Inkscape Vector Graphics<br />
            Blender, Autodesk Inventor<br/>
          </p>
        </div>
      ),
      new Slide(
        "Education",
        <div>
          <div style={{ textAlign: "center" }}>
            <h1>Education</h1>
          </div>
          <p>
            Computer Science, B.S. from Rutgers University anticipated May 2021<br/>
            Philosophy Minor<br/>
            Music Minor<br/>
            Recording Arts Certificate<br/>
          </p>
          <h2>Coursework</h2>
          <ul>
            <li>Data Structures</li>
            <li>Computer Architecture</li>
            <li>Design and Analysis of Algorithms</li>
            <li>Linear Algebra</li>
            <li>Discrete Structures</li>
            <li>Software Methodology</li>
            <li>Systems Programming</li>
            <li>Principles of Programming Languages</li>
            <li>Principles of Data Management</li>
            <li>Internet Technology</li>
            <li>Computer Security</li>
            <li>Brain Inspired Computing</li>
          </ul>
          <ul>
            <li>Introduction to Logic</li>
            <li>Introduction to Philosophy of Physics</li>
            <li>Philosophy of Cosmology</li>
            <li>Minds, Machines, and Persons</li>
          </ul>
          <ul>
            <li>Music Theory and Analysis</li>
            <li>World Music</li>
            <li>Business of Music</li>
            <li>Digital Audio Composition</li>
            <li>Production: Recording and Mixing</li>
          </ul>
          <ul>
            <li>Introduction to Creative Writing</li>
            <li>Multimedia Composition</li>
            <li>Information Technology and Informatics</li>
          </ul>
        </div>
      )
    ],
  ),
  new Page(
    "/portfolio",
    "Portfolio",
    [
      new Slide(
        "Projects",
        <div>
          <h2>Personal Site</h2>
          <p>
            Website you're currently on<br/>
            Javascript<br/>
            <a href="https://github.com/aacheng17/personal-site">Github</a>
          </p>
          <h2>Ratings Site</h2>
          <p>
            Website for aggregated movie ratings<br/>
            Javascript, Java, Python<br/>
            <a href="https://ratingssite.azurewebsites.net">Link to site</a><br/>
            <a href="https://github.com/aacheng17/RatingsSite">Github</a>
          </p>
          <h2>BadTranslator</h2>
          <p>
            Website for translating things badly<br/>
            Dart, Javascript<br/>
            <a href="https://badtranslator-284415.web.app">Link to site</a><br/>
            <a href="https://github.com/aacheng17/BadTranslator">Github</a>
          </p>
          <h2>Steal Shield Stab</h2>
          <p>
            Game about fighting and bluffing friends<br/>
            GameMaker Language<br/>
            <a href="https://aacheng.itch.io/stealshieldstab">itch.io</a>
          </p>
          <h2>TaxiGame</h2>
          <p>
            Game about zipping through streets as a taxi<br/>
            Java<br/>
            <a href="https://aacheng.itch.io/taxigame">itch.io</a><br/>
            <a href="https://github.com/RyanCirincione/TaxiGame">Github</a>
          </p>
          <h2>The Cactus</h2>
          <p>
            Game about surviving a cactus<br/>
            GameMaker Language<br/>
            <a href="https://aacheng.itch.io/the-cactus">itch.io</a>
          </p>
          <h2>Morse</h2>
          <p>
            Game about clicking at the right time<br/>
            GameMaker Language<br/>
            <a href="https://aacheng.itch.io/morse">itch.io</a>
          </p>
        </div>
      )
    ],
  )
]

export default pages;