import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './style.css';
import React from 'react';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/', { replace: true });
    }
  }, []);

  const handleLogin = async () => {
    setMessage('');

    if (!username || !password) {
      setMessage('Please enter username and password');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        username,
        password
      });

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', res.data.username);
      navigate('/');  // ← redirects to home on success

    } catch (err) {
      if (err.response && err.response.data.error) {
        setMessage(err.response.data.error);
      } else {
        setMessage('Server error');
      }
    }
  };

  return (
    <div className='ybjp'>
      <div className='erfe'>
        <h1 className='ytow'>Login</h1>
        <p className='dlef'>Username</p>
        <input
          className='fybx'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Enter your username'
        />

        <p className='gfkp'>Password</p>
        <input
          type='password'
          className='sgke'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter your password'
        />

        <button className='dmuk' onClick={handleLogin}>Login</button>

        {message && <p style={{ color: 'red', marginTop: '10px' }}>{message}</p>}

        <a className='przj' href='#'>Forgot your password? Reset it</a>
        <a className='lxsc' href='#'>Don't have an account? Register</a>
      </div>
    </div>
  );
}

export default Login;