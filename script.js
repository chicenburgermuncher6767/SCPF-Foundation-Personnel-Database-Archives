/*
==============================================================
FOUNDATION ARCHIVE V3
Only edit the CONFIG section.
==============================================================
*/

const CONFIG = {

  /* Fictional website clearance code. This is NOT real security. */
  clearanceCode: "JUPITER",

  /*
  OFFICIAL SCP DIRECTORY LINKS

  The SCP Wiki has official indexes for these categories.
  Friendly / Neutral / Hostile are YOUR archive classifications;
  the SCP Wiki does not impose one universal three-way alignment
  system across all Groups of Interest.
  */

  categories: {

    mtf: {
      number: "01",
      name: "MTF / SECURITY",
      shortName: "MTF / SECURITY",
      description: "Mobile Task Forces, security units, and related Foundation operational forces.",
      official: "https://scp-wiki.wikidot.com/task-forces/noredirect/true",
      officialText: "SCP Wiki — Mobile Task Forces. The Wiki notes that this page contains notable MTFs and provides a route to its comprehensive list.",
      records: [
        {name:"Alpha-1 — Red Right Hand", type:"MTF", url:"https://scp-wiki.wikidot.com/task-forces/noredirect/true"},
        {name:"Beta-1 — Cauterizers", type:"MTF", url:"https://scp-wiki.wikidot.com/task-forces/noredirect/true"},
        {name:"Beta-10 — Time Hoppers", type:"MTF", url:"https://scp-wiki.wikidot.com/task-forces/noredirect/true"},
        {name:"Beta-43 — Con-Trollers", type:"MTF", url:"https://scp-wiki.wikidot.com/task-forces/noredirect/true"},
        {name:"Gamma-1 — Search and Destroy", type:"MTF", url:"https://scp-wiki.wikidot.com/task-forces/noredirect/true"},
        {name:"Gamma-44 — Meat Lockers", type:"MTF", url:"https://scp-wiki.wikidot.com/task-forces/noredirect/true"},
        {name:"Delta-20 — Blaze It", type:"MTF", url:"https://scp-wiki.wikidot.com/task-forces/noredirect/true"},
        {name:"Lambda-9 — Mind over Matter", type:"MTF", url:"https://scp-wiki.wikidot.com/task-forces/noredirect/true"},
        {name:"Psi-10 — Maslow's Motivators", type:"MTF", url:"https://scp-wiki.wikidot.com/task-forces/noredirect/true"},
        {name:"Psi-18 — Tenure Trackers", type:"MTF", url:"https://scp-wiki.wikidot.com/task-forces/noredirect/true"},
        {name:"Tau-22 — Forest Fires", type:"MTF", url:"https://scp-wiki.wikidot.com/task-forces/noredirect/true"},
        {name:"Security Division", type:"FOUNDATION", url:"https://scp-wiki.wikidot.com/departments"}
      ],
      officialOnly: true
    },

    department: {
      number:"02",
      name:"DEPARTMENT",
      shortName:"DEPARTMENT",
      description:"Foundation departments, divisions, and specialist administrative or scientific organisations.",
      official:"https://scp-wiki.wikidot.com/departments",
      officialText:"SCP Wiki — Foundation Departments. The page explicitly notes that the listed departments are not the only departments and links to a more comprehensive list.",
      records:[
        {name:"O5 Council",type:"ADMINISTRATION",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Ethics Committee",type:"ADMINISTRATION",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"RAISA",type:"ADMINISTRATION",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Antimemetics Division",type:"DIVISION",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Archival Division",type:"DIVISION",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Artificial Intelligence Applications Division",type:"DIVISION",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Department of Anomalous Weapons Development",type:"DEPARTMENT",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Department of Continuity",type:"DEPARTMENT",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Department of Entomology",type:"DEPARTMENT",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Department of Mathematics",type:"DEPARTMENT",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Department of Miscommunications",type:"DEPARTMENT",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Department of Mythology and Folkloristics",type:"DEPARTMENT",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Pataphysics Department",type:"DEPARTMENT",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Department of Tactical Theology",type:"DEPARTMENT",url:"https://scp-wiki.wikidot.com/departments"},
        {name:"Temporal Anomalies Department",type:"DEPARTMENT",url:"https://scp-wiki.wikidot.com/departments"}
      ]
    },

    friendly: {
      number:"03",
      name:"FRIENDLY GROUP OF INTEREST",
      shortName:"FRIENDLY GOI",
      description:"Groups of Interest classified by this archive as generally cooperative or allied with the Foundation.",
      official:"https://scp-wiki.wikidot.com/groups-of-interest",
      officialText:"SCP Wiki — Groups of Interest. Alignment is an archive classification here; individual SCP Wiki portrayals can vary.",
      records:[
        {name:"Wilson's Wildlife Solutions",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"The Wandsmen",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Global Occult Coalition",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Three Moons Initiative",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Serpent's Hand",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"}
      ]
    },

    neutral: {
      number:"04",
      name:"NEUTRAL GROUP OF INTEREST",
      shortName:"NEUTRAL GOI",
      description:"Groups of Interest whose relationship with the Foundation is treated as neutral or variable within this archive.",
      official:"https://scp-wiki.wikidot.com/groups-of-interest",
      officialText:"SCP Wiki — Groups of Interest. The Wiki notes that portrayals and relationships may vary between works.",
      records:[
        {name:"Alexylva University",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Ambrose Restaurants",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Anderson Robotics",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Are We Cool Yet?",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Parawatch",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Prometheus Labs, Inc.",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Vikander-Kneed Technical Media",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"The Chicago Spirit",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"}
      ]
    },

    hostile: {
      number:"05",
      name:"HOSTILE GOI / CLASS-D",
      shortName:"HOSTILE GOI / CLASS-D",
      description:"Groups treated as hostile within this archive, plus the Foundation's expendable personnel classification.",
      official:"https://scp-wiki.wikidot.com/groups-of-interest",
      officialText:"SCP Wiki — Groups of Interest. Hostility is a database classification here and is not a universal SCP Wiki alignment system.",
      records:[
        {name:"Chaos Insurgency",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Marshall, Carter & Dark Ltd.",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Children of the Scarlet King",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Sarkic Cults",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Horizon Initiative",type:"GOI",url:"https://scp-wiki.wikidot.com/groups-of-interest"},
        {name:"Class-D Personnel",type:"FOUNDATION",url:"https://scp-wiki.wikidot.com/security-clearance-levels"}
      ]
    }
  },

  /*
  ============================================================
  YOUR OC SECTION
  ============================================================

  Add your own OCs underneath the category where they belong.

  Example:

  {
    name: "YOUR OC",
    type: "PERSONNEL",
    description: "Your description.",
    url: "https://docs.google.com/document/d/YOUR-ID/edit"
  }

  These appear BELOW the official directory records.
  */

  myOCs: {
    mtf: [],
    department: [],
    friendly: [],
    neutral: [],
    hostile: []
  }
};


/* ================= AUDIO ================= */

let audioContext=null;
function getAudio(){
  const C=window.AudioContext||window.webkitAudioContext;
  if(!C)return null;
  if(!audioContext)audioContext=new C();
  if(audioContext.state==="suspended")audioContext.resume();
  return audioContext;
}
function tone(freq=700,duration=.05,volume=.02,type="square"){
  const c=getAudio();if(!c)return;
  const o=c.createOscillator(),g=c.createGain();
  o.type=type;o.frequency.value=freq;
  g.gain.setValueAtTime(volume,c.currentTime);
  g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+duration);
  o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+duration);
}
function hoverSound(){tone(930,.035,.012)}
function clickSound(){tone(1050,.04,.016);setTimeout(()=>tone(1400,.05,.01),50)}
function denySound(){
  tone(160,.1,.03);setTimeout(()=>tone(105,.14,.02),110);
}
function memeticKillAgentWarning(){
  const c=getAudio(); if(!c)return;
  const now=c.currentTime;
  const master=c.createGain();
  master.gain.setValueAtTime(.0001,now);
  master.gain.exponentialRampToValueAtTime(.055,now+.035);
  master.gain.exponentialRampToValueAtTime(.0001,now+2.4);
  master.connect(c.destination);

  // Entirely synthetic fictional warning: distorted alarm + digital/static bursts.
  const osc=c.createOscillator(), gain=c.createGain();
  osc.type="sawtooth";
  osc.frequency.setValueAtTime(92,now);
  osc.frequency.exponentialRampToValueAtTime(41,now+2.1);
  osc.connect(gain); gain.connect(master); gain.gain.value=.45;
  osc.start(now); osc.stop(now+2.2);

  const buffer=c.createBuffer(1,c.sampleRate*1.8,c.sampleRate);
  const data=buffer.getChannelData(0);
  for(let i=0;i<data.length;i++) data[i]=(Math.random()*2-1)*.7;
  const noise=c.createBufferSource(), ng=c.createGain(), filter=c.createBiquadFilter();
  noise.buffer=buffer; filter.type="bandpass"; filter.frequency.value=1800; filter.Q.value=.7;
  ng.gain.setValueAtTime(.0001,now); ng.gain.exponentialRampToValueAtTime(.3,now+.08); ng.gain.exponentialRampToValueAtTime(.0001,now+1.7);
  noise.connect(filter); filter.connect(ng); ng.connect(master); noise.start(now); noise.stop(now+1.75);

  [0,.38,.79,1.22,1.65].forEach((offset,i)=>{
    setTimeout(()=>tone(i%2?760:420,.075,.025,"square"),offset*1000);
  });
}
function accessSound(){tone(550,.05,.02);setTimeout(()=>tone(850,.06,.02),70);setTimeout(()=>tone(1200,.1,.015),150)}
function memeticAudio(){
  const c=getAudio();if(!c)return;
  const master=c.createGain();master.gain.value=.02;master.connect(c.destination);
  [130,260,390,780].forEach((f,i)=>{
    const o=c.createOscillator(),g=c.createGain();
    o.type=i%2?"square":"sawtooth";o.frequency.setValueAtTime(f,c.currentTime);
    o.frequency.exponentialRampToValueAtTime(f/3,c.currentTime+1.7);
    g.gain.setValueAtTime(.0001,c.currentTime);
    g.gain.exponentialRampToValueAtTime(.13,c.currentTime+.07);
    g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+1.7);
    o.connect(g);g.connect(master);o.start();o.stop(c.currentTime+1.8);
  });
}


/* ================= PAGE 1 ================= */

let countdown=10, warningComplete=false;

function startWarning(){
  const n=document.getElementById("countdown"),s=document.getElementById("countdown-status");
  const timer=setInterval(()=>{
    countdown--;n.textContent=countdown;
    if(countdown>0){s.textContent="COUNTERMEASURE IN "+countdown+" SECONDS";tone(450+countdown*25,.04,.01)}
    if(countdown<=0){
      clearInterval(timer);warningComplete=true;n.textContent="—";
      s.textContent="COUNTERMEASURE COMPLETE // CLEARANCE REQUIRED";
      document.getElementById("counter-status").textContent="READY";memeticAudio();
    }
  },1000);
}

document.getElementById("verify").onclick=()=>{
  getAudio();
  if(!warningComplete){
    document.getElementById("clearance-message").textContent="ACCESS LOCKED // WAIT FOR COUNTERMEASURE COMPLETION.";
    denySound();return;
  }
  if(document.getElementById("clearance").value===CONFIG.clearanceCode){
    accessSound();showPage("page-selector");setupSelector();
  }else{
    const entered=document.getElementById("clearance").value.trim();
    document.getElementById("clearance-message").textContent = entered
      ? "ACCESS DENIED // INVALID AUTHORISATION CODE. COUNTERMEASURE ACTIVE."
      : "NO AUTHORISATION DETECTED // MEMETIC KILL AGENT SIMULATION INITIATED.";
    denySound();
    memeticKillAgentWarning();
  }
};
document.getElementById("clearance").onkeydown=e=>{if(e.key==="Enter")document.getElementById("verify").click()};


/* ================= PAGE 2 ================= */

function setupSelector(){
  document.getElementById("selector-session").textContent=sessionID();
  const grid=document.getElementById("category-grid");grid.innerHTML="";
  Object.entries(CONFIG.categories).forEach(([key,c])=>{
    const a=document.createElement("a");a.className="category-card";a.href="#";
    a.innerHTML=`<div class="category-number">CATEGORY ${c.number}</div>
      <div class="category-name">${safe(c.name)}</div>
      <div class="category-description">${safe(c.description)}</div>
      <div class="category-arrow">SELECT →</div>`;
    a.onclick=e=>{e.preventDefault();clickSound();openCategory(key)};
    a.onmouseenter=hoverSound;grid.appendChild(a);
  });
}

function openCategory(key){
  currentCategory=key;showPage("page-database");renderCategory(key);
}


/* ================= PAGE 3 ================= */

let currentCategory="mtf";

function renderCategory(key){
  const c=CONFIG.categories[key];
  document.getElementById("category-title").textContent=c.name;
  document.getElementById("category-code").textContent=`CATEGORY ${c.number} // ${c.shortName}`;
  document.getElementById("category-description").textContent=c.description;
  document.getElementById("breadcrumb-category").textContent=c.shortName;
  document.getElementById("official-directory").href=c.official;
  document.getElementById("official-note-text").textContent=c.officialText;
  document.getElementById("session-id").textContent=sessionID();

  const all=c.records||[];
  document.getElementById("group-count").textContent=String(all.length).padStart(2,"0");
  renderRecords(all);
  renderOCs(CONFIG.myOCs[key]||[]);
}

function renderRecords(records){
  const side=document.getElementById("sidebar-list"),cards=document.getElementById("group-cards");
  side.innerHTML="";cards.innerHTML="";
  document.getElementById("result-count").textContent=String(records.length).padStart(2,"0")+" RESULTS";

  records.forEach(r=>{
    const s=document.createElement("a");s.className="sidebar-link";s.href=r.url;s.target="_blank";s.rel="noopener";s.textContent=r.name;
    s.onmouseenter=hoverSound;s.onclick=clickSound;side.appendChild(s);

    const card=document.createElement("a");card.className="group-card";card.href=r.url;card.target="_blank";card.rel="noopener";
    card.innerHTML=`<div class="group-type">${safe(r.type||"RECORD")}</div>
      <div class="group-name">${safe(r.name)}</div>
      <div class="group-description">${safe(r.description||"Official SCP Wiki directory record.")}</div>
      <div class="open-mark">OPEN ↗</div>`;
    card.onmouseenter=hoverSound;card.onclick=clickSound;cards.appendChild(card);
  });
}

function renderOCs(records){
  const box=document.getElementById("oc-cards");box.innerHTML="";
  if(!records.length){
    box.innerHTML=`<div class="oc-intro">NO LOCAL RECORDS ASSIGNED TO THIS CATEGORY. Add your own OC entries to <b>CONFIG.myOCs</b> in script.js.</div>`;
    return;
  }
  records.forEach(r=>{
    const card=document.createElement("a");card.className="group-card";card.href=r.url;card.target="_blank";card.rel="noopener";
    card.innerHTML=`<div class="group-type">${safe(r.type||"PERSONNEL")}</div>
      <div class="group-name">${safe(r.name)}</div>
      <div class="group-description">${safe(r.description||"Local Foundation archive record.")}</div>
      <div class="open-mark">OPEN ↗</div>`;
    card.onmouseenter=hoverSound;card.onclick=clickSound;box.appendChild(card);
  });
}


/* ================= SEARCH ================= */

document.getElementById("search").oninput=e=>{
  const q=e.target.value.toLowerCase().trim();
  const all=CONFIG.categories[currentCategory].records||[];
  renderRecords(all.filter(r=>`${r.name} ${r.type} ${r.description||""}`.toLowerCase().includes(q)));
};


/* ================= NAVIGATION ================= */

document.getElementById("back-to-selector").onclick=()=>{
  clickSound();showPage("page-selector");setupSelector();
};

function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function sessionID(){
  const chars="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let x="";
  for(let i=0;i<6;i++)x+=chars[Math.floor(Math.random()*chars.length)];
  return x;
}
function safe(v){
  return String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}


/* ================= CLOCK ================= */

function updateClock(){
  const now=new Date();
  const value=now.toLocaleString("en-AU",{hour12:false,dateStyle:"short",timeStyle:"medium"});
  document.getElementById("clock").textContent=value;
  document.getElementById("warning-clock").textContent=now.toLocaleTimeString("en-AU",{hour12:false});
}
setInterval(updateClock,1000);updateClock();

/* Start */
startWarning();
