import React from "react";
import "./LoginModal.scss";
import { BiHide } from "react-icons/bi";
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";

function Register() {
  return (
    <>
      <div className="register">
        <h6>Enter your email and password to register.</h6>
        <form action="">
          <input type="text" placeholder="Username" required/>
          <input type="email" placeholder="Enter your email address" required />
          <div className="passwordInput">
            <input type="password" placeholder="Pssword" required/>
            <BiHide />
          </div>
          <input type="password" placeholder="Confirm Password" required/>
          <Button className="login" type="submit" variant="contained">
            Register
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

export default Register;
