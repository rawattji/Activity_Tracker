import React, { useState, useEffect } from 'react';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    const response = await fetch('/feedbacks');
    const data = await response.json();
    setFeedbacks(data);
  };

  return (
    <div>
      <h2>Feedback Tips</h2>
      <ul>
        {feedbacks.map(feedback => (
          <li key={feedback.id}>{feedback.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;
