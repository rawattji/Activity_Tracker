import React, { useState } from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.user_id) {
          localStorage.setItem('currentUser', JSON.stringify({ userId: data.user_id, email: data.email }));
          navigate('/dashboard');
        } else {
          alert('Invalid email or password. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error during login:', error);
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <p>New user? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}

export default Login;
