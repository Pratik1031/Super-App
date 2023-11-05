import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/register');
  };

  return (
    <div className='home'>
      <div className='conatin'>
        <h1>SUPER APP</h1>
        <p onClick={handleClick}>
          Click the <FiArrowRight size={24} color='green' />
          arrow to continue.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
