import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// const firebaseConfig = {
//   apiKey: "AIzaSyBPv5xdqnMIpKr0JdqjetA2aoENywQ2h3E",
//   authDomain: "react-push-notification-ecffb.firebaseapp.com",
//   projectId: "react-push-notification-ecffb",
//   storageBucket: "react-push-notification-ecffb.appspot.com",
//   messagingSenderId: "911170895171",
//   appId: "1:911170895171:web:34a1ecbdeaa1b54ce743f6",
//   measurementId: "G-4V86PBRCFY",
// };

// Initialize Firebase
// export const firebase = initializeApp(firebaseConfig);

// const messaging = getMessaging();

export const requestForToken = () => {
  const messaging = getMessaging();
  return getToken(messaging, {
    vapidKey:
      "BBUcqUO6E7JaxZj8r7igo_Lcxo__L6fskKmB7NrGKCcwRqECATAsBsnC2CBwDgsn6XKCTR5pYTjFqj90aKxkgHc",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
