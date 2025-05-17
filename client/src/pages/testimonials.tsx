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
      <section className="px-4 md:px-12 py-16 bg-[#020617]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7Dgn4lSDUt0?si=toQdB2-z6d6joKjV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-slate-800 dark:text-white mb-2">
                  Member
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  All about our products and their benefits to health.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-slate-200 dark:bg-slate-700">
                <iframe width="560" height="315" src="https://youtube.com/embed/ihSHB8NelrY?si=FkRBKo5koeOlfjM3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-slate-800 dark:text-white mb-2">
                  Customer, Berhampur, Gamjam
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Returned to normal life after using our products.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-slate-200 dark:bg-slate-700">
                <iframe width="560" height="315" src="https://youtube.com/embed/sGsw4mU0SzY?si=0OL0pwuKv7eKrtGi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-slate-800 dark:text-white mb-2">
                  Members
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Our trusted members share their experiences with our products
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-slate-200 dark:bg-slate-700">
                <iframe width="560" height="315" src="https://youtube.com/embed/RG-PFLQkwy0?si=DZGAqoqrPpXK6HXd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-slate-800 dark:text-white mb-2">
                 Customer, Asika, Gamjam
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Used for his mother to cure liver and kidney disease
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-slate-200 dark:bg-slate-700">
                <iframe width="560" height="315" src="https://youtube.com/embed/hcR644mXMPs?si=pWKwKLrdUsxMVYHn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-slate-800 dark:text-white mb-2">
                  Manoj Kumar Behera
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Product Lunching day
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-slate-200 dark:bg-slate-700">
                <iframe width="560" height="315" src="https://youtube.com/embed/jp9Nd89zSNo?si=ZUTUU1LivcndPGbT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-slate-800 dark:text-white mb-2">
                  Manoj Kumar Behera
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Product for reducing fat and lowering cholesterol levels, which are significant health benefits.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-slate-200 dark:bg-slate-700">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/1BJIEdHTzj0?si=E7oDjmQDRqKns-5G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-slate-800 dark:text-white mb-2">
                  Industry Visit
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  How stem cells are used to treat various diseases and how they extract from
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-slate-200 dark:bg-slate-700">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/69wRpsYlAA0?si=WtvcqXT3GlHIpNhJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-slate-800 dark:text-white mb-2">
                  Crystal Cell
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  All about Crystal Cell and its benefits to health.  Ingredients and how it is made.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-slate-200 dark:bg-slate-700">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/oanOP9s0G9Y?si=_GKb2rVFwZoz5I-G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-slate-800 dark:text-white mb-2">
                  Doctor's Advice
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Doctor shares his experience with our products and their benefits to Children health.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-slate-200 dark:bg-slate-700">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/pIlr28BNUo0?si=t6ky_SnYh2hFVdQZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-slate-800 dark:text-white mb-2">
                  Stem Cell
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  All about stem cells and how it is used to treat various critical diseases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}