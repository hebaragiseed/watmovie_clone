//imports
import { auth, database, googleProvider } from 'firebase/client';
//actions
const SET_MOVIES = 'SET_MOVIES';
//actions creators
function setMovies(movie) {
  return {
    type: SET_MOVIES,
    movie
  }
}
//api actions
function getMovies() {
  return (dispatch) => {
    database.ref('/movies').on('value', (value) => {
    //dispatch(setMovies(snapshot.val()))    
    dispatch(setMovies(value.val()))
    

    })
  }
}
//initial state
const initialState = {};
//reducer
function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_MOVIES:
      return applySetMovies(state, action);
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
//exports
const actionCreators = {
  getMovies
}
export { actionCreators };
//default reducer export

export default reducer;

