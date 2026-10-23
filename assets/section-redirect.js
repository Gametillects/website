// Keep previously shared page links working after the move to one page.
const redirectScript = document.currentScript;
const home = new URL('../', redirectScript.src);
const sections = new Set(['services', 'approach', 'about', 'service-planning', 'service-data', 'service-digital']);
const fragment = window.location.hash.slice(1);
home.hash = sections.has(fragment) ? fragment : redirectScript.dataset.section;
window.location.replace(home.href);
