import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

// Create the context
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    // Correct useState usage
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] ? prev[itemId] + 1 : 1
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 0
        }));
    };

    const getTotalCartAmount = () => {
        let total = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const itemInfo = food_list.find(item => item.id === Number(itemId));
                if (itemInfo) {
                    total += itemInfo.price * cartItems[itemId];
                }
            }
        }
        return total;
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;