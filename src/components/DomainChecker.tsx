import React, { useState } from 'react';
import { Search, Globe, CheckCircle, ArrowRight, MessageSquare, Loader2 } from 'lucide-react';
import { STARTUP_INFO } from '../data/pricingData';

export const DomainChecker: React.FC = () => {
  const [query, setQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState<{ domain: string; ext: string; available: boolean; priceMsg: string }[] | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setSearching(true);
    setTimeout(() => {
      const clean = query.toLowerCase().replace(/[^a-z0-9]/g, '');
      setResults([
        {
          domain: `${clean}.com`,
          ext: '.com',
          available: true,
          priceMsg: '₹6,000/yr Maintenance (+ ₹10,000 Creation Fee)'
        },
        {
          domain: `${clean}.in`,
          ext: '.in',
          available: true,
          priceMsg: '₹5,300/yr Maintenance (+ ₹10,000 Creation Fee)'
        },
        {
          domain: `${clean}patna.com`,
          ext: '.com',
          available: true,
          priceMsg: '₹6,000/yr Maintenance (+ ₹10,000 Creation Fee)'
        },
        {
          domain: `${clean}bihar.in`,
          ext: '.in',
          available: true,
          priceMsg: '₹5,300/yr Maintenance (+ ₹10,000 Creation Fee)'
        }
      ]);
      setSearching(false);
    }, 600);
  };

  return (
    <section className="py-16 bg-slate-900 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-700 shadow-2xl text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/20 text-amber-300 text-xs font-bold rounded-full border border-amber-400/30">
            <Globe className="w-3.5 h-3.5" />
            <span>Search Your Business Name Domain</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Check If Your `.com` or `.in` Domain is Available
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Get your domain registered 100% in your business name with full ownership rights.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter business name (e.g. royal sweets)"
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-800 text-white placeholder-slate-400 text-sm border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <button
              type="submit"
              disabled={searching}
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-2xl shadow flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
            >
              {searching ? (
                <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
              ) : (
                <>
                  <span>Check Domain</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Results Display */}
          {results && (
            <div className="mt-8 pt-6 border-t border-slate-800 space-y-3 text-left max-w-xl mx-auto">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center sm:text-left">
                Available Domains for "{query}":
              </p>
              {results.map((res, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="font-mono font-bold text-amber-300 text-sm">www.{res.domain}</span>
                      <span className="block text-[11px] text-slate-400">{res.priceMsg}</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/916287339804?text=${encodeURIComponent(
                      `Hello Ravi Sir, I want to reserve domain www.${res.domain} for my business.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg flex items-center justify-center gap-1.5 transition-colors shrink-0"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Claim Domain</span>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
