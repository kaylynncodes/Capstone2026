// 🔥 Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

// 🔑 Your config
const firebaseConfig = {
  apiKey: "AIzaSyCdskOmYYzxk_dn_VE9i1OuQF5ao6s4eC4",
  authDomain: "rooted-voices.firebaseapp.com",
  projectId: "rooted-voices",
  storageBucket: "rooted-voices.firebasestorage.app",
  messagingSenderId: "236958225162",
  appId: "1:236958225162:web:e9fb350bf28bef8b60f3"
};

// 🚀 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);       // For login/authentication
const db = getFirestore(app);    // For chat / saving data

// 🌍 Make global so other scripts can use it
window.db = db;
window.auth = auth;
