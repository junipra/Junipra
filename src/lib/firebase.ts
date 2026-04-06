import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCl9HP0w5JkZL6eQKh-MVB12nKRUKD7JQs",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "junipra-da9b4.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "junipra-da9b4",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "junipra-da9b4.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1044053606529",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1044053606529:web:cd957e99b41e950092cd80",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-JPTCSH1P95",
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { app, db }
