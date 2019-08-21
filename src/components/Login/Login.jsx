import React, { Component } from 'react';
import Text from 'components/Text/';
import Input from 'components/Input/';
import Button from 'components/Button/';
import Image from 'components/Image/';
import styles from './styles.module.scss';
import smile from './img/smile.png';


class Login extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.loginContainer}>
          <Image source={smile} imgStyle={styles.image} alt='Smile'/>
          <div className={styles.login}>
            <Text text='Username' textType='grey' />
            <Input />
            <Text text='PassWord' textType='grey' />
            <Input />
            <Button text='Sign In' type='green' textType='white' />
            </div>
            <div className={styles.forgotPass}>
              <Button text='Forgot Password?' type='white' textType='grey' />
            </div>
            <div className={styles.newAccountText}>
              <Text text='Don’t have an account yet? Sign Up' textType='white' />
            </div>
        </div>
      </div>
    );
  }
}

export default Login;
