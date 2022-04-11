import React from 'react';

import styles from './LatestProducts.module.scss';
import Cards from '../../../shared/Cards/Cards';

const LatestProducts = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>НОВИНКИ</h1>
        <Cards category={'all'} />
      </div>
    </>
  );
};

export default LatestProducts;
