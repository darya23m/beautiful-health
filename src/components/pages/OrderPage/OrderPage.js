import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../../features/cart/cart-slice';
import { useAddOrderMutation } from '../../../features/orders/ordersApi';

import OrderForm from '../../common/OrderForm/OrderForm';
import SuccessMessage from '../../common/SuccessMessage/SuccessMessage';

import styles from './OrderPage.module.scss'

const OrderPage = () => {
  const [success, setSuccess] = useState(false);
  const [addOrder] = useAddOrderMutation();
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalSum = useSelector((state) => state.cart.totalSum);
  const dispatch = useDispatch();

  const addOrderHandler = async (items, data) => {
    await addOrder({items, info: data}).unwrap();
  }

  const onSuccess = (data) => {
    setSuccess(true);
    dispatch(cartActions.resetCart());
    addOrderHandler(cartItems, data);
  };

  const renderCartItems = () => cartItems.map((item) => (<li key={item.id} className={styles.orderedItem}>
      <div>{item.quantity}шт.</div>
      <div>-</div>
      <div>{item.name}</div>
    </li>));

  const renderSuccessMessage = () => {
    return (
      <SuccessMessage />
    );
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.orderForm}>
          <OrderForm onSuccess={ onSuccess } />
        </div>
        <div className={styles.orderedItems}>
          <div className={styles.orderedItemsTitle}>Ваш заказ:</div>
          <ul>
            {renderCartItems()}
          </ul>
          <div className={styles.orderedItemsSum}>Сумма заказа: {cartTotalSum} грн</div>
        </div>
      </div>
      {success && renderSuccessMessage()}
    </>

  );
}

export default OrderPage;
