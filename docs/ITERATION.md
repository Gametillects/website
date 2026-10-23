> Historical design record: the user requested reversal of this iteration. M9 restores the preceding website; this document does not describe the current local preview.

# Compact website iteration — 22 October 2026

The supplied `DDC North Website Mockup.html` is a design/content reference. Its text was reviewed as source material, not as instructions to execute. This iteration is local at <http://localhost:8000/>; it has not been committed, pushed, or published.

## Selected ideas

| Reference idea | Adaptation for this site |
|---|---|
| One navigation row | A shared logo, Services menu, Our approach, About us, underlined search, and one contact action. Removed duplicate utility links and country label. |
| Concrete descriptions of work | Kept the existing three service categories. Added short examples such as project briefs, sector scans, dashboards, quoting workflows, and integrations. These are examples of work, not claims about completed client projects. |
| Explore → decide → build | Three concise process steps with one useful outcome each, retaining the Discover/Develop/Deliver labels and separate Approach page. |
| Short founder profiles | Names, roles, Prince George location, and descriptions drawn from the supplied mockup. No invented portraits, clients, credentials, or project history. |
| Simple rules and aligned columns | Consistent content width, fine dividers, tighter vertical spacing, and content-bearing columns instead of the old empty About label column. |

The draft product cards, lorem ipsum, placeholder contact email, sector sales sections, paid-discovery language, and ownership/pricing promises were excluded. The reference's orange accent and substitute fonts were also excluded. The original SVG logo, bundled fonts, navy/cream/ice palette, headline, shortened hero sentence, and six-dot symbol remain.

The homepage adds three concise service destinations so it helps visitors choose their next page. It does not restore the removed introduction strip, eyebrow, hero note, art arrow/caption, service tags, or large contact invitation.

## Layout comparison

Measured after fonts loaded, at a 1440 × 900 viewport:

| Element | Previous version | Iteration |
|---|---:|---:|
| Header | 154 px, two rows | 84 px, one row |
| Homepage hero | 635 px | 432 px |
| Footer | 305 px | 153 px |
| Homepage content | 1094 px | 812 px |

The new service overview is 142 px tall. No main-content paragraph exceeds 24 words. At 390 × 844, the homepage document is 1219 px tall, the menu search controls are 48 px tall, and the input is 16 px. Main section padding is at most 56 px on desktop and 40 px on mobile. All process/profile columns contain useful content.

## Verification

- `sh scripts/build.sh`, an independent clean-copy build, `node --check assets/header.js`, and `git diff --check` pass.
- Four pages retain one h1, unique IDs, canonical/OG URLs, and relative asset paths. Source, build, and local HTTP contents match; 144 internal link/fragment checks cover root and project-prefix URLs.
- Original logo SVG and four embedded font faces match the pre-iteration source. Build/host configuration, licenses, and the 404 page are unchanged.
- All four pages inspected at 1440 × 900, 390 × 844, and the 900 px menu breakpoint. No horizontal overflow, console errors, failed requests, or runtime exceptions were found.
- Search match, no-match, clearing, Escape, keyboard result selection, Enter submission, and submit-button navigation pass. Escape now returns focus from a result to the input without reopening results.
- Dropdown/mobile menu, keyboard disclosure toggling, direct/reloaded/same-hash service links, all six legacy home-fragment routes, and nested `/website/` search navigation pass. Contact links retain `Fryderyk@ddcnorth.com`.

Evidence: `docs/validation/iteration-source.json`, `docs/validation/iteration-browser.json`. The browser report lists eight desktop/mobile screenshots in the session visualization folder. Source verification used `/tmp/ddcnorth-iteration-check.py`; reproducible checks include building, inspecting the four routes, following all internal references, and running the interaction procedure above.

The earlier temporary baseline was unavailable when verification began. It was reconstructed from `a99e240` plus the approved M7 eyebrow removal, which was the only uncommitted production change before this iteration. Its path is recorded in the source report.

Independent milestone and final local-completion audit: **PASS**. ITER-001–006 are VERIFIED; see [the audit report](validation/iteration-guardian.md).
