// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts(
  "https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBPv5xdqnMIpKr0JdqjetA2aoENywQ2h3E",
  authDomain: "react-push-notification-ecffb.firebaseapp.com",
  projectId: "react-push-notification-ecffb",
  storageBucket: "react-push-notification-ecffb.appspot.com",
  messagingSenderId: "911170895171",
  appId: "1:911170895171:web:34a1ecbdeaa1b54ce743f6",
  measurementId: "G-4V86PBRCFY",
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function (payload) {
//   console.log("Received background message ", payload);

//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: "/logo192.png",
//   };

//   // eslint-disable-next-line no-restricted-globals
//   return self.registration.showNotification(
//     notificationTitle,
//     notificationOptions
//   );
// });
