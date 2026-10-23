# Current status — bilingual website published and verified

User authorized publishing the current approved bilingual single-page website. Preserve existing primary Cloudflare and secondary GitHub Pages hosting. Starting local/remote main: `a99e2400e7c5de69169254dcabbd77aba8325136`. No additional design changes. Readiness/source-precommit PASS. Source commit `2555a5855a76a0f0eede307401bce2e2883835ef` pushed normally to main. Cloudflare Pages and GitHub Pages both report success for that source. Both hosts serve fourteen content files matching the clean export (primary uses only documented Cloudflare email/analytics normalization; secondary exact). Documentation and missing routes return 404. Live desktop/mobile tests pass for English/French globe switching, preserved service fragments/reload, legacy route, hidden search, removed Back-to-top and no overflow/console errors.

Evidence: `publish-source.json`, `publish-precommit-guardian.md`, `publish-deployments.json`, `publish-live-primary.json`, `publish-live-secondary.json`, `publish-browser.json`. Live preview: <https://ddcnorth.com/>. Final independent deployed-product/evidence-precommit audit PASS (`publish-guardian.md`). LIVE-001–003 are VERIFIED. Final independent transport/completion-marker audit PASS at evidence commit `78f9cc5070513f78ce96e6a9f21759c13d59e38f`: clean tree, matching remote, successful Cloudflare deployment and unchanged public files. Guardian approved this bounded completion-marker commit and final read-only transport checks, with no further audit round unless a check fails. No open findings. Primary <https://ddcnorth.com/>, French <https://ddcnorth.com/fr/>, secondary <https://ddcnorth.github.io/website/>.

# Historical — M12 globe dropdown and footer update verified

Local-only globe language disclosure and Back-to-top removal. Readiness PASS; GLOBE-001–003 VERIFIED after final independent PASS. No open findings. Audit: `docs/validation/globe-guardian.md`. Original globe restored in native disclosure; localized accessible trigger, full English/Français choices and current-language indication. Back-to-top link/arrow/styles removed from both footers. Main HTML content and search flag unchanged. Source/build/HTTP and clean-copy build pass, three JS syntax checks and whitespace pass. Desktop and 390/320 px mobile checks pass: pointer/keyboard opening, Escape focus return, outside click/focus, selection closing, mobile services, fragment-preserving locale/prefix navigation, and native no-JavaScript selection. No console errors. Reports: `globe-source.json`, `globe-browser.json`. Final review PASS; local preview running and open. No publication. Baseline: `/var/folders/zz/145_sp9926l4ny9j3xz_1hch0000gn/T/ddcnorth-before-globe-gm_85ep6`.

# Historical — M11 bilingual cleanup verified

Local-only requested cleanup and full French translation. Baseline: `/var/folders/zz/145_sp9926l4ny9j3xz_1hch0000gn/T/ddcnorth-before-bilingual-xfs5s72j`. Existing M10 completion is historical for the authorized changes. Readiness audit PASS. LANG-001–004 are VERIFIED after independent readiness and final completion PASS. No open findings. Final audit: `docs/validation/bilingual-guardian.md`.

English and French are complete static single pages, with all requested removals. Search is retained behind `assets/config.js` (`searchEnabled: false`), initially hidden/inert and disabled. A separate temporary build with the flag enabled passes localized search, keyboard, empty/no-match/Escape and mobile-submit checks in both languages. French remains complete with scripts disabled. EN/FR switching preserves service fragments and reloads, including `/website/` deployment paths. Default search is skipped by keyboard and hidden in the mobile menu.

Source/build/HTTP equality passes for 14 public files plus `.nojekyll`; 68 internal root/project-prefix targets pass. Existing brand/font/footer assets preserved; no horizontal overflow at desktop/mobile, additionally French at 320 and 900 px. Syntax/whitespace and clean-copy build pass; no browser console errors. Evidence: `docs/validation/bilingual-source.json` and `bilingual-browser.json`. Screenshots include full French desktop/mobile plus header/hero preview. Only the French workflow path filter/build inclusion changed deployment support; no hosting settings, commit, push, or publication. Final independent audit PASS; local preview remains open and running. No publication.

Audit finding LANG-404-001: the added French 404 link used host-root `/fr/`, which loses the GitHub project prefix. Corrected both error-page home links to the canonical primary English/French URLs. Rebuilt and reran source/build/HTTP checks; corrected 404 markup contains canonical absolute destinations.

# Historical — M10 one-page site and minimal footer verified

User requests one page and a smaller minimal footer. Preserve current content/design outside section consolidation, anchor routing and footer simplification. Baseline snapshot: `/var/folders/zz/145_sp9926l4ny9j3xz_1hch0000gn/T/ddcnorth-before-one-page-a5pjcx3v`. Previous M4/M9 layouts are superseded only within the authorized scope. No publication requested.

M10 readiness and final independent local-completion audits PASS. ONE-001–003 are VERIFIED; no open findings. Audit: `docs/validation/one-page-guardian.md`. Existing section content is consolidated after the unchanged hero, and navigation/search use home anchors. The footer measures 96 px on desktop and 127.36 px at 390 px mobile (both within limits). Root and project-prefix legacy redirects preserve service fragments. Source preservation, unique IDs/headings, 44 internal references, clean build, 12 public HTTP/source matches, syntax/whitespace, mobile menu, search, exclusive service disclosures, reload/same-hash links and keyboard footer focus pass. Browser console errors: none. Evidence: `docs/validation/one-page-source.json`, `one-page-browser.json`; desktop/mobile screenshots recorded in the browser report. No commit or publication. Local site is running at <http://localhost:8000/>; the original browser tab is open at the homepage.

# Historical — M9 previous website restored

M9 readiness and final independent local-completion audits: **PASS**. REVERT-001–003 are VERIFIED; no mandatory findings remain. The mockup-based M8 iteration is reversed. The site exactly matches the pre-M8 version, including all earlier requested edits and M7 eyebrow removal. It is running at <http://localhost:8000/> and the browser has been refreshed. No commit, push, or publication occurred. The recovery snapshot retains M8 if needed.

Evidence: `docs/validation/reversal-source.json`, `reversal-browser.json`, and `reversal-guardian.md`. Restored screenshot: `/Users/amiretminanrad/.codex/visualizations/2026/10/21/01a1603b-b1dc-7230-9837-262360e19679/restored-preview.png`. All pending statements below describe historical work states and are superseded by this final record.

# Historical — M9 verification passed — completion audit pending

All nine target files exactly match `a99e240` plus the approved M7 eyebrow removal. Production Git diff is now only that one-line M7 removal. Eleven public files match source/build/HTTP 200; hosting/build/licenses/404 are unchanged. Syntax and whitespace checks pass. All four pages fit at 1440 and 390 px; the original two-row header/footer and earlier removals are present, M8 overview/profiles absent. Search, mobile navigation and exclusive service disclosures pass with no console errors. Evidence: `docs/validation/reversal-source.json` and `reversal-browser.json`. M8 is explicitly historical/superseded. Readiness PASS; final independent audit pending. Local server remains running, user tab refreshed.

# Historical — M9 restored — verification in progress

Readiness audit PASS. The nine target files now exactly restore the pre-M8 website, retaining M7. Rebuilding and refreshing the local preview; final independent audit pending. No commit or publication.

# Historical — M9 reversal in progress

The user requested reversing the latest changes. Target: pre-M8 site (`a99e240` plus approved M7 eyebrow removal), with earlier removals, subpages and refined search retained. M8 recovery snapshot: `/var/folders/zz/145_sp9926l4ny9j3xz_1hch0000gn/T/ddcnorth-m8-before-revert-adsmguns`. Exact target comparison prepared; production restoration awaits readiness audit. M8 completion entries below are historical and superseded by this reversal.

# Historical — M8 completed, subsequently reversed by M9

Independent milestone and final local-completion audit: **PASS**. ITER-001–006 are VERIFIED. No mandatory findings remain; PG-M8-001 was resolved before implementation. Audit report: `docs/validation/iteration-guardian.md`. The guardian confirmed the selective reference use, measured compactness, preserved brand/removals, four-page layouts, build integrity, and navigation/search behavior.

The local homepage is ready at <http://localhost:8000/>. The original browser tab is restored to the homepage; responsive overrides are cleared. Final preview screenshot: `/Users/amiretminanrad/.codex/visualizations/2026/10/21/01a1603b-b1dc-7230-9837-262360e19679/iteration-preview.png`. Current work is uncommitted and unpublished, as a local design iteration. The last public deployment remains the M6 release below.

The entries below are chronological evidence from earlier work states; pending/in-progress statements in historical entries are superseded by this completion record.

## Historical — M8 implementation and verification — awaiting independent completion audit

ITER-001–006 are IMPLEMENTED. See `docs/ITERATION.md` for source selection, design rationale, measured comparisons, and verification procedure. Header/hero/footer reduced from 154/635/305 px to 84/432/153 px at desktop; new service overview is 142 px. Main paragraphs are 24 words or fewer. Homepage is 1219 px tall on mobile. All four pages fit at 1440/390/900 px, and mobile search controls are 48 px with 16 px input text.

Source/build/HTTP agreement, clean-copy build, 144 root/project-prefix references, original font/logo preservation, retained removals, JavaScript syntax, and whitespace checks pass. Browser search/dropdown/mobile/keyboard/deep-link/legacy-route checks pass. Per-page network captures (without event truncation) and console inspection show no errors. Eight screenshots were visually reviewed. Search Escape handling was corrected to keep results dismissed after returning focus to the input.

Evidence: `docs/validation/iteration-source.json` and `iteration-browser.json`. Readiness re-audit PASS resolved PG-M8-001. No publication or commit was performed. Completion is pending the required independent audit.

Baseline verification note: the earlier temporary snapshot path was no longer available. Reconstructed the baseline from HEAD `a99e240` plus the already-approved M7 single-paragraph removal; no other production changes existed before M8. New path: `/var/folders/zz/145_sp9926l4ny9j3xz_1hch0000gn/T/ddcnorth-baseline-recovered-vw9s7zqv`.

## Historical — M8 implementation in progress

Readiness re-audit returned PASS; PG-M8-001 is resolved. Implementing the selectively adapted reference as a local iteration. Existing embedded fonts and logo SVG are retained exactly. The header is now one row, home has three concise service links, services have concrete examples, and process/team pages use compact content grids. Next: build, DOM/layout measurements, desktop/mobile interaction review, and independent completion audit.

## Historical — M8 readiness correction

The first readiness audit returned FAIL (PG-M8-001): qualitative compactness/concision criteria needed measurable bounds. Recorded and corrected by adding paragraph word limits, header/hero/footer/document dimensions, spacing limits, viewport sizes, empty-column checks, and explicit keyboard-focus/mobile search control requirements to M8. Re-audit pending; production implementation has not begun.

# Publication status

## Historical — Compact mockup-informed iteration (2026-10-22)

The user requested a next local iteration with concise content and purposeful spacing. The supplied mockup was read and rendered. Selected ideas: simpler navigation, practical service examples, three process steps and concise founder roles. Excluded: lorem ipsum/product placeholders, placeholder email, large repeated marketing sections, pricing/ownership promises and unsupported capability claims. Existing logo, fonts, colours and four-page structure remain the foundation. M8 ITER-001–006 recorded; readiness audit pending. No publication requested.

## Local homepage eyebrow removal (2026-10-22)

The user's new browser comment requests removal of the `Planning · Data · Digital` label and dot above the headline. EDIT-008 records this narrow local-preview change after the completed release below. Independent M7 readiness audit: PASS. The exact paragraph and dot are removed; all other production source is unchanged. Build/local HTTP equality and desktop/mobile DOM/layout checks passed, with no overflow. The headline, description, artwork, CTA and services-dropdown heading remain. Evidence: `docs/validation/eyebrow-removal.json` and saved desktop/mobile screenshots. Independent M7 completion audit: PASS. EDIT-008 is VERIFIED, with no outstanding findings. No commit, push or publication performed for this local edit.

## Publish reviewed updates (2026-10-22)

The user authorized publishing the completed edits, subpages and search refinement, then requested removal of the homepage introduction strip during release verification. Both changes are pushed to `ddcnorth/website` main. Final public source is `29facdc0c1948e960365c9751eeeb51c02063261`; source `853aeb7` was the earlier release before the strip removal. Remote main matches the final source. M6 readiness, source precommit, host-normalization amendment, strip-removal readiness and follow-up implementation/precommit audits returned PASS. Independent deployed-product completion and evidence-precommit audit: PASS. All RELEASE-001–004 are VERIFIED after the final full-scope audit returned PASS. All 19 current edit/page/search/release requirements are fully traced and verified, with no failed, blocked or unmapped criteria.

Cloudflare deployment `95d49007-0194-4081-b0d7-9619a1b13bdc` and GitHub Actions run `39837506624` both succeeded for final source `29facdc0c1948e960365c9751eeeb51c02063261`. `docs/validation/release-deployments.json` records those commit-specific results. `release-live-primary.json` and `release-live-secondary.json` confirm all eleven served public files match the clean build. Cloudflare HTML matches exactly after the approved narrow removal of its analytics/email-decoding scripts and decoding protected mailto hrefs; assets and all secondary HTML match raw bytes. Raw/compared hashes and transformation counts are recorded. Repository docs and missing paths return 404. No host setting changed.

`release-source.json` records the final clean staged export: twelve published files including `.nojekyll`, 171 scoped root/project-prefix link checks, unique IDs, one h1 per content page and JavaScript syntax success. The final production diff from the earlier release is exactly the requested one-line introduction-strip removal. `intro-removal.json` records local desktop/mobile removal and retained hero/CTA/footer layout.

`release-browser.json` records live verification of all four pages at desktop and 390 px mobile: no introduction strip, service tags, hero note or contact invitation; working search/service fragments/reloads/footer links, no-match/Escape/empty behavior, mobile navigation, legacy route, secondary-host search and correct Cloudflare-decoded contact addresses including the project subject. No overflow or console errors were found. Live desktop/mobile homepage screenshots were visually inspected. Verification procedure: open each page; search data from About us, press Enter and reload; follow the footer Planning link; test no-match/Escape/clear; use the mobile menu; test secondary-host digital search; visit /#about. Live screenshot directory is recorded in the browser report.

Earlier local-only sections below remain historical; the explicit publication request superseded their local-only scope. The pre-existing secondary 404 home link points at `/`, as recorded by the precommit audit; this release did not change it. Evidence commit `10d250d93cf30da0307f0cc5cd58219ea6b61e48` was pushed with matching remote SHA and a clean tree. Its Cloudflare deployment `a64dc241-1f63-46df-bc55-971837c06e34` succeeded, and all eleven served files matched the same public manifest. `release-final-transport.json` records this result. The final guardian PASS approves this completion-record commit/push, followed by transport checks without another evidence commit; public source remains unchanged.

## Search design refinement (2026-10-22)

M5 records the user's request for a search design that fits the website. Independent readiness audit: PASS. Final independent M5 completion audit: PASS. SEARCH-001–003 are VERIFIED. The guardian independently confirmed scope preservation, computed styling, four-page desktop/mobile layouts, keyboard/search behavior, source/build/HTTP equality and syntax/whitespace checks. No findings remain. Production changes are limited to shared search CSS: a fine underline, existing brand colors, coordinated result rows and visible focus states. The original HTML, JavaScript and all non-search CSS match the pre-edit checkpoint. Local preview only; no commit, push or deployment.

`docs/validation/search-design-source.json` records preserved production source and non-search CSS, matching build files and served CSS. `docs/validation/search-design-browser.json` records all four pages at desktop/mobile sizes, 44 px desktop and 48 px mobile input/button heights, 16 px mobile text, no overflow or console errors, navy input focus, visible keyboard focus for submit/results, working results and no-match/clear/Escape behavior, cross-page keyboard navigation and submit-button navigation. Build, JavaScript syntax and whitespace checks pass. Desktop focus/results and mobile screenshots were inspected. Reproduction: search for `data`, Tab through the submit button/result, press Enter and confirm the Data panel opens; test a nonexistent term, Escape and clearing; search `approach` and click submit; repeat from the mobile menu. Evidence screenshots are saved in the browser report’s artifact directory.

## Separate content pages (2026-10-22)

The user chose a short homepage and separate Services, Our approach and About us pages. Independent M4 readiness audit: PASS. Final independent M4 completion audit: PASS. PAGE-001–005 are VERIFIED, and EDIT-001–007 remain VERIFIED under the documented page-location adjustment. The guardian found all 12 current requirements fully traced, with no failed, blocked, or unmapped requirements. Home retains the original hero and introduction strip. The three original detail sections now live at `/services/`, `/approach/`, and `/about/`, with shared styling, navigation, search, and footer. All seven M3 edits remain in place. Work remains local, with no commit, push, or deployment. The guardian independently compared original CSS/section content, checked build/source equality and script syntax, and verified root/project-prefix navigation, search, fragments, accordions and mobile layouts before approving this local deliverable.

`docs/validation/subpages-source.json` records preserved section content and CSS against the M3 checkpoint, one h1 and unique IDs per page, distinct metadata, 172 root/project-prefix link checks, and matching source/build/local HTTP responses for every published file. `sh scripts/build.sh`, `node --check assets/header.js`, and `git diff --check` pass.

`docs/validation/subpages-browser.json` records all four pages at desktop (1395 px) and mobile (390 px), no horizontal overflow, no console errors, cross-page search, direct/reloaded service fragments, same-page service links including an unchanged hash, exclusive accordions, no-match/empty/Escape search behavior, contact mailto, mobile menu navigation, and all six legacy home fragment redirects. A separate copy of the build under `/website/` also passed home navigation, search, service reload and legacy redirect checks. Screenshots in the report's artifact directory were visually inspected. Manual reproduction: open each local page; search `data` from About us and press Enter, then reload; open another panel and follow footer service links; use the mobile menu; visit `/#approach` and `/#service-data`; repeat the cross-page checks with the build served under a project prefix.

## Local browser-comment edits (2026-10-22)

The user requested seven focused changes to the original design, now recorded as EDIT-001 through EDIT-007 in the M3 plan and traceability. Work is local preview only. Independent readiness audit: PASS. All seven requested edits are implemented. Focused source/build/browser verification passed; the final independent completion audit returned PASS. EDIT-001 through EDIT-007 are VERIFIED for the requested local preview. The guardian independently confirmed all seven edits, search match/no-match/empty behavior, exclusive accordion behavior, mobile navigation, original label sizes, valid HTTP/build contents, and the tightly scoped production diff. The original deployment records below remain historical evidence of the published source.

Verification evidence: `docs/validation/browser-comments.json` records the seven DOM changes, preserved artwork label sizes (11 px at 1074 px, 10 px at 390 px), valid remaining fragments, working contact search email destination, search opening the Data panel, mobile menu closing after navigation, no horizontal overflow, and no browser console errors. `docs/validation/browser-comments-source.json` records matching source/build/HTTP 200 responses for all seven public files, unique IDs, valid fragment targets, JavaScript syntax checks, and the expected build file list. Desktop and mobile full-page screenshots were visually inspected. `git diff --check` passes. The local browser was refreshed without cached assets and returned to normal desktop size. No commit, push, or remote deployment was performed for these edits.

## Cloudflare primary hosting — October 21, 2026

Primary website: <https://ddcnorth.com/>. Cloudflare Pages project
`ddcnorth-website` connects directly to <https://github.com/ddcnorth/website>.
The production branch is `main`; other branches produce preview deployments.
The build command is `sh scripts/build.sh`, with output directory `_site`.

Initial Cloudflare deployment `d94d3a8e-a172-42d3-a820-6fb123fc2626` succeeded
for source commit `2445d7b3321f17f8b278458058d72adf54edf587`. Its public HTML,
three assets, and both font licenses matched the build byte-for-byte. Missing
paths and repository documentation returned HTTP 404.

Vercel remains the domain registrar. DNS now uses
`andronicus.ns.cloudflare.com` and `reza.ns.cloudflare.com` in Cloudflare zone
`693d6db450e026fc01b4f5829efe50f4`. Both the apex and `www` point to
`ddcnorth-website.pages.dev`. The pre-existing Microsoft verification MX/TXT
and three CAA records were preserved. HTTPS redirects are enabled.

Cloudflare's GitHub App is restricted to this repository. No Cloudflare token
is stored in the repository or GitHub Actions secrets. The existing GitHub Pages
workflow remains as a secondary deployment and uses the same build script.

Website content and styles are preserved. Hosting changes update `og:url`, add
the canonical domain, and provide a small 404 page. The earlier source-integrity
reports below describe the original GitHub Pages import before these changes.

## Earlier GitHub Pages publication

The website is deployed at <https://ddcnorth.github.io/website/> from source commit `eeb5497b7ccd04d201873ab95cb1b42c1ebd2b21`, pushed to `main` in <https://github.com/ddcnorth/website>.

GitHub Actions [run 39674617078](https://github.com/ddcnorth/website/actions/runs/39674617078) and deployment `7237113808` succeeded for that exact source commit. Repository visibility is public, Pages uses the workflow publishing source, and HTTPS is enforced. Future pushes affecting website files trigger deployment; documentation-only updates do not.

## Source preservation

All seven archive files were imported. The only differences are the `og:url` replacement and original trailing whitespace removed at `index.html:28` and `licenses/SpaceMono-OFL.txt:21`. Visible content, design, JavaScript, embedded fonts and license text are preserved. `docs/validation/source-integrity.json` records the expected file hashes.

## Verification

- `docs/validation/local.json`: 19 local checks passed before the two nonsemantic whitespace removals.
- `docs/validation/source-integrity.json`: final archive comparison passed with only the three documented exceptions.
- `docs/validation/deployment.json`: successful deployment workflow for the source commit.
- `docs/validation/live.json`: 19 checks passed against the public site, using a fresh `git archive` export of the committed source and fresh Chromium pages.
- `docs/validation/live-content.json`: public HTML, three assets and both font licenses returned HTTP 200 and matched the clean export byte-for-byte; metadata URL was correct; repository documentation returned HTTP 404 as intended.
- `node --check` passed for external and inline JavaScript. `git diff --cached --check` passed before the source commit. Local and remote source SHAs matched, with a clean working tree after push.

Desktop (1440 px) and mobile (390 px) screenshots were visually inspected. No horizontal overflow, browser console errors, failed assets, or broken fragment targets were found. Both contact links correctly use `mailto:Fryderyk@ddcnorth.com`.

Manual browser verification procedure: search for "data" and verify the Data & insight result; search for a nonexistent term and verify the no-match message; clear the query and use Escape to dismiss results. Press Enter on a data match and confirm that service opens. Open/dismiss the services menu, follow a service link, and confirm only one accordion panel is open. On mobile, open the menu, follow About and confirm it closes; reopen and dismiss using Escape. Check section anchors, email link destinations, layout width, and browser console/network errors.

The session runner is `/tmp/ddcnorth-validation/validate.cjs`. Live verification used `DDCNORTH_REPO=/tmp/ddcnorth-release.qc4WMi node /tmp/ddcnorth-validation/validate.cjs https://ddcnorth.github.io/website/`. Saved reports and the manual procedure retain the verification evidence independently of temporary session files.

## Independent audit record

1. Initial readiness: FAIL. PG-001 identified missing planning/traceability; PG-002 identified underspecified hosting and public verification. Both findings were recorded and corrected before implementation.
2. Readiness re-audit: PASS. All four requirements traced, with explicit import, push, deployment and audit criteria.
3. Revised hosting readiness: PASS. GitHub originally rejected Pages on the private Free-plan repository (HTTP 422). The user explicitly chose to make the repository public and deploy with free Pages. The authorized visibility change and Pages setup succeeded; no DNS or subscription changes were made.
4. Source implementation/precommit: PASS. The guardian independently reran all 19 browser checks and confirmed source preservation and Pages configuration.
5. Whitespace amendment readiness and focused precommit review: PASS. Staging exposed two original trailing-space lines; the plan permitted exactly those trims. The guardian independently confirmed final archive comparison, JavaScript syntax, and clean staged diff before approving the source commit.
6. M1 post-push, M2 completion, final project and final documentation precommit audit: PASS. All four mandatory requirements are VERIFIED, with no missing requirements, blocking findings, or failed checks. The guardian independently confirmed the remote source SHA, successful workflow/deployment, exact public file contents, and all 19 live browser checks. Final documentation commit and push approved; production files remain unchanged from the deployed source commit.
