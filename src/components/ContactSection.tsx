import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, User, Clock, Send, CheckCircle2 } from 'lucide-react';
import { STARTUP_INFO } from '../data/pricingData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const whatsappText = `Hello Ravi Sir (Patna Web Builder),\n\nInquiry from website:\n- Name: ${name}\n- Phone: ${phone}\n- Business Type: ${businessType || 'General'}\n- Message: ${message || 'Please call me back regarding website creation.'}`;
    const url = `https://wa.me/916287339804?text=${encodeURIComponent(whatsappText)}`;

    setSubmitted(true);
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
            Startup & Contact Details
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Get in Touch with Patna Web Builder
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Have a question or want to get your business website live? Call or message founder Ravi Ranjan directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Owner Details Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-6">
            <div className="flex items-center gap-4 border-b border-slate-800 pb-5">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-2xl">
                RR
              </div>
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Startup Founder & Owner</span>
                <h3 className="text-2xl font-black text-white">{STARTUP_INFO.owner}</h3>
                <p className="text-xs text-slate-400 font-medium">{STARTUP_INFO.name} - Patna, Bihar</p>
              </div>
            </div>

            {/* Quick Info Grid */}
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-800 text-blue-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block">Direct Contact Number:</span>
                  <a href={`tel:${STARTUP_INFO.contactNo}`} className="text-base font-bold text-white hover:text-amber-300 transition-colors">
                    +91 {STARTUP_INFO.contactNo}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block">WhatsApp Support:</span>
                  <a href={STARTUP_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-emerald-400 hover:underline">
                    Chat on WhatsApp ({STARTUP_INFO.contactNo})
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block">Location:</span>
                  <p className="text-sm font-semibold text-white">{STARTUP_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-800 text-purple-400 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block">Consultation Hours:</span>
                  <p className="text-sm font-semibold text-white">{STARTUP_INFO.workingHours}</p>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${STARTUP_INFO.contactNo}`}
                className="flex-1 py-3 px-4 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-500 text-white shadow text-center flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {STARTUP_INFO.contactNo}</span>
              </a>
              <a
                href={STARTUP_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow text-center flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Message</span>
              </a>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Request a Call Back in Patna
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Leave your details below and founder Ravi Ranjan will get in touch with you shortly.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-base">Inquiry Redirected to WhatsApp!</h4>
                <p className="text-xs text-emerald-700">
                  Thank you! Your message details have been sent to WhatsApp number {STARTUP_INFO.contactNo}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs font-bold text-emerald-800 underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Kumar"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Mobile Number *
                    </label>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Business / Shop Name
                  </label>
                  <input 
                    type="text" 
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    placeholder="e.g. Patna Sweets / Coaching Institute"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Message / Special Requirement
                  </label>
                  <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    placeholder="Tell us what kind of website you want..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-blue-700 hover:bg-blue-800 text-white shadow flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Call Back Request to WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
