//imports
import { auth, database, googleProvider } from 'firebase/client';

//actions
const SAVE_TOKEN = 'SAVE_TOKEN';
const SET_USERS = 'SET_USERS';

//action creators
function saveToken(token) {
  return {
    type: SAVE_TOKEN,
    token
  };
}

function setUsers(currentUser) {
  return {
    type: SET_USERS,
    currentUser
  }
}
//API actions
//Google로 로그인할 때 토큰받아와서 DB에 저장하고 DB에서 uid로 정보 불러오기
function loginGoogleUser() {
  return function(dispatch) {
    auth.signInWithPopup(googleProvider)
      .then((result) => {
        if (result.credential) {
          console.log(result.user)
          const token = result.credential.accessToken;
          const name = result.user.displayName;
          const email = result.user.email;
          const uid = result.user.uid;
      
          dispatch(saveToken(token))
          //DB에 uid저장
          database.ref('users/' + uid).set({
            username: name,
            email: email,
            uid
            //profile_picture : imageUrl
          }); 
          //DB에서 로그인한 currentUser정보불러옴
          database.ref('users/' + uid).once('value').then(function(snapshot) {
            var currentUser= snapshot.val()
            dispatch(setUsers(currentUser))        
          });
        }
      })
      .catch(error => alert(error))
  }
}
//이메일로 로그인할때, DB에서 uid로 정보가져오기
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
        dispatch(saveToken(token))
        //DB에서 로그인한 currentUser정보 불러옴
          database.ref('users/' + uid).once('value').then(function(snapshot) {
          const currentUser = snapshot.val()           
          dispatch(setUsers(currentUser))        
        });
      }     
    })
      .catch((error) => {
      alert(error)
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
        uid
      }); 
      //DB에서 로그인한 currentUser정보 불러옴
      database.ref('users/' + uid).once('value').then(function(snapshot) {
        const currentUser = snapshot.val()           
        dispatch(setUsers(currentUser))        
      });
    })    
    .catch((error) => {
      alert(error);
    });
  }
}

//initial state
const initialState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem('jwt'),
  currentUser: {}
};
//reducer
function reducer(state = initialState, action) {
  switch(action.type) {
    case SAVE_TOKEN:
      return applySetToken(state, action) 
    case SET_USERS:
      return applySetUsers(state, action)
    default:
      return state;
  }
}
//reducer functions

function applySetToken(state, action) {
  const { token } = action;
  localStorage.setItem("jwt", token)
  return {
    ...state,
    isLoggedIn: true,
    token
  }
}

function applySetUsers(state, action) {
  const { currentUser } = action;
  return {
    ...state,
    currentUser    
  }
}

//export 
const actionCreators = {
  loginGoogleUser,
  useremailLogin,
  createAccount,
  setUsers,
  applySetUsers
};

export { actionCreators };

//reducer export 
export default reducer;