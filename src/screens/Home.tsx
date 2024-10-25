// src/screens/Home.tsx
import React from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login after logout
  };

  return (
    <div>
      <h2>Home (Private)</h2>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Home;
