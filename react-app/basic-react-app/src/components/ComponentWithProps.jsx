const Greeting = (props) => {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.p1}</p>
      <p>Numbers: {props.p2}</p>
      <p>Symbols: {props.p3}</p>
    </>
  );
};

export default Greeting;
