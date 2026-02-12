import React, { useState } from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { Button } from "@mui/material";
import { BiLogIn } from "react-icons/bi";

function Navbar({ setLoginModal, cartdata }) {
  return (
    <>
      <nav>
        <div className="container">
          <img src="/imgs/Logo.png" alt="" />
          <ul>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/productview"}>Product</NavLink>
            <NavLink to={"/productcart"}>Shop</NavLink>
            <NavLink to={"/productcheckout"}>Checkout</NavLink>
          </ul>
          <div className="btns">
            <FiSearch />
            <Link to={"/productcart"} className="shop">
              <LuShoppingCart />
              {
                cartdata?.length > 0 && <span>{cartdata.length}</span>
              }
              
            </Link>
            <Button
              className="loginBtn"
              variant="contained"
              onClick={() => {
                setLoginModal(true);
              }}
            >
              <BiLogIn />
              Login
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
