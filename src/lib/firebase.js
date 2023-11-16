import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDNG0xCxOcWlk0o4jHB8HyWnpk4VcpayyI',
  authDomain: 'upwork-p1.firebaseapp.com',
  databaseURL: 'https://upwork-p1-default-rtdb.firebaseio.com',
  projectId: 'upwork-p1',
  storageBucket: 'upwork-p1.appspot.com',
  messagingSenderId: '277145701419',
  appId: '1:277145701419:web:78779931aee56e08e5ee6e',
  measurementId: 'G-8PWRVK2Z5T',
};

// Initialize Firebase
if (!getApps().length) {
  initializeApp(firebaseConfig);
}
// Initialize Firebase auth
export const auth = getAuth();
