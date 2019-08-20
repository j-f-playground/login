import React, { Component } from 'react';
import { string } from 'prop-types';
import Text from '../Text/';

class Login extends Component {
  static propTypes = {
    text: string,
    styleButton: string,
    styleText: string,
  };

  static defaultProps = {
    text: undefined,
    styleButton: undefined,
    styleText: undefined,
  };

  render() {
    const { styleButton, styleText, text } = this.props;
    return (
      <button
        type="button"
        className={styleButton}
      >
        <Text text={text} styleText={styleText} />
      </button>
    );
  }
}

export default Login;