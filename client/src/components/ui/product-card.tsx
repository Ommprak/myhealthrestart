import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ProductRating } from "@/components/ui/product-rating";
import { ProductReviewAnalysis } from "@/components/ui/product-review-analysis";
import { formatPrice } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [productRatings, setProductRatings] = useState(product.ratings || []);

  const handleRatingSubmit = (rating: any) => {
    const newRating = {
      quality: rating.quality,
      performance: rating.performance,
      value: rating.value,
      comment: rating.comment,
      date: new Date().toLocaleDateString()
    };
    setProductRatings([...productRatings, newRating]);
    setShowRating(false);
  };

  const calculateAverageRating = (ratings: any[]) => {
    if (!ratings.length) return 0;
    return ratings.reduce((acc, curr) => 
      acc + (curr.quality + curr.performance + curr.value) / 3, 0
    ) / ratings.length;
  };

  return (
    <div className="group relative w-full rounded-lg border p-2">
      <div className="relative w-full pb-[100%]">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-contain cursor-pointer rounded-lg hover:scale-105 transition-transform"
          onClick={() => setIsImageOpen(true)}
        />
      </div>
      {isImageOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsImageOpen(false)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
      <div className="mt-4 flex flex-col gap-2">
        <div>
          <h3 className="text-sm text-gray-700 dark:text-gray-200">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {product.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-sm text-gray-600">Rating: {product.rating}/5</span>
          </div>
        </div>
        <div className="mt-4">
          <ProductReviewAnalysis ratings={productRatings} />
        </div>
        {showRating && (
          <div className="mt-4">
            <ProductRating productId={product.id} onSubmit={handleRatingSubmit} />
          </div>
        )}
        <div className="mt-4 space-y-4">
            {productRatings.map((rating, index) => (
              <div key={index} className="border rounded p-3 space-y-2">
                <div className="flex justify-between">
                  <div className="text-sm font-medium">Rating Summary:</div>
                  <div className="text-sm text-gray-500">{rating.date}</div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>Quality: {rating.quality}★</div>
                  <div>Performance: {rating.performance}★</div>
                  <div>Value: {rating.value}★</div>
                </div>
                {rating.comment && (
                  <div className="text-sm text-gray-600">
                    "{rating.comment}"
                  </div>
                )}
              </div>
            ))}
            {productRatings.length === 0 && (
              <div className="text-center text-gray-500 text-sm">
                No reviews yet
              </div>
            )}
          </div>
      </div>
    </div>
  );
}