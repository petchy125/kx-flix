import React from 'react';
import { GlobalStyles } from '../style/global-styles';
// import { App } from './app';
import { firebase } from '../src/lib/firebase.prod';
import { FirebaseContext } from '../src/context/firebase';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  // You can add global styles or other logic here

  return (
    <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  </React.StrictMode>
  );
}

export default MyApp;




