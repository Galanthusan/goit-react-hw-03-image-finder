import React from 'react';
import styles from './Button.module.css';

export default function Button({ fetchImages }) {
  return (
    <button type='button' onClick={fetchImages} className={styles.Button}>
      Load more
    </button>
  );
}
