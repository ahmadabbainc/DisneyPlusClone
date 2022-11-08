import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6E9dND5IMQ2l83ErPfQQIbbfiOuXlvm8",
  authDomain: "disney-clone-584fb.firebaseapp.com",
  projectId: "disney-clone-584fb",
  storageBucket: "disney-clone-584fb.appspot.com",
  messagingSenderId: "865837689666",
  appId: "1:865837689666:web:317ea02abf1b07482b76db",
  measurementId: "G-FYJXSYV98R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
