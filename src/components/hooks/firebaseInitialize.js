import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    projectId :process.env.REACT_APP_TEST_PROJECT_ID ,
    messagingSenderId : process.env.REACT_APP_NUMBER,
    apiKey :process.env.REACT_APP_API_KEY ,
    authDomain  :process.env.REACT_APP_AUTH_DOMAIN ,
    storageBucket :process.env.REACT_APP_STORAGE_BUCKET ,
    appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const firebase = ()=>{
    initializeApp(firebaseConfig)
}
export default firebase