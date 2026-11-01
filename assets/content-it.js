/* ============================================================
   EM course training · Minecraft CraftForge (Beginner + Intermediate) [2240 · 2241] · ITALIAN
   Translated from content-en.js. Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names, commands and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by region (see COURSE.code and the 'bo' section).
   ============================================================ */
window.COURSE = { lang: 'it' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Formazione sul corso EM',
  footer: 'kodland · Nuovo modello educativo · Formazione sul corso',
  devLink: '🛠 Sviluppatore',
  logoSub: 'Nuovo modello educativo',
  navHome: '← Home',
  navBackModule: '← Torna al modulo',
  moduleN: 'Modulo {n}',
  badgeStart: 'Inizia →',
  badgeLocked: '🔒 Completa il modulo {n}',
  badgeDone: '✓ Completato · {score}%',
  progLabel: 'moduli completati',
  progAllDone: 'Moduli completati 🎉',
  eyebrow: '{course} · Modulo {n} di {total}',
  ctaTitle: 'Verifica del modulo',
  ctaText: '{n} brevi domande. Per superare la verifica serve almeno il 70%.',
  lockSim: '🔒 Completa la simulazione qui sopra per sbloccare la verifica.',
  startCheck: 'Inizia la verifica →',
  retake: '🔁 Ripeti la verifica',
  qmeta: '{e} Verifica del modulo {n} · Domanda {i} di {total}',
  fbRight: '✅ <b>Corretto!</b> ',
  fbWrong: '❌ <b>Non proprio.</b> ',
  nextQuestion: 'Domanda successiva →',
  seeResult: 'Vedi il risultato →',
  passedTitle: 'Verifica superata!',
  failTitle: 'Ci sei quasi',
  scoreLine: 'Hai risposto correttamente a <b>{score} domande su {n}</b>.',
  failText: 'Serve almeno il 70%. Ripassa il modulo e riprova — puoi ripetere la verifica tutte le volte che vuoi.',
  nextUnlocked: '<b>Modulo {n} · {title}</b> è ora sbloccato.',
  goModule: 'Vai al modulo {n} →',
  allDoneText: 'Hai completato tutti i moduli di questa formazione.',
  seeNext: 'Scopri il prossimo passaggio →',
  reviewModule: '📖 Ripassa il modulo',
  homeDoneTitle: 'Moduli completati!',
  homeDoneText: 'Un ultimo passaggio: il test DST nella pagina della formazione sull’LMS.',
  homeDoneBtn: 'Scopri come proseguire →',
  doneBadge: '✓ Fatto',
  doneBack: 'Torna ai moduli',
  lockedTitle: 'Ancora bloccato',
  lockedModule: 'Completa prima il modulo {n}.',
  lockedStep: 'Completa il passaggio precedente per sbloccare questo.',
  ok: 'OK',
  linkOpen: 'Apri ↗',
  projPlay: '▶ Apri ↗',
  simOpen: '▶ Apri la simulazione qui',
  simClose: '✕ Chiudi la simulazione',
  simNewTab: 'Apri in una nuova scheda ↗',
  simDone: '✅ Simulazione completata',
  simTodo: '○ Simulazione da completare',
  checkTag: 'Spunta le voci',
  mythTag: 'Mito',
  mythTap: 'Tocca per scoprire la realtà →',
  mythReality: 'Realtà ✓',
  sortWrong: '✗ Non proprio.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'mccf';
COURSE.code = '2240';
COURSE.title = 'Minecraft CraftForge';
COURSE.color = '#16A34A';

COURSE.home = {
  kicker: '🎓 Formazione sul corso · [2240 · 2241]',
  title: 'Minecraft <span class="hl">CraftForge</span>',
  lead: '<b>Beginner</b> — Per studenti di 8–9 anni, che in Minecraft passano da giocatori a creatori: creano il proprio eroe e la propria casa, costruiscono meccanismi di redstone e programmano in Lua un robot Assistente. <b>Intermediate</b> — Per studenti di 10–12 anni, che scrivono le leggi del mondo di Minecraft con i data pack e creano programmi Python che costruiscono ponti, torri e mondi interi. Quattro moduli: i contenuti dei corsi Beginner e Intermediate, le competenze che ti servono per il corso e gli aspetti tecnici delle lezioni.',
  facts: [
    ['🧑‍💻', '<b>Procedi al tuo ritmo.</b> I tuoi progressi vengono salvati in questo browser. Ogni modulo termina con una breve verifica.'],
    ['⚡', '<b>Con attività pratiche.</b> Una simulazione di Kodland Sparks per esercitarti a pubblicare una costruzione Minecraft e a risolvere il problema più comune.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Prima di iniziare:</b> completa la <b>formazione principale sul nuovo modello educativo (EM)</b>. Questa formazione sul corso viene dopo e si basa su ciò che hai visto lì: Backoffice e le note per il tutor (Teacher Notes), Classroom con Follow Mode, il tour di Kodland Sparks e la qualità della lezione.' },
  { kind:'warn', e:'🔄', html:'<b>I contenuti delle lezioni in Backoffice vengono aggiornati continuamente.</b> Le lezioni migliorano grazie al feedback di studenti e tutor. Niente paura: ogni volta che qualcosa cambia, riceverai un avviso in anticipo per preparare la lezione.' }
];

/* ---------------- Modules ----------------
   Beginner course content → Intermediate course content → Skills for the course → technical side (+ final survey, added by shared/final-survey.js).
   The Skills module is drawn by assets/skills.js from COURSE.skills (end of this file). */
COURSE.modules = [
  { id:'beg', n:1, e:'⛏️', color:'#16A34A', title:'I contenuti del corso · Beginner',
    desc:'Le informazioni generali sul corso, che cosa ottiene lo studente e la prima lezione del Modulo 1 del corso.',
    obj:'Prepararti a tenere la prima lezione di Minecraft CraftForge Beginner. In questa lezione, gli studenti di 8–9 anni creano la propria skin, la pubblicano su Kodland Sparks, entrano con la skin nel mondo del corso e iniziano a costruire la propria casa.',
    offer:[['🧱','Conoscere le informazioni generali sul corso e che cosa ottiene lo studente.'],['📖','Sapere che cosa succede nella prima lezione.'],['🤖','Capire come si usa Sparks AI.'],['📘','Leggere la prima lezione e le relative note per il tutor in Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'Il corso', blocks:[
        { t:'meta', items:[['🧒','Età','8–9 anni'],['⏱️','Lezione','60 min'],['📚','Programma','40 lezioni · 10 moduli'],['🌙','Linguaggio','Lua']] },
        { t:'trio', items:[
          ['🎬','Prima il risultato','Apri ogni lezione mostrando il risultato finale e dicendo che cosa impareranno gli studenti. Poi mostri il percorso sul tuo schermo e li guidi un passo alla volta.'],
          ['🛠️','Da giocatore a creatore','In un gioco, le regole le ha fatte qualcun altro. Qui lo studente costruisce, programma un robot, crea meccanismi — e mostra il risultato agli altri.'],
          ['🔍','Gli errori fanno parte del percorso','Quando qualcosa non funziona: <i>Che cosa vedo? Perché succede? Che cosa provo? Ha funzionato?</i> Alcune lezioni prevedono un errore voluto sul tuo schermo, perché gli studenti ne trovino da soli la causa.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Gli studenti pubblicano i loro lavori su <b>Kodland Sparks</b>, il loro portfolio, fin dalla Lezione 1. <b>Sparks AI</b> propone idee e feedback, ma è lo studente a decidere che cosa usare. È integrato nelle schede, quindi gli studenti non devono aprire Sparks a parte; di solito inviano una richiesta per attività.' }
      ]},
      { id:'goals', e:'🎓', title:'Che cosa ottiene lo studente', blocks:[
        { t:'p', html:'Alla fine del corso, lo studente raggiungerà questi risultati:' },
        { t:'cards', cols:2, items:[
          ['🧱','Crea progetti','Oltre nove progetti nel suo portfolio di Kodland Sparks e un progetto finale: la sua terra, dove costruzioni, meccanismi e programmi funzionano insieme.'],
          ['🤖','Programma un robot in Lua','Comandi, argomenti, variabili, cicli, condizioni e funzioni proprie. Il robot costruisce, scava, evita gli ostacoli e completa missioni — e lo studente impara a scomporre un compito complesso in passaggi più semplici.'],
          ['⚡','Costruisce meccanismi e logica','La redstone è l’«elettricità» di Minecraft: leve, fili, lampade, porte, pistoni e trappole. Lo studente impara la logica «se–allora» e vede subito il risultato.'],
          ['🏰','Crea costruzioni e giochi','Costruisce facendo attenzione a forma, colore e luce, e crea un minigioco con regole proprie a cui giocano i compagni.'],
          ['💬','Parla del proprio lavoro con sicurezza','Alla fine di ogni lezione spiega come funziona il suo lavoro e, a fine corso, presenta il progetto finale al gruppo.'],
          ['🧠','Competenze per la vita','Creatività, lavoro di squadra (provare i giochi dei compagni e dare feedback), comunicazione e pensiero critico: trovare i bug e usare con giudizio i suggerimenti di Sparks AI.']
        ]}
      ]},
      { id:'les', e:'📖', title:'La prima lezione', blocks:[
        { t:'p', html:'Il Modulo 1 del corso, <b>«Primo fuoco. Il mio mondo e i primi comandi»</b>, si conclude con il progetto <b>«Il mio eroe e la mia casa»</b>. Apri la prima lezione e leggi che cosa devi sapere, il risultato chiave, il tuo ruolo e i punti a cui prestare attenzione.' },
        { t:'lessons', key:'beg', items:[
          { tab:'M1L1', e:'🔥', h:'Lezione 1 — Primo fuoco', p:'La prima lezione del corso (7 schede più i compiti). Gli studenti avviano il launcher, conoscono il gruppo, disegnano e pubblicano la propria skin su Sparks, la indossano per entrare nel mondo e iniziano a costruire la propria casa su un’isola.',
            acc:[['📚','Che cosa devi sapere','<ul><li>Il percorso: collegamento e launcher → che cosa ci aspetta → skin su Sparks mentre il launcher scarica il gioco → indossare la skin, entrare nel mondo e teletrasportarsi sull’isola → costruire la casa → presentazione dei progetti → riepilogo e compiti.</li><li>Lo <b>studio delle skin</b> si apre direttamente nella scheda della lezione (pulsante <b>Expand</b> per lo schermo intero). Lo studente non deve uscire dalla lezione per andare su Sparks.</li><li>Nel launcher: <b>Create → Skins → la propria skin → Wear</b>, poi <b>Play</b> con il codice del mondo, e <b>F5</b> per vedersi in terza persona.</li><li>Gli studenti costruiscono in <b>modalità creativa</b>: muri, un ingresso e un cartello con il proprio nickname. Il tetto si costruisce a casa, come compito.</li></ul>'],
                 ['🎯','Risultato chiave','<ul><li>🏁 La skin è <b>pubblicata su Sparks e il suo link è nella scheda della lezione</b>. Tutti devono arrivarci entro il minuto 29 circa; questa fase non si accorcia mai.</li><li>Ogni studente entra nel mondo con la propria skin e si trova sull’isola.</li><li>La casa ha muri, un ingresso e un cartello con il nickname.</li></ul>'],
                 ['🧑‍🏫','Il tuo ruolo','<ul><li>Presentati e fai conoscenza con il gruppo: dai la parola a tutti e usa i nomi per tutta la lezione.</li><li>Di’ ad alta voce l’obiettivo della lezione: «Oggi ognuno di voi creerà la propria skin e tutti vi riconosceranno nel mondo di gioco».</li><li>Chiedi: «In che cosa creare è diverso dal semplice giocare?» — in un gioco le regole le ha fatte qualcun altro; qui crei tu e mostri il risultato agli altri.</li><li><b>Errore voluto, solo sul tuo schermo:</b> entra nel mondo senza premere <b>Wear</b> → sei uguale a tutti gli altri. Chiedi perché, poi correggi. Così, quando tocca a loro, gli studenti lo fanno subito nel modo giusto.</li></ul>'],
                 ['📌','Attenzione','<ul><li>Nella L1 è molto probabile che a qualcuno il launcher non parta. La skin si disegna nel browser, quindi lo studente continua a lavorare mentre tu sistemi il launcher durante il lavoro autonomo.</li><li><b>Esc</b> non funziona dentro lo studio a schermo intero: usa il pulsante <b>Collapse</b> in alto.</li><li>Il disegno rischia di non finire mai: «Deve essere tua, non perfetta. Puoi finirla a casa».</li><li>Controlla in Backoffice che i link siano arrivati davvero, non solo che siano stati mostrati sullo schermo.</li></ul>'],
                 ['⚙️','Aspetti tecnici','<ul><li>Il giorno prima, invia i link del launcher nella chat del gruppo e chiedi agli studenti di installarlo in anticipo.</li><li>Fai tu, in prima persona, tutto il percorso: skin su Sparks → pubblicazione → Skins → Wear → entrare nel mondo con il codice → teletrasporto sull’isola.</li><li>Codice del mondo: <b>Welcome to CraftForge</b> (scheda Play). Il comando di teletrasporto è nelle note per il tutor e nella scheda.</li><li>Compiti: finire la casa, fare uno screenshot (<b>Win + Stamp</b> su Windows, <b>Cmd + Shift + 4</b> su Mac), allegarlo a <b>Sparks AI</b>, integrato direttamente nella scheda dei compiti, e inviare una richiesta. Poi consegnare lo screenshot con una frase su che cosa ha finito e che cosa ha suggerito Sparks.</li></ul>']] },
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'La prima nota per il tutor di ogni lezione contiene il piano completo: la sintesi, il risultato chiave, i tempi di ogni scheda, il tuo ruolo e i rischi. La Lezione 1 ha anche un video di preparazione. <b>Leggi tutte le note per il tutor prima della lezione.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Leggi la prima lezione in Backoffice', blocks:[
        { t:'p', html:'Prima della verifica, apri il corso in Backoffice e leggi la prima lezione con calma — lì trovi tutte le schede attività e le note per il tutor. Non c’è un limite di tempo.' },
        { t:'link', href:'https://bo.kodland.org/courses/2240', e:'📘', title:'Apri il corso in Backoffice', small:'[2240] Minecraft CraftForge Beginner — le lezioni e le relative note per il tutor' },
        { t:'callout', kind:'warn', e:'🔄', html:'I contenuti delle lezioni in Backoffice continueranno a essere aggiornati grazie al feedback di studenti e tutor. Ogni volta che qualcosa cambia, riceverai un avviso in anticipo per preparare la lezione.' }
      ]}
    ]},

  { id:'int', n:2, e:'📜', color:'#0EA5E9', title:'I contenuti del corso · Intermediate',
    desc:'Le informazioni generali sul corso, che cosa ottiene lo studente e la prima lezione del Modulo 1 del corso.',
    obj:'Prepararti a tenere la prima lezione di Minecraft CraftForge Intermediate. In questa lezione, gli studenti di 10–12 anni creano la loro prima legge per il mondo di Minecraft — una ricetta in un data pack — la provano nel gioco e la pubblicano su Kodland Sparks.',
    offer:[['🧱','Conoscere le informazioni generali sul corso e che cosa ottiene lo studente.'],['📖','Sapere che cosa succede nella prima lezione.'],['📦','Capire che cos’è un data pack e come ci lavorano gli studenti.'],['📘','Leggere la prima lezione e le relative note per il tutor in Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'Il corso', blocks:[
        { t:'meta', items:[['🧒','Età','10–12 anni'],['⏱️','Lezione','90 min'],['📚','Programma','40 lezioni · 10 moduli'],['🐍','Linguaggio','Python']] },
        { t:'trio', items:[
          ['🎬','Prima il risultato','Apri ogni lezione mostrando il risultato finale e dicendo ad alta voce l’obiettivo. Poi mostri tutto il percorso sul tuo schermo e guidi gli studenti un passo alla volta.'],
          ['📜','Da giocatore a creatore','Di solito un giocatore segue le regole del mondo. Qui è lo studente a scriverle: ricette, drop, comandi e, più avanti, programmi Python che costruiscono nel mondo.'],
          ['🔍','Gli errori fanno parte del percorso','Quando il mondo non risponde: <i>Che cosa vedo? Perché succede? Che cosa provo? Ha funzionato?</i> Le lezioni prevedono verifiche programmate, perché gli studenti ne trovino da soli la causa.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Gli studenti pubblicano i loro lavori su <b>Kodland Sparks</b>, il loro portfolio, in ogni lezione. <b>Sparks AI</b> propone idee e scenari di test, ma è lo studente a decidere che cosa usare.' }
      ]},
      { id:'goals', e:'🎓', title:'Che cosa ottiene lo studente', blocks:[
        { t:'p', html:'Alla fine del corso, lo studente raggiungerà questi risultati:' },
        { t:'cards', cols:2, items:[
          ['🧱','Crea progetti','Oltre nove progetti nel suo portfolio di Kodland Sparks e un progetto finale originale.'],
          ['🐍','Python che costruisce','Scrive programmi Python che fanno comparire ponti, torri e motivi decorativi nel mondo di gioco. Comandi, argomenti, variabili, tipi di dati, cicli, condizioni e funzioni diventano strumenti di tutti i giorni.'],
          ['📜','Le regole del mondo','Con i data pack, stabilisce le proprie leggi per Minecraft: ricette, comandi personalizzati, timer, eventi e punteggi.'],
          ['🌍','Generatori e giochi','Scrive algoritmi che creano interi chunk del mondo e realizza minigiochi a cui giocano i compagni.'],
          ['🚀','Porta un’idea fino al Demo Day','Sviluppa un progetto dall’idea alla presentazione davanti al gruppo e spiega come funziona il codice.'],
          ['🧠','Competenze per la vita','Creatività, lavoro di squadra (testare i progetti dei compagni), comunicazione e pensiero critico: trovare i bug e valutare le risposte di Sparks AI invece di copiarle.']
        ]}
      ]},
      { id:'les', e:'📖', title:'La prima lezione', blocks:[
        { t:'p', html:'Il Modulo 1 del corso, <b>«Il codice del mondo. Primi programmi e leggi del mondo»</b>, si conclude con il progetto <b>«Monumento al codice»</b>. La prima lezione riguarda le <b>leggi del mondo in un data pack</b>. Aprila e leggi che cosa devi sapere, il risultato chiave, il tuo ruolo e i punti a cui prestare attenzione.' },
        { t:'lessons', key:'int', items:[
          { tab:'M1L1', e:'📜', h:'Lezione 1 — La prima traccia nel codice del mondo', p:'La prima lezione del corso (8 schede più i compiti). Gli studenti avviano il launcher, conoscono il gruppo, provano il simulatore di leggi, entrano nel mondo attraverso il Nether, creano la loro prima legge — una ricetta — in un data pack, la testano e la pubblicano su Sparks. Poi progettano una base con Sparks AI e la costruiscono.',
            acc:[['📚','Che cosa devi sapere','<ul><li>Un <b>data pack</b> è un insieme di leggi per il mondo. Le leggi si creano fuori dal mondo, nello studio del launcher, e il mondo le esegue ogni volta che entri.</li><li>Tipi di leggi: <b>ricetta</b>, <b>drop</b>, <b>comando</b> all’ingresso, <b>progresso</b>. Oggi: una ricetta.</li><li>Percorso: <b>Esc</b> e uscire dal mondo salvando → <b>Create → Data packs → Create data pack → Empty</b> → <b>Add → Recipe</b> → banco da lavoro, oggetti, risultato → <b>Save</b>.</li><li>Il codice del mondo si inserisce nella scheda <b>Play</b>. Gli studenti costruiscono in modalità creativa.</li></ul>'],
                 ['🎯','Risultato chiave','<ul><li>Entro il minuto 45 circa, tutti devono aver salvato un data pack con la propria ricetta.</li><li>🏁 Il data pack è <b>pubblicato su Sparks e il suo link è nella scheda della lezione</b> (scheda «Firma la legge», entro il minuto 60 circa). Questa fase non si accorcia mai.</li><li>Lo studente ha dato all’oggetto un nome proprio e lo ha creato su un banco da lavoro nel mondo.</li></ul>'],
                 ['🧑‍🏫','Il tuo ruolo','<ul><li>Presentati e fai conoscenza con il gruppo mentre il gioco si scarica; usa i nomi per tutta la lezione.</li><li>Di’ ad alta voce l’obiettivo: «Oggi ognuno di voi creerà la propria legge per Minecraft, la testerà nel gioco e la pubblicherà nel portfolio».</li><li>Non imporre le ricette: le idee devono essere diverse — è questo che rende personale il progetto. Chiedi: «Perché questo oggetto? A chi servirà?»</li><li><b>Verifica programmata:</b> togli un oggetto dal banco da lavoro → la ricompensa sparisce. Chiedi perché, poi usa le quattro domande. Loda lo studente che trova la causa, non solo quello che ci riesce al primo colpo.</li></ul>'],
                 ['📌','Attenzione','<ul><li>Il data pack non si salva → una delle tre parti del modulo della ricetta è vuota.</li><li>La legge non funziona → è stata salvata con il mondo aperto: esci ed entra di nuovo.</li><li>La ricetta non funziona → gli oggetti non sono disposti come nel modulo della ricetta, oppure lo studente li combina nell’inventario invece che su un banco da lavoro.</li><li>Il link non si apre → in «Who can see it?» non era selezionato <b>Everyone</b>: pubblica di nuovo.</li></ul>'],
                 ['⚙️','Aspetti tecnici','<ul><li>Il giorno prima, invia i link del launcher nella chat del gruppo.</li><li>Fai tu, in prima persona, tutto il percorso: codice del mondo → riva → uscire salvando → data pack con una ricetta → di nuovo nel mondo → banco da lavoro → ricompensa → pubblicazione su Sparks.</li><li>Codice del mondo: <b>Welcome to KodlandCraft</b>.</li><li>Compiti: aggiungere un’altra legge (modificare la ricetta, una nuova ricetta, oppure un comando/drop), testarla, pubblicare l’aggiornamento e inviare il link.</li></ul>']] },
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'La prima nota per il tutor di ogni lezione contiene il piano completo: la sintesi, il risultato chiave, i tempi di ogni scheda, il tuo ruolo e i rischi. La Lezione 1 ha anche un video di preparazione. <b>Leggi tutte le note per il tutor prima della lezione.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Leggi la prima lezione in Backoffice', blocks:[
        { t:'p', html:'Prima della verifica, apri il corso in Backoffice e leggi la prima lezione con calma — lì trovi tutte le schede attività e le note per il tutor. Non c’è un limite di tempo.' },
        { t:'link', href:'https://bo.kodland.org/courses/2241', e:'📘', title:'Apri il corso in Backoffice', small:'[2241] Minecraft CraftForge Intermediate — le lezioni e le relative note per il tutor' },
        { t:'callout', kind:'warn', e:'🔄', html:'I contenuti delle lezioni in Backoffice continueranno a essere aggiornati grazie al feedback di studenti e tutor. Ogni volta che qualcosa cambia, riceverai un avviso in anticipo per preparare la lezione.' }
      ]}
    ]},

  {
    id: 'skills',
    n: 3,
    e: '🧩',
    color: '#8B5CF6',
    title: 'Competenze per il corso',
    desc: 'Immersione in Minecraft · Logica di programmazione · Pratica di programmazione in Python · Data pack: le leggi del mondo',
    obj: 'Le competenze che servono a un tutor in questo corso, in quattro blocchi: il mondo di Minecraft, la logica di programmazione, la pratica in Python e i data pack. Ogni blocco termina con una breve verifica: ti serve il 70% per sbloccare il successivo.',
    offer: [
      ['🌍', 'Immersione in Minecraft'],
      ['🧠', 'Logica di programmazione'],
      ['🐍', 'Pratica di programmazione in Python'],
      ['📜', 'Data pack: le leggi del mondo']
    ],
    sections: [
      {
        id: 'skx',
        e: '🧩',
        title: 'Competenze per il corso',
        blocks: [
          { t:'skills' }
        ]
      }
    ]
  },

  { id:'tech', n:4, e:'⚙️', color:'#F03D9E', title:'Gli aspetti tecnici delle lezioni',
    desc:'Il Kodland Launcher, un buon inizio, la pubblicazione su Sparks e i problemi più comuni.',
    obj:'Scoprire che cosa fa funzionare tecnicamente una lezione di Minecraft CraftForge: il Kodland Launcher, il controllo del launcher prima dei contenuti, gli ultimi minuti per pubblicare e mostrare i lavori, dove gli studenti trovano il link al proprio progetto e le soluzioni ai problemi più comuni.',
    needs:['mcPublish','mcPublishDp'],
    offer:[['🟩','Scaricare e installare il Kodland Launcher ed effettuare l’accesso.'],['🚀','Fare il controllo del launcher prima dei contenuti e iniziare dal risultato.'],['📤','Assicurarti che ogni studente pubblichi su Sparks e invii il link.'],['🛠️','Risolvere i problemi più comuni del launcher e di Minecraft.']],
    sections:[
      { id:'focus', e:'🎯', title:'I 3 punti che fanno funzionare una lezione', blocks:[
        { t:'p', html:'Sono le priorità fissate dal team di prodotto per i corsi di Minecraft. Aprile una alla volta:' },
        { t:'acc', items:[
          ['🎬','Mostra prima il risultato e spiega perché creare è diverso dal giocare','<p>Nei primi minuti, <b>mostra il risultato finale</b> e di’ che cosa impareranno oggi gli studenti.</p><ul><li>Usa la scheda di briefing: «Guardate che cosa avrete tra un’ora: il vostro crafter e la vostra casa sull’isola».</li><li>Spiega in che cosa costruire un progetto <b>è diverso dal semplice giocare</b>: in un gioco le regole le ha fatte qualcun altro; qui lo studente crea e mostra il risultato agli altri.</li><li>Chiedi a uno o due studenti: «Secondo te, in che cosa creare è diverso dal semplice giocare?»</li></ul>'],
          ['🟩','Il controllo del collegamento e del launcher viene prima dei contenuti','<p>Fai il controllo del collegamento e del launcher <b>prima</b> della parte di contenuti, così il gioco si scarica mentre conosci il gruppo.</p><ul><li>Collegamento: un minuto — videocamera, microfono, «Ciao!».</li><li>Launcher: 2–3 minuti — invia i link, mostra l’accesso sul tuo schermo, chiedi un «+» in chat quando compare la barra verde.</li><li>Non aspettare che il download finisca e non bloccare il gruppo per uno o due «−»: torna da loro durante il lavoro autonomo.</li><li>Dalla Lezione 2 in poi: «Aprite il launcher e avviate il vostro mondo — lasciatelo caricare mentre parliamo».</li></ul>'],
          ['⏱️','Proteggi gli ultimi 7–10 minuti','<p>Gli ultimi <b>7–10 minuti</b> servono per pubblicare, mostrare i lavori e dare feedback — e non vanno sacrificati per continuare a costruire.</p><ul><li>Interrompi in modo netto: avvisa due minuti prima, poi «Stop, mani lontane dalla tastiera. È il momento della presentazione!», e chiama subito il primo studente.</li><li>Tre studenti mostrano il proprio lavoro; il gruppo dà un feedback specifico: nome, che cosa ha funzionato, un consiglio.</li><li>Concludi con riepilogo, riflessione, prossima lezione e compiti — queste parti non si accorciano mai.</li></ul>']
        ]}
      ]},
      { id:'launcher', e:'🟩', title:'Il Kodland Launcher', blocks:[
        { t:'p', html:'Gli studenti aprono Minecraft tramite il <b>Kodland Launcher</b>: scarica il gioco, apre il mondo del corso ed è il posto dove creano le skin e le indossano. Devi averlo installato e pronto sul tuo computer prima della tua prima lezione.' },
        { t:'callout', kind:'warn', e:'🔑', html:'<b>Le tue credenziali:</b> per scaricare il launcher non servono credenziali. Per accedere, invece, usi le <b>stesse credenziali di Kodland Sparks</b>, che ti fornisce il <b>reparto Operations o Teaching</b>. Gli studenti accedono con lo stesso account che usano sulla piattaforma Kodland — non ne serve uno nuovo.' },
        { t:'link', href:'https://portfolio.kodland.org/launcher/download#guide', e:'⬇️', title:'Pagina di download e guida ufficiale', small:'portfolio.kodland.org/launcher/download — Windows e Mac' },
        { t:'cards', cols:2, items:[
          ['🪟','Windows 10 / 11','<ol><li>Scarica il programma di installazione.</li><li>Apri il file scaricato.</li><li>Nella schermata blu di avviso, clicca su <b>More info → Run anyway</b>, poi segui l’installazione.</li></ol>'],
          ['🍎','macOS 13 o successivo','<ol><li>Scarica il file per il tuo processore (Apple → <b>Informazioni su questo Mac</b>: M1 o successivi = Apple Silicon; altrimenti, Intel).</li><li>Apri il file scaricato e trascina <b>Kodland Launcher</b> in <b>Applications</b>. Non aprirlo da quella finestra.</li><li>Apri <b>Terminal</b>, incolla la riga qui sotto e premi Invio. È normale che non compaia nulla.</li><li>Apri il launcher da <b>Applications</b>.</li></ol>']
        ]},
        { t:'p', html:'<code>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</code>' },
        { t:'steps', items:[
          ['Accedi','Clicca su <b>Sign in</b>. Si apre una pagina del browser: clicca su <b>Sign in with Kodland</b> — un solo pulsante, nessuna password. Se il browser non si apre, usa il link sotto il pulsante per ottenere un codice breve (valido per cinque minuti).'],
          ['Scarica il gioco','Il launcher scarica il gioco in diversi passaggi. Lascialo lavorare.'],
          ['Gioca','Quando il launcher indica che è tutto pronto, premi <b>Play</b>. Il primo avvio può richiedere fino a un minuto. Il codice del mondo si inserisce nella scheda <b>Play</b>.'],
          ['Aggiornamenti','Se il launcher non si aggiorna, scarica l’ultima versione dalla pagina di download e installala sopra quella vecchia. Mondi e skin restano al loro posto.']
        ]},
        { t:'acc', open:false, items:[
          ['⬇️','Link di download diretti (gli stessi della scheda della lezione)','<ul><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-win-x64-setup.exe" target="_blank" rel="noopener">Windows</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-arm64.dmg" target="_blank" rel="noopener">Mac — Apple Silicon (M1 o successivi)</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-x64.dmg" target="_blank" rel="noopener">Mac — Intel</a></li></ul>']
        ]}
      ]},
      { id:'l1', e:'🧯', title:'Quando il launcher di uno studente non funziona', blocks:[
        { t:'p', html:'Nella Lezione 1 è molto probabile che a qualcuno il launcher non parta. È normale: <b>prima dai un compito agli altri</b>, poi collegati con lo studente. Chiedigli di condividere lo schermo e guidalo a voce: «Che cosa vedi adesso? Clicca su questo pulsante». Se il problema non si risolve in un paio di minuti: «Per ora segui il mio schermo, torno da te tra poco».' },
        { t:'acc', open:false, items:[
          ['📥','Il file non si scarica','Invia di nuovo in chat il link della scheda e controlla che lo studente abbia scelto il file per il suo sistema.'],
          ['🍎','Il Mac non apre il launcher','Esegui la riga del Terminal indicata nella sezione «Il Kodland Launcher» e apri di nuovo il launcher da <b>Applications</b>.'],
          ['🪟','Windows chiede se aprire il file','<b>More info → Run anyway</b>.'],
          ['🔑','Lo studente non riesce ad accedere','Usa lo stesso accesso Kodland delle lezioni — nessun account nuovo. La finestra di accesso si apre nel browser e spesso finisce dietro altre finestre.'],
          ['⏳','Il gioco impiega molto a caricarsi o il download si ferma','Il primo download è lungo, è normale. Se la barra si ferma: controlla la connessione, chiudi il launcher e riaprilo — il download riprende.'],
          ['🖌️','Il launcher proprio non parte','Nella Lezione 1 lo studente disegna e pubblica comunque la skin su Sparks (nel browser), quindi ottiene il risultato principale. Nel mondo segue il tuo schermo. Dopo la lezione, aiutalo con l’avvio.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'Se più studenti hanno lo stesso errore, mostra la soluzione a tutti una volta sola.' }
      ]},
      { id:'req', e:'💻', title:'Requisiti del computer', blocks:[
        { t:'p', html:'Ecco che cosa serve a uno studente per Minecraft CraftForge. Ti sarà utile quando uno studente ha problemi a installare o avviare il gioco:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Computer e sistema','Computer fisso o portatile con <b>Windows 10/11 (64 bit)</b> o <b>macOS 13 o successivo</b>. Mac con Apple Silicon (M1 o più recente) o Intel: nella scheda della lezione c’è un download per ciascuno.'],
          ['🧠','Memoria e processore','<b>8 GB di RAM</b> con scheda grafica dedicata, oppure <b>12 GB</b> con grafica integrata. Un processore <b>quad-core</b>.'],
          ['🎮','Grafica e disco','Una scheda grafica che supporti <b>Vulkan 1.3</b> e <b>2 GB</b> di memoria video. <b>5 GB</b> di spazio libero su disco.'],
          ['🎧','Connessione e dotazione','Una connessione internet stabile, adatta alle videochiamate. Un mouse a due tasti, una tastiera, cuffie con microfono e una videocamera.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Pubblicare su Kodland Sparks (Beginner)', blocks:[
        { t:'p', html:'La pubblicazione è il risultato principale di molte lezioni: lo studente pubblica il lavoro su Sparks e incolla il link nella scheda della lezione. Nel Modulo 1 del corso ci sono due modi:' },
        { t:'cards', cols:2, items:[
          ['🎨','La skin (Lezione 1)','Nella Lezione 1 lo studio delle skin è dentro la scheda: <b>Publish</b> → dai un nome alla skin → di nuovo <b>Publish</b>. Un file di skin si può pubblicare anche da Sparks: <b>Publish project → Minecraft skin</b> → nome → <b>Model</b> (Steve o Alex) → <b>Skin file</b> (PNG 64×64) → <b>Publish</b>.'],
          ['🖼️','Una costruzione','Screenshot della costruzione (F5 per la terza persona, F1 per nascondere l’interfaccia) → Sparks → <b>Publish project</b> → <b>Image</b> → nome → <b>Drawing</b>: carica lo screenshot → <b>Publish</b>.']
        ]},
        { t:'steps', items:[
          ['Dove si trova il link','Il link è l’indirizzo della pagina del progetto. Lo studente va su <b>My projects</b> in Sparks, apre il <b>progetto pubblicato</b> e copia il link dalla <b>barra degli indirizzi del browser</b>: <code>portfolio.kodland.org/nickname/…</code>.'],
          ['Incollalo nella scheda della lezione','Il link va incollato nel campo apposito della scheda sulla piattaforma Kodland (per esempio, «Link alla mia skin su Kodland Sparks»).'],
          ['Scegli la visibilità','Con <b>Public</b> il progetto compare nel feed e nel portfolio. <b>Friends only</b> è per amici e insegnanti. <b>Only me</b> rende il progetto privato — nessun altro può aprire il link, nemmeno il tutor.'],
          ['Due passaggi distinti','Pubblicare su Sparks e inviare il link sulla piattaforma Kodland sono <b>due passaggi distinti</b>. Controlla in Backoffice che i link siano arrivati davvero.']
        ]},
        { t:'sim', flag:'mcPublish', src:'minecraft-publish/Minecraft_Publish.html?flow=image', e:'⚡', badge:'Simulazione', title:'Pubblica una skin e una costruzione su Kodland Sparks', text:'Una riproduzione di Kodland Sparks e della scheda della lezione: nei panni di uno studente, pubblichi una skin, trovi il suo link in My projects, lo incolli nella scheda sulla piattaforma, pubblichi lo screenshot di una costruzione come progetto Image e sistemi un link che non si apre. Richiede circa 5 minuti. La verifica del modulo si sblocca quando hai finito.' }
      ]},
      { id:'publishdp', e:'📤', title:'Pubblicare il data pack su Kodland Sparks (Intermediate)', blocks:[
        { t:'p', html:'Sparks è il portfolio degli studenti: lì sono raccolti tutti i progetti del corso, e lì si trova Sparks AI. Gli studenti ci tornano in ogni lezione per pubblicare e chiedere suggerimenti. Il data pack si pubblica <b>dall’editor del launcher</b>:' },
        { t:'steps', items:[
          ['Publish, accanto a Save','Nel launcher, <b>Create → Data packs → Edit</b> sul data pack, poi <b>Publish</b>, accanto al pulsante viola <b>Save</b>.'],
          ['Nome e «Who can see it?» → Everyone','In «Publish to your profile», scrivi il nome e scegli <b>Everyone</b>: solo così anche gli altri possono aprire il link senza accedere all’account dello studente.'],
          ['Copy link','Quando compare «Published! It is on your profile.», clicca su <b>Copy link</b>, poi su <b>Done</b>, e incolla il link nella scheda della lezione sulla piattaforma («Link alla mia legge su Kodland Sparks»).'],
          ['Hai perso il link?','<b>Open on Sparks</b> (nella finestra di dialogo o in alto nell’editor) apre la pagina del progetto sul profilo dello studente: il link è l’indirizzo nella barra del browser.'],
          ['Due passaggi distinti','Pubblicare su Sparks e inviare il link sulla piattaforma Kodland sono <b>due passaggi distinti</b>. Controlla in Backoffice che i link siano arrivati davvero.'],
          ['Ogni aggiornamento si pubblica di nuovo','Quando lo studente aggiunge una legge, salva, testa e pubblica di nuovo l’aggiornamento.']
        ]},
        { t:'sim', flag:'mcPublishDp', src:'minecraft-publish/Minecraft_Publish.html?flow=datapack&sim=mcPublishDp', e:'⚡', badge:'Simulazione', title:'Pubblica un data pack su Kodland Sparks', text:'Una riproduzione del Kodland Launcher e della scheda della lezione: nei panni di uno studente, pubblichi un data pack, copi il suo link, lo incolli nella scheda sulla piattaforma, sistemi un link che non si apre e ritrovi un link che non era stato copiato. Richiede circa 4 minuti. La verifica del modulo si sblocca quando hai finito.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Quando qualcosa va storto', blocks:[
        { t:'acc', open:false, items:[
          ['🎨','La skin non compare in «Skins»','Controlla che la skin sia pubblicata su Sparks e che il launcher usi lo stesso account. Chiudi e riapri la sezione <b>Skins</b>.'],
          ['👕','Lo studente ha premuto «Wear» con il gioco aperto','Il launcher avvisa che la skin comparirà al prossimo avvio del gioco: esci dal mondo e rientra con <b>Play</b>, così il gioco si riavvia.'],
          ['📍','Il teletrasporto non ha funzionato','Chiedi allo studente di condividere lo schermo: di solito il comando non è completo o manca il segno meno prima dell’ultimo numero.'],
          ['⛶','Lo studente non riesce a uscire dallo studio a schermo intero','Clicca su <b>Collapse</b> in alto nello studio — <b>Esc</b> lì dentro non funziona.'],
          ['🔒','Il link dello studente non si apre','Probabilmente il progetto è stato salvato come <b>Only me</b> (compare l’etichetta <b>Private project</b>). Chiedi allo studente: <b>My projects → apri il progetto → Edit → Public → Publish</b>. Il link resta lo stesso.'],
          ['🖼️','Lo studente non trova lo screenshot','Gli studenti lo fanno con <b>Win + Stamp</b> su Windows (si salva in <b>Immagini → Screenshot</b>) e con <b>Cmd + Shift + 4</b> su Mac (si salva sulla scrivania). Se ora non si trova, lo studente può allegarlo più tardi, da casa.'],
          ['💾','Il data pack non si salva','Controlla che tutte e tre le parti del modulo della ricetta siano compilate: dove si crea l’oggetto, che cosa entra e che cosa esce.'],
          ['🔁','La legge non funziona dopo una modifica','Clicca su <b>Save</b>, esci dal mondo ed entra di nuovo — le leggi si applicano quando entri.'],
          ['🧩','La ricetta non funziona','Gli oggetti non sono disposti come nel modulo della ricetta, oppure lo studente li combina nell’inventario invece che su un banco da lavoro.'],
          ['🔗','Lo studente ha chiuso la finestra senza copiare il link','Clicca su <b>Open on Sparks</b> in alto nell’editor del data pack: si apre la pagina del progetto, e il link è l’indirizzo nella barra del browser.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist tecnica per ogni lezione', blocks:[
        { t:'check', title:'✅ La mia checklist tecnica', groups:[
          { h:'☑️ Prima della lezione', items:['Ho letto tutte le note per il tutor della lezione e, per la Lezione 1, ho guardato il video di preparazione.','Il mio launcher è installato, ho effettuato l’accesso e ho fatto personalmente il percorso della lezione.','Prima della Lezione 1, ho inviato i link del launcher nella chat del gruppo.'] },
          { h:'🎬 Durante la lezione', items:['Ho fatto il controllo del collegamento e del launcher prima dei contenuti.','Nei primi minuti ho mostrato il risultato finale e l’obiettivo della lezione.'] },
          { h:'📤 Alla fine della lezione', items:['Ho protetto gli ultimi 7–10 minuti per pubblicare, mostrare i lavori e dare feedback.','Tutti hanno inviato il link al progetto pubblicato nella scheda della lezione.','Ho aperto alcuni link per controllare che funzionino.'] }
        ]}
      ]},
      { id:'videos', e:'🎬', title:'Lezioni di esempio con un autoQA eccellente', blocks:[
        { t:'p', html:'Guarda com’è una lezione con un autoQA eccellente: la dinamica della lezione, la struttura e il modo in cui il tutor guida il gruppo.' },
        { t:'videos', items:[
  ['Modulo 1 · Lezione 1', '1WLNAqvZDvvscjh57dmI27hwfQioxyYQx'],
  ['Modulo 1 · Lezione 2', '195vrDjVcquh0IyXYwlX8Ojz_Puze-Xyl'],
  ['Modulo 1 · Lezione 3', '1LyLl56yga19a9xun9FGPIdcjz0aDlAOS']
] },
        { t:'callout', kind:'warn', e:'🔄', html:'<b>Nota:</b> il contenuto di queste lezioni può essere diverso da quello che vedrai nel Backoffice, perché le lezioni vengono aggiornate continuamente. La dinamica della lezione, la struttura e la qualità, però, devono restare le stesse: sono buoni esempi a cui ispirarti per le tue lezioni.' }
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ----------------
   The Skills module has no separate check: its four blocks end with their own practice checks (COURSE.skills). */
COURSE.quiz = {
  beg:[
    { q:'A chi è rivolto Minecraft CraftForge Beginner e quanto dura ogni lezione?',
      o:['A studenti di 8–9 anni, con lezioni di gruppo di 60 minuti.','A studenti di 10–12 anni, con lezioni di 90 minuti.','A studenti di 13–17 anni, con lezioni di 90 minuti.'],
      a:0, e:'Beginner è rivolto a studenti di 8–9 anni: 40 lezioni di gruppo da 60 minuti.' },
    { q:'Con quale linguaggio gli studenti programmano il robot Assistente?',
      o:['Python.','Blocchi di Scratch.','Lua.'],
      a:2, e:'Il robot Assistente si programma in Lua: comandi, argomenti, variabili, cicli, condizioni e funzioni.' },
    { q:'Come inizia una lezione?',
      o:['Con la teoria sulla redstone prima che qualcuno entri nel mondo.','Mostrando il risultato finale, dicendo l’obiettivo e spiegando perché creare è diverso dal semplice giocare.','Facendo iniziare subito gli studenti a costruire, senza mostrare un esempio.'],
      a:1, e:'Prima il risultato: gli studenti vedono dove stanno andando e perché creare è diverso dal giocare.' },
    { q:'Che cosa ottiene lo studente alla fine del corso?',
      o:['Un esame finale scritto.','Oltre nove progetti nel suo portfolio di Kodland Sparks e un progetto finale — la sua terra, presentata al gruppo.','Solo la casa della Lezione 1.'],
      a:1, e:'Oltre nove progetti nel portfolio e un progetto finale in cui costruzioni, meccanismi e programmi funzionano insieme.' },
    { q:'Qual è il ruolo di Sparks AI nelle lezioni?',
      o:['Realizza il progetto al posto dello studente.','Propone idee e feedback; è lo studente a decidere che cosa usare.','Valuta la lezione al posto del tutor.'],
      a:1, e:'Sparks AI propone, lo studente decide — di solito una richiesta per lezione.' }
  ],
  int:[
    { q:'A chi è rivolto Minecraft CraftForge Intermediate e quanto dura ogni lezione?',
      o:['A studenti di 8–9 anni, con lezioni di 60 minuti.','A studenti di 10–12 anni, con lezioni di gruppo di 90 minuti.','A studenti di 13–17 anni, con lezioni di 60 minuti.'],
      a:1, e:'Intermediate è rivolto a studenti di 10–12 anni: 40 lezioni di gruppo da 90 minuti.' },
    { q:'Quale linguaggio di programmazione usano gli studenti nel corso?',
      o:['Python.','Lua.','JavaScript.'],
      a:0, e:'Gli studenti scrivono programmi Python che costruiscono nel mondo di Minecraft.' },
    { q:'Che cos’è un data pack in questo corso?',
      o:['Un file con gli screenshot delle costruzioni dello studente.','Un insieme di leggi per il mondo (ricette, drop, comandi…) che Minecraft esegue ogni volta che entri.','Un pacchetto di mondi già pronti da scaricare.'],
      a:1, e:'Un data pack è un insieme di leggi: il mondo le esegue ogni volta che lo studente entra.' },
    { q:'Che cosa ottiene lo studente alla fine del corso?',
      o:['Un esame finale scritto.','Oltre nove progetti nel suo portfolio di Kodland Sparks e un progetto finale originale presentato al Demo Day.','Solo il data pack della Lezione 1.'],
      a:1, e:'Oltre nove progetti nel portfolio e un progetto originale, portato dall’idea fino al Demo Day.' },
    { q:'Come dovrebbero usare Sparks AI gli studenti?',
      o:['Copiare le sue risposte così come sono.','Valutare i suoi suggerimenti e decidere che cosa usare.','Non usarlo mai.'],
      a:1, e:'Sparks AI propone idee e scenari di test; lo studente li valuta invece di copiarli.' }
  ],
  skills:[],
  tech:[
    { q:'Quando fai il controllo del collegamento e del launcher?',
      o:['All’inizio della lezione, prima dei contenuti, così il gioco si scarica mentre conosci il gruppo.','A metà lezione, quando gli studenti hanno bisogno di Minecraft.','Alla fine, così non toglie tempo alla lezione.'],
      a:0, e:'Prima dei contenuti: il gioco si scarica mentre conosci il gruppo.' },
    { q:'Quali credenziali usi per accedere al Kodland Launcher?',
      o:['Un nuovo account che crei tu.','Le stesse credenziali di Kodland Sparks, fornite dal reparto Operations o Teaching.','L’account di uno studente.'],
      a:1, e:'Per scaricare il launcher non servono credenziali; per accedere usi le tue credenziali di Kodland Sparks, fornite dal reparto Operations o Teaching.' },
    { q:'Dove trova lo studente il link da inviare nella scheda della lezione?',
      o:['In un commento sotto il progetto.','Su Sparks: My projects → apri il progetto pubblicato → copia l’indirizzo dalla barra del browser.','Nel launcher, nella scheda Play.'],
      a:1, e:'Il link è l’indirizzo della pagina del progetto: My projects → il progetto pubblicato → la barra del browser.' },
    { q:'A che cosa servono gli ultimi 7–10 minuti della lezione?',
      o:['Tempo extra per costruire.','Pubblicare, mostrare i lavori e dare feedback — più il riepilogo e i compiti.','Gioco libero.'],
      a:1, e:'Proteggi gli ultimi minuti: pubblicazione, presentazione con feedback e riepilogo.' },
    { ctx:'Nella Lezione 1, il launcher di uno studente non parte e il resto del gruppo è pronto.',
      q:'Che cosa fai?',
      o:['Interrompi la lezione finché il launcher non funziona.','Fai andare avanti il gruppo — la skin si disegna su Sparks, nel browser — e aiuti lo studente durante il lavoro autonomo.','Dici allo studente di riprovare a casa e di saltare la lezione.'],
      a:1, e:'Un solo problema non deve fermare il gruppo: lo studente disegna e pubblica comunque la skin, e tu sistemi il launcher durante il lavoro autonomo.' },
    { q:'Dove trova lo studente il link al data pack pubblicato?',
      o:['In un commento nel launcher.','In «Publish to your profile»: Copy link (oppure Open on Sparks e copia l’indirizzo dalla barra del browser).','Nella scheda Play del launcher.'],
      a:1, e:'Copy link subito dopo la pubblicazione; se il link è andato perso, Open on Sparks mostra la pagina del progetto, e il suo indirizzo è il link.' },
    { ctx:'Uno studente ha pubblicato il data pack, ma a te il link non si apre.',
      q:'Qual è la causa più probabile, e come si risolve?',
      o:['In «Who can see it?» non era selezionato Everyone: pubblica di nuovo con Everyone.','Il data pack è rotto: creane uno nuovo da zero.','I link si aprono solo il giorno dopo.'],
      a:0, e:'Solo con Everyone il link si apre senza accedere. Pubblicare di nuovo con Everyone risolve il problema.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Ultimo passo: torna all’LMS e completa il DST',
  html: `<p>Ci sei quasi! Torna alla pagina della formazione sull’LMS da cui hai aperto questo percorso. Il test DST si trova subito sotto la formazione.</p>
    <p>👉 <b>Per completare con successo la formazione devi svolgere e superare il test DST.</b> Se non svolgi il test DST, la formazione resterà incompleta e potrebbe scadere.</p>
    <p>Il punteggio minimo per superarlo è l’<b>80%</b>.</p>
    <p>Buona fortuna! ❤️</p>`,
  nexts: [
    ['📒', '<b>Prima di ogni lezione:</b> leggi le note per il tutor in Backoffice e fai il percorso della lezione nel launcher.'],
    ['🟩', '<b>Primi minuti:</b> controllo del collegamento e del launcher, poi il risultato finale e l’obiettivo.'],
    ['🔗', '<b>Il link:</b> My projects → il progetto pubblicato → l’indirizzo nella barra del browser.'],
    ['⏱️', '<b>Ultimi 7–10 minuti:</b> pubblicazione, presentazione dei lavori e feedback.']
  ]
};

/* ---------------- Skills for the course ----------------
   Four blocks (Minecraft world, programming logic, Python practice, data packs). Texts come from the proofread
   CraftForge Tutor Training. In each quiz 'c' = number of the correct option (0 = first). Never translate code. */
COURSE.skills = {
  mod: 'skills',
  ui: {
    step_self: 'Procedi passo dopo passo',
    prev: 'Indietro',
    next: 'Passo successivo',
    stepn: 'Passo {s} di {n}',
    check_intro: 'Rispondi a tutte le domande: serve il 70% per sbloccare il passo successivo. Per ogni domanda conta la prima risposta.',
    correct: 'Corretto!',
    notquite: 'Non proprio.',
    score: 'Punteggio: {p}% — serve il 70%',
    retry: 'Riprova la verifica',
    unlocked: 'Hai sbloccato il passo successivo.',
    review_msg: 'Ripassa le sezioni qui sopra, poi riprova la verifica.',
    nextBlock: 'Blocco successivo →',
    lockedBlock: '🔒 Supera il blocco precedente per sbloccare questo.',
    ctaTitle: 'Supera i quattro blocchi',
    ctaText: 'Ogni blocco termina con una breve verifica: in ciascuno ti serve il 70%. Quando li avrai superati tutti e quattro, il modulo sarà completato.',
    progress: 'Blocchi superati: {n} su {t}',
    ctaDone: 'Modulo completato: {p}%',
    goNext: 'Vai al Modulo {n} →',
    practice: 'Verifica del blocco',
    blockOf: 'Blocco {n} di {t}',
    passedBlock: 'Blocco superato: {p}%'
  },
  blocks: [
    {
      id: 'world',
      ic: '🌍',
      slot: 'Mondo',
      title: 'Immersione in Minecraft',
      sections: [
        {
          t: 'Minecraft di base per tutor (competenze tecniche)',
          html: '<div class="card class"><p>Minecraft è un mondo fatto di cubi chiamati <strong>blocchi</strong>. Puoi romperli, raccoglierli e piazzarli per costruire qualsiasi cosa. I bambini conoscono benissimo questo mondo: a te serve quanto basta per muoverti, costruire e seguire quello che fanno.</p></div><div class="tbl"><table><tbody><tr><th>Tasto / azione</th><th>Cosa fa</th></tr><tr><td><code>W A S D</code></td><td>Camminare avanti, a sinistra, indietro, a destra</td></tr><tr><td>Mouse</td><td>Guardarsi intorno</td></tr><tr><td><code>Spazio</code></td><td>Saltare. In modalità Creativa premi due volte per volare; tieni premuto per salire</td></tr><tr><td><code>Shift</code></td><td>Accovacciarsi: non cadi dai bordi. In volo, scendere</td></tr><tr><td>Clic sinistro</td><td>Rompere un blocco / colpire</td></tr><tr><td>Clic destro</td><td>Piazzare un blocco / usare (aprire una porta, premere un pulsante, azionare una leva)</td></tr><tr><td><code>1</code>–<code>9</code> o rotella del mouse</td><td>Scegliere un oggetto della barra rapida (la barra in basso)</td></tr><tr><td><code>E</code></td><td>Aprire l’inventario</td></tr><tr><td><code>T</code> o <code>/</code></td><td>Aprire la chat / iniziare a scrivere un comando</td></tr><tr><td><code>F3</code></td><td>Vedere le coordinate e le informazioni tecniche</td></tr><tr><td><code>F5</code></td><td>Cambiare la visuale</td></tr><tr><td><code>Esc</code></td><td>Menu di pausa e impostazioni</td></tr></tbody></table></div><div class="cols"><div class="card class"><h4>Modalità di gioco</h4><ul><li><strong>Creativa</strong>: blocchi infiniti, puoi volare e niente ti fa male. Perfetta per costruire.</li><li><strong>Sopravvivenza</strong>: raccogli risorse, hai vita e fame, e di notte attaccano i mostri.</li></ul></div><div class="card class"><h4>Parole che usano i bambini</h4><ul><li><strong>Mob</strong>: qualsiasi creatura (una mucca, uno zombie, un Creeper).</li><li><strong>Spawn</strong>: il punto in cui compari.</li><li><strong>Bioma</strong>: un tipo di territorio (deserto, foresta, neve).</li><li><strong>Skin</strong>: l’aspetto del tuo personaggio. Steve e Alex sono quelli predefiniti.</li></ul></div></div>'
        },
        {
          t: '1.1 · La cultura che i bambini portano con sé',
          html: '<div class="card why"><p>Minecraft ha le sue leggende, i suoi meme, storie di paura e battute interne, e i bambini le conoscono bene. Non serve essere un giocatore esperto, ma devi essere «sul pezzo». Il modo più veloce è un video «<strong>Minecraft Iceberg</strong>»: fatti nascosti, miti, contenuti tagliati e leggende, dai più noti in cima ai più oscuri in fondo.</p></div><div class="vid"><iframe src="https://www.youtube.com/embed/AChmq4QfbK0" title="Minecraft Iceberg video" loading="lazy" allowfullscreen=""></iframe></div><div class="tbl"><table><tbody><tr><th>Nome</th><th>Cos’è</th></tr><tr><td><strong>Herobrine</strong></td><td>La leggenda più famosa di Minecraft: una figura dagli occhi bianchi che infesterebbe i mondi. Non è mai stato nel gioco — per anni le note di aggiornamento di Mojang riportavano per scherzo «Rimosso Herobrine».</td></tr><tr><td><strong>Entity 303</strong></td><td>Un’altra leggenda horror nata dai fan, su un’entità vendicativa simile a un hacker. Ai bambini piace chiedere di lei — conoscere il nome basta per strappare un sorriso.</td></tr><tr><td><strong>Notch</strong></td><td>Markus Persson, il creatore originale di Minecraft.</td></tr><tr><td><strong>L’origine del Creeper</strong></td><td>Una storia molto nota: è nato da un modello di maiale sbagliato, con altezza e lunghezza invertite.</td></tr><tr><td><strong>Le Terre Lontane (Far Lands)</strong></td><td>Un glitch del terreno nelle vecchie versioni Java, a milioni di blocchi dallo spawn, dove il mondo si spezzava in strane pareti.</td></tr><tr><td><strong>Steve e Alex</strong></td><td>I personaggi predefiniti del giocatore.</td></tr></tbody></table></div><div class="card class"><p><strong>In classe:</strong> un veloce «Sì, so chi è Entity 303 😉» crea fiducia in pochi secondi. Poi riporta la conversazione sulla costruzione.</p></div>'
        },
        {
          t: '1.2 · Coordinate: X, Y e Z',
          html: '<div class="tbl"><table><tbody><tr><th>Asse</th><th>Direzione</th><th>Cambia quando il giocatore…</th></tr><tr><td><strong>X</strong></td><td>Est ↔ Ovest</td><td>cammina verso est o ovest</td></tr><tr><td><strong>Y</strong></td><td>Su ↕ Giù (altezza)</td><td>salta, si arrampica, cade, scava verso il basso, costruisce una torre</td></tr><tr><td><strong>Z</strong></td><td>Sud ↔ Nord</td><td>cammina verso nord o sud</td></tr></tbody></table></div><div class="card "><p>X e Z sono la posizione sul terreno; <strong>Y è l’altezza</strong>. Qualsiasi movimento verticale — anche un solo salto — cambia Y finché dura. Per vedere le coordinate: <code>F3</code> nella Java Edition, oppure attiva «Mostra coordinate» nelle impostazioni del mondo su Bedrock. Il teletrasporto usa lo stesso ordine: <code>/tp X Y Z</code>.</p></div><div class="card tip"><p><strong>Trucco per ricordare:</strong> Y è quella che «sale» nei grafici a scuola — anche in Minecraft è quella che sale.</p></div>'
        },
        {
          t: '1.3 · I mob che ogni tutor deve riconoscere',
          html: '<div class="tbl"><table><tbody><tr><th>Mob</th><th>Cosa sapere</th></tr><tr><td><strong>Creeper</strong></td><td>Si avvicina in silenzio e <strong>sibila quando la miccia si accende — sta per esplodere</strong> (circa 1,5 secondi). Allontanarsi fuori portata può annullare la miccia. Se un fulmine cade vicino, diventa un <strong>Creeper carico</strong>, con un’esplosione molto più grande.</td></tr><tr><td><strong>Zombie / Scheletro</strong></td><td>Compaiono al buio; bruciano alla luce del giorno, a meno che non siano all’ombra o con un elmo. Gli scheletri tirano frecce a distanza.</td></tr><tr><td><strong>Ragno</strong></td><td>Si arrampica sui muri — un albero o un pilastro non ti proteggono. Neutrale con molta luce, ostile al buio.</td></tr><tr><td><strong>Enderman</strong></td><td>Neutrale finché non lo guardi in faccia. Poi si teletrasporta e attacca.</td></tr><tr><td><strong>Phantom</strong></td><td>Compare nel cielo se il giocatore non dorme da tre o più giorni di gioco.</td></tr></tbody></table></div>'
        },
        {
          t: '1.4 · Sopravvivere alla prima notte',
          html: '<div class="card "><p>I mob ostili compaiono al <strong>buio</strong>. La prima notte in Sopravvivenza, senza letto e senza equipaggiamento, il piano più sicuro è semplice: <strong>costruire un piccolo rifugio chiuso e illuminarlo all’interno</strong>. I muri tengono fuori i mob; la luce dentro impedisce che compaiano accanto a te. Scavare in una collina e chiudere l’ingresso funziona bene.</p></div><div class="tbl"><table><tbody><tr><th>Idea allettante</th><th>Perché non funziona</th></tr><tr><td>Tenere una torcia in mano</td><td>Nel gioco standard, una torcia in mano non illumina la zona e non impedisce ai mob di comparire intorno a te.</td></tr><tr><td>Aspettare in cima a un albero alto</td><td>I ragni si arrampicano, gli scheletri tirano da sotto e cadere fa male.</td></tr><tr><td>Esplorare schivando i mob</td><td>Il buio è proprio dove compaiono — sempre di più man mano che la notte avanza.</td></tr></tbody></table></div><div class="card tip"><p>Un <strong>letto</strong> ti fa saltare la notte e fissa anche il tuo punto di rinascita personale. Ti servirà nell’1.6.</p></div>'
        },
        {
          t: '1.5 · Strumenti, livelli e quale piccone estrae cosa',
          html: '<div class="card "><p>I picconi salgono per livelli: <strong>Legno → Pietra → Ferro → Diamante → Netherite</strong>. <strong>L’oro è la trappola:</strong> scava velocissimo, ma il suo livello è basso come quello del legno. Se il livello è troppo basso, il blocco si rompe lo stesso — ma non lascia nulla.</p></div><div class="tbl"><table><tbody><tr><th>Piccone</th><th>Livello più basso che può estrarre…</th></tr><tr><td>Legno / Oro</td><td>Pietra, minerale di carbone</td></tr><tr><td>Pietra</td><td>Minerale di ferro, di rame, di lapislazzuli</td></tr><tr><td>Ferro</td><td><strong>Minerale di diamante</strong>, d’oro, di redstone, di smeraldo</td></tr><tr><td>Diamante</td><td>Ossidiana, detriti antichi</td></tr></tbody></table></div><div class="card class"><p><strong>In classe:</strong> «Il mio piccone ha rotto il diamante e non è uscito niente!» è una vera domanda degli alunni. Ora conosci la risposta: il livello era troppo basso.</p></div>'
        },
        {
          t: '1.6 · Punti di spawn, letti e bussole',
          html: '<div class="cols"><div class="card "><h4>Spawn del mondo</h4><p>Il punto in cui ogni giocatore compare la prima volta in un nuovo mondo. Non si sposta mai, a meno che qualcuno non lo cambi con un comando.</p></div><div class="card "><h4>Punto di rinascita personale</h4><p>Si fissa dormendo in un letto (o usando un’ancora della rinascita nel Nether). Torni qui dopo la morte.</p></div></div><div class="tbl"><table><tbody><tr><th>Oggetto</th><th>Punta verso</th></tr><tr><td><strong>Bussola normale</strong></td><td>Lo <strong>spawn del mondo</strong> — non il letto, non il nord. Gira a caso nel Nether e nell’End.</td></tr><tr><td>Bussola di recupero</td><td>Il punto in cui il giocatore è morto l’ultima volta.</td></tr><tr><td>Bussola con magnetite</td><td>La magnetite a cui è stata collegata. È così che i giocatori fanno una bussola che punta alla loro base.</td></tr></tbody></table></div><div class="card warn"><p><strong>Confusione comune:</strong> mettere un nuovo letto cambia dove <em>rinasci</em>, ma una bussola normale continua a puntare allo spawn originale del mondo.</p></div>'
        }
      ],
      quiz: [
        {
          p: 'Un giocatore scava dritto verso il basso per 10 blocchi. Quale coordinata cambia?',
          o: ['X', 'Y', 'Z', 'Nessuna'],
          c: 1,
          f: 'Y è l’altezza. Scavare verso il basso, saltare, arrampicarsi o costruire verso l’alto cambiano tutti Y.'
        },
        {
          p: 'Qual è il piccone di livello più basso che può estrarre il minerale di ferro e ottenerlo davvero?',
          o: ['Di legno', 'Di pietra', 'D’oro', 'Va bene qualsiasi piccone'],
          c: 1,
          f: 'La pietra basta per il ferro. L’oro è veloce ma ha lo stesso livello basso del legno.'
        },
        {
          p: 'Un Creeper inizia a sibilare proprio dietro un giocatore. Qual è la reazione migliore?',
          o: ['Attaccarlo subito — il sibilo significa che è debole', 'Restare fermi così perde interesse', 'Scappare di corsa — la miccia è accesa e uscire dalla sua portata può annullarla', 'Mettere una torcia accanto a lui'],
          c: 2,
          f: 'Il sibilo significa che la miccia è accesa e sta per esplodere. Uscire dalla portata è la mossa giusta.'
        },
        {
          p: 'Perché un rifugio per la prima notte ha bisogno di luce all’interno, e non solo di muri?',
          o: ['La luce rende i muri più resistenti', 'I mob ostili compaiono al buio — la luce impedisce che compaiano dentro con te', 'Le torce curano il giocatore', 'I mob sono attratti dalla luce esterna'],
          c: 1,
          f: 'I muri tengono fuori i mob; la luce impedisce ai nuovi mob di comparire nello spazio buio con te.'
        },
        {
          p: 'Un giocatore vuole una bussola che punti sempre alla sua base. Cosa gli serve?',
          o: ['Dormire in un letto alla base — la bussola lo seguirà', 'Usare la bussola su una magnetite posta alla base', 'Una bussola normale punta già all’ultimo letto', 'Una bussola di recupero'],
          c: 1,
          f: 'Una bussola normale punta allo spawn del mondo. Collegarla a una magnetite la fa puntare a quella magnetite.'
        },
        {
          p: 'Un alunno dice: «Herobrine è nel mio mondo!». Chi è Herobrine?',
          o: ['Un boss aggiunto con l’aggiornamento del Nether', 'Una leggenda dei fan mai stata nel gioco — Mojang ha persino scherzato con «Rimosso Herobrine» nelle note di aggiornamento', 'Lo sviluppatore che ha creato il Creeper', 'Un altro nome dell’Enderman'],
          c: 1,
          f: 'Herobrine è una leggenda. Conoscere la battuta ti aiuta a entrare in sintonia con gli alunni in un secondo.'
        },
        {
          p: 'Come diventa un Creeper normale un Creeper carico?',
          o: ['Esplodendo due volte', 'Quando un fulmine cade vicino a lui', 'Quando è in acqua', 'Quando un giocatore gli dà un nome'],
          c: 1,
          f: 'Un fulmine vicino lo carica, rendendo la sua esplosione molto più grande.'
        }
      ]
    },
    {
      id: 'logic',
      ic: '🧠',
      slot: 'Logica',
      title: 'Logica di programmazione',
      sections: [
        {
          t: '2.1 · Logica di programmazione',
          html: '<div class="card why"><p>Programmare non significa soltanto conoscere la sintassi di un linguaggio. Prima di tutto, significa ragionare in modo sequenziale, riconoscere schemi, suddividere un compito in passaggi e capire perché un algoritmo si comporta in un certo modo.</p><p>Durante le lezioni, gli alunni faranno spesso domande, commetteranno errori, proporranno soluzioni inaspettate e a volte scriveranno il codice in modo completamente diverso da quello previsto. Per aiutarli, è importante non solo conoscere il comando corretto, ma anche capire la logica alla base del programma.</p><p>In questo blocco non serve conoscere un linguaggio di programmazione specifico. Verificheremo quanto ti senti a tuo agio con algoritmi, condizioni, cicli e sequenze di azioni.</p></div><div class="card "><h4>Il metodo della tabella di traccia</h4><ol><li>Scrivi <strong>ogni variabile</strong> come una colonna, con il suo valore iniziale.</li><li>Fai <strong>un passo alla volta</strong>, nell’ordine in cui sono scritte le regole.</li><li>Ogni condizione si controlla sul valore <strong>attuale</strong> — quello che hai appena scritto, non quello vecchio.</li><li>Conta le ripetizioni. «Ripeti 4 volte» significa quattro righe, non tre, non cinque.</li></ol></div><div class="tracer" data-tr="robot"></div>'
        },
        {
          t: '2.2 · Trasformare le regole in condizioni',
          html: '<div class="card "><p>Le domande con regole sono più facili se elenchi <strong>ogni caso possibile</strong> e li controlli uno per uno. Esempio di regole:</p><ul><li>Per entrare nella stanza del portale, un giocatore ha bisogno di <strong>selce o di una carica di fuoco</strong>.</li><li>Se li ha <strong>entrambi</strong>, deve anche indossare un’armatura d’oro.</li><li>Se ne ha <strong>solo uno</strong>, non serve l’armatura.</li></ul></div><div class="tbl"><table><tbody><tr><th>Selce</th><th>Carica di fuoco</th><th>Armatura d’oro</th><th>Può entrare?</th></tr><tr><td>✔</td><td>✘</td><td>—</td><td>Sì (un solo oggetto, nessuna regola extra)</td></tr><tr><td>✘</td><td>✔</td><td>—</td><td>Sì</td></tr><tr><td>✔</td><td>✔</td><td>✔</td><td>Sì</td></tr><tr><td>✔</td><td>✔</td><td>✘</td><td><strong>No</strong> — il caso «entrambi» aggiunge un requisito</td></tr><tr><td>✘</td><td>✘</td><td>—</td><td><strong>No</strong> — la prima regola non è soddisfatta</td></tr></tbody></table></div><div class="card warn"><p><strong>Attenzione ai dettagli che non contano.</strong> Se le regole dicono che per un giocatore con un solo oggetto non c’è alcun requisito extra, che abbia un’armatura o una password sbagliata è irrilevante. Le domande aggiungono spesso questi dettagli per vedere se applichi le regole con precisione.</p></div>'
        },
        {
          t: '2.3 · Cicli con una condizione dentro',
          html: '<div class="card "><p>Quando ogni giro ha due passi — «cambia il valore, poi controlla una condizione» — il controllo usa il valore <strong>dopo</strong> il cambiamento. E una volta superata una soglia, di solito la condizione resta vera in tutti i giri successivi.</p></div><div class="tracer" data-tr="coins"></div><div class="card warn"><h4>I due errori classici</h4><ul><li>Controllare la condizione sul valore di <em>prima</em> del cambiamento.</li><li>Applicare la condizione una sola volta, come se fosse fuori dal ciclo.</li></ul></div>'
        },
        {
          t: '2.4 · Contatori, flag e regole di arresto',
          html: '<div class="card "><p>Un <strong>contatore</strong> conta quante volte è successo qualcosa. Un <strong>flag</strong> (acceso/spento, True/False) ricorda che qualcosa è già successo. Una <strong>regola di arresto</strong> termina l’algoritmo in anticipo. Quando più regole valgono per lo stesso elemento, applicale nell’ordine scritto — un flag acceso da una regola può essere usato dalla regola successiva <strong>nello stesso passo</strong>.</p></div><div class="tracer" data-tr="flag"></div><div class="card tip"><p>Se tra le risposte c’è «l’algoritmo non si fermerà», prendila sul serio: traccia fino all’ultimo elemento prima di scegliere.</p></div>'
        },
        {
          t: '2.5 · L’algoritmo è davvero corretto?',
          html: '<div class="card "><p>Per dimostrare che un algoritmo è sbagliato basta <strong>un controesempio</strong>: un input per cui dà la risposta sbagliata. Prova i casi che si dimenticano: una corrispondenza che <em>non</em> coinvolge il primo elemento, l’ultimo elemento, un elemento confrontato con sé stesso, tutti gli elementi uguali, una lista di un solo elemento.</p></div><div class="card "><h4>Esempio</h4><p>Compito: decidere se tutti i numeri di una lista sono diversi. Algoritmo proposto: «confronta ogni numero solo con il successivo; se due sono uguali, rispondi No».</p><p>Controesempio: <code>3, 5, 3</code>. I vicini sono 3–5 e 5–3, mai uguali, quindi risponde «tutti diversi» — sbagliato. L’algoritmo non confronta mai numeri lontani tra loro.</p><p><strong>Correzione:</strong> confronta <em>ogni</em> numero con <em>ogni</em> numero che viene dopo. Due cicli: quello esterno prende ogni numero a turno, non solo il primo; quello interno lo confronta con il resto.</p></div><div class="card class"><p><strong>In classe:</strong> quando il programma di un alunno «funziona», chiedigli un input che potrebbe romperlo. Cercare controesempi è il modo di pensare dei programmatori.</p></div>'
        }
      ],
      quiz: [
        {
          p: 'Un robot parte dalla casella 1 e segue questa regola 4 volte: se il numero della casella è dispari, avanza di 3; se è pari, torna indietro di 1. Dove finisce?',
          o: ['4', '5', '6', '7'],
          c: 1,
          f: '1 → 4 → 3 → 6 → 5. Ogni controllo usa la casella su cui è appena arrivato.'
        },
        {
          p: 'Regole dell’arena: un giocatore ha bisogno di una spada O di uno scudo. Se li ha entrambi, deve anche essere di livello 5 o superiore. Con uno solo, non c’è requisito di livello. Chi NON può entrare?',
          o: ['Solo spada, livello 1', 'Solo scudo, livello 3', 'Spada e scudo, livello 7', 'Spada e scudo, livello 2'],
          c: 3,
          f: 'Solo il caso «entrambi» ha la regola extra del livello, e il livello 2 non la soddisfa. Il livello di chi ha un solo oggetto è irrilevante.'
        },
        {
          p: 'Il punteggio parte da 1. Ripeti 3 volte: moltiplica il punteggio per 2; poi, se il risultato è maggiore di 5, sottrai 3. Qual è il punteggio finale?',
          o: ['2', '5', '8', '13'],
          c: 1,
          f: '1 → 2 (non > 5). 2 → 4 (non > 5). 4 → 8 → 8 − 3 = 5.'
        },
        {
          p: 'Numeri: 3, 8, 5, 10, 1. contatore = 0, allarme = spento. Per ogni numero, in quest’ordine: se il numero è maggiore di 4, aggiungi 1 al contatore; quando il contatore arriva a 2, accendi l’allarme; se l’allarme è acceso e il numero è dispari, fermati. Su quale numero si ferma?',
          o: ['5', '10', '1', 'Non si ferma mai'],
          c: 0,
          f: '3: niente. 8: contatore 1. 5: contatore 2 → allarme acceso → nello stesso passo, 5 è dispari → si ferma su 5.'
        },
        {
          p: 'Per verificare se una lista è ordinata dal più piccolo al più grande, qualcuno propone: «confronta ogni numero con il primo; se uno è più piccolo del primo, rispondi Non ordinata». Qual è il problema principale?',
          o: ['Non funziona con i numeri negativi', 'Direbbe «Non ordinata» per qualsiasi lista', 'Non confronta mai i vicini dopo il primo, quindi 1, 5, 3 risulta ordinata', 'Funziona solo con liste di lunghezza pari'],
          c: 2,
          f: '5 e 3 sono entrambi maggiori di 1, quindi il controllo passa — eppure la lista non è ordinata. Basta un controesempio.'
        }
      ]
    },
    {
      id: 'python',
      ic: '🐍',
      slot: 'Python',
      title: 'Pratica di programmazione in Python',
      sections: [
        {
          t: '3.1 · Leggere il codice come il computer',
          html: '<div class="card why"><p>Un buon tutor deve saper scrivere i propri programmi e comprendere rapidamente il codice scritto da altri. Durante le lezioni dovrai leggere le soluzioni degli alunni, capire esattamente cosa fa il programma, individuare le cause degli errori e aiutarli a correggerli.</p><p>In questo blocco lavoreremo con Python. Non serve ricordare ogni comando a memoria: conta capire come viene eseguito il codice, come interagiscono le sue parti e perché il programma produce un determinato risultato.</p><p>Dovrai leggere brevi programmi, individuare errori e svolgere alcuni esercizi pratici. Non preoccuparti: non ci saranno algoritmi complessi. Verificheremo la tua padronanza dei principi di base della programmazione.</p></div><div class="tbl"><table><tbody><tr><th>Elemento</th><th>Cosa significa</th></tr><tr><td><code>range(4)</code></td><td>0, 1, 2, 3 — parte da 0 e si ferma <strong>prima</strong> del 4</td></tr><tr><td><code>range(2, 6)</code></td><td>2, 3, 4, 5 — include l’inizio, esclude la fine</td></tr><tr><td><code>total += x</code></td><td>Uguale a <code>total = total + x</code></td></tr><tr><td><code>a % b</code></td><td>Resto. <code>n % 2 == 0</code> significa che n è pari; <code>== 1</code> significa dispari</td></tr><tr><td><code>a // b</code></td><td>Divisione intera: <code>7 // 2</code> fa 3</td></tr><tr><td><code>=</code> rispetto a <code>==</code></td><td><code>=</code> memorizza un valore; <code>==</code> confronta due valori</td></tr><tr><td><code>&gt;</code> rispetto a <code>&gt;=</code></td><td>«Maggiore di 10» esclude il 10; «almeno 10» lo include. Lo 0 non è positivo.</td></tr></tbody></table></div><div class="tracer" data-tr="pyloop"></div>'
        },
        {
          t: '3.2 · Liste e indici',
          html: '<pre class="code">numbers = [4, 15, 7, 22]\n# index:    0   1  2   3\n\nnumbers[1]      # 15\nlen(numbers)    # 4\n\nfor n in numbers:              # n is each VALUE: 4, 15, 7, 22\n    ...\nfor i in range(len(numbers)):  # i is each INDEX: 0, 1, 2, 3\n    ...  numbers[i]  ...</pre><div class="card warn"><p>Gli indici partono da <strong>0</strong>. Quando un compito chiede «l’indice», restituisci <code>i</code>, non <code>numbers[i]</code>. Confondere indice e valore è una delle risposte sbagliate più comuni.</p></div>'
        },
        {
          t: '3.3 · return termina subito la funzione',
          html: '<div class="card "><p>Una funzione si ferma nel momento in cui raggiunge <code>return</code> — anche a metà di un ciclo. Il valore dopo <code>return</code> è ciò che la chiamata restituisce. <code>print</code> mostra solo qualcosa sullo schermo; non restituisce nulla.</p><p>In Python, <strong>l’indentazione decide cosa sta dentro cosa</strong>. Quattro spazi in più significano «dentro il ciclo» o «dentro l’if». Per questo la posizione di una sola riga <code>return</code> può cambiare tutto il risultato.</p></div><div class="tracer" data-tr="pyreturn"></div>'
        },
        {
          t: '3.4 · Schema: «TUTTI gli elementi vanno bene?»',
          html: '<div class="card "><p>Per verificare che <em>tutti</em> gli elementi rispettino una condizione, cerca <strong>un elemento che la viola</strong>. Appena lo trovi, <code>return False</code>. Solo dopo che il ciclo ha controllato tutto puoi fare <code>return True</code>.</p></div><pre class="code good">def all_below_100(numbers):\n    for n in numbers:\n        if n &gt;= 100:\n            return False   # one bad item is enough\n    return True            # after the loop: nothing was bad</pre><div class="cols"><div><pre class="code bad"># WRONG: decides after the first item\nfor n in numbers:\n    if n &lt; 100:\n        return True\n    else:\n        return False</pre></div><div><pre class="code bad"># WRONG: returns True as soon as\n# ONE item is OK\nfor n in numbers:\n    if n &lt; 100:\n        return True\nreturn False</pre></div></div><div class="card tip"><p>Controlla anche il limite della condizione: «positivo» significa <code>&gt; 0</code>, quindi una lista che contiene 0 non è tutta positiva.</p></div>'
        },
        {
          t: '3.5 · Schema: «trova il PRIMO»',
          html: '<div class="card "><p>Per restituire l’indice del primo elemento che corrisponde: <code>return i</code> dentro l’<code>if</code>, così la funzione si ferma alla prima corrispondenza. Il valore «non trovato» (<code>-1</code>) va <strong>dopo</strong> il ciclo, perché sai che nulla corrisponde solo dopo aver controllato ogni elemento.</p></div><pre class="code good">def find_first_even(numbers):\n    for i in range(len(numbers)):\n        if numbers[i] % 2 == 0:\n            return i      # first match: stop here\n    return -1             # loop finished: no match\n\nfind_first_even([3, 7, 8, 10])   # 2</pre><div class="tbl"><table><tbody><tr><th>Versione sbagliata</th><th>Cosa va storto</th></tr><tr><td><code>else: return -1</code> dentro il ciclo</td><td>Si arrende dopo il primo elemento se non corrisponde.</td></tr><tr><td><code>result = i</code> nel ciclo, <code>return result</code> dopo</td><td>Continua a sovrascrivere, quindi restituisce l’<strong>ultima</strong> corrispondenza, non la prima.</td></tr><tr><td><code>for n in numbers: … return n</code></td><td>Restituisce il <strong>valore</strong>, non l’indice.</td></tr></tbody></table></div>'
        },
        {
          t: '3.6 · Aiutare un alunno a fare debug',
          html: '<div class="card class"><p>Le stesse abitudini valgono a entrambi i livelli di CraftForge quando leggi il codice di un alunno. Non correggerlo al posto suo — aiutalo a trovare l’errore:</p><ul><li><strong>Leggete l’errore ad alta voce insieme.</strong> «A quale riga punta, e cosa ti aspetti che succeda lì?»</li><li><strong>Isola l’ultima modifica.</strong> «Qual è l’ultima cosa che hai cambiato prima che si rompesse?»</li><li><strong>Traccia con un input piccolo</strong> — due o tre elementi bastano a far emergere la maggior parte dei bug.</li><li>Se il codice viene dall’IA: «Prima di aggiungerlo, spiegami cosa fa questa riga».</li></ul></div><div class="tbl"><table><tbody><tr><th>Errore che vede l’alunno</th><th>Causa tipica</th></tr><tr><td>IndentationError</td><td>Spazi mescolati o mancanti all’inizio di una riga</td></tr><tr><td>SyntaxError</td><td>Manca <code>:</code> dopo <code>for</code>/<code>if</code>/<code>def</code>, oppure c’è <code>=</code> dove serve <code>==</code></td></tr><tr><td>NameError</td><td>Un errore di battitura nel nome di una variabile, o usarla prima che esista</td></tr><tr><td>Risultato sbagliato, nessun errore</td><td>Logica: un <code>return</code> nel posto sbagliato, <code>&gt;</code> rispetto a <code>&gt;=</code>, il valore iniziale sbagliato</td></tr></tbody></table></div>'
        }
      ],
      quiz: [
        {
          p: 'Cosa stamperà questo programma?<pre class="code">total = 0\nfor i in range(1, 5):\n    total += i * 2\nprint(total)</pre>',
          o: ['10', '12', '20', '30'],
          c: 2,
          f: 'range(1, 5) è 1, 2, 3, 4. Quindi 2 + 4 + 6 + 8 = 20. (Per 30 servirebbe range(1, 6).)'
        },
        {
          p: 'Cosa restituisce questa chiamata?<pre class="code">def mystery(nums):\n    result = 0\n    for n in nums:\n        if n % 2 == 1:\n            result += n\n    return result\n\nmystery([3, 4, 7, 10])</pre>',
          o: ['2', '10', '14', '24'],
          c: 1,
          f: 'Somma solo i numeri dispari: 3 + 7 = 10. (2 sarebbe contarli; 24 sarebbe sommare tutto.)'
        },
        {
          p: 'count_evens([2, 4, 6]) restituisce 1 invece di 3. Quale modifica lo corregge per qualsiasi lista?<pre class="code">def count_evens(numbers):\n    count = 0\n    for n in numbers:\n        if n % 2 == 0:\n            count += 1\n        return count</pre>',
          o: ['Far partire count da 1', 'Spostare return count dentro l’if', 'Spostare return count fuori dal ciclo for, dopo di esso', 'Cambiare == 0 in == 1'],
          c: 2,
          f: 'return è dentro il ciclo, quindi la funzione termina dopo il primo numero. Messo dopo il ciclo, viene eseguito quando tutto è stato contato.'
        },
        {
          p: 'all_even(numbers) deve restituire True solo se ogni numero è pari. Quale versione è corretta?',
          o: ['A<pre class="code">for n in numbers:\n    if n % 2 == 0:\n        return True\nreturn False</pre>', 'B<pre class="code">for n in numbers:\n    if n % 2 != 0:\n        return False\nreturn True</pre>', 'C<pre class="code">for n in numbers:\n    if n % 2 != 0:\n        return False\n    else:\n        return True</pre>', 'Nessuna'],
          c: 1,
          f: 'B restituisce False al primo numero dispari e True solo dopo averli controllati tutti. A si ferma al primo numero pari; C decide dopo aver guardato un solo elemento.'
        },
        {
          p: 'find_first_negative(numbers) deve restituire l’indice del primo numero negativo, o -1 se non ce ne sono. Quale versione funziona con qualsiasi lista?',
          o: ['A<pre class="code">for i in range(len(numbers)):\n    if numbers[i] &lt; 0:\n        return i\n    else:\n        return -1</pre>', 'B<pre class="code">result = -1\nfor i in range(len(numbers)):\n    if numbers[i] &lt; 0:\n        result = i\nreturn result</pre>', 'C<pre class="code">for i in range(len(numbers)):\n    if numbers[i] &lt; 0:\n        return i\nreturn -1</pre>', 'D<pre class="code">for n in numbers:\n    if n &lt; 0:\n        return n\nreturn -1</pre>'],
          c: 2,
          f: 'C si ferma alla prima corrispondenza e restituisce -1 solo dopo l’intera lista. A si arrende dopo un elemento, B restituisce l’ultima corrispondenza, D restituisce il valore invece dell’indice.'
        },
        { p:'Quali valori produce range(2, 6)?', o:['2, 3, 4, 5, 6', '2, 3, 4, 5', '3, 4, 5, 6', '0, 1, 2, 3, 4, 5'], c:1, f:'L’inizio è incluso, la fine no.' }
      ]
    },
    {
      id: 'datapacks',
      ic: '📜',
      slot: 'Datapack',
      title: 'Data pack: le leggi del mondo',
      sections: [
        {
          t: '4.1 · Che cos’è un data pack',
          html: '<div class="card why"><p>I data pack permettono allo studente di fissare le proprie <strong>leggi</strong> per Minecraft — nuove ricette, comandi personalizzati, timer, eventi e punteggi — senza modificare il gioco. Aprono l’anno (modulo 01, «il mondo inizia a funzionare secondo le regole scritte dallo studente») e alimentano il modulo 06, in cui una zona qualsiasi diventa un gioco.</p></div><pre class="code">my_pack/\n├── pack.mcmeta                    ← required: tells Minecraft this is a data pack\n└── data/\n    ├── forge/                     ← the student\'s namespace\n    │   └── function/\n    │       ├── setup.mcfunction   ← one command per line, no "/"\n    │       └── loop.mcfunction\n    └── minecraft/\n        └── tags/function/\n            ├── load.json          ← lists functions that run when the world loads or /reload runs\n            └── tick.json          ← lists functions that run every game tick</pre><div class="card tip"><p>I nomi delle cartelle dipendono dalla versione del gioco: dalla 1.21 sono al singolare (<code>function</code>, <code>recipe</code>); le versioni precedenti usano il plurale (<code>functions</code>, <code>recipes</code>). Un nome di cartella sbagliato è un errore silenzioso — il pack si carica ma non succede nulla. Usa la struttura fornita dall’ambiente del tuo corso.</p></div>'
        },
        {
          t: '4.2 · load, tick e la regola dei 20 tick',
          html: '<div class="tbl"><table><tbody><tr><th>Quando</th><th>Cosa viene eseguito</th></tr>\n    <tr><td>Al caricamento del mondo, o con <code>/reload</code></td><td>Le funzioni elencate in <code>load.json</code> — una volta. Utile per la preparazione: creare scoreboard.</td></tr>\n    <tr><td>A ogni tick di gioco — <strong>20 volte al secondo</strong></td><td>Le funzioni elencate in <code>tick.json</code>. Utile per timer e controllo di condizioni.</td></tr>\n    <tr><td>Quando la chiami tu</td><td><code>/function forge:setup</code> esegue una funzione a mano — ottimo per i test.</td></tr></tbody></table></div><pre class="code"># setup.mcfunction  (in load.json: runs once)\nscoreboard objectives add timer dummy\nscoreboard objectives add points dummy\nscoreboard objectives setdisplay sidebar points\n\n# loop.mcfunction   (in tick.json: runs 20 times per second)\nscoreboard players add #game timer 1\nexecute if score #game timer matches 200 run say Ten seconds!</pre><div class="card "><p>Il timer sale di 1 a ogni tick, quindi 200 tick = <strong>10 secondi</strong>. <code>execute if …</code> è la versione data pack di un <code>if</code>. Lo scoreboard è il modo in cui il modulo 06 «tiene i punti».</p></div>'
        },
        {
          t: '4.3 · Quando una regola non scatta',
          html: '<div class="tbl"><table><tbody><tr><th>Sintomo</th><th>Prima cosa da controllare</th></tr>\n    <tr><td>Non succede niente</td><td>Ha eseguito <code>/reload</code> dopo la modifica? Il pack è attivo (<code>/datapack list</code>)?</td></tr>\n    <tr><td>La preparazione non è mai avvenuta</td><td>La funzione è elencata in <code>load.json</code>, con il namespace giusto?</td></tr>\n    <tr><td>Funziona una volta, ma non dopo essere rientrati nel mondo</td><td>La preparazione è stata eseguita a mano e non è in <code>load.json</code></td></tr>\n    <tr><td>Scatta di continuo invece di una volta</td><td>Il comando si trova in una funzione tick senza condizione</td></tr>\n    <tr><td>La condizione non scatta mai</td><td>Controlla il nome dell’obiettivo, il bersaglio e il numero — traccialo come qualsiasi algoritmo</td></tr></tbody></table></div><div class="card class"><p><strong>In classe:</strong> non correggerlo al posto loro. Controllate insieme il trigger: <em>«Spiegami quando dovrebbe scattare».</em> Al caricamento, a ogni tick, o solo quando una condizione è vera?</p></div>'
        }
      ],
      quiz: [
        {
          p: 'Quante volte al secondo viene eseguita una funzione elencata in tick.json?',
          o: ['1', '10', '20', '60'],
          c: 2,
          f: 'Minecraft esegue 20 tick di gioco al secondo, e le funzioni tick girano a ogni tick.'
        },
        {
          p: 'Un timer aggiunge 1 a un punteggio a ogni tick. Quale valore significa che sono passati 30 secondi?',
          o: ['30', '300', '600', '1800'],
          c: 2,
          f: '20 tick al secondo × 30 secondi = 600.'
        },
        {
          p: 'Uno studente ha modificato un file di funzione, ma il gioco si comporta ancora come prima. Cosa dovrebbe provare per prima cosa?',
          o: ['Cancellare il mondo', 'Eseguire /reload', 'Riavviare il computer', 'Rinominare il namespace'],
          c: 1,
          f: '/reload carica i file modificati e riesegue le funzioni load.'
        },
        {
          p: 'Dove va il comando che crea un obiettivo dello scoreboard?',
          o: ['In una funzione elencata in load.json', 'In una funzione elencata in tick.json', 'In pack.mcmeta', 'Va digitato a mano a ogni lezione'],
          c: 0,
          f: 'La preparazione va in una funzione load: viene eseguita una volta al caricamento del mondo o con /reload.'
        },
        {
          p: 'La regola di uno studente non scatta e vuole che tu la sistemi. Cosa dici?',
          o: ['«Lascia che te la riscriva io».', '«Spiegami quando dovrebbe scattare».', '«Chiedi a Sparks di riscriverla».', '«I data pack sono troppo difficili — saltiamoli».'],
          c: 1,
          f: 'Controllare insieme il trigger fa sì che sia lo studente a risolverlo, passo dopo passo.'
        }
      ]
    }
  ],
  tracers: {
    robot: {
      title: 'Traccialo: il robot sulla linea dei numeri',
      code: ['x = 3', 'repeat 4 times:', '    if x is a multiple of 3:', '        move 2 forward', '    otherwise:', '        move 1 back'],
      steps: [
        {
          l: 0,
          v: { x:3, round:'–' },
          n: 'Scrivi il valore iniziale prima di tutto.'
        },
        {
          l: 2,
          v: { x:3, round:1 },
          n: 'Giro 1. 3 è multiplo di 3? Sì.'
        },
        {
          l: 3,
          v: { x:5, round:1 },
          n: '3 + 2 = 5. Il giro successivo controlla il NUOVO valore di x, 5.'
        },
        {
          l: 5,
          v: { x:4, round:2 },
          n: 'Giro 2. 5 non è multiplo di 3, quindi torna indietro: 5 − 1 = 4.'
        },
        {
          l: 5,
          v: { x:3, round:3 },
          n: 'Giro 3. 4 non è multiplo di 3: 4 − 1 = 3.'
        },
        {
          l: 3,
          v: { x:5, round:4 },
          n: 'Giro 4. 3 è di nuovo multiplo di 3: 3 + 2 = 5. Quattro giri fatti.'
        },
        {
          l: 1,
          v: { x:5, round:'done' },
          n: 'Risposta finale: 5. Nota che il robot è tornato a 3 — un ciclo che ripassa su un valore è una trappola classica per chi tira a indovinare.'
        }
      ]
    },
    coins: {
      title: 'Traccialo: un ciclo con una condizione dentro',
      code: ['coins = 2', 'repeat 3 times:', '    coins = coins + 3', '    if coins > 6:', '        coins = coins * 2'],
      steps: [
        {
          l: 0,
          v: { coins:2, round:'–' },
          n: 'Valore iniziale.'
        },
        {
          l: 2,
          v: { coins:5, round:1 },
          n: 'Giro 1: prima si somma. 2 + 3 = 5.'
        },
        {
          l: 3,
          v: { coins:5, round:1 },
          n: 'Ora controlla il valore NUOVO: 5 > 6? No — niente raddoppia.'
        },
        {
          l: 2,
          v: { coins:8, round:2 },
          n: 'Giro 2: 5 + 3 = 8.'
        },
        {
          l: 4,
          v: { coins:16, round:2 },
          n: '8 > 6, quindi raddoppia: 16.'
        },
        {
          l: 2,
          v: { coins:19, round:3 },
          n: 'Giro 3: 16 + 3 = 19.'
        },
        {
          l: 4,
          v: { coins:38, round:3 },
          n: '19 > 6, raddoppia di nuovo: 38. Superata la soglia, il raddoppio scatta a ogni giro.'
        }
      ]
    },
    flag: {
      title: 'Traccialo: un contatore, un flag e una regola di arresto',
      code: ['numbers = 6, 1, 8, 3, 12', 'counter = 0, mode = off', 'for each number, in this order:', '    if number > 5: counter + 1', '    if counter == 2: mode = on', '    if mode is on and number is odd: STOP'],
      steps: [
        {
          l: 1,
          v: { number:'–', counter:0, mode:'off' },
          n: 'Scrivi ogni variabile nella sua colonna prima di iniziare.'
        },
        {
          l: 3,
          v: { number:6, counter:1, mode:'off' },
          n: '6 > 5 → contatore 1. La modalità resta spenta. Comunque 6 è pari.'
        },
        {
          l: 5,
          v: { number:1, counter:1, mode:'off' },
          n: '1 non è > 5. La modalità è spenta, quindi la regola di arresto non può scattare anche se 1 è dispari.'
        },
        {
          l: 4,
          v: { number:8, counter:2, mode:'on' },
          n: '8 > 5 → contatore 2 → la modalità si accende in questo stesso passo.'
        },
        {
          l: 5,
          v: { number:8, counter:2, mode:'on' },
          n: 'Terza regola, stesso numero: la modalità è accesa, ma 8 è pari. Si continua.'
        },
        {
          l: 5,
          v: { number:3, counter:2, mode:'on' },
          n: '3: non è > 5. La modalità è accesa e 3 è dispari → STOP su 3. Il 12 non viene mai letto.'
        }
      ]
    },
    pyloop: {
      title: 'Traccialo: for + range in Python',
      code: ['total = 1', 'for i in range(3):', '    total = total + i * 3', 'print(total)'],
      steps: [
        {
          l: 0,
          v: { total:1, i:'–' },
          n: 'total parte da 1, non da 0 — controlla sempre il valore iniziale.'
        },
        {
          l: 1,
          v: { total:1, i:0 },
          n: 'range(3) dà 0, 1, 2. Parte da 0 e non arriva mai a 3.'
        },
        {
          l: 2,
          v: { total:1, i:0 },
          n: '1 + 0 * 3 = 1. La moltiplicazione viene prima dell’addizione.'
        },
        {
          l: 2,
          v: { total:4, i:1 },
          n: '1 + 1 * 3 = 4.'
        },
        {
          l: 2,
          v: { total:10, i:2 },
          n: '4 + 2 * 3 = 10. Era l’ultimo valore prodotto da range(3).'
        },
        {
          l: 3,
          v: { total:10, i:2 },
          n: 'Il print non è indentato, quindi viene eseguito una volta, dopo il ciclo. Output: 10.'
        }
      ]
    },
    pyreturn: {
      title: 'Traccialo: dove sta il return cambia tutto',
      code: ['def count_evens(numbers):', '    count = 0', '    for n in numbers:', '        if n % 2 == 0:', '            count += 1', '        return count', '', 'count_evens([2, 4, 6])'],
      steps: [
        {
          l: 7,
          v: { n:'–', count:'–', returned:'–' },
          n: 'Chiamiamo la funzione con [2, 4, 6]. La risposta attesa è 3.'
        },
        {
          l: 1,
          v: { n:'–', count:0, returned:'–' },
          n: 'count parte da 0.'
        },
        {
          l: 2,
          v: { n:2, count:0, returned:'–' },
          n: 'Primo giro del ciclo: n = 2.'
        },
        {
          l: 4,
          v: { n:2, count:1, returned:'–' },
          n: '2 % 2 == 0, quindi count diventa 1.'
        },
        {
          l: 5,
          v: { n:2, count:1, returned:1 },
          n: 'return è indentato DENTRO il ciclo for. Viene eseguito al primissimo giro ed esce dalla funzione: risultato 1. Il 4 e il 6 non vengono mai guardati.'
        },
        {
          l: 5,
          v: { n:2, count:1, returned:1 },
          n: 'Correzione: sposta return count indietro di quattro spazi, allo stesso livello di for. Così viene eseguito una volta, dopo che ogni numero è stato contato.'
        }
      ]
    }
  }
};
