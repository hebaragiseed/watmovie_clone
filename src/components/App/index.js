import { connect } from 'react-redux';
import Container from './container';

const mapStateToProps = (state, ownProps) => {
  const { user, routing: { location } } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    pathname: location.pathname,
    currentUser: user.currentUser

  }
}
export default connect(mapStateToProps)(Container);