import { useNavigate } from 'react-router-dom';
import './style.css';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='ybjp'>
      <div className='erfe'>
        <h1 className='ytow'>404</h1>
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>
          Oops! This page doesn't exist.
        </p>
        <button className='dmuk' onClick={() => navigate('/')}>
          Go Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;