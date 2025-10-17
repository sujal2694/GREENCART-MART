import React from "react";
import "./Hero.css";
import { assets } from "../../greencart_assets/assets";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-text">
        <h1>Freshness You Can <br /> Trust,Saving You <br /> will Love!</h1>
        <button>Shop Now</button>
        <p>Explore deals <img src={assets.black_arrow_icon} alt="" /></p>
      </div>
      <img src={assets.main_banner_bg} alt="" />
    </div>
  );
};

export default Hero;