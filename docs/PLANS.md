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
