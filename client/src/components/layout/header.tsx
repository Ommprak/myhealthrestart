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
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-primary-dark dark:text-primary-light text-3xl">
              <i className="ri-heart-pulse-fill"></i>
            </div>
            <div>
              <span className="font-heading font-bold text-xl text-primary dark:text-primary-light">
                MediCare<span className="text-secondary">Plus</span>
              </span>
            </div>
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
                  "nav-link font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary-light transition-colors",
                  location === link.href && "active"
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
