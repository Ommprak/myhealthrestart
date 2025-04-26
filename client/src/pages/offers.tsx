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

      {/* Subscription Offer */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark rounded-xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12">
                <span className="inline-block bg-white dark:bg-slate-200 text-primary dark:text-primary-dark px-4 py-1 rounded-full text-sm font-bold mb-4">
                  BEST VALUE
                </span>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
                  Monthly Wellness Subscription
                </h3>
                <p className="text-white/90 mb-6">
                  Subscribe to your favorite products and save 20% on every order. Plus, get free shipping and exclusive subscriber-only offers.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-white/90">
                    <i className="ri-checkbox-circle-fill text-white mt-1 mr-2"></i>
                    <span>20% discount on all subscription products</span>
                  </li>
                  <li className="flex items-start text-white/90">
                    <i className="ri-checkbox-circle-fill text-white mt-1 mr-2"></i>
                    <span>Free shipping on all orders</span>
                  </li>
                  <li className="flex items-start text-white/90">
                    <i className="ri-checkbox-circle-fill text-white mt-1 mr-2"></i>
                    <span>Flexible delivery schedule</span>
                  </li>
                  <li className="flex items-start text-white/90">
                    <i className="ri-checkbox-circle-fill text-white mt-1 mr-2"></i>
                    <span>Cancel or modify anytime</span>
                  </li>
                </ul>
                <Button className="bg-white hover:bg-slate-100 text-primary">
                  Start Subscription
                </Button>
              </div>
              <div className="md:w-1/2 bg-white dark:bg-slate-800 p-8 md:p-12">
                <h4 className="font-heading font-semibold text-xl text-slate-800 dark:text-white mb-6">
                  Most Popular Subscription Items
                </h4>
                <div className="space-y-4">
                  {subscriptionItems.map((item, index) => (
                    <div key={index} className="flex items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <div className="w-12 h-12 bg-primary/10 dark:bg-primary-dark/20 rounded-full flex items-center justify-center text-primary dark:text-primary-light mr-4">
                        <i className={item.icon + " text-xl"}></i>
                      </div>
                      <div>
                        <p className="font-medium text-slate-800 dark:text-white">
                          {item.name}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
