import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/layout/page-header";
import TestimonialCard from "@/components/ui/testimonial-card";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [visibleTestimonials, setVisibleTestimonials] = useState(6);

  const displayedTestimonials = testimonials.slice(0, visibleTestimonials);

  const loadMoreTestimonials = () => {
    setVisibleTestimonials(prev => Math.min(prev + 3, testimonials.length));
  };

  return (
    <div>
      <PageHeader 
        title="What Our Customers Say" 
        subtitle="Read testimonials from healthcare professionals and patients who trust our products."
        accentWord="Customers"
      />

      

      {/* Video Testimonial */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-slate-800 dark:text-white mb-4">
              Video Testimonials
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Hear directly from healthcare professionals about their experience with our products.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
            <div className="aspect-w-16 aspect-h-9 bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                    <i className="ri-play-fill text-2xl"></i>
                  </div>
                  <p className="text-slate-700 dark:text-slate-200">
                    Video Testimonial from Dr. Robert Williams
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
