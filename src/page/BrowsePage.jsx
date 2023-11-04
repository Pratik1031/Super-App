import ProfileCard from '../components/Browse/ProfileCard';
import NewsCard from '../components/Browse/NewsCard';
import WeatherCard from '../components/Browse/WeatherCard';

const BrowsePage = () => {
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
          flexDirection: 'column',
        }}
      >
        <ProfileCard />
        <WeatherCard />
      </div>
      <NewsCard />
    </div>
  );
};

export default BrowsePage;
