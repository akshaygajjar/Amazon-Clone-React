import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB5CUb4zb9GTsqKe6bhpb-l19bjG2YEuFs',
  authDomain: 'clone-ddaf9.firebaseapp.com',
  projectId: 'clone-ddaf9',
  storageBucket: 'clone-ddaf9.appspot.com',
  messagingSenderId: '23714024396',
  appId: '1:23714024396:web:2334fd29bbdc445cfa6b69',
  measurementId: 'G-SMWGRFTBYX',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
