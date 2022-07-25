import "./myName.css";

const name = () => {
  const myName = {
    firstName: "John",
    surname: "Doe",
    age: 14,
    location: "London",
  };

  return (
    <div className="myName">
      <h1>{myName.firstName}</h1>
      <h1>{myName.surname}</h1>
      <h1>{myName.age}</h1>
      <h1>{myName.location}</h1>
    </div>
  );
};

export default name;
