import React, { Component } from 'react';
import styles from './styles.module.scss';

class Input extends Component {
  render() {
    return (
      <input className={styles.input} />
    );
  }
}

export default Input;