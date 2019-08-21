import React, { Component } from 'react';
import { string } from 'prop-types';
import styles from './styles.module.scss';

class Text extends Component {
  static propTypes = {
    text: string.isRequired,
    textType: string,
  };

  static defaultProps = {
    textType: undefined,
  };

  render() {
    const { text, textType } = this.props;
    return (
      <div className={`${styles.text} ${textType === 'grey' ? styles.grey : styles.white}`}
>
        {text}
      </div>
    );
  }
}

export default Text;