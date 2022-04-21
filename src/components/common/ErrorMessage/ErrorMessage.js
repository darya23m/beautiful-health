import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ErrorMessage.module.scss';

const ErrorMessage = () => {

  return (
    <div className={styles.container}>
      <div id='modalWrapper' className={styles.wrapper}>
        <div className={styles.errorContent}>
          <h2 className={styles.errorTitle}>Такого аккаунта еще нет.</h2>
          <div className={styles.errorDescription}>Пожалуйста, зарегестрируйтесь!</div>
          <Link to='/sign-up' className={styles.regBtn}>Регистрация</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
