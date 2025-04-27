import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="https://res.cloudinary.com/df8blxifj/image/upload/v1745658047/hqb4keyjnhrajibm0k6c.png" 
                alt="MyHealth Restart Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-slate-300 mb-6">
              Providing premium quality medicines and healthcare products for over 25 years. 
              Trusted by healthcare professionals worldwide.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-slate-300 hover:text-primary-light transition-colors"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-slate-300 hover:text-primary-light transition-colors"
                aria-label="Twitter"
              >
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-slate-300 hover:text-primary-light transition-colors"
                aria-label="Instagram"
              >
                <i className="ri-instagram-fill text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-slate-300 hover:text-primary-light transition-colors"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-300 hover:text-primary-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-primary-light transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-slate-300 hover:text-primary-light transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/offers" className="text-slate-300 hover:text-primary-light transition-colors">
                  Special Offers
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-primary-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="text-slate-300 hover:text-primary-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg text-white mb-6">Product Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-slate-300 hover:text-primary-light transition-colors">
                  Supplements
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-primary-light transition-colors">
                  Pain Relief
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-primary-light transition-colors">
                  Cardiac Care
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-primary-light transition-colors">
                  Digestive Health
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-primary-light transition-colors">
                  Respiratory Care
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-primary-light transition-colors">
                  View All Categories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg text-white mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="ri-map-pin-line text-primary-light mt-1 mr-3"></i>
                <span className="text-slate-300">
                  At Gatebazar (Lochapoda road, near Dhuba street), Berhampur, Odisha<br />
                </span>
              </li>
              <li className="flex items-start">
                <i className="ri-phone-line text-primary-light mt-1 mr-3"></i>
                <span className="text-slate-300">9776932777</span>
              </li>
              <li className="flex items-start">
                <i className="ri-mail-line text-primary-light mt-1 mr-3"></i>
                <span className="text-slate-300">myhealthrestart@gmail.com</span>
              </li>
              <li className="flex items-start">
                <i className="ri-time-line text-primary-light mt-1 mr-3"></i>
                <span className="text-slate-300">24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} My Health Restart. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-primary-light transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-primary-light transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-primary-light transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
