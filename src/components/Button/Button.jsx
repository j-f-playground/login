import React, { Component } from 'react';
import { string } from 'prop-types';
import Text from 'components/Text/';
import styles from './styles.module.scss';

class Button extends Component {
  static propTypes = {
    text: string.isRequired,
    styleButton: string,
    type: string,
    textType: string,
  };
  
  static defaultProps = {
    styleButton: undefined,
    type: undefined,
    textType: undefined,
  };

  render() {
    const { text, type, textType } = this.props;
    return (
      <button
        type="button"
        className={`${styles.button} ${type === 'green' ? styles.green : styles.white}`}
      >
        <Text text={text} textType={textType} />
      </button>
    );
  }
}

export default Button;