import React from 'react';
import { Link } from 'react-router-dom';

import styles from './SuccessMessage.module.scss';

const SuccessMessage = () => {

  return (
    <div className={styles.container}>
      <div id='modalWrapper' className={styles.wrapper}>
        <div className={styles.successContent}>
          <h2 className={styles.successTitle}>Мы получили ваш заказ!</h2>
          <div className={styles.successDescription}>В ближайшее время с вами свяжется наш менеджер.</div> 
          <Link to='/catalog' className={styles.successBtn}>Продолжить покупки</Link>
          <Link to='/orders-list' className={styles.successBtn}>Просмотреть заказы</Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
