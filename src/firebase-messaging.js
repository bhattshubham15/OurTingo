// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/5.9.2/firebase.js');
importScripts('https://www.gstatic.com/firebasejs/5.9.2/firebase-messaging.js');
{/* <script src="https://www.gstatic.com/firebasejs/5.9.2/firebase.js"></script> */}

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  'messagingSenderId': '917523795314' // Keep same
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();