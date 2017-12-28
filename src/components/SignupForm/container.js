import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignupForm from './presenter';

class Container extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }
  
  static propTypes = {
    createAccount: PropTypes.func.isRequired
  }
  render() {
    console.log(this.props)
    const {name, email, password } = this.state;
    console.log(this.state)
    return(
      <SignupForm
        nameValue={name}
        emailValue={email}
        passwordValue={password}
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
    const { email, password, name} = this.state;
    const { createAccount } = this.props;
    console.log(typeof email, typeof password)
    event.preventDefault()    
    createAccount(email, password, name);
    console.log('eee')
  }
}

export default Container;