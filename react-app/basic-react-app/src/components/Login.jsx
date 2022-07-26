import { useState } from "react";
import "./Login.css"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const printValues = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <>
      <form onSubmit={printValues}>
        <label> Username:</label>
        <input
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label> Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="userSubmit">Login</button>
      </form>
    </>
  );
};

export default Login;
