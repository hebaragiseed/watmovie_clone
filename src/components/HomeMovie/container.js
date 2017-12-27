import React from 'react';
import HomeMovie from './presenter';

const Container = props => <div>{console.log(props)}<HomeMovie {...props} /></div>;

export default Container;