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
import Clock from "./components/clock";
import Car from "./components/Car";
import Login from "./components/Login";
import AddItems from "./components/item";
import ShoppingCart from "./components/ShoppingCart";
import Basket from "./components/Basket";
import Shopping from "./hooks/Shopping";
import LessText from "./hooks/LessText";
import Greet from "./hooks/Greet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LessText text='Heyyo '  />
    <Greet name='Simon' />

    {/* <Shopping /> */}
    {/* <Car />
    <Login /> */}
    {/* <Header />    
    <Greeting name="Hello World!" p1="Hello Dunya!" p2="12345" p3="!%^*" />
    <Name />
    <Clock />
    <Dice /> */}
    {/* <App /> */}
    {/* <>
      <h1>Footer</h1>
      <Footer />
    </> */}
    {/* <AddItems/>
    <ShoppingCart/>
    <Basket/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
