# aionbit-dot-net

Next.js landing site for Aionbit, focused on outsourcing, digital delivery, and project management services.

## Tech Stack
- Next.js (App Router)
- React
- Tailwind CSS v4
- AOS (scroll animations)

## Main Features
- Agency-style landing page with multilingual support: `EN`, `IT`, `ES`, `FR`
- Language preference persistence via functional cookie key: `aionbit_lang`
- Services, capabilities, projects, and contact sections
- Static-friendly structure for lightweight deployment

## Local Development
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts
```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure (Relevant)
- `app/layout.tsx` - global layout and visual background
- `app/(default)/page.tsx` - main landing composition
- `components/ui/header.tsx` - navigation and language selector
- `components/workflows.tsx` - top Services cards
- `components/features.tsx` - capabilities + delivery flow visual block
- `components/testimonials.tsx` - projects section
- `components/cta.tsx` - contact form section
- `components/ui/footer.tsx` - footer and cookie key notice
- `components/language-provider.tsx` - localization + language persistence

## Deployment Notes
- Project is intended to be deployed in a lightweight setup (e.g., Nginx + Docker on low-RAM VM).
- If deploying fully static, validate Next.js static export/image behavior before release.
- Current auth pages are template-only and not wired to backend auth.

## Repository Notes
- Parking area for deferred work: `not_used/`, `utils_not_used/`
- Extended project context for future agents: `NEXT_AGENT_HANDOFF.md`
