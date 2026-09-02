import React, { useState } from 'react';
import { Check, Shield, HelpCircle, MessageSquare, Sparkles } from 'lucide-react';
import { DOMAIN_PLANS, STARTUP_INFO } from '../data/pricingData';

export const PricingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'.com' | '.in'>('.com');

  const filteredPlans = DOMAIN_PLANS.filter(p => p.domainType === activeTab);

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent & Honest Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Website Building & Domain Plans
          </h2>
          <p className="mt-3 text-base text-slate-600">
            One-time website creation starting at <strong className="text-blue-900 font-extrabold">₹10,000</strong> payable at once. Choose your domain extension (.com or .in) and maintenance duration below.
          </p>

          {/* Domain Type Toggle */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-200 border border-slate-300">
            <button 
              onClick={() => setActiveTab('.com')} 
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                activeTab === '.com' 
                  ? 'bg-blue-700 text-white shadow-md' 
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <span>.com Website Plans</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                activeTab === '.com' ? 'bg-blue-600 text-amber-300' : 'bg-slate-300 text-slate-700'
              }`}>
                Global
              </span>
            </button>

            <button 
              onClick={() => setActiveTab('.in')} 
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                activeTab === '.in' 
                  ? 'bg-blue-700 text-white shadow-md' 
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <span>.in Website Plans</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                activeTab === '.in' ? 'bg-blue-600 text-emerald-300' : 'bg-slate-300 text-slate-700'
              }`}>
                India
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredPlans.map((plan) => {
            const whatsappMsg = `Hello Ravi Sir (Patna Web Builder), I am interested in the ${plan.domainType} Website ${plan.duration} Plan (Creation ₹${plan.creationFee.toLocaleString()} + Maintenance ₹${plan.maintenanceCharge.toLocaleString()}). Please guide me.`;
            const whatsappUrl = `https://wa.me/916287339804?text=${encodeURIComponent(whatsappMsg)}`;

            return (
              <div 
                key={plan.id}
                className={`rounded-3xl bg-white border transition-all duration-200 overflow-hidden relative flex flex-col justify-between ${
                  plan.popular 
                    ? 'border-blue-500 shadow-xl ring-2 ring-blue-500/20' 
                    : 'border-slate-200 shadow-md hover:shadow-lg'
                }`}
              >
                {/* Popular Tag */}
                {plan.popular && (
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-[11px] uppercase tracking-wider py-1.5 px-4 text-center">
                    ⭐ Recommended Best Value Package
                  </div>
                )}

                <div className="p-6 sm:p-8 space-y-6">
                  {/* Title & Badge */}
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                        {plan.domainType} Domain ({plan.duration})
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 mt-2">
                        {plan.domainType} Website {plan.duration} Plan
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">{plan.savings}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-black text-slate-900">
                        ₹{(plan.creationFee + plan.maintenanceCharge).toLocaleString()}
                      </span>
                      <span className="block text-[11px] text-slate-500 font-medium">Initial Total</span>
                    </div>
                  </div>

                  {/* Cost Breakdown Details */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs text-slate-700">
                    <div className="flex justify-between items-center pb-1.5 border-b border-slate-200">
                      <span className="font-semibold text-slate-800">1. Website Creation Fee (One-time):</span>
                      <span className="font-bold text-slate-900">₹{plan.creationFee.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center pb-1.5 border-b border-slate-200">
                      <span className="font-semibold text-slate-800">2. {plan.duration} Maintenance Fee:</span>
                      <span className="font-bold text-blue-700">₹{plan.maintenanceCharge.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center pt-1 font-semibold text-slate-800">
                      <span className="flex items-center gap-1 text-slate-600">
                        <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                        Future Renewal Fee:
                      </span>
                      <span className="font-bold text-amber-700">
                        ₹{plan.renewalCharge.toLocaleString()} ({plan.duration})
                      </span>
                    </div>
                  </div>

                  {/* Included Features */}
                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase text-slate-500 tracking-wider">What's Included:</p>
                    <ul className="space-y-2.5 text-xs text-slate-700">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Your Own {plan.domainType} Domain Name</strong> registered in your business name.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>{plan.duration} Fast Cloud Server Hosting</strong> with 99.9% uptime.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>100% Mobile & Tablet Responsive</strong> website design.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Direct Call & WhatsApp Chat Buttons</strong> integrated for instant inquiries.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Google Maps Location</strong> & Google SEO optimization.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>SSL Lock Security Certificate</strong> (https://) included.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Local Support in Patna</strong> directly by owner {STARTUP_INFO.owner}.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col gap-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-colors ${
                      plan.popular 
                        ? 'bg-blue-700 hover:bg-blue-800 text-white shadow-md' 
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Select {plan.domainType} ({plan.duration}) Plan</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Complete Plan Summary Table */}
        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <h3 className="text-xl font-black text-slate-900 mb-2">
            Complete Price Matrix Summary (.com vs .in)
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            All plans require ₹10,000 one-time website building charge. Future renewals are transparently disclosed below.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
                  <th className="p-3 font-bold">Domain Type</th>
                  <th className="p-3 font-bold">Duration</th>
                  <th className="p-3 font-bold">Building Fee</th>
                  <th className="p-3 font-bold">Maintenance Fee</th>
                  <th className="p-3 font-bold text-blue-800">Initial Total</th>
                  <th className="p-3 font-bold text-amber-800">Future Renewal Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                <tr className="hover:bg-blue-50/50">
                  <td className="p-3 font-bold text-blue-700">.com Website</td>
                  <td className="p-3">1 Year</td>
                  <td className="p-3">₹10,000</td>
                  <td className="p-3">₹6,000</td>
                  <td className="p-3 font-bold text-blue-900">₹16,000</td>
                  <td className="p-3 font-bold text-amber-700">₹8,200 / yr</td>
                </tr>
                <tr className="hover:bg-blue-50/50 bg-amber-50/20">
                  <td className="p-3 font-bold text-blue-700">.com Website</td>
                  <td className="p-3 font-bold text-amber-800">3 Years ⭐</td>
                  <td className="p-3">₹10,000</td>
                  <td className="p-3">₹12,000</td>
                  <td className="p-3 font-bold text-blue-900">₹22,000</td>
                  <td className="p-3 font-bold text-amber-700">₹20,500 / 3 yrs</td>
                </tr>
                <tr className="hover:bg-blue-50/50">
                  <td className="p-3 font-bold text-emerald-700">.in Website</td>
                  <td className="p-3">1 Year</td>
                  <td className="p-3">₹10,000</td>
                  <td className="p-3">₹5,300</td>
                  <td className="p-3 font-bold text-blue-900">₹15,300</td>
                  <td className="p-3 font-bold text-amber-700">₹7,600 / yr</td>
                </tr>
                <tr className="hover:bg-blue-50/50 bg-emerald-50/20">
                  <td className="p-3 font-bold text-emerald-700">.in Website</td>
                  <td className="p-3 font-bold text-emerald-800">3 Years ⭐</td>
                  <td className="p-3">₹10,000</td>
                  <td className="p-3">₹9,700</td>
                  <td className="p-3 font-bold text-blue-900">₹19,700</td>
                  <td className="p-3 font-bold text-amber-700">₹17,100 / 3 yrs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
            <Shield className="w-4 h-4 text-amber-700 shrink-0" />
            <span><strong>No Hidden Surprises:</strong> All domain registration, server setup, and maintenance costs are explicitly stated above before you pay!</span>
          </div>
        </div>
      </div>
    </section>
  );
};
