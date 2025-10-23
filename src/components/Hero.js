import React from 'react';
import './Hero.css';
import logo from '../logo.jpg';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="logo-container">
          <img src={logo} alt="COA Holding Company" className="logo" />
        </div>
        <h1 className="hero-title">Coming Soon</h1>
        <p className="hero-subtitle">
          Something exceptional is on the horizon
        </p>
        <div className="hero-divider"></div>
      </div>
    </div>
  );
}

export default Hero;

