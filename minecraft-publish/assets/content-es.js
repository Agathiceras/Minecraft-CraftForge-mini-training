/* ============================================================
   Minecraft publishing simulation (Kodland Sparks + Kodland Launcher + the lesson card) · SPANISH (LatAm)
   Translated from content-en.js. Translate only the text inside quotes / backticks. Keep HTML tags, keys and the button names
   that appear in the real interface (Publish project, Minecraft skin, Image, Public, Only me, Edit, Everyone, Copy link…).
   ============================================================ */
window.CONTENT = { lang: 'es' };

CONTENT.ui = {
  title: 'Kodland Sparks · Publicar un proyecto de Minecraft',
  coachStep: (n, total) => `Paso ${n} de ${total}`,
  next: 'Siguiente →',
  finish: 'Terminar ✓',
  clickHint: '👆 Haz clic en el elemento destacado',
  followStep: 'Sigue el paso destacado 🙂',
  langName: 'Español',
  studentNick: 'lucas_craft',
  studentName: 'Lucas',
  studentInitial: 'L',
  skinTitle: 'Lucas el explorador',
  skinFile: 'lucas_skin.png',
  towerTitle: 'Torre de vigilancia',
  oldTitle: 'Mi casa en la isla',
  fileName: 'torre_vigilancia.png',
  packName: 'Manzanas de piedra',
  uploaded: 'Subido ✓',
  uploaded2: 'Subido el 26 oct 2026',
  saved: 'Guardado',
  copied: 'Link copiado',
  chars: n => `${n} caracteres`,
  cardTab: 'Plataforma Kodland · Lección 1',
  cardUrl: 'https://platform.kodland.org/lesson/1'
};

CONTENT.flows = {
  /* Beginner: part 1 = the skin as a Minecraft skin project (Lesson 1); part 2 = a build screenshot as an Image project (Lesson 2 and homework) */
  image: {
    card: { gif: 'assets/crafters-skin.gif', label: 'Link a mi skin en Kodland Sparks', placeholder: 'Pega aquí el link de tu skin' },
    welcome: {
      kicker: '⚡ Simulación · Minecraft CraftForge Beginner',
      title: 'Publicar una <span>skin y una construcción</span> en Kodland Sparks',
      lead: 'En Minecraft CraftForge Beginner, los estudiantes publican sus trabajos en Kodland Sparks desde la Lección 1: primero su propia <b>skin</b>, y después capturas de sus construcciones como proyectos <b>Image</b>. Luego pegan el link del proyecto en la tarjeta de la lección. Aquí eres Lucas, un estudiante.',
      seeTitle: 'Lo que vas a hacer',
      see: ['Publicar una skin como proyecto <b>Minecraft skin</b> y elegir quién puede verla.', 'Encontrar el link: <b>My projects → el proyecto publicado → la dirección en la barra del navegador</b>.', 'Pegar el link en la tarjeta de la lección en la plataforma Kodland.', 'Publicar la captura de una construcción como proyecto <b>Image</b>, y resolver un link que nadie más puede abrir.'],
      how: 'Una tarjeta guía te muestra cada paso. Haz clic en el elemento destacado. Toma unos 5 minutos.',
      start: 'Empezar la simulación →'
    },
    steps: {
      start: { title: 'La skin de Lucas está lista', text: 'Lucas dibujó su crafter: un archivo de skin PNG de 64×64. Ahora lo publica en Kodland Sparks para poder ponérsela en el launcher y enviar su link en la tarjeta de la lección.' },
      navPublish: { title: 'Publish project', text: 'En la barra superior de Sparks, haz clic en <b>Publish project</b>.' },
      typeSkin: { title: 'Tipo de proyecto: Minecraft skin', text: 'Hay ocho tipos de proyecto. Una skin se publica como <b>Minecraft skin</b>: Sparks la muestra sobre un modelo 3D. Haz clic ahí.' },
      title: { title: 'Ponle un nombre', text: 'Haz clic en el campo del título. Un proyecto con un nombre claro es fácil de encontrar después, para el estudiante y para ti.' },
      model: { title: 'Steve o Alex', text: 'El <b>Model</b> define la forma del cuerpo sobre la que se muestra la skin: <b>Steve</b> (brazos clásicos) o <b>Alex</b> (brazos delgados). Steve viene seleccionado por defecto.' },
      upload: { title: 'Archivo de skin (PNG)', text: 'Haz clic en <b>Choose file</b> y agrega la skin: un <b>PNG de 64×64</b> (el formato antiguo de 64×32 también funciona).' },
      visibility: { title: 'Quién puede verla', text: '<ul><li><b>Public</b>: en el feed y en el portafolio público.</li><li><b>Friends only</b>: los amigos, los profesores y el estudiante.</li><li><b>Only me</b>: nadie más puede abrir el link, ni siquiera tú.</li></ul>Lo importante es que <b>tú puedas abrir el link</b>.' },
      visPublic: { title: 'Elige Public', text: 'Lucas quiere que otros jugadores vean su crafter. Haz clic en <b>Public</b>.' },
      toggles: { title: 'Las opciones del final', text: '<ul><li><b>Request feedback</b>: otros autores pueden dejar un feedback estructurado (solo en proyectos públicos).</li><li><b>Others can modify this project</b>: activado por defecto; otros pueden abrir su propia copia y el original no cambia.</li><li><b>Discord selection</b>: los mejores proyectos públicos del día se publican en Discord.</li></ul>' },
      publish: { title: 'Publicar', text: 'Haz clic en <b>1× 💎 Publish</b>. Publicar también da un cristal.' },
      findMy: { title: '¿Dónde está el link?', text: 'La skin está publicada. Ahora el estudiante necesita su link. No es un texto para copiar de algún lado: es la dirección de la página del proyecto. Primero ve a <b>My projects</b>.' },
      openSkin: { title: 'Abrir el proyecto publicado', text: 'En el perfil aparecen los proyectos del estudiante. Haz clic en la skin que acabas de publicar.' },
      copy: { title: 'Copiar el link de la barra del navegador', text: 'La página del proyecto está abierta. Su link es la dirección en la <b>barra del navegador</b>: <code>portfolio.kodland.org/apodo/…</code>. Haz clic en la barra para seleccionarla y cópiala (Ctrl + C / Cmd + C).' },
      toCard: { title: 'Ir a la lección en la plataforma', text: 'Publicar en Sparks y enviar el link en la plataforma Kodland son <b>dos pasos distintos</b>. Abre la pestaña de la lección.' },
      paste: { title: 'Pegar el link en la tarjeta', text: 'Esta es la tarjeta <b>«La skin del crafter»</b> en la plataforma. Haz clic en el campo <b>«Link a mi skin en Kodland Sparks»</b> para pegar el link (Ctrl + V / Cmd + V). Aquí va solo el link. Revisa en el Backoffice que los links realmente llegaron.' },
      imageIntro: { title: 'Desde la Lección 2: construcciones como Image', text: 'Desde la Lección 2, los estudiantes también publican <b>capturas de sus construcciones</b> (F5 para verse, F1 para ocultar la interfaz). Lucas acaba de terminar una torre de vigilancia. Vuelve a la pestaña de Kodland Sparks.' },
      navPublish2: { title: 'Publish project', text: 'Haz clic otra vez en <b>Publish project</b>.' },
      typeImage: { title: 'Tipo de proyecto: Image', text: 'Una captura se publica como <b>Image</b>. Haz clic ahí.' },
      title2: { title: 'Nombre', text: 'Haz clic en el campo del título.' },
      upload2: { title: 'Drawing: la captura', text: 'En <b>Drawing</b>, haz clic en <b>Choose file</b> (PNG, JPG, WebP o GIF de hasta 5 MB). En Windows, la captura está en <b>Imágenes → Capturas de pantalla</b>; en Mac, en el escritorio.' },
      publish2: { title: 'Publicar', text: 'La visibilidad sigue en <b>Public</b>. Haz clic en <b>Publish</b>. El link se encuentra de la misma forma: My projects → el proyecto → la barra del navegador.' },
      problem: { title: 'Un link que no abre', text: 'Otro caso: un estudiante envía un link y a ti no te abre. En el perfil del estudiante, el proyecto muestra la etiqueta <b>Private project</b>: se guardó como <b>Only me</b>. Vamos a resolverlo como Lucas.' },
      myProjects: { title: 'My projects', text: 'Haz clic en <b>My projects</b>.' },
      privateCard: { title: 'El proyecto privado', text: 'Abre el proyecto con la etiqueta <b>Private project</b>.' },
      edit: { title: 'Edit', text: 'Haz clic en <b>Edit</b>.' },
      fixPublic: { title: 'Cambiar la visibilidad', text: 'Elige <b>Public</b> (o <b>Friends only</b>, que los profesores también pueden abrir).' },
      resend: { title: 'Publicar de nuevo', text: 'Haz clic en <b>Publish</b>. El link sigue siendo el mismo y ahora sí te abre.' },
      done: { title: 'Resuelto', text: 'El proyecto es público y el link de la barra del navegador funciona. Si un link sigue sin abrir, pídele al estudiante que comparta pantalla y repitan los pasos juntos.' }
    },
    finish: {
      kicker: '🏁 Simulación completada',
      title: 'Ya sabes cómo se publica un <span>trabajo de Minecraft</span>',
      intro: 'Esto es lo que hacen los estudiantes cada vez que una lección les pide publicar:',
      points: ['Skin: <b>Publish project</b> → <b>Minecraft skin</b> → nombre → Model (Steve/Alex) → PNG de 64×64 → <b>Publish</b>.', 'Construcción: captura (F5, F1) → <b>Publish project</b> → <b>Image</b> → nombre → Drawing → <b>Publish</b>.', 'El link: <b>My projects → el proyecto publicado → copiar la dirección de la barra del navegador</b>, y después pegarlo en la tarjeta de la lección en la plataforma. Publicar y enviar el link son dos pasos distintos.', '<b>Private project</b> = Only me: My projects → proyecto → Edit → Public → Publish. El link sigue siendo el mismo.'],
      back: 'Puedes volver a la formación: la verificación del módulo ya está desbloqueada.',
      again: '↺ Hacerlo de nuevo'
    }
  },

  /* Intermediate: the data pack is published from the Kodland Launcher (0.8.20) */
  datapack: {
    card: { gif: 'assets/sign-the-law.gif', label: 'Link a mi ley en Kodland Sparks', placeholder: 'Pega aquí el link de tu data pack publicado' },
    welcome: {
      kicker: '⚡ Simulación · Minecraft CraftForge Intermediate',
      title: 'Publicar un <span>data pack</span> en Kodland Sparks',
      lead: 'En Minecraft CraftForge Intermediate, los estudiantes crean leyes para el mundo (recetas, drops, comandos) en un <b>data pack</b> en el Kodland Launcher, y lo publican en su perfil de Sparks desde el editor. Aquí eres Lucas, un estudiante que acaba de crear su primera receta.',
      seeTitle: 'Lo que vas a hacer',
      see: ['Abrir el data pack en el launcher: <b>Create → Data packs → Edit</b>.', 'Publicarlo con <b>Who can see it? → Everyone</b> y copiar el link.', 'Pegar el link en la tarjeta de la lección en la plataforma Kodland.', 'Resolver un link que no abre, y volver a encontrar el link con <b>Open on Sparks</b>.'],
      how: 'Una tarjeta guía te muestra cada paso. Haz clic en el elemento destacado. Toma unos 4 minutos.',
      start: 'Empezar la simulación →'
    },
    steps: {
      start: { title: 'La ley funciona', text: 'Lucas creó una receta en su data pack, la guardó, volvió al mundo y fabricó su objeto. Ahora firma la ley: publica el data pack en Kodland Sparks. Este es el launcher, en la pestaña <b>Play</b>.' },
      create: { title: 'Create', text: 'Los data packs están en la pestaña <b>Create</b>. Haz clic en <b>Create</b>.' },
      edit: { title: 'El data pack', text: 'Aquí están los data packs del estudiante. Haz clic en <b>Edit</b> en el pack con la receta.' },
      editor: { title: 'El editor del data pack', text: 'A la izquierda, lo que hay dentro del pack; en el centro, el formulario de la receta. Arriba a la derecha, <b>Publish</b> está junto al botón morado <b>Save</b>.' },
      publish: { title: 'Publicar', text: 'Haz clic en <b>Publish</b>.' },
      name: { title: 'Nombre', text: 'Se abre «Publish to your profile». Haz clic en el campo <b>Name</b>. <b>About it</b> es opcional.' },
      who: { title: 'Who can see it?', text: 'Esto define quién puede abrir el link. Solo con <b>Everyone</b> el link se abre para otras personas, incluido tú, sin iniciar sesión en la cuenta del estudiante.' },
      everyone: { title: 'Everyone', text: 'Revisa que <b>Everyone</b> esté seleccionado y haz clic ahí.' },
      submit: { title: 'Publicar', text: 'Haz clic en <b>Publish</b>.' },
      copy: { title: '¡Publicado! Copia el link', text: 'Aparece «Published! It is on your profile.» con el link del proyecto y un cristal. Haz clic en <b>Copy link</b>.' },
      close: { title: 'Done', text: 'Ahora el botón dice <b>Copied!</b>. Haz clic en <b>Done</b>.' },
      toCard: { title: 'Ir a la lección en la plataforma', text: 'Publicar en Sparks y enviar el link en la plataforma Kodland son <b>dos pasos distintos</b>. Abre la pestaña de la lección.' },
      paste: { title: 'Pegar el link en la tarjeta', text: 'Esta es la tarjeta <b>«Firma la ley»</b> en la plataforma. Haz clic en el campo <b>«Link a mi ley en Kodland Sparks»</b> para pegar el link (Ctrl + V / Cmd + V). Revisa en el Backoffice que los links realmente llegaron.' },
      problem: { title: 'Un link que no abre', text: 'En la lección siguiente, Lucas publica una actualización y a ti no te abre el link. Lo más probable es que en «Who can see it?» haya quedado <b>Only me</b>. La solución: publicar de nuevo con Everyone.' },
      backLauncher: { title: 'Volver al launcher', text: 'Abre la pestaña del Kodland Launcher.' },
      republish: { title: 'Publicar de nuevo', text: 'Haz clic en <b>Publish</b> en el editor.' },
      fixEveryone: { title: 'Everyone', text: 'El data pack se publicó como <b>Only me</b>. Elige <b>Everyone</b>.' },
      resubmit: { title: 'Publicar', text: 'Haz clic en <b>Publish</b>. Ahora el link se abre para todos.' },
      lostLink: { title: '¿Se perdió el link?', text: 'Si el estudiante cerró la ventana sin copiar el link, siempre se puede volver a encontrar: <b>Open on Sparks</b> (aquí, o arriba en el editor) abre la página del proyecto. Haz clic ahí.' },
      done: { title: 'La página del proyecto', text: 'El data pack se abre en el perfil de Sparks del estudiante. El link es la dirección en la barra del navegador: el estudiante la copia de ahí y la pega en la tarjeta.' }
    },
    finish: {
      kicker: '🏁 Simulación completada',
      title: 'Ya sabes cómo se publica un <span>data pack</span>',
      intro: 'Esto es lo que hacen los estudiantes cada vez que una lección les pide publicar sus leyes:',
      points: ['Launcher: <b>Create → Data packs → Edit</b> → <b>Publish</b> (junto a Save).', '«Publish to your profile»: nombre → <b>Who can see it? → Everyone</b> → Publish → <b>Copy link</b> → Done.', 'Pegar el link en la tarjeta de la lección en la plataforma. Publicar y enviar el link son dos pasos distintos.', 'El link no abre → publicar de nuevo con <b>Everyone</b>. Se perdió el link → <b>Open on Sparks</b> y copiar la dirección de la barra del navegador.'],
      back: 'Puedes volver a la formación: la verificación del módulo ya está desbloqueada.',
      again: '↺ Hacerlo de nuevo'
    }
  }
};
