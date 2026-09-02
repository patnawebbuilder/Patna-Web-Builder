import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Send, Phone, CheckCircle2, User, Building2, PhoneCall } from 'lucide-react';
import { STARTUP_INFO } from '../data/pricingData';

export const EnquiryModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [websiteType, setWebsiteType] = useState('Business Website');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // 1. Timer Trigger: Pop up after 10 seconds if not already seen in session
    const hasSeenModal = sessionStorage.getItem('patna_enquiry_modal_dismissed');
    let timer: NodeJS.Timeout | null = null;
    if (!hasSeenModal) {
      timer = setTimeout(() => {
        setIsOpen(true);
      }, 10000);
    }

    // 2. Scroll-to-End Trigger: Pop up EVERY TIME user reaches the bottom of the page
    let triggeredAtBottom = false;

    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const bottomThreshold = document.documentElement.scrollHeight - 100;

      if (scrollPosition >= bottomThreshold) {
        if (!triggeredAtBottom) {
          triggeredAtBottom = true;
          setIsOpen(true);
        }
      } else if (scrollPosition < bottomThreshold - 300) {
        // Reset state when user scrolls back up so it can trigger again when reaching end
        triggeredAtBottom = false;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('patna_enquiry_modal_dismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setSubmitted(true);
    sessionStorage.setItem('patna_enquiry_modal_dismissed', 'true');

    // Create WhatsApp prefilled enquiry
    const message = `*NEW ENQUIRY FROM PATNA WEB BUILDER WEBSITE*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(name)}%0A` +
      `📱 *Phone/WhatsApp:* ${encodeURIComponent(phone)}%0A` +
      `🏢 *Business:* ${encodeURIComponent(businessName || 'Not specified')}%0A` +
      `🌐 *Requirement:* ${encodeURIComponent(websiteType)}%0A%0A` +
      `Hello Ravi Sir, please connect with me regarding website development.`;

    const waUrl = `https://wa.me/${STARTUP_INFO.whatsappNumber}?text=${message}`;

    // Open WhatsApp in a new tab
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Dark Blurred Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-slate-900 border-2 border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden z-10 text-white my-auto"
          >
            {/* Header Accent Glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 p-2 rounded-full transition-colors z-20"
              aria-label="Close Enquiry Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              {!submitted ? (
                <>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Free Consultation & Special Patna Offer</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    Get Your Business <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">Online in Patna!</span>
                  </h3>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                    Register your enquiry now & connect directly with <strong>Ravi Ranjan</strong> for custom domain setup, fast hosting, and local business growth.
                  </p>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                        Your Full Name <span className="text-amber-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Rahul Kumar"
                          className="w-full bg-slate-800/90 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                        WhatsApp / Phone Number <span className="text-amber-400">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 9876543210"
                          className="w-full bg-slate-800/90 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                        Business / Shop Name (Optional)
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          placeholder="e.g. Patna Electronics / Bihar Coaching"
                          className="w-full bg-slate-800/90 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Service Type */}
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                        Website Requirement
                      </label>
                      <select
                        value={websiteType}
                        onChange={(e) => setWebsiteType(e.target.value)}
                        className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                      >
                        <option value="Business Website">Business Showcase Website (.com / .in)</option>
                        <option value="Coaching / Institute Website">Coaching & Education Portal</option>
                        <option value="E-commerce Store">Online Shop / E-Commerce Store</option>
                        <option value="Hospital / Clinic Website">Hospital & Healthcare Website</option>
                        <option value="Real Estate / Construction">Real Estate & Builder Website</option>
                        <option value="Custom Requirement">Custom Tailored Solution</option>
                      </select>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2.5 transition-all text-sm uppercase tracking-wider"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit & Chat on WhatsApp</span>
                      </button>
                    </div>
                  </form>

                  {/* Call Direct Option */}
                  <div className="mt-4 pt-4 border-t border-slate-800 text-center">
                    <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
                      <span>Prefer calling directly?</span>
                      <a
                        href={`tel:${STARTUP_INFO.contactNo}`}
                        className="text-amber-400 font-bold hover:underline inline-flex items-center gap-1"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>+91 {STARTUP_INFO.contactNo}</span>
                      </a>
                    </p>
                  </div>
                </>
              ) : (
                /* Success Confirmation State */
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    Enquiry Registered!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{name}</strong>! Redirecting you to <strong>Ravi Ranjan</strong> on WhatsApp to start your website setup immediately...
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={handleClose}
                      className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
