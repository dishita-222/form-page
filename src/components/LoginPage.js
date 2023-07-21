import React, { useState } from 'react';
import './LoginPage.css';
import ABI_logo from './ABI_Logo.png'; 

const LoginPage = ({ onNext }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Basic email and password validation
    if (!email || !password) {
      setError('Please enter both email and password.');
    } else if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
    } else if (!isValidPassword(password)) {
      setError('Please enter a strong password (8-16 characters) with lowercase, uppercase, numbers, and symbols.');
    } else {
      onNext({ email, password });
    }
  };

  const isValidEmail = (email) => {
    // Add your email validation logic here
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    // Strong password validation (8-16 characters with lowercase, uppercase, numbers, and symbols)
    const strongPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*()\-_=+\[\]{}|\\:;"',.<>?/`~"()!;]).{8,16}$/;
    return strongPasswordRegex.test(password);
  };

  return (
    <div className="login-form-container">
      <div className="logo-container">
        <img src={ABI_logo} alt="AB InBev Logo" />
      </div>
      <h2 className="form-heading">Login Form</h2>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <div className="error">{error}</div>}
      <button className="form-btn" onClick={handleLogin}>Next</button>
    </div>
  );
};

export default LoginPage;
