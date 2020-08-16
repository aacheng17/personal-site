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
          <h2>
            Computer Science Major at Rutgers University
            <br />
            Founder and Teacher at A* Tutoring
            <br />
            Jazz and Pop Gig Pianist
            <br />
            _
          </h2>
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
          <h2>Math Tutor at Mathnasium Learning Center</h2>
          <p>2019 - Present<br />K-12 math tutor</p>
          <h2>Freelance Musician</h2>
          <p>2017 - Present<br />Classical, jazz, and pop pianist for local events and weddings</p>
          <h2>Music and Tech intern for the Rockit! Live Foundation</h2>
          <p>2018 - 2019<br />Editing and design for website, social media, flyers, photos, videos</p>
          <h2>Video Production Intern at Cinecall Productions</h2>
          <p>2017<br />Video editing for concerts and documentaries</p>
        </div>
      ),
      new Slide(
        "Skills",
        <div>
          <h1>Skills</h1>
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
          <h1>Education</h1>
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
        "todo",
        <div>
          todo
        </div>
      )
    ],
  ),
  new Page(
    "/interests",
    "Interests",
    [
      new Slide(
        "todo",
        <div>
          todo
        </div>
      )
    ],
  )
]

export default pages;