import React, { useState, useEffect } from 'react';
import './RestrictedList.css';

const RestrictedList = () => {
  const [restrictedSites, setRestrictedSites] = useState([]);
  const [newSite, setNewSite] = useState('');
  const [error, setError] = useState('');
  const [timeLimits, setTimeLimits] = useState([]);

  useEffect(() => {
    const fetchRestrictedSites = async () => {
      const response = await fetch('http://localhost:3000/restricted_sites');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setRestrictedSites(data);
    };

    const fetchTimeLimits = async () => {
      const response = await fetch('http://localhost:3000/time_limits');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTimeLimits(data);
    };

    fetchRestrictedSites();
    fetchTimeLimits();
  }, []);

  const handleAddSite = async () => {
    if (!newSite.startsWith('https://')) {
      setError('URL must start with "https://"');
      return;
    }

    const isAlreadyLimited = timeLimits.some(limit => limit.url === newSite);

    if (isAlreadyLimited) {
      setError('This URL is already in the time limit list.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/restricted_sites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ restricted_site: { url: newSite } }),
      });

      if (!response.ok) {
        throw new Error('Failed to add site');
      }

      const data = await response.json();
      setRestrictedSites([...restrictedSites, data]);
      setNewSite('');
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteSite = async (siteId) => {
    try {
      const response = await fetch(`http://localhost:3000/restricted_sites/${siteId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete site');
      }

      setRestrictedSites(restrictedSites.filter(site => site.id !== siteId));
    } catch (error) {
      console.error('Error deleting site:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewSite(e.target.value);
  };

 

  return (
    <div className="restrictedList-container">
      <h2 className="restrictedList-title">Restricted Sites</h2>
      <div className="restrictedList-input-container">
        <input
          type="text"
          value={newSite}
          onChange={handleInputChange}
          placeholder="Enter URL to restrict (https://example.com)"
          className="restrictedList-input"
        />
        <button onClick={handleAddSite} className="restrictedList-add-btn">Add</button>
      </div>
      {error && <p className="restrictedList-error">{error}</p>}
      <ul className="restrictedList-list">
        {restrictedSites.map(site => (
          <li key={site.id} className="restrictedList-item">
            {site.url}
            <button onClick={() => handleDeleteSite(site.id)} className="restrictedList-delete-btn">Delete</button>
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default RestrictedList;
