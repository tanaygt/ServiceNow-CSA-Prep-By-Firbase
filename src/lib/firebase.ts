// This file is for demonstration purposes as per the project proposal.
// In a real-world scenario, you would use environment variables for sensitive keys.

import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBfJhBu5IGwtNC8mwPb-VuGliyuEuTWyQg",
  authDomain: "servicenow-cert-hub.firebaseapp.com",
  projectId: "servicenow-cert-hub",
  storageBucket: "servicenow-cert-hub.appspot.com",
  messagingSenderId: "34341823657",
  appId: "generate-with-firebase" // The prompt has an error, so using a valid format
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);
export const storage = getStorage(app);
