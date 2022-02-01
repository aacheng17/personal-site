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
            SDE I at Amazon Web Services
            <br />
            Founder and Teacher of A* Tutoring
            <br />
            Event and Wedding Pianist
            <br />
          </h3>
          You can download my resume <a href="https://drive.google.com/drive/folders/1xerhk576vISiP_rmWC8atil-u3VYzTeo?usp=sharing" target="_blank" rel="noopener noreferrer">here</a> if you want more concise information
          <br/>
          <a href="https://tutors.com/nj/sayreville/math-tutors/aaron-cheng-tutoring" target="_blank" rel="noopener noreferrer">A* Tutoring</a>
          <br/>
          <a href="https://github.com/aacheng17" target="_blank" rel="noopener noreferrer">GitHub</a>
          <br/>
          <a href="https://aacheng.itch.io" target="_blank" rel="noopener noreferrer">itch.io</a>
          <br/><br/><br/>
          <b>A bit about me</b>
          <br/>
          Things that I hold close to my heart include philosophy of science, electronic jazz, and 2D art and animation.
          <br/><br/>Right now I'm working on mindfulness, rock climbing, and video game skills.
          <br/><br/>I love dry and abrupt humor.
          <br/><br/>I've been having a lot of fun teaching CS but I think my favorite teaching experience is the semester where I helped a professional cook pass their online physics and cooking class.
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

          <h2>Software Development Engineer at Amazon Web Services</h2>
          <p>2021-Present<br /><br/>
          Java and C#
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

          <h2>Freelance Musician</h2>
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

          <h2>Intern at iCIMS</h2>
          <p>2020<br /><br/>
          iCIMS develops talent acquisition software that employers use to facilitate hiring processes. I worked one on one with my mentor and other interns to build a full stack web application ("Ratings Site" in my Projects).
          <br/><br/>Things I learned:
          <br/>• Web development with Java Spring
          <br/>• Front end web design with ReactJS
          <br/>• Web scraping with Python and the Beautiful Soup module
          <br/>• Databases and SQL
          <br/>• Using web APIs
          <br/>• Collaboration and source control using GitHub
          </p>
          <br/>

          <h2>Math Tutor at Mathnasium Learning Center</h2>
          <p>2019 - 2021<br /><br/>
          Mathnasium approaches teaching math with the goal of encouraging children to not only understand but also appreciate and be confident in math. I was trained in their unique teaching approach, and taught small groups of students at a time.
          <br/><br/>Things I've learned:
          <br/>• Relearning math in its basic concepts in a way that an absolute beginner can understand
          <br/>• Trying different strategies of articulating these concepts 
          <br/>• Engaging with kids of all different personalities and learning needs
          </p>
          <br/>

          <h2>Music and Tech Intern for the Rockit! Live Foundation</h2>
          <p>2018 - 2019<br /><br/>
          Rockit is an amazing nonprofit music education and performance program for kids in New Jersey. I worked closely with the founder and head of the organization, Bruce Gallipani.
          I put videos together, edited photos for the website and postcards, assembled ad journals, designed posters, flyers, and event invitations, and corresponded with printing companies.
          <br/><br/>Things I learned:
          <br/>• Photoshop and Inkscape Vector Graphics
          <br/>• Visual design and the printing and marketing process
          <br/>• Turning a design into a professional finished product
          </p>
          <br/>

          <h2>Video Production Intern at Cinecall Productions</h2>
          <p>2017<br /><br/>
          Cinecall is a great production studio that often works with local charities and nonprofits. I had the privilege of working directly with the head of it, George McMorrow. I helped put together media ranging from documentaries concert DVDs.
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
          <p>Java, C#, Python, SQL, Git</p>
          <h2>Proficient</h2>
          <p>C, JavaScript, HTML, CSS, Go</p>
          <h2>Familiar</h2>
          <p>PHP, Haskell, Prolog</p>
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
          <h2>Idiot Mouth</h2>
          <p>
            Collection of small online multiplayer browser games.<br/>Built with: Go, JavaScript.<br/>
            <a href="https://idiotmouth.herokuapp.com" target="_blank" rel="noopener noreferrer">Play</a><br/>
            <a href="https://github.com/aacheng17/IdiotMouth" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
          <h2>Piano Lights</h2>
          <p>
            Stylish 3D piano midi file visualizer.<br/>Built with: Unity, C#.<br/>
            <a href="https://www.youtube.com/watch?v=50TrGN4quV4" target="_blank" rel="noopener noreferrer">Watch</a>
          </p>
          <h2>Mockroach</h2>
          <p>
            Browser based bluffing card game. Art by <a href="https://angelinac.pb.online" target="_blank" rel="noopener noreferrer">Angelina Cheng</a>.<br/>Built with: NodeJS, ReactJS.<br/>
            <a href="https://mockroach.herokuapp.com" target="_blank" rel="noopener noreferrer">Play</a>
          </p>
          <h2>WargrooveCalc</h2>
          <p>
            Simple damage calculator for the strategy game Wargroove.<br/>Built with: PHP, HTML.<br/>
            <a href="https://wargroovecalc.herokuapp.com" target="_blank" rel="noopener noreferrer">Website</a>
          </p>
          <h2>Idiot Boy</h2>
          <p>
            Simple visualization of a spiking neural network that learns to recognize numbers.<br/>Built with: Gamemaker Studio.<br/>
            <a href="https://www.youtube.com/watch?v=ArK8bcnidL0" target="_blank" rel="noopener noreferrer">Video</a>
          </p>
          <h2>Personal Site</h2>
          <p>
            The website you're on!<br/>Built with: ReactJS.<br/>
            <a href="https://github.com/aacheng17/personal-site" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
          <h2>Ratings Site</h2>
          <p>
            Full stack web app that scrapes and aggregates popular movie data from IMDb, Rotten Tomatoes, and MetaCritic, developed with two other team members.<br/>Built with: Java Spring, ReactJS, web scraping with Python Beautiful Soup and Selenium.<br/>
            <a href="https://ratingssite.azurewebsites.net" target="_blank" rel="noopener noreferrer">Link to site</a><br/>
            <a href="https://github.com/aacheng17/RatingsSite" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
          <h2>BadTranslator</h2>
          <p>
          Website and back end API for laughably bad translations.<br/>Built with: Flutter and Dart, NodeJS. Uses the Google Translate API.<br/>
            <a href="https://badtranslator-284415.web.app/#/" target="_blank" rel="noopener noreferrer">Link</a><br/>
            <a href="https://github.com/aacheng17/BadTranslator" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
          <h2>Steal Shield Stab</h2>
          <p>
            Rock paper scissors meets 2D fighting game.<br/>Built with: Gamemaker Studio.<br/>
            <a href="https://aacheng.itch.io/stealshieldstab" target="_blank" rel="noopener noreferrer">itch.io</a>
          </p>
          <h2>TaxiGame</h2>
          <p>
            Minimalist endless taxi driving game.<br/>Built with: Java Swing<br/>
            <a href="https://aacheng.itch.io/taxigame" target="_blank" rel="noopener noreferrer">itch.io</a><br/>
            <a href="https://github.com/RyanCirincione/TaxiGame" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
          <h2>The Cactus</h2>
          <p>
            Small platforming game. Don't touch the cactus. Currently under development for release on Steam.<br/>Built with: Gamemaker Studio.<br/>
            <a href="https://aacheng.itch.io/the-cactus" target="_blank" rel="noopener noreferrer">itch.io</a>
          </p>
          <h2>Morse</h2>
          <p>
            Minimalistic game about clicking on rectangles at the right time.<br/>Built with: Gamemaker Studio.<br/>
            <a href="https://aacheng.itch.io/morse" target="_blank" rel="noopener noreferrer">itch.io</a>
          </p>
          <br/>
        </div>
      )
    ],
  )
]

export default pages;