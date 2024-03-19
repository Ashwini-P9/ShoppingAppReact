   // LoginComponent.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import { login } from './AuthService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Create a history object for navigation

  const handleLogin = async () => {
    try {
      const token = await login(username, password);
      console.log('Login successful. Token:', token);
      
      // Redirect to home page after successful login
      history.push('/home');
    } catch (error) {
      console.error('Login failed:', error.message);
      // Handle login failure
    }
  };

  return (
    <div>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
