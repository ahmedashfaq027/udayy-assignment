import React from "react";
import "./App.css";
import Header from "./components/Header";
import Views from "./components/Views";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "./features/userSlice";
import { useEffect } from "react";
import { loadFromLocalStorage } from "./utilities/localstorage";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const get = loadFromLocalStorage();
    if (get) {
      dispatch(
        setUser({
          user: get.user,
        })
      );
    }
  }, [user]);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <Views />
        </>
      )}
    </div>
  );
}

export default App;
