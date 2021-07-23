import firebase from "firebase";

const firebaseConfig = {
    apiKey: "Your api key",
    authDomain: "fir-93626.firebaseapp.com",
    projectId: "fir-93626",
    storageBucket: "fir-93626.appspot.com",
    messagingSenderId: "791654473304",
    appId: "1:791654473304:web:97b3d453db879e2637742d",
    measurementId: "G-GJF7Q81HPM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};
