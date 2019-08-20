import React, { Component } from 'react';
import Text from '../Text/';
import Input from '../Input/';
import Button from '../Button/';
import styles from './styles.module.scss';

class Login extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.login}>
          <Text text={'Username'} styleText={styles.titlesText} />
          <Input />
          <Text text={'PassWord'} styleText={styles.titlesText} />
          <Input />
          <Button text={'Sign In'} styleButton={styles.styleButton} styleText={styles.buttonText} />
        </div>
      </div>
    );
  }
}

export default Login;
