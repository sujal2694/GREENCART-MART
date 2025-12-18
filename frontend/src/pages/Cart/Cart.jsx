import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cartItems, removeFromCart, addToCart, token, url } = useContext(StoreContext);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const handleQuantityChange = (item, change) => {
        if (item.quantity + change < 1) return;
        addToCart({ ...item, quantity: change });
    };

    const userAuth = () => {
        if (!token) {
            let newUrl = url;
            newUrl += "/checkout"
        }
    }

    if (cartItems.length === 0) {
        return (
            <div className="empty-cart">
                <h2>Your cart is empty</h2>
                <Link to="/" className="continue-shopping">Continue Shopping</Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <div className='cart-head'>
                <h1>Shopping Cart</h1>
                <button>Clear cart</button>
            </div>
            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image[0]} alt={item.name} className="item-image" />
                        <div className="item-details">
                            <h3>{item.name}</h3>
                            <p>₹{item.price}</p>
                            <div className="quantity-controls">
                                <button onClick={() => handleQuantityChange(item, -1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleQuantityChange(item, 1)}>+</button>
                            </div>
                            <button
                                className="remove-btn"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                        <div className="item-total">
                            ₹{(item.price * item.quantity).toFixed(2)}
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <div className="total">
                    <h3>Total: ₹{calculateTotal().toFixed(2)}</h3>
                </div>
                <Link to="/checkout" onClick={()=>userAuth} className="checkout-btn">
                    Proceed to Checkout
                </Link>
            </div>
        </div>
    );
};

export default Cart;