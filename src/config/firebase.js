import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyBvMCxn-2yymwuldibDJhrashAIwaiEaf4",
  authDomain: "widskerala-8fb64.firebaseapp.com",
  databaseURL: "https://widskerala-8fb64.firebaseio.com",
  projectId: "widskerala-8fb64",
  storageBucket: "widskerala-8fb64.appspot.com",
  messagingSenderId: "223872407527",
  appId: "1:223872407527:web:3e2a55e6849a943c8ccf42",
  measurementId: "G-EGLGZMLYFR"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  storage:firebase.storage(),
};