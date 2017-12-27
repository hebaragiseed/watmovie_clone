import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import './styles.scss';
import Auth from 'components/Auth';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import Home from 'components/Home';

const App = props => [
  props.isLoggedIn ? <Navigation key={1} /> : null,
  props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
   <Footer key={3} />
];

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const PrivateRoutes = props => (
  <Switch>
    <Route key="1" exact path='/' component={Home} />,
    <Route key="2" exact path='/wishes' render={() => 'wishes'} />
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact path='/' component={Auth} />,
    <Route exact path='/forgot' render={() => 'password'} />
  </Switch>
);
export default App;