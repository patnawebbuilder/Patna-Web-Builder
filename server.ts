import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      startup: 'Patna Web Builder',
      owner: 'Ravi Ranjan',
      contact: '6287339804',
      message: 'Patna Web Builder backend services active'
    });
  });

  // AI Business Website Concept Generator Endpoint
  app.post('/api/generate-concept', async (req, res) => {
    try {
      const { businessName, category, location, goals, preferredDomain } = req.body || {};

      if (!businessName || !category) {
        res.status(400).json({ error: 'Business name and category are required' });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        // Fallback response if GEMINI_API_KEY is not configured
        const cleanName = businessName.toLowerCase().replace(/[^a-z0-9]/g, '');
        const domainExt = preferredDomain === '.in' ? '.in' : '.com';
        res.json({
          success: true,
          concept: {
            businessName,
            tagline: `Patna's Trusted Destination for Premium ${category}`,
            suggestedDomains: [
              `${cleanName}${domainExt}`,
              `${cleanName}patna${domainExt}`,
              `best${cleanName}bihar${domainExt}`
            ],
            colorScheme: {
              primary: '#1E40AF', // Royal Blue
              accent: '#D97706',  // Warm Amber
              bg: '#F8FAFC'
            },
            keySections: [
              'Hero Section with Call/WhatsApp Button',
              'About Business & Owner Introduction',
              `Services / Products Gallery for ${category}`,
              'Google Maps Location & Contact Info in Patna',
              'Customer Testimonials & Ratings',
              'Direct Inquiry Form'
            ],
            recommendedPackage: domainExt === '.in' ? '.in Website (1 Year Plan)' : '.com Website (1 Year Plan)',
            estimatedCost: domainExt === '.in' 
              ? { creation: 10000, maintenance: 5300, total: 15300, note: '₹10,000 One-time + ₹5,300 1-yr Maintenance' }
              : { creation: 10000, maintenance: 6000, total: 16000, note: '₹10,000 One-time + ₹6,000 1-yr Maintenance' },
            aiTips: [
              'Include direct WhatsApp integration so local Patna customers can order instantly.',
              'Add Google Maps location pin for easy navigation to your store or clinic.',
              'Showcase local trust badges and customer reviews in Bihar.'
            ]
          }
        });
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are the lead AI Website Strategy Consultant for "Patna Web Builder", a Patna-based web development startup owned by Ravi Ranjan (Contact: 6287339804).
Generate a custom website development proposal & concept for a local business with the following details:
- Business Name: ${businessName}
- Industry/Category: ${category}
- Location: ${location || 'Patna, Bihar'}
- Business Goals: ${goals || 'Get local customers & establish online presence'}
- Preferred Domain: ${preferredDomain || '.com'}

Return a JSON object ONLY (without markdown formatting) with these exact keys:
{
  "businessName": string,
  "tagline": string (catchy English/Hindi blended tagline for Bihar market),
  "suggestedDomains": array of 3 strings (e.g. name.com, namepatna.in, etc),
  "colorScheme": { "primary": hexString, "accent": hexString, "bg": hexString },
  "keySections": array of 5-6 strings describing pages/sections needed,
  "recommendedPackage": string (either ".com Website (1 Year / 3 Year)" or ".in Website (1 Year / 3 Year)"),
  "estimatedCost": { "creation": number (10000), "maintenance": number (5300, 6000, 9700, or 12000), "total": number, "note": string },
  "aiTips": array of 3 actionable web strategy tips for local growth in Patna
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });

      const responseText = response.text || '';
      const parsed = JSON.parse(responseText);
      res.json({ success: true, concept: parsed });

    } catch (err: any) {
      console.error('Error generating website concept:', err);
      res.status(500).json({
        error: 'Failed to generate AI website concept',
        details: err.message
      });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Patna Web Builder server running on http://localhost:${PORT}`);
  });
}

startServer();
