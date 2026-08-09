import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, Heart, ShoppingBag, User, Menu, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export const Navbar = ({ onOpenSearch, onOpenMobileMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop All', path: '/shop' },
    { name: 'Outerwear', path: '/shop?category=Outerwear' },
    { name: 'Knitwear', path: '/shop?category=Knitwear' },
    { name: 'Trousers', path: '/shop?category=Tailored Trousers' },
    { name: 'Accessories', path: '/shop?category=Accessories' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-brand-dark text-white py-2 px-4 text-[11px] font-medium tracking-widest text-center uppercase border-b border-neutral-800 flex items-center justify-center gap-2">
        <Sparkles className="w-3 h-3 text-brand-accent animate-pulse" />
        <span>Complimentary Worldwide Express Shipping on Orders Over $300</span>
        <span className="hidden sm:inline text-neutral-400">| Use Code <strong className="text-brand-accent">VERITE10</strong> for 10% Off</span>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3.5 border-b border-neutral-200/80'
            : 'bg-brand-cream/80 backdrop-blur-xs py-5 border-b border-neutral-200/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile Menu Toggle & Logo Left */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenMobileMenu}
              className="p-2 text-neutral-800 hover:text-brand-accent transition-colors md:hidden"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Brand Logo */}
            <Link to="/" className="group flex items-center gap-1.5">
              <span className="font-serif text-2xl lg:text-3xl font-bold tracking-tight text-neutral-900 group-hover:text-brand-accent transition-colors">
                VÉRITÉ
              </span>
              <span className="w-2 h-2 rounded-full bg-brand-accent inline-block"></span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs font-semibold uppercase tracking-widest transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-neutral-900 font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-accent'
                      : 'text-neutral-600 hover:text-neutral-900 hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-neutral-400 after:transition-all after:duration-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Icons (Search, Wishlist, Cart, Account) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100/80 rounded-full transition-all"
              title="Search store"
            >
              <Search className="w-5 h-5 stroke-[1.75]" />
            </button>

            {/* Account Link */}
            <Link
              to="/account"
              className="p-2.5 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100/80 rounded-full transition-all hidden sm:flex"
              title="My Account"
            >
              <User className="w-5 h-5 stroke-[1.75]" />
            </Link>

            {/* Wishlist Icon with Badge */}
            <Link
              to="/wishlist"
              className="relative p-2.5 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100/80 rounded-full transition-all"
              title="Wishlist"
            >
              <Heart className="w-5 h-5 stroke-[1.75]" />
              {wishlistCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Drawer Trigger with Count Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100/80 rounded-full transition-all flex items-center gap-1.5"
              title="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
              {cartCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-brand-dark text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
