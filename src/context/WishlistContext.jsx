import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const saved = localStorage.getItem('verite_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.error('Error loading wishlist from localStorage:', err);
      return [];
    }
  });

  const { addToast } = useToast();

  useEffect(() => {
    try {
      localStorage.setItem('verite_wishlist', JSON.stringify(wishlistItems));
    } catch (err) {
      console.error('Error saving wishlist to localStorage:', err);
    }
  }, [wishlistItems]);

  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      setWishlistItems((prev) => prev.filter((item) => item.id !== product.id));
      addToast(`Removed "${product.name}" from Wishlist`, 'info');
    } else {
      setWishlistItems((prev) => [...prev, product]);
      addToast(`Saved "${product.name}" to Wishlist`, 'success');
    }
  };

  const removeFromWishlist = (productId) => {
    const item = wishlistItems.find((p) => p.id === productId);
    setWishlistItems((prev) => prev.filter((p) => p.id !== productId));
    if (item) {
      addToast(`Removed "${item.name}" from Wishlist`, 'info');
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        wishlistCount: wishlistItems.length,
        isInWishlist,
        toggleWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within WishlistProvider');
  }
  return context;
};
