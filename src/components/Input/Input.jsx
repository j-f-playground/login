import React, { Component } from 'react';
import { bool } from 'prop-types';
import styles from './styles.module.scss';

class Input extends Component {
  static propTypes = {
    error: bool,
  };

static defaultProps = {
  error: undefined,
};

  render() {
    const { error } = this.props;
    return (
      <input className={`${styles.input} ${error ? styles.inputError : ''}`} />
    );
  }
}

export default Input;