import * as firebase from 'firebase'
import {
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_DB_URL,
    FIREBASE_STORAGE_BUCKET
} from 'react-native-dotenv'

// Initialize Firebase
const init = () => {
    const firebaseConfig = {
        apiKey: FIREBASE_API_KEY,
        authDomain: FIREBASE_AUTH_DOMAIN,
        databaseURL: FIREBASE_DB_URL,
        storageBucket: FIREBASE_STORAGE_BUCKET,
    }

    firebase.initializeApp(firebaseConfig)
}

export default init