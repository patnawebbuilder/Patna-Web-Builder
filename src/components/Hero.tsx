import React from 'react';
import { ShieldCheck, Phone, ArrowRight, Zap, CheckCircle2, User, Globe, Sparkles } from 'lucide-react';
import { STARTUP_INFO } from '../data/pricingData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Subtle Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-amber-500/15 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Patna Based Tech Startup</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
            <User className="w-3.5 h-3.5 text-blue-400" />
            <span>Owned by: <strong className="text-white">{STARTUP_INFO.owner}</strong></span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Call: <strong>{STARTUP_INFO.contactNo}</strong></span>
          </span>
        </div>

        {/* Main Company Name & Hero Headline */}
        <div className="text-center max-w-5xl mx-auto space-y-4">
          <div className="inline-block">
            <span className="block text-xs uppercase tracking-[0.3em] font-extrabold text-amber-400 mb-2">
              Official Bihar & Patna Tech Startup
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-none text-white drop-shadow-lg">
              PATNA WEB <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">BUILDER</span>
            </h1>

            {/* Prominently Mention Owned by Ravi Ranjan directly below Company Name */}
            <div className="mt-3 sm:mt-4 inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-500/20 border-2 border-amber-400 text-amber-200 font-black text-base sm:text-xl tracking-wide shadow-lg">
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 shrink-0" />
              <span>Owned by <strong className="text-white uppercase tracking-wider underline decoration-amber-400 decoration-2 underline-offset-4 font-black">{STARTUP_INFO.owner}</strong></span>
            </div>
          </div>

          {/* Slogan & Subtitle - Smaller than Company Name */}
          <p className="text-lg sm:text-2xl font-bold text-slate-200 max-w-3xl mx-auto tracking-wide pt-2">
            Take Your Business Online Across the World at <span className="text-amber-300 underline decoration-amber-500/50 underline-offset-4">Very Low Cost</span>
          </p>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Owned by <strong className="text-white">{STARTUP_INFO.owner}</strong> — Empowering local shops, coaching centers, clinics, contractors, and startups to get professional websites with custom <strong className="text-white">.com</strong> or <strong className="text-white">.in</strong> domain names.
          </p>

          {/* Pricing Highlight Pill Banner */}
          <div className="pt-2">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-3 sm:px-6 sm:py-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md shadow-xl text-left">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 font-black text-lg">
                  ₹
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">One-Time Building Cost</span>
                  <span className="text-2xl font-black text-amber-400">Starts from ₹10,000</span>
                </div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-slate-700"></div>
              <div className="text-xs text-slate-300 space-y-0.5">
                <p className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Includes Custom Design + Fast Cloud Server Setup</span>
                </p>
                <p className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>1 Year & 3 Years .com / .in Maintenance Plans</span>
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button 
              onClick={() => onNavigate('pricing')} 
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-900/50 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <Globe className="w-4 h-4 text-amber-300" />
              <span>View .com & .in Plans</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button 
              onClick={() => onNavigate('ai-generator')} 
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center justify-center gap-2 transition-colors"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Get AI Proposal</span>
            </button>

            <a 
              href={STARTUP_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Ravi Ranjan ({STARTUP_INFO.contactNo})</span>
            </a>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-800 backdrop-blur">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-2 font-bold text-sm">
              01
            </div>
            <h3 className="text-sm font-bold text-white mb-1">Your Business Name</h3>
            <p className="text-xs text-slate-400">Get your own `.com` or `.in` domain registered strictly in your name.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-800 backdrop-blur">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2 font-bold text-sm">
              02
            </div>
            <h3 className="text-sm font-bold text-white mb-1">Live in 3-5 Days</h3>
            <p className="text-xs text-slate-400">Fast delivery with mobile & tablet friendly responsive design.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-800 backdrop-blur">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2 font-bold text-sm">
              03
            </div>
            <h3 className="text-sm font-bold text-white mb-1">WhatsApp & Call Button</h3>
            <p className="text-xs text-slate-400">Directly connect customers in Bihar to your phone or WhatsApp.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-800 backdrop-blur">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-2 font-bold text-sm">
              04
            </div>
            <h3 className="text-sm font-bold text-white mb-1">Transparent Renewals</h3>
            <p className="text-xs text-slate-400">No hidden fees. Full disclosure of 1-year & 3-year renewal rates upfront.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
