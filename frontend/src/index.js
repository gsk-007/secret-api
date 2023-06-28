import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Chakra UI
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthState from "./context/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthState>
      <GoogleOAuthProvider clientId="417049748095-nr0oe2rpf6uug71renudl5179frhq6ia.apps.googleusercontent.com">
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </GoogleOAuthProvider>
    </AuthState>
  </React.StrictMode>
);
