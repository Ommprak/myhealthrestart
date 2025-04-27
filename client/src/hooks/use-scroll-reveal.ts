
import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Add visible class to child feature boxes with delay
          if (entry.target.classList.contains('section-animate')) {
            const features = entry.target.querySelectorAll('.feature-box');
            features.forEach((feature, index) => {
              setTimeout(() => {
                feature.classList.add('visible');
              }, index * 200); // Stagger animation
            });
          }
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '-50px'
    });

    const elements = document.querySelectorAll('.scroll-reveal, .section-animate, .feature-box');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
}
