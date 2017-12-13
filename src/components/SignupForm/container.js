import React, { Component } from 'react';
import SignupForm from './presenter';

class Container extends Component {
  state = {
    username: '',
    useremail: '',
    userpassword: ''
  }
  render() {
    const {username, useremail, userpassword } = this.state;
    console.log(this.state)
    return(
      <SignupForm
        usernameValue={username}
        useremailValue={useremail}
        userpasswordValue={userpassword}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
      />
    )
  }
  _handleInputChange = event => {
    const { target: { value, name }} = event;
    this.setState({
      [name] : value
    })
    console.log(this.state)
  }
  _handleSubmit = event => {
    event.preventDefault()
  }
}

export default Container;