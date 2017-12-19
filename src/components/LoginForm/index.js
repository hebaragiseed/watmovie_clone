import { connect } from 'react-redux';
import Container from './container';
//import { loginGoogleUser } from 'redux/modules/user';
import { actionCreators as userActions } from 'redux/modules/user';
// export default connect((state) => ({
//   user: {
//     name: state.user.name,
//     email: state.user.email,
//     profileImageUrl: state.user.profileImageUrl,
//   }
// }), (dispatch) => ({
//   loginGoogleUser: () => dispatch(loginGoogleUser()),
  
// }))(Container);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginGoogleUser: () => dispatch(loginGoogleUser())
//   }
// }
// export default connect(null, mapDispatchToProps)(Container);

//export default connect()(Container);

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginGoogleUser: () => { dispatch(userActions.loginGoogleUser());
    },
  useremailLogin: (email, password) => {
    dispatch(userActions.useremailLogin(email, password));
    }
  };
};
export default connect(null, mapDispatchToProps)(Container);
