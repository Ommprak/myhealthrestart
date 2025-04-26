import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/product-card";
import FeatureCard from "@/components/ui/feature-card";
import { features } from "@/data/features";
import { testimonials } from "@/data/testimonials";
import ContactPopup from "@/components/ui/contact-popup";

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  const featuredTestimonial = testimonials[0];


  return (
    <div>
      <ContactPopup />
      {/* Hero Section */}
      <section className="relative min-h-[800px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/df8blxifj/image/upload/f_auto,q_auto/l518gz0vzolkj3g2bb0s"
            alt="Healthcare background" 
            className="w-full h-full object-cover animate-fadeIn"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6">
              PhytoScience presents
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
              Advanced Healthcare Solutions
            </p>
            <div className="flex justify-start">
              <Link href="/products">
                <Button className="px-6 py-3 shadow-md hover:shadow-lg bg-primary-light hover:bg-primary text-white">
                  Explore Products <i className="ri-arrow-right-line ml-2"></i>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-slate-800 scroll-reveal relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-30">
          <iframe
            src='https://my.spline.design/dnaparticles-NfgxjQUyTMOMXqa5FHj1G8pV/'
            frameBorder='0'
            width='100%'
            height='100%'
          ></iframe>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 scroll-reveal" style={{ animationDelay: '0.2s' }}>
            <h2 className="font-heading font-bold text-3xl text-slate-800 dark:text-white mb-4 animate-text-reveal">
              {'Why Choose '.split('').map((char, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>{char}</span>
              ))}
              <span className="text-secondary">
                {'My Health Restart'.split('').map((char, i) => (
                  <span key={i + 11} style={{ animationDelay: `${(i + 11) * 0.05}s` }}>{char}</span>
                ))}
              </span>
              <span style={{ animationDelay: '1.3s' }}>?</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto animate-slideUp">
              We are committed to providing the highest quality healthcare products with exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.id} 
                className="scroll-reveal animate-slideUp transform transition-all duration-500 hover:scale-105" 
                style={{ animationDelay: `${index * 0.2}s` }}
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
              Featured Products
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
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-slate-800 dark:text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Thousands of healthcare professionals and patients trust our products every day.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-700 p-8 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <img 
                  src={featuredTestimonial.image} 
                  alt={featuredTestimonial.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-slate-600 shadow-md"
                />
              </div>
              <div>
                <div className="text-yellow-400 flex mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic mb-4 text-lg">
                  "{featuredTestimonial.content}"
                </p>
                <div>
                  <p className="font-heading font-semibold text-slate-800 dark:text-white">
                    {featuredTestimonial.name}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400">
                    {featuredTestimonial.title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/testimonials" className="inline-flex items-center text-primary dark:text-primary-light font-medium hover:underline">
              Read More Testimonials <i className="ri-arrow-right-line ml-1"></i>
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