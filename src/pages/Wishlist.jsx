import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Rating } from '../components/Rating';

export const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto">
          <Heart className="w-10 h-10 stroke-[1.5]" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-neutral-900">Your Wishlist is Empty</h1>
        <p className="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto font-light">
          Save your favorite architectural outerwear, cashmere tops, and leather accessories here to review later or move to your shopping bag.
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
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-neutral-200">
        <div>
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-1">
            Saved Wardrobe
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Wishlist ({wishlistItems.length})
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlistItems.map((product) => (
          <div
            key={product.id}
            className="group relative flex flex-col bg-white border border-neutral-200 rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Image */}
            <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm text-neutral-600 hover:text-rose-600 rounded-full shadow-sm transition-colors"
                title="Remove from wishlist"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            {/* Details & Actions */}
            <div className="p-4 flex flex-col flex-1 justify-between bg-white space-y-3">
              <div>
                <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
                  {product.category}
                </span>
                <Link to={`/product/${product.id}`} className="block mt-1">
                  <h3 className="text-sm font-bold text-neutral-900 hover:text-brand-accent transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                </Link>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm font-bold text-neutral-900">${product.price}</span>
                  <Rating value={product.rating} showCount={false} />
                </div>
              </div>

              <button
                onClick={() => {
                  addToCart(product, 1);
                  removeFromWishlist(product.id);
                }}
                className="w-full py-2.5 bg-brand-dark hover:bg-brand-accent text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-3.5 h-3.5" /> Move to Bag
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
