import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import Styles from '@styles/ProductList.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const products = useGetProducts(API);

  return (
    <section className={Styles['ProductList-container']}>
      <div className={Styles['ProductList-cards']}>
        {products.map((item) => {
          if (item.images.length > 0 && item.images[0] !== '') {
            return <ProductItem product={item} key={item.id} />;
          }
        })}
      </div>
    </section>
  );
};

export default ProductList;
