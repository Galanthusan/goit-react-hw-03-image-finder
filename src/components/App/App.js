import React, { Component } from 'react';
import styles from './App.module.css';
import Searchbar from '../../components/Searchbar/Searchbar';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Modal from '../../components/Modal/Modal';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Notification from '../Notification/Notification';
import imagesApi from '../../services/imagesApi';

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: '',
    page: 1,
    showModal: false,
    largeImageURL: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });
    imagesApi
      .fetchImagesWithQuery(searchQuery, page)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ loading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  handleSearchbarSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  onOpenImageHandler = (url) => {
    this.setState({ largeImageURL: url });
  };

  onCloseImageHandler = () => {
    this.setState({ largeImageURL: null });
  };

  render() {
    const { images, loading, error, largeImageURL, tags } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />

        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}
        {images.length > 0 && (
          <ImageGallery images={images} openModal={this.onOpenImageHandler} />
        )}
        {loading && <Loader />}
        {images.length > 0 && !loading && (
          <Button fetchImages={this.fetchImages} />
        )}

        {largeImageURL && (
          <Modal onClose={this.onCloseImageHandler}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </div>
    );
  }
}
