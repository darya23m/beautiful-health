import React from 'react';
import { useDispatch} from 'react-redux';

import { cartActions } from '../../../../features/cart/cart-slice';

import styles from './Card.module.scss';

import sanityClient from "../../../../client";
import imageUrlBuilder from "@sanity/image-url";

const Card = ({ data }) => {
  const dispatch = useDispatch();
  const builder = imageUrlBuilder(sanityClient);

  const { title, price, id, image } = data;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  const urlFor = (source) => {
    return builder.image(source);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardTop}>
          <img src={urlFor(image).url()} alt={title} className={styles.cardImage} />
          <h3 className={styles.tittle}>{title}</h3>
        </div>
        <div className={styles.cardDown}>
          <div className={styles.price}>
            <div className={styles.priceCost}>{price.toFixed(2)}</div>
            <div className={styles.priceRate}>грн</div>
          </div>
          <button className={styles.buyButton} onClick={addToCartHandler}>Купить</button>
        </div>
      </div>
    </>
  );
};

export default Card;
