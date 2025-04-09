import React, { createContext, useContext, useEffect, useState } from "react";

// Create the context
const WishlistContext = createContext();

// Provider component
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });

  // Sync to localStorage on update
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (car) => {
    if (!wishlist.find((item) => item.id === car.id)) {
      setWishlist([...wishlist, car]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((car) => car.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Hook to use context
export const useWishlist = () => useContext(WishlistContext);

// Also export context itself for direct access (as you used in Wishlist.jsx)
export { WishlistContext };