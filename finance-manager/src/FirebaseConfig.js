// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
  const firebaseConfig = {
    apiKey: "AIzaSyDNeWcetV-RHveo8Y-VC4hQl8zTeM5ePok",
    authDomain: "finance-b3ecd.firebaseapp.com",
    databaseURL: "https://finance-b3ecd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "finance-b3ecd",
    storageBucket: "finance-b3ecd.firebasestorage.app",
    messagingSenderId: "554655192412",
    appId: "1:554655192412:web:8bf075152aadf6d5d41d99",
    measurementId: "G-MQ90ZCERTF"
  };
  const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)