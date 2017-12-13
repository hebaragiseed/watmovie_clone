import React from 'react';
import PropTypes from 'prop-types';
import formStyles from 'shared/formStyles.scss';

export const SignupForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <div className={formStyles.textBox}>
      <h2>{context.t('회원가입')}</h2>
    </div>
    <form className={formStyles.signupFormBox} onSubmit={props.handleSubmit}>
      <div className={formStyles.signBox}>
        <label className={formStyles.inputBox}>
          <input
            type="name"
            placeholder={context.t("이름(홍길동)")}
            value={props.usernameValue}
            onChange={props.handleInputChange}
            name="username"
          />
        </label>
        <label className={formStyles.inputBox}>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={props.emailValue}
            onChange={props.handleInputChange}
            name="useremail"
          />
        </label>
        <label className={formStyles.inputBox}>
          <input
            type="password"
            placeholder={context.t("비밀번호 (6자이상)")}
            value={props.passwordValue}
            onChange={props.handleInputChange}
            name="userpassword"
          />
        </label>
      </div>
      <div className={formStyles.policyFormBox}>
        <label><input type="checkbox" />{context.t('전체약관에 동의합니다')}</label>
        <label><input type="checkbox" />{context.t('왓챠 서비스 이용 약관에 동의합니다')}</label>
        <label><input type="checkbox" />{context.t('왓챠플레이 서비스 이용약관에 동의합니다')}</label>
        <label><input type="checkbox" />{context.t('개인 정보 취급 방침에 동의합니다')}</label>
      </div>
      <div className={formStyles.signupBtnBox}>
        <input type="submit" value={context.t("가입 완료")} />
      </div>
  </form>
    <span className={formStyles.payText}>{context.t('결제 정보요? 충분히 둘러보기고 입력해도 늦지 않아요')}</span>    
  </div>
);
SignupForm.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  useremailValue: PropTypes.string.isRequired,
  userpasswordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  t: PropTypes.func.isRequired
}

export default SignupForm;