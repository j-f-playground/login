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
          <Button text={'Sign In'} styleButton={styles.styleSignIn} styleText={styles.buttonTextSignIn} />
          <Button text={'Forgot Password?'} styleButton={styles.styleForgotPass} styleText={styles.buttonTextForgotPass} />
        </div>
      </div>
    );
  }
}

export default Login;
