// ── DATA ──────────────────────────────────────────────────────────
const CD={copper:{XLPE:{A1:[{s:1.5,I:13.5},{s:2.5,I:18},{s:4,I:24},{s:6,I:31},{s:10,I:42},{s:16,I:56},{s:25,I:73},{s:35,I:89},{s:50,I:108},{s:70,I:136},{s:95,I:164},{s:120,I:188},{s:150,I:216},{s:185,I:245},{s:240,I:286},{s:300,I:328}],B1:[{s:1.5,I:15.5},{s:2.5,I:21},{s:4,I:28},{s:6,I:36},{s:10,I:50},{s:16,I:66},{s:25,I:84},{s:35,I:104},{s:50,I:125},{s:70,I:160},{s:95,I:194},{s:120,I:225},{s:150,I:260},{s:185,I:297},{s:240,I:350},{s:300,I:400}],C:[{s:1.5,I:17.5},{s:2.5,I:24},{s:4,I:32},{s:6,I:41},{s:10,I:57},{s:16,I:76},{s:25,I:96},{s:35,I:119},{s:50,I:144},{s:70,I:184},{s:95,I:223},{s:120,I:259},{s:150,I:299},{s:185,I:341},{s:240,I:403},{s:300,I:464}],E:[{s:1.5,I:19.5},{s:2.5,I:27},{s:4,I:36},{s:6,I:46},{s:10,I:63},{s:16,I:85},{s:25,I:110},{s:35,I:137},{s:50,I:167},{s:70,I:214},{s:95,I:261},{s:120,I:303},{s:150,I:349},{s:185,I:400},{s:240,I:472},{s:300,I:545}],F:[{s:1.5,I:22},{s:2.5,I:30},{s:4,I:40},{s:6,I:52},{s:10,I:71},{s:16,I:96},{s:25,I:119},{s:35,I:147},{s:50,I:179},{s:70,I:229},{s:95,I:278},{s:120,I:322},{s:150,I:371},{s:185,I:424},{s:240,I:500},{s:300,I:576}],D1:[{s:1.5,I:18},{s:2.5,I:24},{s:4,I:31},{s:6,I:39},{s:10,I:52},{s:16,I:67},{s:25,I:86},{s:35,I:103},{s:50,I:122},{s:70,I:151},{s:95,I:179},{s:120,I:203},{s:150,I:230},{s:185,I:258},{s:240,I:297},{s:300,I:336}]},PVC:{C:[{s:1.5,I:15},{s:2.5,I:20},{s:4,I:27},{s:6,I:34},{s:10,I:46},{s:16,I:62},{s:25,I:80},{s:35,I:99},{s:50,I:119},{s:70,I:151},{s:95,I:182},{s:120,I:210},{s:150,I:240},{s:185,I:273},{s:240,I:321},{s:300,I:367}],E:[{s:1.5,I:16.5},{s:2.5,I:23},{s:4,I:30},{s:6,I:38},{s:10,I:52},{s:16,I:69},{s:25,I:90},{s:35,I:111},{s:50,I:133},{s:70,I:171},{s:95,I:207},{s:120,I:239},{s:150,I:275},{s:185,I:314},{s:240,I:370},{s:300,I:424}]}},aluminium:{XLPE:{C:[{s:16,I:59},{s:25,I:75},{s:35,I:92},{s:50,I:110},{s:70,I:140},{s:95,I:169},{s:120,I:196},{s:150,I:225},{s:185,I:259},{s:240,I:305},{s:300,I:351}],E:[{s:16,I:67},{s:25,I:86},{s:35,I:103},{s:50,I:128},{s:70,I:163},{s:95,I:198},{s:120,I:229},{s:150,I:263},{s:185,I:303},{s:240,I:358},{s:300,I:413}]},PVC:{C:[{s:16,I:48},{s:25,I:62},{s:35,I:77},{s:50,I:92},{s:70,I:117},{s:95,I:141},{s:120,I:162},{s:150,I:187},{s:185,I:213},{s:240,I:251},{s:300,I:286}]}}};
const CR={1.5:12.1,2.5:7.41,4:4.61,6:3.08,10:1.83,16:1.15,25:0.727,35:0.524,50:0.387,70:0.268,95:0.193,120:0.153,150:0.124,185:0.0991,240:0.0754,300:0.0601};
const ALR={16:1.91,25:1.20,35:0.868,50:0.641,70:0.443,95:0.320,120:0.253,150:0.206,185:0.164,240:0.125,300:0.100};
const TD={XLPE:{25:1.04,30:1.0,35:.96,40:.91,45:.87,50:.82,55:.76,60:.71,65:.65,70:.58},PVC:{25:1.03,30:1.0,35:.94,40:.87,45:.79,50:.71,55:.61,60:.50}};
const GD=[1.0,.80,.70,.65,.60,.57,.54,.52,.50,.48];
const BR=[6,10,16,20,25,32,40,50,63,80,100,125,160,200,250,315,400,500,630,800,1000];
const GS=[10,20,30,50,75,100,150,200,250,300,400,500,750,1000,1500,2000];
const TS=[25,50,100,160,200,250,315,400,500,630,800,1000,1250,1600,2000,2500,3150];
const TARIFFS={ng:{tariff:0.055,dem:3.50,fixed:15,pfpen:0,tax:7.5,cur:'₦'},uk:{tariff:0.28,dem:5.00,fixed:25,pfpen:2,tax:5,cur:'£'},us:{tariff:0.14,dem:8.00,fixed:12,pfpen:0,tax:8,cur:'$'},gh:{tariff:0.038,dem:2.50,fixed:10,pfpen:0,tax:12.5,cur:'GH₵'},za:{tariff:0.18,dem:6.00,fixed:20,pfpen:2,tax:15,cur:'R'},uae:{tariff:0.075,dem:4.00,fixed:18,pfpen:0,tax:5,cur:'AED'}};
const CAT_COLORS={Lighting:'#f59e0b','Socket Outlets':'#8b5cf6',HVAC:'#3b82f6',Motors:'#ef4444',Pumps:'#06b6d4',Lifts:'#6366f1','IT Loads':'#0ea5e9',Kitchen:'#f97316',Special:'#ec4899',Spare:'#6b7280'};
const PRESETS={house:[{desc:'Lighting — Bedrooms',cat:'Lighting',qty:8,uw:9,pf:.95,df:.7,phase:'R'},{desc:'Lighting — Living',cat:'Lighting',qty:6,uw:9,pf:.95,df:.7,phase:'R'},{desc:'Socket Outlets',cat:'Socket Outlets',qty:10,uw:150,pf:.9,df:.4,phase:'Y'},{desc:'Kitchen Sockets',cat:'Kitchen',qty:4,uw:500,pf:.9,df:.6,phase:'Y'},{desc:'Air Conditioner',cat:'HVAC',qty:2,uw:1100,pf:.85,df:.8,phase:'B'},{desc:'Water Heater',cat:'Kitchen',qty:1,uw:2000,pf:1,df:.3,phase:'R'},{desc:'Refrigerator',cat:'Kitchen',qty:1,uw:200,pf:.85,df:.9,phase:'B'},{desc:'TV & Electronics',cat:'IT Loads',qty:3,uw:120,pf:.9,df:.7,phase:'Y'},{desc:'Water Pump',cat:'Pumps',qty:1,uw:750,pf:.8,df:.5,phase:'B'},{desc:'Spare',cat:'Spare',qty:1,uw:500,pf:.9,df:1,phase:'R+Y+B'}],office:[{desc:'General Lighting',cat:'Lighting',qty:40,uw:18,pf:.95,df:1,phase:'R'},{desc:'Emergency Lighting',cat:'Lighting',qty:10,uw:9,pf:.95,df:1,phase:'R'},{desc:'Power Sockets',cat:'Socket Outlets',qty:30,uw:150,pf:.9,df:.4,phase:'Y'},{desc:'Workstation PCs',cat:'IT Loads',qty:20,uw:250,pf:.9,df:.8,phase:'B'},{desc:'Server Room',cat:'IT Loads',qty:1,uw:3000,pf:.9,df:1,phase:'R+Y+B'},{desc:'Air Handling Unit',cat:'HVAC',qty:2,uw:5500,pf:.85,df:.9,phase:'R+Y+B'},{desc:'Fan Coil Units',cat:'HVAC',qty:8,uw:750,pf:.85,df:.8,phase:'Y'},{desc:'Lifts',cat:'Lifts',qty:1,uw:11000,pf:.8,df:.5,phase:'R+Y+B'},{desc:'Canteen',cat:'Kitchen',qty:1,uw:6000,pf:.9,df:.6,phase:'B'},{desc:'Spare 20%',cat:'Spare',qty:1,uw:5000,pf:.9,df:1,phase:'R+Y+B'}],school:[{desc:'Classroom Lighting',cat:'Lighting',qty:60,uw:18,pf:.95,df:.9,phase:'R'},{desc:'Classroom Sockets',cat:'Socket Outlets',qty:30,uw:100,pf:.9,df:.3,phase:'R'},{desc:'Computer Lab',cat:'IT Loads',qty:30,uw:250,pf:.9,df:.8,phase:'Y'},{desc:'Admin Block',cat:'IT Loads',qty:10,uw:200,pf:.9,df:.7,phase:'B'},{desc:'Air Conditioning',cat:'HVAC',qty:4,uw:1100,pf:.85,df:.7,phase:'B'},{desc:'Kitchen',cat:'Kitchen',qty:1,uw:4000,pf:.9,df:.5,phase:'Y'},{desc:'Water Pumps',cat:'Pumps',qty:2,uw:750,pf:.8,df:.4,phase:'R'},{desc:'Spare',cat:'Spare',qty:1,uw:2000,pf:.9,df:1,phase:'R+Y+B'}],hotel:[{desc:'Guest Room Lighting',cat:'Lighting',qty:50,uw:60,pf:.9,df:.6,phase:'R'},{desc:'Corridor Lighting',cat:'Lighting',qty:40,uw:18,pf:.95,df:1,phase:'Y'},{desc:'Guest Room Sockets',cat:'Socket Outlets',qty:100,uw:200,pf:.9,df:.4,phase:'B'},{desc:'Room Air Con',cat:'HVAC',qty:50,uw:1100,pf:.85,df:.6,phase:'R'},{desc:'Chiller Plant',cat:'HVAC',qty:1,uw:50000,pf:.85,df:.7,phase:'R+Y+B'},{desc:'Restaurant Kitchen',cat:'Kitchen',qty:1,uw:20000,pf:.9,df:.7,phase:'Y'},{desc:'Lifts',cat:'Lifts',qty:4,uw:11000,pf:.8,df:.4,phase:'R+Y+B'},{desc:'Laundry',cat:'Special',qty:1,uw:15000,pf:.9,df:.5,phase:'B'},{desc:'Spare',cat:'Spare',qty:1,uw:10000,pf:.9,df:1,phase:'R+Y+B'}],warehouse:[{desc:'High Bay Lighting',cat:'Lighting',qty:30,uw:150,pf:.95,df:.9,phase:'R'},{desc:'Office Lighting',cat:'Lighting',qty:20,uw:18,pf:.95,df:.9,phase:'R'},{desc:'Power Sockets',cat:'Socket Outlets',qty:20,uw:200,pf:.9,df:.3,phase:'Y'},{desc:'Conveyor Motors',cat:'Motors',qty:3,uw:5500,pf:.8,df:.7,phase:'B'},{desc:'Forklift Chargers',cat:'Special',qty:4,uw:3300,pf:.9,df:.5,phase:'Y'},{desc:'Compressors',cat:'Motors',qty:2,uw:7500,pf:.8,df:.6,phase:'B'},{desc:'Exhaust Fans',cat:'HVAC',qty:6,uw:750,pf:.85,df:.8,phase:'R'},{desc:'Water Pump',cat:'Pumps',qty:2,uw:1500,pf:.8,df:.4,phase:'R+Y+B'},{desc:'Spare',cat:'Spare',qty:1,uw:5000,pf:.9,df:1,phase:'R+Y+B'}]};

let loads=[],nid=1,pbSugg=[],curEMF=0.431;

// ── HELPERS ──
const gV=()=>{const s=document.getElementById('svolt').value;return s==='custom'?parseFloat(document.getElementById('scvolt').value)||415:parseFloat(s);};
const gSys=()=>document.getElementById('stype').value;
const gPF=()=>parseFloat(document.getElementById('spf').value)||0.8;
const gTW=()=>loads.reduce((s,l)=>s+l.qty*l.uw,0);
const gDW=()=>gTW()*(parseFloat(document.getElementById('df').value)||.75)/(parseFloat(document.getElementById('divf').value)||1);
const $=id=>document.getElementById(id);
const fmt=n=>n>=1000?(n/1000).toFixed(2)+'k':n.toFixed(0);

function T(n){document.querySelectorAll('.tab').forEach((t,i)=>t.classList.toggle('active',i===n));document.querySelectorAll('.panel').forEach((p,i)=>p.classList.toggle('active',i===n));}

// ── LOADS ──
function AL(d){const id=nid++;const def=d||{desc:'',cat:'Lighting',qty:1,uw:100,pf:1.0,df:1.0,phase:'R'};loads.push({id,...def});RL();}
function RL(){
  const c=$('loadRows');c.innerHTML='';
  loads.forEach(l=>{
    const r=document.createElement('div');r.className='lr';
    r.innerHTML=`<input type="text" value="${l.desc}" placeholder="Description" oninput="UL(${l.id},'desc',this.value)">
      <select onchange="UL(${l.id},'cat',this.value)">${['Lighting','Socket Outlets','HVAC','Motors','Pumps','Lifts','IT Loads','Kitchen','Special','Spare'].map(c=>`<option${c===l.cat?' selected':''}>${c}</option>`).join('')}</select>
      <input type="number" value="${l.qty}" min="1" oninput="UL(${l.id},'qty',+this.value)">
      <input type="number" value="${l.uw}" min="0" oninput="UL(${l.id},'uw',+this.value)">
      <input type="number" value="${(l.qty*l.uw).toFixed(0)}" readonly style="background:#f8fafc;color:var(--cm)">
      <input type="number" value="${l.pf}" min="0.5" max="1" step="0.01" oninput="UL(${l.id},'pf',+this.value)">
      <input type="number" value="${l.df}" min="0.1" max="1" step="0.01" oninput="UL(${l.id},'df',+this.value)">
      <select onchange="UL(${l.id},'phase',this.value)">${['R','Y','B','R+Y+B'].map(p=>`<option${p===l.phase?' selected':''}>${p}</option>`).join('')}</select>
      <button class="delbtn" onclick="DL(${l.id})">×</button>`;
    c.appendChild(r);
  });
  UT();
}
function UL(id,f,v){const l=loads.find(x=>x.id===id);if(l){l[f]=v;RL();}}
function DL(id){loads=loads.filter(l=>l.id!==id);RL();}
function UT(){const t=gTW();$('totConn').textContent=t>=1000?(t/1000).toFixed(2)+' kW':t.toFixed(0)+' W';}
function CL(){loads=[];RL();}
function LP(n,el){loads=[];nid=1;PRESETS[n].forEach(d=>AL(d));document.querySelectorAll('.pb').forEach(b=>b.classList.remove('active'));if(el)el.classList.add('active');cD();}

// ── DEMAND ──
function sDP(v,el){document.querySelectorAll('#dPresets .pb').forEach(b=>b.classList.remove('active'));el.classList.add('active');$('df').value=v;cD();}
function cD(){
  const connected=gTW(),df=parseFloat($('df').value)||.75,div=parseFloat($('divf').value)||1,gm=parseFloat($('gm').value)||20,pf=gPF();
  const demand=connected*df/div,kw=demand/1000,kva=kw/pf,kvar=Math.sqrt(Math.max(0,kva*kva-kw*kw)),des=kva*(1+gm/100);
  $('d_c').textContent=connected.toFixed(0);$('d_d').textContent=demand.toFixed(0);
  $('d_kw').textContent=kw.toFixed(2);$('d_kva').textContent=kva.toFixed(2);
  $('d_kvar').textContent=kvar.toFixed(2);$('d_des').textContent=des.toFixed(2);
  $('dAlert').innerHTML=!demand?'<div class="al aw">⚠ No loads entered.</div>':'<div class="al ag">✅ Demand calculation complete.</div>';
  const ph={R:0,Y:0,B:0};
  loads.forEach(l=>{const w=l.qty*l.uw;if(l.phase==='R+Y+B'){ph.R+=w/3;ph.Y+=w/3;ph.B+=w/3;}else if(ph[l.phase]!==undefined)ph[l.phase]+=w;});
  const tot=Object.values(ph).reduce((a,b)=>a+b,0)||1;
  const cols={R:'#dc2626',Y:'#d97706',B:'#1d4ed8'};
  $('pBar').innerHTML=Object.entries(ph).map(([p,w])=>`<div style="margin-bottom:7px"><div style="display:flex;justify-content:space-between;font-size:11px;font-weight:600;margin-bottom:2px"><span>Phase ${p}</span><span>${(w/1000).toFixed(2)} kW (${((w/tot)*100).toFixed(1)}%)</span></div><div class="pgb"><div class="pgf" style="width:${(w/tot)*100}%;background:${cols[p]}"></div></div></div>`).join('');
}

// ── CURRENT ──
function uCC(){$('cFormula').textContent=gSys()==='3ph'?'3Φ: I = P ÷ (√3 × V × PF)':'1Φ: I = P ÷ (V × PF)';cCur();}
function cCur(){
  const kw=parseFloat($('ckw').value)||0,pf=parseFloat($('cpf').value)||.8,eff=(parseFloat($('ceff').value)||100)/100,V=gV(),sys=gSys(),P=(kw*1000)/eff;
  const I=sys==='3ph'?P/(Math.sqrt(3)*V*pf):P/(V*pf),kva=P/pf/1000;
  $('c_line').textContent=I.toFixed(2);$('c_phase').textContent=I.toFixed(2);
  $('c_kva').textContent=kva.toFixed(2);$('c_des').textContent=(I*1.25).toFixed(2);
}
function impDem2Cur(){const kva=parseFloat($('d_kva').textContent)||0,pf=gPF();$('ckw').value=(kva*pf).toFixed(2);$('cpf').value=pf;cCur();}
function iD2Cab(){const kva=parseFloat($('d_kva').textContent)||0,pf=gPF(),V=gV(),sys=gSys(),I=sys==='3ph'?(kva*1000)/(Math.sqrt(3)*V):(kva*1000)/V;$('cab_I').value=(I*1.25).toFixed(2);cCab();}
function iD2Brk(){const kva=parseFloat($('d_kva').textContent)||0,V=gV(),sys=gSys(),I=sys==='3ph'?(kva*1000)/(Math.sqrt(3)*V):(kva*1000)/V;$('brk_I').value=I.toFixed(2);cBrk();}
function iD2VD(){const kva=parseFloat($('d_kva').textContent)||0,V=gV(),sys=gSys(),I=sys==='3ph'?(kva*1000)/(Math.sqrt(3)*V):(kva*1000)/V;$('vd_I').value=I.toFixed(2);$('vd_sys').value=sys==='3ph'?'3ph':'1ph';cVD();}

// ── CABLES ──
function cCab(){
  const I=parseFloat($('cab_I').value)||0,mat=$('cab_mat').value,ins=$('cab_ins').value,mth=$('cab_mth').value,tmp=parseInt($('cab_tmp').value)||30,grp=Math.min(parseInt($('cab_grp').value)||1,10);
  const tk=Math.round(tmp/5)*5,td=(TD[ins]||TD.XLPE)[tk]||1,gd=GD[grp-1]||.5,derating=td*gd,cI=I/derating;
  const tbl=(((CD[mat]||CD.copper)[ins]||CD.copper.XLPE)[mth])||CD.copper.XLPE.C;
  const ch=tbl.find(c=>c.I>=cI),res=$('cabRes');
  if(!I){res.innerHTML='<div class="al ai">ℹ Enter design current.</div>';return;}
  if(!ch){res.innerHTML='<div class="al aw">⚠ Current exceeds max cable size. Use parallel cables or busbar.</div>';return;}
  const R=(mat==='copper'?CR:ALR)[ch.s]||0,L=parseFloat($('cab_len').value)||50,sys=gSys();
  const VD=sys==='3ph'?(Math.sqrt(3)*L*I*R)/1000:(2*L*I*R)/1000,V=gV(),VDp=(VD/V)*100,vdl=parseFloat($('cab_vdl').value)||3,pass=VDp<=vdl;
  res.innerHTML=`<div class="mgs"><div class="mg"><div class="v">${ch.s}</div><div class="u">mm²</div><div class="l">Size</div></div><div class="mg"><div class="v">${ch.I}</div><div class="u">A</div><div class="l">Rated</div></div><div class="mg"><div class="v">${cI.toFixed(1)}</div><div class="u">A</div><div class="l">Corrected</div></div><div class="mg"><div class="v">${(derating*100).toFixed(0)}</div><div class="u">%</div><div class="l">Derating</div></div><div class="mg"><div class="v">${VD.toFixed(2)}</div><div class="u">V</div><div class="l">VD</div></div><div class="mg"><div class="v">${VDp.toFixed(2)}</div><div class="u">%</div><div class="l">VD%</div></div></div><div class="fl"><span class="tag ${pass?'tg':'tr'}">${pass?'✓ PASS':'✗ FAIL'} VD${VDp.toFixed(2)}%</span><span class="tag tb">${mat.toUpperCase()} ${ins} ${ch.s}mm² Method ${mth}</span></div>`;
  const rd=CD.copper.XLPE.C;
  $('cabRefTbl').innerHTML=`<thead><tr><th>mm²</th>${rd.map(c=>`<th>${c.s}</th>`).join('')}</tr></thead><tbody><tr><td style="font-weight:700;color:var(--cp)">A (Cap.)</td>${rd.map(c=>`<td style="${ch&&c.s===ch.s?'background:#dcfce7;font-weight:700':''}">${c.I}</td>`).join('')}</tr></tbody>`;
}

// ── BREAKERS ──
function cBrk(){
  const I=parseFloat($('brk_I').value)||0,t=$('brk_lt').value,icu=$('brk_ic').value;
  const fac=t==='continuous'||t==='motor'?1.25:1,req=I*fac,rat=BR.find(r=>r>=req)||BR[BR.length-1];
  const bt=rat<=100?'MCB':rat<=630?'MCCB':'ACB';
  const res=$('brkRes');
  if(!I){res.innerHTML='<div class="al ai">ℹ Enter full load current.</div>';}
  else res.innerHTML=`<div class="mgs"><div class="mg"><div class="v">${I.toFixed(1)}</div><div class="u">A</div><div class="l">FLC</div></div><div class="mg"><div class="v">${req.toFixed(1)}</div><div class="u">A</div><div class="l">Min Required</div></div><div class="mg"><div class="v">${rat}</div><div class="u">A</div><div class="l">Selected</div></div><div class="mg"><div class="v">${bt}</div><div class="u">${icu}kA</div><div class="l">Type</div></div></div><div class="fl"><span class="tag tg">✓ ${rat}A ${bt} — Icu ${icu}kA</span>${t==='motor'?'<span class="tag ta">Motor: Use DOL/Star-Delta starter</span>':''}</div>`;
  $('brkTbl').innerHTML=BR.map(r=>`<span class="tag" style="background:${r===rat?'var(--cp)':'#f1f5f9'};color:${r===rat?'#fff':'var(--cm)'};padding:5px 10px;font-size:12px;margin:2px">${r}A</span>`).join('');
}

// ── VOLTAGE DROP ──
function cVD(){
  const I=parseFloat($('vd_I').value)||0,L=parseFloat($('vd_len').value)||50,s=parseFloat($('vd_sz').value)||50,mat=$('vd_mat').value,sys=$('vd_sys').value,std=parseFloat($('vd_std').value)||3;
  const R=(mat==='copper'?CR:ALR)[s]||CR[50],V=gV();
  const VD=sys==='3ph'?(Math.sqrt(3)*L*I*R)/1000:(2*L*I*R)/1000,VDp=(VD/V)*100,pass=VDp<=std;
  const res=$('vdRes');
  if(!I){res.innerHTML='<div class="al ai">ℹ Enter load current.</div>';return;}
  res.innerHTML=`<div class="mgs"><div class="mg"><div class="v">${VD.toFixed(2)}</div><div class="u">V</div><div class="l">VD</div></div><div class="mg"><div class="v">${VDp.toFixed(2)}</div><div class="u">%</div><div class="l">VD%</div></div><div class="mg"><div class="v">${(V-VD).toFixed(1)}</div><div class="u">V</div><div class="l">Receiving V</div></div><div class="mg"><div class="v">${std}</div><div class="u">%</div><div class="l">Limit</div></div></div><div class="fl"><span class="tag ${pass?'tg':'tr'}">${pass?'✓ PASS':'✗ FAIL'} — ${VDp.toFixed(2)}% vs ${std}%</span></div>`;
}

// ── GENERATOR ──
function iD2Gen(){const kva=parseFloat($('d_kva').textContent)||0,pf=gPF();$('gen_kw').value=(kva*pf).toFixed(2);$('gen_pf').value=pf;cGen();}
function cGen(){
  const kw=parseFloat($('gen_kw').value)||0,pf=parseFloat($('gen_pf').value)||.8,mm=(parseFloat($('gen_mm').value)||25)/100,sm=(parseFloat($('gen_sm').value)||20)/100;
  const kva=kw/pf,wm=kva*(1+mm),des=wm*(1+sm),sel=GS.find(s=>s>=des)||GS[GS.length-1];
  const res=$('genRes');
  if(!kw){res.innerHTML='<div class="al ai">ℹ Enter demand kW or import.</div>';return;}
  res.innerHTML=`<div class="rb"><div class="lbl">Recommended Generator</div><div class="big">${sel} kVA</div><div style="font-size:12px;margin-top:3px;opacity:.9">${$('gen_ft').value} | Loading: ${(des/sel*100).toFixed(1)}%</div></div><div class="mgs"><div class="mg"><div class="v">${kw.toFixed(1)}</div><div class="u">kW</div><div class="l">Demand</div></div><div class="mg"><div class="v">${kva.toFixed(1)}</div><div class="u">kVA</div><div class="l">Base kVA</div></div><div class="mg"><div class="v">${des.toFixed(1)}</div><div class="u">kVA</div><div class="l">Design kVA</div></div><div class="mg"><div class="v">${sel}</div><div class="u">kVA</div><div class="l">Selected</div></div></div><div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:8px">${GS.map(s=>`<span class="tag" style="background:${s===sel?'var(--cp)':'#f1f5f9'};color:${s===sel?'#fff':'var(--cm)'};padding:4px 9px;font-size:11px">${s}</span>`).join('')}</div>`;
}

// ── INVERTER ──
function iD2Inv(){const kva=parseFloat($('d_kva').textContent)||0,pf=gPF();$('inv_ld').value=Math.round(kva*pf*1000);cInv();}
function cInv(){
  const ld=parseFloat($('inv_ld').value)||0,hr=parseFloat($('inv_hr').value)||4,bv=parseFloat($('inv_bv').value)||48,be=(parseFloat($('inv_be').value)||85)/100,dd=(parseFloat($('inv_dd').value)||80)/100,ie=(parseFloat($('inv_ie').value)||92)/100,bah=parseFloat($('inv_bah').value)||200;
  const sz=Math.ceil(ld/(ie*1000)*1000/100)*100,en=(ld*hr)/1000,tAh=(en*1000)/(bv*be*dd),nb=Math.ceil(tAh/bah);
  const res=$('invRes');
  if(!ld){res.innerHTML='<div class="al ai">ℹ Enter backup load.</div>';return;}
  res.innerHTML=`<div class="rb"><div style="display:grid;grid-template-columns:1fr 1fr;gap:14px"><div><div class="lbl">Inverter</div><div class="big">${(sz/1000).toFixed(1)} kVA</div></div><div><div class="lbl">Battery Bank</div><div class="big">${nb} × ${bah}Ah</div></div></div></div><div class="mgs"><div class="mg"><div class="v">${en.toFixed(2)}</div><div class="u">kWh</div><div class="l">Energy</div></div><div class="mg"><div class="v">${tAh.toFixed(0)}</div><div class="u">Ah</div><div class="l">Total Ah</div></div><div class="mg"><div class="v">${nb}</div><div class="u">pcs</div><div class="l">Batteries</div></div></div>`;
}

// ── TRANSFORMER ──
function iD2Tx(){const kva=parseFloat($('d_des').textContent)||0;$('tx_kva').value=kva.toFixed(1);cTx();}
function cTx(){
  const kva=parseFloat($('tx_kva').value)||0,lf=(parseFloat($('tx_lf').value)||80)/100,req=kva/lf,sel=TS.find(s=>s>=req)||TS[TS.length-1];
  const res=$('txRes');
  if(!kva){res.innerHTML='<div class="al ai">ℹ Enter load kVA or import.</div>';return;}
  res.innerHTML=`<div class="rb"><div class="lbl">Recommended Transformer</div><div class="big">${sel} kVA</div><div style="font-size:12px;margin-top:3px;opacity:.9">${$('tx_pri').value}V / ${$('tx_sec').value}V | ${(kva/sel*100).toFixed(1)}% loaded | ${$('tx_cool').value}</div></div><div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:8px">${TS.map(s=>`<span class="tag" style="background:${s===sel?'var(--cp)':'#f1f5f9'};color:${s===sel?'#fff':'var(--cm)'};padding:4px 9px;font-size:11px">${s}</span>`).join('')}</div>`;
}

// ── BOM ──
function gBOM(){
  const rows=[],L=parseFloat($('cab_len').value)||50;
  const cabT=document.querySelector('#cabRes .tag.tb'),brkT=document.querySelector('#brkRes .tag.tg'),genB=document.querySelector('#genRes .big'),txB=document.querySelector('#txRes .big');
  loads.forEach(l=>{if(l.cat==='Lighting')rows.push({d:`Lighting — ${l.desc||l.cat}`,s:'LED/Fluorescent',u:'Cct',q:Math.ceil(l.qty/8),r:'8pts/cct'});});
  rows.push({d:'Main Distribution Board',s:gSys()==='3ph'?'3Φ TPN DB':'1Φ SPN DB',u:'No',q:1,r:'With incomer MCB'});
  if(cabT)rows.push({d:'Main Feeder Cable',s:cabT.textContent.trim(),u:'m',q:Math.ceil(L*1.05),r:'+5% wastage'});
  if(brkT)rows.push({d:'Main Breaker',s:brkT.textContent.trim(),u:'No',q:1,r:''});
  loads.forEach(l=>rows.push({d:`MCB — ${l.cat}`,s:'10kA',u:'No',q:l.qty,r:l.desc}));
  rows.push({d:'Earth Cable',s:'Green/Yellow PVC',u:'m',q:Math.ceil(L),r:''},{d:'Cable Tray/Conduit',s:'50×25mm PVC',u:'m',q:Math.ceil(L),r:''});
  if(genB)rows.push({d:'Standby Generator',s:genB.textContent.trim(),u:'No',q:1,r:'With ATS panel'});
  if(txB)rows.push({d:'Transformer',s:txB.textContent.trim(),u:'No',q:1,r:''});
  rows.push({d:'Earthing System',s:'25×3mm Cu Strip',u:'Lot',q:1,r:'IEC 60364'},{d:'Glands & Lugs',s:'Compression Type',u:'Lot',q:1,r:''});
  $('bomBody').innerHTML=rows.map(r=>`<tr><td>${r.d}</td><td>${r.s}</td><td>${r.u}</td><td>${r.q}</td><td style="color:var(--cm)">${r.r}</td></tr>`).join('');
}
function exBOM(){
  const rows=document.querySelectorAll('#bomTbl tr'),csv=Array.from(rows).map(r=>Array.from(r.querySelectorAll('th,td')).map(c=>'"'+c.textContent.replace(/"/g,'""')+'"').join(',')).join('\n');
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='BOM.csv';a.click();
}

// ── PHASE BALANCER ──
function gPL(ls){const p={R:0,Y:0,B:0};ls.forEach(l=>{const w=l.qty*l.uw;if(l.phase==='R+Y+B'){p.R+=w/3;p.Y+=w/3;p.B+=w/3;}else if(p[l.phase]!==undefined)p[l.phase]+=w;});return p;}
function cImb(p){const v=Object.values(p),tot=v.reduce((a,b)=>a+b,0);if(!tot)return 0;const avg=tot/3,md=Math.max(...v.map(x=>Math.abs(x-avg)));return(md/avg)*100;}
function cNeutral(p,V,pf){const vph=V/Math.sqrt(3),IR=p.R/(vph*pf),IY=p.Y/(vph*pf),IB=p.B/(vph*pf);return Math.sqrt(Math.max(0,IR*IR+IY*IY+IB*IB-IR*IY-IY*IB-IB*IR));}
function updPBDisp(p){
  const tot=p.R+p.Y+p.B||1,idx=cImb(p),V=gV(),pf=gPF(),ni=cNeutral(p,V,pf),avg=(p.R+p.Y+p.B)/3,md=Math.max(...[p.R,p.Y,p.B].map(v=>Math.abs(v-avg)))/avg*100||0;
  ['R','Y','B'].forEach(ph=>{$(`pb${ph}_kw`).textContent=(p[ph]/1000).toFixed(2)+' kW';$(`pb${ph}_pct`).textContent=((p[ph]/tot)*100).toFixed(1)+'%';$(`pb${ph}_b`).style.width=((p[ph]/tot)*100)+'%';});
  $('pb_tot').textContent=((p.R+p.Y+p.B)/1000).toFixed(2);$('pb_dev').textContent=md.toFixed(1);$('pb_ni').textContent=ni.toFixed(1);
  const sc=$('pb_sc'),sl=$('pb_scl'),s=Math.max(0,100-idx).toFixed(0);
  sc.textContent=s+'%';sc.className='is '+(idx<5?'good':idx<15?'warn':'bad');
  sl.textContent=idx<5?'Excellent — Well Balanced':idx<15?'Acceptable — Minor Imbalance':idx<25?'Warning — Rebalancing Recommended':'Critical — Rebalance Required';
}
function runPB(){
  if(!loads.length){$('pbSugg').innerHTML='<div class="al aw">⚠ No loads entered.</div>';return;}
  const bPh=gPL(loads);updPBDisp(bPh);
  const sp=loads.filter(l=>l.phase==='R'||l.phase==='Y'||l.phase==='B').map(l=>({...l,w:l.qty*l.uw})).sort((a,b)=>b.w-a.w);
  const oPh={R:0,Y:0,B:0};loads.filter(l=>l.phase==='R+Y+B').forEach(l=>{const w=l.qty*l.uw;oPh.R+=w/3;oPh.Y+=w/3;oPh.B+=w/3;});
  const asgn={};sp.forEach(l=>{const best=Object.entries(oPh).sort((a,b)=>a[1]-b[1])[0][0];oPh[best]+=l.w;if(best!==l.phase)asgn[l.id]={from:l.phase,to:best,w:l.w,desc:l.desc||l.cat};});
  pbSugg=Object.entries(asgn).map(([id,a])=>({id:parseInt(id),...a}));
  const bIdx=cImb(bPh),aIdx=cImb(oPh),V=gV(),pf=gPF(),nB=cNeutral(bPh,V,pf),nA=cNeutral(oPh,V,pf);
  $('pbCmpSec').style.display='block';
  const miniB=(p,idx)=>{const t=Object.values(p).reduce((a,b)=>a+b,0)||1;const cols={R:'#dc2626',Y:'#d97706',B:'#1d4ed8'};return`<div style="font-size:11px;font-weight:700;margin-bottom:5px"><span class="tag ${idx<5?'tg':idx<15?'ta':'tr'}">${idx.toFixed(1)}% imbalance</span></div>${Object.entries(p).map(([ph,w])=>`<div class="cat-bar"><div class="cb-row"><span>Phase ${ph}</span><span>${(w/1000).toFixed(2)} kW (${((w/t)*100).toFixed(1)}%)</span></div><div class="cb-track"><div class="cb-fill" style="width:${(w/t)*100}%;background:${cols[ph]}"></div></div></div>`).join('')}`;};
  $('pbBefBody').innerHTML=miniB(bPh,bIdx);
  $('pbAftBody').innerHTML=miniB(oPh,aIdx)+`<div style="margin-top:8px"><span class="tag tg">▲ Improved by ${(bIdx-aIdx).toFixed(1)}%</span> <span class="tag tb">Neutral I: ${nA.toFixed(1)}A (was ${nB.toFixed(1)}A)</span></div>`;
  if(!pbSugg.length){$('pbSugg').innerHTML='<div class="al ag">✅ Load distribution is already well balanced. No reassignments needed.</div>';}
  else{const dc={R:'dR',Y:'dY',B:'dB'};$('pbSugg').innerHTML=`<div style="font-size:11px;color:var(--cm);margin-bottom:8px">${pbSugg.length} suggestion(s) — Imbalance: <strong>${bIdx.toFixed(1)}%</strong> → <strong>${aIdx.toFixed(1)}%</strong></div>${pbSugg.map(s=>`<div class="sr" id="sr_${s.id}"><div style="font-size:12px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${s.desc}</div><div style="display:flex;align-items:center;gap:5px"><span class="pd ${dc[s.from]}">${s.from}</span><span>→</span><span class="pd ${dc[s.to]}">${s.to}</span></div><div style="font-size:11px;color:var(--cm)">${(s.w/1000).toFixed(2)} kW</div><button class="apb" id="ab_${s.id}" onclick="apS(${s.id})">Apply</button><button class="rvb" id="rb_${s.id}" onclick="rvS(${s.id})" style="display:none">Undo</button></div>`).join('')}`;}
  renderPBManual();
}
function apS(id){const s=pbSugg.find(x=>x.id===id),l=loads.find(x=>x.id===id);if(!s||!l)return;l.phase=s.to;$('sr_'+id)?.classList.add('applied');const ab=$('ab_'+id),rb=$('rb_'+id);if(ab){ab.textContent='✓ Applied';ab.classList.add('done');ab.disabled=true;}if(rb)rb.style.display='';renderPBManual();updPBDisp(gPL(loads));}
function rvS(id){const s=pbSugg.find(x=>x.id===id),l=loads.find(x=>x.id===id);if(!s||!l)return;l.phase=s.from;$('sr_'+id)?.classList.remove('applied');const ab=$('ab_'+id),rb=$('rb_'+id);if(ab){ab.textContent='Apply';ab.classList.remove('done');ab.disabled=false;}if(rb)rb.style.display='none';renderPBManual();updPBDisp(gPL(loads));}
function applyAll(){pbSugg.forEach(s=>apS(s.id));}
function revertAll(){pbSugg.forEach(s=>rvS(s.id));}
function renderPBManual(){
  const mv=loads.filter(l=>['R','Y','B'].includes(l.phase));const dc={R:'dR',Y:'dY',B:'dB'};
  $('pbManTbl').innerHTML=mv.map((l,i)=>`<tr><td>${i+1}</td><td>${l.desc||'—'}</td><td><span class="tag tgr">${l.cat}</span></td><td>${(l.qty*l.uw).toFixed(0)} W</td><td><span class="pd ${dc[l.phase]}" style="margin:auto">${l.phase}</span></td><td><select style="width:80px;padding:4px 6px;font-size:12px" onchange="mnRe(${l.id},this.value)">${['R','Y','B','R+Y+B'].map(p=>`<option${p===l.phase?' selected':''}>${p}</option>`).join('')}</select></td></tr>`).join('')||'<tr><td colspan="6" style="text-align:center;color:var(--cm);padding:10px">No single-phase loads.</td></tr>';
}
function mnRe(id,ph){const l=loads.find(x=>x.id===id);if(l){l.phase=ph;RL();updPBDisp(gPL(loads));}}

// ── ENERGY & CARBON ──
function selEMF(v,label,el){curEMF=v;$('e_emf').value=v;document.querySelectorAll('.emf-card').forEach(c=>c.classList.remove('sel'));el.classList.add('sel');calcEnergy();}
function calcEnergy(){
  const hrs=parseFloat($('e_hrs').value)||10,days=parseFloat($('e_days').value)||5,wks=parseFloat($('e_wks').value)||50,emf=parseFloat($('e_emf').value)||0.431;
  const demKW=parseFloat($('d_kw').textContent)||0,kvaVal=parseFloat($('d_kva').textContent)||0;
  const daysPerYear=days*wks,hrsPerYear=hrs*daysPerYear,hrsPerMonth=hrsPerYear/12;
  const daily=demKW*hrs,monthly=demKW*hrsPerMonth,annual=demKW*hrsPerYear;
  const co2Annual=annual*emf/1000,co2Monthly=monthly*emf,trees=Math.ceil(co2Annual*1000/25);
  $('e_daily').textContent=daily.toFixed(1);$('e_monthly').textContent=monthly.toFixed(0);$('e_annual').textContent=annual.toFixed(0);
  $('e_co2_annual').textContent=co2Annual.toFixed(2);$('e_co2_monthly').textContent=co2Monthly.toFixed(0);
  $('e_trees').textContent=`${trees.toLocaleString()} trees needed annually to offset this facility's carbon footprint`;
  $('e_pkfac').textContent=kvaVal.toFixed(1);
  $('e_lf').textContent=demKW&&kvaVal?(demKW/kvaVal*gPF()*100).toFixed(1):'—';
  $('e_kgpkwh').textContent=emf.toFixed(3);
  const catTotals={};let totW=0;
  loads.forEach(l=>{const w=l.qty*l.uw;catTotals[l.cat]=(catTotals[l.cat]||0)+w;totW+=w;});
  const maxW=Math.max(...Object.values(catTotals))||1;
  $('catBreakdown').innerHTML=Object.entries(catTotals).sort((a,b)=>b[1]-a[1]).map(([cat,w])=>{
    const pct=totW?(w/totW*100).toFixed(1):'0';
    const kwhAnnual=(w/1000)*hrsPerYear;
    const col=CAT_COLORS[cat]||'#6b7280';
    return`<div class="cat-bar" style="margin-bottom:8px"><div class="cb-row"><span style="font-size:12px;font-weight:600">${cat}</span><span style="font-size:11px;color:var(--cm)">${pct}% | ${kwhAnnual.toFixed(0)} kWh/yr</span></div><div class="cb-track"><div class="cb-fill" style="width:${(w/maxW*100)}%;background:${col}"></div></div></div>`;
  }).join('')||'<div class="al ai">ℹ Add loads first.</div>';
}

// ── UTILITY COST ──
function setTariff(k,el){
  document.querySelectorAll('#tariffPresets .pb').forEach(b=>b.classList.remove('active'));el.classList.add('active');
  if(k==='custom')return;
  const t=TARIFFS[k];$('u_tariff').value=t.tariff;$('u_dem_chg').value=t.dem;$('u_fixed').value=t.fixed;$('u_pfpen').value=t.pfpen;$('u_tax').value=t.tax;$('u_cur').value=t.cur;calcUtility();
}
function calcUtility(){
  const tariff=parseFloat($('u_tariff').value)||0.055,demChg=parseFloat($('u_dem_chg').value)||3.5,fixed=parseFloat($('u_fixed').value)||15,pfpen=(parseFloat($('u_pfpen').value)||0)/100,tax=(parseFloat($('u_tax').value)||7.5)/100,cur=$('u_cur').value||'$';
  const hrs=parseFloat($('e_hrs').value)||10,days=parseFloat($('e_days').value)||5,wks=parseFloat($('e_wks').value)||50;
  const demKW=parseFloat($('d_kw').textContent)||0,kvaVal=parseFloat($('d_kva').textContent)||0;
  const hrsPerYear=hrs*days*wks,hrsPerMonth=hrsPerYear/12;
  const monthlyKwh=demKW*hrsPerMonth;
  const energyCost=monthlyKwh*tariff;
  const demCost=kvaVal*demChg;
  const pfPenCost=energyCost*pfpen;
  const subTotal=energyCost+demCost+fixed+pfPenCost;
  const taxCost=subTotal*tax;
  const total=subTotal+taxCost;
  const annual=total*12;
  const f=v=>`${cur}${v.toFixed(2)}`;
  $('u_monthly_bill').textContent=f(total);$('u_annual_label').textContent=`Annual: ${f(annual)}`;
  $('u_energy_cost').textContent=f(energyCost);$('u_dem_cost').textContent=f(demCost);
  $('u_fixed_cost').textContent=f(fixed);$('u_tax_cost').textContent=f(taxCost);
  const catTotals={};let totW=0;
  loads.forEach(l=>{const w=l.qty*l.uw;catTotals[l.cat]=(catTotals[l.cat]||0)+w;totW+=w;});
  const catClass={Lighting:'lighting',HVAC:'hvac','Socket Outlets':'socket',Motors:'motors','IT Loads':'it',Kitchen:'kitchen'};
  $('costBreakdown').innerHTML=Object.entries(catTotals).sort((a,b)=>b[1]-a[1]).map(([cat,w])=>{
    const frac=totW?w/totW:0,catCost=energyCost*frac,catPct=(frac*100).toFixed(1);
    const cls=catClass[cat]||'other';
    return`<div class="cb-card ${cls}"><div class="cc-lbl">${cat}</div><div class="cc-val">${f(catCost)}<span class="cc-pct"> ${catPct}%</span></div><div class="cc-lbl">/month</div></div>`;
  }).join('')||'<div class="al ai">ℹ Add loads first.</div>';
  const tips=[];
  const hvacW=(catTotals['HVAC']||0)/totW*100,litW=(catTotals['Lighting']||0)/totW*100,itW=(catTotals['IT Loads']||0)/totW*100;
  if(hvacW>30)tips.push({icon:'❄',title:'High HVAC Load',tip:`HVAC is ${hvacW.toFixed(0)}% of your bill. Consider upgrading to inverter-type units. Potential saving: up to 40% on HVAC costs.`});
  if(litW>15)tips.push({icon:'💡',title:'Lighting Upgrade Opportunity',tip:`Switch all lighting to LED if not done. Typical saving: 50–70% on lighting energy = ${f(energyCost*(litW/100)*0.6)}/month.`});
  if(gPF()<0.85)tips.push({icon:'🔋',title:'Power Factor Correction',tip:`PF of ${gPF()} means you're paying for reactive power. Install capacitor banks to raise PF to 0.95+. Demand charge could drop significantly.`});
  if(kvaVal>50)tips.push({icon:'⏰',title:'Time-of-Use Shifting',tip:`Shift heavy loads (motors, compressors, water heating) to off-peak hours to reduce peak demand charges.`});
  if(itW>20)tips.push({icon:'🖥',title:'IT Load Management',tip:`Enable power management/auto-sleep on workstations. Virtualisation can reduce IT load by 30–50%.`});
  tips.push({icon:'📊',title:'Energy Monitoring',tip:`Install a smart energy meter and monitoring system. Real-time data typically reduces consumption by 10–15% through awareness alone.`});
  $('savingTips').innerHTML=tips.map(t=>`<div class="saving-tip"><span class="st-icon">${t.icon}</span><strong>${t.title}:</strong> ${t.tip}</div>`).join('');
}

// ── REPORT ──
function safeVal(id,fallback){var el=$( id);return el?parseFloat(el.value)||fallback:fallback;}
function safeStr(id,fallback){var el=$(id);return el?(el.value||fallback):fallback;}
function genReport(){
  const V=gV(),connected=gTW(),demand=gDW(),pf=gPF(),kva=demand/pf/1000;
  const ph=gPL(loads),idx=cImb(ph),ni=cNeutral(ph,V,pf);
  // Safely read Carbon (tab 12) inputs — may not exist in Standard edition
  const emf=safeVal('e_emf',0.431),hrs=safeVal('e_hrs',10),days=safeVal('e_days',5),wks=safeVal('e_wks',50);
  const hrsPerYear=hrs*days*wks,demKW=demand/1000,annual=demKW*hrsPerYear,co2=annual*emf/1000;
  // Safely read Utility Cost (tab 13) inputs — may not exist in Standard edition
  const cur=safeStr('u_cur','$'),tariff=safeVal('u_tariff',0.055),monthlyKwh=demKW*(hrsPerYear/12),mBill=(monthlyKwh*tariff+kva*safeVal('u_dem_chg',3.5)+safeVal('u_fixed',15))*(1+safeVal('u_tax',7.5)/100);
  $('repOut').innerHTML=`
    <div class="sec"><div style="background:var(--cp);color:#fff;padding:12px 16px;border-radius:8px 8px 0 0;margin:-16px -16px 14px;display:flex;justify-content:space-between;align-items:center"><div><div style="font-size:16px;font-weight:700">${$('pn').value||'Electrical Load Calculation Report'}</div><div style="font-size:11px;opacity:.75;margin-top:2px">${$('pl').value} | ${$('pt').value}</div></div><div style="font-size:24px">⚡</div></div>
    <table style="width:100%"><tr><td style="color:var(--cm);width:160px">Client</td><td><strong>${$('pc').value||'—'}</strong></td><td style="color:var(--cm);width:150px">Author</td><td><strong>${$('pe').value||'—'}</strong></td></tr><tr><td style="color:var(--cm)">System</td><td>${gSys()==='3ph'?'Three Phase':'Single Phase'} | ${V}V | ${$('sfreq').value}Hz</td><td style="color:var(--cm)">Earthing</td><td>${$('searth').value}</td></tr><tr><td style="color:var(--cm)">Date</td><td colspan="3">${$('pd').value||new Date().toLocaleDateString()}</td></tr></table></div>
    <div class="sec"><div class="st">📊 Load Summary</div><div class="mgs"><div class="mg"><div class="v">${(connected/1000).toFixed(2)}</div><div class="u">kW</div><div class="l">Connected</div></div><div class="mg"><div class="v">${(demand/1000).toFixed(2)}</div><div class="u">kW</div><div class="l">Demand</div></div><div class="mg"><div class="v">${kva.toFixed(2)}</div><div class="u">kVA</div><div class="l">Apparent Power</div></div><div class="mg"><div class="v">${pf}</div><div class="u">PF</div><div class="l">Power Factor</div></div><div class="mg"><div class="v">${idx.toFixed(1)}</div><div class="u">%</div><div class="l">Phase Imbalance</div></div><div class="mg"><div class="v">${ni.toFixed(1)}</div><div class="u">A</div><div class="l">Neutral Current</div></div></div></div>
    <div class="sec"><div class="st">🌍 Energy & Carbon Footprint</div><div class="mgs"><div class="mg"><div class="v">${(demKW*hrs).toFixed(1)}</div><div class="u">kWh</div><div class="l">Daily</div></div><div class="mg"><div class="v">${(demKW*hrsPerYear/12).toFixed(0)}</div><div class="u">kWh</div><div class="l">Monthly</div></div><div class="mg"><div class="v">${annual.toFixed(0)}</div><div class="u">kWh</div><div class="l">Annual</div></div><div class="mg"><div class="v">${co2.toFixed(2)}</div><div class="u">t CO₂</div><div class="l">Carbon/Year</div></div><div class="mg"><div class="v">${Math.ceil(co2*1000/25)}</div><div class="u">trees</div><div class="l">Offset Needed</div></div><div class="mg"><div class="v">${cur}${mBill.toFixed(0)}</div><div class="u">/month</div><div class="l">Estimated Utility Bill</div></div></div></div>
    <div class="sec"><div class="st">📝 Load Schedule (${loads.length} Items)</div><div style="overflow-x:auto">${loads.length?`<table><thead><tr><th>#</th><th>Description</th><th>Category</th><th>Qty</th><th>Unit W</th><th>Total W</th><th>Phase</th></tr></thead><tbody>${loads.map((l,i)=>`<tr><td>${i+1}</td><td>${l.desc||'—'}</td><td>${l.cat}</td><td>${l.qty}</td><td>${l.uw}</td><td><strong>${(l.qty*l.uw).toFixed(0)}</strong></td><td>${l.phase}</td></tr>`).join('')}<tr style="background:#f1f5f9"><td colspan="5"><strong>TOTAL CONNECTED LOAD</strong></td><td><strong>${connected.toFixed(0)} W</strong></td><td></td></tr></tbody></table>`:'<div class="al aw">No loads entered.</div>'}</div></div>
    <div class="sec"><div class="st">✅ Equipment Recommendations</div><table style="width:100%">
      <tr><td style="color:var(--cm);width:200px">Cable Size</td><td>${document.querySelector('#cabRes .tag.tb')?.textContent||'—'}</td></tr>
      <tr><td style="color:var(--cm)">Circuit Breaker</td><td>${document.querySelector('#brkRes .tag.tg')?.textContent||'—'}</td></tr>
      <tr><td style="color:var(--cm)">Voltage Drop</td><td>${document.querySelector('#vdRes .tag')?.textContent||'—'}</td></tr>
      <tr><td style="color:var(--cm)">Generator</td><td>${document.querySelector('#genRes .big')?.textContent||'—'}</td></tr>
      <tr><td style="color:var(--cm)">Transformer</td><td>${document.querySelector('#txRes .big')?.textContent||'—'}</td></tr>
      <tr><td style="color:var(--cm)">Phase Balance Score</td><td><span class="tag ${idx<5?'tg':idx<15?'ta':'tr'}">${Math.max(0,100-idx).toFixed(0)}% — ${idx<5?'Excellent':idx<15?'Acceptable':'Rebalancing Needed'}</span></td></tr>
      <tr><td style="color:var(--cm)">Est. Monthly Bill</td><td><strong>${cur}${mBill.toFixed(2)}</strong> (${cur}${(mBill*12).toFixed(2)}/year)</td></tr>
      <tr><td style="color:var(--cm)">Annual CO₂ Emissions</td><td>${co2.toFixed(2)} tonnes CO₂ (${emf} kg/kWh grid factor)</td></tr>
    </table></div>
    <div class="al ai" style="margin-top:10px;font-size:11px">🖨 Click Print / PDF to save. For official use, have this report stamped by a registered engineer. All figures are engineering estimates — verify against site conditions.</div>`;
}

// ── INIT ──
document.getElementById('pd').value=new Date().toISOString().split('T')[0];
LP('office',null);cD();uCC();
