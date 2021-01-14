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
          <br/>
          <h3>
            Computer Science Student at Rutgers University
            <br />
            Founder and Teacher of A* Tutoring
            <br />
            Jazz and Pop Gig Pianist
            <br />
          </h3>
          <a href="https://drive.google.com/drive/folders/1xerhk576vISiP_rmWC8atil-u3VYzTeo?usp=sharing" target="_blank" rel="noopener noreferrer">You can download my resume here</a> if you want more concise information
          <br/>
          <a href="https://github.com/aacheng17" target="_blank" rel="noopener noreferrer">GitHub</a>
          <br/>
          <a href="https://www.linkedin.com/in/aaron-cheng-b93a711a7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <br/>
          <a href="https://app.joinhandshake.com/users/9912209" target="_blank" rel="noopener noreferrer">HandShake</a>
          <br/>
          <a href="https://aacheng.itch.io" target="_blank" rel="noopener noreferrer">itch.io</a>
          <br/>
          <a href="https://tutors.com/nj/sayreville/math-tutors/aaron-cheng-tutoring" target="_blank" rel="noopener noreferrer">A* Tutoring</a>
          <br/>
          <a href="http://aaronchengmusic.com" target="_blank" rel="noopener noreferrer">Music</a>
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
          <h2>Intern at iCIMS</h2>
          <p>2020<br /><br/>
          I got the amazing opportunity to be an intern at iCIMS, a group of the friendliest, smartest, and most considerate professionals I know. I worked one on one with my mentor, a senior software engineer at the company, and also with two other interns to build my first full stack web application ("Ratings Site" in my Projects).
          <br/><br/>Things I learned:
          <br/>• Web development with Java Spring
          <br/>• Front end web design with ReactJS
          <br/>• Web scraping with Python and the Beautiful Soup module
          <br/>• Databases and SQL
          <br/>• Using web APIs
          <br/>• Collaboration and source control using GitHub
          </p>
          <br/>

          <h2>Founder and Tutor of <a href="https://tutors.com/nj/sayreville/math-tutors/aaron-cheng-tutoring" target="_blank" rel="noopener noreferrer">A* Tutoring</a></h2>
          <p>2013 - Present<br /><br/>
          I've been teaching since I was a freshman in high school. It started with piano but in the past few years I've expanded to programming, K-12 math, AP Physics, and English. Since I started two other teachers have begun teaching under the name of A* Tutoring, covering chemistry, multivariable calculus, Spanish, violin, viola, and ESL. I've acted as the marketer, communicating with potential students. I pride myself on working towards making material intuitive to students, not just aiming for a grade, and adapting to different student goals and needs.
          <br/><br/>Things I've learned:
          <br/>• Teaching and communicating skills: Breaking an idea down and presenting it clearly
          <br/>• Interpersonal skills: Understanding what others are thinking and why they are struggling or succeeding
          <br/>• Managing: Organizing schedules and payments, as well as coordinating with other teachers
          <br/>• Marketing: Presenting my service honestly, effectively, and across different mediums
          </p>
          <br/>

          <h2>Math Tutor at Mathnasium Learning Center</h2>
          <p>2019 - Present<br /><br/>
          Mathnasium approaches teaching math with the goal of encouraging children to not only understand but also appreciate and be confident in math. They have personalized learning plans for each student and clear methods for instructors to break down and teach concepts, in which they trained me. I really admire their goal and I'm glad to be working with my center director and teaching math to local kids at Mathnasium.
          <br/><br/>Things I've learned:
          <br/>• Relearning math in its basic concepts in a way that an absolute beginner can understand
          <br/>• Trying different strategies of articulating these concepts 
          <br/>• Engaging with kids of all different personalities and learning needs
          </p>
          <br/>

          <h2><a href="https://aaronchengmusic.com" target="_blank" rel="noopener noreferrer">Freelance Musician</a></h2>
          <p>2017 - Present<br /><br/>
          In high school I started playing jazz at local events with some friends and since then I've performed at restaurants, weddings, and coffeehouses. I absolutely love music and I'm mad I don't get the chance to play as often now. I really enjoy improvising and I would love to one day release music or develop an AI that improvises music.
          <br/><br/>Things I've learned:
          <br/>• Music: Improvisation, arranging, group performance, sound engineering
          <br/>• Confidence in front of a crowd
          <br/>• Making the best of mistakes
          <br/>• How to practice
          <br/>• Working with a team and sticking to a plan
          </p>
          <br/>

          <h2>Music and Tech Intern for the Rockit! Live Foundation</h2>
          <p>2018 - 2019<br /><br/>
          Rockit is a nonprofit music education and performance program headed by an extremely passionate and driven group of musicians, possibly only matched by the talent and passion of the kids they teach. I worked closely with the founder and head of the organization, putting together videos, editing photos for the website and postcards, assembling ad journals, designing posters, flyers, and event invitations, and corresponding with printing companies. They're an amazing educational program and I'm proud to have been a part of it, those kids are insane musicians.
          <br/><br/>Things I learned:
          <br/>• Photoshop and Inkscape Vector Graphics
          <br/>• Visual design and the printing and marketing process
          <br/>• Turning a design into a professional finished product
          </p>
          <br/>

          <h2>Video Production Intern at Cinecall Productions</h2>
          <p>2017<br /><br/>
          Cinecall is a great little studio that does video post production and I had the privilege of working directly with the head of it. I sorted through footage and cut together video of things ranging from a documentary on an organization that provided free cruises to cancer patients to concert DVDs.
          <br/><br/>Things I learned:
          <br/>• Adobe Premiere
          <br/>• Video editing and production techniques
          <br/>• General knowledge of professional video recording and production
          </p>
          <br/>
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
          <p>C, C#, JavaScript, HTML, CSS, Dart, SQL</p>
          <h2>Familiar</h2>
          <p>Haskell, Prolog</p>
          <h2>Other Software</h2>
          <p>
            Git, Flutter<br />
            Gamemaker Studio, Unity<br />
            Reaper, Audacity, Finale<br />
            NCH Videopad Editor, Inkscape Vector Graphics<br />
            Blender, Autodesk Inventor<br/>
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
            Computer Science, B.S. from Rutgers University anticipated May 2021<br/>
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
            <li>Minds, Machines, and Persons</li>
            <li>Applied Symbolic Logic</li>
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
          </ul>
          <br/>
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
          <p>If you'd like to try out these apps, please note that some of them are on free hosting services and may take some time to load.</p>
          <h2>Mockroach</h2>
          <p>
            An online multiplayer bluffing card game you can play with friends. Art by <a href="https://angelinac.pb.online" target="_blank" rel="noopener noreferrer">Angelina Cheng</a>. The front end is built in ReactJS, and the back end in NodeJS.<br/>
            <a href="https://mockroach.herokuapp.com" target="_blank" rel="noopener noreferrer">Play</a>
          </p>
          <h2>Idiot Boy</h2>
          <p>
            A simple visualization of a spiking neural network that can learn to recognize numbers. Nicknamed "Idiot Boy" because it was very inaccurate in its early stages. Built for a brain inspired computing course in Gamemaker Studio 2.<br/>
            <a href="https://www.youtube.com/watch?v=ArK8bcnidL0" target="_blank" rel="noopener noreferrer">Video</a>
          </p>
          <h2>Personal Site</h2>
          <p>
            This is the website you're currently on, just a little project to practice using ReactJS. It was educational to build the fade animation and the sparkles from scratch.<br/>
            <a href="https://github.com/aacheng17/personal-site" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
          <h2>Ratings Site</h2>
          <p>
            A full stack web application that scrapes the top movies from IMDb, Rotten Tomatoes, and MetaCritic and aggregates the data in one website, developed with two other team members. We built the backend with Java Spring, the front end with ReactJS, web scraped with Python, and hosted the database and deployed the site with Microsoft Azure.<br/>
            <a href="https://ratingssite.azurewebsites.net" target="_blank" rel="noopener noreferrer">Link to site</a><br/>
            <a href="https://github.com/aacheng17/RatingsSite" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
          <h2>BadTranslator</h2>
          <p>
            A small web app consisting of a front end built in Flutter that takes your input and queries a backend built with NodeJS. The backend uses the Google Translate API to translate your input through 10 random languages and then back to English for a translation that will most likely be terrible.<br/>
            <a href="https://badtranslator-284415.web.app" target="_blank" rel="noopener noreferrer">Link to site</a><br/>
            <a href="https://github.com/aacheng17/BadTranslator" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
          <h2>Steal Shield Stab</h2>
          <p>
            Short explanation is it's rock paper scissors combined with a 2D fighting game. Made in Gamemaker Studio 2.<br/>
            <a href="https://aacheng.itch.io/stealshieldstab" target="_blank" rel="noopener noreferrer">itch.io</a>
          </p>
          <h2>TaxiGame</h2>
          <p>
            A calm, minimalist game made in Java Swing. You're a dot on a track and you zip around collecting customers, money, tracks, and upgrades.<br/>
            <a href="https://aacheng.itch.io/taxigame" target="_blank" rel="noopener noreferrer">itch.io</a><br/>
            <a href="https://github.com/RyanCirincione/TaxiGame" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
          <h2>The Cactus</h2>
          <p>
            You're a square and baddies are trying to bump you into a cactus. Currently under development for release on Steam. Made in GameMaker Studio.<br/>
            <a href="https://aacheng.itch.io/the-cactus" target="_blank" rel="noopener noreferrer">itch.io</a>
          </p>
          <h2>Morse</h2>
          <p>
            Minimalistic game about clicking on rectangles at the right time. My goal was to make something simple, clean, and finished. Made in GameMaker Studio.<br/>
            <a href="https://aacheng.itch.io/morse" target="_blank" rel="noopener noreferrer">itch.io</a>
          </p>
          <br/>
        </div>
      )
    ],
  )
]

export default pages;