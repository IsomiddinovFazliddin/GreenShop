import React, { useState } from "react";
import "./Product.scss";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";

function Product({ item, addToCart }) {
  const [heart, setHeart] = useState(() => {
    try {
      const hearts = JSON.parse(localStorage.getItem("hearts")) || {};
      return hearts[item.id] || false;
    } catch {
      return false;
    }
  });

  const toggleHeart = () => {
  setHeart((prev) => {
    const newHeart = !prev;
    try {
      const hearts = JSON.parse(localStorage.getItem("hearts")) || {};
      hearts[item.id] = newHeart;
      localStorage.setItem("hearts", JSON.stringify(hearts));
    } catch {}
    return newHeart;
  });
};

  return (
    <>
      <Link to={`/productview/${item.id}`} className="productComponent">
        <div className="imgs">
          <img src={item.mainImg} alt="" />
          <div className="icons">
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(item.id);
              }}
            >
              <LuShoppingCart />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleHeart();
              }}
            >
              {heart ? <FaHeart /> : <FaRegHeart />}
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <FiSearch />
            </button>
          </div>
        </div>
        <h4>{item.title.slice(0, 25)}</h4>
        <span>${item.price}</span>
      </Link>
    </>
  );
}

export default Product;
