import React from 'react';
import { useState } from 'react';
import styles from './SignUpForm.module.css';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [formValues, setFormValues] = useState({
    check: false,
    name: '',
    username: '',
    mail: '',
    mobile: '',
  });

  const [nameError, setNameError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [mailError, setMailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [signupError, setSignupError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validateMobile = (mobile) => {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    if (!(formValues.name.trim().length > 0)) {
      setNameError(true);
      valid = false;
    } else {
      setNameError(false);
    }
    if (!(formValues.username.trim().length > 0)) {
      setUserNameError(true);
      valid = false;
    } else {
      setUserNameError(false);
    }
    if (!validateEmail(formValues.mail)) {
      setMailError(true);
      valid = false;
    } else {
      setMailError(false);
    }

    if (!validateMobile(formValues.mobile)) {
      setMobileError(true);
      valid = false;
    } else {
      setMobileError(false);
    }
    if (!formValues.check) {
      setSignupError(true);
      valid = false;
    } else {
      setSignupError(false);
    }
    if (valid) {
      localStorage.setItem('userData', JSON.stringify(formValues));
      navigate('/category');
      console.log('Form Submitted');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Super app</h1>
      <p className={styles.create}>Create your new account</p>

      <form>
        <input
          onChange={(e) => handleChange(e)}
          type='text'
          name='name'
          placeholder='Name'
        />{' '}
        {nameError ? (
          <p className={styles.error}>Please fill correctly</p>
        ) : (
          <></>
        )}
        <input
          onChange={(e) => handleChange(e)}
          type='text'
          name='username'
          placeholder='UserName'
        />{' '}
        {userNameError ? (
          <p className={styles.error}>Please fill correctly</p>
        ) : (
          <></>
        )}
        <input
          onChange={(e) => handleChange(e)}
          type='email'
          name='mail'
          placeholder='Email'
        />{' '}
        {mailError ? (
          <p className={styles.error}>Please fill correctly</p>
        ) : (
          <></>
        )}
        <input
          onChange={(e) => handleChange(e)}
          type='tel'
          name='mobile'
          placeholder='Mobile'
        />{' '}
        {mobileError ? (
          <p className={styles.error}>Please fill correctly</p>
        ) : (
          <></>
        )}
        <label>
          <input
            type='checkbox'
            name='check'
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [e.target.name]: e.target.checked,
              })
            }
          />{' '}
          Share my registration data with Superapp
        </label>
        {signupError ? <p className={styles.error}>Please tick this</p> : <></>}
        <button
          type='submit'
          onClick={(e) => handleSubmit(e)}
          className={styles.signUpButton}
        >
          SIGN UP
        </button>
        <footer>
          {' '}
          <p className={styles.terms}>
            By clicking on Sign up. you agree to Superapp{' '}
            <span>Terms and Conditions of Use</span>
          </p>
          <p className={styles.terms}>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp <span>Privacy Policy</span>
          </p>
        </footer>
      </form>
    </div>
  );
};

export default SignUpForm;
