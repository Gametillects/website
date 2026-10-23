# Website publication plan

Source request: use `DDCNorth-Website(1).zip` to deploy the website and push it to the GitHub repository.

The destination is the existing `https://github.com/ddcnorth/website.git` remote, branch `main`. Initial inspection found a private repository with no configured Pages site, workflows, deployments, or custom domain. GitHub rejected Pages creation because the organization uses GitHub Free. The user explicitly chose: "Make the repository public and deploy with free GitHub Pages." Change repository visibility to public and enable Pages. Do not change DNS.

## M1: Import, validate, and push

- DEP-001: Import all seven archive files, preserving site design, functionality, embedded fonts, and font licenses. Change the stale `og:url` to the selected deployment address and remove the original trailing whitespace at `index.html:28` and `licenses/SpaceMono-OFL.txt:21` so the staged whitespace check passes. Pass when source comparison confirms only these limited changes, local assets and fragments resolve, JavaScript parses, and desktop/mobile browser checks pass.
- DEP-002: Commit and push the imported site and required deployment configuration to `main`. Pass when local and remote commit SHAs match and the working tree is clean.
- Configure a static deployment that publishes only `index.html`, `assets/`, and `licenses/`. GitHub Pages target: `https://ddcnorth.github.io/website/`.
- Verify navigation, service disclosures, search match/no-match/empty states, Escape dismissal, mobile menu, mailto contacts, console errors, and failed asset requests.
- Obtain Plan Guardian readiness approval before implementation and precommit approval after validation. A source commit does not imply the public deployment is complete.

## M2: Publish and verify

- DEP-003: Enable the selected host and deploy the pushed source. Pass when the deployment identifies the intended commit, the public page and all three external assets return HTTP 200 with matching content, the metadata URL is correct, and deployed desktop/mobile interactions work.
- PROCESS-001: Maintain traceability and record independent Plan Guardian audits. Pass after M1 and M2 audits and final project review return PASS with no unresolved mandatory findings.
- Record verification evidence and obtain independent approval before the final documentation commit. Push that commit and verify remote synchronization and any resulting deployment.

## Validation

- Compare archive entries with working tree bytes, allowing only the documented metadata replacement and the two original trailing-whitespace removals.
- Parse HTML to validate local references and fragment targets; run `node --check` on external and inline JavaScript.
- Run browser assertions on local and deployed sites, with screenshots as supporting layout evidence.
- `git diff --check`; `git status --short`; `git rev-parse HEAD`; `git ls-remote origin refs/heads/main`.
- Inspect deployment state using GitHub API and retrieve the public page/assets over HTTPS.

## M3: Requested browser-comment edits (2026-10-22)

Source: the user's seven comments on the restored original website. These authorize focused local edits, not the abandoned redesign. Deliver a refreshed local preview; publication is not part of this request.

- EDIT-001: Header utility link reads `About us`, retaining its `#about` destination.
- EDIT-002: Hero description contains only `Good ideas need a clear way forward.`
- EDIT-003: Remove the arrow beside `CONNECTING THE DOTS.`; preserve the label's original size (remove its arrow-only last-child font rule).
- EDIT-004: Remove `DDC / NORTH` from the hero artwork; retain `From possibility to a plan.`
- EDIT-005: Remove tag lists from all three service panels; retain the headings, descriptions and accordion behavior.
- EDIT-006: Remove the hero note `+ Clear thinking. Practical outcomes.`; keep the separate footer wording.
- EDIT-007: Remove the complete highlighted contact invitation section; preserve the footer directory and bottom row. Route existing header Contact/Contact us/Start a project links and the contact search result directly to the same existing email address so none refers to a removed anchor.

Acceptance: all seven changes are present in source and browser DOM; remaining fragments resolve; contact destinations use the existing mailto address; local public assets load; original search/service/mobile navigation still works; no overflow at desktop and mobile widths; build includes only intended public files. Use focused checks and browser inspection, not a new test framework. Obtain independent readiness and completion audits. Preserve current hosting configuration, logos, fonts and all content outside these requested changes. These criteria supersede the original byte-preservation criterion only for the explicitly edited areas.

## M4: Separate content pages (2026-10-22)

Source: the user's browser comment about moving content to subpages and explicit choice: `Services, Our approach, and About us pages; keep the homepage short (Recommended)`.

Local preview scope only. Retain all seven M3 edits and the original visual identity. The existing uncommitted M3 work is the baseline; preserve it. Do not publish or replace the previous redesign branch.

- PAGE-001: Home contains the existing hero and introduction strip, header and footer, with working links to the three content pages. Detailed services, approach and about sections are moved out of home, not duplicated there.
- PAGE-002: `/services/`, `/approach/`, and `/about/` each load directly, retain the corresponding existing section content and layout, share header/footer and styles, and contain exactly one descriptive h1. Give each an appropriate title, description, canonical URL and og:url. Keep mailto contact actions.
- PAGE-003: Header, footer, home CTA and search use correct page destinations at both the root site and a GitHub Pages project prefix. Search can open an individual service from another page; initial hashes, hash changes and same-page service links open the correct accordion. Original home fragment URLs for services, approach, about and individual services route to their replacement pages.
- PAGE-004: Share the existing inline stylesheet/embedded fonts through `assets/site.css` without changing its rules apart from the minimum page-title styles required for semantic h1 headings. Keep the original header/footer/logo design and mobile navigation. Move the existing inline accordion/year behavior into shared JavaScript so it works on every page.
- PAGE-005: The static build and deployment path filters include all three new page directories. Keep the host configuration and publish only the four site pages, 404, assets, licenses and .nojekyll. Update local preview and site-map documentation. Check all internal href/src targets and fragments against the build, build/source equality, HTML/script syntax, all seven previous edit requirements, search, direct service fragments, mobile menu, and absence of overflow/errors at desktop and mobile widths. Verify with the local browser and source/build checks; no new application framework or dependencies.

M3 EDIT-001's `#about` destination becomes the corresponding About us page under PAGE-003. Other M3 visible-content criteria remain in force across the resulting pages. This supersedes the single-page location assumptions in earlier validation reports; those reports remain historical evidence. Independent readiness and final local completion audits are required.

## M5: Refine the header search (2026-10-22)

Source: user's browser comment requesting a search-bar design that better matches the website. Deliver locally on the existing four-page website. Preserve the previous edits and all content/navigation outside search. No publication requested.

- SEARCH-001: Replace the boxed search input with a transparent field and fine bottom rule, using the existing navy/cream palette and typography. Provide a clear navy focus treatment and a visible keyboard focus indicator for the submit button. Style results as clean rows with thin dividers and matching typography. Limit production changes to search-related rules in `assets/header.css`.
- SEARCH-002: Keep the existing accessible label, form, controls, JavaScript and destinations. Verify matching and no-match results, clearing, Escape, keyboard selection and Enter navigation to a service panel, and submit-button behavior. The shared search design must load on all four pages, with no overflow at desktop and mobile sizes. Mobile input text should remain readable and controls at least 44 px tall.
- SEARCH-003: Preserve all non-search production source against the pre-edit checkpoint. Run the existing static build, JavaScript syntax and whitespace checks; compare served/built CSS, inspect desktop and mobile states, and save screenshots/evidence. Obtain independent readiness and final local-completion audits. No new dependencies or test framework.

## M6: Publish the reviewed changes (2026-10-22)

Source: user's explicit request, `push the changes online`. This authorizes committing and pushing the completed M3–M5 work to the existing `main` branch and deploying through the existing Cloudflare/GitHub Pages integrations. The earlier local-only limits are superseded for this release. Preserve the approved site; no additional design, DNS, visibility, or host changes.

- RELEASE-001: Commit exactly the reviewed site, deployment support and verification documentation; push to `ddcnorth/website` main without force. Validate a clean export with the existing build, HTML asset/link checks, JavaScript syntax, and whitespace checks before source commit. Obtain readiness/precommit approval; verify remote source SHA matches.
- RELEASE-002: Confirm the primary `https://ddcnorth.com/` deployment identifies the pushed source commit and serves the updated four pages and assets matching the clean export. Confirm the existing GitHub Pages workflow succeeds for the same source and its published content matches. Verify live desktop/mobile navigation/search, service fragments, retained edits, and absence of overflow/errors; save supporting screenshots. Do not equate a push with successful deployment.
- RELEASE-003: Record deployment/source and browser evidence; obtain final independent completion/precommit approval; mark criteria VERIFIED only after PASS. Commit/push final evidence, verify remote synchronization and any triggered deployment. Finish with a clean working tree and live site URL. Documentation-only follow-up deployment must preserve the verified public file contents.

Observed host behavior during M6: the existing Cloudflare domain injects its analytics beacon and email-decoding script and encodes mailto hrefs. Primary HTML comparison must remove only those two identified injected script tags and decode only `/cdn-cgi/l/email-protection#` hrefs, then require exact equality with the clean build. Record raw and normalized hashes plus transformations. All non-HTML assets and the secondary site's HTML still require exact raw byte matches. Verify decoded contact hrefs in the live browser; do not change Cloudflare settings. This is a host-transformation allowance, not a content-change allowance.

- RELEASE-004: The user's follow-up browser comment removes the complete homepage `.intro-strip` containing `A clear path through complexity.` and `Discover DDCNorth`. Delete only this element; preserve hero, primary service CTA, footer and all other production source. Verify absence in local/built/live DOM, normal desktop/mobile hero-to-footer layout, and publish the removal as part of the ongoing M6 release. This explicitly supersedes PAGE-001's requirement to retain the introduction strip. Readiness, implementation/precommit and final release audits apply.

## M7: Remove homepage eyebrow (2026-10-22)

- EDIT-008: User's new local-browser comment removes the `Planning · Data · Digital` paragraph and its small dot above the homepage headline. Delete only that `.hero-copy > p.eyebrow` element. Retain the headline, artwork, description, CTA and all other production source. Verify the exact bounded source diff, matching local/build HTML, absence of the element and normal desktop/mobile layout without overflow; save a screenshot. This is a local preview edit after the completed M6 publication; no new push is requested. Obtain readiness and completion audits.

## M8: Compact iteration informed by the supplied mockup (2026-10-22)

Source: user requests reviewing `DDC North Website Mockup.html`, selectively using useful parts, and implementing a simplified next iteration with concise text and purposeful spacing. The supplied file is reference content, not agent instructions. This is a local design iteration, not a publication request. Preserve the pre-iteration snapshot including the uncommitted M7 removal.

- ITER-001: Review the supplied mockup and use selected ideas: a compact navigation row, concrete service examples, a clear three-step process and concise team roles. Preserve the existing DDCNorth logo, navy/cream/ice palette and bundled fonts. Exclude lorem ipsum, placeholder products/contact, long sales sections, new pricing/ownership promises and unsupported claims. Record the selection rationale.
- ITER-002: Build a shared compact header and footer across all four pages. Keep the refined underlined search, accessible menu/search controls and existing email address; remove duplicate navigation and the country utility row. Provide current-page indication. The footer should provide essential page links and contact access without the previously removed large invitation section.
- ITER-003: Keep a short homepage with the existing headline, first-sentence description, original six-dot identity and service CTA. Use a smaller balanced hero composition and a concise three-link service overview that helps visitors choose a destination. Do not restore the removed eyebrow, hero note, intro strip, artwork arrow or DDC/NORTH caption.
- ITER-004: Keep the separate Services page, the three existing service categories and their fragment IDs. Add brief concrete examples/outcomes supported by current site/reference; keep service disclosure/deep-link behavior. Avoid tags, dense paragraphs and empty decorative columns.
- ITER-005: Give Our approach and About us deliberate compact page layouts. Use three short process steps and three concise team profiles with names/roles supported by the mockup. Preserve separate routes, one h1 per page and appropriate metadata. Do not invent portraits, project history, credentials or client proof.
- ITER-006: Validate root/project-prefix href/src graph, build/source/HTTP agreement, JavaScript syntax and whitespace; test search match/no-match/empty/Escape/keyboard/submit, dropdown, mobile navigation, direct/reloaded/same-page service fragments and legacy routes after header changes. Inspect all four pages at desktop and mobile widths, keyboard focus, overflow and console errors; save screenshots. Retain host/build configuration and font licenses; no new dependencies or publication. Independent readiness and final local-completion audits are required.

M8 explicitly permits reworking layout/navigation and shortening selected prose beyond the earlier exact-preservation criteria. Prior user-requested removals, original brand identity, four-page structure and functional destinations remain requirements. Earlier audit reports describe their historical scope.

M8 measurable design checklist (applies to ITER-002–006):
- Test all four pages at 1440 × 900 and 390 × 844, plus the navigation breakpoint at 900 px. At 1440 px the header has one navigation row and is no taller than 90 px; the shared footer is no taller than 200 px.
- Each main-content paragraph contains at most 45 words. Homepage keeps its one-sentence hero description; each service overview contains at most 18 words. No empty decorative grid column may displace the process/team content.
- At 1440 px the homepage hero is at most 460 px tall, its service overview at most 200 px tall, and total document height at most 1000 px. Main section padding is at most 64 px per edge on desktop and 40 px on mobile. At 390 px the homepage document is at most 1600 px tall.
- Retain visible keyboard focus indicators. Search input and submit button are at least 44 px tall on mobile, with input font size at least 16 px. Navigation and content must fit without horizontal document overflow at both primary viewports and 900 px.
- Record actual paragraph word counts and bounding-box/spacing measurements alongside visual comparisons to the pre-iteration snapshot. These limits express implementation choices for the user's compactness request, not permission to remove useful content.

## M9: Reverse the mockup-based iteration (2026-10-22)

Source: user requests “reverse the changes” immediately after reviewing/running M8. Restore the site immediately before M8, retaining earlier requested edits including M7's eyebrow removal. This explicitly supersedes M8's design/content requirements; retain their audit history as historical, not active requirements. No publication or commit.

- REVERT-001: Restore exactly the four HTML pages, three CSS files, shared JavaScript, and README from `a99e240`, except remove only the approved M7 homepage eyebrow paragraph. Preserve a recovery snapshot of M8 before restoring; do not change hosting/build/licenses/404 or unrelated files. Pass when every restored file equals that target byte-for-byte.
- REVERT-002: Rebuild the public output, confirm all four pages and assets return HTTP 200 with bytes matching the restored source, and run JavaScript syntax/whitespace checks. Refresh the local browser without cached assets; verify the former header/hero/footer, earlier removals, services/search/mobile navigation and no horizontal overflow at desktop/mobile. Save a restored preview screenshot.
- REVERT-003: Record the reversal and source/build/browser evidence; mark M8 entries historical/superseded, retain prior edit requirements, obtain independent readiness and final local-completion PASS before marking this milestone verified. Leave the restored local site running and open.

## M10: One-page site and minimal footer (2026-10-22)

Source: user requests everything on one page instead of subpages, and a very simple smaller footer. Keep the restored existing design/content outside these changes. Local preview only. This supersedes M4's separate-page requirements, M9's exact-restoration requirement for changed areas, and earlier footer-directory preservation. Historical audits remain historical.

- ONE-001: Move the complete existing Services, Our approach, and About us content into home after the unchanged hero, in that order. Keep content, artwork, fonts, section/service IDs and prior removals. Change section h1s to h2s so there is exactly one homepage h1. Existing header/hero links and search navigate to home fragments, not subpages; direct/reloaded/same-hash service links open the correct exclusive disclosure. Remove the home-fragment redirects to subpages.
- ONE-002: Replace the large directory footer with one compact band: original small logo, copyright, existing contact-email link and Back to top. No tagline, repeated section/service directory, invitation or extra signoff. Keep brand colours and visible keyboard focus. At 1440×900 footer height <=120px; at 390×844 <=220px, with no overflow.
- ONE-003: Old /services/, /approach/, /about/ URLs contain only compatibility redirects to the appropriate home anchor, not duplicate page content; old individual-service fragments survive. Provide a no-JavaScript home link. Root and /website/ project prefix work. Keep deployment/build/licensing unchanged apart from necessary website files; update README and evidence. Validate source preservation, unique IDs/heading hierarchy/internal targets, clean build/source/HTTP, JS syntax, navigation/search/disclosures/back-to-top, legacy redirects and desktop/mobile layout. Save screenshots and obtain independent readiness/final PASS. No commit/push/publication.

## M11: Header cleanup and English/French website (2026-10-22)

Source: seven user browser comments. Local preview only; preserve one-page structure, brand and compact footer. Supersedes prior exact-content requirements only for requested cleanup and translation.

- LANG-001: Remove dropdown footer, duplicate utility About/Contact links, all numbered eyebrow/index tags (sections, service summaries, dropdown and steps), and team names including their prose/search mentions. Preserve meaningful headings, descriptions, artwork and original email destination. Adjust grids only to avoid holes left by removals.
- LANG-002: Retain search markup/styles/logic behind a documented `searchEnabled: false` config flag. Default hides and disables search at every viewport without a flash; true restores fully functional localized search. Verify both flag states.
- LANG-003: Replace Canada with accessible EN/FR links available desktop/mobile. English and French each contain all site sections on one page. Translate all visible copy, metadata, accessible labels, email subject, and retained search UI/index/status. Brand and email unchanged. Static French content works without JS; language URL survives reload, language switching preserves section fragment; root and project-prefix paths work. Translate error/fallback messages as well.
- LANG-004: Build includes French/config files; hosting/fonts/licenses unchanged. Check source/build/HTTP links, one h1/unique IDs, JS syntax, all removals, desktop/mobile EN/FR fit, keyboard switch/menu/dropdown, disclosures and localized enabled search. Save screenshots and evidence; independent readiness and completion PASS required. No commit or publication.

## M12: Globe language dropdown and footer removal (2026-10-22)

Source: user asks to restore the globe, open a small English/French dropdown on click, and remove Back to top entirely. Local only; preserve M11 translation, flag, content, single-page routing and prior removals. This supersedes M10 footer Back to top and M11 always-visible EN/FR link presentation.

- GLOBE-001: Restore original globe icon as a compact accessible language disclosure, with full English/Français choices and current-language indication. Available on desktop/mobile, operable by pointer and keyboard, closes on Escape (returns focus), outside click/focus and selection; preserve section fragments and root/project-prefix destinations. Static disclosure/links usable without JS.
- GLOBE-002: Remove Back to top/Haut de page link and arrow from both footers, remove its unused styling, preserve compact logo/copyright/contact footer. No other content/design changes except spacing necessary for the new control.
- GLOBE-003: Validate bounded source changes, build/HTTP/syntax, both languages desktop/mobile, dropdown keyboard/pointer/dismissal and switching, hidden search and existing menu/disclosures. Save screenshot and evidence. Required independent readiness/final PASS; no commit or publication.

## M13: Publish the approved bilingual single-page website (2026-10-23)

Source: user explicitly requests “push this to live”. Publish the current M7/M9–M12 result to the existing main branch, Cloudflare primary and GitHub Pages secondary. Supersedes local-only limits for this release; no further design, DNS, visibility or host changes. Preserve discarded M8 history only as documentation.

- LIVE-001: Audit and commit the reviewed site plus retained documentation; clean-copy static build, unique IDs/heading and root/project-prefix asset/fragment checks, three JS syntax checks and whitespace pass. Remote main must match the starting HEAD before normal (non-force) push. Obtain readiness/precommit PASS and verify pushed source SHA.
- LIVE-002: Both existing deployments report success for that source commit. Primary EN/FR pages, compatibility routes, error page and assets match the clean export; allow only the already documented Cloudflare analytics/email transformations. Secondary exact byte matches. Verify live globe language selection, section fragment/disclosure, hidden search, removed footer link and desktop/mobile layout; save screenshot and evidence.
- LIVE-003: Record release evidence, obtain final independent completion/precommit PASS, then commit/push documentation-only evidence. Verify clean working tree, synchronized remote and any triggered primary deployment with unchanged public content. Do not declare deployment based on push alone.

## M14: Dropdown label and headline spacing (2026-10-23)

Source: two user live-page annotations: remove dropdown “Planning. Data. Digital.” and fix the final “t.” in the hero. Local review scope; no new publication requested. Baseline committed release `79645a3`.

- TYPE-001: Remove the dropdown-heading paragraph in English and French, retain all service cards and dropdown behavior.
- TYPE-002: Separate the hero’s blue period from the preceding letter using a narrowly scoped spacing rule, retaining original typeface, headline text/size/weight, line breaks and palette. Inspect final t/dot at desktop/mobile; do not redesign typography.
- TYPE-003: Source diff limited to these two paragraphs and hero-period rule; build/HTTP/whitespace and EN/FR desktop/mobile inspection pass without overflow. Preserve previously approved globe, footer and disabled search. Save before/after evidence and independent readiness/completion PASS. No commit/push.

## M15: Publish the dropdown/headline correction (2026-10-23)

Source: user reports removed label still visible on ddcnorth.com. Publish the already reviewed M14 correction to existing hosts; supersedes M14 local-only restriction. No additional production changes.

- FIXLIVE-001: Readiness/precommit guardian PASS; build and whitespace pass; normal push reviewed M14 changes to main after checking remote baseline.
- FIXLIVE-002: Confirm primary and secondary deployment success, live EN/FR dropdown labels absent and period margin present, live browser screenshot; final guardian PASS before marking complete.
