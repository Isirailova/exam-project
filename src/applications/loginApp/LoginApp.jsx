import React, { useState } from "react";
import "./loginApp.style.css";
import TodoApp from "../todoApp/TodoApp";

const user = {
  username: "Azim",
  password: "12345",
};

const LoginApp = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isSuccess, setIsSuccess] = useState(false);

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = () => {
    if (username === user.username && password === user.password) {
      setIsSuccess(true);
    }
  };

  const onFormSubmitHandler = () => {};

  return (
    <>
      {isSuccess ? (
        <TodoApp />
      ) : (
        <form onSubmit={onFormSubmitHandler}>
          <label>Username</label>
          <input
            name="username"
            type="text"
            value={username}
            placeholder="username"
            onChange={onUsernameChange}
          />

          <label>Password</label>
          <input
            name="password"
            type="text"
            value={password}
            placeholder="password"
            onChange={onPasswordChange}
          />

          <button type="submit" onClick={onSubmitHandler}>
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default LoginApp;
