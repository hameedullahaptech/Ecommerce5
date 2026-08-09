import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-20 h-20 rounded-full bg-neutral-100 flex items-center justify-center mx-auto text-brand-dark">
        <Compass className="w-10 h-10 stroke-[1.5]" />
      </div>
      <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block">
        Error 404 — Page Not Found
      </span>
      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight">
        The Page You Are Seeking Does Not Exist
      </h1>
      <p className="text-xs sm:text-sm text-neutral-500 font-light max-w-md mx-auto leading-relaxed">
        The page you requested may have been relocated, renamed, or is temporarily unavailable.
      </p>
      <div className="pt-4 flex justify-center gap-4">
        <Link
          to="/"
          className="px-8 py-3.5 bg-brand-dark text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-brand-accent transition-colors shadow-md flex items-center gap-2"
        >
          Return Home <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/shop"
          className="px-8 py-3.5 bg-white border border-neutral-300 text-neutral-800 text-xs font-bold uppercase tracking-widest rounded hover:bg-neutral-100 transition-colors"
        >
          Browse Shop
        </Link>
      </div>
    </div>
  );
};
