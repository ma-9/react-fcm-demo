/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js');

const firebaseConfig = {
  apiKey: 'AIzaSyDKt**********iFRQHs9WesG81Ec',
  authDomain: 'testingfir**************.com',
  databaseURL: 'https://testing**************seio.com',
  projectId: 'testing************eb53',
  storageBucket: 'testingfi**************ot.com',
  messagingSenderId: '76*********508',
  appId: '1:7681******************5aa6f651',
  measurementId: 'G-Q*********N7',
};

// Initialize Firebase App
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging.isSupported()
  ? firebase.messaging()
  : null;

messaging.setBackgroundMessageHandler(function (payload) {
  const promiseChain = customers
    .matchAll({
      type: 'window',
      includeUncontrolled: true,
    })
    .then((windowClients) => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification('my notification title');
    });
  return promiseChain;
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('message', function (payload) {
  console.log('FCM_DATA', payload);
});
