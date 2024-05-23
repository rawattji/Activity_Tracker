import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
import './index.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

import Layout from './components/Layout'; // Import the Layout component
import Limits from './components/Limits/Limits';
import Settings from './components/Settings/Settings';
import SignUp from './components/Login/SignUp';
// import './App.css';
import Restricted from './components/RestrictedList/Restricted';
import RestrictedList from './components/RestrictedList/RestrictedList'
import TimelimitExceeds from './components/Limits/TimelimitExceeds';
import Feedback from './components/More/Feedbacks';
import Motivation from './components/More/Motivation';


// test that we can get data from the backend
function RedirectToDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return null;
}


function App() {

  return (
    <Router>
      <RedirectToDashboard />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/restricted-list" element={<Layout><RestrictedList/></Layout>} /> {/* New route for RestrictedList */}
        <Route path="/limits" element={<Layout><Limits /></Layout>} /> 
        <Route path="/feedback" element={<Layout><Feedback /></Layout>} /> 
        <Route path="/motivation" element={<Layout><Motivation /></Layout>} /> 
        <Route path="/settings" element={<Layout><Settings /></Layout>}/>
        <Route path="/restricted" element={<Restricted/>}/>
        <Route path="/limit_exceeds" element={<TimelimitExceeds />}/>
        
        

      </Routes>
    </Router>
  );
}

export default App;