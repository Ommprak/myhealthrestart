import { Testimonial } from "@/data/testimonials";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex flex-col md:flex-row bg-[#0f172a] p-6 md:p-8 rounded-3xl shadow-xl items-center gap-8 w-full border border-blue-900 hover:shadow-blue-500/20 transition-shadow duration-300">

      {/* Left: Circular Image */}
      <div className="flex-shrink-0">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-blue-600 shadow-md"
        />
      </div>

      {/* Right: Text */}
      <div className="flex-1 text-left">
        <Quote className="text-blue-400 w-8 h-8 mb-4" />
        <p className="text-gray-300 text-base leading-relaxed mb-4">
          {testimonial.content}
        </p>
        <p className="text-white text-lg font-bold">{testimonial.name}</p>
        <p className="text-blue-400 text-sm font-medium">{testimonial.title}</p>
      </div>
    </div>
  );
}
