import React from 'react';
import Styles from '@styles/Menu.module.scss';

const Menu = () => {
  return (
    <div className={Styles.Menu}>
      <ul>
        <li>
          <a href="/" className={Styles.title}>
            My orders
          </a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
