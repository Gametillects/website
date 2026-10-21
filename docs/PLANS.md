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
