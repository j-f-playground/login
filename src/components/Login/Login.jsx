import React, { Component } from 'react';
import Text from 'components/Text/';
import Input from 'components/Input/';
import Button from 'components/Button/';
import styles from './styles.module.scss';

class Login extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.loginContainer}>
          <div className={styles.login}>
            <Text text={'Username'} textType='grey' />
            <Input />
            <Text text={'PassWord'} textType='grey' />
            <Input />
            <Button text={'Sign In'} type='green' textType='white-' />
            </div>
            <div className={styles.forgotPass}>
              <Button text={'Forgot Password?'} type='white' textType='grey' />
            </div>
        </div>
      </div>
    );
  }
}

export default Login;
