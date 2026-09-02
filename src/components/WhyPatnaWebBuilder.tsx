import React from 'react';
import { ShieldCheck, UserCheck, Smartphone, Zap, Clock, HeartHandshake, PhoneCall } from 'lucide-react';
import { STARTUP_INFO } from '../data/pricingData';

export const WhyPatnaWebBuilder: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Why Patna Businesses Trust Patna Web Builder
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Founded and operated locally in Patna by <strong className="text-slate-900">{STARTUP_INFO.owner}</strong>. We make website development straightforward, fast, and affordable.
          </p>
        </div>

        {/* 6 Key Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3 hover:border-blue-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl">
              ₹
            </div>
            <h3 className="text-lg font-bold text-slate-900">Starts at Only ₹10,000</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No astronomical agency bills. Pay ₹10,000 one-time creation fee + fixed domain & maintenance charge. Complete price transparency from day one.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3 hover:border-blue-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Direct Owner Contact</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Speak directly with founder <strong>{STARTUP_INFO.owner}</strong> on <strong>{STARTUP_INFO.contactNo}</strong>. No chatbots or endless ticket queues.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3 hover:border-blue-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Fast 3 to 5 Days Delivery</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your business website will be live across the world in just a few days so you can start taking online orders and student inquiries immediately.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3 hover:border-blue-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">100% Mobile Friendly</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Over 90% of buyers in Bihar browse on mobile phones. Our websites look crisp and load super fast on smartphones & tablets.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3 hover:border-blue-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">100% Domain Ownership</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your `.com` or `.in` domain name is strictly registered under your business name and email address. You own your brand.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3 hover:border-blue-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Bilingual Support (Hindi/Eng)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We communicate fluently in both Hindi and English, ensuring a comfortable experience for local shopkeepers and business owners.
            </p>
          </div>
        </div>

        {/* 3 Step Process */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">How It Works</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              3 Simple Steps to Get Your Business Live
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-extrabold text-lg flex items-center justify-center mx-auto shadow-lg">
                1
              </div>
              <h4 className="text-base font-bold text-white">Share Business Details</h4>
              <p className="text-xs text-slate-300">
                Call or WhatsApp Ravi Ranjan ({STARTUP_INFO.contactNo}) with your business name, logo, phone, address, and photos.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 font-extrabold text-lg flex items-center justify-center mx-auto shadow-lg">
                2
              </div>
              <h4 className="text-base font-bold text-white">We Design & Setup Domain</h4>
              <p className="text-xs text-slate-300">
                We craft your custom website design, configure your .com or .in domain, and setup SSL security and WhatsApp buttons.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white font-extrabold text-lg flex items-center justify-center mx-auto shadow-lg">
                3
              </div>
              <h4 className="text-base font-bold text-white">Go Live Worldwide!</h4>
              <p className="text-xs text-slate-300">
                Your business website goes live across the world! Start sharing your custom website link with clients everywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
