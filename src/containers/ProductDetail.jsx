import React from 'react';
import ProductInfo from '@components/ProductInfo';
import close from '@icons/icon_close.png';
import Styles from '@styles/ProductDetail.scss';

const ProductDetail = () => {
  return (
    <aside className={Styles.ProductDetail}>
      <div className={Styles['ProductDetail-close']}>
        <img src={close} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
