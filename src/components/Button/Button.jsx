import React, { Component } from 'react';
import { string, func } from 'prop-types';
import Text from 'components/Text/';
import styles from './styles.module.scss';

class Button extends Component {
  static propTypes = {
    text: string.isRequired,
    styleButton: string,
    type: string,
    textType: string,
    onClick: func,
  };
  
  static defaultProps = {
    styleButton: undefined,
    type: undefined,
    textType: undefined,
    onClick: undefined,
  };

  render() {
    const { text, type, textType, styleButton, onClick } = this.props;
    return (
      <button
        type="button"
        className={`${styles.button} ${styleButton} ${type === 'green' ? styles.green : styles.white}`}
        onClick={onClick}
      >
        <Text text={text} textType={textType} />
      </button>
    );
  }
}

export default Button;
