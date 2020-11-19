import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className={styles.ImageGallery}>
      {images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} openModal={openModal} />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};
