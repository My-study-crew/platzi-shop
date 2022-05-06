import React, { useRef } from 'react';
import logo from '@logos/logo_yard_sale.svg';
import Styles from '@styles/Login.scss';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(data);
  };

  return (
    <div className={Styles.Login}>
      <div className={Styles['Login-container']}>
        <img src={logo} alt="logo" className={Styles.logo} />
        <form action="/" className={Styles.form} ref={form}>
          <label htmlFor="email" className={Styles.label}>
            Email address
          </label>
          <input type="text" name="email" placeholder="platzi@example.cm" className={Styles['input input-email']} />
          <label htmlFor="password" className={Styles.label}>
            Password
          </label>
          <input type="password" name="password" placeholder="*********" className={Styles['input input-password']} />
          <button onClick={handleSubmit} className={Styles['primary-button login-button']}>
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button className={Styles['secondary-button signup-button']}>Sign up</button>
      </div>
    </div>
  );
};

export default Login;
