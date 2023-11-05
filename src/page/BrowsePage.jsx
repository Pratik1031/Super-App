import ProfileCard from '../components/Browse/ProfileCard';
import NewsCard from '../components/Browse/NewsCard';
import Notes from '../components/Browse/Notes';
import Timer from '../components/Browse/Timer';
import WeatherCard from '../components/Browse/WeatherCard';
import { useNavigate } from 'react-router-dom';

const BrowsePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/movies');
  };
  return (
    <div
      className='main '
      style={{
        width: '100vw',
        height: '100vh',
        paddingLeft: '6vw',
        boxSizing: 'border-box',
        display: 'flex',
        gap: '6rem',
        margin: '0 auto',
      }}
    >
      {' '}
      <div
        style={{
          display: 'flex',
          gap: '20px',
        }}
      >
        <div>
          {' '}
          <ProfileCard />
          <WeatherCard />
          <Timer />
        </div>
        <div>
          <Notes />
        </div>
        <div>
          <NewsCard />
        </div>
      </div>
      <button
        style={{
          position: 'absolute',
          bottom: '2vh',
          right: '3vw',
          background: 'green',
          border: 'none',
          color: 'white',
          padding: '6px',
          borderRadius: '12px',
        }}
        onClick={handleClick}
      >
        Next Page
      </button>
    </div>
  );
};

export default BrowsePage;
