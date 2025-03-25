import React, { createContext } from "react";  // Corrected import
import allProducts from "../Components/Assets/allProducts";

export const ShopContext = createContext(null);  // Fixed function name

const ShopContextProvider = (props) => {
    const contextValue = { allProducts }; // All products added here, accessible via context

    return (
        <ShopContext.Provider value={contextValue}> 
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
