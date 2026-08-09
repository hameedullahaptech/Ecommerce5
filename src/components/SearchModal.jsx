import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';

export const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const filteredProducts = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const popularSearches = ['Overcoat', 'Cashmere Knit', 'Wide Leg Trousers', 'Calfskin Bag', 'Chelsea Boots'];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-dark/70 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-3xl bg-white rounded-md shadow-2xl overflow-hidden z-10 border border-neutral-200"
          >
            {/* Search Header */}
            <form onSubmit={handleSearchSubmit} className="relative flex items-center border-b border-neutral-100 p-4">
              <Search className="w-5 h-5 text-neutral-400 ml-2 mr-3 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, outerwear, cashmere..."
                className="w-full bg-transparent text-base md:text-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none tracking-tight font-medium"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="p-1 text-neutral-400 hover:text-neutral-700 mr-2"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-neutral-400 hover:text-brand-dark rounded-full hover:bg-neutral-100 transition-colors ml-1"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </form>

            {/* Content Area */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {!query.trim() ? (
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-3">
                    Popular Searches
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {popularSearches.map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-3.5 py-1.5 bg-neutral-100 hover:bg-neutral-800 hover:text-white text-neutral-700 text-xs font-medium rounded-full transition-colors duration-200"
                      >
                        {term}
                      </button>
                    ))}
                  </div>

                  <h4 className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-3">
                    Curated Categories
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { name: 'Outerwear', cat: 'Outerwear' },
                      { name: 'Knitwear', cat: 'Knitwear' },
                      { name: 'Trousers', cat: 'Tailored Trousers' },
                      { name: 'Accessories', cat: 'Accessories' },
                    ].map((c) => (
                      <button
                        key={c.name}
                        onClick={() => {
                          navigate(`/shop?category=${encodeURIComponent(c.cat)}`);
                          onClose();
                        }}
                        className="p-3 bg-neutral-50 hover:bg-neutral-100 rounded text-center text-xs font-semibold text-neutral-800 border border-neutral-200/60 transition-colors"
                      >
                        {c.name}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-neutral-500">
                      Found <strong className="text-neutral-900">{filteredProducts.length}</strong> items matching "{query}"
                    </span>
                    {filteredProducts.length > 0 && (
                      <button
                        onClick={handleSearchSubmit}
                        className="text-xs font-bold text-brand-accent hover:underline flex items-center gap-1"
                      >
                        View all results <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {filteredProducts.slice(0, 6).map((item) => (
                        <Link
                          key={item.id}
                          to={`/product/${item.id}`}
                          onClick={onClose}
                          className="flex items-center gap-3 p-2.5 rounded-md hover:bg-neutral-50 border border-transparent hover:border-neutral-200 transition-all duration-200"
                        >
                          <img
                            src={item.images[0]}
                            alt={item.name}
                            className="w-14 h-16 object-cover rounded bg-neutral-100 shrink-0"
                          />
                          <div className="overflow-hidden flex-1">
                            <span className="text-[10px] font-semibold tracking-wider text-neutral-400 uppercase block">
                              {item.category}
                            </span>
                            <h5 className="text-xs font-semibold text-neutral-900 truncate">
                              {item.name}
                            </h5>
                            <span className="text-xs font-bold text-neutral-800 mt-1 block">
                              ${item.price}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <ShoppingBag className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
                      <p className="text-sm font-semibold text-neutral-800">No products found</p>
                      <p className="text-xs text-neutral-500 mt-1">Try checking for spelling errors or searching another keyword.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
