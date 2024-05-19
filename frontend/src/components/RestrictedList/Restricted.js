import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Restricted.css'; // Import CSS file


const Restricted = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    window.location.href = "https://www.google.com";
  };


  return (
    <div className="restricted-container">
      <h1 className="restricted-title">Restricted Access</h1>
      <p className="restricted-text">This website is restricted.</p>
      <button className="restricted-button" onClick={handleGoBack}>
        Go to Safety
      </button>
    </div>
  );
};

export default Restricted;
