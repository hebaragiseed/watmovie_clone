import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCIf6G4Gna0wwUf3PtHZBF1vQJq4-RnXCc",
  authDomain: "watmovie-clone.firebaseapp.com",
  databaseURL: "https://watmovie-clone.firebaseio.com",
  projectId: "watmovie-clone",
  storageBucket: "watmovie-clone.appspot.com",
  messagingSenderId: "455962618658"
};
firebase.initializeApp(config);

export const database = firebase.database();