import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import './css/Login.css'; // Import your CSS file for custom styles

const Login: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/'); // Redirect to home if user is already logged in
    }
  }, [isAuthenticated, navigate]);


  const handleLogin = () => {
    if (username && password) {
      login(); // Simulate login
      navigate('/'); // Redirect to home page
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="container mt-5 login-container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <form id="loginForm" onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-person"></i>
                    </span>
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-lock"></i>
                    </span>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="d-grid">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
