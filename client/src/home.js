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
      <div class="main-layout">
        <div class="rnhi">
          <h2 className='pmou'>Categories</h2>
          <hr></hr>
          <input className='luhn' placeholder="Search Categories . . . "></input>
        </div>
        
        <div class="zuho">
          <h2 className='pfyo'>Discussions</h2>
          <hr></hr>
        </div>
          {/* 
         <div class="right">
          <h2 className='cfxd'>Statistics</h2>
          <hr></hr>
          <ul className='kyxa'>
            <li className='bpug'>Posts</li>
            <li className='tuhr'>Replies</li>
            <li className='qvdw'>Likes</li>
            <li className='ekno'>Reputation</li>
            <li className='vtnk'>Views</li>
          </ul>
        </div> */}
      </div>

      <div className='byfd'>
        <p className='tcqu'>&copy; 2026 YapON. All rights reserved.</p>
      </div>

    </div>
  );
}

export default Home;