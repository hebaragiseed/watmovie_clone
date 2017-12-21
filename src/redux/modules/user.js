//imports
import { auth, database, googleProvider } from 'firebase/client';

//actions
const SAVE_TOKEN = 'SAVE_TOKEN';
const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';

//action creators
function saveToken(token) {
  return {
    type: SAVE_TOKEN,
    token
  };
}

function loginUserSuccess() {
  return {
    type: LOGIN_USER_SUCCESS,
  }
}
//API actions
function loginGoogleUser() {
  return function(dispatch) {
    // dispatch({
    //   type: 'LOGIN_USER_REQUEST'
    // })
    auth.signInWithPopup(googleProvider)
    //auth.signInWithPoPup(googleProvider)
      .then((result) => {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const token = result.credential.accessToken;
           console.log(token)
          
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
function useremailLogin( email, password ) {
  return function(dispatch) {
    auth.signInWithEmailAndPassword(
      email,
      password
    )
    .then((result) => {
      if (result.refreshToken) {
        const token = result.refreshToken;
          console.log(token)
          localStorage.setItem("jwt", token);
          dispatch(saveToken(token))
        // auth.onAuthStateChanged(function(user) {
        //   if (user) {
        //     console.log(user)
        //   } else {
        //     // No user is signed in.
        //   }
        // });
      }
      //dispatch(loginUserSuccess())
    })

    
    .catch((error) => {
      console.log("Login Failed!", error);
    });
  }
}

function createAccount( email, password ) {
  return function(dispatch) {
    auth.createUserWithEmailAndPassword(
      email,      
      password
    )
    .then((result) => {
      if (result.refreshToken) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.refreshToken;
         console.log(token)
        localStorage.setItem("jwt", token);
         dispatch(saveToken(token))
        // ...
      }
    })
    .catch((error) => {
      console.log("Login Failed!", error);
    });
  }
}

//initial state
const initialState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false
};
//reducer
function reducer(state = initialState, action) {
  switch(action.type) {
    case SAVE_TOKEN:
      return applySetToken(state, action) 
    case LOGIN_USER_SUCCESS:
      return applySetLogin(state, action)
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
  const { token } = action;
  localStorage.getItem("jwt", token)
  return {
    ...state,
    isLoggedIn: true,
    token
  }
}

function applySetLogin(state, action) {
  return {
    ...state,
    isLoggedIn: true  
  };
}

//export 
const actionCreators = {
  loginGoogleUser,
  useremailLogin,
  createAccount,
  loginUserSuccess

};

export { actionCreators };

//reducer export 
export default reducer;