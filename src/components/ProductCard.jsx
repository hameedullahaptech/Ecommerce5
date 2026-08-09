import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Rating } from './Rating';

export const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const isWishlisted = isInWishlist(product.id);
  const mainImage = product.images?.[0];
  const hoverImage = product.images?.[1] || mainImage;

  return (
    <div
      className="group relative flex flex-col bg-white border border-neutral-100 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Wrapper */}
      <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
          {product.badge && (
            <span className="px-2.5 py-1 text-[10px] font-semibold tracking-widest uppercase bg-brand-dark text-white rounded-xs shadow-sm">
              {product.badge}
            </span>
          )}
          {product.oldPrice && (
            <span className="px-2.5 py-1 text-[10px] font-semibold tracking-widest uppercase bg-rose-600 text-white rounded-xs shadow-sm">
              SAVE ${(product.oldPrice - product.price).toFixed(0)}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-3 right-3 z-10 p-2.5 rounded-full transition-all duration-300 shadow-sm ${
            isWishlisted
              ? 'bg-rose-50 text-rose-600'
              : 'bg-white/80 backdrop-blur-md text-neutral-700 hover:bg-white hover:text-brand-dark'
          }`}
          title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart className={`w-4 h-4 transition-transform duration-200 ${isWishlisted ? 'fill-rose-600 scale-110' : ''}`} />
        </button>

        {/* Image Transition Link */}
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={isHovered ? hoverImage : mainImage}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-all duration-700 ease-out transform group-hover:scale-105"
            loading="lazy"
          />
        </Link>

        {/* Action Overlay Bar on Hover */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 z-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 1);
            }}
            className="flex-1 py-2.5 px-3 bg-white text-brand-dark text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-brand-accent hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </button>
          <Link
            to={`/product/${product.id}`}
            className="p-2.5 bg-white/90 backdrop-blur-sm text-neutral-800 hover:bg-white hover:text-brand-dark rounded-xs transition-colors shadow-md"
            title="View Details"
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-white">
        <div>
          <span className="text-[11px] font-medium tracking-wider text-neutral-400 uppercase">
            {product.category}
          </span>
          <Link to={`/product/${product.id}`} className="block mt-1">
            <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-brand-accent transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
        </div>

        <div className="mt-3 flex items-center justify-between pt-2 border-t border-neutral-100">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-neutral-900 tracking-tight">
              ${product.price}
            </span>
            {product.oldPrice && (
              <span className="text-xs text-neutral-400 line-through">
                ${product.oldPrice}
              </span>
            )}
          </div>
          <Rating value={product.rating} reviewsCount={product.reviews} showCount={false} />
        </div>
      </div>
    </div>
  );
};
