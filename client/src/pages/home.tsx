import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/90 to-primary-dark/90 text-white px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeIn">
            Welcome to MyHealth Restart
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slideUp opacity-90">
            Premium Healthcare Solutions for a Better Life
          </p>
          <Link href="/products">
            <Button className="text-lg px-8 py-6 bg-white text-primary hover:bg-slate-100 transition-all duration-300 animate-slideUp">
              Explore Our Products <i className="ri-arrow-right-line ml-2"></i>
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white dark:bg-slate-800" id="about">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 text-slate-800 dark:text-white">
            About Us
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-slate-600 dark:text-slate-300">
              We provide cutting-edge healthcare solutions designed to enhance your wellbeing. 
              Our products are crafted with precision and care, ensuring the highest quality 
              for our valued customers.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 text-slate-800 dark:text-white">
            Contact Us
          </h2>
          <form className="max-w-2xl mx-auto space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <Button type="submit" className="w-full md:w-auto px-8 py-6">
                Send Message <i className="ri-send-plane-line ml-2"></i>
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}