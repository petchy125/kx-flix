import "core-js/stable";
import "regenerator-runtime/runtime";
import { FC } from "react";
import { AppProps } from "next/app";
import "normalize.css";
import { GlobalStyles } from "../style/global-styles";
import { firebase } from "../src//lib/firebase.prod";
import { FirebaseContext } from "../src/context/firebase";
import React from "react";
//import { useAuthListener } from "../src/hooks";

// import "../styles.css";

/**
 * Next.js uses the App component to initialize pages. You can override it
 * and control the page initialization. Here use use it to render the
 * `Chrome` component on each page, and apply an error boundary.
 *
 * @see https://nextjs.org/docs/advanced-features/custom-app
 */
const App: FC<AppProps> = ({ Component, pageProps }) => (
  <React.StrictMode>
    {/* <FirebaseContext.Provider value={{ firebase }}> */}
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  </React.StrictMode>
);

export default App;
