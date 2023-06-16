import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthState from "./context/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthState>
    <GoogleOAuthProvider clientId="417049748095-nr0oe2rpf6uug71renudl5179frhq6ia.apps.googleusercontent.com">
      <React.StrictMode>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </React.StrictMode>
    </GoogleOAuthProvider>
  </AuthState>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
