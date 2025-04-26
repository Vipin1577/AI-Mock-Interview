import {getApp, getApps , initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";





const firebaseConfig = {
  apiKey: "AIzaSyAxZqUWlN2QuKlW0UVFadFjnzzIYr_PQtU",
  authDomain: "ai-mock-interview-yt-rea-efdc9.firebaseapp.com",
  projectId: "ai-mock-interview-yt-rea-efdc9",
  storageBucket: "ai-mock-interview-yt-rea-efdc9.firebasestorage.app",
  messagingSenderId: "52323208524",
  appId: "1:52323208524:web:2340bfd246672dc67193e9"
};


const app = getApps.length > 0 ? getApp() :initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db};



