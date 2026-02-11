import React, { useState } from "react";
import "./LoginModal.scss";
import { BrowserRouter, NavLink, Routes } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Login from "./Login";
import Register from "./Register";

function LoginModal({ setLoginModal }) {
  const [mode, setMode] = useState("login");

  return (
    <>
      <div className="loginModal">
        <div className="content">
          <ul>
            <li
              className={mode == "login" ? "active" : ""}
              onClick={() => {
                setMode("login");
              }}
            >
              Login
            </li>
            <span>|</span>
            <li
              className={mode == "register" ? "active" : ""}
              onClick={() => {
                setMode("register");
              }}
            >
              Register
            </li>
          </ul>
          <IoClose
            className="close"
            onClick={() => {
              setLoginModal(false);
            }}
          />

          {mode == "login" && <Login  setMode={setMode}/>}
          {mode == "register" && <Register  setMode={setMode}/>}
        </div>
      </div>
    </>
  );
}

export default LoginModal;
