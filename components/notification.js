import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { requestForToken, onMessageListener } from "../utils/firebase-config";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBPv5xdqnMIpKr0JdqjetA2aoENywQ2h3E",
  authDomain: "react-push-notification-ecffb.firebaseapp.com",
  projectId: "react-push-notification-ecffb",
  storageBucket: "react-push-notification-ecffb.appspot.com",
  messagingSenderId: "911170895171",
  appId: "1:911170895171:web:34a1ecbdeaa1b54ce743f6",
  measurementId: "G-4V86PBRCFY",
};

let firebase;

const Notification = () => {
  const [notification, setNotification] = useState({ title: "", body: "" });
  const notify = () => toast(<ToastDisplay />);
  function ToastDisplay() {
    return (
      <div>
        <p>
          <b>RODD</b>
          <b>{notification?.title}</b>
        </p>
        <p>{notification?.body}</p>
      </div>
    );
  }

  useEffect(() => {
    console.log("here");
    if (window !== undefined) {
      firebase = initializeApp(firebaseConfig);
      requestForToken();
    }
  }, []);

  useEffect(() => {
    if (notification?.title) {
      notify();
    }
  }, [notification]);

  //   requestForToken();

  if (firebase) {
    onMessageListener()
      .then((payload) => {
        setNotification({
          title: payload?.notification?.title,
          body: payload?.notification?.body,
        });
      })
      .catch((err) => console.log("failed: ", err));
  }

  return <Toaster />;
};

export default Notification;
