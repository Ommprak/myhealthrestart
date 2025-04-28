import PageHeader from "@/components/layout/page-header";
import OfferCard from "@/components/ui/offer-card";
import { Button } from "@/components/ui/button";
import { offers, subscriptionItems } from "@/data/offers";

export default function Offers() {
  return (
    <div>
      <PageHeader 
        title="Special Offers & Promotions" 
        subtitle="Discover exclusive deals and discounts on our premium healthcare products."
        accentWord="Offers"
      />

      {/* Current Offers */}
      <section className="py-12 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.map(offer => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}
