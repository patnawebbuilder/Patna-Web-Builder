import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PricingSection } from './components/PricingSection';
import { AIConceptGenerator } from './components/AIConceptGenerator';
import { DomainChecker } from './components/DomainChecker';
import { WhyPatnaWebBuilder } from './components/WhyPatnaWebBuilder';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { AnimatedSection } from './components/AnimatedSection';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { EnquiryModal } from './components/EnquiryModal';

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased selection:bg-amber-400 selection:text-slate-950 relative overflow-x-hidden">
      {/* Scroll Progress Bar at the top of screen */}
      <ScrollProgressBar />

      {/* Navigation Header */}
      <Header onNavigate={scrollToSection} />

      {/* Main Content Sections with Powerful Scroll-Triggered Animations */}
      <main className="space-y-4">
        <div id="hero">
          <Hero onNavigate={scrollToSection} />
        </div>

        {/* Pricing Plans Section - Zoom & Fade Entrance */}
        <AnimatedSection direction="zoom">
          <PricingSection />
        </AnimatedSection>

        {/* AI Website Proposal Generator - Slide Up Entrance */}
        <AnimatedSection direction="up">
          <AIConceptGenerator />
        </AnimatedSection>

        {/* Domain Search Checker - Slide Right Entrance */}
        <AnimatedSection direction="right">
          <DomainChecker />
        </AnimatedSection>

        {/* Why Choose Us & Process - Slide Left Entrance */}
        <AnimatedSection direction="left">
          <WhyPatnaWebBuilder />
        </AnimatedSection>

        {/* FAQs - Zoom & Slide Entrance */}
        <AnimatedSection direction="zoom">
          <FAQSection />
        </AnimatedSection>

        {/* Contact & Owner Info - Upward Entrance */}
        <AnimatedSection direction="up">
          <ContactSection />
        </AnimatedSection>
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Persistent Floating WhatsApp Action */}
      <WhatsAppFloat />

      {/* 10-Second Timed Enquiry Registration Modal */}
      <EnquiryModal />
    </div>
  );
}

