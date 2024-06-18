// src/components/Home.js
import React from 'react';
import './Home.css';
import profilepic from '../Components/profilepic.jpg'

const Home = () => {
  return (
    <section id="home">
      <div className="profile">
        <div className="profile-picture">
          <img src={profilepic} alt="Profile" />
        </div>
        <h1>Welcome to My Portfolio</h1>
        <p className='me'>I am Prajwal Mutalik, an aspiring full stack web developer </p>
      </div>
    </section>
  );
};

export default Home;
