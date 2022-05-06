import React from 'react';
import Styles from '@styles/NotFound.scss';

const NotFound = () => {
  return (
    <div className={Styles[NotFound - Container]}>
      <h1 className={Styles['NotFound-Title']}>Error 404</h1>
      <p className={Styles['NotFound-Subtitle']}>Not Found</p>
    </div>
  );
};

export default NotFound;
