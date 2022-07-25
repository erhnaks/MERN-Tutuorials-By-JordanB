import "./myName.css";
import logo from "./myName.png";
import React from "react";

const name = () => {
  const myName = {
    firstName: "John",
    surname: "Doe",
    age: 14,
    location: "London",
  };

  const hey = React.createElement(
    "h1",
    { className: "greeting" },
    "Hello world"
  );

  return (
    <div className="myName">
      <h1>{myName.firstName}</h1>
      <h1>{myName.surname}</h1>
      <h1>{myName.age}</h1>
      <h1>{myName.location}</h1>
      <img class="logo" src={logo} />
      {hey}
    </div>
  );
};

export default name;
