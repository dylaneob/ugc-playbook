// Paste into Claude in Chrome's javascript_tool on https://jointrybe.com/creator/discover (logged in as the creator).
// Runs in the background; read window.__trybe when window.__done is true (~3 s per brand).
// Fields: name | payout | creator earnings | total creators | Trybe score | rating (reviews)
window.__trybe=[]; window.__done=false;
(async()=>{
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const isCard=e=>{const L=e.innerText.split('\n').filter(Boolean); return L.length>=2&&L.length<=3&&!/^\p{Extended_Pictographic}|^[✨]/u.test(L[0])&&/(•|Foods|Apps|Tools|Media|Footwear|Fashion)/.test(L[L.length-1])&&!/Request Sent/.test(e.innerText)};
const getCards=()=>[...document.querySelectorAll('[role="button"], button')].filter(isCard);
const names=[...new Set(getCards().map(c=>c.innerText.split('\n').filter(Boolean).slice(-2)[0]))];
for(const name of names){
  if(!location.pathname.endsWith('/discover')) break;
  const c=getCards().find(x=>x.innerText.split('\n').filter(Boolean).slice(-2)[0]===name); if(!c){window.__trybe.push(name+' | NOT FOUND');continue;}
  c.click(); await sleep(1800);
  const t=document.body.innerText, i0=t.lastIndexOf('Discover Brands\n'+name), seg=i0>=0?t.slice(i0,i0+800):'';
  const g=re=>(seg.match(re)||[])[1]||'';
  window.__trybe.push([name,g(/\n([^\n]*(GMV|per video|per submission|Flat|per post|ad spend)[^\n]*)/),g(/\n(\$[\d.,KM+]+)\nCreator Earnings/),g(/\n([\d,]+)\nTotal Creators/),g(/\n(\d+)\nTrybe Score/),g(/\n([\d.]+ \(\d+ reviews?\))/)].join(' | '));
  document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true})); await sleep(700);
}
window.__done=true;})();
