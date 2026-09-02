import React from 'react';
import { Globe, Phone, MessageSquare, Heart } from 'lucide-react';
import { STARTUP_INFO } from '../data/pricingData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                <Globe className="w-4 h-4 text-amber-300" />
              </div>
              <span className="text-lg font-black text-white">Patna Web Builder</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Patna based startup empowering local businesses across Bihar to get custom .com and .in websites live worldwide at low cost.
            </p>
            <p className="text-slate-300 font-medium">
              Owned by: <strong className="text-amber-400">{STARTUP_INFO.owner}</strong>
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-1.5 font-medium">
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-amber-300 transition-colors">
                  .com & .in Pricing Plans
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ai-generator')} className="hover:text-amber-300 transition-colors">
                  AI Website Proposal Tool
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-amber-300 transition-colors">
                  FAQs & Transparent Renewals
                </button>
              </li>
            </ul>
          </div>

          {/* Pricing Summary */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Plan Summary</h4>
            <ul className="space-y-1 text-slate-300">
              <li>• Building Fee: <strong>₹10,000 (One-time)</strong></li>
              <li>• .com 1-Year Maint: <strong>₹6,000</strong></li>
              <li>• .com 3-Year Maint: <strong>₹12,000</strong></li>
              <li>• .in 1-Year Maint: <strong>₹5,300</strong></li>
              <li>• .in 3-Year Maint: <strong>₹9,700</strong></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Direct Contact</h4>
            <p className="text-slate-300">Call / WhatsApp Founder:</p>
            <a 
              href={`tel:${STARTUP_INFO.contactNo}`}
              className="inline-flex items-center gap-2 text-base font-black text-amber-400 hover:underline"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>{STARTUP_INFO.contactNo}</span>
            </a>
            <p className="text-slate-400">{STARTUP_INFO.location}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500">
          <p>© {new Date().getFullYear()} Patna Web Builder. All rights reserved.</p>
          <p className="flex items-center gap-1 justify-center">
            <span>Designed for Patna & Bihar Businesses by</span>
            <strong className="text-slate-300">{STARTUP_INFO.owner}</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};
