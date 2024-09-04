import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAjGiOkOtPIse5-e5_OVp6eFdH4mzdIpGs',
  authDomain: 'challenge-rover-photos.firebaseapp.com',
  projectId: 'challenge-rover-photos',
  storageBucket: 'challenge-rover-photos.appspot.com',
  messagingSenderId: '795066878089',
  appId: '1:795066878089:web:3908b187220f333a84de58',
}

// initialize firebase app
let app

if (!getApps().length) {
  app = initializeApp(firebaseConfig)
} else {
  app = getApp()
}

const db = getFirestore(app)

export { db }
