import React, { useEffect } from 'react';
import './About.css';

function About() {

  useEffect(() => {
    const internshipsCounter = document.getElementById('internships');
    const projectsCounter = document.getElementById('projects');

    let internships = 3; // 3 internships
    let projects = 10; // 10 projects now

    let internshipsInterval = setInterval(() => {
      if (parseInt(internshipsCounter.innerText) < internships) {
        internshipsCounter.innerText = parseInt(internshipsCounter.innerText) + 1;
      } else {
        clearInterval(internshipsInterval);
      }
    }, 200);

    let projectsInterval = setInterval(() => {
      if (parseInt(projectsCounter.innerText) < projects) {
        projectsCounter.innerText = parseInt(projectsCounter.innerText) + 1;
      } else {
        clearInterval(projectsInterval);
      }
    }, 100);
  }, []);

  return (
    <div className="about" id="about">
      <h2>About <span className="highlight">Me</span></h2>
      <p className="about-description">
        Hello! I'm <strong>Muskan</strong>, a developer with a passion for creating beautiful and functional web applications.
        I enjoy working with <strong>React</strong>, <strong>Node.js</strong>, and solving complex problems elegantly.
      </p>

      {/* Resume Button */}
      <div className="resume-buttons">
  
  <a href="/MUSKAN.pdf" download>
    <button className="resume-button">Download Resume</button>
  </a>
</div>


      {/* Counters */}
      <div className="about-counters">
        <div className="counter">
          <h3><span id="internships">0</span>+</h3>
          <p>Internships ( 2 Online + 1 Offline )</p>
        </div>
        <div className="counter">
          <h3><span id="projects">0</span>+</h3>
          <p>Projects Completed</p>
        </div>
      </div>

      {/* Quote */}
      <div className="about-quote">
        <p>"Turning ideas into reality, one line of code at a time."</p>
        <span className="signature">— Muskan</span>
      </div>
    </div>
  );
}

export default About;
