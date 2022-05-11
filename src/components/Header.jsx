import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
          <Link href="/">
            <Image src={logo} alt="logo" className={Styles['nav-logo']} />
          </Link>
          <ul>
            <li>
              <Link href="/">All</Link>
            </li>
            <li>
              <Link href="/">Clothes</Link>
            </li>
            <li>
              <Link href="/">Electronics</Link>
            </li>
            <li>
              <Link href="/">Furniture</Link>
            </li>
            <li>
              <Link href="/">Toys</Link>
            </li>
            <li>
              <Link href="/">Others</Link>
            </li>
          </ul>
        </div>
        <div className={Styles['navbar-right']}>
          <ul>
            <li>
              <div role={'presentation'} className={(Styles.pointer, Styles['more-clickable-area'], Styles['navbar-email'])} onClick={() => toggleMenu()}>
                platzi@example.com
              </div>
            </li>
            <li>
              <div role={'presentation'} className={Styles['navbar-shopping-cart']} onClick={() => toggleOrder()}>
                <Image className={(Styles.pointer, Styles['more-clickable-area'])} src={shoppingCart} alt="shopping cart" />
                {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
              </div>
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
