import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Name from "./components/myName";
import reportWebVitals from "./reportWebVitals";
import Dice from "./components/dice";
import Header from "./components/header";
import Footer from "./components/footer";
import Greeting from "./components/ComponentWithProps";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Greeting name="Hello World!" />
    <Greeting p1="Hello Dunya!" />
    <Greeting p2="12345" />
    <Greeting p3="!%^*" />
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
