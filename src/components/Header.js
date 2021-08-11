import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUrl1, setUrl2 } from "../features/urlSlice";
import { selectUser, setUser } from "../features/userSlice";
import { completeUrl } from "../utilities/https";
import { removeFromLocalStorage } from "../utilities/localstorage";
import "./Header.css";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleSubmitUrl1 = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setUrl1({ url1: completeUrl(input1) }));

    return false;
  };

  const handleSubmitUrl2 = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setUrl2({ url2: completeUrl(input2) }));
  };

  const handleLogout = () => {
    dispatch(
      setUser({
        user: "",
      })
    );
    removeFromLocalStorage();
  };

  return (
    <div className="header">
      <div className="header__username">
        <p>Welcome,</p>
        <h3>{user}</h3>
      </div>
      <div className="header__searchbars">
        <form onSubmit={handleSubmitUrl1}>
          <input
            className="header__searchbarsLeft"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder="Enter a url for view 1"
            type="text"
          />
          <button
            className="searchbar__submit"
            type="button"
            onClick={handleSubmitUrl1}
          >
            <i className="fas fa-search"></i>
          </button>
        </form>
        <form onSubmit={handleSubmitUrl2}>
          <input
            className="header__searchbarsRight"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder="Enter a url for view 2"
            type="text"
          />
          <button
            className="searchbar__submit"
            type="submit"
            onClick={handleSubmitUrl2}
          >
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div className="header__logout">
        <h4 onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i>
        </h4>
        <p className="header__logoutTooltip">Logout</p>
      </div>
    </div>
  );
}

export default Header;
