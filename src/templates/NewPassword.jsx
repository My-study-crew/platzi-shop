import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
import Styles from '@styles/NewPassword.scss';

const NewPassword = () => {
  return (
    <div className={Styles.NewPassword}>
      <div className={Styles['NewPassword-container']}>
        <img src={logo} alt="logo" className={Styles.logo} />
        <h1 className={Styles.title}>Create a new password</h1>
        <p className={Styles.subtitle}>Enter a new password for yue account</p>
        <form action="/" className={Styles.form}>
          <label for="password" className={Styles.label}>
            Password
          </label>
          <input type="password" id="password" placeholder="*********" className={Styles['input input-password']} />
          <label for="new-password" className={Styles.label}>
            Password
          </label>
          <input type="password" id="new-password" placeholder="*********" className={Styles['input input-password']} />
          <input type="submit" value="Confirm" className={Styles['primary-button login-button']} />
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
