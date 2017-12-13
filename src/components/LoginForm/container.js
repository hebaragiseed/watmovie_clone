import React, { Component } from 'react';
import LoginForm from './presenter';

class Container extends Component{
  state = {
    useremail: '',
    userpassword: ''
  }
  render() {
    const { useremail, userpassword } = this.state;
    return (
      <LoginForm 
        handleInputChange={this._handleInputChange}
        handleFacebookLogin={this._handleFacebookLogin}
        handleSubmit={this._handleSubmit}
        useremailValue={useremail}
        userpasswordValue={userpassword} />
    )
  }
  _handleInputChange = event => {
    const { target: { value, name } } = event;
    this.setState({
      [name] : value
    })
    console.log(this.state);
  };
  _handleSubmit = event => {
    event.preventDefault()
  }
  _handleFacebookLogin = response => 
  console.log(response);
}

export default Container;

