// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA809irl2Veq9uJF4Mqw_EGEjVTwERpFQE",
  authDomain: "profesores-autores.firebaseapp.com",
  projectId: "profesores-autores",
  storageBucket: "profesores-autores.firebasestorage.app",
  messagingSenderId: "852109243051",
  appId: "1:852109243051:web:18a5645bfc740402b33dee"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);