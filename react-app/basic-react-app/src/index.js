import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Name from "./myName";
import reportWebVitals from "./reportWebVitals";
import Dice from "./dice";
import Header from "./header";
import Footer from "./footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Name />
    <Dice />
    <App />
    <>
      <h1>Footer</h1>
      <Footer />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
