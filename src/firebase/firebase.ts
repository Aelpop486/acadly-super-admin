import { initializeApp, getApps } from 'firebase/app'
import type { FirebaseApp, FirebaseOptions } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import type { Auth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import type { Firestore } from 'firebase/firestore'

const requiredFirebaseEnv = {
  VITE_FIREBASE_API_KEY: import.meta.env.VITE_FIREBASE_API_KEY,
  VITE_FIREBASE_PROJECT_ID: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  VITE_FIREBASE_APP_ID: import.meta.env.VITE_FIREBASE_APP_ID,
}

const missingFirebaseEnv = Object.entries(requiredFirebaseEnv)
  .filter(([, value]) => !value)
  .map(([key]) => key)

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'missing-api-key',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'missing-auth-domain',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'missing-project-id',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID || 'missing-app-id',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

const firebaseApp: FirebaseApp = getApps()[0] ?? initializeApp(firebaseConfig)
const auth: Auth = getAuth(firebaseApp)
const db: Firestore = getFirestore(firebaseApp)

export { firebaseApp, auth, db, firebaseConfig, missingFirebaseEnv }
