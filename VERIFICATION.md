# Landing-page verification

Validated locally on 10 October 2026.

- Production build passed, including TypeScript and 128 generated routes.
- ESLint and the standalone TypeScript check passed.
- Nine API tests passed. They cover validation, all six locales through the RPC boundary, origin checks, request size, unavailable configuration, rate limits, persistence failures and truthful success responses. The database call is mocked.
- Twenty-five HTTP checks passed for six home pages, six story pages, six privacy notices, six Open Graph images and the legacy Spanish home redirect.
- Earlier HTTP checks also verified unavailable registration returns 503 and MP4 byte-range requests return 206.
- Chrome checks covered desktop 1440 px, tablet 768 px and mobile 390/320 px. German, Polish, Slovak and Hungarian text and localized registration controls were checked.
- Language switching preserves story/privacy subpages. Keyboard Escape closes language and mobile navigation controls and restores focus.
- Cost management is present with localized descriptions in all six languages.
- The three original videos play individually; automatic progression centers the next episode and manual navigation pauses playback.
- The final browser console check contained no warnings or errors.

## Limits

- No database setup was applied. Real persistence, database grants, retention scheduling and concurrent database limits require integration testing before activation.
- Reduced-motion behavior is implemented and code-reviewed; changing the operating system preference was not emulated.
- Existing authentication, billing and onboarding code was preserved; authenticated production flows were not exercised.
- Original videos were reused. No new animation, dubbing or subtitles were created.
- This report describes local validation and does not establish production deployment success.

The original source and Git history were backed up locally before changes. The source archive's 124 file hashes and Git bundle were verified. A full running-system restore was not rehearsed, and cloud data is outside the backup scope.
