import React from 'react';
import styles from './styles.scss';

export const LoginForm = () => (
  <div className={styles.formComponent}>
    <div className={styles.textBox}>
      <h2>로그인</h2>
      <span>비밀번호를 잊어버렸어요</span>
    </div>    
    <form className={styles.formBox}>
      <label className={styles.inputBox}><input type="email" placeholder="email@example@gamil.com" /></label>
      <label className={styles.inputBox}><input type="password" placeholder="비밀번호 (6자이상)" /></label>
    </form>
    <form className={styles.loginBtnBox}>
     <input type="submit" value="로그인" />
    </form>
    <span className={styles.facebookText}>이전에 Facebook으로 가입하셨나요?</span>
    <button>Facebook으로 로그인</button>
  </div>
);

export const SignupForm = () => (
  <div className={styles.formComponent}>
    <div className={styles.textBox}>
      <h2>회원가입</h2>
    </div>
    <form className={styles.formBox}>
      <label className={styles.inputBox}><input type="name" placeholder="이름(홍길동)" /></label>
      <label className={styles.inputBox}><input type="email" placeholder="example@gmail.com" /></label>
      <label className={styles.inputBox}><input type="text" placeholder="비밀번호 (6자이상)" /></label>
    </form>
    <form className={styles.policyFormBox}>
      <label><input type="checkbox" />전체약관에 동의합니다</label>
      <label><input type="checkbox" />왓챠 서비스 이용 약관에 동의합니다</label>
      <label><input type="checkbox" />왓챠플레이 서비스 이용약관에 동의합니다</label>
      <label><input type="checkbox" />개인 정보 취급 방침에 동의합니다</label>
    </form>
    <form className={styles.signupBtnBox}>
      <input type="submit" value="가입 완료" />
    </form>
    <span className={styles.payText}>결제 정보요? 충분히 둘러보기고 입력해도 늦지 않아요</span>    
  </div>
);