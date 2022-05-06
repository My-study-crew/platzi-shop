import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
import Styles from '@styles/PasswordRecovery.scss';

const PasswordRecovery = () => {
  return (
    <div className={Styles.PasswordRecovery}>
      <div className={Styles['PasswordRecovery-container']}>
        <img src={logo} alt="logo" className={Styles.logo} />
        <h1 className={Styles.title}>Password recovery</h1>
        <p className={Styles.subtitle}>Inform the email address used to create your account</p>
        <form action="/" className={Styles.form}>
          <label htmlFor="email" className={Styles.label}>
            Email address
          </label>
          <input type="text" id="email" className={Styles['input input-email']} />
          <input type="submit" value="Confirm" className={Styles['primary-button login-button']} />
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
