import { connect } from 'react-redux';
import Container from './container';
import {
  loginGoogleUser
} from 'redux/modules/user';

export default connect((state) => ({
  user: {
    name: state.user.name,
    email: state.user.email,
    profileImageUrl: state.user.profileImageUrl,
  }
}), (dispatch) => ({
  loginGoogleUser: () => dispatch(loginGoogleUser()),
  
}))(Container);
//export default connect()(Container);
