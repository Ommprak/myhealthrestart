import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { announcements } from "@/data/announcements";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/product-card";
import FeatureCard from "@/components/ui/feature-card";
import { features } from "@/data/features";
import { testimonials } from "@/data/testimonials";
import ContactPopup from "@/components/ui/contact-popup";

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);


  return (
    <div>
      <ContactPopup />
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <picture> 
            <source 
              media="(max-width: 768px)" 
              srcSet="https://res.cloudinary.com/df8blxifj/image/upload/v1747385280/wjb9lawd6fydken7q6ir.jpg"
            />
            <img 
              src="https://res.cloudinary.com/df8blxifj/image/upload/v1747384711/rgsgntteon7wqevu8s0t.jpg"
              alt="Healthcare background" 
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6" style={{ animationDelay: '1s' }}>
              <span className="text-green-300">Phyto</span> <span className="text-red-400">Science</span><br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 block">Presents</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Advanced Healthcare Solutions
            </p>
            <div className="flex button-container">
              <Link href="/products">
                <Button className="text-lg px-8 py-4 shadow-md hover:shadow-lg bg-primary-light hover:bg-primary text-white transition-transform hover:scale-105 duration-300">
                  Explore Products <i className="ri-arrow-right-line ml-2"></i>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary dark:text-primary-light uppercase tracking-wider">Latest Update</span>
            <h2 className="font-heading font-bold text-3xl text-slate-800 dark:text-white mt-2">
              Announcement
            </h2>
          </div>
          <div className="max-w-4xl mx-auto h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
            {announcements.map((announcement) => (
              <div 
                key={announcement.id}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-4"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading font-semibold text-xl text-slate-800 dark:text-white">
                    {announcement.title}
                  </h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {new Date(announcement.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 whitespace-pre-line">
                  {announcement.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-white mb-4">
              Why Choose My Health Book?
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg">
              We are committed to providing the highest quality healthcare products with exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="transform transition-all duration-500 hover:scale-105"
              >
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Featured Products */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-slate-800 dark:text-white">
              Our Products
            </h2>
            <Link href="/products" className="text-primary dark:text-primary-light font-medium flex items-center hover:underline">
              View All <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">What People Are Saying</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              Hear from real people who love what we do.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {featuredTestimonials.slice(0, 3).map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative bg-[#1e293b] p-8 rounded-2xl shadow-xl hover:shadow-blue-500/20 transition-shadow"
              >
                <div className="absolute top-4 right-4 text-blue-500 text-3xl opacity-30">
                  &ldquo;
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <span className="text-sm text-blue-400">{testimonial.title}</span>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {testimonial.content.length > 160
                    ? testimonial.content.slice(0, 160) + '...'
                    : testimonial.content}
                </p>
              </div>
            ))}
          </div>

          {/* Read More Button */}
          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              Read More Testimonials
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-primary dark:bg-primary-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="font-heading font-bold text-3xl text-white mb-4">
                Ready to experience premium healthcare?
              </h2>
              <p className="text-white/80 mb-0">
                Discover our full range of products and special offers today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/products">
                <Button className="bg-white hover:bg-slate-100 text-primary shadow-md hover:shadow-lg">
                  Browse Products
                </Button>
              </Link>
              <Link href="/offers">
                <Button variant="outline" className="bg-transparent hover:bg-primary-light/10 text-white border-white">
                  View Offers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}