import React, { Component } from 'react';
import MovieActions from './presenter';

class Container extends Component {
  render() {
    return <MovieActions {...this.props} />
  }
}

export default Container;
