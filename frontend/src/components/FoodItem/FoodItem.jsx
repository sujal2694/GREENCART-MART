import React from "react";
import "./FoodItem.css";
import { assets } from "../../greencart_assets/assets";

const FoodItem = ({
  id,
  name,
  price,
  offerPrice,
  description,
  image,
  category,
}) => {
  return (
    <div className="food-item">
      <img src={image[0]} alt="" />
      <div className="food-item-desc">
        <span>{category}</span>
        <h2>{name}</h2>
        <div key={id} className="rating">
          <ul>
            <li>
              <img src={assets.star_icon} alt="" />
            </li>
            <li>
              <img src={assets.star_icon} alt="" />
            </li>
            <li>
              <img src={assets.star_icon} alt="" />
            </li>
            <li>
              <img src={assets.star_icon} alt="" />
            </li>
            <li>
              <img src={assets.star_dull_icon} alt="" />
            </li>
          </ul>
          <p>(4)</p>
        </div>
        <p className="price">
          ${price} <b>${offerPrice}</b>
        </p>
      </div>
      <button>
        <img src={assets.cart_icon} alt="" /> Add
      </button>
    </div>
  );
};

export default FoodItem;
