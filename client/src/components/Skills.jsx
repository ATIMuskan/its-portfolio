import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-container">
        <div className="skills-column">
          <h3 className="category-title">Programming Languages</h3>
          <div className="skills-list">
            <span className="skill-item">Java</span>
            <span className="skill-item">Python</span>
          </div>
        </div>

        <div className="skills-column">
          <h3 className="category-title">Development Skills</h3>
          <div className="skills-list">
            <span className="skill-item">NodeJS</span>
            <span className="skill-item">JavaScript</span>
            <span className="skill-item">HTML</span>
            <span className="skill-item">CSS</span>
            <span className="skill-item">Bootstrap</span>
          </div>
        </div>

        <div className="skills-column">
          <h3 className="category-title">Frameworks</h3>
          <div className="skills-list">
            <span className="skill-item">AngularJS</span>
            <span className="skill-item">ReactJS</span>
          </div>
        </div>

        <div className="skills-column">
          <h3 className="category-title">Databases</h3>
          <div className="skills-list">
            <span className="skill-item">MySQL</span>
            <span className="skill-item">MongoDB</span>
          </div>
        </div>

        <div className="skills-column">
          <h3 className="category-title">Version Control</h3>
          <div className="skills-list">
            <span className="skill-item">Git</span>
            <span className="skill-item">GitHub</span>
            <span className="skill-item">GitBash</span>
          </div>
        </div>

        <div className="skills-column">
          <h3 className="category-title">Soft Skills</h3>
          <div className="skills-list">
            <span className="skill-item">Effective Communication</span>
            <span className="skill-item">Problem-Solving</span>
            <span className="skill-item">Quick Learner</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
