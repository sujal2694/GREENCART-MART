import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../greencart_assets/assets";
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from "../../context/StoreContext";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();
  const { cartItems, token, setToken } = useContext(StoreContext);
  const logout = () => {
    localStorage.removeItem("token", token);
    setToken("");
  }
  return (
    <div className="navbar">
      <div className="navbar-content">
        <img src={assets.logo} alt="" />
        <div className="navbar-list">
          <ul>
            <Link to='/'><li onClick={() => setMenu("home")} className={menu === 'home' ? "active" : ""}>Home</li></Link>
            <a href='#products' onClick={() => navigate('/')}><li onClick={() => setMenu("products")} className={menu === "products" ? "active" : ""}>All Products</li></a>
            <Link to='/contact'><li onClick={() => setMenu("contact")} className={menu === 'contact' ? "active" : ""}>Contact</li></Link>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="navbar-search">
            <input type="text" placeholder="Search here" list="search-list" />
            <datalist id="search-list">
              <option value="Fruits"></option>
              <option value="Vegitables"></option>
              <option value="Cold Drinks"></option>
              <option value="Instant Food"></option>
              <option value="Cake & Bread"></option>
              <option value="Milk Items"></option>
            </datalist>
          </div>
          <button className="cart-btn">
            <img src={assets.nav_cart_icon} onClick={() => navigate('/cart')} alt="" />
            <div className={cartItems.length > 0 ? "dot" : ""}></div>
          </button>
          {token
            ? <>
              <div className="profile">
                <img src={assets.profile_icon} alt="" />
                <div className="log-out-btn">
                  <i class="fa-solid fa-arrow-right-from-bracket"></i><i className="fa fa-log-out"></i>
                  <button onClick={logout}>Log Out</button>
                </div>
              </div>
            </>
            : <>
              <Link to='/login'><button className="login-btn">Log In</button></Link>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;