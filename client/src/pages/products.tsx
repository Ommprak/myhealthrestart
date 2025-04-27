import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/layout/page-header";
import ProductCard from "@/components/ui/product-card";
import { products, productCategories } from "@/data/products";
import { cn } from "@/lib/utils";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [visibleProducts, setVisibleProducts] = useState(8);

  const filteredProducts = selectedCategory === "All Products" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const displayedProducts = filteredProducts.slice(0, visibleProducts);

  const loadMoreProducts = () => {
    setVisibleProducts(prev => prev + 4);
  };

  return (
    <div>
      <PageHeader 
        title="Our Premium Products" 
        subtitle="Discover our extensive range of high-quality medicines and healthcare products."
        accentWord="Products"
      />

      {/* Products Section */}
      <section className="py-12 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map((product, index) => (
              <div
                key={product.id}
                className="opacity-0"
                style={{ 
                  animation: 'slideUp 0.8s ease-out forwards',
                  animationDelay: `${index * 0.15}s` 
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {visibleProducts < filteredProducts.length && (
            <div className="mt-12 flex justify-center">
              <Button onClick={loadMoreProducts} className="px-6 py-3 shadow-md hover:shadow-lg">
                Load More Products
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
