import  { connect } from 'react-redux';
import Container from './container';
import { actionCreators as movieActions} from 'redux/modules/movies';

const mapDispachToProps = (dispatch, ownProps) => {
  return {
    submitComment: message => {
      dispatch(movieActions.commentMovie(ownProps.movieId, message))
    }
  };
};
export default connect(null, mapDispachToProps)(Container);