import React from 'react';
import OrderItem from '@components/OrderItem';
import Styles from '@styles/Orders.scss';

const Orders = () => {
  return (
    <div className={Styles.Orders}>
      <div className={Styles['Orders-container']}>
        <h1 className={Styles.title}>My orders</h1>
        <div className={Styles['Orders-content']}>
          <OrderItem />
        </div>
      </div>
    </div>
  );
};

export default Orders;
