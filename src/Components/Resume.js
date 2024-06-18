// src/components/Resume.js
import React from 'react';
import './Resume.css';
import resume from '../Components/Resume__1_.pdf'

const Resume = () => {
  return (
    <section id="resume">
      <h2>My Resume</h2>
      <div className="resume-content">
        <iframe src={resume} title="Resume" />
      </div>
    </section>
  );
};

export default Resume;
