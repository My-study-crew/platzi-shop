import React from 'react';
import Head from 'next/head';
// import OrderItem from '@components/OrderItem';
import Styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={Styles.Checkout}>
        <div className={Styles['Checkout-container']}>
          <h1 className={Styles.title}>My order</h1>
          <div className={Styles['Checkout-content']}>
            <div className={Styles.order}>
              <p>
                <span>03.25.21</span>
                <span>6 articles</span>
              </p>
              <p>$560.00</p>
            </div>
          </div>
          {/* <OrderItem /> */}
        </div>
      </div>
    </>
  );
};

export default Checkout;
