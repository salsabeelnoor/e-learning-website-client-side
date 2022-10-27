// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDG1kirkPLAO_RtD-Q1PdwA9vzHGZozTvk",
//   authDomain: "e-learning-website-client.firebaseapp.com",
//   projectId: "e-learning-website-client",
//   storageBucket: "e-learning-website-client.appspot.com",
//   messagingSenderId: "37269428939",
//   appId: "1:37269428939:web:514fc5234169e33875594e",
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
