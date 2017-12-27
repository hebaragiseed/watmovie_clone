import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Loading from 'components/Loading';
import HomeMovie from 'components/HomeMovie';

const Home = props => {
  if(props.loading) {
    return <LoadingHome />
  } else if (props.movie) {
    return <RenderMovie {...props} />
  }
};

const LoadingHome = props => (
  <div>
    <Loading />
  </div>
);

const RenderMovie = props => (
  <div>
    {props.movie.map(movie => <HomeMovie {...movie} key={movie.id} />)}
  </div>
);

Home.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default Home;