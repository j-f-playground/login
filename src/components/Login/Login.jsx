import React, { Component } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import Text from '../Text/';

import styles from './styles.module.scss';

class Login extends Component {
  static propTypes = {
    pois: arrayOf(shape),
    title: string,
    styles: shape({}),
    l10n: shape({}),
  };

  static defaultProps = {
    pois: [],
    title: undefined,
    styles: undefined,
    l10n: undefined,

  };
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.login}>
          <Text text={'Username'} styleText={styles.titlesText} />
          <Text text={'PassWord'} styleText={styles.titlesText} />
        </div>
      </div>
    );
  }
}

export default Login;
