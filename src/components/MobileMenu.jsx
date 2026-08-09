import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, ChevronRight, User, Heart, ShoppingBag, PhoneCall, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileMenu = ({ isOpen, onClose }) => {
  const menuLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop All', path: '/shop' },
    { name: 'Outerwear', path: '/shop?category=Outerwear' },
    { name: 'Knitwear & Tops', path: '/shop?category=Knitwear' },
    { name: 'Tailored Trousers', path: '/shop?category=Tailored Trousers' },
    { name: 'Leather & Accessories', path: '/shop?category=Accessories' },
    { name: 'About Atelier', path: '/about' },
    { name: 'Contact & Journal', path: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden md:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-dark/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative w-full max-w-xs bg-brand-dark text-white h-full shadow-2xl flex flex-col justify-between p-6 z-10"
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                <Link to="/" onClick={onClose} className="font-serif text-2xl font-bold tracking-wider text-white">
                  VÉRITÉ<span className="text-brand-accent">.</span>
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Links */}
              <nav className="mt-6 flex flex-col gap-1">
                {menuLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-3 px-3 rounded text-sm font-semibold tracking-wide transition-all ${
                        isActive
                          ? 'bg-neutral-800 text-brand-accent font-bold pl-4'
                          : 'text-neutral-300 hover:text-white hover:bg-neutral-800/50'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-neutral-500" />
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-neutral-800 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/account"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 p-2.5 bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold rounded text-neutral-200 transition-colors"
                >
                  <User className="w-4 h-4" /> Account
                </Link>
                <Link
                  to="/wishlist"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 p-2.5 bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold rounded text-neutral-200 transition-colors"
                >
                  <Heart className="w-4 h-4 text-rose-400" /> Saved
                </Link>
              </div>

              <div className="text-[11px] text-neutral-400 flex flex-col gap-1">
                <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-brand-accent" /> client@veritestudio.com</span>
                <span className="flex items-center gap-1.5"><PhoneCall className="w-3.5 h-3.5 text-brand-accent" /> +1 (800) 482-9012</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
