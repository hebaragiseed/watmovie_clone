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

function loginUserSuccess(user) {
  return {
    type: LOGIN_USER_SUCCESS
  }
}
//API actions
//Google로 로그인할 때 토큰받아와서 저장,
//로그인한 user정보 가져오기
function loginGoogleUser() {
  return function(dispatch) {
    auth.signInWithPopup(googleProvider)
      .then((result) => {
        if (result.credential) {
          console.log(result.user)
          // This gives you a Google Access Token. You can use it to access the Google API.
          const token = result.credential.accessToken;
          const name= result.user.displayName;
          const email= result.user.email;
          const uid = result.user.uid;
          
          //const user =  result.user;
          //console.log(user.providerData)
          console.log(token)
          //localStorage.setItem("jwt", token);
          dispatch(saveToken(token))
          database.ref('users/' + uid).set({
            username: name,
            email: email,
            //profile_picture : imageUrl
          }); 
            database.ref('users/' + uid).once('value').then(function(snapshot) {
              var username = snapshot.val().username
              console.log(username)          
            });
        }
      })
      .catch(error => console.log(error))
  }
}
//이메일로 로그인할때, user uid로 정보가져오기
function useremailLogin( email, password ) {
  return function(dispatch) {
    auth.signInWithEmailAndPassword(
      email,
      password
    )
    .then((result) => {
      if (result.refreshToken) {
        const token = result.refreshToken;
        const uid = result.uid;
        //const user = auth.currentUser;
        console.log(token)
        //localStorage.setItem("jwt", token);
        dispatch(saveToken(token))//왜 토큰저장이 안되나;;;
          database.ref('users/' + uid).once('value').then(function(snapshot) {
          var username = snapshot.val().username
          console.log(username)          
        });
      }     
    })
      .catch((error) => {
      console.log("Login Failed!", error);
    });
  }
}
//이메일로 회원가입 할때 , 가입하면 바로 로그인됨
function createAccount( email, password, name) {
  return function(dispatch) {   
    auth.createUserWithEmailAndPassword(
      email,      
      password
    )
   //가입되면 저장된 결과에서 토큰가져오기
    .then((result)=>{
      const token = result.refreshToken;
      const uid = result.uid;
      localStorage.setItem("jwt", token);
        dispatch(saveToken(token))
    //가입완료 되면 DB에 uid 저장 
      database.ref('users/' + uid).set({
        username: name,
        email: email,
        //profile_picture : imageUrl
      }); 
    })    
    .catch((error) => {
      console.log("Login Failed!", error);
    });
  }
}

//initial state
const initialState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem('jwt'),
  name: '',
  email: '',
  profileImageUrl: '',
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
    name: action.payload.name,
    profileImageUrl: action.payload.profileImageUrl,
    email: action.payload.email,  
  }
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