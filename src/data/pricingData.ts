import { DomainPlan, WebsiteAddon, DemoTemplate } from '../types';

export const STARTUP_INFO = {
  name: 'Patna Web Builder',
  owner: 'Ravi Ranjan',
  contactNo: '6287339804',
  whatsappNumber: '916287339804',
  whatsappMessage: 'Hello Ravi Sir, I want to create a website for my business in Patna.',
  whatsappUrl: 'https://wa.me/916287339804?text=Hello%20Ravi%20Sir%2C%20I%20want%20to%20get%20a%20website%20made%20for%20my%20business%20via%20Patna%20Web%20Builder.',
  creationFee: 10000,
  tagline: 'Your Own Business Website with Custom Domain - Global Presence at Low Cost',
  location: 'Patna, Bihar, India',
  workingHours: '9:00 AM - 9:00 PM (Monday to Sunday)'
};

export const DOMAIN_PLANS: DomainPlan[] = [
  {
    id: 'com-1yr',
    domainType: '.com',
    duration: '1 Year',
    durationYears: 1,
    creationFee: 10000,
    maintenanceCharge: 6000,
    renewalCharge: 8200,
    totalInitial: 16000,
    popular: false,
    savings: 'Standard 1-Year Global .com Package'
  },
  {
    id: 'com-3yr',
    domainType: '.com',
    duration: '3 Year',
    durationYears: 3,
    creationFee: 10000,
    maintenanceCharge: 12000,
    renewalCharge: 20500,
    totalInitial: 22000,
    popular: true,
    savings: 'Save ₹6,000 vs Paying Annually!'
  },
  {
    id: 'in-1yr',
    domainType: '.in',
    duration: '1 Year',
    durationYears: 1,
    creationFee: 10000,
    maintenanceCharge: 5300,
    renewalCharge: 7600,
    totalInitial: 15300,
    popular: false,
    savings: 'Best for Indian Local Businesses'
  },
  {
    id: 'in-3yr',
    domainType: '.in',
    duration: '3 Year',
    durationYears: 3,
    creationFee: 10000,
    maintenanceCharge: 9700,
    renewalCharge: 17100,
    totalInitial: 19700,
    popular: true,
    savings: 'Save ₹6,200 Over 3 Years!'
  }
];

export const OPTIONAL_ADDONS: WebsiteAddon[] = [
  {
    id: 'ecommerce',
    name: 'E-Commerce Online Store',
    price: 3500,
    description: 'Add Product Catalog, Shopping Cart, & Product Search for local orders.',
    icon: 'ShoppingCart'
  },
  {
    id: 'payment',
    name: 'UPI & Payment Gateway',
    price: 2000,
    description: 'Accept PhonePe, Google Pay, Paytm & QR Code payments directly.',
    icon: 'CreditCard'
  },
  {
    id: 'gmb',
    name: 'Google Maps Business Listing',
    price: 1500,
    description: 'Setup and verification on Google Maps to attract local Patna buyers.',
    icon: 'MapPin'
  },
  {
    id: 'hindi',
    name: 'Dual Language (Hindi + English)',
    price: 2000,
    description: 'Bilingual website switch so all customers in Bihar can read easily.',
    icon: 'Languages'
  },
  {
    id: 'logo',
    name: 'Custom HD Logo Design',
    price: 1500,
    description: 'High-resolution logo with source files for branding & visiting cards.',
    icon: 'Palette'
  }
];

export const DEMO_TEMPLATES: DemoTemplate[] = [
  {
    id: 'coaching',
    title: 'Patna Career IAS & NEET Academy',
    category: 'Educational & Coaching Institute',
    locationTag: 'Boring Road, Patna',
    description: 'Complete website with Course Listings, Admission Form, Batch Timings, and Direct WhatsApp Inquiry.',
    colorTheme: 'from-blue-700 to-indigo-900',
    heroHeading: 'Patna’s Premier Coaching Institute for Competitive Exams',
    heroSubheading: 'Empowering students across Bihar with expert faculties, updated test series, and top results.',
    services: ['UPSC & BPSC Batch', 'NEET & JEE Coaching', 'Online Admission Form', 'Free Demo Class Booking'],
    contactPhone: '6287339804',
    demoUrl: 'patnacareer.in',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'clinic',
    title: 'Dr. Sinha Specialty Health Clinic',
    category: 'Doctor Clinic & Hospital',
    locationTag: 'Bailey Road, Patna',
    description: 'Clean medical website with Online Doctor Appointment Booking, OPD Schedule, and Google Maps Location.',
    colorTheme: 'from-teal-600 to-emerald-800',
    heroHeading: 'Trusted Healthcare & Specialist Consultation in Patna',
    heroSubheading: 'Providing compassionate medical care, advanced diagnosis, and emergency consultation.',
    services: ['OPD Consultation', 'Online Appointment', 'Health Checkup Packages', 'Emergency Call Button'],
    contactPhone: '6287339804',
    demoUrl: 'drsinhaclinic.com',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'restaurant',
    title: 'Royal Sweets & Family Restaurant',
    category: 'Sweets, Bakery & Restaurant',
    locationTag: 'Kankarbagh, Patna',
    description: 'Vibrant food website with Digital Menu Card, Online Order via WhatsApp, Party Lawn Booking.',
    colorTheme: 'from-amber-600 to-orange-800',
    heroHeading: 'Famous Patna Sweets, Snacks & Authentic Bihari Thali',
    heroSubheading: 'Freshly prepared pure ghee sweets, catering services, and family dining hall in Kankarbagh.',
    services: ['Digital Food Menu', 'Bulk Party Catering', 'WhatsApp Food Order', 'Special Litti Chokha & Sweets'],
    contactPhone: '6287339804',
    demoUrl: 'royalsweetspatna.in',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'trader',
    title: 'Maurya Hardware & Building Supplies',
    category: 'Retail Store & Wholesale Shop',
    locationTag: 'Patna City, Bihar',
    description: 'Product catalog showcase with Request Quote button, Wholesale Rates list, and Contact Form.',
    colorTheme: 'from-slate-700 to-slate-900',
    heroHeading: 'Leading Hardware & Construction Material Supplier in Patna',
    heroSubheading: 'Quality cement, steel, sanitaryware, and electrical items at wholesale prices.',
    services: ['Wholesale Product Catalog', 'Price List Download', 'Instant Call for Bulk Orders', 'Delivery Across Bihar'],
    contactPhone: '6287339804',
    demoUrl: 'mauryahardware.com',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  }
];

export const FAQS = [
  {
    question: 'What is included in the ₹10,000 Website Creation Fee?',
    answer: 'The ₹10,000 one-time fee includes complete custom website design, mobile and tablet responsive layout, WhatsApp instant chat button, Google Maps listing integration, fast cloud server setup, SSL security certificate (HTTPS lock), basic SEO setup, and content formatting for up to 5-10 pages.'
  },
  {
    question: 'What is the Maintenance Charge for .com and .in websites?',
    answer: 'The annual or 3-year maintenance fee covers domain registration/renewal, fast cloud hosting server costs, technical maintenance, security updates, and backup. For .com, it is ₹6,000 for 1 yr or ₹12,000 for 3 yrs. For .in, it is ₹5,300 for 1 yr or ₹9,700 for 3 yrs.'
  },
  {
    question: 'What will be the renewal cost in the future?',
    answer: 'We believe in 100% pricing transparency! For .com: Renewal is ₹8,200 after 1 year, or ₹20,500 after 3 years. For .in: Renewal is ₹7,600 after 1 year, or ₹17,100 after 3 years.'
  },
  {
    question: 'Will I be the owner of my domain name?',
    answer: 'Yes! Your domain name (e.g., yourbusinessname.com or .in) will be strictly registered under your business name and email address. You retain full ownership.'
  },
  {
    question: 'How long does it take for my website to go live?',
    answer: 'Most business websites created by Patna Web Builder go live within 3 to 5 business days after receiving your details (business name, images, logo, and text).'
  },
  {
    question: 'How can I contact founder Ravi Ranjan directly?',
    answer: 'You can call or WhatsApp Ravi Ranjan directly at +91 6287339804 anytime between 9 AM and 9 PM. Personal face-to-face consultation is also available in Patna!'
  }
];
