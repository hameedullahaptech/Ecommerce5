import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, Grid, Search, X } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { FilterSidebar } from '../components/FilterSidebar';
import { motion, AnimatePresence } from 'framer-motion';

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryParam = searchParams.get('category') || '';
  const searchParam = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState(searchParam);
  const [priceRange, setPriceRange] = useState(800);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    setSearchQuery(searchParam);
  }, [searchParam]);

  // Combined real-time filter logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (selectedCategory && selectedCategory !== 'All') {
          if (p.category.toLowerCase() !== selectedCategory.toLowerCase()) {
            return false;
          }
        }
        // Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matches =
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q);
          if (!matches) return false;
        }
        // Price filter
        if (p.price > priceRange) return false;

        // Size filter
        if (selectedSize) {
          if (!p.sizes.includes(selectedSize)) return false;
        }

        // Color filter
        if (selectedColor) {
          const hasColor = p.colors.some((c) =>
            c.name.toLowerCase().includes(selectedColor.toLowerCase().split('/')[0])
          );
          if (!hasColor) return false;
        }

        // Rating filter
        if (minRating > 0 && p.rating < minRating) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        return 0; // featured default
      });
  }, [selectedCategory, searchQuery, priceRange, selectedColor, selectedSize, minRating, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('');
    setSearchQuery('');
    setPriceRange(800);
    setSelectedColor('');
    setSelectedSize('');
    setMinRating(0);
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Shop Header Banner */}
      <div className="mb-8 pb-8 border-b border-neutral-200">
        <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-1">
          Catalog & Collections
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-neutral-900 tracking-tight">
          {selectedCategory ? selectedCategory : 'Shop All Collections'}
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 mt-2 max-w-xl font-light">
          Discover modern luxury apparel engineered for seamless everyday wear. Filter by category, fit, material, and price.
        </p>

        {/* Active Search / Category Filter Pill tags */}
        {(selectedCategory || searchQuery || selectedColor || selectedSize || minRating > 0) && (
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-neutral-100">
            <span className="text-xs text-neutral-400 font-medium">Active Filters:</span>
            {selectedCategory && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-900 text-white text-xs font-medium rounded-full">
                Category: {selectedCategory}
                <button onClick={() => setSelectedCategory('')}><X className="w-3.5 h-3.5" /></button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-900 text-white text-xs font-medium rounded-full">
                Search: "{searchQuery}"
                <button onClick={() => setSearchQuery('')}><X className="w-3.5 h-3.5" /></button>
              </span>
            )}
            {selectedSize && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-900 text-white text-xs font-medium rounded-full">
                Size: {selectedSize}
                <button onClick={() => setSelectedSize('')}><X className="w-3.5 h-3.5" /></button>
              </span>
            )}
            {selectedColor && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-900 text-white text-xs font-medium rounded-full">
                Color: {selectedColor}
                <button onClick={() => setSelectedColor('')}><X className="w-3.5 h-3.5" /></button>
              </span>
            )}
            <button
              onClick={handleResetFilters}
              className="text-xs text-rose-600 underline font-semibold hover:text-rose-800 ml-2"
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* Control Bar: Mobile Filter Button & Sorting */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 bg-neutral-50 p-4 rounded border border-neutral-200/80">
        <div className="flex items-center justify-between sm:justify-start gap-4">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden px-4 py-2.5 bg-brand-dark text-white text-xs font-bold uppercase tracking-wider rounded flex items-center gap-2 shadow-xs"
          >
            <SlidersHorizontal className="w-4 h-4" /> Filter Products ({filteredProducts.length})
          </button>

          <span className="text-xs font-semibold text-neutral-600">
            Showing <strong className="text-neutral-900">{filteredProducts.length}</strong> of {products.length} products
          </span>
        </div>

        {/* Search & Sort dropdown */}
        <div className="flex items-center gap-3">
          {/* Search Input inline */}
          <div className="relative flex-1 sm:w-64">
            <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search catalog..."
              className="w-full bg-white border border-neutral-300 rounded pl-9 pr-3 py-2 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-800"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 shrink-0">
            <label htmlFor="sort-by" className="text-xs text-neutral-500 font-medium hidden sm:inline">Sort:</label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-neutral-300 text-neutral-900 text-xs font-semibold rounded px-3 py-2 focus:outline-none focus:border-brand-dark cursor-pointer"
            >
              <option value="featured">Featured Items</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid Layout: Desktop Sidebar + Product Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Desktop Filter Sidebar */}
        <aside className="hidden lg:block lg:col-span-1 border-r border-neutral-200 pr-6">
          <FilterSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            minRating={minRating}
            setMinRating={setMinRating}
            onResetFilters={handleResetFilters}
            totalResults={filteredProducts.length}
          />
        </aside>

        {/* Product Cards Grid */}
        <main className="lg:col-span-3">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-neutral-200 rounded p-12 text-center max-w-md mx-auto my-8 space-y-4 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mx-auto text-neutral-400">
                <Grid className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">No matching products found</h3>
              <p className="text-xs text-neutral-500 font-light">
                We couldn't find any items matching your selected criteria. Try adjusting your filters or price range.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-6 py-3 bg-brand-dark text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-brand-accent transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Drawer Filter */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-brand-dark/70 backdrop-blur-xs"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="fixed inset-x-0 bottom-0 max-h-[85vh] bg-white rounded-t-xl overflow-y-auto shadow-2xl z-10"
            >
              <FilterSidebar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                minRating={minRating}
                setMinRating={setMinRating}
                onResetFilters={handleResetFilters}
                totalResults={filteredProducts.length}
                isMobileDrawer={true}
                onCloseMobile={() => setIsMobileFilterOpen(false)}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
