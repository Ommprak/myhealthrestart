import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-700">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
        {product.badge && (
          <span className={`absolute top-2 right-2 bg-${product.badge.color} text-white text-xs font-bold px-2 py-1 rounded`}>
            {product.badge.text}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-heading font-semibold text-lg text-slate-800 dark:text-white mb-2">
          {product.name}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center mb-3">
          <div className="text-yellow-400 flex text-sm">
            {Array.from({ length: 5 }).map((_, i) => (
              <i 
                key={i} 
                className={
                  i < Math.floor(product.rating) 
                    ? "ri-star-fill" 
                    : i < product.rating 
                      ? "ri-star-half-fill" 
                      : "ri-star-line"
                }
              ></i>
            ))}
            <span className="text-slate-600 dark:text-slate-300 ml-1">
              ({product.reviewCount})
            </span>
          </div>
          <span className="text-slate-900 dark:text-white font-bold">
            {formatPrice(product.price)}
          </span>
        </div>
        <Button className="w-full" variant="default">
          View Details
        </Button>
      </div>
    </div>
  );
}
