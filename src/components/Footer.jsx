import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Twitter, Facebook, Mail, Shield, RefreshCw, Truck } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const { addToast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      addToast('Thank you for subscribing to VÉRITÉ Journal.', 'success');
      setEmail('');
    }
  };

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-12 border-t border-neutral-800">
      {/* Brand Value Props Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="p-3 bg-neutral-800/80 rounded-full text-brand-accent shrink-0">
            <Truck className="w-6 h-6 stroke-[1.5]" />
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Global Express Shipping</h4>
            <p className="text-xs text-neutral-400 mt-1">Complimentary duty-paid express delivery on all orders above $300.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="p-3 bg-neutral-800/80 rounded-full text-brand-accent shrink-0">
            <RefreshCw className="w-6 h-6 stroke-[1.5]" />
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">30-Day Hassle-Free Returns</h4>
            <p className="text-xs text-neutral-400 mt-1">Complimentary home pickup for effortless exchanges and returns.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="p-3 bg-neutral-800/80 rounded-full text-brand-accent shrink-0">
            <Shield className="w-6 h-6 stroke-[1.5]" />
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Craftsmanship Guarantee</h4>
            <p className="text-xs text-neutral-400 mt-1">Masterfully tailored using premium natural fabrics and Italian wools.</p>
          </div>
        </div>
      </div>

      {/* Footer Main Links & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Column 1: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <Link to="/" className="font-serif text-3xl font-bold tracking-tight text-white block">
            VÉRITÉ<span className="text-brand-accent">.</span>
          </Link>
          <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
            Architectural silhouettes, fine Italian textiles, and refined modern apparel designed for effortless everyday elegance.
          </p>

          {/* Newsletter Box */}
          <div className="pt-2">
            <h5 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-2">
              Subscribe to the VÉRITÉ Journal
            </h5>
            <form onSubmit={handleSubscribe} className="flex max-w-md">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-neutral-900 border border-neutral-800 text-white pl-10 pr-4 py-2.5 text-xs placeholder:text-neutral-500 focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-brand-accent hover:bg-brand-accentDark text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1 shrink-0"
              >
                Join <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Column 2: SHOP */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-200 mb-4">
            Shop Collection
          </h4>
          <ul className="space-y-2.5 text-xs text-neutral-400">
            <li><Link to="/shop" className="hover:text-white transition-colors">All Products</Link></li>
            <li><Link to="/shop?category=Outerwear" className="hover:text-white transition-colors">Outerwear</Link></li>
            <li><Link to="/shop?category=Knitwear" className="hover:text-white transition-colors">Knitwear & Tops</Link></li>
            <li><Link to="/shop?category=Tailored Trousers" className="hover:text-white transition-colors">Tailored Trousers</Link></li>
            <li><Link to="/shop?category=Accessories" className="hover:text-white transition-colors">Leather & Accessories</Link></li>
          </ul>
        </div>

        {/* Column 3: HELP */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-200 mb-4">
            Client Care
          </h4>
          <ul className="space-y-2.5 text-xs text-neutral-400">
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Shipping & Delivery</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Returns & Exchange</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Garment Size Guide</Link></li>
            <li><Link to="/account" className="hover:text-white transition-colors">Order Tracking</Link></li>
          </ul>
        </div>

        {/* Column 4: COMPANY & LEGAL */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-200 mb-4">
            Atelier & Legal
          </h4>
          <ul className="space-y-2.5 text-xs text-neutral-400">
            <li><Link to="/about" className="hover:text-white transition-colors">About VÉRITÉ</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Sustainability & Ethics</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Boutique Locations</Link></li>
            <li><span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span></li>
            <li><span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span></li>
          </ul>
        </div>
      </div>

      {/* Copyright & Social Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <p>© {new Date().getFullYear()} VÉRITÉ Studio Inc. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-neutral-400">
          <a href="#instagram" className="hover:text-white transition-colors" aria-label="Instagram">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#twitter" className="hover:text-white transition-colors" aria-label="Twitter">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#facebook" className="hover:text-white transition-colors" aria-label="Facebook">
            <Facebook className="w-4 h-4" />
          </a>
        </div>

        {/* Mock Payment Method Badges */}
        <div className="flex items-center gap-2 text-[10px] font-bold text-neutral-400 tracking-wider uppercase">
          <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded">VISA</span>
          <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded">MASTERCARD</span>
          <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded">AMEX</span>
          <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded">APPLE PAY</span>
        </div>
      </div>
    </footer>
  );
};
