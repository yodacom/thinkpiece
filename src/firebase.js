import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDFLW6cH0_hutnN9RS0g1gTRHhjvvO1NRk",
  authDomain: "thinkpiece-4fd73.firebaseapp.com",
  databaseURL: "https://thinkpiece-4fd73.firebaseio.com",
  projectId: "thinkpiece-4fd73",
  storageBucket: "",
  messagingSenderId: "679083449584",
  appId: "1:679083449584:web:ce301df5abca446c"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

window.firebase = firebase;

export default firebase;