import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCECQwWWWy_vZv6HAQfIjJTYPWDHTnSFeg",
    authDomain: "crwn-db-28177.firebaseapp.com",
    projectId: "crwn-db-28177",
    storageBucket: "crwn-db-28177.appspot.com",
    messagingSenderId: "48026229350",
    appId: "1:48026229350:web:4fd767627d783539d8aba7",
    measurementId: "G-9S0TBFDM0Y"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase