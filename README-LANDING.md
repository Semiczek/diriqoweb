# Diriqo — temporary public landing page

The public home page presents the upcoming modular Diriqo platform, its Diriqent assistant and DiriPOS. It replaces the previous marketing home while retaining existing authentication, billing, onboarding and other marketing routes.

Available languages: Czech (/cs), English (/en), German (/de), Polish (/pl), Slovak (/sk) and Hungarian (/hu).
Each language includes the landing page, /diriqent stories and /predregistrace-soukromi pre-registration privacy notice. The language picker preserves these subpages. The original Spanish, Italian and French home pages redirect to /en.

The separate Diriqent application is not modified. This site links to a local story page and does not simulate an AI chat.

## Run locally

Requires Node.js. Run:

```sh
npm ci
npm run build
npm run start -- --hostname 127.0.0.1 --port 4180
```

Then open http://127.0.0.1:4180/cs. Windows users can run START-PREVIEW.cmd.
For development, use npm run dev. Environment variable names are documented in .env.example; never commit credentials.

## Content and assets

- components/landing: page sections, responsive styles, language navigation, module explorer, form and episode gallery.
- lib/landing: localized text, metadata helpers and episode manifest.
- public/coming-soon: supplied character artwork, three original video episodes and local fonts.
- Core modules include cost management. All product functionality is clearly described as planned.
- The hero uses the supplied desk scene and animated surrounding cards. It is not a newly rendered custom 3D sequence.
- The story gallery starts with episode one centered. Only one video can play; the next episode moves into the center after playback finishes. Manual navigation pauses playback.
- Reduced motion disables decorative animation and automatic hero playback. Clips load on demand.

## Pre-registration integration

Online storage is disabled by default. Without complete configuration, the page honestly offers a mailto contact instead. It never displays registration success without a confirmed database result.

Before enabling storage:

1. Select the correct Diriqo Supabase project. Review and apply database/waitlist-setup.sql in a test database first. This setup creates new objects and is not idempotent.
2. Verify table RLS and that anonymous and authenticated roles cannot access either the tables or registration RPC.
3. Set NEXT_PUBLIC_SUPABASE_URL, server-only SUPABASE_SERVICE_ROLE_KEY and a random WAITLIST_RATE_LIMIT_SALT of at least 32 characters.
4. Schedule daily deletion of expired contacts (12 months) and rate-limit records (24 hours). Cleanup SQL is included at the end of the setup file; opportunistic cleanup alone is insufficient.
5. Review the controller identity, current infrastructure providers, regions and privacy notices before collecting contacts. The operator identity is inherited from the original project.
6. Verify real persistence, concurrent duplicate handling, consent and the five-attempts-per-hour limit in the test database.
7. Set WAITLIST_ENABLED=true only after those checks pass.

Production intake trusts Vercel's overwritten x-vercel-forwarded-for header. Other production hosts fail closed until a trusted client-IP adapter is implemented. Development uses one localhost bucket. Only a daily rotating HMAC of the IP is stored; raw IP addresses are not stored in the waitlist.

Duplicate email submissions never change prior consent or registration. Further email campaigns require an authorized process and an unsubscribe path; registration itself does not send email.

The SQL setup was prepared but not applied as part of the landing-page implementation. If an older two-language setup was applied independently, review and expand its locale constraint to cs, en, de, pl, sk and hu before enabling the new languages.

## Validation

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

See VERIFICATION.md for completed checks and their limits. Preserve existing hosting and app environment settings. The repository contains no credentials, local backups or machine-specific hosting identity.
