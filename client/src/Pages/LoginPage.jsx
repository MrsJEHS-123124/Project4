import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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