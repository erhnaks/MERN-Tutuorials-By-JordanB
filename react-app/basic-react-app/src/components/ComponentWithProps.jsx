import React from "react";

const Greeting = (props) => {
  return (
    <React.Fragment>
      <h2>{props.name}</h2>
      <p>{props.p1}</p>
      <p>Numbers: {props.p2}</p>
      <p>Symbols: {props.p3}</p>
    </React.Fragment>
  );
};

Greeting.defaultProps = {
  name: "Hello, world!",
  p1: "WoW",
  p2: 0,
  p3: "?",
};

export default Greeting;
