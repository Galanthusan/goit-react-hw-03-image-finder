import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ image, openModal }) {
  const { webformatURL, largeImageURL, tags } = image;
  return (
    <li
      onClick={() => openModal(largeImageURL)}
      className={styles.ImageGalleryItem}
    >
      <img
        src={webformatURL}
        alt={tags}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  openModal: PropTypes.func.isRequired,
};
