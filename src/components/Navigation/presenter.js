import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import logo from 'images/watchaLogo.svg'

const Navigation = (props, context) => (
  <div className={styles.navigation}>
    <div className={styles.event}>      
      <div className={styles.eventColumn}>
        <span>event</span>
        <p>첫 1개월 무료 체험 이벤트! 모든 제품 무제한 감상하세요 마음에 들지 않으면 클릭 1번으로 언제든 해지할 수 있어요.
        </p>
      </div>
      <div className={styles.eventColumn}>
        <button>쿠폰 등록</button>
        <button>이용권 구매</button>
      </div>      
    </div>
    <nav className={styles.nav}>
      <div className={styles.navColumn}>
        <h1>whachaplay</h1>
        <img src={logo} className={styles.logo} alt={context.t("logo")} />
      </div>
      <ul className={styles.navColumn}>
        <li>
          <Link to={"/"}><span>홈</span></Link>
        </li>
        <li className={styles.category}>
          <span>카테고리</span>
        </li>
        <li>
          <Link to={"/evaluate"}><span>평가하기</span></Link>
        </li>
      </ul>
      <ul className={styles.navColumn}>
        <li>
          <Ionicon icon="ios-search" fontSize="20px" color="rgba(255,255,255,0.5)"/>
          <span>검색</span>
        </li>
        <li className={styles.wishes}>
          <Link to={"/wishes"}><span>보고싶어요</span></Link>
        </li>
        <li className={styles.username}>
          <span>id</span>
          <Ionicon icon="md-arrow-dropdown" fontSize="40px" color="rgba(255,255,255,0.5)"/>
        </li>
      </ul>       
    </nav>
  </div>
);

Navigation.contextTypes = {
  t: PropTypes.func.isRequired
}
export default Navigation;