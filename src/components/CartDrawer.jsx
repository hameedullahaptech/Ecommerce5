import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    cartCount,
  } = useCart();

  const navigate = useNavigate();
  const freeShippingThreshold = 300;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-brand-dark/60 backdrop-blur-xs transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-brand-dark" />
                  <h3 className="text-base font-bold text-neutral-900 tracking-tight">
                    Shopping Bag ({cartCount})
                  </h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors rounded-full hover:bg-neutral-200/50"
                  aria-label="Close bag"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Shipping Progress */}
              <div className="p-4 bg-neutral-900 text-white text-xs border-b border-neutral-800">
                <div className="flex items-center justify-between mb-1.5 font-medium">
                  {remainingForFreeShipping > 0 ? (
                    <span>Add <strong>${remainingForFreeShipping}</strong> more for free express shipping</span>
                  ) : (
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4" /> You've unlocked Complimentary Express Shipping!
                    </span>
                  )}
                </div>
                <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-accent transition-all duration-500 ease-out"
                    style={{ width: `${shippingProgress}%` }}
                  />
                </div>
              </div>

              {/* Item List */}
              <div className="flex-1 overflow-y-auto p-5 divide-y divide-neutral-100">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-4 text-neutral-400">
                      <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <h4 className="text-base font-bold text-neutral-800">Your bag is currently empty</h4>
                    <p className="text-xs text-neutral-500 mt-1.5 max-w-xs">
                      Explore our curated collection of architectural luxury outerwear and modern essentials.
                    </p>
                    <button
                      onClick={() => {
                        setIsCartOpen(false);
                        navigate('/shop');
                      }}
                      className="mt-6 px-6 py-3 bg-brand-dark text-white text-xs font-semibold uppercase tracking-widest hover:bg-brand-accent transition-colors duration-200 shadow-sm"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.key} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-20 h-24 object-cover rounded bg-neutral-100 shrink-0 border border-neutral-100"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="text-xs font-bold text-neutral-900 line-clamp-1 pr-2">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.key)}
                              className="text-neutral-400 hover:text-rose-500 transition-colors p-1"
                              title="Remove"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="text-[11px] text-neutral-500 mt-0.5">
                            Color: <span className="text-neutral-800">{item.color}</span> | Size: <span className="text-neutral-800">{item.size}</span>
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-neutral-200 rounded">
                            <button
                              onClick={() => updateQuantity(item.key, -1)}
                              className="p-1 hover:bg-neutral-100 text-neutral-600 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 text-xs font-semibold text-neutral-900 min-w-[24px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.key, 1)}
                              className="p-1 hover:bg-neutral-100 text-neutral-600 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="text-sm font-bold text-neutral-900">
                            ${item.product.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              {cartItems.length > 0 && (
                <div className="p-5 bg-neutral-50 border-t border-neutral-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Subtotal</span>
                    <span className="text-base font-bold text-neutral-900">${subtotal}</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mb-4">
                    Shipping & taxes calculated at checkout.
                  </p>

                  <div className="flex flex-col gap-2.5">
                    <button
                      onClick={() => {
                        setIsCartOpen(false);
                        navigate('/checkout');
                      }}
                      className="w-full py-3.5 bg-brand-dark hover:bg-brand-accent text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
                    >
                      Proceed to Checkout <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        setIsCartOpen(false);
                        navigate('/cart');
                      }}
                      className="w-full py-3 bg-white border border-neutral-300 hover:bg-neutral-100 text-neutral-800 text-xs font-bold uppercase tracking-widest rounded-xs transition-colors"
                    >
                      View Shopping Bag
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
