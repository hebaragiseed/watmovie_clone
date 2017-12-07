import React from 'react';
import styles from './styles.scss';
 
const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.column}>
      <ul className={styles.list}>
        <li className={styles.listItem}>고객 센터
          <span className={styles.email}>cs@watchaplay.net</span>
          <span>・ 02-515-9985(유료)</span>
        </li>
        <li className={styles.listItem}>제휴 및 대외 협력
          <span className={styles.email}>contact@frograms.com</span>
          <span>・ 070-7554-9696(유료)</span>
        </li>
      </ul>
    </div>
    <div className={styles.column}>
      <span>
        주식회사 프로그램스 / 대표 박태훈 / 서울 특별시 강남구 도산대로 155 국제빌딩 3층 / 사업자등록번호 211-88-66013 / 통신판매업 신고번호 제 2015-서울강남-03855호 / 대표번호 02-515-9985
      </span>
    </div>
  </footer>

);
export default Footer;