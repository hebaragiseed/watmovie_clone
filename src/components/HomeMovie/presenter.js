import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import MovieActions from 'components/MovieActions';
import MovieComments from 'components/MovieComments';
import CommentBox from 'components/CommentBox';

const HomeMovie = (props, context) => {
  return (
  <div className={styles.homeMovie}>
    <div className={styles.upColumn}>
      <div className={styles.imageBox}>
        <img src={props.background_image} alt={`${props.title} 이미지`} />
        <div className={styles.imageGradient}> </div>
      </div>
      <div className={styles.movieExplain}>
        <div className={styles.textBox}>
          <h2>이 영화는 어때요</h2>
          <h3>{props.title}</h3>
          <div className={styles.commentBox}>
            <span className={styles.year}>{props.time.year}</span>
            <span className={styles.age}>{props.time.age}</span>
            <span className={styles.runtime}>{props.time.runtime}</span>
          </div>
          <p>{props.story}</p>
          <div>
            <MovieActions number={props.like_count}/>
          </div>
        </div>
      </div> 
    </div>
    <div className={styles.downColumn}>
      <MovieComments comments={props.comments} />
      <CommentBox />
    </div>
  </div>
  );
}
HomeMovie.propTypes = {
  background_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.shape({
    year: PropTypes.number.isRequired,
    age: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
  }).isRequired,
  division: PropTypes.string.isRequired,
  like_count: PropTypes.number.isRequired,
  hate_count: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired
};


export default HomeMovie;