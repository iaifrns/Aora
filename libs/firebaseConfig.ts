import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDze3uTjDMUoUyMlVPvlfdwzouxXl6ctw4",
  authDomain: "practice-aora.firebaseapp.com",
  projectId: "practice-aora",
  storageBucket: "practice-aora.firebasestorage.app",
  messagingSenderId: "379447531959",
  appId: "1:379447531959:web:37ad87d3f1f1346f7bb032",
  measurementId: "G-V8JNJT6TRW",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
})

const db = getFirestore(app);

export { app, auth, db };

