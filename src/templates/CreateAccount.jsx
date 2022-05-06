import React from 'react';
import Styles from '@styles/CreateAccount.scss';

const CreateAccount = () => {
  return (
    <div className={Styles.CreateAccount}>
      <div className={Styles['CreateAccount-container']}>
        <h1 className={Styles.title}>My account</h1>
        <form action="/" className={Styles.form}>
          <div>
            <label for="name" className={Styles.label}>
              Name
            </label>
            <input type="text" id="name" placeholder="Teff" className={Styles['input input-name']} />
            <label for="email" className={Styles.label}>
              Email
            </label>
            <input type="text" id="email" placeholder="platzi@example.com" className={Styles['input input-email']} />
            <label for="password" className={Styles.label}>
              Password
            </label>
            <input type="password" id="password" placeholder="*********" className={Styles['input input-password']} />
          </div>
          <input type="submit" value="Create" className={Styles['primary-button login-button']} />
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
