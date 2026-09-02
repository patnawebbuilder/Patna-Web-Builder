import React, { useState } from 'react';
import { Sparkles, ArrowRight, Loader2, CheckCircle2, Lightbulb, Globe, Palette, ShieldCheck, MessageSquare } from 'lucide-react';
import { AIConceptResult } from '../types';
import { STARTUP_INFO } from '../data/pricingData';

export const AIConceptGenerator: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [category, setCategory] = useState('Coaching & Education');
  const [location, setLocation] = useState('Patna, Bihar');
  const [goals, setGoals] = useState('Get local inquiries, student admissions & WhatsApp bookings');
  const [preferredDomain, setPreferredDomain] = useState<'.com' | '.in'>('.com');

  const [loading, setLoading] = useState(false);
  const [concept, setConcept] = useState<AIConceptResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim()) {
      setError('Please enter your business name');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/generate-concept', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName,
          category,
          location,
          goals,
          preferredDomain
        })
      });

      const data = await res.json();
      if (data.success && data.concept) {
        setConcept(data.concept);
      } else {
        throw new Error(data.error || 'Failed to generate concept');
      }
    } catch (err: any) {
      console.error('Error:', err);
      // Fallback local generator if network or API fails
      const cleanName = businessName.toLowerCase().replace(/[^a-z0-9]/g, '');
      const domainExt = preferredDomain;
      setConcept({
        businessName,
        tagline: `Patna's Premier Destination for Quality ${category}`,
        suggestedDomains: [
          `${cleanName}${domainExt}`,
          `${cleanName}patna${domainExt}`,
          `best${cleanName}bihar${domainExt}`
        ],
        colorScheme: {
          primary: '#1E40AF',
          accent: '#D97706',
          bg: '#F8FAFC'
        },
        keySections: [
          'High-Impact Hero Banner with Direct Call Button',
          `Services Showcase for ${category}`,
          'Google Maps Location & Contact Info in Patna',
          'Customer Ratings & Verified Reviews',
          'Instant WhatsApp Order Form'
        ],
        recommendedPackage: domainExt === '.in' ? '.in Website (1 Year Plan)' : '.com Website (1 Year Plan)',
        estimatedCost: domainExt === '.in'
          ? { creation: 10000, maintenance: 5300, total: 15300, note: '₹10,000 One-time + ₹5,300 1-yr Maintenance' }
          : { creation: 10000, maintenance: 6000, total: 16000, note: '₹10,000 One-time + ₹6,000 1-yr Maintenance' },
        aiTips: [
          'Enable instant WhatsApp chat button for direct phone inquiries in Bihar.',
          'List your address on Google Maps to attract local Patna buyers searching online.',
          'Display customer testimonials to build strong local trust.'
        ]
      });
    } finally {
      setLoading(false);
    }
  };

  const categoriesList = [
    'Coaching & Education',
    'Doctor Clinic & Healthcare',
    'Restaurant, Sweets & Bakery',
    'Hardware & Retail Store',
    'Contractor & Real Estate',
    'Lawyer & Legal Services',
    'Beauty Parlour & Salon',
    'Other Business / Service'
  ];

  return (
    <section id="ai-generator" className="py-16 lg:py-24 bg-gradient-to-b from-slate-900 to-indigo-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Powered Strategy Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Get an Instant AI Website Concept for Your Business
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Tell us about your Patna business and get an instant website structure, domain suggestions, color theme, and exact price quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Side */}
          <div className="lg:col-span-5 bg-slate-800/80 backdrop-blur border border-slate-700/80 p-6 sm:p-8 rounded-3xl shadow-xl">
            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                  Business Name *
                </label>
                <input 
                  type="text" 
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Royal Sweets & Bakers"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                  Industry / Category
                </label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                >
                  {categoriesList.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                  Location in Patna / Bihar
                </label>
                <input 
                  type="text" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Boring Road, Patna"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                  Preferred Domain Extension
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPreferredDomain('.com')}
                    className={`py-2 px-3 rounded-xl font-bold text-xs border transition-all ${
                      preferredDomain === '.com' 
                        ? 'bg-amber-500 text-slate-950 border-amber-400' 
                        : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    .com (Global)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreferredDomain('.in')}
                    className={`py-2 px-3 rounded-xl font-bold text-xs border transition-all ${
                      preferredDomain === '.in' 
                        ? 'bg-amber-500 text-slate-950 border-amber-400' 
                        : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    .in (India)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                  Key Business Goal
                </label>
                <input 
                  type="text" 
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  placeholder="e.g. Get direct phone calls and WhatsApp orders"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              {error && (
                <p className="text-xs text-rose-400 font-medium">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Analyzing Patna Market & Generating...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>Generate AI Proposal Now</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Results Side */}
          <div className="lg:col-span-7">
            {concept ? (
              <div className="bg-slate-800/90 border border-amber-500/30 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      ✨ Custom Proposal Generated
                    </span>
                    <h3 className="text-2xl font-black text-white mt-1">
                      {concept.businessName}
                    </h3>
                    <p className="text-xs text-slate-300 italic mt-0.5">"{concept.tagline}"</p>
                  </div>
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-bold border border-amber-500/30">
                    Patna Ready
                  </span>
                </div>

                {/* Suggested Domains */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-blue-400" />
                    Recommended Domain Names:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {concept.suggestedDomains.map((dom, i) => (
                      <span key={i} className="px-3 py-1.5 bg-slate-900 border border-slate-700 text-amber-300 font-mono text-xs rounded-lg font-bold">
                        www.{dom}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Sections */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Recommended Website Structure & Pages:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                    {concept.keySections.map((sec, i) => (
                      <li key={i} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/60">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{sec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cost Summary Box */}
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700 space-y-2 text-xs">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Recommended Package:</span>
                    <span className="font-bold text-amber-400">{concept.recommendedPackage}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Estimated Total Year 1 Budget:</span>
                    <span className="font-black text-emerald-400 text-base">₹{concept.estimatedCost.total.toLocaleString()}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                    Includes ₹10,000 one-time website building fee + maintenance.
                  </p>
                </div>

                {/* AI Tips */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                    Growth Strategy Tips for Patna Market:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {concept.aiTips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/916287339804?text=${encodeURIComponent(
                      `Hello Ravi Sir, I generated an AI proposal for my business "${concept.businessName}". I want to build a website like this. Please call me.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send this AI Proposal to Ravi Ranjan on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[350px] bg-slate-800/40 border border-dashed border-slate-700 rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-2xl font-bold">
                  ✨
                </div>
                <h3 className="text-lg font-bold text-white">No Concept Generated Yet</h3>
                <p className="text-xs text-slate-400 max-w-sm">
                  Fill in your business details on the left and click "Generate AI Proposal Now" to get instant custom design suggestions.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
