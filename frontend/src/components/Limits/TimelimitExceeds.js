import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TimelimitExceeds.css'; // Add your CSS styling for TimelimitExceeds page

const TimelimitExceeds = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="timelimit-exceeds-container">
      <h2>Time Limit Exceeded!</h2>
      <p>Oops! It seems you've exceeded the time limit for this website.</p>
      <button className="go-back-button" onClick={handleGoBack}>Go Back to Safety</button>
    </div>
  );
};

export default TimelimitExceeds;
