const KEY='fitness-ai-coach-checkins-v1';
const baseline={date:'2026-10-28',weight:95,waist:null,sleep:8,energy:7,sessions:null,adherence:null};
function getEntries(){try{const value=JSON.parse(localStorage.getItem(KEY));return Array.isArray(value)?value:[baseline]}catch{return [baseline]}}
function setEntries(entries){localStorage.setItem(KEY,JSON.stringify(entries))}
function go(id){document.querySelectorAll('.view').forEach(e=>e.classList.toggle('active',e.id===id));document.querySelectorAll('[data-go]').forEach(e=>e.classList.toggle('active',e.dataset.go===id));window.scrollTo(0,0)}
document.querySelectorAll('[data-go]').forEach(e=>e.addEventListener('click',()=>go(e.dataset.go)));
function safe(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function render(){const entries=getEntries().sort((a,b)=>a.date.localeCompare(b.date));const current=entries.at(-1);document.querySelector('#dashWeight').textContent=current.weight;document.querySelector('#dashSleep').textContent=current.sleep;const diff=+(current.weight-baseline.weight).toFixed(1);document.querySelector('#dashChange').textContent=entries.length===1?'Línea base: 28 oct 2026':`${diff>0?'+':''}${diff} kg desde la línea base`;document.querySelector('#history').innerHTML=entries.slice().reverse().map(x=>`<div class="item"><strong>${safe(x.date)}</strong> · <span class="green">${safe(x.weight)} kg</span><p class="sub">Sueño: ${safe(x.sleep)} h · Energía: ${safe(x.energy)}/10 · Cintura: ${x.waist==null?'sin medir':safe(x.waist)+' cm'} · Entrenamientos: ${x.sessions==null?'sin registrar':safe(x.sessions)}</p></div>`).join('')}
const date=document.querySelector('#date');date.value=new Date().toLocaleDateString('en-CA');
document.querySelector('#checkin').addEventListener('submit',e=>{e.preventDefault();const el=id=>document.getElementById(id).value;const entry={date:el('date'),weight:+el('weight'),waist:el('waist')===''?null:+el('waist'),sleep:+el('sleep'),energy:+el('energy'),sessions:+el('sessions'),adherence:el('adherence')===''?null:+el('adherence')};const entries=getEntries().filter(x=>x.date!==entry.date);entries.push(entry);setEntries(entries);render();document.querySelector('#saveStatus').textContent='Check-in guardado en este dispositivo.';e.target.reset();date.value=new Date().toLocaleDateString('en-CA')});
document.querySelector('#exportBtn').addEventListener('click',()=>{const blob=new Blob([JSON.stringify(getEntries(),null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='fitness-checkins.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),2000)});render();if('serviceWorker'in navigator)navigator.serviceWorker.register('./service-worker.js').catch(()=>{});

// Restaura solamente entradas de seguimiento válidas. Sustituye el historial tras confirmación.
document.querySelector('#importFile').addEventListener('change',async e=>{
 const file=e.target.files?.[0], status=document.querySelector('#importStatus');
 if(!file)return;
 try {
   if(file.size>2_000_000)throw Error('Archivo demasiado grande.');
   const raw=JSON.parse(await file.text());
   if(!Array.isArray(raw)||raw.length>2000||!raw.every(x=>
      x&&typeof x==='object'&&/^\d{4}-\d{2}-\d{2}$/.test(x.date)&&
      Number.isFinite(x.weight)&&x.weight>=25&&x.weight<=350&&
      Number.isFinite(x.sleep)&&x.sleep>=0&&x.sleep<=24&&
      Number.isFinite(x.energy)&&x.energy>=1&&x.energy<=10&&
      (x.waist==null||(Number.isFinite(x.waist)&&x.waist>=40&&x.waist<=250))&&
      (x.sessions==null||(Number.isInteger(x.sessions)&&x.sessions>=0&&x.sessions<=14))&&
      (x.adherence==null||(Number.isFinite(x.adherence)&&x.adherence>=0&&x.adherence<=100))
   ))throw Error('El archivo no es un respaldo válido de FITNESS AI COACH.');
   if(!confirm(`¿Reemplazar tus registros actuales por ${raw.length} registros del respaldo?`))return;
   setEntries(raw);render();status.textContent=`Restaurados ${raw.length} registros correctamente.`;
 }catch(err){status.textContent=`No se pudo importar: ${err.message}`;}
 finally{e.target.value='';}
});
