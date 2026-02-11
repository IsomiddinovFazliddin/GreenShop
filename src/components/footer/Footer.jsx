import React from "react";
import "./Footer.scss";
import { Button } from "@mui/material";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="card">
            <div className="box">
              <img src="/imgs/footerImg1.png" alt="" />
              <h4>Garden Care</h4>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className="box">
              <img src="/imgs/footerImg2.png" alt="" />
              <h4>Plant Renovation</h4>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className="box">
              <img src="/imgs/footerImg3.png" alt="" />
              <h4>Watering Graden</h4>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className="box4">
              <h4>Would you like to join newsletters?</h4>
              <form action="">
                <input type="email" placeholder="enter your email address..." required/>
                <Button type="submit" className="btn" variant="contained">
                  Join
                </Button>
              </form>
              <p>
                з We usually post offers and challenges in newsletter. We’re
                your online houseplant destination. We offer a wide range of
                houseplants and accessories shipped directly from our
                (green)house to yours!
              </p>
            </div>
          </div>
          <div className="row">
            <img src="/imgs/Logo.png" alt="" />
            <h6>
              <IoLocationOutline className="location" /> 70 West Buckingham Ave.
              Farmingdale, NY 11735
            </h6>
            <h6>
              <HiOutlineMail className="email" /> contact@greenshop.com
            </h6>
            <h6>
              <FiPhoneCall /> +88 01911 717 490
            </h6>
          </div>
          <div className="col">
            <div className="box">
              <h4>My Account</h4>
              <h6>Our stores</h6>
              <h6>Contact us</h6>
              <h6>Career</h6>
              <h6>Specials</h6>
            </div>
            <div className="box">
              <h4>Help & Guide</h4>
              <h6>Help Center</h6>
              <h6>How to Buy</h6>
              <h6>Shipping & Delivery</h6>
              <h6>Product Policy</h6>
              <h6>How to Return</h6>
            </div>
            <div className="box">
              <h4>Categories</h4>
              <h6>House Plants</h6>
              <h6>Potter Plants</h6>
              <h6>Seeds</h6>
              <h6>Small Plants</h6>
              <h6>Accessories</h6>
            </div>
            <div className="box4">
              <h4>Social Media</h4>
              <div className="icons">
                <Button className="btn" variant="outlined">
                  <FaFacebookF />
                </Button>
                <Button className="btn" variant="outlined">
                  <FaInstagram />
                </Button>
                <Button className="btn" variant="outlined">
                  <FaTwitter />
                </Button>
                <Button className="btn" variant="outlined">
                  <FaLinkedinIn />
                </Button>
                <Button className="btn" variant="outlined">
                  <FaYoutube />
                </Button>
              </div>
              <h4>We accept</h4>
              <img src="/imgs/img.png" alt="" />
            </div>
          </div>
          <div className="content">
            <h6>© 2021 GreenShop. All Rights Reserved.</h6>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
