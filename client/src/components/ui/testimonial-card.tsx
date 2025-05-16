import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg flex gap-8 items-center">
      <div className="relative">
        <div className="absolute -z-10 bg-gray-200 rounded-full w-[280px] h-[280px] -top-4 -left-4"></div>
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-[280px] h-[280px] rounded-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="text-navy-900 text-6xl mb-6">"</div>
        <p className="text-slate-800 text-lg mb-8">
          {testimonial.content}
        </p>
        <div>
          <p className="font-heading font-bold text-2xl text-navy-900">
            {testimonial.name}
          </p>
          <p className="text-red-500 text-lg">
            {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  );
}
