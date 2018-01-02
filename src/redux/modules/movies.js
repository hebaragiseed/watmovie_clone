//imports
import { auth, database, googleProvider } from 'firebase/client';
//actions
const SET_MOVIES = 'SET_MOVIES';
const LIKE_MOVIE = 'LIKE_MOVIE';
const UNLIKE_MOVIE = 'UNLIKE_MOVIE';
//actions creators
function setMovies(movie) {
  return {
    type: SET_MOVIES,
    movie
  };
}
function doLikeMovie(movieId) {
  return {
    type: LIKE_MOVIE,
    movieId
  };
}
function doUnlikeMovie(movieId) {
  return {
    type: UNLIKE_MOVIE,
    movieId
  }
}
//api actions
function getMovies() {
  return function (dispatch) {
    database.ref('/movies').on('value', function(value) {
    //dispatch(setMovies(snapshot.val()))    
    dispatch(setMovies(value.val()))
    })
  }
}
function likeMovie(movieId) {
  return (dispatch, getState) => { 
  const { movies: { movie } } = getState();   
  dispatch(doLikeMovie(movieId))
  database.ref(`movies/${movieId}`).update({is_liked: true, like_count: movie[movieId].like_count })
  .catch((error) => {dispatch(doUnlikeMovie( movieId))})  
  }
}
function unlikeMovie(movieId) {
  return (dispatch, getState) => {
  const { movies: { movie } }= getState();   
  dispatch(doUnlikeMovie( movieId))
  database.ref(`movies/${movieId}`).update({is_liked: false, like_count: movie[movieId].like_count})
  .catch((error) => {dispatch(doUnlikeMovie( movieId))} )   
  }
}
//initial state
const initialState = {};
//reducer
function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_MOVIES:
      return applySetMovies(state, action);
    case LIKE_MOVIE:
      return applyLikeMovie(state, action);
    case UNLIKE_MOVIE:
      return applyUnlikeMovie(state, action);
    default:
      return state;
  }
}
//reducer functions
function applySetMovies(state, action) {
  const { movie } = action;
  return {
    ...state,
    movie
  }
}

function applyLikeMovie(state, action) {
  const { movieId } = action;
  const { movie } = state;
  const updateMovie = movie.map(movie => {
    if(movie.id === movieId) {
      return { 
        ...movie,
        is_liked: true,
        like_count: movie.like_count += 1 };
    }
    return movie
  });
  return {...state, movie: updateMovie}
}

function applyUnlikeMovie(state, action) {
  const { movieId } = action;
  const { movie } = state;
  const updateMovie = movie.map(movie => {
    if(movie.id === movieId) {
      return { 
        ...movie,
        is_liked: false,
        like_count: movie.like_count -= 1 };
    }
    return movie
  });
  return {...state, movie: updateMovie}
}

//exports
const actionCreators = {
  getMovies,
  likeMovie,
  unlikeMovie

}
export { actionCreators };
//default reducer export

export default reducer;

