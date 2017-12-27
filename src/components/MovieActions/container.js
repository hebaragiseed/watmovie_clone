import React from 'react';
import MovieActions from './presenter';

const Container = props => <div>{console.log(props)}<MovieActions {...props} /></div>;

export default Container;
