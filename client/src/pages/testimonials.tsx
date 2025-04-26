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

      

      
    </div>
  );
}
