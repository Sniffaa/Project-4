import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
  const token = localStorage.getItem('token');
  if (!token) {
    navigate('/login', { replace: true });
  }
}, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <div className='fumb'>
      <div className='mhku'>
        <h1 className='gzob'>YapON</h1>
      </div>
      <div class="bfyh">
        <div class="rnhi">
          <p className='pmou'>Browse</p>
          <button className='hujp' href='#'>1st Discussions</button>
          <button className='wkwm' href='#'>2nd Discussions</button>
          <button className='jjvh' href='#'>3rd Discussions</button>
          <button className='bobp' href='#'>4th Discussions</button>
          <button className='khsc' href='#'>5th Discussions</button>
          <button className='fqxw' href='#'>6th Discussions</button>
          <button className='doza' href='#'>7th Discussions</button>
        </div>
        <div className='twmd'>
          <p className='wkjg'>All Discussions</p>
          <button className='wcrb'>+ Create Post</button>
        </div>
      </div>
      <div className='byfd'>
        <p className='tcqu'>&copy; 2026 YapON. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Home;