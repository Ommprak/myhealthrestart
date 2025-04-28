
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
            "text-lg transition-colors",
            star <= ratings[category] ? "text-yellow-400" : "text-gray-300"
          )}
        >
          ★
        </button>
      ))}
    </div>
  );

  return (
    <div className="space-y-2 p-3 bg-white dark:bg-slate-800 rounded-lg shadow text-sm">
      <div className="space-y-2">
        <div className="flex justify-between items-center gap-2">
          <span className="font-medium text-xs">Quality</span>
          <RatingStars category="quality" />
        </div>
        <div className="flex justify-between items-center gap-2">
          <span className="font-medium text-xs">Performance</span>
          <RatingStars category="performance" />
        </div>
        <div className="flex justify-between items-center gap-2">
          <span className="font-medium text-xs">Value</span>
          <RatingStars category="value" />
        </div>
      </div>
      <Textarea
        placeholder="Share your experience..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full mt-2 text-xs h-20 resize-none"
      />
      <Button 
        onClick={handleSubmit}
        disabled={!ratings.quality || !ratings.performance || !ratings.value}
        className="w-full mt-2 text-xs py-1"
      >
        Submit Review
      </Button>
    </div>
  );
}
