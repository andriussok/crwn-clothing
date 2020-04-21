import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDNsxawLSWuy8EhJbdAs0V0xRQ6wuwIfiU",
  authDomain: "crown-dbp.firebaseapp.com",
  databaseURL: "https://crown-dbp.firebaseio.com",
  projectId: "crown-dbp",
  storageBucket: "crown-dbp.appspot.com",
  messagingSenderId: "580138291969",
  appId: "1:580138291969:web:697fffbe56e9fc6c704100",
  measurementId: "G-6F5XB8HQ70"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
