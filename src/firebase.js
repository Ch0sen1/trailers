// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg1p-t76IotvW20zwcDbojbZolgp6k3Yo",
  authDomain: "netflix-clone-diy-2e4a3.firebaseapp.com",
  projectId: "netflix-clone-diy-2e4a3",
  storageBucket: "netflix-clone-diy-2e4a3.appspot.com",
  messagingSenderId: "598919878098",
  appId: "1:598919878098:web:27a88a5fc7a4c93e51a40b",
  measurementId: "G-8TEBWSMRLB"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;