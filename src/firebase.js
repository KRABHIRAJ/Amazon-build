import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmcTuLJb_oGwlZ_0GCFYv1jaryAFOn5zs",
    authDomain: "build-65a91.firebaseapp.com",
    projectId: "build-65a91",
    storageBucket: "build-65a91.appspot.com",
    messagingSenderId: "466610035625",
    appId: "1:466610035625:web:54639407ef946ae3cd82b8",
    measurementId: "G-9H1Z439HVD"
};
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;