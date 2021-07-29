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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
      const { displayName, email} = userAuth
      const createdAt = new Date()

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef

    
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase