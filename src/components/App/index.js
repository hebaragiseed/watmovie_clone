import { connect } from 'react-redux';
import Container from './container';
//import { actionCreators as movieActions} from 'redux/modules/user';

const mapStateToProps = (state, ownProps) => {
  const { user, routing: { location }} = state;
  return {
    isLoggedIn: user.isLoggedIn,
    pathname: location.pathname,
   
  }
}

export default connect(mapStateToProps)(Container);