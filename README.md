# Devnfix Website

Premium, responsive official website for Devnfix, a digital technology agency and SaaS product company. The site is designed to explain the offer quickly, showcase Qless, and convert business visitors into qualified enquiries without fabricated social proof.

## Technology stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Install and run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production commands:

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

## Project structure

- `app/` — routes, metadata, sitemap, robots and global styles
- `components/` — reusable page sections and UI components
- `config/site.ts` — editable business/contact configuration
- `data/` — services, portfolio projects and navigation
- `public/brand/` — official logo derivatives for web use

## Company information and contact links

Copy `.env.example` to `.env.local` and add real values. Empty values are deliberately hidden from the public site.

```env
NEXT_PUBLIC_SITE_URL=https://www.devnfix.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@example.com
NEXT_PUBLIC_PHONE=+910000000000
NEXT_PUBLIC_WHATSAPP_NUMBER=910000000000
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/your-profile
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/your-company
```

Use the full international WhatsApp number with country code and no leading `+`. When it is absent, the floating WhatsApp button is not rendered.

## Content updates

- Change company/contact information in `config/site.ts` and environment variables.
- Add or edit services in `data/services.ts`.
- Add portfolio entries in `data/projects.ts`; keep conceptual work clearly labelled until real case studies are available.
- Change navigation in `data/navigation.ts`.

## Contact form delivery

The form currently performs client-side validation but intentionally does not claim to send data. Connect `components/Contact.tsx` to a verified form provider, email API, or a Next.js route handler before launch. Keep validation on both client and server and add rate limiting/spam protection.

## Deploy

Deploy to any platform that supports Next.js. On Vercel, import the repository, add the environment variables above, and deploy. Set `NEXT_PUBLIC_SITE_URL` to the final canonical HTTPS domain before building.
