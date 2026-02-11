import React from "react";
import "./ShoppingModal.scss";
import { IoClose } from "react-icons/io5";
import { Button } from "@mui/material";

function ShoppingModal({ setShoppingModal, cartdata, setCartdata }) {
  return (
    <>
      <div className="ShoppingModal">
        <div className="wrapper">
          <div className="modalTitle">
            <img src="/imgs/shopModalIcon.png" alt="" />
            <h5>Your order has been received</h5>
            <IoClose
              className="close"
              onClick={() => {
                setShoppingModal(false);
              }}
            />
          </div>
          <div className="modalCard">
            <div className="row">
              <div>
                <h6>Order Number</h6>
                <h5>19586687</h5>
              </div>
              <div>
                <h6>Date</h6>
                <h5>15 Sep, 2021</h5>
              </div>
              <div>
                <h6>Total</h6>
                <h5>2,699.00</h5>
              </div>
              <div>
                <h6>Payment Method</h6>
                <h5>Cash on delivery</h5>
              </div>
            </div>
            <hr />
            <div className="col">
              <h3>Products</h3>
              <div className="prices">
                <h3>Qty</h3>
                <h3>Subtotal</h3>
              </div>
            </div>
            <hr />
            <div className="content">
              {cartdata.length > 0 ? (
                cartdata?.map((item) => {
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
                <div className="emptyModal">
                  <img
                    src="https://www.shutterstock.com/image-illustration/empty-word-260nw-336450986.jpg"
                    alt=""
                  />
                </div>
              )}
            </div>
            <div className="total">
              <h2>Total</h2>
              <span>$2,699.00</span>
            </div>
            <Button
              className="btn"
              variant="contained"
              onClick={() => setCartdata([])}
            >
              Track your order
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingModal;
