
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ProductReviewAnalysisProps {
  productId: number;
  onRatingSubmit?: (rating: number) => void;
}

export function ProductReviewAnalysis({ productId, onRatingSubmit }: ProductReviewAnalysisProps) {
  const [reviews, setReviews] = useState<any[]>([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    fetchReviews();
  }, [productId]);

  const fetchReviews = async () => {
    try {
      const response = await fetch(`/api/reviews/${productId}`);
      const data = await response.json();
      setReviews(data);
      calculateAverageRating(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const calculateAverageRating = (reviewData: any[]) => {
    if (reviewData.length === 0) return;
    const avg = reviewData.reduce((acc, curr) => 
      acc + ((curr.quality + curr.performance + curr.value) / 3), 0
    ) / reviewData.length;
    setAverageRating(Number(avg.toFixed(1)));
  };

  const handleStarClick = async (starIndex: number) => {
    if (onRatingSubmit) {
      const rating = starIndex + 1;
      try {
        await fetch(`/api/reviews/${productId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            quality: rating,
            performance: rating,
            value: rating
          })
        });
        onRatingSubmit(rating);
        fetchReviews();
      } catch (error) {
        console.error('Error submitting review:', error);
      }
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 p-2">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((starIndex) => (
            <button
              key={starIndex}
              onClick={() => handleStarClick(starIndex)}
              className="bg-transparent border-none p-0 cursor-pointer"
            >
              <span className={cn(
                "text-lg",
                starIndex < averageRating ? "text-yellow-400" : "text-gray-300"
              )}>★</span>
            </button>
          ))}
        </div>
        <span className="text-sm text-gray-600">({averageRating.toFixed(1)})</span>
      </div>
      <div className="text-sm text-gray-500">
        {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}
      </div>
    </div>
  );
}
