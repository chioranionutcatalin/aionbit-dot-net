# Next Agent Handoff

This document summarizes major work completed, project direction, and pending considerations so a new agent can continue quickly.

## Project Direction
- Goal: Convert template into an agency site for Aionbit (outsourcing + delivery + project management positioning).
- Tone: Corporate/premium, service-oriented, multilingual.
- UX direction: Keep strong visual template identity, but adapt content and sections to real business use.
- Deployment target: likely static hosting (Nginx in Docker, low-resource VM 1gb on gooogle cloud vm/micro).

## Environment Notes
- Repo root: `c:/dev/aionbit-dot-net`
- Current OS: Windows
- There are multiple projects in `c:/dev`; do not search globally unless needed.

## Git History Note
- `main` history was squashed into a single commit after migration to personal repository.
- Current root commit on `main`: `58d2a72` (`Initial commit - Aionbit`).
- Previous pre-squash history is kept only in a local backup branch (not pushed): `backup/main-before-squash-20260307-122009`.
- Operational chronology in this document remains valid as project context.

## Task-1: Rebrand Core Content (Done)
- Replaced template product copy with agency/outsourcing copy.
- Updated hero, services, projects, contact, footer text.
- Updated branding references to Aionbit.

Key files:
- `components/hero-home.tsx`
- `components/workflows.tsx`
- `components/testimonials.tsx`
- `components/cta.tsx`
- `components/ui/footer.tsx`
- `components/language-provider.tsx`

## Task-2: Header/Nav Refactor + Mobile Responsiveness (Done)
- Header rebuilt for mobile/desktop stability.
- Language selector simplified to avoid double-arrow artifact.
- CTA spacing and contrast tuned.
- "Skills" nav item removed.
- "Careers" nav item was added then removed.

Key file:
- `components/ui/header.tsx`

## Task-3: Localization System EN/IT/ES/FR (Done)
- Implemented custom language provider with persistence.
- Language persisted via cookie/localStorage using key: `aionbit_lang`.
- Added broad translation coverage for major sections.
- Added translation key for video badge text.

Key file:
- `components/language-provider.tsx`

## Task-4: Projects Section Changes (Done)
- Converted testimonial-style section into project cards.
- Cards link to live projects.
- Removed per-card small descriptions (currently title + image only).
- Added subtle overlay on project images to match site palette.

Key file:
- `components/testimonials.tsx`

## Task-5: Services/Capabilities Restructure (Done)
- Removed "Skills" section heading semantics.
- Reintroduced visual capability block section (the PLAN/PROTOTYPE/PROJECTS/EXECUTE visual + six capability items below).
- Updated first 3 service tile titles/descriptions to match image semantics:
  - Solution Orchestration
  - Monitoring and Optimization
  - Prioritization and Delivery Control
- Replaced Team Augmentation with Mobile Development in capability list.
- Added management flow text above PLAN/PROTOTYPE/PROJECTS/EXECUTE visual.

Key files:
- `components/workflows.tsx`
- `components/features.tsx`
- `components/language-provider.tsx`

## Task-6: Footer Compliance/Info Note (Done)
- Added short cookie disclosure line in footer.
- Current short format explicitly includes cookie key (`aionbit_lang`).
- Footer text order updated per user preference.

Key files:
- `components/ui/footer.tsx`
- `components/language-provider.tsx`

## Task-7: Careers Page Handling (Done - Disabled)
- A `/careers` page was created, then user requested it not be used now.
- Active route removed.
- File retained for future under not-used folder.

Current state:
- Removed route folder: `app/(default)/careers/`
- Retained file: `not_used/careers_page.tsx`

## Task-8: Unused Code Marking (Done)
- `useMasonry` identified as unused.
- Moved from `utils/` to `utils_not_used/`.
- Kept used utility `useMousePosition` in `utils/`.

Current state:
- `utils/useMousePosition.tsx` (used)
- `utils_not_used/useMasonry.tsx` (unused/parked)

## Task-9: Logo Final Update (Done)
- Switched to user-provided v2 dark background logo and tuned sizing to avoid padding/cropping.

Current state:
- `components/ui/logo.tsx` uses `@/public/images/Aionbit-logo/default.png`

## Task-10: Projects Card Height Equalization (Done)
- Ensured project cards render with equal heights regardless of image size or title length.
- Forced consistent 4:3 image aspect ratio and object-fit cover.
- Stretched cards to fill grid row height and clamped title to two lines.

Key file:
- `components/testimonials.tsx`

## Task-11: Header/Footer Final Styling (Done)
- Header background is solid gray-900 (no opacity).
- Footer background uses a subtle right-to-left fade (solid near left, transparent toward right).
- Footer uses two columns: contact details on the left, legal/cookie on the right.
- Footer email set to office@aionbit.net.

Key files:
- `components/ui/header.tsx`
- `components/ui/footer.tsx`

## Task-12: Video Badge Copy Update (Done)
- Updated video badge text to "From plan to product delivery" across EN/IT/ES/FR.

Key file:
- `components/language-provider.tsx`

## Task-13: Footer Label Localization (Done)
- Added translated footer labels for Contact/Legal in EN/IT/ES/FR.

Key files:
- `components/language-provider.tsx`
- `components/ui/footer.tsx`

## Task-14: Contact Form Final (Done)
- Contact form posts to Formspree endpoint https://formspree.io/f/xpqyzklb
- Inline success/error toast feedback.
- Honeypot field to reduce spam.

Key file:
- `components/cta.tsx`

## Important Decisions to Preserve
- Keep site mostly static and lightweight.
- Keep auth pages as template-only for now; no real auth/API integration yet.
- Keep localization in provider (no i18n framework migration currently).
- Keep non-used experiments in `not_used/` style folders instead of deleting immediately.

## Pending/Optional Next Steps
- Static-export hardening for deployment:
  - Consider Next static export config adjustments before production.
  - Verify `next/image` behavior if doing pure static export.
- Add proper legal pages (privacy/cookie policy) and link in footer.
- Final copy polish by native speakers for IT/ES/FR.
- Remove stale translation keys not used anymore if desired.

## Quick File Map (Most Relevant)
- Layout/background: `app/layout.tsx`
- Main page assembly: `app/(default)/page.tsx`
- Header/nav/language: `components/ui/header.tsx`
- Footer/legal note: `components/ui/footer.tsx`
- Hero/video: `components/hero-home.tsx`, `components/modal-video.tsx`
- Services tiles: `components/workflows.tsx`
- Capability visual + 6 services: `components/features.tsx`
- Projects: `components/testimonials.tsx`
- Contact form: `components/cta.tsx`
- Localization: `components/language-provider.tsx`
- Parked files: `not_used/`, `utils_not_used/`

## Notes for Next Agent
- User prefers rapid iterative UI changes with direct implementation.
- User often requests visual tweaks from screenshots; be ready for small spacing/contrast/layout iterations.
- If asked to keep code for later, move to `not_used` rather than deleting immediately.

## Detailed Chronology (Condensed)
- Phase A: Template rebrand from generic product marketing to Aionbit outsourcing agency positioning.
- Phase B: Multiple header fixes for mobile wrapping, selector rendering, duplicate arrow artifact, and spacing tuning.
- Phase C: Language system expanded to EN/IT/ES/FR with persistence in cookie + localStorage.
- Phase D: Testimonials replaced by Projects cards with real links and image overlays.
- Phase E: Services copy and semantics adjusted to match visual story of first 3 cards.
- Phase F: Skills heading/nav removed, then capability visual section reintroduced by user request.
- Phase G: Careers route was created and then intentionally disabled and moved to `not_used`.
- Phase H: Legal/compliance hint added in footer for the language cookie key.
- Phase I: Logo redesign attempts rejected; original logo restored.

## Current UI State (Section by Section)
- Header: Single CTA, language dropdown text-only, no Careers link, no Skills link.
- Hero: Corporate headline about transformation and empowerment.
- Video badge: localized text via `videoBadgeText`.
- Services top row: 3 visual cards with management-oriented labels and descriptions.
- Services lower capability block: PLAN/PROTOTYPE/PROJECTS/EXECUTE visual plus 6 detailed capability entries.
- Projects: image + title only, per-card small description removed from UI.
- Contact: only Send Message button, call button removed.
- Footer: two-column layout (contact left, legal/cookie right) with subtle right-to-left gradient.

## Localization Coverage Notes
- Source of truth: `components/language-provider.tsx`.
- Pattern: all components use `t("key")`; fallback goes to EN if locale key missing.
- Added keys for careers still exist in dictionary even though route is disabled.
- If copy is changed in EN, update IT/ES/FR in same commit to avoid fallback mix.

## Known Technical Gotchas
- This workspace contains many sibling projects under `c:/dev`; always scope searches to `aionbit-dot-net`.
- Alias imports (`@/...`) sometimes showed editor-only resolution warnings in this environment.
- For touched files, relative imports were used in a few places to avoid transient alias diagnostics.
- `next lint` may prompt for ESLint setup and try `pnpm`; environment did not have `pnpm`.
- Static deploy target means route handlers are not desired long-term.

## Static Deploy Guidance (for next agent)
- Confirm static mode strategy before release.
- Check `next/image` compatibility for static export path.
- Remove or park `app/api/hello/route.ts` if strict static-only deployment is required.
- Prefer building in CI or local machine, then upload artifacts to low-RAM VM.
- Nginx should serve exported assets with route fallback behavior appropriate to export mode.

## What Not To Change Without User Approval
- Do not reintroduce Skills nav item.
- Do not re-enable Careers route in nav.
- Do not replace logo again unless explicitly requested.
- Do not remove `not_used` park strategy for deferred features.

## Quick Resume Checklist For Next Agent
- Read `components/language-provider.tsx` first.
- Read `components/ui/header.tsx` second.
- Read `components/workflows.tsx` and `components/features.tsx` for services semantics.
- Read `components/testimonials.tsx` for projects display behavior.
- Keep iterations visual-first and screenshot-driven when user provides references.
