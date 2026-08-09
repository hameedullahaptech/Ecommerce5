import React from 'react';
import { X, RotateCcw, Check, Star } from 'lucide-react';

export const FilterSidebar = ({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  minRating,
  setMinRating,
  onResetFilters,
  totalResults,
  isMobileDrawer = false,
  onCloseMobile = () => {},
}) => {
  const categories = ['All', 'Outerwear', 'Knitwear', 'Tailored Trousers', 'Accessories'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', '28', '30', '32', '34'];
  const colors = [
    { name: 'Black', hex: '#1C1C1E' },
    { name: 'White/Ivory', hex: '#F5F5F0' },
    { name: 'Beige/Camel', hex: '#D8C3A5' },
    { name: 'Gray/Charcoal', hex: '#737373' },
    { name: 'Navy/Blue', hex: '#1C2D42' },
    { name: 'Brown/Cognac', hex: '#8C4A27' },
  ];

  return (
    <div className={`space-y-8 ${isMobileDrawer ? 'p-6' : ''}`}>
      {/* Drawer Header for Mobile */}
      {isMobileDrawer && (
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
          <h3 className="text-base font-bold text-neutral-900 uppercase tracking-wider">
            Filters ({totalResults} items)
          </h3>
          <button
            onClick={onCloseMobile}
            className="p-1 text-neutral-400 hover:text-neutral-900 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Categories Filter */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-3">
          Category
        </h4>
        <div className="space-y-1.5">
          {categories.map((cat) => {
            const isSelected =
              cat === 'All'
                ? !selectedCategory || selectedCategory === 'All'
                : selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === 'All' ? '' : cat)}
                className={`w-full text-left px-3 py-2 text-xs font-semibold rounded transition-colors flex items-center justify-between ${
                  isSelected
                    ? 'bg-neutral-900 text-white font-bold'
                    : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                }`}
              >
                <span>{cat}</span>
                {isSelected && <Check className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range Slider */}
      <div className="pt-4 border-t border-neutral-200">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900">
            Price Range
          </h4>
          <span className="text-xs font-bold text-neutral-800">
            Up to ${priceRange}
          </span>
        </div>
        <input
          type="range"
          min="50"
          max="800"
          step="25"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-brand-dark"
        />
        <div className="flex justify-between text-[11px] font-medium text-neutral-400 mt-1">
          <span>$50</span>
          <span>$800</span>
        </div>
      </div>

      {/* Size Selector */}
      <div className="pt-4 border-t border-neutral-200">
        <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-3">
          Size
        </h4>
        <div className="flex flex-wrap gap-2">
          {sizes.map((sz) => {
            const isSelected = selectedSize === sz;
            return (
              <button
                key={sz}
                onClick={() => setSelectedSize(isSelected ? '' : sz)}
                className={`px-3 py-1.5 text-xs font-semibold rounded border transition-all ${
                  isSelected
                    ? 'bg-brand-dark text-white border-brand-dark'
                    : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-800'
                }`}
              >
                {sz}
              </button>
            );
          })}
        </div>
      </div>

      {/* Color Filter Swatches */}
      <div className="pt-4 border-t border-neutral-200">
        <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-3">
          Color
        </h4>
        <div className="grid grid-cols-3 gap-2">
          {colors.map((c) => {
            const isSelected = selectedColor === c.name;
            return (
              <button
                key={c.name}
                onClick={() => setSelectedColor(isSelected ? '' : c.name)}
                className={`flex items-center gap-2 p-1.5 rounded text-[11px] font-medium transition-all border ${
                  isSelected
                    ? 'border-brand-dark bg-neutral-100 font-bold'
                    : 'border-neutral-200/80 hover:border-neutral-400 text-neutral-600'
                }`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full border border-black/20 shrink-0"
                  style={{ backgroundColor: c.hex }}
                />
                <span className="truncate">{c.name.split('/')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Minimum Rating */}
      <div className="pt-4 border-t border-neutral-200">
        <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-3">
          Customer Rating
        </h4>
        <div className="space-y-1.5">
          {[4.8, 4.5, 4.0].map((rating) => {
            const isSelected = minRating === rating;
            return (
              <button
                key={rating}
                onClick={() => setMinRating(isSelected ? 0 : rating)}
                className={`w-full flex items-center justify-between p-2 rounded text-xs font-medium transition-colors ${
                  isSelected ? 'bg-amber-50 text-amber-900 font-bold border border-amber-200' : 'text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{rating}+ Rating & Above</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-amber-600" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={onResetFilters}
        className="w-full py-2.5 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        Reset All Filters
      </button>

      {isMobileDrawer && (
        <button
          onClick={onCloseMobile}
          className="w-full py-3 bg-brand-dark text-white text-xs font-bold uppercase tracking-widest rounded mt-4"
        >
          View Results ({totalResults})
        </button>
      )}
    </div>
  );
};
