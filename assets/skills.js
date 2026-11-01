/* =====================================================================
   Minecraft CraftForge training — add-on for the shared course engine
   Loaded right after shared/course-engine.js. Texts come from COURSE.skills (assets/content-xx.js).
   - Block t:'skills'  → the Skills module: four blocks in a hotbar (Minecraft, logic, Python, data packs).
     Each block ends with a practice check (70% to pass and unlock the next block). When the four are
     passed, the module is passed with the average score (no separate module check).
   - Block t:'videos'  → example lessons (Google Drive videos), loaded only when opened.
   - Step-by-step tracers: <div class="tracer" data-tr="id"></div> inside the section texts.
   ===================================================================== */
(function(){
  'use strict';
  const C = window.COURSE, SK = C && C.skills;
  if (!SK || typeof BLOCK === 'undefined' || typeof ctaHTML !== 'function') return;
  const U = SK.ui, B = SK.blocks, MID = SK.mod;
  const fmt = (s, o) => String(s).replace(/\{(\w+)\}/g, (m, k) => o && k in o ? o[k] : m);
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const rtl = C.dir === 'rtl';
  const ARW = rtl ? { back:'▶', next:'◀' } : { back:'◀', next:'▶' };

  const css = `
  #view p:empty{display:none}
  .skx{margin-top:6px}
  .skx-bar{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 18px}
  .skx-slot{position:relative;min-width:92px;padding:10px 12px 8px;background:#fff;border:2px solid var(--line,#D8F07A);border-radius:14px;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;font:inherit;color:inherit;box-shadow:0 2px 10px rgba(0,0,0,.06);transition:transform .15s,border-color .15s}
  .skx-slot .ic{font-size:26px;line-height:1}.skx-slot .nm{font-family:Nunito,sans-serif;font-weight:900;font-size:12.5px}
  .skx-slot .st{position:absolute;top:4px;inset-inline-end:7px;font-size:12px;color:#15803D;font-weight:900}
  .skx-slot:hover:not(.lock){transform:translateY(-2px)}
  .skx-slot.on{border-color:#F03D9E;outline:3px solid #F03D9E;outline-offset:1px}
  .skx-slot.lock{opacity:.5;cursor:not-allowed;background:#F4FCD3}
  .skx-bhead{border-inline-start:5px solid #F03D9E;padding:2px 0 2px 14px;margin:0 0 14px}
  [dir=rtl] .skx-bhead{padding:2px 14px 2px 0}
  .skx-bhead small{font-family:Nunito,sans-serif;font-weight:900;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:#F03D9E}
  .skx-bhead h2{margin:2px 0 0;font-family:Nunito,sans-serif;font-weight:900;font-size:24px}
  .skx-sec{margin:22px 0 0}
  .skx-sec>h3{font-family:Nunito,sans-serif;font-weight:900;font-size:19px;margin:0 0 10px;display:flex;gap:10px;align-items:center}
  .skx-sec>h3:after{content:'';flex:1;height:2px;background:var(--line,#D8F07A);border-radius:2px}
  .skx .card{background:#fff;border:2px solid var(--line,#D8F07A);border-radius:14px;padding:16px 18px;margin:0 0 12px;box-shadow:0 2px 10px rgba(0,0,0,.05);min-height:0}
  .skx .card>:last-child{margin-bottom:0}
  .skx .card h4{font-family:Nunito,sans-serif;font-weight:900;font-size:16px;margin:0 0 7px}
  .skx .card p,.skx .card li{font-size:14.5px;line-height:1.7;color:#3E3E4A}
  .skx .card p{margin:0 0 .7em}
  .skx .card.why{border-inline-start:5px solid #7DD3FC}.skx .card.warn{border-inline-start:5px solid #F03D9E}
  .skx .card.tip{border-inline-start:5px solid #F5B544}.skx .card.class{border-inline-start:5px solid #C4F046}
  .skx ul,.skx ol{margin:0 0 .7em;padding-inline-start:1.3em}
  .skx .tbl{border-radius:12px;overflow-x:auto;margin:0 0 12px;border:2px solid var(--line,#D8F07A)}
  .skx table{border-collapse:collapse;width:100%;background:#fff;font-size:14px}
  .skx th,.skx td{border-bottom:1px solid var(--line,#D8F07A);padding:9px 12px;text-align:start;vertical-align:top}
  .skx th{background:#F4FCD3;font-family:Nunito,sans-serif;font-weight:900}
  .skx tr:last-child td{border-bottom:0}
  .skx code{font-family:'JetBrains Mono',Consolas,monospace;font-size:.85em;background:#F4FCD3;border:1px solid var(--line,#D8F07A);border-radius:5px;padding:1px 5px;color:#D4308A}
  .skx pre.code{background:#111820;color:#C9E4FF;border-radius:10px;font-family:'JetBrains Mono',Consolas,monospace;font-size:13px;line-height:1.65;padding:14px 16px;overflow-x:auto;margin:0 0 12px;white-space:pre;direction:ltr;text-align:left}
  .skx pre.code.bad{border-left:5px solid #F03D9E}.skx pre.code.good{border-left:5px solid #C4F046}
  .skx .cols{display:grid;grid-template-columns:1fr 1fr;gap:12px}
  .skx .vid{position:relative;padding-top:56.25%;background:#000;border-radius:14px;overflow:hidden;margin-bottom:12px}
  .skx .vid iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
  .skx .tracer{border:2px solid var(--line,#D8F07A);border-radius:14px;overflow:hidden;background:#fff;margin:0 0 14px}
  .skx .tr-head{background:#111;color:#fff;padding:10px 14px;font-family:Nunito,sans-serif;font-weight:900;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap}
  .skx .tr-head small{font-weight:700;opacity:.75}
  .skx .tr-body{display:grid;grid-template-columns:1.2fr 1fr}
  .skx .tr-code{background:#111820;color:#C9E4FF;font-family:'JetBrains Mono',Consolas,monospace;font-size:13px;padding:10px 0;overflow-x:auto;direction:ltr;text-align:left}
  .skx .tr-line{padding:1px 14px;white-space:pre;border-left:5px solid transparent;transition:background .15s}
  .skx .tr-line.on{background:#293B18;border-left-color:#C4F046}
  .skx .tr-side{padding:12px 14px;display:flex;flex-direction:column;gap:10px}
  .skx .tr-vars{font-family:'JetBrains Mono',Consolas,monospace;font-size:13.5px;direction:ltr}
  .skx .tr-vars div{display:flex;justify-content:space-between;border-bottom:1px dashed var(--line,#D8F07A);padding:3px 0}
  .skx .tr-vars .chg{color:#F03D9E;font-weight:700}
  .skx .tr-note{font-size:14.5px;line-height:1.6}
  .skx .tr-ctl{display:flex;gap:8px;align-items:center;padding:10px 14px;border-top:1px solid var(--line,#D8F07A);flex-wrap:wrap}
  .skx .tr-ctl .cnt{margin-inline-start:auto;font-size:13px;color:#6B6F7D;font-weight:700}
  .skx-btn{font:inherit;font-weight:800;font-size:14px;border:0;border-radius:999px;padding:10px 18px;background:#111;color:#fff;cursor:pointer}
  .skx-btn:hover:not(:disabled){background:#F03D9E}
  .skx-btn:disabled{background:#D5D8DE;color:#8C909C;cursor:default}
  .skx-btn.ghost{background:#fff;color:#333;border:2px solid var(--line,#D8F07A)}
  .skx-btn.ghost:hover:not(:disabled){background:#F4FCD3;color:#111}
  .skx-quiz{margin-top:28px;background:#fff;border:2px solid #111;border-radius:18px;padding:20px}
  .skx-quiz h3{font-family:Nunito,sans-serif;font-weight:900;font-size:20px;margin:0 0 4px}
  .skx-quiz>p{margin:0;color:#555;font-size:14.5px}
  .skx-q{border-top:1px solid var(--line,#D8F07A);padding-top:15px;margin-top:15px}
  .skx-qp{font-weight:700;margin-bottom:10px;line-height:1.55}
  .skx-qp pre.code{font-weight:400;margin-top:8px}
  .skx-opts{display:grid;gap:8px}
  .skx-opt{font:inherit;font-size:14.5px;text-align:start;background:#fff;border:2px solid var(--line,#D8F07A);border-radius:12px;padding:11px 13px;color:#111;cursor:pointer}
  .skx-opt:hover:not(:disabled){border-color:#AEDD2E;background:#F4FCD3}
  .skx-opt:disabled{cursor:default}
  .skx-opt.right{background:#F0FDF4;border-color:#86EFAC}.skx-opt.wrong{background:#FEF2F2;border-color:#FECACA}
  .skx-opt pre.code{margin:6px 0 0;font-size:12.5px}
  .skx-fb{margin-top:10px;padding:10px 12px;border-radius:10px;font-size:14.5px}
  .skx-fb.ok{background:#F0FDF4}.skx-fb.no{background:#FEF2F2}
  .skx-res{margin-top:18px;padding:16px;border-radius:14px;border:2px solid}
  .skx-res.pass{border-color:#86EFAC;background:#F0FDF4}.skx-res.fail{border-color:#F03D9E;background:#FEF2F2}
  .skx-res h4{margin:0 0 4px;font-family:Nunito,sans-serif;font-weight:900;font-size:18px}
  .skx-act{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px}
  .skx-lock{padding:18px;border:2px dashed var(--line,#D8F07A);border-radius:14px;background:#F7FDE6;font-weight:700}
  .vdx-tabs{display:flex;flex-wrap:wrap;gap:8px;margin:4px 0 12px}
  .vdx-tabs button{font:inherit;font-weight:800;font-size:14px;border:2px solid var(--line,#D8F07A);background:#fff;border-radius:999px;padding:9px 16px;cursor:pointer}
  .vdx-tabs button.on{background:#C4F046;border-color:#AEDD2E}
  .vdx-frame{position:relative;padding-top:56.25%;background:#111;border-radius:14px;overflow:hidden}
  .vdx-frame iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
  @media (max-width:760px){.skx .cols,.skx .tr-body{grid-template-columns:1fr}.skx-slot{min-width:74px}}`;

  /* ---------- progress of the blocks (saved with the engine progress: P['<mod>-<block>']) ---------- */
  const bkey = b => MID + '-' + b.id;
  const bPassed = b => passed(bkey(b));
  const modOpen = () => passed(MID) || !!P.dev;
  const bUnlocked = i => i === 0 || modOpen() || bPassed(B[i - 1]);
  let cur = null, answers = {};
  function firstOpen(){ for (let i = 0; i < B.length; i++) if (!bPassed(B[i]) && bUnlocked(i)) return i; return 0; }

  /* ---------- tracers ---------- */
  function tracerHTML(id){
    const t = SK.tracers[id]; if (!t) return '';
    return `<div class="tracer" data-tr="${id}" data-step="0" data-on="1"><div class="tr-head"><span>▶ ${esc(t.title)}</span><small>${esc(U.step_self)}</small></div>
      <div class="tr-body"><div class="tr-code">${t.code.map((c, i) => `<div class="tr-line" data-l="${i}">${esc(c) || ' '}</div>`).join('')}</div>
      <div class="tr-side"><div class="tr-vars"></div><div class="tr-note"></div></div></div>
      <div class="tr-ctl"><button class="skx-btn ghost" data-tract="prev">${ARW.back} ${esc(U.prev)}</button><button class="skx-btn" data-tract="next">${esc(U.next)} ${ARW.next}</button><span class="cnt"></span></div></div>`;
  }
  function drawTracer(el){
    const t = SK.tracers[el.dataset.tr], s = +el.dataset.step, st = t.steps[s], prev = s > 0 ? t.steps[s - 1].v : {};
    el.querySelectorAll('.tr-line').forEach(x => x.classList.toggle('on', +x.dataset.l === st.l));
    el.querySelector('.tr-vars').innerHTML = Object.keys(st.v).map(k => `<div><span>${esc(k)}</span><span class="${s > 0 && prev[k] !== st.v[k] ? 'chg' : ''}">${esc(String(st.v[k]))}</span></div>`).join('');
    el.querySelector('.tr-note').textContent = st.n;
    el.querySelector('.cnt').textContent = fmt(U.stepn, { s:s + 1, n:t.steps.length });
    el.querySelector('[data-tract=prev]').disabled = s === 0;
    el.querySelector('[data-tract=next]').disabled = s === t.steps.length - 1;
  }

  /* ---------- the Skills module ---------- */
  function hotbar(){
    return `<div class="skx-bar">${B.map((b, i) => { const lock = !bUnlocked(i);
      return `<button class="skx-slot ${i === cur ? 'on' : ''} ${lock ? 'lock' : ''}" data-skb="${i}" title="${esc(b.title)}"><span class="ic">${lock ? '🔒' : b.ic}</span><span class="nm">${esc(b.slot)}</span>${bPassed(b) ? '<span class="st">✔</span>' : ''}</button>`; }).join('')}</div>`;
  }
  function blockHTML(i){
    const b = B[i];
    if (!bUnlocked(i)) return hotbar() + `<div class="skx-lock">${esc(U.lockedBlock)}</div>`;
    const secs = b.sections.map(s => `<div class="skx-sec"><h3>${s.t}</h3>${s.html.replace(/<div class="tracer" data-tr="(\w+)"><\/div>/g, (m, id) => tracerHTML(id))}</div>`).join('');
    const quiz = `<div class="skx-quiz" id="skxQuiz"><h3>📝 ${esc(U.practice)}</h3><p>${U.check_intro}</p>
      ${b.quiz.map((q, qi) => `<div class="skx-q" data-q="${qi}"><div class="skx-qp">${qi + 1}. ${q.p}</div><div class="skx-opts">${q.o.map((o, oi) => `<button class="skx-opt" data-qi="${qi}" data-oi="${oi}">${o}</button>`).join('')}</div><div class="skx-fbx"></div></div>`).join('')}
      <div id="skxRes"></div></div>`;
    return hotbar() + `<div class="skx-bhead"><small>${esc(fmt(U.blockOf, { n:i + 1, t:B.length }))}</small><h2>${b.ic} ${b.title}</h2></div>` + secs + quiz;
  }
  function draw(box, i, scroll){
    cur = i; answers = {};
    box.innerHTML = blockHTML(i);
    box.querySelectorAll('.tracer[data-on]').forEach(drawTracer);
    if (scroll) box.scrollIntoView({ behavior:'smooth', block:'start' });
  }
  function answer(box, qi, oi){
    const b = B[cur], q = b.quiz[qi]; if (answers[qi] !== undefined) return; answers[qi] = oi;
    const qb = box.querySelector(`.skx-q[data-q="${qi}"]`);
    qb.querySelectorAll('.skx-opt').forEach(x => { x.disabled = true; const k = +x.dataset.oi; if (k === q.c) x.classList.add('right'); else if (k === oi) x.classList.add('wrong'); });
    qb.querySelector('.skx-fbx').innerHTML = `<div class="skx-fb ${oi === q.c ? 'ok' : 'no'}"><b>${esc(oi === q.c ? U.correct : U.notquite)}</b> ${q.f}</div>`;
    if (Object.keys(answers).length === b.quiz.length) finishBlock(box);
  }
  function finishBlock(box){
    const b = B[cur], right = b.quiz.filter((q, i) => answers[i] === q.c).length, pct = Math.round(right / b.quiz.length * 100), ok = pct >= 70;
    setResult(bkey(b), pct, ok);
    if (ok && B.every(bPassed) && !passed(MID)){
      const avg = Math.round(B.reduce((a, x) => a + ((P[bkey(x)] && P[bkey(x)].score) || 0), 0) / B.length);
      setResult(MID, avg, true);
      confetti();
    } else if (ok) confetti(70);
    const next = cur + 1 < B.length ? cur + 1 : null;
    box.querySelector('#skxRes').innerHTML = `<div class="skx-res ${ok ? 'pass' : 'fail'}"><h4>${esc(ok ? fmt(U.passedBlock, { p:pct }) : fmt(U.score, { p:pct }))}</h4><p>${esc(ok ? (next !== null ? U.unlocked : '') : U.review_msg)}</p>
      <div class="skx-act">${ok && next !== null ? `<button class="skx-btn" data-skb="${next}">${esc(U.nextBlock)}</button>` : ''}${!ok ? `<button class="skx-btn" data-skretry>${esc(U.retry)}</button>` : ''}</div></div>`;
    const bar = box.querySelector('.skx-bar'); if (bar) bar.outerHTML = hotbar();
    const m = findMod(MID); if (m) refreshCTA(m);
  }

  // Module check of the Skills module = the four practice checks above (no extra quiz)
  const prevCta = ctaHTML;
  ctaHTML = function(m){
    if (m.id !== MID) return prevCta(m);
    const n = B.filter(bPassed).length, done = passed(MID) || n === B.length, next = MODS[MODS.indexOf(m) + 1];
    return `<span class="e">${done ? '🏅' : '🧩'}</span>
      <div class="grow"><h3>${esc(done ? fmt(U.ctaDone, { p:(P[MID] && P[MID].score) || 100 }) : U.ctaTitle)}</h3><p>${esc(fmt(U.progress, { n, t:B.length }))} · ${esc(U.ctaText)}</p></div>
      ${next ? `<button class="btn-y" ${done ? `data-go="${next.id}"` : 'disabled'}>${esc(fmt(U.goNext, { n:next.n }))}</button>` : `<button class="btn-y" ${done ? 'data-go="done"' : 'disabled'}>${esc(UI.seeNext)}</button>`}`;
  };

  /* ---------- example lessons (videos) ---------- */
  BLOCK.skills = () => '<div class="skx" data-skills></div>';
  BLOCK.videos = b => `<div class="vdx" data-videos='${JSON.stringify(b.items).replace(/'/g, '&#39;')}'><div class="vdx-tabs">${b.items.map((v, i) => `<button data-vi="${i}">▶ ${v[0]}</button>`).join('')}</div><div class="vdx-frame"></div></div>`;
  function openVideo(box, i){
    const items = JSON.parse(box.dataset.videos);
    box.querySelectorAll('.vdx-tabs button').forEach((x, k) => x.classList.toggle('on', k === i));
    box.querySelector('.vdx-frame').innerHTML = `<iframe src="https://drive.google.com/file/d/${items[i][1]}/preview" allow="autoplay; fullscreen" allowfullscreen title="${esc(items[i][0])}"></iframe>`;
  }

  /* ---------- wiring ---------- */
  function scan(){
    document.querySelectorAll('[data-skills]:not([data-ready])').forEach(box => { box.dataset.ready = '1'; draw(box, cur !== null && bUnlocked(cur) ? cur : firstOpen(), false); });
    document.querySelectorAll('[data-videos]:not([data-ready])').forEach(box => { box.dataset.ready = '1'; openVideo(box, 0); });
  }
  document.addEventListener('click', e => {
    const t = e.target, box = t.closest('[data-skills]');
    const v = t.closest('[data-vi]'); if (v){ openVideo(v.closest('[data-videos]'), +v.dataset.vi); return; }
    if (!box) return;
    const s = t.closest('[data-skb]'); if (s){ const i = +s.dataset.skb; if (bUnlocked(i)) draw(box, i, true); return; }
    const o = t.closest('[data-qi]'); if (o){ answer(box, +o.dataset.qi, +o.dataset.oi); return; }
    if (t.closest('[data-skretry]')){ draw(box, cur, false); box.querySelector('#skxQuiz').scrollIntoView({ behavior:'smooth' }); return; }
    const a = t.closest('[data-tract]'); if (a){ const tr = a.closest('.tracer'), n = SK.tracers[tr.dataset.tr].steps.length; let st = +tr.dataset.step;
      st = a.dataset.tract === 'next' ? Math.min(n - 1, st + 1) : Math.max(0, st - 1); tr.dataset.step = st; drawTracer(tr); }
  });
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  const view = document.getElementById('view');
  if (view) new MutationObserver(scan).observe(view, { childList:true });
  route();   // draw the current page again, now with the Skills and video blocks
  scan();
})();
