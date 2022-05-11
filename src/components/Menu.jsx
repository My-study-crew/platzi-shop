import React from 'react';
import Link from 'next/link';
import Styles from '@styles/Menu.module.scss';

const Menu = () => {
  return (
    <div className={Styles.Menu}>
      <ul>
        <li>
          <Link href="/" className={Styles.title}>
            My orders
          </Link>
        </li>
        <li>
          <Link href="/">My account</Link>
        </li>
        <li>
          <Link href="/">Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
