import React from 'react';
import List from '../components/Entertainment/List';
import { useNavigate } from 'react-router-dom';
import Profile from '../assests/image/profileimg.png';
import styles from '../components/Entertainment/List.module.css';

const EntertainmentPage = () => {
  const movies = JSON.parse(window.localStorage.getItem('genres'));
  const navigate = useNavigate();
  const handleclick = () => {
    navigate('/browse');
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <img
          src={Profile}
          style={{
            position: 'absolute',
            top: '2vh',
            right: '3vw',
            height: '60px',
            width: '60px',
          }}
        />
        <p
          style={{
            color: 'green',
            fontSize: '3rem',
            margin: '1vw',
          }}
          className={styles.header}
          onClick={handleclick}
        >
          Super app
        </p>
        <p style={{ color: 'white', fontSize: '2rem', margin: '2vw' }}>
          Entertainment according to your choice
        </p>
        {movies.map((movie) => (
          <List genre={movie} />
        ))}
      </div>
    </>
  );
};

export default EntertainmentPage;
