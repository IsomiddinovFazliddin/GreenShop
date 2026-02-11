import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./ProductView.scss";
import {
  FaFacebookF,
  FaHeart,
  FaLinkedinIn,
  FaMinus,
  FaPlus,
  FaRegHeart,
  FaStar,
  FaTwitter,
} from "react-icons/fa6";
import { Button } from "@mui/material";
import { MdOutlineMail } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { NavLink, useParams } from "react-router-dom";

function ProductView({ data, addToCart }) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const { id } = useParams();

  const filterData = data.find((item) => {
    return item.id === Number(id);
  });

  const [count, setCount] = useState(1);
  const [mainImgs, setMainImgs] = useState(filterData.mainImg);
  const [heart, setHeart] = useState(false);

  return (
    <>
      <main>
        <section className="productview-section">
          <div className="container">
            <div className="title">
              <NavLink to={"/"}>Home</NavLink>
              <h5>/</h5>
              <NavLink>Shop</NavLink>
            </div>
            <div className="card">
              <div className="card-imgs">
                <div className="smalImgs">
                  {filterData.imgs.map((item) => {
                    return (
                      <div
                        className="imgs"
                        onClick={() => {
                          setMainImgs(item);
                        }}
                      >
                        <img src={item} alt="" />
                      </div>
                    );
                  })}
                </div>
                <div className="image">
                  <img src={mainImgs} alt="" />
                  <button className="search">
                    <FiSearch />
                  </button>
                </div>
              </div>
              <div className="card-info">
                <h2>{filterData.title}</h2>
                <div className="price">
                  <h3>${filterData.price}</h3>
                  <div className="star">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span>19 Customer Review</span>
                  </div>
                </div>
                <h4>Short Description:</h4>
                <p>{filterData.desc}</p>
                <h4>Size:</h4>
                <div className="sixeBtns">
                  <button>S</button>
                  <button>M</button>
                  <button>L</button>
                  <button>XL</button>
                </div>
                <div className="btns">
                  <Button
                    className="minus"
                    variant="contained"
                    onClick={() => {
                      setCount(count > 1 ? count - 1 : 1);
                    }}
                  >
                    <FaMinus />
                  </Button>
                  <span className="count">{count}</span>
                  <Button
                    className="plus"
                    variant="contained"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    <FaPlus />
                  </Button>
                  <Button className="buyBtn" variant="contained">
                    Buy NOW
                  </Button>
                  <Button
                    className="addbtn"
                    variant="outlined"
                    onClick={() => {
                      addToCart(filterData.id);
                    }}
                  >
                    Add to cart
                  </Button>
                  <Button
                    className="heartBtn"
                    variant="outlined"
                    onClick={() => {
                      setHeart(!heart);
                    }}
                  >
                    {heart ? <FaHeart /> : <FaRegHeart />}
                  </Button>
                </div>
                <h5>
                  SKU: <span>1995751877966</span>
                </h5>
                <h5>
                  Categories: <span>{filterData.category}</span>
                </h5>
                <h5>
                  Tags: <span>Home, Garden, Plants</span>
                </h5>
                <div className="icons">
                  <p>Share this products:</p>
                  <FaFacebookF />
                  <FaTwitter />
                  <FaLinkedinIn />
                  <MdOutlineMail />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="description-section">
          <div className="container">
            <div className="title">
              <button>Product Description</button>
              <button>Reviews (19)</button>
            </div>
            <div className="card">
              <p>
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nam fringilla augue nec est tristique auctor.
                Donec non est at libero vulputate rutrum. Morbi ornare lectus
                quis justo gravida semper. Nulla tellus mi, vulputate adipiscing
                cursus eu, suscipit id nulla.
              </p>
              <p>
                Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus
                feugiat sem, quis fermentum turpis eros eget velit. Donec ac
                tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus
                eget sagittis vulputate, sapien libero hendrerit est, sed
                commodo augue nisi non neque. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed tempor, lorem et placerat
                vestibulum, metus nisi posuere nisl, in accumsan elit odio quis
                mi. Cras neque metus, consequat et blandit et, luctus a nunc.
                Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground.{" "}
              </p>
              <h4>Living Room:</h4>
              <p>
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
              <h4>Dining Room:</h4>
              <p>
                The benefits of houseplants are endless. In addition to cleaning
                the air of harmful toxins, they can help to improve your mood,
                reduce stress and provide you with better sleep. Fill every room
                of your home with houseplants and their restorative qualities
                will improve your life.
              </p>
              <h4>Office:</h4>
              <p>
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
          </div>
        </section>
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
      </main>
    </>
  );
}

export default ProductView;
