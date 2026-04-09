// 🔥 Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

// 🔑 Your config (you already have this!)
const firebaseConfig = {
  apiKey: "AIzaSyCdskOmYYzxk_dn_VE9i1OuQF5ao6s4eC4",
  authDomain: "rooted-voices.firebaseapp.com",
  projectId: "rooted-voices",
  storageBucket: "rooted-voices.firebasestorage.app",
  messagingSenderId: "236958225162",
  appId: "1:236958225162:web:e9fb350bf29b0b5f8b60f3"
};

// 🚀 Initialize
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🌍 make it global so other files can use it
window.db = db;
