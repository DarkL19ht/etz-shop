/* eslint-disable react/button-has-type */

import React from 'react';
import styles from './style.module.css'

export function Button({ text}) {
  return <div className={styles.button}>
    <button>{text}</button>
  </div>
}

export function NavButton({ text }) {
  return <div className={styles.btno}>
    <button>{text}</button>
  </div>
}


