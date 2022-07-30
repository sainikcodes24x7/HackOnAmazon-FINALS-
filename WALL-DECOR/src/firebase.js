import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyALBC2U55-3v7S3Vjga4R-y_vr6P8QOQWw",
    authDomain: "galleria-mart.firebaseapp.com",
    projectId: "galleria-mart",
    storageBucket: "galleria-mart.appspot.com",
    messagingSenderId: "815563853152",
    appId: "1:815563853152:web:d6e219a25621d699bea205",
    measurementId: "G-N0P2FL5S3X"
  };
  // Initialize Firebase
 const fireapp =  firebase.initializeApp(firebaseConfig);
  const firelytics = firebase.analytics();
  const db = firebase.firestore();
  
  const auth = firebase.auth() ;
  export {db}