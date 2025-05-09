import { Product } from "@/data/products";
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      <div className="group relative w-full rounded-lg border p-2 bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-shadow overflow-hidden">
        {/* Product Image */}
        <div className="relative w-full pb-[100%]">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-contain cursor-pointer rounded-lg hover:scale-105 transition-transform"
            onClick={() => setIsImageOpen(true)}
          />
        </div>

        {/* Product Details */}
        <div className="mt-4 flex flex-col gap-2">
          {/* Product Name */}
          <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">
            {product.name}
          </h3>

          {/* Product Description */}
          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
            {product.description}
          </p>

          {/* Price */}
          <div className="text-base font-bold text-green-600 dark:text-green-400">
            ₹{product.price.toFixed(2)}
          </div>

          {/* Rating and Sold Quantity */}
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`ri-star-${i < product.rating ? "fill" : "line"} text-yellow-400 text-sm`}
                ></i>
              ))}
              <span className="ml-1">({product.rating})</span>
            </div>
            <span>{product.sold} left</span>
          </div>
        </div>
      </div>

      {/* Full-Screen Image Modal */}
      {isImageOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-4"
          onClick={() => setIsImageOpen(false)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}
    </>
  );
}