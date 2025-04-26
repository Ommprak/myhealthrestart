import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  links: { href: string; label: string }[];
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary-light transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <i className="ri-close-line text-2xl"></i>
        ) : (
          <i className="ri-menu-line text-2xl"></i>
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 z-50">
          <div className="container mx-auto px-4 py-2 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={cn(
                  "block py-2 font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary-light transition-colors",
                  location === link.href && "text-primary dark:text-primary-light"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
