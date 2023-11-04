import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Category.module.css';
import Button from '../../Button';
import Cards from './Cards';
import genres from '../../Genres.json';

import Danger from '../../assests/icon/Vector.svg';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [lengthError, setLengthError] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (categories.length < 3) {
      setLengthError(true);
      return;
    } else {
      setLengthError(false);
      window.localStorage.setItem('genres', JSON.stringify([...categories]));
      navigate('/browse');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.info_section}>
        {' '}
        <p className={styles.title}>Super app</p>
        <p className={styles.sub_Title}>Choose your entertainment category</p>
        <div style={{ marginTop: '10vh' }}>
          <Button
            categories={categories}
            color={'green'}
            setCategories={setCategories}
          />
          {lengthError ? (
            <p className={styles.error}>
              <img
                src={Danger}
                alt='Error Icon'
                style={{
                  width: '30px',
                  height: '30px',
                  marginRight: '8px',
                  marginTop: '10px',
                }}
              />
              Minimum 3 category required
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={styles.cards_section}>
        {genres.map((data) => (
          <Cards
            data={data}
            categories={categories}
            setCategories={setCategories}
            key={data.id}
          />
        ))}
      </div>
      <button className={styles.signUp} onClick={handleSignUp}>
        Next Page
      </button>
    </div>
  );
};

export default Category;
