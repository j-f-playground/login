import React, { Component } from 'react';
import { bool, func, string } from 'prop-types';
import styles from './styles.module.scss';

class Input extends Component {
  static propTypes = {
    error: bool,
    onChange: func.isRequired,
    name: string.isRequired,
  };

static defaultProps = {
  error: false,
};

handleOnChange = (event) => {
  const value = event.currentTarget.value;
  this.props.onChange(this.props.name, value);
}

  render() {
    const { error } = this.props;
    return (
      <input className={`${styles.input} ${error
         ? styles.inputError : ''}`} onChange={this.handleOnChange} />
    );
  }
}

export default Input;