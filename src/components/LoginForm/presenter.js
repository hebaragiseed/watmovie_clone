import React from 'react';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';
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
          placeholder="email@example@gamil.com"
          onChange={props.handleInputChange}
          value={props.useremailValue}
          name="useremail"
          />
      </label>
      <label className={formStyles.passwordLabel}>
        <input 
          type="password"
          placeholder={context.t("비밀번호 (6자이상)")}
          onChange={props.handleInputChange}
          value={props.userpasswordValue}
          name="userpassword"
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
    <span className={formStyles.facebookText}>{context.t('이전에 Facebook으로 가입하셨나요?')}</span>
    <span>
      <FacebookLogin
        appId="902218256614849"
        autoLoad={true}
        fields="name,email,picture"
        callback={props.handleFacebookLogin}
        cssClass={formStyles.facebookLink}
        icon='fa-facebook-official'
      />
    </span>
  </div>
);
LoginForm.propTypes = {
  useremailValue: PropTypes.string.isRequired,
  userpasswordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  t: PropTypes.func.isRequired
}

export default LoginForm;