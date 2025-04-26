
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
            
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Contact Us</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input
                  required
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Place</label>
                <Input
                  required
                  value={formData.place}
                  onChange={e => setFormData(prev => ({ ...prev, place: e.target.value }))}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Query/Topic</label>
                <Textarea
                  required
                  value={formData.query}
                  onChange={e => setFormData(prev => ({ ...prev, query: e.target.value }))}
                />
              </div>
              
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg flex items-center gap-2 z-50"
        >
          <Phone className="h-6 w-6 animate-swing" />
          <span>Contact Us</span>
        </button>
      )}
    </>
  );
}
