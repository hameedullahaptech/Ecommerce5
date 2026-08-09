import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, Feather, Globe } from 'lucide-react';

export const About = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center bg-neutral-900 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1800&auto=format&fit=crop"
          alt="VÉRITÉ Atelier Heritage"
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-3">
            Established 2021 — Biella & New York
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-2xl leading-tight">
            Architectural Apparel for Modern Living.
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 font-light max-w-xl mt-4 leading-relaxed">
            VÉRITÉ was founded to bridge the space between bespoke Italian tailoring and modern minimalist outerwear.
          </p>
        </div>
      </section>

      {/* Brand Story & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">
              The Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              Crafted with Uncompromising Rigor
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Every garment in our collection is cut with architectural precision. We prioritize clean lines, natural wool drapes, and un-dyed organic fibers over fleeting seasonal trends.
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Our wool is milled in Biella, Italy, while our full-grain leather is vegetable-tanned in Santa Croce sull'Arno. We produce in small limited-edition runs to eliminate excess inventory and honor artisanal handcraft.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop"
              alt="Atelier detail"
              className="rounded aspect-[3/4] object-cover shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"
              alt="Model garment"
              className="rounded aspect-[3/4] object-cover shadow-md mt-8"
            />
          </div>
        </div>
      </section>

      {/* Statistics Counter */}
      <section className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <span className="font-serif text-4xl sm:text-5xl font-bold text-brand-accent block">14</span>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mt-2 block">Artisanal Italian Mills</span>
          </div>
          <div>
            <span className="font-serif text-4xl sm:text-5xl font-bold text-brand-accent block">100%</span>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mt-2 block">Traceable Wool & Cashmere</span>
          </div>
          <div>
            <span className="font-serif text-4xl sm:text-5xl font-bold text-brand-accent block">30+</span>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mt-2 block">Countries Shipped</span>
          </div>
          <div>
            <span className="font-serif text-4xl sm:text-5xl font-bold text-brand-accent block">4.9/5</span>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mt-2 block">Client Satisfaction</span>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">Our Guiding Pillars</span>
          <h2 className="font-serif text-3xl font-bold text-neutral-900">What Defines VÉRITÉ</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-neutral-50 rounded border border-neutral-200/80 space-y-4">
            <Feather className="w-8 h-8 text-brand-accent" />
            <h3 className="text-base font-bold text-neutral-900">Natural Luxury Fabrics</h3>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              We exclusively use extra-fine merino wool, Peruvian baby alpaca, and Mongolian cashmere for natural breathability and longevity.
            </p>
          </div>

          <div className="p-8 bg-neutral-50 rounded border border-neutral-200/80 space-y-4">
            <Globe className="w-8 h-8 text-brand-accent" />
            <h3 className="text-base font-bold text-neutral-900">Ethical Sourcing</h3>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Fair labor practices across every partner workshop, with transparent supply chains and zero synthetic micro-plastics.
            </p>
          </div>

          <div className="p-8 bg-neutral-50 rounded border border-neutral-200/80 space-y-4">
            <ShieldCheck className="w-8 h-8 text-brand-accent" />
            <h3 className="text-base font-bold text-neutral-900">Timeless Utility</h3>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Silhouettes designed to outlast seasonal trends, developing rich character and patina with every wear over years.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-neutral-100 p-12 rounded border border-neutral-200 space-y-4 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-neutral-900">Experience VÉRITÉ</h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-light">
            Discover our latest Autumn/Winter collection engineered for modern life.
          </p>
          <div className="pt-2">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-dark text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-brand-accent transition-colors shadow-md"
            >
              Shop The Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
