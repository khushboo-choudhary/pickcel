import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcl02i2DZUeWfgSsytnCi7EAebnY3-A0I",
  authDomain: "notes-23831.firebaseapp.com",
  projectId: "notes-23831",
  storageBucket: "notes-23831.appspot.com",
  messagingSenderId: "1059640714262",
  appId: "1:1059640714262:web:dbed4249992db78c4f8137",
  measurementId: "G-3KV339VF7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getAnalytics(app);