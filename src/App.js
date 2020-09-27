import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { messaging } from './utils/init-fcm';

function App() {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    let notificationPermission;
    Notification.requestPermission()
      .then((data) => {
        console.log(data);
        notificationPermission = data;
      })
      .catch((err) => console.error(err));
    if (notificationPermission === 'denied') {
      setError(
        'It seems, You have disabled notifications, Please enable it and hard refresh the page'
      );
    }

    messaging
      .getToken()
      .then((token) => {
        console.log('FCM_TOKEN', token);
        setToken(token);
      })
      .catch((err) => {
        setError('Error while getting FCM Token', err);
      });

    return () => {
      setError('');
      setToken('');
    };
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {error ? <h3>Error : {error}</h3> : <h3>Firebase Token : {token}</h3>}
      </header>
    </div>
  );
}

export default App;
