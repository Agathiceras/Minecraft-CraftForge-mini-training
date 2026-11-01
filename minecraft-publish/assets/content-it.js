/* ============================================================
   Minecraft publishing simulation (Kodland Sparks + Kodland Launcher + the lesson card) · ITALIAN
   Translated from content-en.js. Translate only the text inside quotes / backticks. Keep HTML tags, keys and the button names
   that appear in the real interface (Publish project, Minecraft skin, Image, Public, Only me, Edit, Everyone, Copy link…).
   ============================================================ */
window.CONTENT = { lang: 'it' };

CONTENT.ui = {
  title: 'Kodland Sparks · Pubblicare un progetto Minecraft',
  coachStep: (n, total) => `Passaggio ${n} di ${total}`,
  next: 'Avanti →',
  finish: 'Fine ✓',
  clickHint: '👆 Clicca sul punto evidenziato',
  followStep: 'Segui il passaggio evidenziato 🙂',
  langName: 'Italiano',
  studentNick: 'lucas_craft',
  studentName: 'Lucas',
  studentInitial: 'L',
  skinTitle: 'Lucas l’esploratore',
  skinFile: 'lucas_skin.png',
  towerTitle: 'Torre di guardia',
  oldTitle: 'La mia casa sull’isola',
  fileName: 'torre_di_guardia.png',
  packName: 'Mele di pietra',
  uploaded: 'Caricato ✓',
  uploaded2: 'Caricato il 26 ott 2026',
  saved: 'Salvato',
  copied: 'Link copiato',
  chars: n => `${n} caratteri`,
  cardTab: 'Piattaforma Kodland · Lezione 1',
  cardUrl: 'https://platform.kodland.org/lesson/1'
};

CONTENT.flows = {
  /* Beginner: part 1 = the skin as a Minecraft skin project (Lesson 1); part 2 = a build screenshot as an Image project (Lesson 2 and homework) */
  image: {
    card: { gif: 'assets/crafters-skin.gif', label: 'Link alla mia skin su Kodland Sparks', placeholder: 'Incolla qui il link alla tua skin' },
    welcome: {
      kicker: '⚡ Simulazione · Minecraft CraftForge Beginner',
      title: 'Pubblica una <span>skin e una costruzione</span> su Kodland Sparks',
      lead: 'In Minecraft CraftForge Beginner, gli studenti pubblicano i loro lavori su Kodland Sparks fin dalla Lezione 1: prima la propria <b>skin</b>, poi gli screenshot delle loro costruzioni come progetti <b>Image</b>. Dopo ogni pubblicazione, incollano il link del progetto nella scheda della lezione. Qui sei Lucas, uno studente.',
      seeTitle: 'Che cosa farai',
      see: ['Pubblicare una skin come progetto <b>Minecraft skin</b> e scegliere chi può vederla.', 'Trovare il link: <b>My projects → il progetto pubblicato → l’indirizzo nella barra del browser</b>.', 'Incollare il link nella scheda della lezione sulla piattaforma Kodland.', 'Pubblicare lo screenshot di una costruzione come progetto <b>Image</b> e sistemare un link che nessun altro riesce ad aprire.'],
      how: 'Una scheda guida ti mostra ogni passaggio. Clicca sul punto evidenziato. Richiede circa 5 minuti.',
      start: 'Inizia la simulazione →'
    },
    steps: {
      start: { title: 'La skin di Lucas è pronta', text: 'Lucas ha disegnato il suo crafter: un file di skin PNG 64×64. Ora lo pubblica su Kodland Sparks, così può indossare la skin nel launcher e inviarne il link nella scheda della lezione.' },
      navPublish: { title: 'Publish project', text: 'Nella barra in alto di Sparks, clicca su <b>Publish project</b>.' },
      typeSkin: { title: 'Tipo di progetto: Minecraft skin', text: 'Ci sono otto tipi di progetto. Una skin si pubblica come <b>Minecraft skin</b>: Sparks la mostra su un modello 3D. Cliccaci sopra.' },
      title: { title: 'Dagli un nome', text: 'Clicca sul campo del titolo. Un progetto con un nome chiaro è facile da ritrovare — per lo studente e per te.' },
      model: { title: 'Steve o Alex', text: 'Il <b>Model</b> stabilisce la forma del corpo su cui viene mostrata la skin: <b>Steve</b> (braccia classiche) o <b>Alex</b> (braccia sottili). Steve è selezionato di default.' },
      upload: { title: 'Skin file (PNG)', text: 'Clicca su <b>Choose file</b> e aggiungi la skin: un <b>PNG 64×64</b> (funziona anche il vecchio formato 64×32).' },
      visibility: { title: 'Chi può vederlo', text: '<ul><li><b>Public</b>: nel feed e nel portfolio pubblico.</li><li><b>Friends only</b>: amici, insegnanti e lo studente.</li><li><b>Only me</b>: nessun altro può aprire il link — nemmeno il tutor.</li></ul>L’importante è che <b>il tutor possa aprire il link</b>.' },
      visPublic: { title: 'Scegli Public', text: 'Lucas vuole che gli altri giocatori vedano il suo crafter. Clicca su <b>Public</b>.' },
      toggles: { title: 'Le opzioni finali', text: '<ul><li><b>Request feedback</b>: altri autori possono lasciare un feedback strutturato (solo progetti pubblici).</li><li><b>Others can modify this project</b>: attivo di default — gli altri possono aprire una propria copia; l’originale resta intatto.</li><li><b>Discord selection</b>: i migliori progetti pubblici del giorno vengono condivisi su Discord.</li></ul>' },
      publish: { title: 'Pubblica', text: 'Clicca su <b>1× 💎 Publish</b>. Pubblicando si guadagna anche un cristallo.' },
      findMy: { title: 'Dov’è il link?', text: 'La skin è pubblicata. Ora lo studente ha bisogno del suo link. Non è un testo da copiare da qualche parte: è l’indirizzo della pagina del progetto. Prima vai su <b>My projects</b>.' },
      openSkin: { title: 'Apri il progetto pubblicato', text: 'Il profilo mostra i progetti dello studente. Clicca sulla skin che hai appena pubblicato.' },
      copy: { title: 'Copia il link dalla barra del browser', text: 'La pagina del progetto è aperta. Il suo link è l’indirizzo nella <b>barra del browser</b>: <code>portfolio.kodland.org/nickname/…</code>. Clicca sulla barra per selezionarlo e copialo (Ctrl + C / Cmd + C).' },
      toCard: { title: 'Vai alla lezione sulla piattaforma', text: 'Pubblicare su Sparks e inviare il link sulla piattaforma Kodland sono <b>due passaggi distinti</b>. Apri la scheda del browser con la lezione.' },
      paste: { title: 'Incolla il link nella scheda', text: 'Questa è la scheda <b>«La skin del crafter»</b> sulla piattaforma. Clicca sul campo <b>«Link alla mia skin su Kodland Sparks»</b> per incollare il link (Ctrl + V / Cmd + V). Qui va solo il link. Controlla in Backoffice che i link siano arrivati davvero.' },
      imageIntro: { title: 'Dalla Lezione 2: costruzioni come Image', text: 'Dalla Lezione 2 in poi, gli studenti pubblicano anche gli <b>screenshot delle loro costruzioni</b> (F5 per vedersi in terza persona, F1 per nascondere l’interfaccia). Lucas ha appena finito una torre di guardia. Torna alla scheda di Kodland Sparks.' },
      navPublish2: { title: 'Publish project', text: 'Clicca di nuovo su <b>Publish project</b>.' },
      typeImage: { title: 'Tipo di progetto: Image', text: 'Uno screenshot si pubblica come <b>Image</b>. Cliccaci sopra.' },
      title2: { title: 'Nome', text: 'Clicca sul campo del titolo.' },
      upload2: { title: 'Drawing: lo screenshot', text: 'In <b>Drawing</b>, clicca su <b>Choose file</b> (PNG, JPG, WebP o GIF fino a 5 MB). Su Windows lo screenshot si trova in <b>Immagini → Screenshot</b>; su Mac, sulla scrivania.' },
      publish2: { title: 'Pubblica', text: 'La visibilità resta su <b>Public</b>. Clicca su <b>Publish</b>. Il link si trova allo stesso modo: My projects → il progetto → la barra del browser.' },
      problem: { title: 'Un link che non si apre', text: 'Un altro caso: uno studente invia un link che a te non si apre. Sul profilo dello studente, il progetto mostra l’etichetta <b>Private project</b>: è stato salvato come <b>Only me</b>. Sistemiamolo nei panni di Lucas.' },
      myProjects: { title: 'My projects', text: 'Clicca su <b>My projects</b>.' },
      privateCard: { title: 'Il progetto privato', text: 'Apri il progetto con l’etichetta <b>Private project</b>.' },
      edit: { title: 'Edit', text: 'Clicca su <b>Edit</b>.' },
      fixPublic: { title: 'Cambia la visibilità', text: 'Scegli <b>Public</b> (oppure <b>Friends only</b>, che anche gli insegnanti possono aprire).' },
      resend: { title: 'Pubblica di nuovo', text: 'Clicca su <b>Publish</b>. Il link resta lo stesso e ora puoi aprirlo anche tu.' },
      done: { title: 'Risolto', text: 'Il progetto è pubblico e il link nella barra del browser funziona. Se un link continua a non aprirsi, chiedi allo studente di condividere lo schermo e ripetete insieme i passaggi.' }
    },
    finish: {
      kicker: '🏁 Simulazione completata',
      title: 'Sai come si pubblica <span>un lavoro Minecraft</span>',
      intro: 'Ecco che cosa fanno gli studenti ogni volta che una lezione chiede di pubblicare:',
      points: ['Skin: <b>Publish project</b> → <b>Minecraft skin</b> → nome → Model (Steve/Alex) → PNG 64×64 → <b>Publish</b>.', 'Costruzione: screenshot (F5, F1) → <b>Publish project</b> → <b>Image</b> → nome → Drawing → <b>Publish</b>.', 'Il link: <b>My projects → il progetto pubblicato → copia l’indirizzo dalla barra del browser</b>, poi incollalo nella scheda della lezione sulla piattaforma. Pubblicare e inviare il link sono due passaggi distinti.', '<b>Private project</b> = Only me: My projects → progetto → Edit → Public → Publish. Il link resta lo stesso.'],
      back: 'Torna alla formazione: la verifica del modulo ora è sbloccata.',
      again: '↺ Ripeti'
    }
  },

  /* Intermediate: the data pack is published from the Kodland Launcher (0.8.20) */
  datapack: {
    card: { gif: 'assets/sign-the-law.gif', label: 'Link alla mia legge su Kodland Sparks', placeholder: 'Incolla qui il link al tuo data pack pubblicato' },
    welcome: {
      kicker: '⚡ Simulazione · Minecraft CraftForge Intermediate',
      title: 'Pubblica un <span>data pack</span> su Kodland Sparks',
      lead: 'In Minecraft CraftForge Intermediate, gli studenti creano leggi per il mondo (ricette, drop, comandi) in un <b>data pack</b> nel Kodland Launcher e lo pubblicano sul proprio profilo Sparks direttamente dall’editor. Qui sei Lucas, uno studente che ha appena creato la sua prima ricetta.',
      seeTitle: 'Che cosa farai',
      see: ['Aprire il data pack nel launcher: <b>Create → Data packs → Edit</b>.', 'Pubblicarlo con <b>Who can see it? → Everyone</b> e copiare il link.', 'Incollare il link nella scheda della lezione sulla piattaforma Kodland.', 'Sistemare un link che non si apre e ritrovare il link con <b>Open on Sparks</b>.'],
      how: 'Una scheda guida ti mostra ogni passaggio. Clicca sul punto evidenziato. Richiede circa 4 minuti.',
      start: 'Inizia la simulazione →'
    },
    steps: {
      start: { title: 'La legge funziona', text: 'Lucas ha creato una ricetta nel suo data pack, l’ha salvata, è tornato nel mondo e ha creato il suo oggetto. Ora firma la legge: pubblica il data pack su Kodland Sparks. Questo è il launcher, nella scheda <b>Play</b>.' },
      create: { title: 'Create', text: 'I data pack si trovano nella scheda <b>Create</b>. Clicca su <b>Create</b>.' },
      edit: { title: 'Il data pack', text: 'Ecco i data pack dello studente. Clicca su <b>Edit</b> nel pack con la ricetta.' },
      editor: { title: 'L’editor del data pack', text: 'A sinistra trovi il contenuto del pack; al centro, il modulo della ricetta. In alto a destra, <b>Publish</b> è accanto al pulsante viola <b>Save</b>.' },
      publish: { title: 'Publish', text: 'Clicca su <b>Publish</b>.' },
      name: { title: 'Nome', text: 'Si apre «Publish to your profile». Clicca sul campo <b>Name</b>. <b>About it</b> è facoltativo.' },
      who: { title: 'Who can see it?', text: 'Qui si decide chi può aprire il link. Solo con <b>Everyone</b> il link si apre per gli altri — te compreso — senza accedere all’account dello studente.' },
      everyone: { title: 'Everyone', text: 'Seleziona <b>Everyone</b>.' },
      submit: { title: 'Publish', text: 'Clicca su <b>Publish</b>.' },
      copy: { title: 'Pubblicato! Copia il link', text: 'Compare «Published! It is on your profile.» con il link del progetto e un cristallo. Clicca su <b>Copy link</b>.' },
      close: { title: 'Done', text: 'Ora il pulsante dice <b>Copied!</b>. Clicca su <b>Done</b>.' },
      toCard: { title: 'Vai alla lezione sulla piattaforma', text: 'Pubblicare su Sparks e inviare il link sulla piattaforma Kodland sono <b>due passaggi distinti</b>. Apri la scheda del browser con la lezione.' },
      paste: { title: 'Incolla il link nella scheda', text: 'Questa è la scheda <b>«Firma la legge»</b> sulla piattaforma. Clicca sul campo <b>«Link alla mia legge su Kodland Sparks»</b> per incollare il link (Ctrl + V / Cmd + V). Controlla in Backoffice che i link siano arrivati davvero.' },
      problem: { title: 'Un link che non si apre', text: 'Alla lezione successiva, Lucas pubblica un aggiornamento, e a te il link non si apre. Molto probabilmente in «Who can see it?» era selezionato <b>Only me</b>. La soluzione: pubblicare di nuovo con Everyone.' },
      backLauncher: { title: 'Torna al launcher', text: 'Apri la scheda del Kodland Launcher.' },
      republish: { title: 'Pubblica di nuovo', text: 'Clicca su <b>Publish</b> nell’editor.' },
      fixEveryone: { title: 'Everyone', text: 'Il data pack è stato pubblicato come <b>Only me</b>. Scegli <b>Everyone</b>.' },
      resubmit: { title: 'Publish', text: 'Clicca su <b>Publish</b>. Ora il link si apre per tutti.' },
      lostLink: { title: 'Hai perso il link?', text: 'Se lo studente ha chiuso la finestra senza copiare il link, si può sempre ritrovare: <b>Open on Sparks</b> (qui, oppure in alto nell’editor) apre la pagina del progetto. Cliccaci sopra.' },
      done: { title: 'La pagina del progetto', text: 'Il data pack si apre sul profilo Sparks dello studente. Il link è l’indirizzo nella barra del browser — lo studente lo copia da lì e lo incolla nella scheda.' }
    },
    finish: {
      kicker: '🏁 Simulazione completata',
      title: 'Sai come si pubblica un <span>data pack</span>',
      intro: 'Ecco che cosa fanno gli studenti ogni volta che una lezione chiede di pubblicare le loro leggi:',
      points: ['Launcher: <b>Create → Data packs → Edit</b> → <b>Publish</b> (accanto a Save).', '«Publish to your profile»: nome → <b>Who can see it? → Everyone</b> → Publish → <b>Copy link</b> → Done.', 'Incolla il link nella scheda della lezione sulla piattaforma. Pubblicare e inviare il link sono due passaggi distinti.', 'Il link non si apre → pubblica di nuovo con <b>Everyone</b>. Link perso → <b>Open on Sparks</b> e copia l’indirizzo dalla barra del browser.'],
      back: 'Torna alla formazione: la verifica del modulo ora è sbloccata.',
      again: '↺ Ripeti'
    }
  }
};
