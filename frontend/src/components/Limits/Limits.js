import React, { useState, useEffect } from 'react';
import './Limits.css';

const Limits = () => {
  const [url, setUrl] = useState('');
  const [timeLimit, setTimeLimit] = useState('');
  const [urlList, setUrlList] = useState([]);
  const [restrictedSites, setRestrictedSites] = useState([]);

  useEffect(() => {
    const fetchTimeLimits = async () => {
      const response = await fetch('http://localhost:3000/time_limits');
      const data = await response.json();
      setUrlList(data);
    };

    const fetchRestrictedSites = async () => {
      const response = await fetch('http://localhost:3000/restricted_sites');
      const data = await response.json();
      setRestrictedSites(data);
    };

    fetchTimeLimits();
    fetchRestrictedSites();
  }, []);

  const handleSetLimit = () => {
    const isValidUrl = (string) => {
      try {
        new URL(string);
        return true;
      } catch (_) {
        return false;
      }
    };
  
    const isAlreadyRestricted = restrictedSites.some(site => site.url === url);
  
    if (isValidUrl(url) && !isAlreadyRestricted) {
      const newLimit = { url, time_limit: parseInt(timeLimit, 10) };
      fetch('http://localhost:3000/time_limits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLimit),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to set time limit. Please try again later.');
          }
          return response.json();
        })
        .then(data => {
          setUrlList([...urlList, data]);
          setUrl('');
          setTimeLimit('');
          alert('Time limit set successfully!');
        })
        .catch(error => {
          alert('Error: ' + error.message);
          console.error('Error setting time limit:', error);
        });
    } else if (isAlreadyRestricted) {
      alert('This URL is already in the restricted list.');
    } else {
      alert('Please enter a valid URL.');
    }
  };
  

  const handleDelete = (urlToDelete) => {
    const limitToDelete = urlList.find(item => item.url === urlToDelete);

    if (limitToDelete) {
      fetch(`http://localhost:3000/time_limits/${limitToDelete.id}`, {
        method: 'DELETE',
      })
        .then(() => {
          setUrlList(urlList.filter(item => item.url !== urlToDelete));
        })
        .catch(error => console.error('Error deleting time limit:', error));
    }
  };

  return (
    <div className="limits-container">
      <div className="row">
        <div className="left-column">
          <h2>Set Time Limit for a Website</h2>
          <label>
            Website URL:
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter website URL"
            />
          </label>
          <label>
            Time Limit (minutes):
            <input
              type="number"
              value={timeLimit}
              onChange={(e) => setTimeLimit(e.target.value)}
              placeholder="Enter time limit in minutes"
            />
          </label>
          <button className="button-set-limit" onClick={handleSetLimit}>Set Limit</button>
        </div>
        <div className="right-column">
          <h2>Limited URLs</h2>
          <ul>
            {urlList.map((item, index) => (
              <li key={index}>
                {item.url} - {item.time_limit} minutes
                <button onClick={() => handleDelete(item.url)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Limits;
