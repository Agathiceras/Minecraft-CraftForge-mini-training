/* =========================================================
   EM course trainings — shared engine
   Every course loads its texts first (assets/content-xx.js → window.COURSE),
   then this file. The engine draws the home page, the modules (built from
   content blocks), the module checks and the final page.
   ========================================================= */
'use strict';
const C = window.COURSE, UI = C.ui;
const tx = (k, o) => String(UI[k]).replace(/\{(\w+)\}/g, (s, x) => o && x in o ? o[x] : s);
document.documentElement.lang = C.lang;
// Arabic and other right-to-left languages: COURSE.dir = 'rtl' in the language file
if (C.dir === 'rtl') document.documentElement.dir = 'rtl';
document.title = `${C.title} · ${UI.pageTitle}`;
document.documentElement.style.setProperty('--course', C.color);

const PASS = 0.7;                        // 70% to pass each check
const DEV_CODE = 'EMDEV';
const PKEY = 'kl-em-course-' + C.id;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const norm = s => String(s || '').trim().toUpperCase().replace(/\s+/g, '');

/* ---------- Safe storage ----------
   Inside the LMS iframe the browser treats this site's storage as third-party:
   Safari and strict privacy settings can block or wipe it. Every value is kept
   in memory + localStorage + sessionStorage and reads never throw, so the
   training keeps its progress for the whole visit even when storage is blocked. */
const STORE = (function(){
  const mem = {};
  function areas(){ const a = []; try { a.push(window.localStorage); } catch(e){} try { a.push(window.sessionStorage); } catch(e){} return a; }
  return {
    get(k){ for (const st of areas()){ try { const v = st.getItem(k); if (v !== null) return v; } catch(e){} } return Object.prototype.hasOwnProperty.call(mem, k) ? mem[k] : null; },
    getAll(k){ const out = []; for (const st of areas()){ try { const v = st.getItem(k); if (v !== null) out.push(v); } catch(e){} } if (Object.prototype.hasOwnProperty.call(mem, k)) out.push(mem[k]); return out; },
    set(k, v){ v = String(v); mem[k] = v; for (const st of areas()){ try { st.setItem(k, v); } catch(e){} } },
    remove(k){ delete mem[k]; for (const st of areas()){ try { st.removeItem(k); } catch(e){} } }
  };
})();
/* ---------- Progress (memory + localStorage + sessionStorage) ---------- */
// Progress only moves forward: a module passed anywhere stays passed, best score wins, flags stay on.
function mergeP(a, b){
  a = a || {}; b = b || {};
  const out = Object.assign({}, b, a);
  Object.keys(b).forEach(k => {
    const x = a[k], y = b[k];
    if (k === 'flags' && y && typeof y === 'object'){
      out.flags = Object.assign({}, x || {}); Object.keys(y).forEach(f => { if (y[f] && !out.flags[f]) out.flags[f] = y[f]; });
    } else if (y && typeof y === 'object' && ('passed' in y || 'score' in y)){
      const xo = (x && typeof x === 'object') ? x : {};
      out[k] = Object.assign({}, y, xo, { passed: !!(xo.passed || y.passed), score: Math.max(Number(xo.score) || 0, Number(y.score) || 0) });
    }
  });
  return out;
}
let P = {};
function loadP(){ P = {}; STORE.getAll(PKEY).forEach(raw => { try { P = mergeP(P, JSON.parse(raw || '{}') || {}); } catch(e){} }); }
function saveP(){ STORE.set(PKEY, JSON.stringify(P)); lmsSync(); }
const passed = id => !!(P[id] && P[id].passed);
function setResult(id, pct, ok){ const o = P[id] || {}; P[id] = Object.assign(o, { passed: ok || !!o.passed, score: Math.max(pct, o.score || 0) }); saveP(); }
const flag = k => !!(P.flags && P.flags[k]);
function setFlag(k, v){ P.flags = P.flags || {}; P.flags[k] = v; saveP(); }

const MODS = C.modules, TOTAL = MODS.length;
const findMod = id => MODS.find(m => m.id === id);
const unlocked = m => { const i = MODS.indexOf(m); return i <= 0 || passed(MODS[i - 1].id); };
const allDone = () => MODS.every(m => passed(m.id));

/* ---------- LMS bridge ----------
   Talks to the LMS (parent frame) via postMessage. Outside an iframe it does nothing.
   Training -> LMS: {source:'kodland-training', training, lang, event:'ready'|'progress'|'completed', progress, done, total, score}
   The LMS unlocks the test (DST) when it receives 'completed' ("Material first, then the test" on).
   LMS -> Training (optional): {source:'kodland-lms', event:'progress', progress:{...}} restores saved progress. */
const TRAINING_ID = 'em-course-' + C.id;
const IN_LMS = (function(){ try { return window.parent !== window; } catch(e){ return true; } })();
let lmsReady = false, completedSent = false;
function lmsSummary(){
  const list = MODS, done = list.filter(m => P[m.id] && P[m.id].passed).length;
  const score = Math.round(list.map(m => (P[m.id] && Number(P[m.id].score)) || 0).reduce((a, b) => a + b, 0) / (list.length || 1));
  return { progress:P, done, total:list.length, score };
}
function lmsSend(event){
  try { if (!IN_LMS || !lmsReady || P.dev) return;
    window.parent.postMessage(Object.assign({ source:'kodland-training', training:TRAINING_ID, lang:C.lang, event }, lmsSummary()), '*'); } catch(e){}
}
// 'completed' is sent once per page load, as soon as every module is passed (also on load, if it was already done).
function lmsSync(){ if (!lmsReady) return; lmsSend('progress'); if (!completedSent && !P.dev && allDone()){ completedSent = true; lmsSend('completed'); } }
addEventListener('message', e => {
  try { if (!IN_LMS || e.source !== window.parent) return;
    const d = e.data; if (!d || d.source !== 'kodland-lms' || d.event !== 'progress' || !d.progress || typeof d.progress !== 'object') return;
    P = mergeP(P, d.progress); STORE.set(PKEY, JSON.stringify(P)); lmsSync(); } catch(err){}
});
// Progress carried in the URL (?p=...) by a language switch: merge it, then clean the URL.
function takeUrlProgress(){
  try { const q = new URLSearchParams(location.search), raw = q.get('p'); if (!raw) return;
    try { P = mergeP(P, JSON.parse(raw)); STORE.set(PKEY, JSON.stringify(P)); } catch(e){}
    q.delete('p'); history.replaceState(null, '', location.pathname + (q.toString() ? '?' + q.toString() : '') + location.hash); } catch(e){}
}
function progressParam(){ return 'p=' + encodeURIComponent(JSON.stringify(P)) + (DEV_ALLOWED ? '&dev=1' : ''); }

/* ---------- Developer mode: reviewers only ----------
   Shift+D and the "Developer" link work only when the page is opened with ?dev=1
   (same rule as the Attendance training). Turning developer mode off restores the
   real progress saved before it was turned on, so it can never be used to skip modules. */
const DEV_ALLOWED = /[?&]dev=1(&|$)/.test(location.search);
const DEV_BACKUP = PKEY + '-devbackup';
function restoreRealProgress(){
  const b = STORE.get(DEV_BACKUP); let real = {};
  try { real = b ? (JSON.parse(b) || {}) : {}; } catch(e){ real = {}; }
  delete real.dev; P = real; STORE.remove(DEV_BACKUP);
}

/* =========================================================
   CONTENT BLOCKS — each block of a section has a type (t)
   ========================================================= */
const callout = (kind, e, html) => `<div class="callout ${kind}"><span class="ci">${e}</span><div>${html}</div></div>`;
const list = items => `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
const thumbFallback = (e, color) => `this.outerHTML='<div class=&quot;thf&quot; style=&quot;background:${color}&quot;>${e}</div>'`;

const BLOCK = {
  p: b => `<p class="p">${b.html}</p>`,
  h: b => `<h3 class="subh">${b.html}</h3>`,
  callout: b => callout(b.kind || 'tip', b.e || '💡', b.html),
  defn: b => `<div class="defn"><span class="de">${b.e}</span><p>${b.html}</p></div>`,
  meta: b => `<div class="metabar">${b.items.map(x => `<div><span>${x[0]}</span><div><small>${x[1]}</small><b>${x[2]}</b></div></div>`).join('')}</div>`,
  ba: b => `<div class="ba"><div class="bef"><h4>${b.before[0]}</h4><p>${b.before[1]}</p></div><div class="arr">➜</div><div class="aft"><h4>${b.after[0]}</h4><p>${b.after[1]}</p></div></div>`,
  trio: b => `<div class="trio">${b.items.map(x => `<div class="ti"><span class="tie">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join('')}</div>`,
  cards: b => `<div class="grid${b.cols || 2}">${b.items.map(x => `<div class="card" style="padding:16px"><div class="wh" style="margin-bottom:6px"><span style="font-size:26px">${x[0]}</span><b>${x[1]}</b></div><div class="p" style="margin:0;font-size:14.5px">${x[2]}</div></div>`).join('')}</div>`,
  okbad: b => `<div class="okbad"><div class="ok"><h3>${b.ok[0]}</h3>${list(b.ok[1])}</div><div class="bad"><h3>${b.bad[0]}</h3>${list(b.bad[1])}</div></div>`,
  steps: b => `<div class="cstep">${b.items.map((x, i) => `<div><span class="csn">${i + 1}</span><div><b>${x[0]}</b><p>${x[1]}</p></div></div>`).join('')}</div>`,
  acc: b => `<div class="qalist" data-acc>${b.items.map((a, k) => `<div class="qa ${k === 0 && b.open !== false ? 'open' : ''}"><button class="qa-q"><span class="qi">${a[0]}</span><span>${a[1]}</span><span class="qx">+</span></button><div class="qa-a">${a[2]}</div></div>`).join('')}</div>`,
  myths: b => `<div class="myths">${b.items.map(x => `<button class="myth" data-myth><span class="mtag">${b.tag || UI.mythTag}</span><span class="mq">${x[0]}</span><span class="ma">${x[1]}</span><span class="mh">${UI.mythTap}</span></button>`).join('')}</div>`,
  sorter: b => `<div class="sorter">${b.items.map(r => `<div class="srow" data-ans="${r[2]}"><span class="sei">${r[0]}</span><span class="stx">${r[1]}</span><span class="sbtns"><button data-pick="yes">${b.yes}</button><button data-pick="no">${b.no}</button></span><span class="sfb">${r[3]}</span></div>`).join('')}</div>`,
  check: b => `<div class="card"><div class="wh"><b>${b.title}</b><span class="tag">${UI.checkTag}</span></div>${b.groups.map((g, gi) => `<div class="ckgroup">${g.h}</div><div class="cklist">${g.items.map((t, i) => `<button class="ck" data-ck="${gi}-${i}"><span class="ckb"></span><span>${t}</span></button>`).join('')}</div>`).join('')}</div>`,
  figure: b => `<figure class="cfig"><img src="${b.src}" alt="" loading="lazy"><figcaption>${b.caption}</figcaption></figure>`,
  link: b => `<a class="linkcard" href="${b.href}" target="_blank" rel="noopener"><span>${b.e}</span><div><b>${b.title}</b><small>${b.small}</small></div><span class="go">${UI.linkOpen}</span></a>`,
  // Lessons of the module: tabs + accordion (filled by initWidgets)
  lessons: b => `<div class="ltabs" data-lessons="${b.key}">${b.items.map((l, i) => `<button data-lt="${i}">${l.e} ${l.tab}</button>`).join('')}</div><div class="lpanel" data-lpanel="${b.key}"></div>`,
  // Real student projects published on Kodland Sparks
  projects: b => `<div class="projs">${b.items.map(x => `<a class="pjc" href="${x.href}" target="_blank" rel="noopener">
      <div class="th">${x.img ? `<img src="${x.img}" alt="" loading="lazy" onerror="${thumbFallback(x.e || '🎮', x.color || '#8B5CF6')}">` : `<div class="thf" style="background:${x.color || '#8B5CF6'}">${x.e || '🎮'}</div>`}<span class="tag">${x.tag}</span>${x.fw ? `<span class="fw">Feedback wanted</span>` : ''}</div>
      <div class="bd"><span class="t">${x.title}</span><span class="by"><i style="background:${x.color || '#8B5CF6'}">${x.by[0].toUpperCase()}</i>${x.by}</span><span class="ds">${x.desc}</span><span class="op">${UI.projPlay}</span></div></a>`).join('')}</div>`,
  // A simulation that opens inside the page and reports when it is finished (postMessage)
  sim: b => `<div class="launch simbox" data-sim="${b.flag}"><span class="le">${b.e}</span><div>
      <span class="simbadge">${b.badge}</span><h3>${b.title}</h3><p>${b.text}</p>
      <div class="simstate">${flag(b.flag) ? UI.simDone : UI.simTodo}</div>
      <div class="btn-row" style="margin-top:12px"><button class="btn-y" data-simopen="${b.flag}">${UI.simOpen}</button><a class="btn-g" href="${simSrc(b)}" target="_blank" rel="noopener">${UI.simNewTab}</a></div></div></div>
    <div class="simframe" data-simframe="${b.flag}"></div>`
};
const simSrc = b => b.src + (b.src.includes('?') ? '&' : '?') + 'lang=' + C.lang;
const SIMS = {};
MODS.forEach(m => m.sections.forEach(s => s.blocks.forEach(b => { if (b.t === 'sim') SIMS[b.flag] = b; })));
const blocksHTML = blocks => blocks.map(b => (BLOCK[b.t] || (() => ''))(b)).join('');

/* =========================================================
   RENDERING
   ========================================================= */
const view = $('#view');
function renderNav(kind){
  const done = MODS.filter(m => passed(m.id)).length;
  // Language switch, for trainings published in more than one language (window.COURSE_LANGS in index.html)
  const langs = window.COURSE_LANGS || [];
  const langSw = langs.length > 1 ? `<span class="langsw">${langs.map(l => `<a href="?lang=${l[0]}${location.hash}" data-lang="${l[0]}" class="${l[0] === C.lang ? 'on' : ''}">${l[1]}</a>`).join('')}</span>` : '';
  $('#nav').innerHTML = `<span class="logo">kodland<small>${UI.logoSub}</small></span><span class="sp"></span>${langSw}
    ${kind === 'home' ? `<span class="npill">${C.title} · ${done}/${TOTAL}</span>` : ''}
    ${kind === 'module' || kind === 'done' ? `<button class="nbtn" data-go="">${UI.navHome}</button>` : ''}
    ${kind === 'quiz' ? `<button class="nbtn" data-exit>${UI.navBackModule}</button>` : ''}`;
}

function renderHome(){
  renderNav('home');
  const done = MODS.filter(m => passed(m.id)).length;
  view.innerHTML = `
  <div class="hero">
    <span class="kicker">${C.home.kicker}</span>
    <h1>${C.home.title}</h1>
    <p class="lead">${C.home.lead}</p>
  </div>
  <div class="notes">${C.notes.map(n => callout(n.kind, n.e, n.html)).join('')}</div>
  <div class="facts" style="margin-top:22px">${C.home.facts.map(f => `<div class="fact"><span class="fn">${f[0]}</span><span>${f[1]}</span></div>`).join('')}</div>
  <div class="prog"><b>${done}/${TOTAL}</b><div class="ptrack"><div class="pfill" style="width:${done / TOTAL * 100}%"></div></div><span style="color:var(--muted);font-size:14px;font-weight:700">${done === TOTAL ? UI.progAllDone : UI.progLabel}</span></div>
  <div class="mods">
    ${MODS.map(m => {
      const lock = !unlocked(m), ok = passed(m.id);
      const badge = ok ? tx('badgeDone', { score:P[m.id].score }) : lock ? tx('badgeLocked', { n:m.n - 1 }) : UI.badgeStart;
      return `<button class="mcard ${lock ? 'locked' : ''} ${ok ? 'done' : ''}" ${lock ? 'data-locked' : `data-go="${m.id}"`} style="border-top:8px solid ${m.color}">
        <span class="mn">${tx('moduleN', { n:m.n })}</span><span class="me">${m.e}</span><h3>${m.title}</h3><p>${m.desc}</p><span class="badge">${badge}</span></button>`;
    }).join('')}
  </div>
  ${done === TOTAL ? `<div class="mcta"><span class="e">🏆</span><div class="grow"><h3>${UI.homeDoneTitle}</h3><p>${UI.homeDoneText}</p></div><button class="btn-y" data-go="done">${UI.homeDoneBtn}</button></div>` : ''}`;
}

const simsMissing = m => (m.needs || []).filter(f => !flag(f));
function ctaHTML(m){
  const miss = simsMissing(m), ready = !miss.length;
  return `<span class="e">${passed(m.id) ? '🏅' : '📝'}</span>
    <div class="grow"><h3>${UI.ctaTitle}</h3><p>${tx('ctaText', { n:(C.quiz[m.id] || []).length })}</p>${ready ? '' : `<div class="lockmsg">${UI.lockSim}</div>`}</div>
    <button class="btn-y" id="startCheck" ${ready ? '' : 'disabled'}>${passed(m.id) ? UI.retake : UI.startCheck}</button>`;
}
const refreshCTA = m => { const c = $('#mcta'); if (c) c.innerHTML = ctaHTML(m); };

function renderModule(m){
  renderNav('module');
  view.innerHTML = `
  <div class="mhead"><span class="eyebrow">${tx('eyebrow', { n:m.n, total:TOTAL, course:C.title })}</span><h1>${m.e} ${m.title}</h1><div class="mobj">${m.obj}</div>
    <div class="offer">${m.offer.map(o => `<div><span>${o[0]}</span>${o[1]}</div>`).join('')}</div></div>
  <div class="chips">${m.sections.map(s => `<button class="chip" data-jump="${s.id}">${s.e} ${s.title}</button>`).join('')}</div>
  ${m.sections.map(s => `<section class="sec" id="sec-${s.id}"><div class="sh"><span class="se">${s.e}</span><h2>${s.title}</h2></div>${blocksHTML(s.blocks)}</section>`).join('')}
  <div class="mcta" id="mcta">${ctaHTML(m)}</div>`;
  initWidgets(m);
}

/* =========================================================
   WIDGETS
   ========================================================= */
function initWidgets(m){
  $$('[data-myth]').forEach(b => b.onclick = () => { b.classList.add('on'); b.querySelector('.mtag').textContent = UI.mythReality; });
  $$('[data-ck]').forEach(b => b.onclick = () => b.classList.toggle('on'));
  $$('[data-acc] .qa').forEach(q => $('.qa-q', q).onclick = () => q.classList.toggle('open'));
  $$('.sorter .srow').forEach(r => $$('[data-pick]', r).forEach(b => b.onclick = () => {
    const ok = b.dataset.pick === r.dataset.ans, fb = r.querySelector('.sfb');
    const base = fb.dataset.base || (fb.dataset.base = fb.innerHTML);
    r.classList.remove('ok', 'ko'); void r.offsetWidth; r.classList.add(ok ? 'ok' : 'ko');
    fb.innerHTML = (ok ? '✓ ' : UI.sortWrong + ' ') + base;
  }));
  // Lessons: tabs + accordion
  $$('[data-lessons]').forEach(tabs => {
    const key = tabs.dataset.lessons, panel = $(`[data-lpanel="${key}"]`), seen = new Set();
    let b = null; m.sections.forEach(s => s.blocks.forEach(x => { if (x.t === 'lessons' && x.key === key) b = x; }));
    const draw = i => { seen.add(i); const l = b.items[i];
      $$('button', tabs).forEach((x, k) => { x.classList.toggle('on', k === i); x.classList.toggle('seen', seen.has(k)); });
      panel.innerHTML = `<div class="lhd"><span>${l.e}</span><div><h3>${l.h}</h3><p>${l.p}</p></div></div>${BLOCK.acc({ items:l.acc })}`;
      $$('[data-acc] .qa', panel).forEach(q => $('.qa-q', q).onclick = () => q.classList.toggle('open')); };
    $$('button', tabs).forEach(x => x.onclick = () => draw(+x.dataset.lt));
    draw(0);
  });
  // Simulations opened inside the page
  $$('[data-simopen]').forEach(btn => btn.onclick = () => {
    const f = btn.dataset.simopen, box = $(`[data-simframe="${f}"]`);
    if (box.innerHTML){ box.innerHTML = ''; btn.textContent = UI.simOpen; return; }
    box.innerHTML = `<iframe src="${simSrc(SIMS[f])}" title="${SIMS[f].title.replace(/"/g, '&quot;')}" allow="fullscreen"></iframe>`;
    btn.textContent = UI.simClose;
    box.scrollIntoView({ behavior:'smooth', block:'start' });
  });
}
// A simulation tells the training that it was completed
addEventListener('message', e => {
  const d = e.data || {};
  if (d.type !== 'em-sim-done' || !SIMS[d.sim]) return;
  setFlag(d.sim, true);
  $$(`[data-sim="${d.sim}"] .simstate`).forEach(x => x.innerHTML = UI.simDone);
  const m = findMod(curId()); if (m) refreshCTA(m);
  confetti(80);
});

/* =========================================================
   MODULE CHECK (multiple choice, options shuffled)
   ========================================================= */
let QZ = null;
function startQuiz(m){
  QZ = { m, i:0, score:0, items:shuffle(C.quiz[m.id]).map(q => {
    const idx = shuffle(q.o.map((_, k) => k));
    return { q:q.q, ctx:q.ctx, o:idx.map(k => q.o[k]), a:idx.indexOf(q.a), e:q.e }; }) };
  renderQ(); scrollTo(0, 0);
}
function renderQ(){
  renderNav('quiz');
  const { items, i, m } = QZ, q = items[i];
  view.innerHTML = `<div class="quiz">
    <div class="qbar"><i style="width:${i / items.length * 100}%"></i></div>
    <span class="qmeta">${tx('qmeta', { e:m.e, n:m.n, i:i + 1, total:items.length })}</span>
    ${q.ctx ? `<div class="qctx">📍 ${q.ctx}</div>` : ''}
    <h2 class="qq">${q.q}</h2>
    <div id="opts">${q.o.map((o, k) => `<button class="qopt" data-o="${k}"><span class="k">${'ABCD'[k]}</span><span>${o}</span></button>`).join('')}</div>
    <div class="qfb" id="qfb"></div>
    <button class="btn-y qnext" id="qnext">${i === items.length - 1 ? UI.seeResult : UI.nextQuestion}</button>
  </div>`;
  $$('#opts .qopt').forEach(b => b.onclick = () => {
    if ($('#opts').classList.contains('answered')) return;
    const k = +b.dataset.o, ok = k === q.a;
    $('#opts').classList.add('answered');
    b.classList.add(ok ? 'right' : 'wrong');
    $(`#opts [data-o="${q.a}"]`).classList.add('right');
    if (ok) QZ.score++;
    const fb = $('#qfb'); fb.className = 'qfb show ' + (ok ? 'ok' : 'ko'); fb.innerHTML = (ok ? UI.fbRight : UI.fbWrong) + q.e;
    $('#qnext').classList.add('show');
  });
  $('#qnext').onclick = () => { QZ.i++; if (QZ.i < QZ.items.length) renderQ(); else finishCheck(QZ.m, QZ.score, QZ.items.length); };
}
function finishCheck(m, score, n){
  const pct = Math.round(score / n * 100), ok = score / n >= PASS;
  setResult(m.id, pct, ok);
  const next = MODS[MODS.indexOf(m) + 1];
  let nextTxt = '', btn = '';
  if (ok){
    if (next){ nextTxt = tx('nextUnlocked', { n:next.n, title:next.title }); btn = `<button class="btn-y" data-go="${next.id}">${tx('goModule', { n:next.n })}</button>`; }
    else { nextTxt = UI.allDoneText; btn = `<button class="btn-y" data-go="done">${UI.seeNext}</button>`; }
  } else btn = `<button class="btn-y" data-retake="${m.id}">${UI.retake}</button>`;
  renderNav('done');
  view.innerHTML = `<div class="result">
    <div class="re">${ok ? '🎉' : '😅'}</div>
    <h1>${ok ? UI.passedTitle : UI.failTitle}</h1>
    <div class="pct ${ok ? 'pass' : 'fail'}">${pct}%</div><p>${tx('scoreLine', { score, n })} ${ok ? nextTxt : UI.failText}</p>
    <div class="btn-row">${btn}<button class="btn-g" data-go="${m.id}">${UI.reviewModule}</button></div></div>`;
  scrollTo(0, 0);
  if (ok) confetti();
}
function renderDone(){
  renderNav('done');
  view.innerHTML = `<div class="result" style="max-width:800px">
    <div class="re">🏆</div><h1>${C.done.title}</h1>
    ${C.done.html}
    <div class="mods" style="grid-template-columns:repeat(2,1fr);text-align:left">${MODS.map(m => `<div class="mcard done" style="min-height:0"><span class="me">${m.e}</span><h3>${m.title}</h3><span class="badge">${UI.doneBadge}</span></div>`).join('')}</div>
    <div class="nexts">${C.done.nexts.map(x => `<div><span>${x[0]}</span><p>${x[1]}</p></div>`).join('')}</div>
    <div class="btn-row" style="justify-content:center"><button class="btn-y" data-go="">${UI.doneBack}</button></div></div>`;
  confetti(240);
}

/* ---------- Confetti (no library) ---------- */
function confetti(count = 160){
  const cv = $('#confetti'), cx = cv.getContext('2d');
  cv.width = innerWidth; cv.height = innerHeight;
  const colors = ['#C4F046', '#F03D9E', '#3E7BFA', '#FFD34D', '#8B5CF6', '#111111'];
  const ps = Array.from({ length:count }, () => ({
    x:innerWidth / 2 + (Math.random() - .5) * 200, y:innerHeight * .35,
    vx:(Math.random() - .5) * 16, vy:-Math.random() * 15 - 6, r:Math.random() * 360, vr:(Math.random() - .5) * 18,
    w:6 + Math.random() * 7, h:8 + Math.random() * 10, c:colors[Math.floor(Math.random() * colors.length)] }));
  let f = 0;
  const tick = () => {
    cx.clearRect(0, 0, cv.width, cv.height);
    ps.forEach(p => { p.vy += .38; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
      cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r * Math.PI / 180); cx.fillStyle = p.c; cx.globalAlpha = Math.max(0, 1 - f / 170); cx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); cx.restore(); });
    if (++f < 180) requestAnimationFrame(tick); else cx.clearRect(0, 0, cv.width, cv.height);
  };
  tick();
}
function modal(html){ const m = $('#modal'); m.innerHTML = `<div class="mbox">${html}</div>`; m.classList.add('show'); }
function closeModal(){ $('#modal').classList.remove('show'); }

/* =========================================================
   ROUTER
   ========================================================= */
const go = path => { location.hash = '#/' + path; };
const curId = () => location.hash.replace(/^#\/?/, '').split('/').filter(Boolean)[0];
function route(){
  closeModal(); QZ = null;
  const id = curId(), m = findMod(id);
  if (!id) renderHome();
  else if (id === 'done' && allDone()) renderDone();
  else if (m){ if (!unlocked(m)){ go(''); setTimeout(() => modal(`<div style="font-size:48px">🔒</div><h2>${UI.lockedTitle}</h2><p>${tx('lockedModule', { n:m.n - 1 })}</p><button class="btn-y" onclick="closeModal()">${UI.ok}</button>`), 50); return; } renderModule(m); }
  else renderHome();
  scrollTo(0, 0);
}
addEventListener('hashchange', route);

document.addEventListener('click', e => {
  const t = e.target;
  const ls = t.closest('[data-lang]'); if (ls){ e.preventDefault(); location.href = '?lang=' + ls.dataset.lang + '&' + progressParam() + location.hash; return; }
  const g = t.closest('[data-go]'); if (g && !t.closest('a')){ go(g.dataset.go); if (g.dataset.go === (curId() || '')) route(); return; }
  if (t.closest('[data-locked]')){ modal(`<div style="font-size:48px">🔒</div><h2>${UI.lockedTitle}</h2><p>${UI.lockedStep}</p><button class="btn-y" onclick="closeModal()">${UI.ok}</button>`); return; }
  const j = t.closest('[data-jump]'); if (j){ $('#sec-' + j.dataset.jump).scrollIntoView({ behavior:'smooth' }); return; }
  if (t.id === 'modal') closeModal();
  const sc = t.closest('#startCheck'); if (sc){ if (sc.disabled) return; const m = findMod(curId()); if (m) startQuiz(m); return; }
  const r = t.closest('[data-retake]'); if (r){ startQuiz(findMod(r.dataset.retake)); return; }
  if (t.closest('[data-exit]')){ renderModule(QZ ? QZ.m : MODS[0]); scrollTo(0, 0); }
});
document.addEventListener('pointerdown', e => {
  if (!e.target.closest('#mcta')) return;
  const b = $('#startCheck'); if (b && b.disabled){ const l = $('.lockmsg'); if (l){ l.classList.remove('shake'); void l.offsetWidth; l.classList.add('shake'); } }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* =========================================================
   DEVELOPER OPTIONS — for reviewers: unlock every module without the checks.
   "🛠 Developer" link at the bottom (code EMDEV), or Shift+D three times.
   ========================================================= */
function setDev(on){
  if (on && !DEV_ALLOWED) return;
  if (on){ STORE.set(DEV_BACKUP, JSON.stringify(P));
    MODS.forEach(m => { if (!passed(m.id)) P[m.id] = { passed:true, score:100 }; });
    P.flags = Object.assign({}, P.flags); Object.keys(SIMS).forEach(f => P.flags[f] = true); P.dev = true; }
  else restoreRealProgress();
  saveP(); devBadge(); route();
}
function devBadge(){
  $$('.devbadge').forEach(x => x.remove());
  if (P.dev) document.body.insertAdjacentHTML('beforeend', '<button class="devbadge" id="devBadge">🔓 DEV MODE · options</button>');
}
function openDev(unlockedPanel){
  if (!unlockedPanel && !P.dev){
    modal(`<div style="font-size:44px">🛠</div><h2>Developer options</h2><p>For reviewers only. Enter the developer code:</p>
      <input id="devCode" type="password" autocomplete="off" style="width:100%;padding:12px 14px;border-radius:999px;border:2px solid #D8F07A;font-size:16px;margin:4px 0 6px">
      <p id="devErr" style="color:#c0303f;font-weight:600;min-height:20px;margin:4px 0"></p>
      <div class="btn-row" style="justify-content:center"><button class="btn-g" onclick="closeModal()">Cancel</button><button class="btn-y" id="devGo">Continue</button></div>`);
    const tryDev = () => { if (norm($('#devCode').value) === DEV_CODE) openDev(true); else $('#devErr').textContent = 'Wrong code.'; };
    $('#devGo').onclick = tryDev; $('#devCode').onkeydown = e => { if (e.key === 'Enter') tryDev(); };
    setTimeout(() => $('#devCode').focus(), 50);
    return;
  }
  modal(`<div style="font-size:44px">🛠</div><h2>Developer options</h2>
    <p>Developer mode is <b>${P.dev ? 'ON' : 'OFF'}</b>. ${P.dev ? 'All modules and simulations are unlocked.' : 'Turn it on to unlock every module.'}</p>
    <div class="btn-row" style="justify-content:center;flex-direction:column;align-items:stretch;gap:8px;margin-top:14px">
      <button class="btn-y" id="devToggle" style="justify-content:center">${P.dev ? '🔒 Turn developer mode off' : '🔓 Unlock all modules'}</button>
      <button class="btn-g" id="devReset">♻️ Reset all progress</button>
      <button class="btn-g" onclick="closeModal()">Close</button>
    </div>`);
  $('#devToggle').onclick = () => { closeModal(); setDev(!P.dev); };
  $('#devReset').onclick = () => { closeModal(); P = {}; saveP(); devBadge(); go(''); route(); };
}
document.addEventListener('click', e => { if (!DEV_ALLOWED) return; if (e.target.closest('#devLink') || e.target.closest('#devBadge')) openDev(false); });
let dk = [];
document.addEventListener('keydown', e => {
  if (!(e.shiftKey && e.key.toLowerCase() === 'd')) return;
  if (!DEV_ALLOWED) return;
  const now = Date.now(); dk = dk.filter(x => now - x < 1200); dk.push(now);
  if (dk.length >= 3){ dk = []; openDev(true); }
});

$('#footTxt').textContent = UI.footer;
$('#devLink').textContent = UI.devLink;
{ const dl = document.getElementById('devLink'); if (dl && !DEV_ALLOWED) dl.style.display = 'none'; }
loadP();
takeUrlProgress();
if (P.dev && !DEV_ALLOWED){ restoreRealProgress(); STORE.set(PKEY, JSON.stringify(P)); }
lmsReady = true; lmsSend('ready'); lmsSync();
devBadge();
route();
