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
            src={product.images[0]} // show first image by default
            alt={product.name}
            className="absolute inset-0 h-full w-full object-contain cursor-pointer rounded-lg hover:scale-105 transition-transform"
            onClick={() => setIsImageOpen(true)}
          />
        </div>

        {/* Product Details */}
        <div className="mt-4 flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
            {product.description}
          </p>
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
          <div
            className="flex gap-4 overflow-auto max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking on image area
          >
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.name} ${idx + 1}`}
                className="max-h-[80vh] max-w-[90vw] object-contain rounded"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
