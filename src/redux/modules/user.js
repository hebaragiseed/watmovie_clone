//imports
import { auth, database, googleProvider } from 'firebase/client';
//actions
//const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';

//const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
const SAVE_TOKEN = 'SAVE_TOKEN';
//action creators
function saveToken(token) {
  return {
    type: SAVE_TOKEN,
    token
  }
}
//API actions
export const loginGoogleUser = () => {
  return (dispatch) => {
    // dispatch({
    //   type: 'LOGIN_USER_REQUEST'
    // })
    auth.signInWithPopup(googleProvider)
    //auth.signInWithPoPup(googleProvider)
      .then((result) => {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
           console.log(token)
          localStorage.setItem("jwt", token);
           dispatch(saveToken(token))
          // ...
        }
        // var user = result.user;
        // dispatch({
        //   type: 'LOGIN_USER_SUCCESS',
        //   payload: {
        //     name: user.additionalUserInfo.profile.name,
        //     profileImageUrl: user.additionalUserInfo.profile.picture,
        //     email: user.additionalUserInfo.profile.email
        //   }
        // })
      })
      
      .catch(error => console.log(error))
  }
}
//initial state
const initialState = {
  isLoggedIn: localStorage.getItem("jwt") || false
};
//reducer
function reducer(state = initialState, action) {
  switch(action.type) {
    case SAVE_TOKEN:
      return applySetToken(state, action) 
    default:
      return state;
  }
}
//reducer functions
// function applySetLogin(state, action) {
//   return {
//     ...state,
//     name: action.payload.name,
//     profileImageUrl: action.payload.profileImageUrl,
//     email: action.payload.email,
//     //isLoggedIn: true
//   }
// }
function applySetToken(state, action) {
  const { token } = action
  return {
    ...state,
    isLoggedIn: true,
    token
  }
}

//export 
const actionCreators = {
  loginGoogleUser
};

export { actionCreators };

//reducer export 
export default reducer;