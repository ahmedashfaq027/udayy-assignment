import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../features/userSlice";
import { saveToLocalStorage } from "../utilities/localstorage";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(selectUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username && !password) {
      return;
    }

    dispatch(
      setUser({
        user: username,
      })
    );

    saveToLocalStorage({ user: username });
  };

  return (
    <div className="login">
      <form className="login__form">
        <h2>Login</h2>

        <h5>
          Username <span>*</span>
        </h5>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <h5>
          Password <span>*</span>
        </h5>
        <input
          type="Password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" onClick={handleSubmit}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
