// ...existing code...
import React, { createContext, useState } from "react";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [userInfo, setUserInfo] = useState(null);

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
    };

    const clearCart = () => setCartItems([]);

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        userInfo,
        setUserInfo
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
// ...existing code...