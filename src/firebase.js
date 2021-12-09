import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDohzghAA8aDrbgZK9b_OIjq12n_O7lLwU",
  authDomain: "pwa-app01.firebaseapp.com",
  projectId: "pwa-app01",
  storageBucket: "pwa-app01.appspot.com",
  messagingSenderId: "778308471860",
  appId: "1:778308471860:web:bf9d1c0fc7de0643a2ce61"
};
const privateKey = "BDckUpOl03IHyETM5lD2vQfohd7tfOTYJhqz6WwcJMKbuDxfpu14GU7q5cBFpoqI9B5CKio15GihtwFwk9w9gRI"
// Initialize Firebase
initializeApp(firebaseConfig);

const messaging = getMessaging();

export function initNoti() {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === "granted") {
      getToken(messaging, { vapidKey: privateKey, }).then((token) => {
        if (token) {
          console.log(JSON.stringify(token, " ", null));
          return token;
        } else {
          console.log("No Registratrion available");
        }
      }).catch((err) => {
        console.log({ err });
      })
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err)
  })
}