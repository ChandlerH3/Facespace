import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { SignInProvider } from "./components/Context";

ReactDOM.render(
  <React.StrictMode>
    <SignInProvider>
      <App />
    </SignInProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
