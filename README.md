# DriveReady

A responsive driving-theory study game with 129 source-backed questions, personalised practice and an exam-readiness estimate. It runs as a static website with no account system or backend.

## Open the game

Double-click `index.html`, or run `npm start` in this folder and open **http://localhost:4173**. Node.js is required only for the local server. The game itself has no runtime dependencies or external requests and works offline.

Features: 129 questions in six topics, 60 original road-sign images, 12 dashboard symbols, explanations linked to the source scan, 10-question practice rounds, a daily five-question challenge, a custom 20-question/20-minute challenge, saved questions, mistake review, XP, streaks, progress and a reader for all 21 PDF pages.

The publishing edition adds phone navigation with a full menu, larger text and touch controls, a zoomable book reader, readiness milestones, targeted practice, an optional exam countdown, and JSON progress backup/restore under **About & privacy**. Existing valid progress is retained.

Progress is saved in the current browser’s local storage. Use the same browser and address to keep it together. File mode and localhost have separate storage. No account or server database is needed.

## Publish

1. Run `npm run build` to generate **dist/**.
2. Upload the **contents of dist/** to your static website host, or configure a connected build to run `npm run build` with `dist` as the publish directory.
3. Use HTTPS on the published site. Run `npm run preview` to inspect the generated build locally at http://localhost:4173 before uploading.

The build includes only the website and its assets. It excludes tools, scripts, tests, dependencies and local learner data. Every asset URL is relative, so a subdirectory deployment also works. Hash navigation needs no server rewrite rules.

`_headers` includes security headers for hosts that support that file. On other hosts, apply the equivalent response headers through their configuration. `manifest.webmanifest` provides app metadata; this project does not register a service worker or promise offline caching when hosted. Direct file mode works offline because all assets are local.

The supplied scans and sign crops are third-party material. Before publishing those assets, confirm you have permission to redistribute them. This repository does not grant a licence to the book. The app identifies its practice and readiness figures as unofficial; exam rules have not been independently verified against current requirements.

No analytics or external trackers are included. The in-app privacy explanation describes local storage and notes that hosting providers may retain ordinary request logs.

## Vercel deployment

The root `vercel.json` explicitly selects the **Other** framework (`framework: null`), runs `npm ci` and `npm run build`, and publishes only `dist`. These settings override the equivalent project dashboard settings. Keep the Vercel Root Directory set to the repository root so it finds this file.

The homepage is served from `dist/index.html` at `/`. Navigation such as `/#readiness` is handled in the browser. `server.cjs` is a local preview helper and must not be configured as a Vercel Function or as the production entrypoint. No rewrite to a server function is needed.

If an older deployment returns `500 FUNCTION_INVOCATION_FAILED`, deploy the latest commit containing `vercel.json`. Confirm the deployment's source commit matches the latest GitHub commit; redeploying an old deployment does not pick up later code. If needed, use the current `main` branch to create a fresh deployment. Check the build output for static files rather than a server function.

## Readiness calculation

The 0–100 study score is **30% topic coverage + 30% repeat-correct coverage + 40% timed evidence**. All six topics have equal weight, so the larger road-sign question bank cannot hide gaps in another area.

- Coverage: proportion of questions attempted, averaged across topics.
- Repeat-correct: at least two correct attempts, with the latest answer correct and within 14 days. Older answers without a timestamp are preserved but need a fresh correct attempt to count here.
- Timed evidence: percentages in the most recent three eligible 20-question rounds within 14 days, summed and divided by three. Missing rounds count as zero. Viewing the book or answer-review pages during a timed round marks it assisted and excludes it from readiness.

**Strong practice readiness** requires 90% coverage and 80% repeat-correct in *each* topic, plus at least 85% on *each* of the last three eligible timed rounds. These are transparent app benchmarks, not an official pass mark or a predicted probability of passing. Evidence ages out, so the score can decrease. XP and the optional exam date do not affect the score.

Targeted practice chooses unseen questions, mistakes and answers due for review. An untargeted round samples every topic. Unanswered timed questions lower the round’s score and enter mistake review without falsely counting as explored questions.

## Source and scope

Questions were authored from a visual review of `Ders kitabı (İngilizce).pdf` (Tuğşan Yazıcı driving school). References use printed pages 1–20; PDF page numbers are one greater because of the cover. All original page scans are included. Sign images are extracted from the original PDF, without their captions. The final landscape chart has been rotated for easier reading.

This is a practice bank, not an official exam or a claim of full exam coverage. The timed format is custom; no official pass mark or duration is assumed. Some poorly translated or ambiguous passages were excluded. The material follows the supplied book and has not been independently verified against current law.

## Development and checks

`npm test` validates question content, source references and readiness calculations, including new learners, uneven coverage, stale evidence, assisted rounds, migration and calendar-day countdowns.

`npm install` installs the optional browser testing dependency. `npm run test:browser` builds the publishing output and tests full rounds, scoring, persistence, daily bonuses, expiry, bookmarks, mistake review, readiness, backups, reader zoom and layouts from 320 to 1440 pixels. It uses installed Chrome on this Windows machine; set `BROWSER_PATH` for another Chromium executable, or use Playwright’s installed Chromium on other systems. Tests use localhost port 4180 and store runner artifacts in `test-artifacts/`.

`scripts/build_questions.py` holds the curated bank and PDF crop coordinates. It uses PyMuPDF installed in `.tools` to regenerate `questions.js` and sign images from the supplied PDF path. See `study-source/README.md` for source notes.
