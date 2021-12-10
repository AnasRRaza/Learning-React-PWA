
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyDohzghAA8aDrbgZK9b_OIjq12n_O7lLwU",
  authDomain: "pwa-app01.firebaseapp.com",
  projectId: "pwa-app01",
  storageBucket: "pwa-app01.appspot.com",
  messagingSenderId: "778308471860",
  appId: "1:778308471860:web:7789ab0c7eb00314a2ce61"
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();