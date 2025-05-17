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
    <div className="lg:hidden ml-auto">
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-12 h-12 text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary-light transition-all rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <i className="ri-close-line text-3xl p-1"></i>
        ) : (
          <i className="ri-menu-line text-3xl p-1"></i>
        )}
      </button>

      {isOpen && (
        <div className="fixed left-0 right-0 top-[calc(100%+1px)] bottom-0 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 z-50 animate-in slide-in-from-top duration-200">
          <div className="container mx-auto px-4 py-4 space-y-4 bg-slate-600">
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
