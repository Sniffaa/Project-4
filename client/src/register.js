import { useState } from 'react';
import './register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accept, setAccept] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const doRegister = async () => {
    setError('');
    setSuccess('');

    if (!accept) return setError('Please review and accept the terms and conditions.');
    if (!username || !password) return setError('Don’t leave any fields blank.');

    try {
      const res = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (!res.ok) return setError(data.error || 'Registration failed');

      setSuccess('Account created! You can now log in.');
    } catch {
      setError('Cannot connect to server');
    }
  };
    
  return (
    <div className='tyxw'>
      <h1 className='fqqb'>Register</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <p className='dwal'>Username</p>
      <input className='fgbm' placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <p className='ugio'>Password</p>
      <input className='nals' placeholder="Enter password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <div className='cgqy'>
        <input className='vuhx' type='checkbox' checked={accept} onChange={(e) => setAccept(e.target.checked)}/>
        <p className='eaza'>By clicking here, I state that I have read and understood the terms and conditions.</p>
      </div>
      <button className='vcxh' onClick={doRegister}>Register</button>
      <a className='jhav' href='/login'>Already have an account? Log in</a>
    </div>
  );
}

export default Register;