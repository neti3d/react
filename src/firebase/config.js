import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBrLaC6TQGVUDt9ilFFOlMq96UHhwFD32U",
    authDomain: "aiplants-f884a.firebaseapp.com",
    projectId: "aiplants-f884a",
    storageBucket: "aiplants-f884a.appspot.com",
    messagingSenderId: "522166927250",
    appId: "1:522166927250:web:52becb08f9b9dee0d48b4b"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)