import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './presenter';

class Container extends Component{
  state = {
    email: '',
    password: ''
  }
  static propTypes = {
    loginGoogleUser: PropTypes.func.isRequired,
    useremailLogin: PropTypes.func.isRequired
  }
  render() {console.log(this.props)
    const { email, password } = this.state;
    return (
      <LoginForm 
        handleInputChange={this._handleInputChange}
        handleGoogleLogin={this._handleGoogleLogin}
        handleSubmit={this._handleSubmit}
        emailValue={email}
        passwordValue={password}
        />
    )
  }
  _handleInputChange = event => {
    const { target: { value, name } } = event;
    this.setState({
      [name] : value
    })
    //console.log(this.state);
  };
  _handleSubmit = event => {
    const { useremailLogin } = this.props;
    const { email, password } = this.state;
    event.preventDefault();
    useremailLogin(email, password);
  };
  _handleGoogleLogin = (result) => {
    this.props.loginGoogleUser(result.token)
  };
}

export default Container;

