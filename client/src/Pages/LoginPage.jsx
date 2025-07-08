import React, { useState } from 'react';
import axios from 'axios'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post ("http://localhost:4000/api/auth/login", {email, password})
    // TODO: send login data to backend
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="login-container">
      <h2>Login to Soul-Fuel </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email or Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Secure Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default LoginPage;