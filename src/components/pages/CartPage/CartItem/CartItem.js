import { useDispatch } from 'react-redux';

import styles from './CartItem.module.scss';
import { cartActions } from '../../../../features/cart/cart-slice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={styles.item}>
      <header>
        <h3 className={styles.itemTitle}>{title}</h3>
        <div className={styles.price}>
          {total.toFixed(2)}{' грн'} {' '}
          <span className={styles.itemprice}>({price.toFixed(2)}грн/шт)</span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
