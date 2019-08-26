import React, { Component } from 'react';
import Text from 'components/Text/';
import Input from 'components/Input/';
import Button from 'components/Button/';
import Image from 'components/Image/';
import styles from './styles.module.scss';
import smile from './img/smile.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      inputOk: true,
      ifErrorEmail: false,
      ifErrorPass: false,
    };
  };

  handleOnchange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  sendData = () => {
    let url = '';
    if (this.state.email === 'logintest@jfplayground.com' && this.state.password === 'test') {
      url = 'https://httpstat.us/200';
    } else {
      url = 'https://httpstat.us/400';
    }

    fetch(url)
    .then((response) => {
      const { email, password } = this.state;

      if (response.status === 200) {
        this.setState({
          inputOk: false,
        });
      } else {
        this.setState({
          inputOk: true,
          ifErrorEmail: email !== 'logintest@jfplayground.com',
          ifErrorPass: password !== 'test',
        });
      }
    });
  };

  render() {
    console.log(this.state);
    const { inputOk, ifErrorPass, ifErrorEmail } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.loginContainer}>
          <Image source={smile} imgStyle={styles.image} alt='Smile'/>
          {inputOk ?
            <div className={styles.login}>
            <Text text='Username' textType='grey' />
            <Input onChange={this.handleOnchange} name='email' error={ifErrorEmail} />
            <Text text='PassWord' textType='grey' />
            <Input onChange={this.handleOnchange} name='password' error={ifErrorPass} />
            <Button
              text='Sign In'
              type='green'
              textType='white'
              styleButton={styles.singInButton}
              onClick={this.sendData}
            />
          </div>
          : 
          <div>OK!</div>}
          <div className={styles.forgotPass}>
            <Button text='Forgot Password?' type='white' textType='grey'/>
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
