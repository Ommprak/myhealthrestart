"use client";
import PageHeader from "@/components/layout/page-header";
import { useState } from "react";
import FeatureCard from "@/components/ui/feature-card";
import { values } from "@/data/features";
import { team } from "@/data/team";
import { Button } from "@/components/ui/button";

export default function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Product Information",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "919776932777"; // Country code + number
    const message = `Hello My Health Book, I would like to inquire about the following:

   My Name: ${formData.name}
   My Email: ${formData.email}
   Subject: ${formData.subject}
   Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };
  return (
    <div>
      <PageHeader 
        title="About MediCarePlus" 
        subtitle="Dedicated to advancing healthcare through innovative, high-quality products."
      />

      {/* Our Story Section */}
      <section className="py-16 bg-white dark:bg-slate-800 section-animate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="font-heading font-bold text-3xl text-slate-800 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Phyto Science is a leading global health and wellness company focused on transforming lives through innovative nutrition and skincare products.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                With a strong commitment to improving physical health and financial well-being, Phyto Science empowers individuals with cutting-edge solutions and business opportunities.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Dedicated to excellence, the company continues to pioneer trends in natural wellness while helping people achieve healthier, wealthier lives.
              </p>
              <div className="grid grid-cols-3 gap-4 sm:flex sm:items-center mt-8">
                <div className="flex flex-col items-center sm:mr-8">
                  <span className="text-primary dark:text-primary-light font-bold text-2xl sm:text-3xl">25+</span>
                  <span className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm text-center">Years Experience</span>
                </div>
                <div className="flex flex-col items-center mr-8">
                  <span className="text-primary dark:text-primary-light font-bold text-3xl">45+</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Countries</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-primary dark:text-primary-light font-bold text-3xl">100+</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Products</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=450&q=80"
                alt="MediCarePlus Headquarters" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl text-slate-800 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              At MediCarePlus, we are guided by a set of core values that influence every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map(value => (
              <FeatureCard key={value.id} feature={value} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl text-slate-800 dark:text-white mb-4">
              Our Leadership Team
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Meet the experienced professionals guiding MediCarePlus into the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(member => (
              <div key={member.id} className="text-center">
                <div className="mb-4 relative inline-block">
                  <img 
                    src={member.image}
                    alt={member.name} 
                    className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-md"
                  />
                </div>
                <h3 className="font-heading font-semibold text-xl text-slate-800 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-primary dark:text-primary-light mb-2">
                  {member.title}
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="font-heading font-bold text-3xl text-slate-800 dark:text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-8">
                  Have questions about our products or company? Our team is here to help.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-primary dark:text-primary-light text-xl mt-1 mr-4">
                      <i className="ri-map-pin-line"></i>
                    </div>
                    <div>
                      <h3 className="font-heading font-medium text-lg text-slate-800 dark:text-white mb-1">
                        Headquarters
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        <span className="text-slate-300">
                          At Gatebazar (Lochapoda road, near Dhuba street), Berhampur, Odisha<br />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary dark:text-primary-light text-xl mt-1 mr-4">
                      <i className="ri-phone-line"></i>
                    </div>
                    <div>
                      <h3 className="font-heading font-medium text-lg text-slate-800 dark:text-white mb-1">
                        Phone
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        +91 9776932777<br />
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary dark:text-primary-light text-xl mt-1 mr-4">
                      <i className="ri-mail-line"></i>
                    </div>
                    <div>
                      <h3 className="font-heading font-medium text-lg text-slate-800 dark:text-white mb-1">
                        Email
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        myhealthrestart@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                <h3 className="font-heading font-semibold text-xl text-slate-800 dark:text-white mb-6">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Subject
                    </label>
                    <select 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light"
                    >
                      <option>Product Information</option>
                      <option>Order Inquiry</option>
                      <option>Partnership Opportunity</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light"
                      required
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message via WhatsApp
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}