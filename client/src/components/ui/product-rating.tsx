
import React, { useState } from 'react';
import { Button } from './button';
import { Textarea } from './textarea';
import { cn } from '@/lib/utils';

interface RatingProps {
  productId: number;
  onSubmit: (rating: {
    quality: number;
    performance: number;
    value: number;
    comment: string;
  }) => void;
}

export function ProductRating({ productId, onSubmit }: RatingProps) {
  const [ratings, setRatings] = useState({
    quality: 0,
    performance: 0,
    value: 0
  });
  const [comment, setComment] = useState('');

  const handleRatingClick = (category: keyof typeof ratings, value: number) => {
    setRatings(prev => ({ ...prev, [category]: value }));
  };

  const handleSubmit = () => {
    onSubmit({
      ...ratings,
      comment
    });
    setRatings({ quality: 0, performance: 0, value: 0 });
    setComment('');
  };

  const RatingStars = ({ category }: { category: keyof typeof ratings }) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => handleRatingClick(category, star)}
          className={cn(
            "text-2xl transition-colors",
            star <= ratings[category] ? "text-yellow-400" : "text-gray-300"
          )}
        >
          ★
        </button>
      ))}
    </div>
  );

  return (
    <div className="space-y-4 p-4 bg-white dark:bg-slate-800 rounded-lg shadow">
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="font-medium">Quality</span>
          <RatingStars category="quality" />
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Performance</span>
          <RatingStars category="performance" />
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Value for Money</span>
          <RatingStars category="value" />
        </div>
      </div>
      <Textarea
        placeholder="Share your experience with this product..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full mt-4"
      />
      <Button 
        onClick={handleSubmit}
        disabled={!ratings.quality || !ratings.performance || !ratings.value}
        className="w-full mt-4"
      >
        Submit Review
      </Button>
    </div>
  );
}
