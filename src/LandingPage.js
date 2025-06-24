import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <h1>Welcome to Login Page</h1>
      <Link to="/login">
        <button className="sign-in-button">Sign In</button>
      </Link>
    </div>
  );
}

export default LandingPage;
