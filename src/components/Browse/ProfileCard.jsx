import React from 'react';
import styles from './Profile.module.css';
import Profile from '../../assests/image/Profile.png';
import Button from '../../Button';

const ProfileCard = () => {
  const info = JSON.parse(localStorage.getItem('userData'));
  const geners = JSON.parse(localStorage.getItem('genres'));
  return (
    <div className={styles.profile_container}>
      <div className={styles.profile_img}>
        <img src={Profile} alt='Profile-avatar' />
      </div>
      <div className={styles.info}>
        <p>{info.name}</p>
        <p>{info.mail}</p>
        <p style={{ fontSize: '2rem', fontWeight: '500' }}>{info.username}</p>
        <div className={styles.categories_button}>
          {' '}
          <Button categories={geners} color={'#9F94FF'} />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
