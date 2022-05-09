import React from 'react';
import Image from 'next/image';
import Arrow from '@icons/flechita.svg';
import Styles from '@styles/Order.module.scss';

const Order = () => {
  return (
    <div className={Styles.Order}>
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <Image src={Arrow} alt="arrow" />
    </div>
  );
};

export default Order;
