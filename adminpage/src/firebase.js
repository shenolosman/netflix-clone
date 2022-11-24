import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDeVKjGKJJVRSLiY4ROqnAkkr-jUexHLkU",
  authDomain: "netflixclone-ca101.firebaseapp.com",
  projectId: "netflixclone-ca101",
  storageBucket: "netflixclone-ca101.appspot.com",
  messagingSenderId: "665078035817",
  appId: "1:665078035817:web:142049aaec3727137239f8",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default storage;
