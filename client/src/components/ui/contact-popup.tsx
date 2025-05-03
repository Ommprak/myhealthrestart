
import { useState, useEffect } from 'react';
import { X, Phone } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';
import { Textarea } from './textarea';

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    email: '',
    query: ''
  });
  const [submissions, setSubmissions] = useState<Array<typeof formData>>([]);

  // Removed auto-popup timer to only show on click

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissions(prev => [...prev, formData]);
    setFormData({ name: '', place: '', email: '', query: '' });
    setIsOpen(false);
  };

  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-md w-full mx-4 relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <X className="h-5 w-5" />
            </button>
            
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white text-center">Contact Us</h2>
            
            <div className="space-y-6">
              <a 
                href="https://maps.app.goo.gl/rpjCWzQWcWuGe6GBA"
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-start p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
              >
                <i className="ri-map-pin-line text-primary-light text-xl mt-1 mr-4"></i>
                <div>
                  <h3 className="font-medium text-slate-900 dark:text-white mb-1 group-hover:text-primary-light transition-colors">Location</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    At Gatebazar (Lochapoda road, near Dhuba street), Berhampur, Odisha
                  </p>
                </div>
              </a>

              <a 
                href="tel:+919776932777"
                className="flex items-start p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
              >
                <i className="ri-phone-line text-primary-light text-xl mt-1 mr-4"></i>
                <div>
                  <h3 className="font-medium text-slate-900 dark:text-white mb-1 group-hover:text-primary-light transition-colors">Phone</h3>
                  <p className="text-slate-600 dark:text-slate-300">+91 9776932777</p>
                </div>
              </a>

              <a 
                href="mailto:myhealthrestart@gmail.com"
                className="flex items-start p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
              >
                <i className="ri-mail-line text-primary-light text-xl mt-1 mr-4"></i>
                <div>
                  <h3 className="font-medium text-slate-900 dark:text-white mb-1 group-hover:text-primary-light transition-colors">Email</h3>
                  <p className="text-slate-600 dark:text-slate-300">myhealthrestart@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                <i className="ri-time-line text-primary-light text-xl mt-1 mr-4"></i>
                <div>
                  <h3 className="font-medium text-slate-900 dark:text-white mb-1">Hours</h3>
                  <p className="text-slate-600 dark:text-slate-300">24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg flex items-center gap-2 z-50 transition-transform hover:scale-105 animate-bounce hover:animate-none"
        >
          <Phone className="h-6 w-6 animate-swing" />
          <span>Contact Us</span>
        </button>
      )}
    </>
  );
}
