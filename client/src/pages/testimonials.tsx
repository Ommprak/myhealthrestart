
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

      {/* Photo Testimonials Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-2xl text-slate-800 dark:text-white mb-8 text-center">
            Photo Testimonials
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="aspect-square relative group">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <span className="text-white font-heading text-sm">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-2xl text-slate-800 dark:text-white mb-8 text-center">
            Video Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-slate-200 dark:bg-slate-700">
                <iframe 
                  src="https://www.youtube.com/embed/sample1" 
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-slate-800 dark:text-white mb-2">
                  Dr. Sarah Johnson's Experience
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Chief Medical Officer shares her experience with our products
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-slate-200 dark:bg-slate-700">
                <iframe 
                  src="https://www.youtube.com/embed/sample2" 
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-slate-800 dark:text-white mb-2">
                  Patient Success Story
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Rebecca Martin shares her journey to better health
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
