import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createAccount: (password, email, name) => {
      dispatch(userActions.createAccount(password, email, name));
    }
  }
}

export default connect(null, mapDispatchToProps)(Container);