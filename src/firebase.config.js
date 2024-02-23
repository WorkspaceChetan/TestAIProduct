import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // apiKey: "AIzaSyC4EayGibxW0PbCMVDcAb1JiBqNKJ3EwEs",
  // authDomain: "openaitemplate1.firebaseapp.com",
  // projectId: "openaitemplate1",
  // storageBucket: "openaitemplate1.appspot.com",
  // messagingSenderId: "431846464106",
  // appId: "1:431846464106:web:0722965f3f8c1837734813",
  // apiKey: "AIzaSyCbq6yiDMAPANbKFg0XbaWNAetyUwsR7MI",
  // authDomain: "openaitemplate.firebaseapp.com",
  // projectId: "openaitemplate",
  // storageBucket: "openaitemplate.appspot.com",
  // messagingSenderId: "55881496867",
  // appId: "1:55881496867:web:b1baa9e7fca3a6e0c07496",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
