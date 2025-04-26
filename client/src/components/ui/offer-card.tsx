import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Offer } from "@/data/offers";

interface OfferCardProps {
  offer: Offer;
}

export default function OfferCard({ offer }: OfferCardProps) {
  return (
    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg overflow-hidden shadow-lg border border-primary/20 dark:border-primary-light/20">
      <div className="relative">
        <img 
          src={offer.image}
          alt={offer.title} 
          className="w-full h-48 object-cover" 
        />
        {offer.discount && (
          <div className="absolute top-4 right-4 bg-accent text-white text-lg font-bold px-4 py-2 rounded-full">
            {offer.discount}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-heading font-bold text-2xl text-slate-800 dark:text-white mb-3">
          {offer.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          {offer.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="mb-4 sm:mb-0">
            {offer.originalPrice && (
              <>
                <span className="text-slate-400 dark:text-slate-500 line-through text-lg">
                  {formatPrice(offer.originalPrice)}
                </span>
                <span className="text-accent dark:text-accent-light font-bold text-2xl ml-2">
                  {formatPrice(offer.currentPrice)}
                </span>
              </>
            )}
            {offer.couponCode && (
              <span className="px-3 py-1 bg-slate-200 dark:bg-slate-600 rounded font-mono">
                {offer.couponCode}
              </span>
            )}
          </div>
          <Button variant="default" className="w-full sm:w-auto">
            {offer.buttonText}
          </Button>
        </div>
        {offer.expiry && (
          <div className="mt-4 flex items-center text-slate-500 dark:text-slate-400">
            <i className="ri-time-line mr-2"></i>
            <span>{offer.expiry}</span>
          </div>
        )}
      </div>
    </div>
  );
}
