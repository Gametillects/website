# Publication status

## Publish reviewed updates (2026-10-22)

The user authorized publishing the completed edits, subpages and search refinement, then requested removal of the homepage introduction strip during release verification. Both changes are pushed to `ddcnorth/website` main. Final public source is `29facdc0c1948e960365c9751eeeb51c02063261`; source `853aeb7` was the earlier release before the strip removal. Remote main matches the final source. M6 readiness, source precommit, host-normalization amendment, strip-removal readiness and follow-up implementation/precommit audits returned PASS. Independent deployed-product completion and evidence-precommit audit: PASS. RELEASE-001, RELEASE-002 and RELEASE-004 are VERIFIED; RELEASE-003 remains IN PROGRESS until the evidence push and resulting deployment checks finish.

Cloudflare deployment `95d49007-0194-4081-b0d7-9619a1b13bdc` and GitHub Actions run `39837506624` both succeeded for final source `29facdc0c1948e960365c9751eeeb51c02063261`. `docs/validation/release-deployments.json` records those commit-specific results. `release-live-primary.json` and `release-live-secondary.json` confirm all eleven served public files match the clean build. Cloudflare HTML matches exactly after the approved narrow removal of its analytics/email-decoding scripts and decoding protected mailto hrefs; assets and all secondary HTML match raw bytes. Raw/compared hashes and transformation counts are recorded. Repository docs and missing paths return 404. No host setting changed.

`release-source.json` records the final clean staged export: twelve published files including `.nojekyll`, 171 scoped root/project-prefix link checks, unique IDs, one h1 per content page and JavaScript syntax success. The final production diff from the earlier release is exactly the requested one-line introduction-strip removal. `intro-removal.json` records local desktop/mobile removal and retained hero/CTA/footer layout.

`release-browser.json` records live verification of all four pages at desktop and 390 px mobile: no introduction strip, service tags, hero note or contact invitation; working search/service fragments/reloads/footer links, no-match/Escape/empty behavior, mobile navigation, legacy route, secondary-host search and correct Cloudflare-decoded contact addresses including the project subject. No overflow or console errors were found. Live desktop/mobile homepage screenshots were visually inspected. Verification procedure: open each page; search data from About us, press Enter and reload; follow the footer Planning link; test no-match/Escape/clear; use the mobile menu; test secondary-host digital search; visit /#about. Live screenshot directory is recorded in the browser report.

Earlier local-only sections below remain historical; the explicit publication request superseded their local-only scope. The pre-existing secondary 404 home link points at `/`, as recorded by the precommit audit; this release did not change it. Final evidence commit/push and any triggered documentation-only deployment remain to be checked after final audit.

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
