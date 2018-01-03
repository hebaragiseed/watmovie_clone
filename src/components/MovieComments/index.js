import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const MovieComments = (props) => (
  <div className={styles.movieComments}>
    <ul>
      <Comment />
        {props.comments.map(comment => (
          <Comment 
            //username={comment.creator.username}
            comment={comment.message}
            key={comment.id}
           />
        ))}
    </ul> 
  </div>
);

const Comment = props => (
  <li className={styles.comment}>
    <span>{props.username}</span>
    <span>!!!!!{props.comment}</span>
  </li>
);

MovieComments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired
}
export default MovieComments;