import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, CreditCard, Banknote, CheckCircle, ArrowRight, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Checkout = () => {
  const { cartItems, subtotal, shippingFee, discountAmount, total, clearCart } = useCart();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: 'Julian',
    lastName: 'Vance',
    email: 'julian.vance@example.com',
    phone: '+1 (555) 234-5678',
    address: '742 Evergreen Terrace',
    city: 'New York',
    country: 'United States',
    postalCode: '10001',
    paymentMethod: 'card',
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '12/28',
    cardCvc: '888',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      addToast('Your bag is empty.', 'error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const orderId = `VRT-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderSuccess({
        id: orderId,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        items: [...cartItems],
        total,
        shippingAddress: `${formData.address}, ${formData.city}, ${formData.country} ${formData.postalCode}`,
      });
      clearCart();
      addToast(`Order #${orderId} confirmed successfully!`, 'success');
    }, 1500);
  };

  if (orderSuccess) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto"
        >
          <CheckCircle className="w-10 h-10 stroke-[2]" />
        </motion.div>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">
          Thank You For Your Order
        </h1>
        <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-md mx-auto">
          Order <strong>#{orderSuccess.id}</strong> has been received and is currently being prepared at our atelier. We have sent a receipt to <strong>{formData.email}</strong>.
        </p>

        {/* Order Details Receipt Card */}
        <div className="bg-white p-6 rounded border border-neutral-200 text-left text-xs space-y-4 shadow-sm max-w-lg mx-auto">
          <div className="flex justify-between pb-3 border-b border-neutral-200 font-medium text-neutral-500">
            <span>Order Date: {orderSuccess.date}</span>
            <span>Status: <strong className="text-emerald-600">Processing</strong></span>
          </div>

          <div className="space-y-3">
            {orderSuccess.items.map((item) => (
              <div key={item.key} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img src={item.product.images[0]} alt={item.product.name} className="w-10 h-12 object-cover rounded bg-neutral-100" />
                  <div>
                    <h4 className="font-bold text-neutral-900">{item.product.name}</h4>
                    <span className="text-neutral-500">{item.color} / {item.size} x {item.quantity}</span>
                  </div>
                </div>
                <span className="font-bold text-neutral-900">${item.product.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-200 space-y-1 text-neutral-600">
            <p><strong>Shipping to:</strong> {orderSuccess.shippingAddress}</p>
            <p><strong>Total Charged:</strong> <strong className="text-neutral-900 font-serif text-sm">${orderSuccess.total}</strong></p>
          </div>
        </div>

        <div className="pt-4 flex justify-center gap-4">
          <button
            onClick={() => navigate('/shop')}
            className="px-8 py-3.5 bg-brand-dark text-white text-xs font-bold uppercase tracking-widest rounded-xs hover:bg-brand-accent transition-colors shadow-md"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => navigate('/account')}
            className="px-8 py-3.5 bg-white border border-neutral-300 text-neutral-800 text-xs font-bold uppercase tracking-widest rounded-xs hover:bg-neutral-100 transition-colors"
          >
            View Account Orders
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-neutral-200">
        <h1 className="font-serif text-3xl font-bold text-neutral-900 tracking-tight">
          Checkout
        </h1>
        <span className="text-xs text-neutral-500 font-medium flex items-center gap-1">
          <Lock className="w-3.5 h-3.5 text-emerald-600" /> Secure SSL Demo Checkout
        </span>
      </div>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Form Controls */}
        <div className="lg:col-span-7 space-y-8">
          {/* Section 1: Customer Contact */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900 pb-2 border-b border-neutral-200">
              1. Customer Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-bold uppercase text-neutral-600 block mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-brand-dark"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold uppercase text-neutral-600 block mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-brand-dark"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold uppercase text-neutral-600 block mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-brand-dark"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold uppercase text-neutral-600 block mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-brand-dark"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Shipping Address */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900 pb-2 border-b border-neutral-200">
              2. Delivery Address
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-[11px] font-bold uppercase text-neutral-600 block mb-1">Street Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-brand-dark"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase text-neutral-600 block mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-brand-dark"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase text-neutral-600 block mb-1">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-brand-dark"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase text-neutral-600 block mb-1">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-brand-dark"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Payment Method */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900 pb-2 border-b border-neutral-200">
              3. Payment Method
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <label
                className={`p-4 border rounded flex items-center gap-3 cursor-pointer transition-all ${
                  formData.paymentMethod === 'card'
                    ? 'border-brand-dark bg-neutral-50 font-bold'
                    : 'border-neutral-200 text-neutral-600'
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === 'card'}
                  onChange={handleInputChange}
                  className="accent-brand-dark"
                />
                <CreditCard className="w-4 h-4 text-brand-dark" />
                <span className="text-xs">Credit Card</span>
              </label>

              <label
                className={`p-4 border rounded flex items-center gap-3 cursor-pointer transition-all ${
                  formData.paymentMethod === 'cod'
                    ? 'border-brand-dark bg-neutral-50 font-bold'
                    : 'border-neutral-200 text-neutral-600'
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={handleInputChange}
                  className="accent-brand-dark"
                />
                <Banknote className="w-4 h-4 text-brand-dark" />
                <span className="text-xs">Cash on Delivery</span>
              </label>
            </div>

            {formData.paymentMethod === 'card' && (
              <div className="p-4 bg-neutral-50 border border-neutral-200 rounded space-y-3">
                <div>
                  <label className="text-[11px] font-bold uppercase text-neutral-600 block mb-1">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-brand-dark font-mono"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold uppercase text-neutral-600 block mb-1">Expiration Date</label>
                    <input
                      type="text"
                      name="cardExp"
                      value={formData.cardExp}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-brand-dark font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold uppercase text-neutral-600 block mb-1">Security CVC</label>
                    <input
                      type="text"
                      name="cardCvc"
                      value={formData.cardCvc}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-brand-dark font-mono"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Order Summary Sidebar */}
        <div className="lg:col-span-5">
          <div className="bg-neutral-50 p-6 rounded-sm border border-neutral-200 space-y-6 sticky top-28 shadow-sm">
            <h3 className="text-base font-bold text-neutral-900 uppercase tracking-wider pb-3 border-b border-neutral-200">
              Your Order ({cartItems.length} items)
            </h3>

            {/* Item Thumbnails List */}
            <div className="max-h-60 overflow-y-auto space-y-3 pr-2 divide-y divide-neutral-200/60">
              {cartItems.map((item) => (
                <div key={item.key} className="pt-3 first:pt-0 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <img src={item.product.images[0]} alt={item.product.name} className="w-12 h-14 object-cover rounded bg-neutral-100" />
                    <div>
                      <h4 className="font-bold text-neutral-900 line-clamp-1">{item.product.name}</h4>
                      <p className="text-neutral-500">{item.color} | {item.size} x {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-bold text-neutral-900">${item.product.price * item.quantity}</span>
                </div>
              ))}
            </div>

            {/* Subtotal & Total Calculations */}
            <div className="space-y-2 pt-4 border-t border-neutral-200 text-xs">
              <div className="flex justify-between text-neutral-600">
                <span>Subtotal</span>
                <span className="font-bold text-neutral-900">${subtotal}</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Shipping</span>
                <span className="font-bold text-neutral-900">{shippingFee === 0 ? 'FREE' : `$${shippingFee}`}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>Discount</span>
                  <span>-${discountAmount}</span>
                </div>
              )}
              <div className="pt-3 border-t border-neutral-200 flex justify-between items-baseline text-base font-bold text-neutral-900">
                <span>Total Due</span>
                <span className="text-xl font-serif">${total}</span>
              </div>
            </div>

            {/* Place Order CTA Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-brand-dark hover:bg-brand-accent text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Processing Order...</span>
              ) : (
                <>
                  PLACE ORDER (${total}) <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
