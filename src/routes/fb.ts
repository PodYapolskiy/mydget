// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyC0kT4Xe_HfsqDBJCIk5azRcQyD_Ijou-8',
    authDomain: 'test-68aa5.firebaseapp.com',
    projectId: 'test-68aa5',
    storageBucket: 'test-68aa5.appspot.com',
    messagingSenderId: '277617634307',
    appId: '1:277617634307:web:31dee5c3a53e00b0ca3236'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default app;
export { db };
