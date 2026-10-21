# Publication status

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
