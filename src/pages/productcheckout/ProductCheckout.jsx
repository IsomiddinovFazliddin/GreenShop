import React, { useState } from "react";
import "./ProductCheckout.scss";
import { NavLink } from "react-router-dom";
import { Button, Checkbox } from "@mui/material";

function ProductCheckout({ setShoppingModal, cartdata }) {
  const [payment, setPayment] = useState();

  const hundleSubmit = (e) => {
    e.preventDefault();

    const formSubmit = e.target;

    if (formSubmit.checkValidity()) {
      setShoppingModal(true);
    } else {
      formSubmit.reportValidity();
    }
  };

  const subTotal = cartdata.reduce(
    (sum, item) => sum + item.price * item.count,
    0,
  );
  const shipping = 16;
  const total = subTotal + shipping;

  return (
    <>
      <div className="productCheckout">
        <div className="container">
          <div className="title">
            <NavLink to={"/"}>Home</NavLink>
            <span>/</span>
            <NavLink to={"/productview"}>Product</NavLink>
            <span>/</span>
            <NavLink to={"/productcart"}>Shopping Cart</NavLink>
          </div>
          <div className="cards">
            <div className="addressCard">
              <h2>Billing Address</h2>
              <form id="submitBtn" action="" onSubmit={hundleSubmit}>
                <div className="inputText">
                  <label htmlFor="">
                    First Name <span>*</span>
                  </label>
                  <input type="text" required />
                </div>
                <div className="inputText">
                  <label htmlFor="">
                    Last Name <span>*</span>
                  </label>
                  <input type="text" required />
                </div>
                <div className="inputText">
                  <label htmlFor="">
                    Country / Region <span>*</span>
                  </label>
                  <select name="" id="">
                    <option value="">Select a country / region</option>
                  </select>
                </div>
                <div className="inputText">
                  <label htmlFor="">
                    Town / City <span>*</span>
                  </label>
                  <input type="text" required />
                </div>
                <div className="inputText">
                  <label htmlFor="">
                    Street Address <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="House number and street name"
                    required
                  />
                </div>
                <div className="inputText">
                  <label htmlFor=""></label>
                  <input
                    type="text"
                    placeholder="Appartment, suite, unit, etc. (optional)"
                    required
                  />
                </div>
                <div className="inputText">
                  <label htmlFor="">
                    State <span>*</span>
                  </label>
                  <select name="" id="">
                    <option value="">Select a state</option>
                  </select>
                </div>
                <div className="inputText">
                  <label htmlFor="">Zip</label>
                  <input type="text" required />
                </div>
                <div className="inputText">
                  <label htmlFor="">Email address</label>
                  <input type="email" required />
                </div>
                <div className="inputText">
                  <label htmlFor="">Phone Number</label>
                  <input type="Number" placeholder="+988" required />
                </div>
                <div className="row">
                  <input type="checkbox" required />
                  <h4>Ship to a different address?</h4>
                </div>
              </form>

              <div className="col">
                <input type="checkbox" />
                <h5>Order notes (optional)</h5>
              </div>
              <textarea name="" id=""></textarea>
            </div>
            <div className="shopCard">
              <h2>Your Order</h2>
              <div className="shopTitle">
                <h5>Products</h5>
                <h5>Subtotal</h5>
              </div>
              <div className="content">
                {cartdata.length > 0 ? (
                  cartdata.map((item) => {
                    return (
                      <div className="box">
                        <div className="imgName">
                          <div className="imgs">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="titles">
                            <h4>{item.title}</h4>
                            <h5>SKU: 1995751877966</h5>
                          </div>
                        </div>
                        <h6>(x {item.count})</h6>
                        <span>${(item.count * item.price).toFixed(2)}</span>
                      </div>
                    );
                  })
                ) : (
                  <div className="emptyCheckout">
                    <img
                      src="https://www.shutterstock.com/image-illustration/empty-word-260nw-336450986.jpg"
                      alt=""
                    />
                  </div>
                )}
              </div>
              <div className="row">
                <h6>
                  Have a coupon code? <span>Click here</span>
                </h6>
              </div>
              <h5>
                Subtotal <span>${subTotal.toFixed(2)}</span>
              </h5>
              <h5>
                Coupon Discount <span>(-) 00.00</span>
              </h5>
              <h5>
                Shiping <span>$16.00</span>
              </h5>
              <div className="col">
                <span>View shipping charge</span>
              </div>
              <hr />
              <div className="total">
                <h2>Total</h2>
                <span>${total.toFixed(2)}</span>
              </div>
              <h2>Payment Method</h2>
              <button>
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  form="submitBtn"
                  required
                  checked={payment == "paypal"}
                  onChange={(e) => {
                    setPayment(e.target.value);
                  }}
                />{" "}
                <img src="/imgs/img.png" alt="" />
              </button>
              <button>
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  form="submitBtn"
                  required
                  checked={payment == "bank"}
                  onChange={(e) => {
                    setPayment(e.target.value);
                  }}
                />{" "}
                Dorect bank transfer
              </button>
              <button>
                <input
                  required
                  type="radio"
                  name="payment"
                  value="cash"
                  form="submitBtn"
                  checked={payment == "cash"}
                  onChange={(e) => {
                    setPayment(e.target.value);
                  }}
                />{" "}
                Cash on delivery
              </button>
              <Button
                type="submit"
                form="submitBtn"
                className="btn"
                variant="contained"
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCheckout;
