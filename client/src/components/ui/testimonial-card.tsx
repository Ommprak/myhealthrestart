import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-violet-100 p-6 rounded-xl shadow-md">
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold text-violet-800 mb-4">Design Feedback</h3>
        <div className="text-yellow-400 flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <i 
              key={i} 
              className={
                i < Math.floor(testimonial.rating) 
                  ? "ri-star-fill" 
                  : i < testimonial.rating 
                    ? "ri-star-half-fill" 
                    : "ri-star-line"
              }
            ></i>
          ))}
        </div>
        <div className="text-primary dark:text-primary-light text-xl">
          <i className="ri-double-quotes-l"></i>
        </div>
      </div>
      <p className="text-slate-600 dark:text-slate-300 italic mb-6">
        "{testimonial.content}"
      </p>
      <div className="flex items-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <p className="font-heading font-semibold text-slate-800 dark:text-white">
            {testimonial.name}
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  );
}
