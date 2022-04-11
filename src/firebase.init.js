// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXGLVzG6cxdecRfpKVo3naR5pgxR_o-C8",
  authDomain: "ema-john-route-auth-ace57.firebaseapp.com",
  projectId: "ema-john-route-auth-ace57",
  storageBucket: "ema-john-route-auth-ace57.appspot.com",
  messagingSenderId: "440972010632",
  appId: "1:440972010632:web:9f1a7e67cb3d8f7c8e2b3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;