import React from 'react';
import Banner from '../components/Register/Banner';
import SignUpForm from '../components/Register/SignUpForm';

const RegisterPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Banner />
      <SignUpForm />
    </div>
  );
};

export default RegisterPage;
