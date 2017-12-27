import React from 'react';
import styles from './styles.scss';

const Loading = props => (
  <div className={styles.container}>
    <img src={require('images/loading1.png')} className={styles.spinner} alt="로딩중입니다." />
  </div>
);

export default Loading;
