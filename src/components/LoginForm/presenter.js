import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import formStyles from 'shared/formStyles.scss';

export const LoginForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <div className={formStyles.textBox}>
      <h2>{context.t('로그인')}</h2>
      <span>{context.t('비밀번호를 잊어버렸어요')}</span>
    </div>    
    <form className={formStyles.loginFormBox} onSubmit={props.handleSubmit}>
      <label className={formStyles.emailLabel}>
        <input
          type="email"
          placeholder="example@gamil.com"
          onChange={props.handleInputChange}
          value={props.emailValue}
          name="email"
          />
      </label>
      <label className={formStyles.passwordLabel}>
        <input 
          type="password"
          placeholder={context.t("비밀번호 (6자이상)")}
          onChange={props.handleInputChange}
          value={props.passwordValue}
          name="password"
          />
      </label>
      <div 
        className={formStyles.loginBtnBox}
        onSubmit={props.handleSubmit}>
        <input 
          type="submit"
          value={context.t("로그인")}
          onChange={props.handleSubmit}
        />
      </div>
    </form>
    <span className={formStyles.facebookText}>{context.t('이전에 Facebook으로 가입하셨나요?')}
    </span>
    <button className={formStyles.facebookLink}>
      <Ionicon icon="logo-facebook" font-size="12px" color="white" />
        facebook으로 로그인        
    </button>
    <button className={formStyles.googleLink} onClick={props.handleGoogleLogin}>
      <Ionicon icon="logo-google" font-size="11px" color="white" />
        google로 로그인        
    </button>
  </div>
);
LoginForm.propTypes = {
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleGoogleLogin: PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  t: PropTypes.func.isRequired
}

export default LoginForm;