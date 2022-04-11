import React from "react";
import { Link } from 'react-router-dom';
import { useGetOrdersQuery } from "../../../features/orders/ordersApi";

import styles from './YourOrdersPage.module.scss';

const YourOrdersPage = () => {
  const { data = [] } = useGetOrdersQuery();

  const renderOrders = () =>
    data.map((order, index) => {
      let result = order.items.map(a => a.totalPrice);
      const sum = result.reduce((partialSum, a) => partialSum + a, 0);
      return (
      <li key={index} className={styles.orderWrapper}>
        <div className={styles.title}>Заказанные товары:</div>
        <ul>
          {order.items.map((item) => (
          <li key={item.id} className={styles.orderedItem}>
            <div>{item.quantity}шт.</div>
            <div>-</div>
            <div>{item.name}</div>
          </li>))}
        </ul>
        <div className={styles.orderSum}>Сумма: <strong>{sum} грн</strong></div>
        <div className={styles.title}>Данные заказчика:</div>
        <div>Заказчик: <strong>{order.info.name}</strong></div>
        <div>Тел.: <strong>{order.info.contact}</strong></div>
        <div>E-mail: <strong>{order.info.email}</strong></div>
        <div>Способ оплаты: <strong>{order.info.selected}</strong></div>
      </li>
    )})

  return (
    <>
      {data.length !== 0 ? (<ul>{renderOrders()}</ul>) : (<h3 className={styles.container}>Вы еще ничего не заказали!</h3>)}
      {data.length !== 0 ? (<Link to='/catalog' className={styles.proceedBtn}>Продолжить покупки</Link>) : null}
    </>
  )
};

export default YourOrdersPage;
