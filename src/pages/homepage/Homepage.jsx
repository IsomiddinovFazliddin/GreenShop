import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Homepage.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Button, Slider } from "@mui/material";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

import { FaArrowRightLong } from "react-icons/fa6";
import Product from "../../components/product/Product";

function Homepage({ data, addToCart }) {
  const [value1, setValue1] = useState([20, 80]);
  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
  const valuetext = (value) => {
    return `${value}`;
  };

  return (
    <>
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
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="homeHero">
            <div className="container">
              <div className="info">
                <h6>Welcome to GreenShop</h6>
                <h1>
                  Let’s Make a Better <span>Planet</span>
                </h1>
                <p>
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <Button className="heroBtn" variant="contained">
                  SHOP NOW
                </Button>
              </div>
              <div className="heroImg">
                <img src="/imgs/heroImg.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homeHero">
            <div className="container">
              <div className="info">
                <h6>Welcome to GreenShop</h6>
                <h1>
                  Let’s Make a Better <span>Planet</span>
                </h1>
                <p>
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <Button className="heroBtn" variant="contained">
                  SHOP NOW
                </Button>
              </div>
              <div className="heroImg">
                <img src="/imgs/heroImg.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homeHero">
            <div className="container">
              <div className="info">
                <h6>Welcome to GreenShop</h6>
                <h1>
                  Let’s Make a Better <span>Planet</span>
                </h1>
                <p>
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <Button className="heroBtn" variant="contained">
                  SHOP NOW
                </Button>
              </div>
              <div className="heroImg">
                <img src="/imgs/heroImg.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <main>
        <section className="product-section">
          <div className="container">
            <div className="menu-aside">
              <h3>Categories</h3>
              <div className="row">
                <h4 tabIndex="0">
                  House Plants <span>(33)</span>
                </h4>
                <h4 tabIndex="0">
                  Potter Plants <span>(12)</span>
                </h4>
                <h4 tabIndex="0">
                  Seeds <span>(65)</span>
                </h4>
                <h4 tabIndex="0">
                  Small Plants <span>(39)</span>
                </h4>
                <h4 tabIndex="0">
                  Big Plants <span>(23)</span>
                </h4>
                <h4 tabIndex="0">
                  Succulents <span>(17)</span>
                </h4>
                <h4 tabIndex="0">
                  Trerrariums <span>(19)</span>
                </h4>
                <h4 tabIndex="0">
                  Gardening <span>(13)</span>
                </h4>
                <h4 tabIndex="0">
                  Accessories <span>(18)</span>
                </h4>
              </div>
              <h3>Price Range</h3>
              <div className="price">
                <Slider
                  className="slider"
                  getAriaLabel={() => "Temperature range"}
                  value={value1}
                  onChange={handleChange1}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
                <h4>
                  Price: <span>$39 - $1230</span>
                </h4>
                <Button className="filterBtn" variant="contained">
                  Filter
                </Button>
              </div>
              <h3>Size</h3>
              <div className="row">
                <h4 tabIndex="0">
                  Small <span>(119)</span>
                </h4>
                <h4 tabIndex="0">
                  Medium <span>(86)</span>
                </h4>
                <h4 tabIndex="0">
                  Large <span>(78)</span>
                </h4>
              </div>

              <div className="menu-img">
                <img src="/imgs/asideImg.png" alt="" />
              </div>
            </div>
            <div className="productCard">
              <div className="title">
                <ul>
                  <button>All Plants</button>
                  <button>New Arrivals</button>
                  <button>Sale</button>
                </ul>
                <h5>
                  Short by: Default sorting <IoIosArrowDown />
                </h5>
              </div>
              <div className="card">
                {data.map((item) => {
                  return <Product item={item} addToCart={addToCart}/>;
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="btns-section">
          <div className="container">
            <div className="col">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </section>
        <section className="blog-section">
          <div className="container">
            <div className="title">
              <h2>Our Blog Posts</h2>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className="card">
              <div className="box">
                <div className="imgs">
                  <img src="/imgs/blogImg1.png" alt="" />
                </div>
                <div className="text">
                  <h6>September 12 I Read in 6 minutes</h6>
                  <h4>Cactus & Succulent Care Tips</h4>
                  <p>
                    Cacti are succulents are easy care plants for any home or
                    patio.
                  </p>
                  <button>
                    Read More <FaArrowRightLong />
                  </button>
                </div>
              </div>
              <div className="box">
                <div className="imgs">
                  <img src="/imgs/blogImg2.png" alt="" />
                </div>
                <div className="text">
                  <h6>September 13 I Read in 2 minutes</h6>
                  <h4>Top 10 Succulents for Your Home</h4>
                  <p>Best in hanging baskets. Prefers medium to high light.</p>
                  <button>
                    Read More <FaArrowRightLong />
                  </button>
                </div>
              </div>
              <div className="box">
                <div className="imgs">
                  <img src="/imgs/blogImg3.png" alt="" />
                </div>
                <div className="text">
                  <h6>September 15 I Read in 3 minutes</h6>
                  <h4>Cacti & Succulent Care Tips</h4>
                  <p>
                    Cacti and succulents thrive in containers and because most
                    are..
                  </p>
                  <button>
                    Read More <FaArrowRightLong />
                  </button>
                </div>
              </div>
              <div className="box">
                <div className="imgs">
                  <img src="/imgs/blogImg4.png" alt="" />
                </div>
                <div className="text">
                  <h6>September 15 I Read in 2 minutes</h6>
                  <h4>Best Houseplants Room by Room</h4>
                  <p>
                    The benefits of houseplants are endless. In addition to..
                  </p>
                  <button>
                    Read More <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Homepage;
