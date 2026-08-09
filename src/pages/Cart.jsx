import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, Heart, ShieldCheck, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    subtotal,
    shippingFee,
    discountAmount,
    discountCode,
    applyDiscount,
    removeDiscount,
    total,
  } = useCart();

  const { toggleWishlist } = useWishlist();
  const navigate = useNavigate();

  const [inputCode, setInputCode] = useState('');

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (inputCode.trim()) {
      applyDiscount(inputCode.trim());
      setInputCode('');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-neutral-100 flex items-center justify-center mx-auto text-neutral-400">
          <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-neutral-900">Your Shopping Bag is Empty</h1>
        <p className="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto font-light">
          Your shopping bag is currently waiting for your next favorite luxury garment. Explore our collection to add items.
        </p>
        <div className="pt-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-dark text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-accent transition-colors shadow-lg"
          >
            Explore Collections <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-8">
        Shopping Bag ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Itemized Table */}
        <div className="lg:col-span-8 space-y-6">
          <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
            {cartItems.map((item) => (
              <div key={item.key} className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex gap-4 items-center">
                  <Link to={`/product/${item.product.id}`}>
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-24 h-32 object-cover rounded bg-neutral-100 shrink-0 border border-neutral-200/80"
                    />
                  </Link>

                  <div className="space-y-1">
                    <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
                      {item.product.category}
                    </span>
                    <Link to={`/product/${item.product.id}`} className="block">
                      <h3 className="text-sm font-bold text-neutral-900 hover:text-brand-accent transition-colors">
                        {item.product.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-neutral-500">
                      Color: <strong className="text-neutral-800">{item.color}</strong> | Size: <strong className="text-neutral-800">{item.size}</strong>
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                      <button
                        onClick={() => removeFromCart(item.key)}
                        className="text-xs font-semibold text-neutral-400 hover:text-rose-600 transition-colors flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Remove
                      </button>
                      <button
                        onClick={() => toggleWishlist(item.product)}
                        className="text-xs font-semibold text-neutral-400 hover:text-rose-600 transition-colors flex items-center gap-1"
                      >
                        <Heart className="w-3.5 h-3.5" /> Save to Wishlist
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quantity Controls & Line Total */}
                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-neutral-100">
                  <div className="flex items-center border border-neutral-300 rounded">
                    <button
                      onClick={() => updateQuantity(item.key, -1)}
                      className="p-1.5 hover:bg-neutral-100 text-neutral-700 transition-colors"
                      aria-label="Decrease"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-bold text-neutral-900 min-w-[24px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.key, 1)}
                      className="p-1.5 hover:bg-neutral-100 text-neutral-700 transition-colors"
                      aria-label="Increase"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span className="text-base font-bold text-neutral-900 min-w-[80px] text-right">
                    ${item.product.price * item.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center pt-2">
            <Link
              to="/shop"
              className="text-xs font-bold uppercase tracking-widest text-neutral-700 hover:text-brand-dark transition-colors flex items-center gap-1.5"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-neutral-50 p-6 rounded-sm border border-neutral-200 space-y-6 shadow-sm">
            <h2 className="text-base font-bold text-neutral-900 uppercase tracking-wider pb-3 border-b border-neutral-200">
              Order Summary
            </h2>

            {/* Price Calculations */}
            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-neutral-600">
                <span>Subtotal</span>
                <span className="font-bold text-neutral-900">${subtotal}</span>
              </div>

              <div className="flex justify-between text-neutral-600">
                <span>Estimated Shipping</span>
                <span className="font-bold text-neutral-900">
                  {shippingFee === 0 ? <strong className="text-emerald-600 uppercase">FREE</strong> : `$${shippingFee}`}
                </span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span className="flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5" /> Promo ({discountCode})
                  </span>
                  <span>-${discountAmount}</span>
                </div>
              )}

              <div className="pt-3 border-t border-neutral-200 flex justify-between items-baseline text-base font-bold text-neutral-900">
                <span>Total</span>
                <span className="text-xl font-serif">${total}</span>
              </div>
            </div>

            {/* Promo Code Form */}
            <form onSubmit={handleApplyCoupon} className="pt-2">
              <label className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block mb-1.5">
                Promo Code
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  placeholder="e.g. VERITE10"
                  className="flex-1 bg-white border border-neutral-300 rounded px-3 py-2 text-xs uppercase focus:outline-none focus:border-brand-dark"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase rounded transition-colors"
                >
                  Apply
                </button>
              </div>
              {discountCode && (
                <div className="mt-2 flex items-center justify-between text-[11px] text-emerald-700 bg-emerald-50 p-2 rounded border border-emerald-200">
                  <span>Code <strong>{discountCode}</strong> applied</span>
                  <button type="button" onClick={removeDiscount} className="text-rose-600 hover:underline">Remove</button>
                </div>
              )}
            </form>

            {/* CTAs */}
            <div className="pt-2 space-y-3">
              <button
                onClick={() => navigate('/checkout')}
                className="w-full py-4 bg-brand-dark hover:bg-brand-accent text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
              >
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-2 text-center text-[11px] text-neutral-500 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Encrypted 256-Bit SSL Checkout Security</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
