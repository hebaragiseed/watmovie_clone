import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as movieActions } from 'redux/modules/movies';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleHeartClick: () => {
    if (ownProps.isLiked) {
      dispatch(movieActions.unlikeMovie(ownProps.movieId))
      } else {
      dispatch(movieActions.likeMovie(ownProps.movieId))
      }
    }
 };
};
export default connect(null, mapDispatchToProps)(Container);