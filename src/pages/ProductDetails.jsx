import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Heart,
  ShoppingBag,
  Share2,
  ShieldCheck,
  Truck,
  RotateCcw,
  Check,
  ChevronRight,
  Plus,
  Minus,
  Star,
  Sparkles,
  Info
} from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';
import { Rating } from '../components/Rating';
import { ProductCard } from '../components/ProductCard';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id) || products[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  const { addToCart, setIsCartOpen } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToast } = useToast();

  useEffect(() => {
    setActiveImageIndex(0);
    if (product.colors?.[0]) setSelectedColor(product.colors[0].name);
    if (product.sizes?.[0]) setSelectedSize(product.sizes[0]);
    setQuantity(1);
  }, [id, product]);

  const isWishlisted = isInWishlist(product.id);
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    setIsCartOpen(true);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      addToast('Product URL copied to clipboard.', 'info');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
        <Link to="/" className="hover:text-neutral-900 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/shop" className="hover:text-neutral-900 transition-colors">Shop</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-neutral-900 transition-colors">
          {product.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-neutral-900 font-bold truncate max-w-[200px]">{product.name}</span>
      </nav>

      {/* Main Grid: Left Gallery | Right Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Column: Image Gallery (Thumbnails + Large Preview) */}
        <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
          {/* Thumbnails list */}
          <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto no-scrollbar shrink-0">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`w-20 aspect-[3/4] rounded-xs overflow-hidden border-2 transition-all shrink-0 ${
                  activeImageIndex === idx
                    ? 'border-brand-dark shadow-md scale-95'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`${product.name} preview ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Large Main Image Preview */}
          <div className="relative flex-1 aspect-[3/4] bg-neutral-100 rounded-sm overflow-hidden border border-neutral-200/60 shadow-lg">
            <img
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-all duration-500"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 bg-brand-dark text-white text-[10px] font-bold tracking-widest uppercase rounded-xs shadow-md">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Right Column: Product Metadata & Purchasing Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Category & Rating */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">
                {product.category}
              </span>
              <Rating value={product.rating} reviewsCount={product.reviews} />
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 pt-1">
              <span className="text-2xl font-bold text-neutral-900 tracking-tight">
                ${product.price}
              </span>
              {product.oldPrice && (
                <>
                  <span className="text-base text-neutral-400 line-through">
                    ${product.oldPrice}
                  </span>
                  <span className="px-2 py-0.5 bg-rose-100 text-rose-800 text-[11px] font-bold rounded">
                    SAVE ${(product.oldPrice - product.price).toFixed(0)}
                  </span>
                </>
              )}
            </div>

            {/* Short Description */}
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed pt-2 border-t border-neutral-200">
              {product.description}
            </p>

            {/* Color Swatch Selection */}
            {product.colors && (
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold uppercase tracking-wider text-neutral-900">
                    Color: <span className="font-normal text-neutral-600">{selectedColor}</span>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {product.colors.map((c) => {
                    const isSelected = selectedColor === c.name;
                    return (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`group relative p-1 rounded-full border-2 transition-all ${
                          isSelected ? 'border-brand-dark scale-110' : 'border-transparent hover:border-neutral-300'
                        }`}
                        title={c.name}
                      >
                        <span
                          className="block w-6 h-6 rounded-full border border-black/10 shadow-xs"
                          style={{ backgroundColor: c.hex }}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {product.sizes && (
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold uppercase tracking-wider text-neutral-900">
                    Select Size:
                  </span>
                  <button className="text-neutral-500 hover:text-neutral-900 underline flex items-center gap-1 text-[11px]">
                    <Info className="w-3 h-3" /> Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                  {product.sizes.map((sz) => {
                    const isSelected = selectedSize === sz;
                    return (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`py-2.5 text-xs font-bold uppercase rounded-xs border transition-all ${
                          isSelected
                            ? 'bg-brand-dark text-white border-brand-dark shadow-sm'
                            : 'bg-white text-neutral-800 border-neutral-300 hover:border-neutral-800'
                        }`}
                      >
                        {sz}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Stepper & Stock */}
            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                  Quantity:
                </span>
                <div className="flex items-center border border-neutral-300 rounded">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2 hover:bg-neutral-100 text-neutral-700 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-xs font-bold text-neutral-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2 hover:bg-neutral-100 text-neutral-700 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Stock Indicator */}
              <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1 rounded">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                In Stock ({product.stock} left)
              </span>
            </div>

            {/* Primary Action Buttons: Add to Cart, Buy Now, Wishlist */}
            <div className="pt-4 space-y-3">
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 bg-brand-dark hover:bg-brand-accent text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
                >
                  <ShoppingBag className="w-4 h-4" /> ADD TO BAG
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-4 rounded-xs border transition-all ${
                    isWishlisted
                      ? 'bg-rose-50 text-rose-600 border-rose-200'
                      : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-900'
                  }`}
                  title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-600' : ''}`} />
                </button>

                <button
                  onClick={handleShare}
                  className="p-4 bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-900 rounded-xs transition-all"
                  title="Share product"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={handleBuyNow}
                className="w-full py-3.5 bg-brand-accent hover:bg-brand-accentDark text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-colors shadow-md"
              >
                BUY IT NOW
              </button>
            </div>
          </div>

          {/* Guarantee Badges */}
          <div className="pt-6 border-t border-neutral-200 grid grid-cols-3 gap-2 text-center text-[11px] text-neutral-600 font-medium">
            <div className="flex flex-col items-center gap-1">
              <Truck className="w-4 h-4 text-brand-accent" />
              <span>Express Delivery</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <RotateCcw className="w-4 h-4 text-brand-accent" />
              <span>30-Day Returns</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-brand-accent" />
              <span>Italian Textiles</span>
            </div>
          </div>
        </div>
      </div>

      {/* LOWER SECTION: Accordion / Tabs for Specifications, Shipping, Reviews */}
      <div className="border-t border-neutral-200 pt-12">
        {/* Tab Headers */}
        <div className="flex border-b border-neutral-200 overflow-x-auto no-scrollbar gap-8">
          {[
            { id: 'details', label: 'Material & Details' },
            { id: 'shipping', label: 'Shipping & Returns' },
            { id: 'reviews', label: `Reviews (${product.reviews})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap border-b-2 ${
                activeTab === tab.id
                  ? 'border-brand-dark text-neutral-900'
                  : 'border-transparent text-neutral-400 hover:text-neutral-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="py-8 max-w-3xl">
          {activeTab === 'details' && (
            <div className="space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              <p>{product.description}</p>
              <ul className="space-y-2 pt-2 text-neutral-800 font-medium">
                <li>• <strong>Composition:</strong> {product.details?.material || '100% Fine Organic Fiber'}</li>
                <li>• <strong>Lining / Hardware:</strong> {product.details?.lining || product.details?.hardware || 'Custom Satin / Brass'}</li>
                <li>• <strong>Silhouette & Fit:</strong> {product.details?.fit || 'Regular tailored fit.'}</li>
                <li>• <strong>Care Instructions:</strong> {product.details?.care || 'Dry clean only.'}</li>
              </ul>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className="space-y-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              <p>
                <strong>Complimentary Express Shipping:</strong> Orders over $300 qualify for free DHL Express 2-3 business day delivery with signature confirmation.
              </p>
              <p>
                <strong>Hassle-Free 30-Day Returns:</strong> If you are not completely satisfied with your purchase, you may request a prepaid courier return label within 30 days of receiving your item.
              </p>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded border border-neutral-200">
                <div className="text-center pr-6 border-r border-neutral-200">
                  <span className="font-serif text-3xl font-bold text-neutral-900">{product.rating}</span>
                  <div className="mt-1">
                    <Rating value={product.rating} showCount={false} />
                  </div>
                  <span className="text-[10px] text-neutral-500 block mt-1">{product.reviews} Verified Reviews</span>
                </div>
                <div className="text-xs text-neutral-600 space-y-1">
                  <p>98% of customers recommended this product for fit and material weight.</p>
                  <p className="text-emerald-700 font-medium">✓ Certified Authentic Purchase</p>
                </div>
              </div>

              {/* Sample Review */}
              <div className="border-b border-neutral-200 pb-4 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-neutral-900">Julian M.</span>
                    <Rating value={5} showCount={false} />
                  </div>
                  <span className="text-neutral-400">2 weeks ago</span>
                </div>
                <p className="text-neutral-600">
                  "Exceeded all my expectations. The fabric drape and stitching precision are indistinguishable from coats costing three times as much. Truly architectural luxury."
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* RELATED PRODUCTS GRID */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-neutral-200 pt-16">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-8">
            Complete The Look
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
