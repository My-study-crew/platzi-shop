import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';
import Styles from '@styles/SendEmail.scss';

const SendEmail = () => {
  return (
    <div className={Styles.SendEmail}>
      <div className={Styles['form-container']}>
        <img src={logo} alt="logo" className={Styles.logo} />
        <h1 className={Styles.title}>Email has been sent!</h1>
        <p className={Styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>
        <div className={Styles['email-image']}>
          <img src={email} alt="email" />
        </div>
        <button className={Styles['primary-button login-button']}>Login</button>
        <p className={Styles.resend}>
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
