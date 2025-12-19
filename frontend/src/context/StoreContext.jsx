// ...existing code...
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [userInfo, setUserInfo] = useState(null);
    const [token, setToken] = useState(null);

    const url = "https://greencart-mart-backend.onrender.com"

    const addToCart = (item) => {
        setCartItems(prev => {
            const exists = prev.find(i => i.id === item.id);
            if (exists) {
                return prev.map(i =>
                    i.id === item.id ? { ...i, quantity: (i.quantity || 1) + (item.quantity || 1) } : i
                );
            }
            return [...prev, { ...item, quantity: item.quantity || 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(i => i.id !== id));
        toast.success("Item removed successfully")
    };

    const clearCart = () => setCartItems([]);

    const fetchUser = () => {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
        }
    }

    useEffect(()=>{
        fetchUser()
    },[])

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        userInfo,
        setUserInfo,
        token,
        setToken,
        url,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
// ...existing code...