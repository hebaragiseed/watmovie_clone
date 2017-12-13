import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import  LoginForm from 'components/LoginForm';
import  SignupForm from 'components/SignupForm';
import logo from 'images/watchaLogo.svg';


const Auth = (props, context) => (
  <div className={styles.auth}>
    <div className={styles.column}>
      <div className={styles.changeBtnbox}>
        {props.action === 'login' && (
          <div>
          <img src={logo} className="App-logo" alt="logo" />
          <span onClick={props.changeAction} className={styles.changeBtn}>
            {context.t('회원가입')}
          </span>
          </div>
        )}
        {props.action === 'signup' && (
          <div>
          <img src={logo} className="App-logo" alt="logo" />
          <span onClick={props.changeAction} className={styles.changeBtn}>
            {context.t('로그인')}
          </span>
          </div>
        )}
      </div>
    </div>
    <div className={styles.column}>
      <div className={styles.formbox}>
        {props.action === 'login' && <LoginForm />}
        {props.action === 'signup' && <SignupForm />}        
      </div>
    </div>
  </div>
);

Auth.contextTypes = {
  t: PropTypes.func.isRequired
}


export default Auth;