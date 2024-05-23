import React from 'react';
import { useNavigate } from 'react-router-dom';
import Reports from './Reports';
import './Settings.css';

const Settings = () => {
  const navigate = useNavigate();

  // const handleDeleteData = async () => {
  //   const response = await fetch('/', {
  //     method: 'DELETE',
  //   });

  //   if (response.ok) {
  //     alert('All data deleted');
  //   } else {
  //     alert('Failed to delete data');
  //   }
  // };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="settings-container">
      <h2 className="settings-title">Settings</h2>
      <div className="settings-reports">
        <Reports />
      </div>
      <div className="settings-buttons">
        <button className="settings-button" onClick={handleLogout}>Remove All Data</button>
        <button className="settings-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Settings;