import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createAccount: (password, email) => {
      dispatch(userActions.createAccount(password, email));
    }
  }
}

export default connect(null, mapDispatchToProps)(Container);