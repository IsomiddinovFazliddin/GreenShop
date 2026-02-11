import React, { useState } from "react";
import "./LoginModal.scss";
import { BiHide } from "react-icons/bi";
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";

function Login() {

  return (
    <>
      <div className="login">
        <h6>Enter your username and password to login.</h6>
        <form action="">
          <input type="email" placeholder="Email..." required />
          <div className="passwordInput">
            <input type="password" placeholder="Pssword" required />
            <BiHide />
          </div>
          <div className="col">
            <h5>Forgot Password?</h5>
          </div>
          <Button className="login" type="submit" variant="contained">
            Login
          </Button>
          <div className="row">
            <div className="line"></div>
            <h4>Or login with</h4>
            <div className="line"></div>
          </div>
          <Button className="google" variant="outlined">
            <FcGoogle /> Login with Google
          </Button>
          <Button className="faceb" variant="outlined">
            <FaFacebookF className="facebook" /> Login with Facebook
          </Button>
        </form>
      </div>
    </>
  );
}

export default Login;
