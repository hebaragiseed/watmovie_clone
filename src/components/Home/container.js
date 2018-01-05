import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Home from './presenter';

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    getMovies: PropTypes.func.isRequired
  }
  componentDidMount() {
    const { getMovies } = this.props;
    if(!this.props.movie) {
      getMovies();
    } else {
      this.setState({
        loading: false
      })
    }
  }
  componentWillReceiveProps = (nextProps) => {
    if(nextProps.movie) {
      this.setState({
      loading: false
      });
    }
  };
  render() {
    const { movie } = this.props
    return <Home {...this.state} movie={movie}/>;
  }
}
export default Container;