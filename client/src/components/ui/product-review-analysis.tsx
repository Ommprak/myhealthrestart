
import React from 'react';
import { cn } from '@/lib/utils';

interface RatingAnalysis {
  quality: number;
  performance: number;
  value: number;
}

interface ProductReviewAnalysisProps {
  ratings: {
    quality: number;
    performance: number;
    value: number;
  }[];
}

export function ProductReviewAnalysis({ ratings }: ProductReviewAnalysisProps) {
  const calculateAverageRatings = (): RatingAnalysis => {
    if (!ratings.length) {
      return { quality: 0, performance: 0, value: 0 };
    }

    const sum = ratings.reduce((acc, curr) => ({
      quality: acc.quality + curr.quality,
      performance: acc.performance + curr.performance,
      value: acc.value + curr.value,
    }), { quality: 0, performance: 0, value: 0 });

    return {
      quality: Number((sum.quality / ratings.length).toFixed(1)),
      performance: Number((sum.performance / ratings.length).toFixed(1)),
      value: Number((sum.value / ratings.length).toFixed(1)),
    };
  };

  const averageRatings = calculateAverageRatings();

  const RatingStars = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={cn(
            "text-sm",
            star <= rating ? "text-yellow-400" : "text-gray-300"
          )}
        >
          ★
        </span>
      ))}
      <span className="ml-2 text-sm text-gray-600">({rating})</span>
    </div>
  );

  return (
    <div className="space-y-2 p-4 bg-white dark:bg-slate-800 rounded-lg shadow">
      <h3 className="text-sm font-medium mb-3">Rating Analysis</h3>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm">Quality</span>
          <RatingStars rating={averageRatings.quality} />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">Performance</span>
          <RatingStars rating={averageRatings.performance} />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">Value</span>
          <RatingStars rating={averageRatings.value} />
        </div>
      </div>
    </div>
  );
}
