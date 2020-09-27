import * as firebase from 'firebase/app';
import 'firebase/messaging';

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

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging.isSupported()
  ? firebase.messaging()
  : null;

export { messaging };
