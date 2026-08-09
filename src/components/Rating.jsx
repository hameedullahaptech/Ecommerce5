import React from 'react';
import { Star } from 'lucide-react';

export const Rating = ({ value = 5, reviewsCount, showCount = true }) => {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center text-amber-400">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3.5 h-3.5 ${
              star <= Math.round(value)
                ? 'fill-amber-400 text-amber-400'
                : 'text-neutral-300 fill-neutral-200'
            }`}
          />
        ))}
      </div>
      {showCount && (
        <span className="text-xs text-neutral-500 font-medium tracking-tight">
          {value.toFixed(1)} {reviewsCount ? `(${reviewsCount})` : ''}
        </span>
      )}
    </div>
  );
};
