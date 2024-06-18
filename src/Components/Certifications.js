// src/components/Certifications.js
import React from 'react';
import './Certifications.css';
import PERN from '../Components/PERN.jpg'

const Certifications = () => {
  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <div className="certification-card">
        <h3>Full Stack Web Development bootcamp 2024</h3>
        <p>PERN stack technology</p>
        <img className="pern-stack" src={PERN} alt='web dev certificate'/>
      </div>
      <div className="certification-card">
        <h3>Effective Problem-Solving and Decision-Making</h3>
        <p>8hrs of training on Effective problem solving, University of California, Irvine</p>
        <a href='https://coursera.org/share/0079ec2ac245f1167878796e01368568' style={{color:"yellow"}}>View Certificate</a>

      </div>
      <div className="certification-card">
        <h3>Python Data Structures</h3>
        <p>University of Michigan</p>
        <a href='https://coursera.org/share/bd65da0ab0c76c169be2a724684a8b3f' style={{color:"yellow"}}>View Certificate</a>

      </div>
    </section>
  );
};

export default Certifications;
