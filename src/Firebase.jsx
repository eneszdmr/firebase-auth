// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDTBLkXKipHo_kRh-LaTSMgQDbL9AOCOCU",
    authDomain: "fir-login-7ed49.firebaseapp.com",
    projectId: "fir-login-7ed49",
    storageBucket: "fir-login-7ed49.appspot.com",
    messagingSenderId: "176718088850",
    appId: "1:176718088850:web:c0eb630a5125e1dce9b44b",
    measurementId: "G-J370SB5YHG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

