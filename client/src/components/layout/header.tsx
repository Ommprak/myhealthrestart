import { Link, useLocation } from "wouter";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileMenu } from "@/components/ui/mobile-menu";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/offers", label: "Offers" },
  { href: "/about", label: "About Us" },
];

export default function Header() {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-slate-800/70 shadow-md backdrop-blur-sm transition-colors duration-200">
      <div className="container mx-auto px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="https://i.im.ge/2025/05/24/vznNqY.Professional-Logo-for-My-Health-Book-with-Medical-Icon-removebg-preview.png" 
              alt="MyHealth Book Logo" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Mobile menu button */}
          <MobileMenu links={navLinks} />

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-link font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary-light transition-all duration-300 transform hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary dark:after:bg-primary-light after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full",
                  location === link.href && "active after:w-full"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Theme toggle */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
