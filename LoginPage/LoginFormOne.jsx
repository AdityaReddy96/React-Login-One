import { useState } from "react";
import "./login.css";

export const LoginFormOne = () => {
  const [userInput, setUserInput] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const loginData = { userInput, userPassword };
    console.log(loginData);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Login Form</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username" className="input-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="input-field"
            required
            autoComplete="off"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />

          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="input-field"
            required
            autoComplete="off"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />

          <button type="submit" className="btn-submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
