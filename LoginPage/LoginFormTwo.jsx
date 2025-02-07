import { useState } from "react";
import "./login.css";

export const LoginFormTwo = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
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
            value={userData.username}
            onChange={handleUserData}
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
            value={userData.password}
            onChange={handleUserData}
          />

          <button type="submit" className="btn-submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
