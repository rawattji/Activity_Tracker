import React from 'react';
import { useNavigate } from 'react-router-dom';
import Reports from './Reports';

const Settings = () => {
  const navigate = useNavigate();

  const handleDeleteData = async () => {
    const response = await fetch('/users/1', {
      method: 'DELETE',
    });

    if (response.ok) {
      alert('All data deleted');
    } else {
      alert('Failed to delete data');
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Settings</h2>
      <Reports />
      <button onClick={handleDeleteData}>Remove All Data</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Settings;
