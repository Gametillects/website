# Plan Guardian Audit

## Audit scope
- Audit type: Milestone completion and final local-delivery audit
- Milestone: M11 — Header cleanup and English/French website
- Specification revision: Seven user browser comments; retained one-page, brand and compact-footer requirements
- Plan revision: Current docs/PLANS.md M11
- Git revision: a99e2400e7c5de69169254dcabbd77aba8325136 with uncommitted local changes

## Verdict
PASS

## Coverage summary
- Mandatory requirements: 4 grouped criteria covering seven user comments
- Fully traced: 4
- Partially traced: 0
- Missing: 0
- Verified complete: 4
- Failed: 0
- Blocked: 0

## Blocking findings
None remain. LANG-404-001 was identified during audit: the new French 404 return link used /fr/ and lost the GitHub project prefix. Both error-page return links now use canonical production destinations. Independent source/build/HTTP verification confirms the correction.

## Non-blocking findings
None. This approval covers the local implementation, not deployment. Browser translation in the independent Chrome session automatically translated some French UI after loading; French source completeness was verified from static HTML and the supplied no-JavaScript/browser evidence, while independent functional checks used stable selectors.

## Acceptance-criteria results

| Criterion ID | Result | Implementation evidence | Test evidence |
|---|---|---|---|
| LANG-001 | PASS | index.html and fr/index.html omit dropdown footer, duplicate utility links, all numbered labels and team-name content; original email retained; CSS closes removed-label gaps | Independent removal/heading checks passed; source diff and bilingual-source.json confirm preservation of substantive copy, brand, fonts and footer |
| LANG-002 | PASS | assets/config.js defaults false; both forms start hidden/inert; header.js disables controls and guards renderSearch; original localized markup/styles/logic retained | Independent default-page DOM confirms hidden form and disabled input; independent enabled French search navigates to French Data panel; bilingual-browser.json verifies both language flag-enabled cases, empty/no-match/Escape/keyboard/mobile submit and disabled tab order |
| LANG-003 | PASS | Complete static French document, lang/metadata/accessible-label translations, translated email subject/search strings; accessible EN/FR links; updateLanguageLinks preserves fragment; bilingual errors/fallbacks | Independent FR-to-EN switch retained #service-data and exclusive open panel; reviewed full French copy/metadata/labels; recorded no-JS, reload, mobile and root/project-prefix cases pass; corrected canonical 404 links verified |
| LANG-004 | PASS | Build includes fr; workflow includes fr/**; README documents languages and search flag; fonts/licenses/hosting settings retained | Independent clean build and fifteen public HTTP/build entries including .nojekyll match; three scripts parse; whitespace passes; source report records 68 root/prefix links; responsive measurements and interaction evidence pass |

## Unmapped requirements
None in M11. Earlier exact-copy and always-visible-search requirements are explicitly superseded only by the requested cleanup, translation and reversible disabled default. One-page routing and compact footer remain intact. Backend, database, authentication, uploads and OCR are not applicable to this static website.

## Validation evidence

| Command or check | Result | Evidence |
|---|---|---|
| Review all French static copy, metadata and accessible labels | PASS | Complete translation; shared text limited to brand, language codes, symbols, year and Menu |
| Independent removals/structure/config checks | PASS | Both documents retain one h1, unique IDs, no requested removed elements/names; hidden/inert forms and false flag |
| Independent clean-copy sh scripts/build.sh | PASS | All generated files match current _site |
| Independent source/build/HTTP comparison | PASS | Fourteen content files plus .nojekyll match, HTTP 200 |
| node --check for header.js, config.js, section-redirect.js | PASS | All exit 0 |
| git diff --check | PASS | Exit 0 |
| Independent default search check | PASS | Form hidden and input disabled |
| Independent language switch | PASS | French Data fragment switches to English Data fragment, preserving open disclosure |
| Independent enabled French search | PASS | Query données produces localized result/status and Enter opens only Data at /enabled/fr/#service-data |
| Review bilingual-browser.json | PASS | EN/FR desktop/mobile, FR 320/900 px, no-JS content, switch/reload/prefix behavior, both localized search states, no errors |
| LANG-404-001 correction | PASS | Both canonical return links present in source, built and served error page |
| Documentation/traceability review | PASS | Scope and historical supersessions explicit; LANG criteria remain IMPLEMENTED until this approval; no publication |

## Final decision
APPROVED: The audited scope satisfies all mapped requirements and acceptance criteria.
