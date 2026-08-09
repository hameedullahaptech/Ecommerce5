import React, { useState } from 'react';
import { Mail, PhoneCall, MapPin, Send, Plus, Minus, CheckCircle } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const Contact = () => {
  const { addToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      addToast(`Thank you ${formData.name}. Your message has been sent to client care.`, 'success');
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    }
  };

  const faqs = [
    {
      q: "What is VÉRITÉ's shipping policy?",
      a: "We offer complimentary express shipping worldwide on all orders above $300. Orders under $300 incur a flat $25 shipping fee. All international taxes and import duties are pre-paid."
    },
    {
      q: "How do I request a return or size exchange?",
      a: "You may request a return within 30 days of delivery. Log into your account or contact client care to receive a prepaid DHL express return label."
    },
    {
      q: "Where are your garments manufactured?",
      a: "Our wool coats, cashmere knits, and trousers are tailored in Biella and Tuscany, Italy. Our leather accessories are handcrafted in Santa Croce."
    },
    {
      q: "How should I care for my wool overcoat?",
      a: "We recommend professional coat dry cleaning once per season. Brush lightly with a soft horsehair clothes brush between wears."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">Client Care & Concierge</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-neutral-900 tracking-tight">We Are Here To Assist</h1>
        <p className="text-xs sm:text-sm text-neutral-500 font-light">
          Have a question regarding sizing, bespoke orders, or order tracking? Contact our atelier concierge.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Form Column */}
        <div className="lg:col-span-7 bg-white p-8 rounded border border-neutral-200 shadow-sm space-y-6">
          <h2 className="text-base font-bold text-neutral-900 uppercase tracking-wider pb-3 border-b border-neutral-200">
            Send A Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-neutral-700 uppercase block mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Eleanor Vance"
                  className="w-full bg-neutral-50 border border-neutral-300 rounded px-3 py-2.5 text-neutral-900 focus:outline-none focus:border-brand-dark"
                />
              </div>
              <div>
                <label className="font-bold text-neutral-700 uppercase block mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. eleanor@example.com"
                  className="w-full bg-neutral-50 border border-neutral-300 rounded px-3 py-2.5 text-neutral-900 focus:outline-none focus:border-brand-dark"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-neutral-700 uppercase block mb-1">Subject</label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-neutral-50 border border-neutral-300 rounded px-3 py-2.5 text-neutral-900 focus:outline-none focus:border-brand-dark cursor-pointer"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Order Status">Order Status & Tracking</option>
                <option value="Sizing Advice">Garment Size Advice</option>
                <option value="Press & Wholesale">Press & Wholesale</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-neutral-700 uppercase block mb-1">Your Message *</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can our concierge assist you today?"
                className="w-full bg-neutral-50 border border-neutral-300 rounded p-3 text-neutral-900 focus:outline-none focus:border-brand-dark"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-brand-dark hover:bg-brand-accent text-white font-bold uppercase tracking-widest rounded transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>

        {/* Right Info & Flagship Boutiques Column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-brand-dark text-white p-8 rounded shadow-md space-y-6">
            <h3 className="font-serif text-2xl font-bold tracking-tight text-white">Atelier Headquarters</h3>

            <div className="space-y-4 text-xs text-neutral-300 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-semibold block">Flagship Showroom</strong>
                  <span>450 Mercer Street, SoHo<br />New York, NY 10013</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <span>client@veritestudio.com</span>
              </div>

              <div className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-brand-accent shrink-0" />
                <span>+1 (800) 482-9012 (Mon-Fri 9am-6pm EST)</span>
              </div>
            </div>
          </div>

          {/* Boutique Locations */}
          <div className="bg-neutral-50 p-6 rounded border border-neutral-200 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              International Boutiques
            </h4>
            <div className="grid grid-cols-2 gap-4 text-xs text-neutral-600">
              <div>
                <strong className="text-neutral-900 block">Paris Atelier</strong>
                <p>12 Rue du Faubourg Saint-Honoré</p>
              </div>
              <div>
                <strong className="text-neutral-900 block">Tokyo Flagship</strong>
                <p>5-7-21 Minamiaoyama, Minato-ku</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="border-t border-neutral-200 pt-12 max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">Help Center</span>
          <h2 className="font-serif text-2xl font-bold text-neutral-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="border border-neutral-200 rounded overflow-hidden bg-white">
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full p-4 text-left text-xs sm:text-sm font-bold text-neutral-900 flex items-center justify-between hover:bg-neutral-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <Minus className="w-4 h-4 text-brand-accent" /> : <Plus className="w-4 h-4 text-neutral-400" />}
                </button>
                {isOpen && (
                  <div className="p-4 pt-0 text-xs text-neutral-600 font-light leading-relaxed border-t border-neutral-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
