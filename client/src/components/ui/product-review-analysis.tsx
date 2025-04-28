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
  const calculateAverageRating = (): number => {
    if (!ratings.length) return 0;

    const totalRating = ratings.reduce((acc, curr) => {
      return acc + ((curr.quality + curr.performance + curr.value) / 3);
    }, 0);

    return Number((totalRating / ratings.length).toFixed(1));
  };

  const averageRating = calculateAverageRating();

  return (
    <div className="flex items-center gap-2 p-2">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={cn(
              "text-lg",
              star <= averageRating ? "text-yellow-400" : "text-gray-300"
            )}
          >
            ★
          </span>
        ))}
      </div>
      <span className="text-sm text-gray-600">({averageRating})</span>
    </div>
  );
}