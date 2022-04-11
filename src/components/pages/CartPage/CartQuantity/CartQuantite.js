import { useSelector } from 'react-redux';

import styles from './CartQuantite.module.scss';

const CartQuantite = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
      {cartQuantity !== 0 ? (<div className={styles.badge}>{cartQuantity}</div>) : (<div></div>)}
    </>
  );
};

export default CartQuantite;
