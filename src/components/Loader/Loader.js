import React, { Component } from 'react';
import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';

export default class Loader extends Component {
  render() {
    return (
      <Spinner
        className={styles.Loader}
        type='ThreeDots'
        color='#3f51b5'
        height={80}
        width={80}
        timeout={3000} //3 secs
      />
    );
  }
}
