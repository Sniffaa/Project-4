import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './home.css';

function Home() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <div>

      <div className='mhku'>
        <h1 className='gzob'>YapON</h1>
        <i className="fa-solid fa-circle-user" onClick={logout}></i>
      </div>
      <div class="main-layout">
        <div class="left">
          <h2 className='pmou'>Categories</h2>
          <hr></hr>
          <input className='luhn' placeholder="Search Categories . . . "></input>
        </div>
        <div class="middle">
          <h2 className='pfyo'>Discussions</h2>
          <hr></hr>
        </div>
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
        </div>
      </div>

      <div className='byfd'>
        <p className='tcqu'>&copy; 2026 YapON. All rights reserved.</p>
      </div>

    </div>
  );
}

export default Home;