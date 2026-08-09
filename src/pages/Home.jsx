import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, ChevronRight, Award, Compass } from 'lucide-react';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { motion } from 'framer-motion';

export const Home = () => {
  const bestSellers = products.filter((p) => p.featured).slice(0, 4);
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);

  return (
    <div className="space-y-20 pb-20">
      {/* HERO SECTION — Large Editorial Style */}
      <section className="relative min-h-[85vh] flex items-center bg-neutral-900 text-white overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop"
            alt="VÉRITÉ Autumn Winter Campaign"
            className="w-full h-full object-cover object-center opacity-60 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest text-brand-accent">
              <Sparkles className="w-3.5 h-3.5" /> Autumn / Winter 2026 Collection
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Designed for <br />
              <span className="italic font-normal text-brand-accent">Everyday Living.</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-xl">
              Thoughtfully crafted architectural essentials made for modern life. Spun from double-faced Italian virgin wool, Mongolian cashmere, and vegetable-tanned calfskin.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/shop"
                className="px-8 py-4 bg-white text-brand-dark text-xs font-bold uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-xl"
              >
                SHOP COLLECTION <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/shop?category=Outerwear"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-300 text-center"
              >
                EXPLORE NEW ARRIVALS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-1">
              Curated Wardrobe
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              Featured Categories
            </h2>
          </div>
          <Link
            to="/shop"
            className="mt-4 md:mt-0 text-xs font-bold text-neutral-800 hover:text-brand-accent tracking-widest uppercase flex items-center gap-1.5 transition-colors"
          >
            Browse All Categories <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                to={`/shop?category=${encodeURIComponent(cat.name)}`}
                className="group relative block aspect-[3/4] rounded-sm overflow-hidden bg-neutral-900 shadow-md"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-75 transition-all duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end">
                  <span className="text-[11px] font-semibold text-brand-accent uppercase tracking-widest">
                    {cat.count} Crafted Pieces
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight mt-1 flex items-center justify-between group-hover:text-brand-accent transition-colors">
                    {cat.name}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 line-clamp-1 font-light">
                    {cat.tagline}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BEST SELLERS PRODUCT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-1">
              Timeless Favorites
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              Best Sellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="mt-4 md:mt-0 text-xs font-bold text-neutral-800 hover:text-brand-accent tracking-widest uppercase flex items-center gap-1.5 transition-colors"
          >
            View Entire Shop <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* EDITORIAL / BRAND SECTION — "Less, but Better" */}
      <section className="bg-neutral-900 text-white py-20 my-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Image Stack */}
            <div className="relative">
              <div className="aspect-[4/5] bg-neutral-800 rounded-sm overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
                  alt="Atelier Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block w-56 aspect-square bg-brand-accent p-6 text-brand-dark shadow-xl rounded-sm">
                <Compass className="w-8 h-8 mb-3" />
                <span className="font-serif text-2xl font-bold block">100%</span>
                <span className="text-xs font-bold uppercase tracking-wider block">Traceable Italian Textiles</span>
              </div>
            </div>

            {/* Right Editorial Copy */}
            <div className="space-y-6 lg:pl-6">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">
                Our Atelier Philosophy
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                "Less, but Better."
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                VÉRITÉ was founded on a simple conviction: luxury should be felt in the weight of a seam, the softness of un-bleached cashmere, and the clean structure of an overcoat that endures for decades.
              </p>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                We work exclusively with family-owned mills in Biella and Tuscany, eliminating fast-fashion excess to focus on small-batch production runs.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-neutral-800">
                <div>
                  <h4 className="text-2xl font-serif font-bold text-white">14 Mills</h4>
                  <p className="text-xs text-neutral-400 mt-1">Artisanal partnerships across Italy & Peru</p>
                </div>
                <div>
                  <h4 className="text-2xl font-serif font-bold text-white">Zero Plastic</h4>
                  <p className="text-xs text-neutral-400 mt-1">100% biodegradable organic packaging</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent hover:bg-brand-accentDark text-white text-xs font-bold uppercase tracking-widest transition-colors shadow-lg"
                >
                  EXPLORE OUR STORY <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-1">
              Fresh Off The Atelier
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              New Season Arrivals
            </h2>
          </div>
          <Link
            to="/shop"
            className="mt-4 md:mt-0 text-xs font-bold text-neutral-800 hover:text-brand-accent tracking-widest uppercase flex items-center gap-1.5 transition-colors"
          >
            Explore All New Items <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* PROMOTIONAL BANNER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-sm overflow-hidden bg-neutral-900 min-h-[420px] flex items-center justify-center text-center p-8 sm:p-12 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop"
            alt="The New Season Campaign"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-brand-dark/40" />

          <div className="relative z-10 max-w-xl space-y-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase rounded-full">
              SEASONAL PROMOTION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              THE NEW SEASON
            </h2>
            <p className="text-sm sm:text-base text-neutral-200 font-light leading-relaxed">
              Explore our latest drop of heavyweight wool coats, cashmere high-necks, and tailored wide-leg trousers.
            </p>
            <div className="pt-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-dark text-xs font-bold uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all duration-300 shadow-xl"
              >
                DISCOVER NOW <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
