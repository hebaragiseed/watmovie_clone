import React from 'react';
import App from './presenter';

// class Container extends Component {
//  render() {
//    console.log(this.state)
//    return (<App />)
//  }
// }
const Container = (props) => <App {...props} />;

export default Container;