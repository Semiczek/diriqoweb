# Diriqo — temporary landing page

Public website: https://www.diriqo.com

## Local preview

Run npm ci, npm run build, then npm run start -- --hostname 127.0.0.1 --port 4180.
The main routes are /cs, /en, /de, /pl, /sk, /hu, /es, /tr, /sq, /uk, /ro, /vi and /ar.
Each supports /diriqent, /cookies, /privacy, /gdpr and /predregistrace-soukromi.
The root route negotiates Accept-Language, honoring a previously saved manual choice.
Explicit language URLs are never replaced by browser preferences.
The selector sorts native language names alphabetically, shows six rows at a time and scrolls.
Arabic uses RTL layout; the episode track retains its chronological LTR ordering.
Flag assets are hosted locally; their MIT license is included in public/flags.

## Cookies and privacy

Optional Vercel Web Analytics loads only after explicit consent. Rejection leaves it unloaded.
The beforeSend callback rechecks consent for every event and strips URL queries and fragments.
Withdrawal saves the choice and reloads the page to unload the analytics script and listeners.
Two first-party preferences expire after 180 days: diriqo_language and diriqo_consent_v1.
Visitors can reopen settings in the footer. There are no advertising trackers.
Legal notices in all 13 languages describe the current public landing page and email contact flow.
Operator identity is retained from the original project, not newly verified against a registry.
The email provider, hosting retention and applicable processor agreements remain operational responsibilities of the controller.
Update legal notices and data lifetimes before enabling registration or introducing new providers.

Sources consulted for the implementation:
- https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies
- https://europa.eu/youreurope/business/growing/digitalising/online-privacy/index_en.htm
- https://vercel.com/docs/analytics/privacy-policy
- https://vercel.com/legal/dpa

## Pre-registration

Online collection remains disabled. The page says so and provides a mailto link to support@diriqo.com.
The visitor sends the email themselves; opening it does not save a database record or send a message.
No database, paid service, production secret or account was provisioned by this update.

Before enabling online collection:
1. Select the correct Diriqo Supabase project and review database/waitlist-setup.sql.
2. Apply the setup only to the intended database. It creates new tables and an RPC and is not idempotent.
3. Verify RLS, role grants and security advisors. Only the server service role may execute the registration RPC.
4. Configure NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY and WAITLIST_RATE_LIMIT_SALT on the server.
5. Schedule daily deletion of expired contacts (12 months) and rate-limit records (24 hours).
6. Update all localized legal notices, confirm the controller, processors, regions and international transfers.
7. Test real persistence, consent, duplicates and the hourly rate limit in a test environment.
8. Set WAITLIST_ENABLED=true only after these checks. Existing databases need their locale constraint expanded to all 13 languages separately.

## Validation

npm test runs API, translation completeness, language negotiation and consent expiry tests.
npm run lint and npm run build check the complete application.
Browser QA covers desktop and mobile layouts, RTL, the language menu, manual preference retention,
and consent rejection, acceptance and withdrawal. Local analytics endpoints may return 404 outside Vercel.

The legacy application routes remain in the repository. The temporary landing page does not claim
that product accounts, payments or the AI assistant are available. It uses the supplied mascot and videos.
