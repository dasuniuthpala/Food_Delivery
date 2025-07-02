import { createContext, useEffect, useState } from "react";
import { food_list as initialFoodList } from "../assets/assets";

// Create the context
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    // Make food_list stateful
    const [food_list, setFoodList] = useState(initialFoodList);
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

    // Add deleteFoodItem function
    const deleteFoodItem = (id) => {
        setFoodList((prev) => prev.filter(item => item.id !== id));
    };

    // Add addFoodItem function
    const addFoodItem = (item) => {
        setFoodList((prev) => [
            ...prev,
            { ...item, id: prev.length ? Math.max(...prev.map(i => i.id)) + 1 : 1 }
        ]);
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
        getTotalCartAmount,
        deleteFoodItem, // Export delete function
        addFoodItem // Export add function
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;