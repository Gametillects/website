const header = document.querySelector('.site-header');
const languagePicker = document.querySelector('.language-picker');
const languageSummary = languagePicker.querySelector('summary');
function closeLanguage(){languagePicker.open=false;}
const menuButton = document.querySelector('.mobile-menu-toggle');
const servicesButton = document.querySelector('.services-trigger');
const servicesDropdown = document.querySelector('#services-dropdown');
const searchForm = document.querySelector('.site-search');
const searchInput = document.querySelector('#site-search-input');
const searchResults = document.querySelector('#site-search-results');
const searchStatus = document.querySelector('#search-status');
const siteRoot = new URL('../', document.currentScript.src);
const isFrench = document.documentElement.lang === 'fr';
const languageRoot = isFrench ? new URL('fr/', siteRoot) : siteRoot;
const siteUrl = path => new URL(path, languageRoot).href;
const searchEnabled = window.DDCNorthConfig?.searchEnabled === true;
searchForm.hidden = !searchEnabled;
searchForm.inert = !searchEnabled;
searchInput.disabled = !searchEnabled;
searchForm.querySelector('button').disabled = !searchEnabled;
function updateLanguageLinks(){
  document.querySelectorAll('.language-switch a').forEach(link => {
    const destination = new URL(link.hreflang === 'fr' ? 'fr/' : './', siteRoot);
    destination.hash = window.location.hash;
    link.href = destination.href;
  });
}
updateLanguageLinks();
const pagePath = url => url.pathname.replace(/index\.html$/, '').replace(/\/$/, '');
const searchEntries = isFrench ? [
  {title:'Planification et orientation',description:'Cadrage de projet, feuilles de route et aide à la décision.',href:siteUrl('#service-planning'),terms:'planification orientation stratégie projet feuille route décision'},
  {title:'Données et analyse',description:'Organisation, analyse et visualisation des données.',href:siteUrl('#service-data'),terms:'données analyse recherche visualisation information organiser'},
  {title:'Outils et systèmes numériques',description:'Sites web, conception de processus et outils sur mesure.',href:siteUrl('#service-digital'),terms:'numérique outils systèmes site web processus conception automatisation'},
  {title:'Notre approche',description:'Comprendre, concevoir et livrer.',href:siteUrl('#approach'),terms:'approche processus comprendre concevoir livrer travail'},
  {title:'À propos',description:'Une petite équipe, une direction commune.',href:siteUrl('#about'),terms:'à propos ddcnorth équipe personnes'},
  {title:'Nous joindre',description:'Parlons de votre prochain projet.',href:'mailto:Fryderyk@ddcnorth.com',terms:'contact courriel parler projet joindre ddcnorth.com'}
] : [
  {title:'Planning & direction',description:'Project scoping, roadmaps, and decision support.',href:siteUrl('#service-planning'),terms:'planning direction strategy project scoping roadmaps decision support'},
  {title:'Data & insight',description:'Data organization, analysis, and visualization.',href:siteUrl('#service-data'),terms:'data insight research analysis visualization information organize'},
  {title:'Digital tools & systems',description:'Websites, workflow design, and custom tools.',href:siteUrl('#service-digital'),terms:'digital tools systems websites web workflow design custom automation'},
  {title:'Our approach',description:'Discover, develop, and deliver.',href:siteUrl('#approach'),terms:'approach process discover develop deliver how work'},
  {title:'About us',description:'A small team with a shared way forward.',href:siteUrl('#about'),terms:'about ddcnorth team people'},
  {title:'Contact us',description:'Start a conversation about your next project.',href:'mailto:Fryderyk@ddcnorth.com',terms:'contact email talk conversation project ddcnorth.com'}
];
let matches = [];
function closeServices(){servicesButton.setAttribute('aria-expanded','false');servicesDropdown.hidden=true;}
function closeSearch(){searchResults.hidden=true;searchInput.setAttribute('aria-expanded','false');searchStatus.textContent='';}
function closeMenu(){closeLanguage();menuButton.setAttribute('aria-expanded','false');header.classList.remove('is-menu-open');closeServices();closeSearch();}
function revealTarget(href){
  if(!href)return;
  const destination=new URL(href,window.location.href);
  const current=new URL(window.location.href);
  if(destination.origin!==current.origin||pagePath(destination)!==pagePath(current)||!destination.hash)return;
  const target=document.getElementById(destination.hash.slice(1));
  if(target && target.matches('.service-list details')){
    document.querySelectorAll('.service-list details').forEach(panel=>{panel.open=panel===target;});
  }
}
function renderSearch(){
  if(!searchEnabled){closeSearch();return;}
  const query=searchInput.value.trim().toLowerCase();
  if(!query){closeSearch();return;}
  closeServices();
  const words=query.split(/\s+/);
  matches=searchEntries.filter(entry=>words.every(word=>(entry.title+' '+entry.description+' '+entry.terms).toLowerCase().includes(word)));
  searchResults.replaceChildren();
  if(matches.length){
    const list=document.createElement('ul');
    matches.forEach(entry=>{
      const item=document.createElement('li');
      const link=document.createElement('a');
      link.href=entry.href;
      const title=document.createElement('strong');title.textContent=entry.title;
      const description=document.createElement('span');description.textContent=entry.description;
      link.append(title,description);item.append(link);list.append(item);
    });
    searchResults.append(list);
  }else{
    const message=document.createElement('p');message.className='search-empty';message.textContent=isFrench ? 'Aucun résultat. Essayez « données », « sites web » ou « contact ».' : 'No matching results. Try “data”, “websites”, or “contact”.';searchResults.append(message);
  }
  searchResults.hidden=false;searchInput.setAttribute('aria-expanded','true');
  searchStatus.textContent=isFrench
    ? (matches.length ? matches.length+' '+(matches.length===1?'résultat':'résultats')+'. Appuyez sur Tab pour parcourir les résultats.' : 'Aucun résultat.')
    : (matches.length ? matches.length+' matching '+(matches.length===1?'result':'results')+'. Press Tab to explore results.' : 'No matching results.');
}
menuButton.addEventListener('click',()=>{
  const open=menuButton.getAttribute('aria-expanded')!=='true';
  closeMenu();menuButton.setAttribute('aria-expanded',String(open));header.classList.toggle('is-menu-open',open);
});
servicesButton.addEventListener('click',()=>{
  closeLanguage();
  const open=servicesButton.getAttribute('aria-expanded')!=='true';
  closeSearch();servicesButton.setAttribute('aria-expanded',String(open));servicesDropdown.hidden=!open;
});
languageSummary.addEventListener('click',()=>{closeServices();closeSearch();});
document.addEventListener('click',event=>{if(!languagePicker.contains(event.target))closeLanguage();});
document.addEventListener('focusin',event=>{if(!languagePicker.contains(event.target))closeLanguage();});
searchInput.addEventListener('input',renderSearch);
searchInput.addEventListener('focus',renderSearch);
searchInput.addEventListener('keydown',event=>{
  if(event.key==='ArrowDown'&&!searchResults.hidden){event.preventDefault();searchResults.querySelector('a')?.focus();}
});
searchForm.addEventListener('submit',event=>{
  event.preventDefault();renderSearch();
  if(matches.length&&searchInput.value.trim())searchResults.querySelector('a')?.click();
});
header.addEventListener('click',event=>{
  const link=event.target.closest('a');
  if(link){revealTarget(link.getAttribute('href'));closeMenu();}
});
document.addEventListener('click',event=>{if(!header.contains(event.target)){const link=event.target.closest('a');if(link)revealTarget(link.getAttribute('href'));closeMenu();}});
document.addEventListener('focusin',event=>{if(!header.contains(event.target)){closeServices();closeSearch();}});
document.addEventListener('keydown',event=>{
  if(event.key!=='Escape')return;
  if(languagePicker.open){closeLanguage();languageSummary.focus();}
  else if(!searchResults.hidden){searchInput.focus();closeSearch();}
  else if(!servicesDropdown.hidden){closeServices();servicesButton.focus();}
  else if(menuButton.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus();}
});
window.matchMedia('(max-width:900px)').addEventListener('change',closeMenu);
document.querySelectorAll('.service-list details').forEach(panel=>{
  panel.addEventListener('toggle',()=>{
    if(panel.open)document.querySelectorAll('.service-list details').forEach(other=>{if(other!==panel)other.open=false;});
  });
});
document.querySelector('#year').textContent=new Date().getFullYear();
window.addEventListener('hashchange',()=>{revealTarget(window.location.href);updateLanguageLinks();});
revealTarget(window.location.href);
