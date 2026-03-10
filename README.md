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

## GCP VM Deployment (GitHub Actions)
This repository includes a workflow at `.github/workflows/deploy-vm.yml` for deploying to a Google Cloud VM over SSH.

### What it does
- Builds static output (`next.config.js` uses `output: "export"`)
- Uploads `out/` + Docker/Nginx files to `/opt/aionbit-dot-net` on VM
- Runs `docker compose up -d --build --remove-orphans`

### Required GitHub Secrets
- `VM_HOST` - VM public IP or DNS
- `VM_USER` - SSH username
- `VM_SSH_KEY` - private key (PEM content)
- `VM_PORT` - optional, defaults to `22`
- `VM_APP_DIR` - optional, defaults to `/home/<VM_USER>/aionbit-dot-net`
- `FORMSPREE_FORM_ID` - only the form id
- `SITE_PORT` - optional, defaults to `8081`

### Important for GCP networking
- Current VM IP is ephemeral in your notes. Reserve a static external IP in GCP and attach it to the VM, otherwise DNS and deploy target can break after stop/start.

### Why Formspree is hidden
- Frontend submits to `/form-submit` (same domain)
- Nginx proxies `/form-submit` to `https://formspree.io/f/${FORMSPREE_FORM_ID}`
- Formspree endpoint does not appear in tracked frontend source

## Domain + HTTPS Checklist
1. DNS: create `A` record for `aionbit.net` to VM IP.
2. DNS: create `CNAME` for `www` -> `aionbit.net`.
3. Open firewall ports `80` and `443` on VM/security group.
4. Issue TLS cert (Let's Encrypt) using Certbot or Nginx Proxy Manager.
5. Route HTTPS traffic to this container (directly or through reverse proxy).

## Repository Notes
- Parking area for deferred work: `not_used/`, `utils_not_used/`
- Extended project context for future agents: `NEXT_AGENT_HANDOFF.md`
