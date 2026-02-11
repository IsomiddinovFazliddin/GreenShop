import "./ProductCart.scss";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SlCreditCard } from "react-icons/sl";

function ProductCart({ cartdata, setCartdata, del }) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const subTotal = cartdata.reduce(
    (sum, item) => sum + item.price * item.count,
    0,
  );
  const shipping = 16;
  const total = subTotal + shipping;

  return (
    <>
      <div className="productCart-section">
        <div className="container">
          <div className="title">
            <NavLink to={"/"}>Home</NavLink>
            <span>/</span>
            <NavLink to={"/productview"}>Product</NavLink>
            <span>/</span>
            <NavLink>Shopping Cart</NavLink>
          </div>
          <div className="product-card">
            <div className="products">
              <div className="row">
                <h4>Products</h4>
                <div className="col">
                  <h4>Price</h4>
                  <h4>Quantity</h4>
                  <h4>Total</h4>
                </div>
              </div>
              <div className="content">
                {cartdata.length > 0 ? (
                  cartdata.map((item) => {
                    return (
                      <div className="box">
                        <div className="box-img">
                          <div className="imgs">
                            <img src={item.img} alt="" />
                          </div>
                          <div>
                            <h4>{item.title}</h4>
                            <h6>SKU: 1995751877966</h6>
                          </div>
                        </div>
                        <h5 className="price">${item.price}</h5>
                        <div className="btns">
                          <button
                            className="minus"
                            onClick={() => {
                              const updateCart = cartdata.map((i) => {
                                return i.id === item.id && i.count > 1
                                  ? { ...i, count: i.count - 1 }
                                  : i;
                              });
                              setCartdata(updateCart);
                            }}
                          >
                            <FaMinus />
                          </button>
                          <span className="count">{item.count}</span>
                          <button
                            className="plus"
                            onClick={() => {
                              const updateCart = cartdata.map((i) => {
                                return i.id === item.id
                                  ? { ...i, count: i.count + 1 }
                                  : i;
                              });
                              setCartdata(updateCart);
                            }}
                          >
                            <FaPlus />
                          </button>
                        </div>
                        <h5 className="total">
                          ${(item.count * item.price).toFixed(2)}
                        </h5>
                        <AiOutlineDelete
                          className="del"
                          onClick={() => {
                            del(item.id);
                          }}
                        />
                      </div>
                    );
                  })
                ) : (
                  <div className="empty">
                    <img
                      src="https://www.shutterstock.com/image-illustration/empty-word-260nw-336450986.jpg"
                      alt=""
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="cartTotal">
              <h2>Cart Totals</h2>
              <hr />
              <h4>Coupon Apply</h4>
              <form action="">
                <input
                  type="text"
                  placeholder="Enter coupon code here..."
                  required
                />
                <Button type="submit" className="apply" variant="contained">
                  Apply
                </Button>
              </form>
              <h5>
                Subtotal <span>${subTotal.toFixed(2)}</span>
              </h5>
              <h5>
                Coupon Discount <span>(-) 00.00</span>
              </h5>
              <h5>
                Shiping <span>$16.00</span>
              </h5>
              <h6>View shipping charge</h6>
              <h2 className="total">
                Total <span>${total.toFixed(2)}</span>
              </h2>
              <Link to={"/productcheckout"}>
                <Button className="checkout" variant="contained">
                  Proceed To Checkout
                </Button>
              </Link>
              <Button className="shopping" color="success">
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
      <section className="product-slider">
        <div className="container">
          <h2>Releted Products</h2>
          <hr />
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper slider"
          >
            <SwiperSlide>
              <div className="content">
                <div className="row">
                  <div className="imgs">
                    <img src="/imgs/sliderImg.png" alt="" />
                  </div>
                  <h4>Beach Spider Lily</h4>
                  <span>$129.00</span>
                </div>
                <div className="row">
                  <div className="imgs">
                    <img src="/imgs/sliderImg.png" alt="" />
                  </div>
                  <h4>Beach Spider Lily</h4>
                  <span>$129.00</span>
                </div>
                <div className="row">
                  <div className="imgs">
                    <img src="/imgs/sliderImg.png" alt="" />
                  </div>
                  <h4>Beach Spider Lily</h4>
                  <span>$129.00</span>
                </div>
                <div className="row">
                  <div className="imgs">
                    <img src="/imgs/sliderImg.png" alt="" />
                  </div>
                  <h4>Beach Spider Lily</h4>
                  <span>$129.00</span>
                </div>
                <div className="row">
                  <div className="imgs">
                    <img src="/imgs/sliderImg.png" alt="" />
                  </div>
                  <h4>Beach Spider Lily</h4>
                  <span>$129.00</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <div className="row">
                  <div className="imgs">
                    <img src="/imgs/sliderImg.png" alt="" />
                  </div>
                  <h4>Beach Spider Lily</h4>
                  <span>$129.00</span>
                </div>
                <div className="row">
                  <div className="imgs">
                    <img src="/imgs/sliderImg.png" alt="" />
                  </div>
                  <h4>Beach Spider Lily</h4>
                  <span>$129.00</span>
                </div>
                <div className="row">
                  <div className="imgs">
                    <img src="/imgs/sliderImg.png" alt="" />
                  </div>
                  <h4>Beach Spider Lily</h4>
                  <span>$129.00</span>
                </div>
                <div className="row">
                  <div className="imgs">
                    <img src="/imgs/sliderImg.png" alt="" />
                  </div>
                  <h4>Beach Spider Lily</h4>
                  <span>$129.00</span>
                </div>
                <div className="row">
                  <div className="imgs">
                    <img src="/imgs/sliderImg.png" alt="" />
                  </div>
                  <h4>Beach Spider Lily</h4>
                  <span>$129.00</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <div className="row">
                  <div className="imgs">
                    <img src="/imgs/sliderImg.png" alt="" />
                  </div>
                  <h4>Beach Spider Lily</h4>
                  <span>$129.00</span>
                </div>
                <div className="row">
                  <div className="imgs">
                    <img src="/imgs/sliderImg.png" alt="" />
                  </div>
                  <h4>Beach Spider Lily</h4>
                  <span>$129.00</span>
                </div>
                <div className="row">
                  <div className="imgs">
                    <img src="/imgs/sliderImg.png" alt="" />
                  </div>
                  <h4>Beach Spider Lily</h4>
                  <span>$129.00</span>
                </div>
                <div className="row">
                  <div className="imgs">
                    <img src="/imgs/sliderImg.png" alt="" />
                  </div>
                  <h4>Beach Spider Lily</h4>
                  <span>$129.00</span>
                </div>
                <div className="row">
                  <div className="imgs">
                    <img src="/imgs/sliderImg.png" alt="" />
                  </div>
                  <h4>Beach Spider Lily</h4>
                  <span>$129.00</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default ProductCart;
