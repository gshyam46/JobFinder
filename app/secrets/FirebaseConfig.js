import { initializeApp } from "firebase/app";
import { AsyncStorage } from "react-native";
import { getFirestore } from "firebase/firestore";
import { WEB_CLIENT_ID } from "@env";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
  apiKey: "AIzaSyA4zWFAYIriVj_wbeBjWTbLHv8AvRlzIvo",
  authDomain: "jobfinder-17a62.firebaseapp.com",
  projectId: "jobfinder-17a62",
  storageBucket: "jobfinder-17a62.appspot.com",
  messagingSenderId: "978733003199",
  appId: "1:978733003199:web:0da7ccb960f9e2005ef10a",
  measurementId: "G-HXGL1QL1BP",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
const AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DATABASE = getFirestore(FIREBASE_APP);
