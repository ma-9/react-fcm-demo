import { notification_type } from '../constants';

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./firebase-messaging-sw.js')
      .then((registration) => {
        console.log('Registration Successfull, Scope is ', registration.scope);
        navigator.serviceWorker.addEventListener('message', (payload) => {
          const { data } = payload;
          if (process.env.NODE_ENV === 'development') {
            console.log('FCM_DATA', data['firebase-messaging-msg-data'].data);
          }
          const notificationData = data['firebase-messaging-msg-data'].data;
          var notificationType =
            notification_type[notificationData.notification_type];
          sessionStorage.setItem(notificationType, notificationData.message);
        });
      })
      .catch((err) =>
        console.error('Service Worker Registeration Failed!', err)
      );
  }
};

export { registerServiceWorker };
