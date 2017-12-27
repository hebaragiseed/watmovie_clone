import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const MovieActions = (props, context) => {
  return(
    <div className={styles.movieActions}>
      <button className={styles.likeCircle}>
        <span>보고싶어요</span>
      </button>
      <button className={styles.hateCircle}>
        <span>관심없어요</span>
      </button>
      <div>
        <span>
          {props.number}
          {props.number === 1 ? 'like' : 'likes' }
        </span>
      </div>
    </div>
  );
};

MovieActions.propTypes = {
  number: PropTypes.number.isRequired
}

MovieActions.contextTypes = {
  t: PropTypes.func.isRequired
}

export default MovieActions;