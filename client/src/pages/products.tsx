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

      {/* Product Categories */}
      <section className="py-12 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {productCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full font-medium transition-colors",
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-primary/10 dark:hover:bg-primary-dark/20"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
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
