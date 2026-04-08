import { initializeApp } from 'firebase';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCEKipnjPDyOdTl3-He4ltntvgXTpZWp08",
  authDomain: "unipam-lucashn-app.firebaseapp.com",
  projectId: "unipam-lucashn-app",
  storageBucket: "unipam-lucashn-app.firebasestorage.app",
  messagingSenderId: "387492041505",
  appId: "1:387492041505:web:16e6f6110d25a3ab83a460"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);