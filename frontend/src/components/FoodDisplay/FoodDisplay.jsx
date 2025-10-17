import React from "react";
import { dummyProducts } from "../../greencart_assets/assets";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = () => {
  return (
    <div className="food-display" id="products">
      <h1>All Products</h1>
      <div className="food-list">
        {dummyProducts.map((product, index) => {
          return (
            <FoodItem
              key={index}
              id={product._id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              offerPrice={product.offerPrice}
              category={product.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
