import React from 'react';

import styles from './Cards.module.scss';
import Card from './Card/Card';

const Cards = ({ items = [] }) => {

  const renderCards = () => 
    items.map((item, index) =>
      <li key={index}>
        <Card data={item} />
      </li>
    );

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.productsList}>
          {renderCards()}
        </ul>
      </div>
    </>
  );
}

export default Cards;
