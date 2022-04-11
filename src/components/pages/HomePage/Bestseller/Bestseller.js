import React from 'react';

import styles from './Bestseller.module.scss';
import mainBaner from '../../../../assets/img/vichy.png';

const Bestseller = () => {
  return (
    <>
      <div className={styles.container}>
        <img src={mainBaner} className={styles.baner} alt='Vichy'/>
      </div>
    </>
  );
};

export default Bestseller;
