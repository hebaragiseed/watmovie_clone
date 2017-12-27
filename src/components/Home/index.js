import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as movieActions } from 'redux/modules/movies';

const mapStateToProps = (state, ownprops) => {
  const { movies: { movie } } = state;
  return {
    movie
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getMovies: () => {
      dispatch(movieActions.getMovies());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
