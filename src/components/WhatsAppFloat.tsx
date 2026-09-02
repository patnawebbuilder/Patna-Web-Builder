import React, { useState } from 'react';
import { MessageSquare, X, Phone } from 'lucide-react';
import { STARTUP_INFO } from '../data/pricingData';

export const WhatsAppFloat: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {/* Popover Bubble */}
      {open && (
        <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-700 w-72 space-y-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-bold text-xs text-white">Patna Web Builder</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-white p-1">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="text-xs text-slate-300 space-y-1">
            <p className="font-semibold text-white">Need a website for your business?</p>
            <p className="text-slate-400">One-time website building starting from <strong className="text-amber-300">₹10,000</strong>.</p>
            <p className="text-slate-400">Owned by: <strong>{STARTUP_INFO.owner}</strong></p>
          </div>

          <div className="space-y-1.5 pt-1">
            <a
              href={STARTUP_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${STARTUP_INFO.contactNo}`}
              className="w-full py-2 px-3 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Call: {STARTUP_INFO.contactNo}</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-3.5 sm:p-4 rounded-full bg-emerald-600 text-white shadow-2xl hover:bg-emerald-500 hover:scale-105 transition-all duration-200 flex items-center gap-2 group ring-4 ring-emerald-500/30"
        aria-label="Contact on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline font-bold text-xs pr-1">Chat on WhatsApp</span>
      </button>
    </div>
  );
};
