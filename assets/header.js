const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.mobile-menu-toggle');
const servicesButton = document.querySelector('.services-trigger');
const servicesDropdown = document.querySelector('#services-dropdown');
const searchForm = document.querySelector('.site-search');
const searchInput = document.querySelector('#site-search-input');
const searchResults = document.querySelector('#site-search-results');
const searchStatus = document.querySelector('#search-status');
const siteRoot = new URL('../', document.currentScript.src);
const siteUrl = path => new URL(path, siteRoot).href;
const pagePath = url => url.pathname.replace(/index\.html$/, '').replace(/\/$/, '');
const legacyRoutes = {
  '#services':'services/', '#approach':'approach/', '#about':'about/',
  '#service-planning':'services/#service-planning',
  '#service-data':'services/#service-data',
  '#service-digital':'services/#service-digital'
};
function routeLegacyFragment(){
  const destination=legacyRoutes[window.location.hash];
  if(pagePath(new URL(window.location.href))===pagePath(siteRoot)&&destination){
    window.location.replace(siteUrl(destination));
  }
}
const searchEntries = [
  {title:'Planning & direction',description:'Project scoping, roadmaps, and decision support.',href:siteUrl('services/#service-planning'),terms:'planning direction strategy project scoping roadmaps decision support'},
  {title:'Data & insight',description:'Data organization, analysis, and visualization.',href:siteUrl('services/#service-data'),terms:'data insight research analysis visualization information organize'},
  {title:'Digital tools & systems',description:'Websites, workflow design, and custom tools.',href:siteUrl('services/#service-digital'),terms:'digital tools systems websites web workflow design custom automation'},
  {title:'Our approach',description:'Discover, develop, and deliver.',href:siteUrl('approach/'),terms:'approach process discover develop deliver how work'},
  {title:'About us',description:'Meet Amir, Ahmad, and Fryderyk.',href:siteUrl('about/'),terms:'about ddcnorth team people amir ahmad fryderyk fred'},
  {title:'Contact us',description:'Start a conversation about your next project.',href:'mailto:Fryderyk@ddcnorth.com',terms:'contact email talk conversation project fryderyk ddcnorth.com'}
];
let matches = [];
function closeServices(){servicesButton.setAttribute('aria-expanded','false');servicesDropdown.hidden=true;}
function closeSearch(){searchResults.hidden=true;searchInput.setAttribute('aria-expanded','false');searchStatus.textContent='';}
function closeMenu(){menuButton.setAttribute('aria-expanded','false');header.classList.remove('is-menu-open');closeServices();closeSearch();}
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
    const message=document.createElement('p');message.className='search-empty';message.textContent='No matching results. Try “data”, “websites”, or “contact”.';searchResults.append(message);
  }
  searchResults.hidden=false;searchInput.setAttribute('aria-expanded','true');
  searchStatus.textContent=matches.length ? matches.length+' matching '+(matches.length===1?'result':'results')+'. Press Tab to explore results.':'No matching results.';
}
menuButton.addEventListener('click',()=>{
  const open=menuButton.getAttribute('aria-expanded')!=='true';
  closeMenu();menuButton.setAttribute('aria-expanded',String(open));header.classList.toggle('is-menu-open',open);
});
servicesButton.addEventListener('click',()=>{
  const open=servicesButton.getAttribute('aria-expanded')!=='true';
  closeSearch();servicesButton.setAttribute('aria-expanded',String(open));servicesDropdown.hidden=!open;
});
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
  if(!searchResults.hidden){closeSearch();searchInput.focus();}
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
window.addEventListener('hashchange',()=>{routeLegacyFragment();revealTarget(window.location.href);});
routeLegacyFragment();
revealTarget(window.location.href);
