import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('verite_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.error('Error loading cart from localStorage:', err);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const { addToast } = useToast();

  useEffect(() => {
    try {
      localStorage.setItem('verite_cart', JSON.stringify(cartItems));
    } catch (err) {
      console.error('Error saving cart to localStorage:', err);
    }
  }, [cartItems]);

  const addToCart = (product, quantity = 1, selectedColor = null, selectedSize = null) => {
    const color = selectedColor || (product.colors && product.colors[0]?.name) || 'Default';
    const size = selectedSize || (product.sizes && product.sizes[0]) || 'Standard';
    const itemKey = `${product.id}-${color}-${size}`;

    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.key === itemKey);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevItems,
          {
            key: itemKey,
            product,
            color,
            size,
            quantity,
          },
        ];
      }
    });

    addToast(`Added "${product.name}" to your bag.`, 'success');
  };

  const removeFromCart = (key) => {
    const itemToRemove = cartItems.find((item) => item.key === key);
    setCartItems((prevItems) => prevItems.filter((item) => item.key !== key));
    if (itemToRemove) {
      addToast(`Removed "${itemToRemove.product.name}" from your bag.`, 'info');
    }
  };

  const updateQuantity = (key, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.key === key) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const applyDiscount = (code) => {
    if (code.trim().toUpperCase() === 'VERITE10') {
      setDiscountCode('VERITE10');
      setDiscountPercent(10);
      addToast('Promo code VERITE10 applied (10% OFF)!', 'success');
      return true;
    } else {
      addToast('Invalid promo code. Try "VERITE10"', 'error');
      return false;
    }
  };

  const removeDiscount = () => {
    setDiscountCode('');
    setDiscountPercent(0);
  };

  const clearCart = () => {
    setCartItems([]);
    removeDiscount();
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const shippingFee = subtotal > 300 || subtotal === 0 ? 0 : 25;
  const total = Math.max(0, subtotal - discountAmount + shippingFee);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        applyDiscount,
        removeDiscount,
        discountCode,
        discountPercent,
        discountAmount,
        cartCount,
        subtotal,
        shippingFee,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
