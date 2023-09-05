import React from "react";
import { GlobalStyles } from "../style/global-styles";
// import { App } from './app';
import { firebase } from "../src/lib/firebase.prod";
import { FirebaseContext } from "../src/context/firebase";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

const theme = {
  // Define your theme here
};

function MyApp({ Component, pageProps }: AppProps) {
  // You can add global styles or other logic here

  return (
    <FirebaseContext.Provider value={{ firebase }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </FirebaseContext.Provider>
  );
}

export default MyApp;
