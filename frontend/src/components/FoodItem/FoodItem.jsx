import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../greencart_assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({
  id,
  name,
  price,
  offerPrice,
  description,
  image,
  category,
}) => {
  const { addToCart } = useContext(StoreContext);

  const handleAddToCart = () => {
    const item = {
      id,
      name,
      price,
      offerPrice,
      image,
      category,
      quantity: 1
    };
    addToCart(item);
  };

  return (
    <div className="food-item">
      <img src={image[0]} alt={name} className="food-image" />
      <div className="food-item-desc">
        <span className="category">{category}</span>
        <h2>{name}</h2>
        <div className="rating">
          <ul>
            {[...Array(4)].map((_, index) => (
              <li key={index}>
                <img src={assets.star_icon} alt="star" />
              </li>
            ))}
            <li>
              <img src={assets.star_dull_icon} alt="dull star" />
            </li>
          </ul>
          <p>(4)</p>
        </div>
        <p className="price">
          <span className="original-price">${price}</span>
          <span className="offer-price">${offerPrice}</span>
        </p>
      </div>
      <button onClick={handleAddToCart} className="add-to-cart-btn">
        <img src={assets.cart_icon} alt="cart" />
        Add
      </button>
    </div>
  );
};

export default FoodItem;