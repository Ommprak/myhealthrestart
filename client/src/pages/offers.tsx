
import PageHeader from "@/components/layout/page-header";

export default function Offers() {
  return (
    <div>
      <PageHeader 
        title="Special Offers & Promotions" 
        subtitle="Discover exclusive deals and discounts on our premium healthcare products."
        accentWord="Offers"
      />

      <section className="py-12 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-slate-600 dark:text-slate-300">
              Check back soon for new offers and promotions!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
