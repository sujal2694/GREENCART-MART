import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../greencart_assets/assets";
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from "../../context/StoreContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();
  const { cartItems, token, setToken } = useContext(StoreContext);
  const logout = () => {
    localStorage.removeItem("token", token);
    setToken("");
    toast.success("Log out successfully");
  }
  return (
    <div className="navbar">
      <div className="navbar-content">
        <Link to='/'><img src={assets.logo} alt="" /></Link>
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