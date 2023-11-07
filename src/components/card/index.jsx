/* eslint-disable object-shorthand */

import React from 'react';
import styles from './style.module.css';

function Card({ image, text, price, imagealt }) {
  return (
    <div className="w-[92%] mx-auto">
      <div className={styles.card}>
        <img src={image} alt={imagealt} />
      </div>
      <p className={styles.text}>{text}</p>
      <p className={styles.price}>{price}</p>
    </div>
  );
}

export default Card;
