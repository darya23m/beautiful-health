import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartItem from './CartItem/CartItem';

import styles from './CartPage.module.scss';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalSum = useSelector((state) => state.cart.totalSum);

  const renderCartItems = () => cartItems.map((item) => (
    <CartItem
      key={item.id}
      item={{
        id: item.id,
        title: item.name,
        quantity: item.quantity,
        total: item.totalPrice,
        price: item.price,
      }}
    />
  ));

  return (
    <div className={styles.container}>
      <h2>Ваш заказ:</h2>
        {cartItems.length !== 0 ? 
          (<ul>{renderCartItems()}</ul>)
          : (<h3>Вы еще ничего не заказали!</h3>)
        }
          {cartItems.length !== 0 ? 
          (<div className={styles.cartDown}>
            <div className={styles.orderSum}>Сумма заказа: {cartTotalSum} грн</div>
            <Link to='/order' className={styles.orderBtn}>Оформить заказ</Link>
          </div>)
         : null}
    </div>
  );
}

export default CartPage;
