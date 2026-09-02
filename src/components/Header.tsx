import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, Globe, ShieldCheck } from 'lucide-react';
import { STARTUP_INFO } from '../data/pricingData';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top Banner Notice */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-amber-300">Patna's Premier Web Startup</span>
            <span className="hidden md:inline text-slate-400">| Owned by {STARTUP_INFO.owner}</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href={`tel:${STARTUP_INFO.contactNo}`} 
              className="hover:text-amber-300 flex items-center gap-1 font-semibold transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>Call: {STARTUP_INFO.contactNo}</span>
            </a>
            <a 
              href={STARTUP_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-emerald-400 flex items-center gap-1 font-semibold transition-colors"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-amber-500 p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <Globe className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-900 block">
                Patna Web Builder
              </span>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-600 font-bold">
                <span className="bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-extrabold text-[10px]">
                  PATNA
                </span>
                <span>By {STARTUP_INFO.owner}</span>
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            <button 
              onClick={() => handleNavClick('pricing')} 
              className="hover:text-blue-700 transition-colors py-1"
            >
              Plans & Pricing
            </button>
            <button 
              onClick={() => handleNavClick('ai-generator')} 
              className="hover:text-blue-700 transition-colors py-1 flex items-center gap-1"
            >
              <span className="bg-gradient-to-r from-amber-500 to-indigo-600 bg-clip-text text-transparent font-bold">AI Website Proposal</span>
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className="hover:text-blue-700 transition-colors py-1"
            >
              Why Us
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="hover:text-blue-700 transition-colors py-1"
            >
              Contact Owner
            </button>
          </nav>

          {/* CTA Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href={`tel:${STARTUP_INFO.contactNo}`}
              className="px-3.5 py-2 rounded-lg text-xs font-bold border border-slate-300 text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>{STARTUP_INFO.contactNo}</span>
            </a>
            <a 
              href={STARTUP_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm flex items-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 space-y-1">
            <p className="font-bold text-slate-800">Patna Web Builder (Owned by {STARTUP_INFO.owner})</p>
            <p className="flex items-center gap-1 text-slate-600">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              One-time website creation starting at ₹10,000
            </p>
          </div>
          <div className="flex flex-col space-y-2 font-medium text-slate-700 text-sm">
            <button 
              onClick={() => handleNavClick('pricing')} 
              className="text-left py-2 px-3 rounded-md hover:bg-slate-100"
            >
              Plans & Charges (.com & .in)
            </button>
            <button 
              onClick={() => handleNavClick('ai-generator')} 
              className="text-left py-2 px-3 rounded-md hover:bg-slate-100 text-indigo-700 font-semibold"
            >
              ✨ AI Website Proposal Generator
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className="text-left py-2 px-3 rounded-md hover:bg-slate-100"
            >
              Why Patna Web Builder
            </button>
            <button 
              onClick={() => handleNavClick('faq')} 
              className="text-left py-2 px-3 rounded-md hover:bg-slate-100"
            >
              FAQs & Renewals
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="text-left py-2 px-3 rounded-md hover:bg-slate-100"
            >
              Contact Owner (Ravi Ranjan)
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a 
              href={`tel:${STARTUP_INFO.contactNo}`} 
              className="w-full text-center py-2.5 rounded-lg text-sm font-bold bg-slate-100 text-slate-800 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call Owner: {STARTUP_INFO.contactNo}</span>
            </a>
            <a 
              href={STARTUP_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-lg text-sm font-bold bg-emerald-600 text-white flex items-center justify-center gap-2 shadow"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp (6287339804)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
