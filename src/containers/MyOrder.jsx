import React, { useContext } from 'react';
import Link from 'next/link';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import arrow from '@icons/flechita.svg';
import Styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
  const { state, toggleOrder } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={Styles.MyOrder}>
      <div className={Styles['MyOrder-container']}>
        <div className={Styles['title-container']}>
          <img className={Styles['more-clickable-area pointer']} src={arrow} alt="arrow" onClick={() => toggleOrder()} />
          <p className={Styles.title}>My order</p>
        </div>
        <div className={Styles['my-order-content']}>
          <div className={Styles['my-orders']}>
            {state.cart.map((product) => (
              <OrderItem product={product} key={`orderItem-${product.id}`} />
            ))}
          </div>
          <div className={Styles.order}>
            <p>
              <span>Total</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
          <Link href="/checkout">
            <button className={Styles['primary-button']}>Checkout</button>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default MyOrder;
