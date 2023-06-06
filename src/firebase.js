import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBX0HA3ID0zjWRGy_Lfj-epLX6prVockls",
  authDomain: "clone-58ebe.firebaseapp.com",
  projectId: "clone-58ebe",
  storageBucket: "clone-58ebe.appspot.com",
  messagingSenderId: "804250606023",
  appId: "1:804250606023:web:1b701f30615fd405a7a1e2",
  measurementId: "G-B2LDQ039K4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
