import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA7YBM2ff86hNX4xGRNYOWm8-KTEv1LR4U",
    authDomain: "pratica02-lucas.firebaseapp.com",
    projectId: "pratica02-lucas",
    storageBucket: "pratica02-lucas.firebasestorage.app",
    messagingSenderId: "630915049675",
    appId: "1:630915049675:web:ffdb5e36733a107952934e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);