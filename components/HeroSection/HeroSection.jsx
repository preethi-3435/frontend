import React from 'react';
import './HeroSection.css';
import { assets } from '../../assets/assets';

const HeroSection = () => {
  return (
   
    <div className="hero-section">
      <div className="feature-cards-container">
        {/* Left Features */}
        <div className="feature-cards">
          <div className="card">
            <h2>Effortless Workout Logging</h2>
            <p>Easily log your workouts and monitor your progress over time with our intuitive logging feature.</p>
          </div>
          <div className="card">
            <h2>Accurate Rep Counting</h2>
            <p>Count your reps accurately with our app, ensuring consistency and improved performance.</p>
          </div>
        </div>

        {/* Center Mockup */}
        <div className="mockup-container">
          <img src={assets.phone_mockup} alt="Phone Mockup" />
        </div>

        {/* Right Features */}
        <div className="feature-cards">
          <div className="card">
            <h2>Personalized Workout Plans</h2>
            <p>AI-powered workout plans tailored to your fitness level and goals.</p>
          </div>
          <div className="card">
            <h2>Calorie Tracking & Personalized Diet Plans</h2>
            <p>Calculate calories burned during workouts and AI-customized meal plans for optimal nutrition and wellness.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
