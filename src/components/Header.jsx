import React, { useContext } from 'react';
import Image from 'next/image';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import Styles from '@styles/Header.module.scss';

const Header = () => {
  const { state, toggleOrder, toggleMenu } = useContext(AppContext);

  return (
    <>
      <nav className={Styles.Nav}>
        <Image src={menu} alt="menu" className={Styles.menu} />
        <div className={Styles['navbar-left']}>
          <Image src={logo} alt="logo" className={Styles['nav-logo']} />
          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>
        <div className={Styles['navbar-right']}>
          <ul>
            <li className={Styles['more-clickable-area navbar-email pointer']} onClick={() => toggleMenu()}>
              platzi@example.com
            </li>
            <li className={Styles['navbar-shopping-cart']} onClick={() => toggleOrder()}>
              <Image className={Styles['more-clickable-area pointer']} src={shoppingCart} alt="shopping cart" />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {state.menuIsOpen && <Menu />}
      </nav>
      {state.orderIsOpen && <MyOrder />}
    </>
  );
};

export default Header;
