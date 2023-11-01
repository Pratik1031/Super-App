import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <p>Discover new things on Superapp</p>
      </div>
    </div>
  );
};

export default Banner;
