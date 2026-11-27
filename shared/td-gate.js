/* =====================================================================
CONTENT GATE — Kodland TD trainings
The check of a module opens only after the tutor has opened its content AND spent a minimum
of active time on it. Include this file in EVERY training (until the LMS training builder, Q1 2027).
Loaded with the training engine (before or after it) and after the surveys script, if any.

1) What has to be done in a module before its check (quiz / sort / "done" button) unlocks:
- scroll to the end of the module;
- open every expandable item: accordions, flip cards, myth cards, open questions, tabs,
option switches, "watch the video" buttons;
- start every embedded video / simulation (click inside it);
- go through every step of a carousel and answer every row of a sorter;
- spend a minimum of ACTIVE time on the module (see 2).
Items still to open get a dashed outline; the lock message says how many are left and
"Show me" scrolls to the next one. What was opened, and the active time, are saved
(memory + localStorage + sessionStorage): a reload or a second day keeps them.
Modules already passed are never locked.

2) Minimum active time
- Active time = page visible and mouse / keyboard / scroll / touch input in the last 2 minutes.
While a video of the module is playing, or the tutor is inside an embedded video / simulation
(focus in its frame, up to 10 minutes without input), the time keeps counting.
- Required time = reading part + video part.
Reading: MIN_SHARE of the time needed to read the module at READ_WPM words per minute
(hidden text in accordions / cards included), kept between MIN_SEC and MAX_SEC.
Videos: each video at double speed (duration / 2). For embedded videos (YouTube, Drive...)
the length can't be read: add data-duration="seconds" on the iframe (or its container),
otherwise IFRAME_DEFAULT_SEC is used.
- To set it by hand for one training, define before this script, e.g.:
window.TD_GATE_MIN_SEC = 240;                 // same for every module, in seconds
window.TD_GATE_MIN_SEC = { m1:300, m2:180 };  // per module id (others use the estimate)
window.TD_GATE_MIN_SEC = 0;                   // switch the time rule off

3) Module checks (mini-training / Refunds engine)
- MAX_TRIES attempts per module check. The tutor sees how many attempts are left before and
after each check. After the last failed attempt the module is reset: all content has to be
opened again and the reading time starts again, then the attempts start again.
- Until the module is passed, a wrong answer is marked wrong but the right answer is not shown.

4) Developer / review mode
- Only with the review key: add  ?dev=1&tdkey=<key>  to the address (the key is kept by TD).
With the key there is no gate and the engine's developer mode works as before.
- Without the key, ?dev=1 is ignored and the engine's developer mode (Shift+D x3, "unlock all")
is switched off. Nothing is ever sent to the LMS in developer mode (engine rule).
- Multi-courses engine (Coding / Creative PL): each course is a module (its "next" button is
the check), and "Finish the training" also needs every other course and the intro cards.
===================================================================== */
(function(){
'use strict';

/* ---------- settings ---------- */
var READ_WPM = 200;          // reading speed used for the estimate
var MIN_SHARE = 0.6;         // share of the estimated reading time that is required
var MIN_SEC = 60;            // reading part: never less than 1 minute per module
var MAX_SEC = 480;           // reading part: never more than 8 minutes per module
var VIDEO_SPEED = 2;         // videos counted at double speed
var VIDEO_DEFAULT_SEC = 30;  // uploaded video whose length is not known yet
var IFRAME_DEFAULT_SEC = 60; // embedded video / simulation without data-duration
var IDLE_MS = 120000;        // no input for 2 minutes = not active
var VIDEO_IDLE_MS = 600000;  // inside an embedded video / simulation: active for up to 10 minutes without input
var MAX_TRIES = 3;           // attempts per module check
var DEV_KEY_HASH = '28ee6amva3o'; // hash of the review key (the key itself is not in this file)

/* ---------- developer / review mode ---------- */
function cyrb53(str){ var h1 = 0xdeadbeef, h2 = 0x41c6ce57, i, ch; for (i = 0; i < str.length; i++){ ch = str.charCodeAt(i); h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677); } h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507); h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909); h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507); h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909); return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36); }
var QS = {}; location.search.replace(/^\?/, '').split('&').forEach(function(kv){ if (!kv) return; var p = kv.split('='); try { QS[decodeURIComponent(p[0])] = decodeURIComponent((p[1] || '').replace(/\+/g, ' ')); } catch(e){} });
var DEV_OK = !!QS.tdkey && cyrb53(QS.tdkey) === DEV_KEY_HASH;
if (DEV_OK) return; // reviewers: no gate, engine developer mode as before
if ('dev' in QS){
// remove ?dev from the address (works when this script loads before the engine)
try { var rest = location.search.replace(/^\?/, '').split('&').filter(function(kv){ return kv && kv.split('=')[0] !== 'dev'; }).join('&');
history.replaceState(history.state, '', location.pathname + (rest ? '?' + rest : '') + location.hash); } catch(e){}
}
// the engine's shortcut (Shift+D three times): blocked before it reaches the engine
addEventListener('keydown', function(e){ if (e.shiftKey && (e.key === 'D' || e.key === 'd')) e.stopImmediatePropagation(); }, true);

/* ---------- texts ---------- */
var TX = {
en:{ lock:'🔒 Before the check, open everything in this module: {n} left.', show:'Show me ↓', end:'Scroll to the end of the module.',
wait:'⏳ Take your time with this module: the check opens after about {n} more min of active reading.', also:'· ⏳ about {n} min of reading left',
ready:'✅ You can start the check: 70% to pass, {n} of 3 attempts left. After 3 failed attempts the module reopens and you read it again.',
left:'🔁 {n} of 3 attempts left. Review the module before you try again.',
reset:'📖 You used all 3 attempts. The module has been reset: open everything and read it again, then you get 3 new attempts.',
wrong:'❌ Not quite. The right answer is shown once you pass the module.' },
es:{ lock:'🔒 Antes del test, abre todo el contenido de este módulo: faltan {n}.', show:'Muéstrame ↓', end:'Desplázate hasta el final del módulo.',
wait:'⏳ Tómate tu tiempo con este módulo: el test se abre tras unos {n} min más de lectura activa.', also:'· ⏳ faltan unos {n} min de lectura',
ready:'✅ Ya puedes hacer el test: necesitas un 70 %, te quedan {n} de 3 intentos. Tras 3 intentos fallidos el módulo se reabre y tendrás que leerlo de nuevo.',
left:'🔁 Te quedan {n} de 3 intentos. Repasa el módulo antes de volver a intentarlo.',
reset:'📖 Has usado los 3 intentos. El módulo se ha reiniciado: abre todo y léelo de nuevo, luego tendrás 3 intentos nuevos.',
wrong:'❌ No es correcto. La respuesta correcta se mostrará cuando apruebes el módulo.' },
pt:{ lock:'🔒 Antes do teste, abra todo o conteúdo deste módulo: faltam {n}.', show:'Mostrar ↓', end:'Role até o final do módulo.',
wait:'⏳ Dedique um tempo a este módulo: o teste abre após cerca de mais {n} min de leitura ativa.', also:'· ⏳ faltam cerca de {n} min de leitura',
ready:'✅ Você já pode fazer o teste: precisa de 70%, restam {n} de 3 tentativas. Depois de 3 tentativas sem sucesso, o módulo reabre e você precisa lê-lo de novo.',
left:'🔁 Restam {n} de 3 tentativas. Revise o módulo antes de tentar de novo.',
reset:'📖 Você usou as 3 tentativas. O módulo foi reiniciado: abra tudo e leia de novo, depois terá 3 novas tentativas.',
wrong:'❌ Não é bem isso. A resposta certa aparece quando você for aprovado no módulo.' },
it:{ lock:'🔒 Prima del test, apri tutti i contenuti di questo modulo: ne mancano {n}.', show:'Mostrami ↓', end:'Scorri fino alla fine del modulo.',
wait:'⏳ Prenditi il tempo per questo modulo: il test si apre dopo circa altri {n} min di lettura attiva.', also:'· ⏳ mancano circa {n} min di lettura',
ready:'✅ Puoi iniziare il test: serve il 70%, ti restano {n} tentativi su 3. Dopo 3 tentativi non superati il modulo si riapre e dovrai rileggerlo.',
left:'🔁 Ti restano {n} tentativi su 3. Ripassa il modulo prima di riprovare.',
reset:'📖 Hai usato tutti e 3 i tentativi. Il modulo è stato azzerato: apri tutto e rileggilo, poi avrai 3 nuovi tentativi.',
wrong:'❌ Non proprio. La risposta giusta comparirà quando avrai superato il modulo.' },
pl:{ lock:'🔒 Przed testem otwórz wszystkie treści tego modułu: zostało {n}.', show:'Pokaż ↓', end:'Przewiń do końca modułu.',
wait:'⏳ Poświęć chwilę temu modułowi: test otworzy się po ok. {n} min aktywnej lektury.', also:'· ⏳ zostało ok. {n} min czytania',
ready:'✅ Możesz zacząć test: potrzebujesz 70%, zostały Ci {n} z 3 prób. Po 3 nieudanych próbach moduł otworzy się ponownie i trzeba go przeczytać jeszcze raz.',
left:'🔁 Zostały Ci {n} z 3 prób. Powtórz moduł przed kolejną próbą.',
reset:'📖 Wykorzystałeś wszystkie 3 próby. Moduł został wyzerowany: otwórz wszystko i przeczytaj go ponownie, potem dostaniesz 3 nowe próby.',
wrong:'❌ Nie do końca. Poprawna odpowiedź pojawi się, gdy zaliczysz moduł.' },
tr:{ lock:'🔒 Testten önce bu modüldeki her şeyi aç: {n} kaldı.', show:'Göster ↓', end:'Modülün sonuna kadar kaydır.',
wait:'⏳ Bu modüle zaman ayır: test yaklaşık {n} dk daha aktif okumadan sonra açılır.', also:'· ⏳ yaklaşık {n} dk okuma kaldı',
ready:'✅ Teste başlayabilirsin: geçmek için %70 gerekli, 3 hakkından {n} tanesi kaldı. 3 başarısız denemeden sonra modül yeniden açılır ve tekrar okuman gerekir.',
left:'🔁 3 hakkından {n} tanesi kaldı. Tekrar denemeden önce modülü gözden geçir.',
reset:'📖 3 hakkının hepsini kullandın. Modül sıfırlandı: her şeyi aç ve yeniden oku, sonra 3 yeni hakkın olacak.',
wrong:'❌ Tam olarak değil. Doğru cevap, modülü geçtiğinde gösterilecek.' },
ru:{ lock:'🔒 Перед проверкой открой всё в этом модуле: осталось {n}.', show:'Показать ↓', end:'Прокрути модуль до конца.',
wait:'⏳ Не торопись с этим модулем: проверка откроется примерно через {n} мин активного чтения.', also:'· ⏳ осталось примерно {n} мин чтения',
ready:'✅ Можно начинать проверку: нужно 70%, осталось {n} из 3 попыток. После 3 неудачных попыток модуль откроется заново, и его нужно будет прочитать ещё раз.',
left:'🔁 Осталось {n} из 3 попыток. Повтори модуль перед следующей попыткой.',
reset:'📖 Ты использовал все 3 попытки. Модуль сброшен: открой всё и прочитай его заново, затем у тебя будет 3 новые попытки.',
wrong:'❌ Не совсем. Правильный ответ появится, когда ты пройдёшь модуль.' },
id:{ lock:'🔒 Sebelum tes, buka semua isi modul ini: tersisa {n}.', show:'Tunjukkan ↓', end:'Gulir sampai akhir modul.',
wait:'⏳ Luangkan waktu untuk modul ini: tes terbuka setelah sekitar {n} menit lagi membaca aktif.', also:'· ⏳ sisa sekitar {n} menit membaca',
ready:'✅ Kamu bisa mulai tes: perlu 70%, sisa {n} dari 3 kesempatan. Setelah 3 kali gagal, modul dibuka ulang dan kamu perlu membacanya lagi.',
left:'🔁 Sisa {n} dari 3 kesempatan. Pelajari lagi modulnya sebelum mencoba lagi.',
reset:'📖 Kamu sudah memakai 3 kesempatan. Modul direset: buka semua dan baca lagi, lalu kamu mendapat 3 kesempatan baru.',
wrong:'❌ Belum tepat. Jawaban yang benar ditampilkan setelah kamu lulus modul ini.' },
ar:{ lock:'🔒 قبل الاختبار، افتح كل محتوى هذه الوحدة: بقي {n}.', show:'أرني ↓', end:'مرّر حتى نهاية الوحدة.',
wait:'⏳ خذ وقتك مع هذه الوحدة: يُفتح الاختبار بعد نحو {n} دقيقة أخرى من القراءة الفعلية.', also:'· ⏳ بقي نحو {n} دقيقة من القراءة',
ready:'✅ يمكنك بدء الاختبار: تحتاج إلى 70%، وبقي لك {n} من 3 محاولات. بعد 3 محاولات غير ناجحة تُفتح الوحدة من جديد وعليك قراءتها مرة أخرى.',
left:'🔁 بقي لك {n} من 3 محاولات. راجع الوحدة قبل المحاولة مرة أخرى.',
reset:'📖 استخدمت المحاولات الثلاث. أُعيد ضبط الوحدة: افتح كل المحتوى واقرأها من جديد، ثم ستحصل على 3 محاولات جديدة.',
wrong:'❌ ليست الإجابة الصحيحة. ستظهر الإجابة الصحيحة عندما تنجح في الوحدة.' }
};
function tx(k, n){ var l = ((window.MC_CONTENT && window.MC_CONTENT.lang) || document.documentElement.lang || 'en').slice(0, 2).toLowerCase(); var t = (TX[l] || TX.en)[k]; return n == null ? t : t.replace('{n}', n); }

/* ---------- safe storage ---------- */
var MEM = {};
function areas(){ var a = []; try { a.push(window.localStorage); } catch(e){} try { a.push(window.sessionStorage); } catch(e){} return a; }
function store(k, v){
var st = areas(), i;
if (v === undefined){ for (i = 0; i < st.length; i++){ try { var x = st[i].getItem(k); if (x !== null) return x; } catch(e){} } return Object.prototype.hasOwnProperty.call(MEM, k) ? MEM[k] : null; }
v = String(v); MEM[k] = v; for (i = 0; i < st.length; i++){ try { st[i].setItem(k, v); } catch(e){} }
}
function tid(){ try { return TRAINING_ID; } catch(e){} try { return window.TD_TIME_ADAPTER.training(); } catch(e){} return 'training'; }
function gkey(id){ return 'kl-td-gate-' + tid() + '-' + id; }

/* ---------- styles ---------- */
var css = '.tdg-todo{outline:2px dashed #F5A524!important;outline-offset:4px;border-radius:12px}' +
'.tdg-flash{animation:tdgflash 1.2s ease 2}@keyframes tdgflash{50%{outline-color:#E5484D;outline-width:4px}}' +
'.tdg-lock{margin:14px 0;padding:12px 16px;border-radius:14px;background:#FFF7E6;border:2px solid #F5A524;color:#5A4300;font-weight:700;font-size:14px;display:flex;gap:12px;align-items:center;flex-wrap:wrap}' +
'.tdg-lock.tdg-ok{background:#ECFBF3;border-color:#5DD39E;color:#14532D}' +
'.tdg-lock button{border:0;border-radius:999px;padding:7px 14px;background:#F5A524;color:#111;font-weight:800;cursor:pointer}' +
'.tdg-note{margin:12px auto 0;max-width:560px;padding:10px 14px;border-radius:12px;background:#FFF7E6;border:2px solid #F5A524;color:#5A4300;font-weight:700;font-size:14px;text-align:center}' +
'[data-tdg-locked]{opacity:.45!important;cursor:not-allowed!important}';
var st = document.createElement('style'); st.textContent = css; (document.head || document.documentElement).appendChild(st);

/* ---------- active time ---------- */
var lastInput = Date.now();
['mousemove','keydown','scroll','wheel','click','touchstart'].forEach(function(ev){ addEventListener(ev, function(){ lastInput = Date.now(); }, { passive:true, capture:true }); });
function isActive(now){
if (document.visibilityState !== 'visible') return false;
if (now - lastInput < IDLE_MS) return true;
// watching a video: no mouse/keyboard input is expected while it plays
if (G && Array.prototype.some.call(G.root.querySelectorAll('video'), function(v){ return !(v.muted && v.autoplay) && !v.paused && !v.ended; })) return true;
// inside an embedded video / simulation (YouTube, Drive, etc.): input there is not visible to this page
var a = document.activeElement;
return !!(a && a.tagName === 'IFRAME' && G && G.root.contains(a) && now - lastInput < VIDEO_IDLE_MS);
}
function words(root){
var t = root.textContent || '';
if (G && G.lock && root.contains(G.lock)) t = t.replace(G.lock.textContent || '', ' ');
var m = t.trim().match(/\S+/g); return m ? m.length : 0;
}
function mediaSec(root){
var s = 0;
Array.prototype.forEach.call(root.querySelectorAll('video'), function(v){
if (v.muted && v.autoplay) return; // decorative loops
s += (v.duration > 0 && isFinite(v.duration)) ? v.duration / VIDEO_SPEED : VIDEO_DEFAULT_SEC;
});
Array.prototype.forEach.call(root.querySelectorAll('iframe'), function(f){
var d = +(f.getAttribute('data-duration') || (f.parentNode && f.parentNode.getAttribute && f.parentNode.getAttribute('data-duration')) || 0);
s += d > 0 ? d / VIDEO_SPEED : IFRAME_DEFAULT_SEC;
});
return s;
}
function needSec(id, root){
var o = window.TD_GATE_MIN_SEC;
if (typeof o === 'number') return Math.max(0, o);
if (o && typeof o === 'object' && typeof o[id] === 'number') return Math.max(0, o[id]);
var reading = Math.min(MAX_SEC, Math.max(MIN_SEC, words(root) / READ_WPM * 60 * MIN_SHARE));
return Math.round(reading + mediaSec(root));
}
function minsLeft(){ return Math.max(1, Math.ceil((G.need - G.active) / 60)); }

/* ---------- attempts (module checks) ---------- */
function tries(id){ return +(store(gkey(id) + '-tries') || 0) || 0; }
function setTries(id, n){ store(gkey(id) + '-tries', String(n)); }
function triesLeft(id){ return Math.max(1, MAX_TRIES - tries(id)); }
function resetModule(id){
if (G && G.id === id) detach(); // detach saves the old time: clear after it
store(gkey(id), '[]'); store(gkey(id) + '-time', '0'); setTries(id, 0);
}

/* ---------- what has to be opened ---------- */
// Clickable items: done once clicked, or when already shown/selected (a tab or option open by default).
var CLICK = ['summary', '[data-flip]', '[data-myth]', '[data-oq]', '.qa-q', '.dt-btn', '[data-lt]', '[data-dot]', '[data-video]', '#ageSeg button', '[data-cmp] button', '#loopPlay'];
// tabs / carousel dots: shown once they are the current one
var ON_SEL = /\b(dt-btn)\b/;
var G = null; // the gate of the module on screen
var MC = false; // multi-courses engine

function itemsOf(root){
var out = [];
CLICK.forEach(function(sel, si){
root.querySelectorAll(sel).forEach(function(el, i){
out.push({ key:'c' + si + '-' + i, el:el, show:sel === 'summary' ? el.parentNode : el,
auto:function(){
if (el.getAttribute('aria-pressed') === 'true') return true;
if (MC && (el.classList.contains('on') || (el.classList.contains('acc-h') && el.parentNode && el.parentNode.classList.contains('open')))) return true;
if ((ON_SEL.test(el.className) || el.hasAttribute('data-lt') || el.hasAttribute('data-dot')) && (el.classList.contains('on') || el.getAttribute('aria-current') === 'true')) return true;
return sel === '.qa-q' && el.parentNode && el.parentNode.classList.contains('open'); // accordion item open by default
} });
});
});
root.querySelectorAll('iframe').forEach(function(f, i){ out.push({ key:'f' + i, el:f, show:f.parentNode }); });
root.querySelectorAll('video').forEach(function(v, i){
if (v.muted && v.autoplay) return; // decorative loops
out.push({ key:'v' + i, el:v, show:v, auto:function(){ return v.duration > 0 && v.currentTime / v.duration >= 0.8; } });
});
root.querySelectorAll('.stc').forEach(function(c, i){
out.push({ key:'s' + i, el:c, show:c, auto:function(){ var d = c.querySelectorAll('[data-s]'); return d.length > 0 && Array.prototype.every.call(d, function(b){ return b.classList.contains('seen') || b.classList.contains('on'); }); } });
});
root.querySelectorAll('.srow').forEach(function(r, i){
out.push({ key:'r' + i, el:r, show:r, auto:function(){ return r.classList.contains('ok') || r.classList.contains('ko'); } });
});
return out;
}

function save(){ if (G) store(G.skey, JSON.stringify(Object.keys(G.done))); }
function saveTime(){ if (G) store(G.tkey, String(Math.round(G.active))); }
function pending(){
if (!G) return [];
var p = [];
G.items = itemsOf(G.root); // re-read: engines re-render parts of the page
G.items.forEach(function(it){
if (!G.done[it.key] && it.auto && it.auto()){ G.done[it.key] = 1; save(); }
it.show.classList.toggle('tdg-todo', !G.done[it.key]);
if (!G.done[it.key]) p.push(it);
});
// things to do outside this module (multi-courses: other courses, intro cards)
(G.moreEls || []).forEach(function(el){ el.classList.remove('tdg-todo'); });
G.moreEls = G.more ? G.more() : [];
G.moreEls.forEach(function(el){ el.classList.add('tdg-todo'); p.push({ show:el }); });
return p;
}
function visible(el){ return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length); }

function attach(o){
detach();
if (!o.root) return;
var skey = gkey(o.id), done = {};
try { (JSON.parse(store(skey) || '[]') || []).forEach(function(k){ done[k] = 1; }); } catch(e){}
G = { id:o.id, root:o.root, cta:o.cta, onDone:o.onDone, more:o.more || null, quiz:!!o.quiz, skey:skey, done:done, items:[], finished:false,
tkey:skey + '-time', active:+(store(skey + '-time') || 0) || 0, need:0, last:Date.now(), lastSave:0 };
// end of the module: a marker right before the call to action
var mark = document.createElement('div'); mark.style.cssText = 'height:1px'; G.mark = mark;
var first = o.root.querySelector(o.anchor || o.cta);
if (first && first.parentNode) first.parentNode.insertBefore(mark, first); else o.root.appendChild(mark);
G.lock = document.createElement('div'); G.lock.className = 'tdg-lock';
if (mark.parentNode) mark.parentNode.insertBefore(G.lock, mark.nextSibling);
G.need = needSec(o.id, o.root);
if ('IntersectionObserver' in window){
G.io = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting && G){ G.done.end = 1; save(); tick(); } }); });
G.io.observe(mark);
} else G.done.end = 1;
G.timer = setInterval(tick, 700);
tick();
}
function detach(){
if (!G) return;
saveTime();
clearInterval(G.timer); if (G.io) G.io.disconnect();
if (G.lock && G.lock.parentNode) G.lock.parentNode.removeChild(G.lock);
G.root.querySelectorAll('.tdg-todo').forEach(function(e){ e.classList.remove('tdg-todo'); });
(G.moreEls || []).forEach(function(e){ e.classList.remove('tdg-todo'); });
G.root.querySelectorAll('[data-tdg-locked]').forEach(function(b){ b.removeAttribute('data-tdg-locked'); if (b.dataset.tdgWasEnabled){ b.disabled = false; delete b.dataset.tdgWasEnabled; } });
G = null;
}
function tick(){
if (!G) return;
if (!document.body.contains(G.root) || !document.body.contains(G.mark)){ detach(); return; }
// active time on this module (counted until it unlocks)
var now = Date.now(), d = Math.min(now - G.last, 2000) / 1000; G.last = now;
if (!G.finished && isActive(now)){ G.active += d; if (now - G.lastSave > 5000){ G.lastSave = now; saveTime(); } }
// content added after opening, video lengths loaded later: the requirement can only grow
if (!G.finished && typeof window.TD_GATE_MIN_SEC !== 'number') G.need = Math.max(G.need, needSec(G.id, G.root));
// started a video / simulation: the focus is inside its frame
var a = document.activeElement;
if (a && a.tagName === 'IFRAME') G.items.forEach(function(it){ if (it.el === a && !G.done[it.key]){ G.done[it.key] = 1; save(); } });
var p = pending(), n = p.length + (G.done.end ? 0 : 1);
var timeOk = G.active >= G.need;
var btns = G.root.querySelectorAll(G.cta);
if (n === 0 && timeOk){
btns.forEach(function(b){ if (b.hasAttribute('data-tdg-locked')){ b.removeAttribute('data-tdg-locked'); if (b.dataset.tdgWasEnabled){ b.disabled = false; delete b.dataset.tdgWasEnabled; } } });
if (G.quiz){ G.lock.className = 'tdg-lock tdg-ok'; G.lock.style.display = ''; G.lock.innerHTML = '<span>' + tx('ready', triesLeft(G.id)) + '</span>'; }
else G.lock.style.display = 'none';
if (!G.finished){ G.finished = true; saveTime(); if (G.onDone) try { G.onDone(); } catch(e){} }
return;
}
btns.forEach(function(b){ if (!b.hasAttribute('data-tdg-locked')){ b.setAttribute('data-tdg-locked', ''); if (!b.disabled){ b.dataset.tdgWasEnabled = '1'; b.disabled = true; } } });
G.lock.className = 'tdg-lock'; G.lock.style.display = '';
if (n === 0){
// everything opened, only the time is missing: no "Show me" button
G.lock.innerHTML = '<span>' + tx('wait', minsLeft()) + '</span>';
return;
}
G.lock.innerHTML = '<span>' + tx('lock', n) + (p.length ? '' : ' ' + tx('end')) + (timeOk ? '' : ' ' + tx('also', minsLeft())) + '</span>';
var go = document.createElement('button'); go.type = 'button'; go.textContent = tx('show');
go.onclick = function(){
var t = p.filter(function(it){ return visible(it.show); })[0];
var el = t ? t.show : G.mark;
el.scrollIntoView({ behavior:'smooth', block:'center' });
if (t){ el.classList.remove('tdg-flash'); void el.offsetWidth; el.classList.add('tdg-flash'); }
};
G.lock.appendChild(go);
}
// record clicks on the items (capture: works even when the engine stops the event)
document.addEventListener('click', function(e){
if (!G) return;
var hit = G.items.filter(function(it){ return it.el === e.target || it.el.contains(e.target); });
hit.forEach(function(it){ G.done[it.key] = 1; });
if (hit.length){ save(); setTimeout(tick, 50); }
// a click on a locked call to action: show what is missing instead
var b = e.target.closest && e.target.closest('[data-tdg-locked]');
if (b){
e.preventDefault(); e.stopPropagation();
var go = G.lock && G.lock.querySelector('button');
if (go) go.click();
else if (G.lock){ G.lock.scrollIntoView({ behavior:'smooth', block:'center' }); G.lock.classList.remove('tdg-flash'); void G.lock.offsetWidth; G.lock.classList.add('tdg-flash'); }
}
}, true);
// leaving or hiding the page: keep the time counted so far
addEventListener('visibilitychange', function(){ if (document.visibilityState === 'hidden') saveTime(); });
addEventListener('pagehide', function(){ saveTime(); });

// Read by engines that pass a reading module as soon as it opens (the Refunds engine):
// true = hold it, the gate will pass it when everything is open and the time is reached.
window.TD_GATE_HOLD = function(id){ return !!(G && G.id === id && !G.finished) || window.__tdgOpening === id; };

/* ---------- engine adapters ---------- */
function wrap(name, after){
var orig = window[name]; if (typeof orig !== 'function' || orig.__tdg) return;
var w = function(){ var r = orig.apply(this, arguments); try { after.apply(this, arguments); } catch(e){} return r; };
w.__tdg = true; window[name] = w;
}
function lockDevMode(){
// engine developer mode only with the review key
['devUnlockAll', 'toggleDevMode'].forEach(function(nm){
var f = window[nm]; if (typeof f !== 'function' || f.__tdgDev) return;
var w = function(){}; w.__tdgDev = true; window[nm] = w;
});
// EM / PL / course engines: developer panel and "unlock all" (they only check ?dev=1 and a code written in the page)
var sd = window.setDev;
if (typeof sd === 'function' && !sd.__tdgDev){ var ws = function(on){ if (!on) return sd.apply(this, arguments); }; ws.__tdgDev = true; window.setDev = ws; }
var od = window.openDev;
if (typeof od === 'function' && !od.__tdgDev){ var wo = function(){}; wo.__tdgDev = true; window.openDev = wo; }
// a developer mode switched on earlier: give back the real progress
try { if (typeof window.isDevMode === 'function' && window.isDevMode() && typeof window.restoreRealProgress === 'function'){ window.restoreRealProgress(); if (typeof window.showDevBadge === 'function') window.showDevBadge(false); if (typeof window.renderHome === 'function') window.renderHome(); } } catch(e){}
try { if (typeof P !== 'undefined' && P && P.dev && typeof sd === 'function') sd(false); } catch(e){}
}
function hasQuiz(id){
try { if (typeof QUIZ !== 'undefined' && QUIZ && QUIZ[id] && QUIZ[id].length) return true; } catch(e){}
try { if (typeof C !== 'undefined' && C && C.quiz && C.quiz[id] && C.quiz[id].length) return true; } catch(e){}
return false;
}
// after a failed check: count the attempt; returns the note to show and whether the module was reset
function failAttempt(id){
var t = tries(id) + 1;
if (t >= MAX_TRIES){ resetModule(id); return { text:tx('reset'), reset:true }; }
setTries(id, t); return { text:tx('left', MAX_TRIES - t), reset:false };
}
function noteEl(text){ var d = document.createElement('div'); d.className = 'tdg-note'; d.textContent = text; return d; }
function coreQuizAdapter(){
// EM / PL / course engines: #opts .qopt buttons, QZ = { m, i, items }, finishCheck(m, score, n)
var cur = function(){ try { return (typeof QZ !== 'undefined' && QZ && QZ.m) ? QZ : null; } catch(e){ return null; } };
var isOk = function(id){ try { return passed(id); } catch(e){ return false; } };
document.addEventListener('click', function(e){
var b = e.target.closest && e.target.closest('#opts .qopt'); if (!b) return;
var z = cur(); if (!z) return;
var box = document.getElementById('opts');
// one answer per question (some engines let a second click change the score)
if (box && box.classList.contains('answered')){ e.preventDefault(); e.stopPropagation(); return; }
setTimeout(function(){
try {
if (isOk(z.m.id)) return;
var q = z.items[z.i]; if (!q || q.open || +b.dataset.o === q.a) return;
var r = document.querySelector('#opts [data-o="' + q.a + '"]'); if (r) r.classList.remove('right');
var fb = document.getElementById('qfb'); if (fb) fb.innerHTML = tx('wrong');
} catch(err){}
}, 0);
}, true);
wrap('finishCheck', function(m){
if (!m || !m.id) return;
if (isOk(m.id)){ setTries(m.id, 0); return; }
var r = failAttempt(m.id), box = document.querySelector('#view .result'); if (!box) return;
var row = box.querySelector('.btn-row'); box.insertBefore(noteEl(r.text), row || null);
if (r.reset) box.querySelectorAll('[data-retake]').forEach(function(x){ x.removeAttribute('data-retake'); x.setAttribute('data-go', m.id); }); // read the module again first
});
}
function attendanceQuizAdapter(){
// Attendance engine: answerQ(idx) / resolveSort(choice) on quizData[qi], showResults(pct, passed) for currentModule
var mod = function(){ try { return currentModule; } catch(e){ return null; } };
var open = function(id){ return isPassed(id) || id === 'final'; };
wrap('answerQ', function(idx){
var id = mod(); if (id == null || open(id)) return;
var q = quizData[qi]; if (!q || idx === q.c) return;
var o = document.querySelectorAll('#qopts .qopt')[q.c]; if (o) o.classList.remove('correct');
var fb = document.getElementById('qfb'); if (fb) fb.innerHTML = tx('wrong');
});
wrap('resolveSort', function(choice){
var id = mod(); if (id == null || open(id)) return;
var it = quizData[qi]; if (!it || choice === it.type) return;
var z = document.getElementById(it.type === 'trash' ? 'strash' : 'streasure'); if (z) z.classList.remove('correct-choice');
var fb = document.getElementById('sfb'); if (fb) fb.innerHTML = tx('wrong');
});
wrap('showResults', function(){
var id = mod(); if (id == null || id === 'final') return;
if (isPassed(id)){ setTries(id, 0); return; }
var r = failAttempt(id), body = document.getElementById('rbody'); if (!body) return;
var sub = body.querySelector('.rsub'); if (sub && sub.parentNode) sub.parentNode.insertBefore(noteEl(r.text), sub.nextSibling); else body.appendChild(noteEl(r.text));
if (r.reset) body.querySelectorAll('button[onclick*="startQuiz"],button[onclick*="startSort"]').forEach(function(x){ x.parentNode.removeChild(x); }); // only "Review module" is left
});
}
function quizAdapter(){
// mini-training / Refunds engine: hide the right answer until the module is passed, count the attempts
var curId = function(){ try { return ixState && ixState.m && ixState.m.id; } catch(e){ return null; } };
var hideAnswer = function(){
var fb = document.getElementById('ixFbBox'); if (fb) fb.innerHTML = '<div class="ix-fb bad">' + tx('wrong') + '</div>';
};
wrap('ixAnswerChoice', function(oi){
var id = curId(); if (!id || isPassed(id)) return;
var item = ixState.m.ix.items[ixState.i]; if (!item || oi === item._correct) return;
var el = document.getElementById('ixOpt' + item._correct); if (el) el.classList.remove('correct');
hideAnswer();
});
wrap('ixAnswerSort', function(zi){
var id = curId(); if (!id || isPassed(id)) return;
var item = ixState.m.ix.items[ixState.i]; if (!item || zi === item.correctZone) return;
document.querySelectorAll('#ixZones .correct-zone').forEach(function(b){ b.classList.remove('correct-zone'); });
hideAnswer();
});
wrap('showModuleResult', function(m, pct, passed){
if (!m || !m.ix) return;
var note;
if (passed){ setTries(m.id, 0); return; }
var t = tries(m.id) + 1;
if (t >= MAX_TRIES){ resetModule(m.id); note = tx('reset'); }
else { setTries(m.id, t); note = tx('left', MAX_TRIES - t); }
var body = document.getElementById('resultsBody'); if (!body) return;
var div = document.createElement('div'); div.className = 'tdg-note'; div.textContent = note;
var sub = body.querySelector('.rsub'); if (sub && sub.parentNode) sub.parentNode.insertBefore(div, sub.nextSibling); else body.appendChild(div);
});
}
function setup(){
lockDevMode();
// Multi-courses engine (Coding / Creative PL): one course at a time in #course, call to action at its end (.c-end)
var MA = window.TD_TIME_ADAPTER, course = document.getElementById('course');
if (MA && course && window.MC_CONTENT){
MC = true; CLICK.push('.acc-h', '.flip', '.m-step', '[data-act="tour"]');
var ids = MA.modules(), dkey = 'kl-td-gate-' + tid() + '-courses', mkey = 'kl-td-gate-' + tid() + '-intro';
var rd = function(k){ try { return JSON.parse(store(k) || '{}') || {}; } catch(e){ return {}; } };
// intro cards (section 2): remember which ones were flipped
document.addEventListener('click', function(e){
var f = e.target.closest && e.target.closest('#sec-mini .flip'); if (!f) return;
var d = rd(mkey); d[Array.prototype.indexOf.call(document.querySelectorAll('#sec-mini .flip'), f)] = 1; store(mkey, JSON.stringify(d));
}, true);
var hook = function(){
var art = course.querySelector('.course'), tab = document.querySelector('#tabs .tab.on');
if (!art || !tab || MA.done()){ detach(); return; } // a finished training is never locked
if (G && G.root === art) return;
var i = +tab.dataset.i, id = ids[i];
attach({ id:id, root:art, cta:'.c-end .btn-y', anchor:'.c-end',
onDone:function(){ var d = rd(dkey); d[id] = 1; store(dkey, JSON.stringify(d)); },
more: i !== ids.length - 1 ? null : function(){
var d = rd(dkey), m = rd(mkey), out = [];
ids.forEach(function(x, k){ if (x !== id && !d[x]){ var t = document.querySelector('#tabs .tab[data-i="' + k + '"]'); if (t) out.push(t); } });
document.querySelectorAll('#sec-mini .flip').forEach(function(f, k){ if (!m[k] && !f.classList.contains('on')) out.push(f); });
return out;
} });
};
new MutationObserver(function(){ setTimeout(hook, 0); }).observe(course, { childList:true });
hook();
return;
}
// Refunds / mini-training engine: openModule(index), content in #contentBody, call to action #moduleCta
if (typeof window.startInteraction === 'function' && document.getElementById('contentBody')){
var origOpen = window.openModule;
if (typeof origOpen !== 'function' || origOpen.__tdg) return;
quizAdapter();
var w = function(idx){
var m = MODULES[idx], hold = m && !isPassed(m.id);
if (hold) window.__tdgOpening = m.id;
var r; try { r = origOpen.apply(this, arguments); } finally { window.__tdgOpening = null; }
try {
var shown = document.getElementById('screen-content'), on = shown && shown.classList.contains('active');
if (hold && on && currentModule === m.id) attach({ id:m.id, root:document.getElementById('contentBody'), cta:'#moduleCta', quiz:!!m.ix,
onDone:function(){ if (!m.ix && !isPassed(m.id)) setResult(m.id, 100, true); } });
else detach();
} catch(e){}
return r;
};
w.__tdg = true; window.openModule = w;
return;
}
// Attendance engine: openModule(module), content in #cbody, call to action .ctabtn
if (document.getElementById('cbody') && typeof window.completeReading === 'function'){
attendanceQuizAdapter();
wrap('openModule', function(m){
if (m && typeof m === 'object' && !isPassed(m.id)) attach({ id:m.id, root:document.getElementById('cbody'), cta:'.ctabtn', quiz:!!(m.sortGame || hasQuiz(m.id)) });
else detach();
});
return;
}
// EM / PL core engine (inline): renderModule(m), content in #view, call to action inside #mcta
if (typeof window.renderModule === 'function' && document.getElementById('view')){
coreQuizAdapter();
wrap('renderModule', function(m){
if (m && !passed(m.id) && m.id !== 'm0' && m.check !== 'survey') attach({ id:m.id, root:document.getElementById('view'), cta:'#mcta button', anchor:'#mcta', quiz:hasQuiz(m.id) || m.check === 'chat' });
else detach();
});
if (typeof window.route === 'function') window.route(); // the first page was drawn before this script loaded
}
}
// the surveys scripts wrap openModule on DOMContentLoaded: wrap after them
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function(){ setTimeout(setup, 0); });
else setTimeout(setup, 0);
// leaving the module screen: stop the gate
addEventListener('hashchange', function(){ setTimeout(function(){ if (G && !document.body.contains(G.mark)) detach(); }, 0); });
})();
