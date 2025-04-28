import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ProductRating } from "@/components/ui/product-rating";
import { formatPrice } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [showRating, setShowRating] = useState(false);

  const handleRatingSubmit = (rating: any) => {
    // Here you would typically make an API call to save the rating
    console.log('Rating submitted:', rating);
    setShowRating(false);
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
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`ri-star-${
                  i < product.rating ? "fill" : "line"
                } text-yellow-400 text-sm`}
              ></i>
            ))}
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-2"
            onClick={() => setShowRating(!showRating)}
          >
            Rate Product
          </Button>
        </div>
        {showRating && (
          <div className="mt-4">
            <ProductRating productId={product.id} onSubmit={handleRatingSubmit} />
          </div>
        )}
      </div>
    </div>
  );
}