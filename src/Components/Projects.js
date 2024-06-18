// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects and programming</h2>
      <div className="project-card">
        <h3>Wheather App</h3>
        <p>A frontend project that has an amazing UI integrated with APIs for a live wheather forecast</p>
        <a href='https://github.com/PrajwalMutalik/Weather-App' style={{color:"yellow"}}> Project Link</a>
      </div>
      <div className="project-card">
        <h3>Group-Chat website</h3>
        <p>The project comprises of react.js and node.js. Groups can be created with unique pin and can be joined using that unique pin</p>
        <a href='https://github.com/PrajwalMutalik/Group-Chat' style={{color:"yellow"}}> Project Link</a>
      </div>
      <div className="project-card">
        <h3>Problems Solving</h3>
        <p>Till  date (updates every month-end)</p>
        <a href='https://leetcode.com/u/prajwalmutalik/'> <p>Leetcode - 47 problems</p></a>
        <a href='https://codeforces.com/profile/Prajwal_p_m'> <p>Codeforces - 20 problems</p></a>
        <a href='https://www.codechef.com/users/prajwalmutalik'> <p>CodeChef - 35 problems</p></a>
      </div>
      <div className="project-card">
        <h3>View More</h3>
        <p>Take a look at my other projects: Dice-Roll, Drum-kit and a few more</p>
        <a href='https://github.com/PrajwalMutalik?tab=repositories' style={{color:"yellow"}}> Project Link</a>
      </div>
    </section>
  );
};

export default Projects;
