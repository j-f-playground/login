import React, { Component } from 'react';
import { string } from 'prop-types';
//import styles from './styles.module.scss';

class Login extends Component {
  static propTypes = {
    text: string,
    styleText: string,
  };

  static defaultProps = {
    text: undefined,
    styleText: undefined,

  };
  render() {
    const { text, styleText } = this.props;
    return (
      <div className={styleText}>
        {text}
      </div>
    );
  }
}

export default Login;