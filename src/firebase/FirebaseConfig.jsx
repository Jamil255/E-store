// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyDDfWd4aDSTlPb-AFPcy3YHZQTyujFNKqk',
  authDomain: 'e-store-47cc3.firebaseapp.com',
  projectId: 'e-store-47cc3',
  storageBucket: 'e-store-47cc3.appspot.com',
  messagingSenderId: '71917406687',
  appId: '1:71917406687:web:9c09fdba51ffbd88ba5c6a',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, app, auth }
