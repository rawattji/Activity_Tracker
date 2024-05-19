import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar/Navbar'; // Adjust the import path as necessary

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Navbar />}
      {children}
    </>
  );
};

export default Layout;
