/* ============================================================
   EM course training · Minecraft CraftForge (Beginner + Intermediate) [2234 · 2235] · SPANISH (LatAm)
   Translated from content-en.js. Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names, commands and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by region (see COURSE.code and the 'bo' section).
   ============================================================ */
window.COURSE = { lang: 'es' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Formación de curso EM',
  footer: 'kodland · Nuevo Modelo Educativo · Formación de curso',
  devLink: '🛠 Developer',
  logoSub: 'Nuevo Modelo Educativo',
  navHome: '← Inicio',
  navBackModule: '← Volver al módulo',
  moduleN: 'Módulo {n}',
  badgeStart: 'Empezar →',
  badgeLocked: '🔒 Completa el Módulo {n}',
  badgeDone: '✓ Completado · {score}%',
  progLabel: 'módulos completados',
  progAllDone: 'Módulos completados 🎉',
  eyebrow: '{course} · Módulo {n} de {total}',
  ctaTitle: 'Verificación del módulo',
  ctaText: '{n} preguntas cortas. Necesitas 70% o más para aprobar.',
  lockSim: '🔒 Completa la simulación de arriba para desbloquear la verificación.',
  startCheck: 'Empezar la verificación →',
  retake: '🔁 Repetir la verificación',
  qmeta: '{e} Verificación del Módulo {n} · Pregunta {i} de {total}',
  fbRight: '✅ <b>¡Correcto!</b> ',
  fbWrong: '❌ <b>No exactamente.</b> ',
  nextQuestion: 'Siguiente pregunta →',
  seeResult: 'Ver mi resultado →',
  passedTitle: '¡Aprobaste!',
  failTitle: 'Casi lo logras',
  scoreLine: 'Respondiste bien <b>{score} de {n}</b>.',
  failText: 'Necesitas 70% o más. Repasa el módulo y vuelve a intentarlo: puedes repetirlo las veces que necesites.',
  nextUnlocked: 'Se desbloqueó el <b>Módulo {n} · {title}</b>.',
  goModule: 'Ir al Módulo {n} →',
  allDoneText: 'Completaste todos los módulos de esta formación.',
  seeNext: 'Ver el siguiente paso →',
  reviewModule: '📖 Repasar el módulo',
  homeDoneTitle: '¡Módulos completados!',
  homeDoneText: 'Falta un último paso: el test DST en la página de la formación en el LMS.',
  homeDoneBtn: 'Ver qué hacer ahora →',
  doneBadge: '✓ Completado',
  doneBack: 'Volver a los módulos',
  lockedTitle: 'Todavía bloqueado',
  lockedModule: 'Primero completa el Módulo {n}.',
  lockedStep: 'Completa el paso anterior para desbloquear este.',
  ok: 'OK',
  linkOpen: 'Abrir ↗',
  projPlay: '▶ Abrir ↗',
  simOpen: '▶ Abrir la simulación aquí',
  simClose: '✕ Cerrar la simulación',
  simNewTab: 'Abrir en otra pestaña ↗',
  simDone: '✅ Simulación completada',
  simTodo: '○ Simulación pendiente',
  checkTag: 'Márcalos',
  mythTag: 'Mito',
  mythTap: 'Toca para ver la realidad →',
  mythReality: 'Realidad ✓',
  sortWrong: '✗ No exactamente.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'mccf';
COURSE.code = '2234';
COURSE.title = 'Minecraft CraftForge';
COURSE.color = '#16A34A';

COURSE.home = {
  kicker: '🎓 Formación de curso · [2234 · 2235]',
  title: 'Minecraft <span class="hl">CraftForge</span>',
  lead: '<b>Beginner</b> — Para estudiantes de 8–9 años: en Minecraft pasan de jugadores a creadores, con su propio héroe y su casa, mecanismos de redstone y un robot Asistente que programan en Lua. <b>Intermediate</b> — Para estudiantes de 10–12 años: escriben las leyes del mundo de Minecraft con data packs y con programas en Python que construyen puentes, torres y mundos enteros. Cuatro módulos: el contenido del curso de Beginner y de Intermediate, las habilidades que necesitas para el curso y la parte técnica de las lecciones.',
  facts: [
    ['🧑‍💻', '<b>A tu ritmo.</b> Tu progreso se guarda en este navegador. Cada módulo termina con una verificación corta.'],
    ['⚡', '<b>Práctica incluida.</b> Una simulación de Kodland Sparks para practicar cómo se publica una construcción de Minecraft y el problema más común.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Antes de empezar:</b> haz primero la <b>formación principal del Nuevo Modelo Educativo (EM)</b>. Esta formación del curso va después y parte de lo que ya viste allí: el Backoffice y las Teacher Notes, el Classroom con el Follow Mode, el recorrido por Kodland Sparks y la calidad de la lección.' },
  { kind:'warn', e:'🔄', html:'<b>El contenido de las lecciones en el Backoffice se actualiza constantemente.</b> Con el feedback de estudiantes y tutores, las lecciones se mejoran todo el tiempo. No te preocupes: cuando haya cambios, se te avisará con anticipación para que prepares la lección.' }
];

/* ---------------- Modules ----------------
   Beginner course content → Intermediate course content → Skills for the course → technical side (+ final survey, added by shared/final-survey.js).
   The Skills module is drawn by assets/skills.js from COURSE.skills (end of this file). */
COURSE.modules = [
  { id:'beg', n:1, e:'⛏️', color:'#16A34A', title:'El contenido del curso · Beginner',
    desc:'Los datos generales del curso, lo que logra el estudiante y la primera lección del Módulo 1.',
    obj:'Prepárate para dar la primera lección de Minecraft CraftForge Beginner. En ella, estudiantes de 8–9 años crean su propia skin, la publican en Kodland Sparks, entran con ella al mundo del curso y empiezan a construir su propia casa.',
    offer:[['🧱','Conocer los datos generales del curso y lo que logra el estudiante.'],['📖','Saber qué pasa en la primera lección.'],['⚡','Entender cómo se usa Sparks AI.'],['📘','Revisar la primera lección y sus Teacher Notes en el Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'El curso', blocks:[
        { t:'meta', items:[['🧒','Edad','8–9 años'],['⏱️','Lección','60 min'],['📚','Programa','40 lecciones · 10 módulos'],['🌙','Lenguaje','Lua']] },
        { t:'trio', items:[
          ['🎬','Primero el resultado','Cada lección empieza mostrando el resultado final y diciendo qué van a aprender los estudiantes. Después muestras el camino en tu pantalla y los guías paso a paso.'],
          ['🛠️','De jugador a creador','En un juego, las reglas las hizo otra persona. Aquí el estudiante construye, programa un robot y crea mecanismos, y muestra el resultado a los demás.'],
          ['🔍','El error es parte del proceso','Cuando algo no funciona: <i>¿Qué veo? ¿Por qué pasa? ¿Qué voy a probar? ¿Funcionó?</i> Algunas lecciones incluyen un error planificado en tu pantalla para que los estudiantes encuentren la causa por su cuenta.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Los estudiantes publican sus trabajos en <b>Kodland Sparks</b>, su portafolio, desde la Lección 1. <b>Sparks AI</b> sugiere ideas y da feedback, pero el estudiante decide qué tomar. Está integrado en las tarjetas, así que los estudiantes no necesitan abrir Sparks por separado; normalmente envían una solicitud por tarea.' }
      ]},
      { id:'goals', e:'🎓', title:'Qué logra el estudiante', blocks:[
        { t:'p', html:'Al terminar el curso, el estudiante tiene estos logros:' },
        { t:'cards', cols:2, items:[
          ['🧱','Crea proyectos','Más de nueve proyectos en su portafolio de Kodland Sparks, y un proyecto final: su propio territorio, donde construcciones, mecanismos y programas funcionan juntos.'],
          ['🤖','Programa un robot en Lua','Comandos, argumentos, variables, ciclos, condiciones y sus propias funciones. El robot construye, excava, esquiva obstáculos y cumple misiones, y el estudiante aprende a dividir una tarea grande en pasos.'],
          ['⚡','Construye mecanismos y lógica','La redstone es la «electricidad» de Minecraft: palancas, cables, lámparas, puertas, pistones y trampas. El estudiante aprende la lógica «si… entonces» y ve el resultado al instante.'],
          ['🏰','Crea construcciones y juegos','Construye cuidando la forma, el color y la luz, y crea un minijuego con sus propias reglas para que lo jueguen sus compañeros.'],
          ['💬','Habla de su trabajo con seguridad','Explica cómo funciona todo al final de cada lección y presenta su proyecto final al grupo.'],
          ['🧠','Habilidades para la vida','Creatividad, trabajo en equipo (jugar los juegos de los demás y dar feedback), comunicación y pensamiento crítico: encontrar errores y usar con criterio las pistas de Sparks AI.']
        ]}
      ]},
      { id:'les', e:'📖', title:'La primera lección', blocks:[
        { t:'p', html:'El Módulo 1, <b>«Primer fuego. Mi mundo y mis primeros comandos»</b>, termina con el proyecto <b>«Mi héroe y mi casa»</b>. Abre la primera lección y revisa lo que necesitas saber, el resultado clave, tu rol y los puntos de atención.' },
        { t:'lessons', key:'beg', items:[
          { tab:'M1L1', e:'🔥', h:'Lección 1 — Primer fuego', p:'La primera lección del curso (7 tarjetas y la tarea). Los estudiantes abren el launcher, conocen al grupo, dibujan y publican su propia skin en Sparks, se la ponen para entrar al mundo y empiezan a construir su casa en una isla.',
            acc:[['📚','Lo que necesitas saber','<ul><li>La ruta: conexión y launcher → lo que viene → skin en Sparks mientras el launcher descarga el juego → ponerse la skin, entrar al mundo y teletransportarse a la isla → construir la casa → muestra de proyectos → cierre y tarea.</li><li>El <b>estudio de skins</b> se abre dentro de la misma tarjeta de la lección (botón <b>Expand</b> para pantalla completa). El estudiante no necesita salir de la lección para ir a Sparks.</li><li>En el launcher: <b>Create → Skins → su skin → Wear</b>, después <b>Play</b> con el código del mundo, y <b>F5</b> para verse.</li><li>Los estudiantes construyen en <b>modo creativo</b>: paredes, una entrada y un cartel con su apodo. El techo queda de tarea.</li></ul>'],
                 ['🎯','Resultado clave','<ul><li>🏁 La skin está <b>publicada en Sparks y su link está en la tarea</b>. Todos llegan a este punto hacia el minuto 29; esta tarjeta nunca se recorta.</li><li>Cada estudiante entra al mundo con su propia skin y llega a la isla.</li><li>La casa tiene paredes, una entrada y un cartel con el apodo.</li></ul>'],
                 ['🧑‍🏫','Tu rol','<ul><li>Conoce al grupo: cuenta algo sobre ti, dale la palabra a todos y usa sus nombres durante toda la lección.</li><li>Di en voz alta el objetivo de la lección: «Hoy cada uno va a crear su propia skin, y el mundo lo va a reconocer».</li><li>Pregunta: «¿En qué se diferencia crear de solo jugar?». En un juego, las reglas las hizo otra persona; aquí tú creas y se lo muestras a los demás.</li><li><b>Error planificado, solo en tu pantalla:</b> entra al mundo sin presionar <b>Wear</b> → te ves igual que todos. Pregunta por qué y después corrígelo. Los estudiantes lo hacen bien desde el principio.</li></ul>'],
                 ['📌','Puntos de atención','<ul><li>En la L1, es casi seguro que el launcher de alguien no va a iniciar. La skin se dibuja en el navegador, así que el estudiante sigue trabajando mientras tú resuelves el launcher durante el trabajo independiente.</li><li><b>Esc</b> no funciona dentro del estudio en pantalla completa: usa el botón <b>Collapse</b>, arriba.</li><li>Dibujar puede no terminar nunca: «Que sea tuya, no perfecta. Puedes terminarla en casa».</li><li>Revisa en el Backoffice que los links realmente llegaron, no solo que se mostraron en pantalla.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Un día antes, envía los links del launcher al chat del grupo y pide a los estudiantes que lo instalen con anticipación.</li><li>Haz tú todo el recorrido: skin en Sparks → publicar → Skins → Wear → entrar al mundo con el código → teletransportarse a la isla.</li><li>Código del mundo: <b>Welcome to CraftForge</b> (pestaña Play). El comando de teletransporte está en las Teacher Notes y en la tarjeta.</li><li>Tarea: terminar la casa, tomar una captura de pantalla (<b>Win + Print Screen</b> en Windows, <b>Cmd + Shift + 4</b> en Mac), adjuntarla a <b>Sparks AI</b>, integrado en la misma tarjeta de la tarea, y enviar una solicitud. Después, entregar la captura con una oración sobre lo que terminaron y lo que sugirió Sparks.</li></ul>']] },
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'La primera Teacher Note de cada lección contiene el plan completo, incluyendo el resumen, el resultado clave, los tiempos de cada tarjeta, tu rol y los posibles riesgos. Además, la Lección 1 incluye un video de preparación. <b>Lee todas las Teacher Notes antes de impartir la clase.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Repasa la primera lección en el Backoffice', blocks:[
        { t:'p', html:'Antes de la verificación, abre el curso en el Backoffice y lee la primera lección a tu ritmo: las tarjetas de actividad y las Teacher Notes están todas allí. No hay tiempo límite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2234', e:'📘', title:'Abrir el curso en el Backoffice', small:'[2234] Minecraft CraftForge Beginner — las lecciones y sus Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'El contenido de las lecciones en el Backoffice se irá actualizando con el feedback de estudiantes y tutores. Cuando haya cambios, se te avisará con anticipación para que prepares la lección.' }
      ]}
    ]},

  { id:'int', n:2, e:'📜', color:'#0EA5E9', title:'El contenido del curso · Intermediate',
    desc:'Los datos generales del curso, lo que logra el estudiante y la primera lección del Módulo 1.',
    obj:'Prepárate para dar la primera lección de Minecraft CraftForge Intermediate. En ella, estudiantes de 10–12 años crean su primera ley para el mundo de Minecraft (una receta en un data pack), la prueban en el juego y la publican en Kodland Sparks.',
    offer:[['🧱','Conocer los datos generales del curso y lo que logra el estudiante.'],['📖','Saber qué pasa en la primera lección.'],['📦','Entender qué es un data pack y cómo trabajan con él los estudiantes.'],['📘','Revisar la primera lección y sus Teacher Notes en el Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'El curso', blocks:[
        { t:'meta', items:[['🧒','Edad','10–12 años'],['⏱️','Lección','90 min'],['📚','Programa','40 lecciones · 10 módulos'],['🐍','Lenguaje','Python']] },
        { t:'trio', items:[
          ['🎬','Primero el resultado','Cada lección empieza mostrando el resultado final y diciendo el objetivo en voz alta. Después muestras todo el camino en tu pantalla y guías a los estudiantes paso a paso.'],
          ['📜','De jugador a creador','Normalmente, los jugadores siguen las reglas del mundo, pero en este curso los estudiantes aprenden a crearlas mediante recetas, objetos que se obtienen al jugar (<i>drops</i>), comandos y, más adelante, programas en Python que construyen nuevas posibilidades.'],
          ['🔍','El error es parte del proceso','Cuando el mundo no responde: <i>¿Qué veo? ¿Por qué pasa? ¿Qué voy a probar? ¿Funcionó?</i> Las lecciones incluyen revisiones planificadas para que los estudiantes encuentren la causa por su cuenta.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Los estudiantes publican sus trabajos en <b>Kodland Sparks</b>, su portafolio, en cada lección. <b>Sparks AI</b> sugiere ideas y escenarios de prueba, pero el estudiante decide qué tomar.' }
      ]},
      { id:'goals', e:'🎓', title:'Qué logra el estudiante', blocks:[
        { t:'p', html:'Al terminar el curso, el estudiante tiene estos logros:' },
        { t:'cards', cols:2, items:[
          ['🧱','Crea proyectos','Más de nueve proyectos en su portafolio de Kodland Sparks, y un proyecto final original.'],
          ['🐍','Python que construye','Escribe programas en Python que hacen aparecer puentes, torres y patrones en el mundo del juego. Comandos, argumentos, variables, tipos de datos, ciclos, condiciones y funciones se vuelven herramientas de todos los días.'],
          ['📜','Las reglas del mundo','Con los data packs, define sus propias leyes para Minecraft: recetas, comandos personalizados, temporizadores, eventos y puntajes.'],
          ['🌍','Generadores y juegos','Escribe algoritmos que crean chunks enteros del mundo, y construye minijuegos para que otros jueguen.'],
          ['🚀','Lleva una idea al Demo Day','Lleva un proyecto desde el concepto hasta una presentación frente al grupo, y explica cómo funciona el código.'],
          ['🧠','Habilidades para la vida','Creatividad, trabajo en equipo (probar los proyectos de los demás), comunicación y pensamiento crítico: encontrar errores y evaluar las respuestas de Sparks AI en lugar de copiarlas.']
        ]}
      ]},
      { id:'les', e:'📖', title:'La primera lección', blocks:[
        { t:'p', html:'El Módulo 1, <b>«El código del mundo. Primeros programas y leyes del mundo»</b>, termina con el proyecto <b>«Monumento de código»</b>. La primera lección trata sobre las <b>leyes del mundo en un data pack</b>. Ábrela y revisa lo que necesitas saber, el resultado clave, tu rol y los puntos de atención.' },
        { t:'lessons', key:'int', items:[
          { tab:'M1L1', e:'📜', h:'Lección 1 — Primera huella en el código del mundo', p:'La primera lección del curso (8 tarjetas y la tarea). Los estudiantes abren el launcher, conocen al grupo, prueban el entrenador de leyes, entran al mundo por el Nether, crean su primera ley (una receta) en un data pack, la prueban y la publican en Sparks. Después planifican una base con Sparks AI y la construyen.',
            acc:[['📚','Lo que necesitas saber','<ul><li>Un <b>data pack</b> es un conjunto de leyes para el mundo. Las leyes se crean fuera del mundo, en el estudio del launcher, y el mundo las ejecuta cada vez que entras.</li><li>Tipos de leyes: <b>receta</b>, <b>drop</b>, <b>comando</b> al entrar, <b>logro</b>. Hoy: una receta.</li><li>Ruta: <b>Esc</b> y salir del mundo guardando → <b>Create → Data packs → Create data pack → Empty</b> → <b>Add → Recipe</b> → mesa de trabajo, objetos, resultado → <b>Save</b>.</li><li>El código del mundo se escribe en la pestaña <b>Play</b>. Los estudiantes construyen en modo creativo.</li></ul>'],
                 ['🎯','Resultado clave','<ul><li>Hacia el minuto 00:45, todos guardaron un data pack con su propia receta.</li><li>🏁 El data pack está <b>publicado en Sparks y su link está en la tarea</b> (tarjeta «Firma la ley», hacia el minuto 01:00). Esta tarjeta nunca se recorta.</li><li>El estudiante le puso nombre propio al objeto y lo fabricó en una mesa de trabajo dentro del mundo.</li></ul>'],
                 ['🧑‍🏫','Tu rol','<ul><li>Conoce al grupo mientras se descarga el juego; usa sus nombres durante toda la lección.</li><li>Di el objetivo en voz alta: «Hoy cada uno va a crear su propia ley para Minecraft, la va a probar en el juego y la va a publicar en su portafolio».</li><li>No dictes recetas: las ideas tienen que ser distintas, eso es lo que hace personal el proyecto. Pregunta: «¿Por qué este objeto? ¿Quién lo va a necesitar?».</li><li><b>Revisión planificada:</b> quita un objeto de la mesa de trabajo → la recompensa desaparece. Pregunta por qué y usa las cuatro preguntas. Elogia al estudiante que encuentra la causa, no solo al que lo logra a la primera.</li></ul>'],
                 ['📌','Puntos de atención','<ul><li>El data pack no se guarda → una de las tres partes del formulario está vacía.</li><li>La ley no funciona → se guardó con el mundo abierto: hay que salir y volver a entrar.</li><li>La receta no se fabrica → los objetos no están en la misma disposición que en el formulario, o se fabrica en el inventario en lugar de en una mesa de trabajo.</li><li>El link no abre → en «Who can see it?» no se eligió <b>Everyone</b>: hay que publicar de nuevo.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Un día antes, envía los links del launcher al chat del grupo.</li><li>Haz tú todo el recorrido: código del mundo → orilla → salir guardando → data pack con una receta → volver al mundo → mesa de trabajo → recompensa → publicar en Sparks.</li><li>Código del mundo: <b>Welcome to KodlandCraft</b>.</li><li>Tarea: agregar una ley más (cambiar la receta, una receta nueva, o un comando/drop), probarla, publicar la actualización y enviar el link.</li></ul>']] },
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'La primera Teacher Note de cada lección contiene el plan completo, incluyendo el resumen, el resultado clave, los tiempos de cada tarjeta, tu rol y los posibles riesgos. Además, la Lección 1 incluye un video de preparación. <b>Lee todas las Teacher Notes antes de impartir la clase.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Repasa la primera lección en el Backoffice', blocks:[
        { t:'p', html:'Antes de la verificación, abre el curso en el Backoffice y lee la primera lección a tu ritmo: las tarjetas de actividad y las Teacher Notes están todas allí. No hay tiempo límite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2235', e:'📘', title:'Abrir el curso en el Backoffice', small:'[2235] Minecraft CraftForge Intermediate — las lecciones y sus Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'El contenido de las lecciones en el Backoffice se irá actualizando con el feedback de estudiantes y tutores. Cuando haya cambios, se te avisará con anticipación para que prepares la lección.' }
      ]}
    ]},

  {
    id: 'skills',
    n: 3,
    e: '🧩',
    color: '#8B5CF6',
    title: 'Habilidades para el curso',
    desc: 'Inmersión en Minecraft · Lógica de programación · Práctica de programación en Python · Data packs: las leyes del mundo',
    obj: 'Las habilidades que necesita un tutor en este curso, en cuatro bloques: el mundo de Minecraft, la lógica de programación, la práctica de Python y los data packs. Cada bloque termina con una práctica corta: necesitas un 70 % para desbloquear el siguiente.',
    offer: [
      ['🌍', 'Inmersión en Minecraft'],
      ['🧠', 'Lógica de programación'],
      ['🐍', 'Práctica de programación en Python'],
      ['📜', 'Data packs: las leyes del mundo']
    ],
    sections: [
      {
        id: 'skx',
        e: '🧩',
        title: 'Habilidades para el curso',
        blocks: [
          { t:'skills' }
        ]
      }
    ]
  },

  { id:'tech', n:4, e:'⚙️', color:'#F03D9E', title:'La parte técnica de las lecciones',
    desc:'El Kodland Launcher, un buen inicio, la publicación en Sparks y los problemas más comunes.',
    obj:'Conoce lo que hace que una lección de Minecraft CraftForge funcione técnicamente: el Kodland Launcher, la revisión del launcher antes del contenido, los últimos minutos para publicar y mostrar los trabajos, dónde encuentran los estudiantes el link de su proyecto y las soluciones a los problemas más comunes.',
    needs:['mcPublish','mcPublishDp'],
    offer:[['🟩','Descargar, instalar e iniciar sesión en el Kodland Launcher.'],['🚀','Hacer la revisión del launcher antes del contenido y empezar por el resultado.'],['📤','Lograr que cada estudiante publique en Sparks y envíe el link.'],['🛠️','Resolver los problemas más comunes del launcher y de Minecraft.']],
    sections:[
      { id:'focus', e:'🎯', title:'Los 3 puntos que hacen funcionar una lección', blocks:[
        { t:'p', html:'Estos son los aspectos clave que el equipo de producto ha definido para los cursos de Minecraft. Abre cada apartado para conocerlos:' },
        { t:'acc', items:[
          ['🎬','Primero el resultado, y por qué crear es distinto de jugar','<p>En los primeros minutos, <b>muestra el resultado final</b> y di qué van a aprender hoy los estudiantes.</p><ul><li>Usa la tarjeta de presentación: «Miren lo que van a tener en una hora: su propio crafter y su propia casa en la isla».</li><li>Explica en qué se <b>diferencia crear un proyecto de solo jugar</b>: en un juego, las reglas las hizo otra persona; aquí el estudiante crea y se lo muestra a los demás.</li><li>Pregunta a uno o dos estudiantes: «¿En qué crees que se diferencia crear de solo jugar?».</li></ul>'],
          ['🟩','La revisión del inicio de sesión y del launcher va antes del contenido','<p>Haz la revisión de la conexión y del launcher <b>antes</b> de la parte de contenido, así el juego se descarga mientras conoces al grupo.</p><ul><li>Conexión: un minuto, con cámara, micrófono y «¡Hola!».</li><li>Launcher: 2–3 minutos. Envía los links, muestra el inicio de sesión en tu pantalla y pide un «+» en el chat cuando aparezca la barra verde.</li><li>No esperes a que termine la descarga ni detengas al grupo por uno o dos «−»: vuelve con ellos durante el trabajo independiente.</li><li>Desde la Lección 2: «Abran el launcher e inicien su mundo; que cargue mientras conversamos».</li></ul>'],
          ['⏱️','Protege los últimos 7–10 minutos','<p>Los últimos <b>7–10 minutos</b> son para publicar, mostrar los trabajos y dar feedback, y no se ceden a la construcción.</p><ul><li>Usa cortes firmes: aviso de dos minutos, después «Alto, manos fuera del teclado. ¡Hora de mostrar!», y nombra de inmediato al primer estudiante.</li><li>3 participantes muestran su trabajo; el grupo da feedback concreto: nombre, qué funcionó, un consejo.</li><li>Termina con el cierre, la reflexión, la próxima lección y la tarea: nunca se recortan.</li></ul>']
        ]}
      ]},
      { id:'launcher', e:'🟩', title:'El Kodland Launcher', blocks:[
        { t:'p', html:'Los estudiantes abren Minecraft con el <b>Kodland Launcher</b>: descarga el juego, abre el mundo del curso y es donde crean sus skins y se las ponen. Necesitas tenerlo instalado y listo en tu computadora antes de tu primera clase.' },
        { t:'callout', kind:'warn', e:'🔑', html:'<b>Tus credenciales:</b> no necesitas ninguna credencial para descargar el launcher. Para iniciar sesión, como tutor necesitas tus <b>credenciales de Kodland Sparks</b>, que te da el <b>departamento de Operaciones o de Enseñanza</b>. Los estudiantes inician sesión con la misma cuenta que usan en la plataforma de Kodland: no necesitan una nueva.' },
        { t:'link', href:'https://portfolio.kodland.org/launcher/download#guide', e:'⬇️', title:'Página de descarga y guía oficial', small:'portfolio.kodland.org/launcher/download — Windows y Mac' },
        { t:'cards', cols:2, items:[
          ['🪟','Windows 10 y 11','<ol><li>Descarga el instalador.</li><li>Abre el archivo descargado.</li><li>Cuando aparezca la pantalla azul de advertencia, haz clic en <b>Más información → Ejecutar de todas formas</b> y sigue las instrucciones del instalador.</li></ol>'],
          ['🍎','macOS 13 o versiones posteriores','<ol><li>Descarga el archivo correspondiente a tu procesador. Para comprobar cuál tienes, abre el menú de Apple y selecciona <b>Acerca de esta Mac</b>. Si aparece M1, M2, M3 o M4, tu equipo utiliza Apple Silicon; si no, Intel.</li><li>Abre el archivo descargado y arrastra <b>Kodland Launcher</b> a la carpeta <b>Aplicaciones</b>. No abras el launcher directamente desde la ventana de instalación.</li><li>Abre <b>Terminal</b>, pega el comando que aparece a continuación y presiona <b>Return (Intro)</b>. Es normal que no aparezca ningún mensaje después de ejecutarlo.</li><li>Abre <b>Kodland Launcher</b> desde la carpeta <b>Aplicaciones</b>.</li></ol>']
        ]},
        { t:'p', html:'<code>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</code>' },
        { t:'steps', items:[
          ['Iniciar sesión','Haz clic en <b>Sign in</b>. Se abre una página en el navegador: haz clic en <b>Sign in with Kodland</b> y usa tus credenciales de Kodland Sparks (los estudiantes usan su cuenta de la plataforma de Kodland). Si el navegador no se abre, usa el link debajo del botón para obtener un código corto (válido por cinco minutos).'],
          ['Descargar el juego','El launcher descarga el juego en varios pasos. Déjalo trabajar.'],
          ['Jugar','Cuando indique que todo está listo, presiona <b>Play</b>. El primer inicio puede tardar hasta un minuto. El código del mundo va en la pestaña <b>Play</b>.'],
          ['Actualizaciones','Si el launcher no se actualiza, instala la última versión desde la página de descarga encima de la anterior. Los mundos y las skins se conservan.']
        ]},
        { t:'acc', open:false, items:[
          ['⬇️','Links de descarga directa (los de la tarjeta de la lección)','<ul><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-win-x64-setup.exe" target="_blank" rel="noopener">Windows</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-arm64.dmg" target="_blank" rel="noopener">Mac — Apple Silicon (M1–M4)</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-x64.dmg" target="_blank" rel="noopener">Mac — Intel</a></li></ul>']
        ]}
      ]},
      { id:'l1', e:'🧯', title:'Cuando el launcher de un estudiante no funciona', blocks:[
        { t:'p', html:'En la Lección 1, es casi seguro que el launcher de alguien no va a iniciar. No pasa nada: <b>primero dale una tarea al resto</b> y después conéctate con el estudiante. Pídele que comparta pantalla y guíalo con la voz: «¿Qué ves ahora? Haz clic en este botón». Si no se resuelve en un par de minutos: «Por ahora sigue mi pantalla, ya vuelvo contigo».' },
        { t:'acc', open:false, items:[
          ['📥','El archivo no se descarga','Vuelve a enviar al chat el link de la tarjeta y revisa que el estudiante haya elegido el archivo para su sistema.'],
          ['🍎','La Mac no abre el launcher','Ejecuta la línea de Terminal de la primera tarjeta y vuelve a abrir el launcher desde <b>Applications</b>.'],
          ['🪟','Windows pregunta si abrir el archivo','<b>More info → Run anyway</b>.'],
          ['🔑','El estudiante no puede iniciar sesión','Es el mismo usuario de Kodland que usa en las clases, sin cuenta nueva. La ventana de inicio de sesión se abre en el navegador y muchas veces queda escondida detrás de otras ventanas.'],
          ['⏳','El juego tarda mucho en cargar o la descarga se detiene','La primera descarga es larga, es normal. Si la barra se detiene: revisa el internet, cierra el launcher y vuelve a abrirlo; la descarga continúa.'],
          ['🖌️','El launcher nunca funcionó','En la Lección 1, el estudiante igual dibuja y publica la skin en Sparks (en el navegador), así que obtiene el resultado principal. En el mundo, sigue tu pantalla. Después de la clase, ayúdalo a iniciar el launcher.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'Si varios estudiantes tienen el mismo error, muestra la solución a todos una sola vez.' }
      ]},
      { id:'req', e:'💻', title:'Requisitos de la computadora', blocks:[
        { t:'p', html:'Esto es lo que necesita el estudiante para Minecraft CraftForge. Es útil conocerlo cuando un estudiante tiene problemas para instalar o abrir el juego:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Computadora y sistema','De escritorio o laptop con <b>Windows 10/11 (64 bits)</b> o <b>macOS 13 o posterior</b>. Mac con Apple Silicon (M1 o más reciente) o Intel: la tarjeta de la lección tiene una descarga para cada uno.'],
          ['🧠','Memoria y procesador','<b>8 GB de RAM</b> con tarjeta gráfica dedicada, o <b>12 GB</b> con gráficos integrados. Un procesador de <b>4 núcleos</b>.'],
          ['🎮','Gráficos y disco','Una tarjeta gráfica compatible con <b>Vulkan 1.3</b> y con <b>2 GB</b> de memoria de video. <b>5 GB</b> de espacio libre en disco.'],
          ['🎧','Conexión y equipo','Internet estable que soporte videollamadas. Mouse de dos botones, teclado, auriculares con micrófono y cámara.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Publicar en Kodland Sparks (Beginner)', blocks:[
        { t:'p', html:'Publicar es el resultado principal de muchas lecciones: el estudiante publica su trabajo en Sparks y pega el link en la tarjeta de la lección. En el Módulo 1 hay dos formas:' },
        { t:'cards', cols:2, items:[
          ['🎨','La skin (Lección 1)','En la Lección 1, el estudio de skins está dentro de la tarjeta: <b>Publish</b> → ponerle nombre a la skin → <b>Publish</b> otra vez. También se puede publicar un archivo de skin desde Sparks: <b>Publish project → Minecraft skin</b> → nombre → <b>Model</b> (Steve o Alex) → <b>Skin file</b> (PNG de 64×64) → <b>Publish</b>.'],
          ['🖼️','Una construcción','Captura de la construcción (F5, F1) → Sparks → <b>Publish project</b> → <b>Image</b> → nombre → <b>Drawing</b>: subir la captura → <b>Publish</b>.']
        ]},
        { t:'steps', items:[
          ['Dónde está el link','El link es la dirección de la página del proyecto. El estudiante va a <b>My projects</b> en Sparks, abre el <b>proyecto publicado</b> y copia el link de la <b>barra de direcciones del navegador</b>: <code>portfolio.kodland.org/apodo/…</code>.'],
          ['Pegarlo en la tarjeta de la lección','Ese link se pega en la tarjeta de la lección en la plataforma Kodland (por ejemplo, «Link a mi skin en Kodland Sparks»).'],
          ['Elegir la visibilidad','<b>Public</b> aparece en el feed y en el portafolio. <b>Friends only</b> es para amigos y profesores. <b>Only me</b> deja el proyecto privado: nadie más puede abrir el link, ni siquiera tú.'],
          ['Dos pasos distintos','Publicar en Sparks y enviar el link en la plataforma Kodland son <b>dos pasos distintos</b>. Revisa en el Backoffice que los links realmente llegaron.']
        ]},
        { t:'sim', flag:'mcPublish', src:'minecraft-publish/Minecraft_Publish.html?flow=image', e:'⚡', badge:'Simulación', title:'Publicar una skin y una construcción en Kodland Sparks', text:'Una réplica de Kodland Sparks y de la tarjeta de la lección: como un estudiante, publicas una skin, encuentras su link en My projects, lo pegas en la tarjeta de la plataforma, publicas la captura de una construcción como proyecto Image y resuelves un link que no abre. Toma unos 5 minutos. La verificación del módulo se desbloquea al terminar.' }
      ]},
      { id:'publishdp', e:'📤', title:'Publicar el data pack en Kodland Sparks (Intermediate)', blocks:[
        { t:'p', html:'Sparks es el portafolio de los estudiantes: allí se guardan todos los proyectos del curso y allí está <b>Sparks AI</b>. Los estudiantes vuelven a Sparks en cada lección para publicar y pedir pistas. El data pack se publica <b>desde el editor del launcher</b>:' },
        { t:'steps', items:[
          ['Publish, junto a Save','En el launcher, <b>Create → Data packs → Edit</b> en el data pack, y después <b>Publish</b>, junto al botón morado <b>Save</b>.'],
          ['Nombre y «Who can see it?» → Everyone','En «Publish to your profile», el estudiante escribe el nombre y elige <b>Everyone</b>: solo así el link se abre para otras personas sin iniciar sesión en la cuenta del estudiante.'],
          ['Copy link','Cuando aparece «Published! It is on your profile.», hace clic en <b>Copy link</b>, después en <b>Done</b>, y pega el link en la tarjeta de la lección en la plataforma («Link a mi ley en Kodland Sparks»).'],
          ['¿Perdió el link?','<b>Open on Sparks</b> (en el cuadro de diálogo o arriba en el editor) abre la página del proyecto en el perfil del estudiante: el link es la dirección en la barra del navegador.'],
          ['Dos pasos distintos','Publicar en Sparks y enviar el link en la plataforma Kodland son <b>dos pasos distintos</b>. Revisa en el Backoffice que los links realmente llegaron.'],
          ['Cada actualización se vuelve a publicar','Cuando el estudiante agrega una ley, guarda, prueba y vuelve a publicar la actualización.']
        ]},
        { t:'sim', flag:'mcPublishDp', src:'minecraft-publish/Minecraft_Publish.html?flow=datapack&sim=mcPublishDp', e:'⚡', badge:'Simulación', title:'Publicar un data pack en Kodland Sparks', text:'Una réplica del Kodland Launcher y de la tarjeta de la lección: como un estudiante, publicas un data pack, copias su link, lo pegas en la tarjeta de la plataforma, resuelves un link que no abre y encuentras un link que no se copió. Toma unos 4 minutos. La verificación del módulo se desbloquea al terminar.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Cuando algo sale mal', blocks:[
        { t:'acc', open:false, items:[
          ['🎨','La skin no aparece en «Skins»','Revisa que la skin esté publicada en Sparks y que el launcher use la misma cuenta. Cierra y vuelve a abrir la sección <b>Skins</b>.'],
          ['👕','El estudiante presionó «Wear» con el juego abierto','El launcher avisa que la skin aparecerá cuando el juego se vuelva a iniciar: hay que salir del mundo y volver a entrar con <b>Play</b>: así el juego se vuelve a iniciar.'],
          ['📍','El teletransporte no funcionó','Pídele al estudiante que comparta pantalla: casi siempre el comando está incompleto o falta el signo menos antes del último número.'],
          ['⛶','El estudiante no puede salir del estudio en pantalla completa','Haz clic en <b>Collapse</b>, arriba en el estudio: <b>Esc</b> no funciona dentro de él.'],
          ['🔒','El link del estudiante no abre','Seguramente guardó el proyecto como <b>Only me</b> (aparece la etiqueta <b>Private project</b>). Pídele al estudiante: <b>My projects → abrir el proyecto → Edit → Public → Publish</b>. El link sigue siendo el mismo.'],
          ['🖼️','El estudiante no encuentra la captura','Los estudiantes la toman con <b>Win + Print Screen</b> en Windows (se guarda en <b>Imágenes → Capturas de pantalla</b>) y con <b>Cmd + Shift + 4</b> en Mac (se guarda en el escritorio). Si no la encuentra ahora, el estudiante la adjunta después en casa.'],
          ['💾','El data pack no se guarda','Revisa que estén completas las tres partes del formulario: dónde se fabrica el objeto, qué entra y qué sale.'],
          ['🔁','La ley no funciona después de un cambio','Haz clic en <b>Save</b>, sal del mundo y vuelve a entrar: las leyes se aplican al entrar.'],
          ['🧩','La receta no se fabrica','Los objetos no están en la misma disposición que en el formulario, o el estudiante fabrica en el inventario en lugar de en una mesa de trabajo.'],
          ['🔗','El estudiante cerró la ventana sin copiar el link','Haz clic en <b>Open on Sparks</b>, arriba en el editor del data pack: se abre la página del proyecto, y el link es la dirección en la barra del navegador.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist técnico de cada clase', blocks:[
        { t:'check', title:'✅ Mi checklist técnico', groups:[
          { h:'☑️ Antes de la clase', items:['Leí todas las Teacher Notes de la lección y, para la Lección 1, vi el video de preparación.','Mi launcher está instalado y con la sesión iniciada, y yo mismo hice el recorrido de la lección.','Antes de la Lección 1, envié los links del launcher al chat del grupo.'] },
          { h:'🎬 Durante la clase', items:['Hice la revisión de la conexión y del launcher antes del contenido.','Mostré el resultado final y el objetivo de la lección en los primeros minutos.'] },
          { h:'📤 Al final de la clase', items:['Protegí los últimos 7–10 minutos para publicar, mostrar los trabajos y dar feedback.','Todos enviaron el link del proyecto publicado en la tarjeta de la lección.','Abrí algunos links para comprobar que funcionan.'] }
        ]}
      ]},
      { id:'videos', e:'🎬', title:'Clases de ejemplo con un excelente autoQA', blocks:[
        { t:'p', html:'Mira cómo se ve una clase con un excelente autoQA: la dinámica de la clase, la estructura y la forma en que el tutor guía al grupo.' },
        { t:'videos', items:[
  ['Módulo 1 · Lección 1', '18q7CKozwCEkwcG_asy76tbd6b57SZ6uN'],
  ['Módulo 1 · Lección 2', '1HDFjwvHCxFWiNfG_Aq4FetntKAhns9Ct'],
  ['Módulo 1 · Lección 3', '1LMvxFe8M90BR8aZiwUeFEH0lL7fQcT1e']
] },
        { t:'callout', kind:'warn', e:'🔄', html:'<b>Nota:</b> el contenido de estas clases puede ser diferente del que verás en el Backoffice, porque las lecciones se han ido actualizando. Sin embargo, la dinámica de la clase, la estructura y la calidad deben mantenerse: son buenos ejemplos para inspirarte en tus clases.' }
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ----------------
   The Skills module has no separate check: its four blocks end with their own practice checks (COURSE.skills). */
COURSE.quiz = {
  beg:[
    { q:'¿Para quién es Minecraft CraftForge Beginner y cuánto dura cada lección?',
      o:['Para estudiantes de 8–9 años, con lecciones grupales de 60 minutos.','Para estudiantes de 10–12 años, con lecciones de 90 minutos.','Para estudiantes de 13–17 años, con lecciones de 90 minutos.'],
      a:0, e:'Beginner es para estudiantes de 8–9 años: 40 lecciones grupales de 60 minutos.' },
    { q:'¿En qué lenguaje de programación programan los estudiantes al robot Asistente?',
      o:['Python.','Bloques de Scratch.','Lua.'],
      a:2, e:'El robot Asistente se programa en Lua: comandos, argumentos, variables, ciclos, condiciones y funciones.' },
    { q:'¿Cómo empieza una lección?',
      o:['Con teoría sobre la redstone antes de que alguien entre al mundo.','Mostrando el resultado final, diciendo el objetivo y explicando en qué se diferencia crear de solo jugar.','Los estudiantes empiezan a construir de inmediato, sin ver un ejemplo.'],
      a:1, e:'Primero el resultado: los estudiantes ven adónde van y por qué crear es distinto de jugar.' },
    { q:'¿Con qué termina el curso el estudiante?',
      o:['Con un examen final escrito.','Con más de nueve proyectos en su portafolio de Kodland Sparks y un proyecto final, su propio territorio, presentado al grupo.','Solo con la casa de la Lección 1.'],
      a:1, e:'Más de nueve proyectos en el portafolio y un proyecto final donde construcciones, mecanismos y programas funcionan juntos.' },
    { q:'¿Qué papel tiene Sparks AI en las lecciones?',
      o:['Construye el proyecto por el estudiante.','Sugiere ideas y da feedback; el estudiante decide qué tomar.','Evalúa la lección en lugar del tutor.'],
      a:1, e:'Sparks sugiere y el estudiante decide; por lo general, una consulta por lección.' }
  ],
  int:[
    { q:'¿Para quién es Minecraft CraftForge Intermediate y cuánto dura cada lección?',
      o:['Para estudiantes de 8–9 años, con lecciones de 60 minutos.','Para estudiantes de 10–12 años, con lecciones grupales de 90 minutos.','Para estudiantes de 13–17 años, con lecciones de 60 minutos.'],
      a:1, e:'Intermediate es para estudiantes de 10–12 años: 40 lecciones grupales de 90 minutos.' },
    { q:'¿Qué lenguaje de programación usan los estudiantes en el curso?',
      o:['Python.','Lua.','JavaScript.'],
      a:0, e:'Los estudiantes escriben programas en Python que construyen en el mundo de Minecraft.' },
    { q:'¿Qué es un data pack en este curso?',
      o:['Un archivo con capturas de las construcciones del estudiante.','Un conjunto de leyes para el mundo (recetas, drops, comandos…) que Minecraft ejecuta cada vez que entras.','Un paquete de mundos listos para descargar.'],
      a:1, e:'Un data pack es un conjunto de leyes: el mundo las ejecuta cada vez que el estudiante entra.' },
    { q:'¿Con qué termina el curso el estudiante?',
      o:['Con un examen final escrito.','Con más de nueve proyectos en su portafolio de Kodland Sparks y un proyecto final original presentado en el Demo Day.','Solo con el data pack de la Lección 1.'],
      a:1, e:'Más de nueve proyectos en el portafolio y un proyecto original, llevado desde la idea hasta el Demo Day.' },
    { q:'¿Cómo deben usar Sparks AI los estudiantes?',
      o:['Copiando sus respuestas tal cual.','Evaluando sus sugerencias y decidiendo qué tomar.','No deben usarlo nunca.'],
      a:1, e:'Sparks sugiere ideas y escenarios de prueba; el estudiante los evalúa en lugar de copiarlos.' }
  ],
  skills:[],
  tech:[
    { q:'¿Cuándo haces la revisión de la conexión y del launcher?',
      o:['Al inicio de la lección, antes del contenido, así el juego se descarga mientras conoces al grupo.','A mitad de la lección, cuando los estudiantes necesitan Minecraft.','Al final, para que no le quite tiempo a la lección.'],
      a:0, e:'Antes del contenido: el juego se descarga mientras conoces al grupo.' },
    { q:'¿Qué credenciales usas, como tutor, para iniciar sesión en el Kodland Launcher?',
      o:['Una cuenta nueva que creas tú.','Las mismas credenciales de Kodland Sparks, que te da el departamento de Operaciones o de Enseñanza.','La cuenta de un estudiante.'],
      a:1, e:'No se necesitan credenciales para descargar el launcher. Para iniciar sesión, usas tus credenciales de Kodland Sparks, que te da el departamento de Operaciones o de Enseñanza.' },
    { q:'¿Dónde encuentra el estudiante el link que tiene que enviar en la tarjeta de la lección?',
      o:['En un comentario debajo del proyecto.','En Sparks: My projects → abrir el proyecto publicado → copiar la dirección de la barra del navegador.','En el launcher, en la pestaña Play.'],
      a:1, e:'El link es la dirección de la página del proyecto: My projects → el proyecto publicado → la barra del navegador.' },
    { q:'¿Para qué son los últimos 7–10 minutos de la lección?',
      o:['Para construir un rato más.','Para publicar, mostrar los trabajos y dar feedback, además del cierre y la tarea.','Para jugar libremente.'],
      a:1, e:'Protege los últimos minutos: la publicación, la muestra con feedback y el cierre.' },
    { ctx:'En la Lección 1, el launcher de un estudiante no inicia y el resto del grupo está listo.',
      q:'¿Qué haces?',
      o:['Detienes la lección hasta que el launcher funcione.','Sigues con el grupo (la skin se dibuja en Sparks, en el navegador) y ayudas al estudiante durante el trabajo independiente.','Le dices al estudiante que lo intente de nuevo en casa y que se salte la lección.'],
      a:1, e:'Un problema no debe frenar al grupo: el estudiante igual dibuja y publica la skin, y tú resuelves el launcher durante el trabajo independiente.' },
    { q:'¿Dónde obtiene el estudiante el link del data pack publicado?',
      o:['De un comentario en el launcher.','En «Publish to your profile»: Copy link (u Open on Sparks y copiar la dirección de la barra del navegador).','De la pestaña Play del launcher.'],
      a:1, e:'Copy link justo después de publicar; si se perdió, Open on Sparks muestra la página del proyecto, y su dirección es el link.' },
    { ctx:'Un estudiante publicó el data pack, pero a ti no te abre el link.',
      q:'¿Cuál es la causa más probable y cómo se resuelve?',
      o:['En «Who can see it?» no se eligió Everyone: hay que publicar de nuevo con Everyone.','El data pack está roto: hay que crear uno nuevo desde cero.','Los links solo se abren al día siguiente.'],
      a:0, e:'Solo con Everyone el link se abre sin iniciar sesión. Publicar de nuevo con Everyone lo resuelve.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Último paso: vuelve al LMS y completa el DST',
  html: `<p>¡Ya casi terminas! Vuelve a la página de la formación en el LMS, desde donde accediste a esta formación. El test DST está justo debajo de la formación.</p>
    <p>👉 <b>Debes hacer y aprobar el test DST para que la formación se considere completada.</b> Si no haces el DST, la formación quedará incompleta y puede vencer.</p>
    <p>La nota mínima para aprobar es <b>80%</b>.</p>
    <p>¡Mucha suerte! ❤️</p>`,
  nexts: [
    ['📒', '<b>Antes de cada clase:</b> lee las Teacher Notes en el Backoffice y haz el recorrido de la lección en el launcher.'],
    ['🟩', '<b>Primeros minutos:</b> revisión de la conexión y del launcher, y después el resultado final y el objetivo.'],
    ['🔗', '<b>El link:</b> My projects → el proyecto publicado → la dirección en la barra del navegador.'],
    ['⏱️', '<b>Últimos 7–10 minutos:</b> publicar, mostrar los trabajos y dar feedback.']
  ]
};

/* ---------------- Skills for the course ----------------
   Four blocks (Minecraft world, programming logic, Python practice, data packs). Texts come from the proofread
   CraftForge Tutor Training. In each quiz 'c' = number of the correct option (0 = first). Never translate code. */
COURSE.skills = {
  mod: 'skills',
  ui: {
    step_self: 'Avanza paso a paso',
    prev: 'Atrás',
    next: 'Siguiente paso',
    stepn: 'Paso {s} de {n}',
    check_intro: 'Responde todas las preguntas: necesitas un 70 % para desbloquear el siguiente paso. En cada pregunta cuenta tu primera respuesta.',
    correct: '¡Correcto!',
    notquite: 'No exactamente.',
    score: 'Puntuación: {p} % (se necesita un 70 %)',
    retry: 'Intentar de nuevo',
    unlocked: 'Desbloqueaste el siguiente paso.',
    review_msg: 'Repasa las secciones de arriba y vuelve a intentar la evaluación.',
    nextBlock: 'Siguiente bloque →',
    lockedBlock: '🔒 Aprueba el bloque anterior para desbloquear este.',
    ctaTitle: 'Aprueba los cuatro bloques',
    ctaText: 'Cada bloque termina con una práctica corta: necesitas un 70 % en cada uno. Cuando apruebes los cuatro, el módulo quedará completado.',
    progress: '{n} de {t} bloques aprobados',
    ctaDone: 'Módulo completado: {p} %',
    goNext: 'Ir al Módulo {n} →',
    practice: 'Práctica del bloque',
    blockOf: 'Bloque {n} de {t}',
    passedBlock: 'Bloque aprobado: {p} %'
  },
  blocks: [
    {
      id: 'world',
      ic: '🌍',
      slot: 'Mundo',
      title: 'Inmersión en Minecraft',
      sections: [
        {
          t: 'Minecraft básico para tutores (habilidades técnicas)',
          html: '<div class="card class"><p>Minecraft es un mundo hecho de cubos llamados <strong>bloques</strong>. Puedes romperlos, juntarlos y colocarlos para construir lo que quieras. Los niños conocen muy bien este mundo; tú necesitas lo suficiente para moverte, construir y seguir lo que hacen.</p></div><div class="tbl"><table><tbody><tr><th>Tecla / acción</th><th>Qué hace</th></tr><tr><td><code>W A S D</code></td><td>Caminar hacia adelante, izquierda, atrás, derecha</td></tr><tr><td>Mouse</td><td>Mirar alrededor</td></tr><tr><td><code>Espacio</code></td><td>Saltar. En modo Creativo, presiona dos veces para volar; mantén para subir</td></tr><tr><td><code>Shift</code></td><td>Agacharse: no te caes de los bordes. Volando, bajar</td></tr><tr><td>Clic izquierdo</td><td>Romper un bloque / golpear</td></tr><tr><td>Clic derecho</td><td>Colocar un bloque / usar (abrir una puerta, presionar un botón, mover una palanca)</td></tr><tr><td><code>1</code>–<code>9</code> o rueda del mouse</td><td>Elegir un objeto de la barra rápida (la barra de abajo)</td></tr><tr><td><code>E</code></td><td>Abrir el inventario</td></tr><tr><td><code>T</code> o <code>/</code></td><td>Abrir el chat / empezar a escribir un comando</td></tr><tr><td><code>F3</code></td><td>Ver coordenadas e información técnica</td></tr><tr><td><code>F5</code></td><td>Cambiar la vista de la cámara</td></tr><tr><td><code>Esc</code></td><td>Menú de pausa y configuración</td></tr></tbody></table></div><div class="cols"><div class="card class"><h4>Modos de juego</h4><ul><li><strong>Creativo</strong>: bloques ilimitados, puedes volar y nada te hace daño. Ideal para construir.</li><li><strong>Supervivencia</strong>: juntas recursos, tienes vida y hambre, y de noche atacan los monstruos.</li></ul></div><div class="card class"><h4>Palabras que usan los niños</h4><ul><li><strong>Mob</strong>: cualquier criatura (una vaca, un zombi, un Creeper).</li><li><strong>Spawn</strong>: el lugar donde apareces.</li><li><strong>Bioma</strong>: un tipo de terreno (desierto, bosque, nieve).</li><li><strong>Skin</strong>: la apariencia de tu personaje. Steve y Alex son los de siempre.</li></ul></div></div>'
        },
        {
          t: '1.1 · La cultura que traen los niños',
          html: '<div class="card why"><p>Minecraft tiene sus propias leyendas, memes, historias de miedo y bromas internas, y los niños las conocen bien. No necesitas ser un jugador experto, pero sí estar «al tanto». La forma más rápida es un video de <strong>«Minecraft Iceberg»</strong>: datos ocultos, mitos, contenido eliminado y leyendas, desde lo más conocido arriba hasta lo más oscuro abajo.</p></div><div class="vid"><iframe src="https://www.youtube.com/embed/AChmq4QfbK0" title="Minecraft Iceberg video" loading="lazy" allowfullscreen=""></iframe></div><div class="tbl"><table><tbody><tr><th>Nombre</th><th>Qué es</th></tr><tr><td><strong>Herobrine</strong></td><td>La leyenda más famosa de Minecraft: una figura de ojos blancos que supuestamente acecha los mundos. Nunca ha estado en el juego; durante años, las notas de actualización de Mojang decían en broma «Se eliminó a Herobrine».</td></tr><tr><td><strong>Entity 303</strong></td><td>Otra leyenda de terror creada por fans, sobre una entidad vengativa con aire de hacker. A los niños les encanta preguntar por ella; con saber el nombre ya te ganas una sonrisa.</td></tr><tr><td><strong>Notch</strong></td><td>Markus Persson, el creador original de Minecraft.</td></tr><tr><td><strong>El origen del Creeper</strong></td><td>Una historia muy conocida: empezó como un modelo de cerdo fallido, con la altura y el largo intercambiados.</td></tr><tr><td><strong>Las Tierras Lejanas (Far Lands)</strong></td><td>Un fallo del terreno en versiones antiguas de Java, a millones de bloques del punto de aparición, donde el mundo se rompía en paredes extrañas.</td></tr><tr><td><strong>Steve y Alex</strong></td><td>Los personajes predeterminados del jugador.</td></tr></tbody></table></div><div class="card class"><p><strong>En clase:</strong> un rápido «Sí, sé quién es Entity 303 😉» genera confianza en segundos. Después, lleva la conversación de vuelta a la construcción.</p></div>'
        },
        {
          t: '1.2 · Coordenadas: X, Y y Z',
          html: '<div class="tbl"><table><tbody><tr><th>Eje</th><th>Dirección</th><th>Cambia cuando el jugador…</th></tr><tr><td><strong>X</strong></td><td>Este ↔ Oeste</td><td>camina hacia el este o el oeste</td></tr><tr><td><strong>Y</strong></td><td>Arriba ↕ Abajo (altura)</td><td>salta, trepa, cae, excava hacia abajo, construye una torre</td></tr><tr><td><strong>Z</strong></td><td>Sur ↔ Norte</td><td>camina hacia el norte o el sur</td></tr></tbody></table></div><div class="card "><p>X y Z son la posición sobre el suelo; <strong>Y es la altura</strong>. Cualquier movimiento vertical, incluso un solo salto, cambia Y mientras dura. Para ver las coordenadas: <code>F3</code> en Java Edition, o activa «Mostrar coordenadas» en la configuración del mundo en Bedrock. Teletransportarse usa el mismo orden: <code>/tp X Y Z</code>.</p></div><div class="card tip"><p><strong>Truco para recordar:</strong> Y es la que «sube» en las gráficas de la escuela; en Minecraft también es la que sube.</p></div>'
        },
        {
          t: '1.3 · Mobs que todo tutor debe reconocer',
          html: '<div class="tbl"><table><tbody><tr><th>Mob</th><th>Qué saber</th></tr><tr><td><strong>Creeper</strong></td><td>Se acerca en silencio y <strong>sisea cuando se enciende su mecha: está a punto de explotar</strong> (en unos 1,5 segundos). Alejarse fuera de su alcance puede cancelar la mecha. Si cae un rayo cerca, se convierte en un <strong>Creeper cargado</strong>, con una explosión mucho mayor.</td></tr><tr><td><strong>Zombi / Esqueleto</strong></td><td>Aparecen en la oscuridad; se queman con la luz del día salvo que estén a la sombra o lleven casco. Los esqueletos disparan flechas a distancia.</td></tr><tr><td><strong>Araña</strong></td><td>Trepa paredes: un árbol o un pilar no te protegen. Es neutral con mucha luz y hostil en la oscuridad.</td></tr><tr><td><strong>Enderman</strong></td><td>Es neutral hasta que le miras la cara. Entonces se teletransporta y ataca.</td></tr><tr><td><strong>Phantom</strong></td><td>Aparece en el cielo si el jugador no ha dormido durante tres o más días del juego.</td></tr></tbody></table></div>'
        },
        {
          t: '1.4 · Sobrevivir a la primera noche',
          html: '<div class="card "><p>Los mobs hostiles aparecen en la <strong>oscuridad</strong>. En la primera noche de Supervivencia, sin cama ni equipo, el plan más seguro es simple: <strong>construir un pequeño refugio cerrado e iluminarlo por dentro</strong>. Las paredes mantienen fuera a los mobs; la luz interior impide que aparezcan a tu lado. Excavar en una ladera y bloquear la entrada funciona bien.</p></div><div class="tbl"><table><tbody><tr><th>Idea tentadora</th><th>Por qué falla</th></tr><tr><td>Sostener una antorcha en la mano</td><td>En el juego estándar, una antorcha en la mano no ilumina la zona ni impide que aparezcan mobs a tu alrededor.</td></tr><tr><td>Esperar en lo alto de un árbol</td><td>Las arañas trepan, los esqueletos disparan desde abajo y caerse hace daño.</td></tr><tr><td>Explorar esquivando mobs</td><td>La oscuridad es justo donde aparecen, y cada vez más a medida que avanza la noche.</td></tr></tbody></table></div><div class="card tip"><p>Una <strong>cama</strong> te permite saltarte la noche y además fija tu punto de reaparición personal. Lo necesitarás en el 1.6.</p></div>'
        },
        {
          t: '1.5 · Herramientas, niveles y qué pico extrae qué',
          html: '<div class="card "><p>Los picos suben por niveles: <strong>Madera → Piedra → Hierro → Diamante → Netherita</strong>. <strong>El oro es la trampa:</strong> pica muy rápido, pero su nivel es tan bajo como el de la madera. Si el nivel es demasiado bajo, el bloque se rompe igual, pero no suelta nada.</p></div><div class="tbl"><table><tbody><tr><th>Pico</th><th>Nivel más bajo que puede extraer…</th></tr><tr><td>Madera / Oro</td><td>Piedra, mineral de carbón</td></tr><tr><td>Piedra</td><td>Mineral de hierro, de cobre, de lapislázuli</td></tr><tr><td>Hierro</td><td><strong>Mineral de diamante</strong>, de oro, de redstone, de esmeralda</td></tr><tr><td>Diamante</td><td>Obsidiana, escombros ancestrales</td></tr></tbody></table></div><div class="card class"><p><strong>En clase:</strong> «¡Mi pico rompió el diamante y no salió nada!» es una pregunta real de alumnos. Ahora sabes la respuesta: el nivel era demasiado bajo.</p></div>'
        },
        {
          t: '1.6 · Puntos de aparición, camas y brújulas',
          html: '<div class="cols"><div class="card "><h4>Punto de aparición del mundo</h4><p>El lugar donde todo jugador aparece por primera vez en un mundo nuevo. Nunca se mueve, salvo que alguien lo cambie con un comando.</p></div><div class="card "><h4>Punto de reaparición personal</h4><p>Se fija durmiendo en una cama (o usando un ancla de reaparición en el Nether). Vuelves aquí después de morir.</p></div></div><div class="tbl"><table><tbody><tr><th>Objeto</th><th>Apunta a</th></tr><tr><td><strong>Brújula normal</strong></td><td>El <strong>punto de aparición del mundo</strong>: no a la cama ni al norte. Gira sin control en el Nether y en el End.</td></tr><tr><td>Brújula de recuperación</td><td>El lugar donde el jugador murió por última vez.</td></tr><tr><td>Brújula de magnetita</td><td>La magnetita a la que se vinculó. Así es como los jugadores hacen una brújula que apunta a su base.</td></tr></tbody></table></div><div class="card warn"><p><strong>Confusión frecuente:</strong> poner una cama nueva cambia dónde <em>reapareces</em>, pero una brújula normal sigue apuntando al punto de aparición original del mundo.</p></div>'
        }
      ],
      quiz: [
        {
          p: 'Un jugador excava en línea recta hacia abajo 10 bloques. ¿Qué coordenada cambia?',
          o: ['X', 'Y', 'Z', 'Ninguna'],
          c: 1,
          f: 'Y es la altura. Excavar hacia abajo, saltar, trepar o construir hacia arriba cambian Y.'
        },
        {
          p: '¿Cuál es el pico de nivel más bajo que puede extraer mineral de hierro y obtener el mineral?',
          o: ['De madera', 'De piedra', 'De oro', 'Sirve cualquier pico'],
          c: 1,
          f: 'La piedra basta para el hierro. El oro es rápido, pero tiene el mismo nivel bajo que la madera.'
        },
        {
          p: 'Un Creeper empieza a sisear justo detrás de un jugador. ¿Cuál es la mejor reacción?',
          o: ['Atacarlo de inmediato: el siseo significa que está débil', 'Quedarse quieto para que pierda interés', 'Alejarse corriendo: la mecha está encendida y salir de su alcance puede cancelarla', 'Poner una antorcha a su lado'],
          c: 2,
          f: 'El siseo significa que la mecha está encendida y está a punto de explotar. Salir de su alcance es la jugada.'
        },
        {
          p: '¿Por qué un refugio para la primera noche necesita luz por dentro, no solo paredes?',
          o: ['La luz hace más fuertes las paredes', 'Los mobs hostiles aparecen en la oscuridad: la luz impide que aparezcan dentro contigo', 'Las antorchas curan al jugador', 'La luz de afuera atrae a los mobs'],
          c: 1,
          f: 'Las paredes mantienen fuera a los mobs; la luz impide que aparezcan nuevos en el espacio oscuro contigo.'
        },
        {
          p: 'Un jugador quiere una brújula que siempre apunte a su base. ¿Qué necesita?',
          o: ['Dormir en una cama en la base: la brújula la seguirá', 'Usar la brújula sobre una magnetita colocada en la base', 'Una brújula normal ya apunta a la última cama', 'Una brújula de recuperación'],
          c: 1,
          f: 'Una brújula normal apunta al punto de aparición del mundo. Vincularla a una magnetita hace que apunte a esa magnetita.'
        },
        {
          p: 'Un alumno dice: «¡Herobrine está en mi mundo!». ¿Quién es Herobrine?',
          o: ['Un jefe añadido en la actualización del Nether', 'Una leyenda de fans que nunca ha estado en el juego; Mojang incluso bromeó con «Se eliminó a Herobrine» en las notas de actualización', 'El desarrollador que creó al Creeper', 'Otro nombre del Enderman'],
          c: 1,
          f: 'Herobrine es una leyenda. Conocer la broma te ayuda a conectar con los alumnos en un segundo.'
        },
        {
          p: '¿Cómo se convierte un Creeper normal en un Creeper cargado?',
          o: ['Explotando dos veces', 'Cuando cae un rayo cerca', 'Cuando está en el agua', 'Cuando un jugador le pone nombre'],
          c: 1,
          f: 'Un rayo cercano lo carga y su explosión se vuelve mucho mayor.'
        }
      ]
    },
    {
      id: 'logic',
      ic: '🧠',
      slot: 'Lógica',
      title: 'Lógica de programación',
      sections: [
        {
          t: '2.1 · Lógica de programación',
          html: '<div class="card why"><p>La programación no se trata solo de conocer la sintaxis de un lenguaje de programación. Antes que nada, es la capacidad de pensar de forma secuencial, identificar patrones, dividir una tarea en pasos y entender por qué un algoritmo funciona de la manera en que lo hace.</p><p>Durante las clases, los alumnos constantemente harán preguntas, cometerán errores, sugerirán soluciones inesperadas y a veces escribirán código de una manera completamente diferente a lo que se pretendía. Para ayudarlos, es importante no solo saber el comando correcto, sino entender la lógica detrás del programa.</p><p>En este bloque, no necesitas saber un lenguaje de programación específico. Aquí veremos qué tan cómodo te sientes trabajando con algoritmos, condiciones, bucles y secuencias de acciones.</p></div><div class="card "><h4>El método de la tabla de seguimiento</h4><ol><li>Escribe <strong>cada variable</strong> como una columna, con su valor inicial.</li><li>Haz <strong>un paso a la vez</strong>, en el orden en que están escritas las reglas.</li><li>Cada condición se comprueba con el valor <strong>actual</strong>: el que acabas de escribir, no el anterior.</li><li>Cuenta las repeticiones. «Repetir 4 veces» significa cuatro filas, ni tres ni cinco.</li></ol></div><div class="tracer" data-tr="robot"></div>'
        },
        {
          t: '2.2 · Convertir reglas en condiciones',
          html: '<div class="card "><p>Las preguntas con reglas son más fáciles cuando enumeras <strong>todos los casos posibles</strong> y compruebas cada uno. Ejemplo de reglas:</p><ul><li>Para entrar en la sala del portal, un jugador necesita <strong>pedernal o una carga ígnea</strong>.</li><li>Si tiene <strong>ambos</strong>, también debe llevar armadura de oro.</li><li>Si tiene <strong>solo uno</strong>, no necesita armadura.</li></ul></div><div class="tbl"><table><tbody><tr><th>Pedernal</th><th>Carga ígnea</th><th>Armadura de oro</th><th>¿Puede entrar?</th></tr><tr><td>✔</td><td>✘</td><td>—</td><td>Sí (solo un objeto, sin regla extra)</td></tr><tr><td>✘</td><td>✔</td><td>—</td><td>Sí</td></tr><tr><td>✔</td><td>✔</td><td>✔</td><td>Sí</td></tr><tr><td>✔</td><td>✔</td><td>✘</td><td><strong>No</strong>: el caso de «ambos» añade un requisito</td></tr><tr><td>✘</td><td>✘</td><td>—</td><td><strong>No</strong>: la primera regla no se cumple</td></tr></tbody></table></div><div class="card warn"><p><strong>Cuidado con los detalles que no importan.</strong> Si las reglas dicen que no hay requisito extra para un jugador con un solo objeto, que tenga armadura o una contraseña incorrecta no importa en su caso. Las preguntas suelen añadir esos detalles para comprobar si aplicas las reglas con exactitud.</p></div>'
        },
        {
          t: '2.3 · Bucles con una condición dentro',
          html: '<div class="card "><p>Cuando cada ronda tiene dos pasos —«cambiar el valor y luego comprobar una condición»—, la comprobación usa el valor <strong>después</strong> del cambio. Y una vez que se supera un umbral, la condición suele seguir siendo verdadera en todas las rondas siguientes.</p></div><div class="tracer" data-tr="coins"></div><div class="card warn"><h4>Los dos errores clásicos</h4><ul><li>Comprobar la condición con el valor de <em>antes</em> del cambio.</li><li>Aplicar la condición una sola vez, como si estuviera fuera del bucle.</li></ul></div>'
        },
        {
          t: '2.4 · Contadores, indicadores y reglas de parada',
          html: '<div class="card "><p>Un <strong>contador</strong> cuenta cuántas veces ocurrió algo. Un <strong>indicador</strong> (activado/desactivado, True/False) recuerda que algo ya ocurrió. Una <strong>regla de parada</strong> termina el algoritmo antes. Cuando varias reglas se aplican al mismo elemento, aplícalas en el orden escrito: un indicador activado por una regla puede usarlo la siguiente regla <strong>en el mismo paso</strong>.</p></div><div class="tracer" data-tr="flag"></div><div class="card tip"><p>Si las opciones incluyen «el algoritmo no se detendrá», tómala en serio: rastrea hasta el último elemento antes de elegir.</p></div>'
        },
        {
          t: '2.5 · ¿El algoritmo es realmente correcto?',
          html: '<div class="card "><p>Para demostrar que un algoritmo está mal, solo necesitas <strong>un contraejemplo</strong>: una entrada con la que da la respuesta incorrecta. Prueba los casos que la gente olvida: una coincidencia que <em>no</em> involucra al primer elemento, el último elemento, un elemento comparado consigo mismo, todos los elementos iguales, una lista de uno.</p></div><div class="card "><h4>Ejemplo</h4><p>Tarea: decidir si todos los números de una lista son distintos. Algoritmo propuesto: «compara cada número solo con el siguiente; si dos son iguales, responde No».</p><p>Contraejemplo: <code>3, 5, 3</code>. Los vecinos son 3–5 y 5–3, nunca iguales, así que responde «todos distintos»: incorrecto. El algoritmo nunca compara números que están lejos.</p><p><strong>Corrección:</strong> compara <em>cada</em> número con <em>cada</em> número que viene después. Dos bucles: el exterior toma cada número por turno, no solo el primero; el interior lo compara con el resto.</p></div><div class="card class"><p><strong>En clase:</strong> cuando el programa de un alumno «funciona», pídele una entrada que podría romperlo. Buscar contraejemplos es como piensan los programadores.</p></div>'
        }
      ],
      quiz: [
        {
          p: 'Un robot empieza en la casilla 1 y sigue esta regla 4 veces: si el número de la casilla es impar, avanza 3; si es par, retrocede 1. ¿Dónde termina?',
          o: ['4', '5', '6', '7'],
          c: 1,
          f: '1 → 4 → 3 → 6 → 5. Cada comprobación usa la casilla en la que acaba de caer.'
        },
        {
          p: 'Reglas de la arena: un jugador necesita una espada O un escudo. Si tiene ambos, también debe ser de nivel 5 o superior. Con solo uno, no hay requisito de nivel. ¿Quién NO puede entrar?',
          o: ['Solo una espada, nivel 1', 'Solo un escudo, nivel 3', 'Espada y escudo, nivel 7', 'Espada y escudo, nivel 2'],
          c: 3,
          f: 'Solo el caso de «ambos» tiene la regla extra de nivel, y el nivel 2 no la cumple. El nivel de un jugador con un solo objeto es irrelevante.'
        },
        {
          p: 'La puntuación empieza en 1. Repite 3 veces: multiplica la puntuación por 2; luego, si el resultado es mayor que 5, resta 3. ¿Cuál es la puntuación final?',
          o: ['2', '5', '8', '13'],
          c: 1,
          f: '1 → 2 (no > 5). 2 → 4 (no > 5). 4 → 8 → 8 − 3 = 5.'
        },
        {
          p: 'Números: 3, 8, 5, 10, 1. contador = 0, alarma = apagada. Para cada número, en este orden: si el número es mayor que 4, suma 1 al contador; cuando el contador llegue a 2, enciende la alarma; si la alarma está encendida y el número es impar, detente. ¿En qué número se detiene?',
          o: ['5', '10', '1', 'Nunca se detiene'],
          c: 0,
          f: '3: nada. 8: contador 1. 5: contador 2 → alarma encendida → en el mismo paso, 5 es impar → se detiene en 5.'
        },
        {
          p: 'Para comprobar si una lista está ordenada de menor a mayor, alguien propone: «compara cada número con el primero; si alguno es menor que el primero, responde No ordenada». ¿Cuál es el problema principal?',
          o: ['Falla con números negativos', 'Diría «No ordenada» para cualquier lista', 'Nunca compara vecinos después del primero, así que 1, 5, 3 cuenta como ordenada', 'Solo funciona con listas de longitud par'],
          c: 2,
          f: '5 y 3 son mayores que 1, así que la comprobación pasa, pero la lista no está ordenada. Un contraejemplo basta.'
        }
      ]
    },
    {
      id: 'python',
      ic: '🐍',
      slot: 'Python',
      title: 'Práctica de programación en Python',
      sections: [
        {
          t: '3.1 · Leer código como la computadora',
          html: '<div class="card why"><p>Un buen tutor debe ser capaz no solo de escribir su propio programa, sino también de entender rápidamente el código de otra persona. Durante las clases, tendrás que leer las soluciones de los alumnos, descubrir exactamente qué hace el programa, encontrar las causas de los errores y ayudar a corregirlos.</p><p>En este bloque, trabajaremos con Python. Lo más importante aquí no es recordar cada comando de memoria, sino entender cómo se ejecuta el código, cómo interactúan sus partes y por qué el programa produce un resultado particular.</p><p>Tendrás que leer varios programas cortos, identificar errores y resolver varias tareas prácticas. No te preocupes, aquí no habrá algoritmos complejos - solo nos interesa el dominio seguro de los principios básicos de programación.</p></div><div class="tbl"><table><tbody><tr><th>Elemento</th><th>Qué significa</th></tr><tr><td><code>range(4)</code></td><td>0, 1, 2, 3: empieza en 0 y se detiene <strong>antes</strong> del 4</td></tr><tr><td><code>range(2, 6)</code></td><td>2, 3, 4, 5: incluye el inicio, excluye el final</td></tr><tr><td><code>total += x</code></td><td>Igual que <code>total = total + x</code></td></tr><tr><td><code>a % b</code></td><td>Resto. <code>n % 2 == 0</code> significa que n es par; <code>== 1</code> significa impar</td></tr><tr><td><code>a // b</code></td><td>División entera: <code>7 // 2</code> es 3</td></tr><tr><td><code>=</code> frente a <code>==</code></td><td><code>=</code> guarda un valor; <code>==</code> compara dos valores</td></tr><tr><td><code>&gt;</code> frente a <code>&gt;=</code></td><td>«Mayor que 10» excluye el 10; «al menos 10» lo incluye. El 0 no es positivo.</td></tr></tbody></table></div><div class="tracer" data-tr="pyloop"></div>'
        },
        {
          t: '3.2 · Listas e índices',
          html: '<pre class="code">numbers = [4, 15, 7, 22]\n# index:    0   1  2   3\n\nnumbers[1]      # 15\nlen(numbers)    # 4\n\nfor n in numbers:              # n is each VALUE: 4, 15, 7, 22\n    ...\nfor i in range(len(numbers)):  # i is each INDEX: 0, 1, 2, 3\n    ...  numbers[i]  ...</pre><div class="card warn"><p>Los índices empiezan en <strong>0</strong>. Cuando una tarea pide «el índice», devuelve <code>i</code>, no <code>numbers[i]</code>. Confundir índice y valor es una de las opciones incorrectas más comunes.</p></div>'
        },
        {
          t: '3.3 · return termina la función de inmediato',
          html: '<div class="card "><p>Una función se detiene en el momento en que llega a <code>return</code>, incluso en medio de un bucle. El valor después de <code>return</code> es lo que devuelve la llamada. <code>print</code> solo muestra algo en pantalla; no devuelve nada.</p><p>En Python, <strong>la sangría decide qué está dentro de qué</strong>. Cuatro espacios más significan «dentro del bucle» o «dentro del if». Por eso la posición de una sola línea <code>return</code> puede cambiar todo el resultado.</p></div><div class="tracer" data-tr="pyreturn"></div>'
        },
        {
          t: '3.4 · Patrón: «¿TODOS los elementos están bien?»',
          html: '<div class="card "><p>Para comprobar que <em>todos</em> los elementos cumplen una condición, busca <strong>un elemento que la incumpla</strong>. En cuanto encuentres uno, <code>return False</code>. Solo después de que el bucle lo haya revisado todo puedes hacer <code>return True</code>.</p></div><pre class="code good">def all_below_100(numbers):\n    for n in numbers:\n        if n &gt;= 100:\n            return False   # one bad item is enough\n    return True            # after the loop: nothing was bad</pre><div class="cols"><div><pre class="code bad"># WRONG: decides after the first item\nfor n in numbers:\n    if n &lt; 100:\n        return True\n    else:\n        return False</pre></div><div><pre class="code bad"># WRONG: returns True as soon as\n# ONE item is OK\nfor n in numbers:\n    if n &lt; 100:\n        return True\nreturn False</pre></div></div><div class="card tip"><p>Comprueba también el límite de la condición: «positivo» significa <code>&gt; 0</code>, así que una lista que contiene 0 no es toda positiva.</p></div>'
        },
        {
          t: '3.5 · Patrón: «encontrar el PRIMERO»',
          html: '<div class="card "><p>Para devolver el índice del primer elemento que coincide: <code>return i</code> dentro del <code>if</code>, así la función se detiene en la primera coincidencia. El valor de «no encontrado» (<code>-1</code>) va <strong>después</strong> del bucle, porque solo sabes que nada coincidió cuando revisaste todos los elementos.</p></div><pre class="code good">def find_first_even(numbers):\n    for i in range(len(numbers)):\n        if numbers[i] % 2 == 0:\n            return i      # first match: stop here\n    return -1             # loop finished: no match\n\nfind_first_even([3, 7, 8, 10])   # 2</pre><div class="tbl"><table><tbody><tr><th>Versión incorrecta</th><th>Qué falla</th></tr><tr><td><code>else: return -1</code> dentro del bucle</td><td>Se rinde después del primer elemento si no coincide.</td></tr><tr><td><code>result = i</code> en el bucle, <code>return result</code> después</td><td>Sobrescribe una y otra vez, así que devuelve la <strong>última</strong> coincidencia, no la primera.</td></tr><tr><td><code>for n in numbers: … return n</code></td><td>Devuelve el <strong>valor</strong>, no el índice.</td></tr></tbody></table></div>'
        },
        {
          t: '3.6 · Ayudar a un alumno a depurar',
          html: '<div class="card class"><p>Los mismos hábitos sirven en ambos niveles de CraftForge cuando lees el código de un alumno. No lo arregles por él; ayúdalo a encontrar el error:</p><ul><li><strong>Lean el error en voz alta juntos.</strong> «¿A qué línea apunta y qué esperas que pase ahí?»</li><li><strong>Aísla el último cambio.</strong> «¿Qué fue lo último que cambiaste antes de que fallara?»</li><li><strong>Rastrea con una entrada pequeña</strong>: dos o tres elementos bastan para descubrir la mayoría de los errores.</li><li>Si el código vino de la IA: «Antes de agregarlo, explícame qué hace esta línea».</li></ul></div><div class="tbl"><table><tbody><tr><th>Error que ve el alumno</th><th>Causa habitual</th></tr><tr><td>IndentationError</td><td>Espacios mezclados o que faltan al inicio de una línea</td></tr><tr><td>SyntaxError</td><td>Falta <code>:</code> después de <code>for</code>/<code>if</code>/<code>def</code>, o hay <code>=</code> donde se necesita <code>==</code></td></tr><tr><td>NameError</td><td>Un error de escritura en el nombre de una variable, o usarla antes de que exista</td></tr><tr><td>Resultado incorrecto, sin error</td><td>Lógica: un <code>return</code> en el lugar equivocado, <code>&gt;</code> frente a <code>&gt;=</code>, el valor inicial incorrecto</td></tr></tbody></table></div>'
        }
      ],
      quiz: [
        {
          p: '¿Qué imprimirá este programa?<pre class="code">total = 0\nfor i in range(1, 5):\n    total += i * 2\nprint(total)</pre>',
          o: ['10', '12', '20', '30'],
          c: 2,
          f: 'range(1, 5) es 1, 2, 3, 4. Así que 2 + 4 + 6 + 8 = 20. (Para 30 haría falta range(1, 6)).'
        },
        {
          p: '¿Qué devuelve esta llamada?<pre class="code">def mystery(nums):\n    result = 0\n    for n in nums:\n        if n % 2 == 1:\n            result += n\n    return result\n\nmystery([3, 4, 7, 10])</pre>',
          o: ['2', '10', '14', '24'],
          c: 1,
          f: 'Suma solo los números impares: 3 + 7 = 10. (2 sería contarlos; 24 sería sumarlos todos).'
        },
        {
          p: 'count_evens([2, 4, 6]) devuelve 1 en lugar de 3. ¿Qué cambio lo corrige para cualquier lista?<pre class="code">def count_evens(numbers):\n    count = 0\n    for n in numbers:\n        if n % 2 == 0:\n            count += 1\n        return count</pre>',
          o: ['Empezar count en 1', 'Mover return count dentro del if', 'Mover return count fuera del bucle for, después de él', 'Cambiar == 0 por == 1'],
          c: 2,
          f: 'return está dentro del bucle, así que la función termina después del primer número. Colocado después del bucle, se ejecuta una vez que todo se ha contado.'
        },
        {
          p: 'all_even(numbers) debe devolver True solo si todos los números son pares. ¿Qué versión es correcta?',
          o: ['A<pre class="code">for n in numbers:\n    if n % 2 == 0:\n        return True\nreturn False</pre>', 'B<pre class="code">for n in numbers:\n    if n % 2 != 0:\n        return False\nreturn True</pre>', 'C<pre class="code">for n in numbers:\n    if n % 2 != 0:\n        return False\n    else:\n        return True</pre>', 'Ninguna'],
          c: 1,
          f: 'B devuelve False en el primer número impar y True solo después de revisarlos todos. A se detiene en el primer número par; C decide después de mirar un solo elemento.'
        },
        {
          p: 'find_first_negative(numbers) debe devolver el índice del primer número negativo, o -1 si no hay ninguno. ¿Qué versión funciona con cualquier lista?',
          o: ['A<pre class="code">for i in range(len(numbers)):\n    if numbers[i] &lt; 0:\n        return i\n    else:\n        return -1</pre>', 'B<pre class="code">result = -1\nfor i in range(len(numbers)):\n    if numbers[i] &lt; 0:\n        result = i\nreturn result</pre>', 'C<pre class="code">for i in range(len(numbers)):\n    if numbers[i] &lt; 0:\n        return i\nreturn -1</pre>', 'D<pre class="code">for n in numbers:\n    if n &lt; 0:\n        return n\nreturn -1</pre>'],
          c: 2,
          f: 'C se detiene en la primera coincidencia y devuelve -1 solo después de toda la lista. A se rinde tras un elemento, B devuelve la última coincidencia, D devuelve el valor en lugar del índice.'
        },
        { p:'¿Qué valores produce range(2, 6)?', o:['2, 3, 4, 5, 6', '2, 3, 4, 5', '3, 4, 5, 6', '0, 1, 2, 3, 4, 5'], c:1, f:'El inicio se incluye, el final no.' }
      ]
    },
    {
      id: 'datapacks',
      ic: '📜',
      slot: 'Datapack',
      title: 'Data packs: las leyes del mundo',
      sections: [
        {
          t: '4.1 · Qué es un data pack',
          html: '<div class="card why"><p>Los data packs permiten al estudiante fijar sus propias <strong>leyes</strong> para Minecraft —recetas nuevas, comandos personalizados, temporizadores, eventos y puntuación— sin cambiar el juego en sí. Abren el año (módulo 01, «el mundo empieza a funcionar con las reglas escritas por el estudiante») e impulsan el módulo 06, donde una zona común se convierte en un juego.</p></div><pre class="code">my_pack/\n├── pack.mcmeta                    ← required: tells Minecraft this is a data pack\n└── data/\n    ├── forge/                     ← the student\'s namespace\n    │   └── function/\n    │       ├── setup.mcfunction   ← one command per line, no "/"\n    │       └── loop.mcfunction\n    └── minecraft/\n        └── tags/function/\n            ├── load.json          ← lists functions that run when the world loads or /reload runs\n            └── tick.json          ← lists functions that run every game tick</pre><div class="card tip"><p>Los nombres de las carpetas dependen de la versión del juego: desde la 1.21 van en singular (<code>function</code>, <code>recipe</code>); las versiones anteriores usan plural (<code>functions</code>, <code>recipes</code>). Un nombre de carpeta incorrecto es un fallo silencioso: el pack se carga pero no pasa nada. Usa la estructura que te dé el entorno de tu curso.</p></div>'
        },
        {
          t: '4.2 · load, tick y la regla de los 20 ticks',
          html: '<div class="tbl"><table><tbody><tr><th>Cuándo</th><th>Qué se ejecuta</th></tr>\n    <tr><td>Al cargar el mundo, o con <code>/reload</code></td><td>Las funciones listadas en <code>load.json</code>, una vez. Sirve para la preparación: crear marcadores.</td></tr>\n    <tr><td>En cada tick del juego: <strong>20 veces por segundo</strong></td><td>Las funciones listadas en <code>tick.json</code>. Sirve para temporizadores y para comprobar condiciones.</td></tr>\n    <tr><td>Cuando la llamas</td><td><code>/function forge:setup</code> ejecuta una función a mano: ideal para probar.</td></tr></tbody></table></div><pre class="code"># setup.mcfunction  (in load.json: runs once)\nscoreboard objectives add timer dummy\nscoreboard objectives add points dummy\nscoreboard objectives setdisplay sidebar points\n\n# loop.mcfunction   (in tick.json: runs 20 times per second)\nscoreboard players add #game timer 1\nexecute if score #game timer matches 200 run say Ten seconds!</pre><div class="card "><p>El temporizador sube 1 en cada tick, así que 200 ticks = <strong>10 segundos</strong>. <code>execute if …</code> es la versión de data pack de un <code>if</code>. Un marcador es la forma en que el módulo 06 «lleva los puntos».</p></div>'
        },
        {
          t: '4.3 · Cuando una regla no se activa',
          html: '<div class="tbl"><table><tbody><tr><th>Síntoma</th><th>Lo primero que hay que revisar</th></tr>\n    <tr><td>No pasa nada</td><td>¿Ejecutó <code>/reload</code> después de editar? ¿El pack está activado (<code>/datapack list</code>)?</td></tr>\n    <tr><td>La preparación nunca ocurrió</td><td>¿La función está listada en <code>load.json</code>, con el espacio de nombres correcto?</td></tr>\n    <tr><td>Funciona una vez, pero no al volver a entrar al mundo</td><td>La preparación se ejecutó a mano y no está en <code>load.json</code></td></tr>\n    <tr><td>Se activa sin parar en lugar de una vez</td><td>El comando está en una función tick sin condición</td></tr>\n    <tr><td>La condición nunca se activa</td><td>Revisa el nombre del objetivo, el destino y el número: rastréalo como cualquier algoritmo</td></tr></tbody></table></div><div class="card class"><p><strong>En clase:</strong> no lo arregles por ellos. Revisen juntos el disparador: <em>«Explícame cuándo debería activarse esto».</em> ¿Al cargar, en cada tick o solo cuando una condición es verdadera?</p></div>'
        }
      ],
      quiz: [
        {
          p: '¿Cuántas veces por segundo se ejecuta una función listada en tick.json?',
          o: ['1', '10', '20', '60'],
          c: 2,
          f: 'Minecraft ejecuta 20 ticks de juego por segundo, y las funciones tick se ejecutan en cada tick.'
        },
        {
          p: 'Un temporizador suma 1 a una puntuación en cada tick. ¿Qué valor significa que pasaron 30 segundos?',
          o: ['30', '300', '600', '1800'],
          c: 2,
          f: '20 ticks por segundo × 30 segundos = 600.'
        },
        {
          p: 'Un estudiante editó un archivo de función, pero el juego sigue comportándose como antes. ¿Qué debería probar primero?',
          o: ['Borrar el mundo', 'Ejecutar /reload', 'Reiniciar la computadora', 'Cambiar el nombre del espacio de nombres'],
          c: 1,
          f: '/reload carga los archivos modificados y vuelve a ejecutar las funciones load.'
        },
        {
          p: '¿Dónde debe ir el comando que crea un objetivo de marcador?',
          o: ['En una función listada en load.json', 'En una función listada en tick.json', 'En pack.mcmeta', 'Hay que escribirlo a mano en cada clase'],
          c: 0,
          f: 'La preparación va en una función load: se ejecuta una vez cuando carga el mundo o con /reload.'
        },
        {
          p: 'La regla de un estudiante no se activa y quiere que la arregles. ¿Qué le dices?',
          o: ['«Déjame reescribirla por ti».', '«Explícame cuándo debería activarse esto».', '«Pídele a Sparks que la escriba de nuevo».', '«Los data packs son demasiado difíciles; sáltalo».'],
          c: 1,
          f: 'Revisar juntos el disparador mantiene al estudiante resolviéndolo, paso a paso.'
        }
      ]
    }
  ],
  tracers: {
    robot: {
      title: 'Rastréalo: el robot en la recta numérica',
      code: ['x = 3', 'repeat 4 times:', '    if x is a multiple of 3:', '        move 2 forward', '    otherwise:', '        move 1 back'],
      steps: [
        {
          l: 0,
          v: { x:3, round:'–' },
          n: 'Anota el valor inicial antes que nada.'
        },
        {
          l: 2,
          v: { x:3, round:1 },
          n: 'Ronda 1. ¿3 es múltiplo de 3? Sí.'
        },
        {
          l: 3,
          v: { x:5, round:1 },
          n: '3 + 2 = 5. La siguiente ronda comprueba el NUEVO valor de x, 5.'
        },
        {
          l: 5,
          v: { x:4, round:2 },
          n: 'Ronda 2. 5 no es múltiplo de 3, así que retrocede: 5 − 1 = 4.'
        },
        {
          l: 5,
          v: { x:3, round:3 },
          n: 'Ronda 3. 4 no es múltiplo de 3: 4 − 1 = 3.'
        },
        {
          l: 3,
          v: { x:5, round:4 },
          n: 'Ronda 4. 3 vuelve a ser múltiplo de 3: 3 + 2 = 5. Cuatro rondas hechas.'
        },
        {
          l: 1,
          v: { x:5, round:'done' },
          n: 'Respuesta final: 5. Fíjate en que el robot volvió al 3: un bucle que repite un valor es una trampa clásica para quien adivina.'
        }
      ]
    },
    coins: {
      title: 'Rastréalo: un bucle con una condición dentro',
      code: ['coins = 2', 'repeat 3 times:', '    coins = coins + 3', '    if coins > 6:', '        coins = coins * 2'],
      steps: [
        {
          l: 0,
          v: { coins:2, round:'–' },
          n: 'Valor inicial.'
        },
        {
          l: 2,
          v: { coins:5, round:1 },
          n: 'Ronda 1: primero sumar. 2 + 3 = 5.'
        },
        {
          l: 3,
          v: { coins:5, round:1 },
          n: 'Ahora comprueba el valor NUEVO: ¿5 > 6? No, nada se duplica.'
        },
        {
          l: 2,
          v: { coins:8, round:2 },
          n: 'Ronda 2: 5 + 3 = 8.'
        },
        {
          l: 4,
          v: { coins:16, round:2 },
          n: '8 > 6, así que se duplica: 16.'
        },
        {
          l: 2,
          v: { coins:19, round:3 },
          n: 'Ronda 3: 16 + 3 = 19.'
        },
        {
          l: 4,
          v: { coins:38, round:3 },
          n: '19 > 6, se duplica otra vez: 38. Una vez superado el umbral, la duplicación ocurre en cada ronda.'
        }
      ]
    },
    flag: {
      title: 'Rastréalo: un contador, un indicador y una regla de parada',
      code: ['numbers = 6, 1, 8, 3, 12', 'counter = 0, mode = off', 'for each number, in this order:', '    if number > 5: counter + 1', '    if counter == 2: mode = on', '    if mode is on and number is odd: STOP'],
      steps: [
        {
          l: 1,
          v: { number:'–', counter:0, mode:'off' },
          n: 'Escribe cada variable en su propia columna antes de empezar.'
        },
        {
          l: 3,
          v: { number:6, counter:1, mode:'off' },
          n: '6 > 5 → contador 1. El modo sigue apagado. Además, 6 es par.'
        },
        {
          l: 5,
          v: { number:1, counter:1, mode:'off' },
          n: '1 no es > 5. El modo está apagado, así que la regla de parada no puede activarse aunque 1 sea impar.'
        },
        {
          l: 4,
          v: { number:8, counter:2, mode:'on' },
          n: '8 > 5 → contador 2 → el modo se enciende en este mismo paso.'
        },
        {
          l: 5,
          v: { number:8, counter:2, mode:'on' },
          n: 'Tercera regla, mismo número: el modo está encendido, pero 8 es par. Sigue.'
        },
        {
          l: 5,
          v: { number:3, counter:2, mode:'on' },
          n: '3: no es > 5. El modo está encendido y 3 es impar → SE DETIENE en 3. El 12 nunca se lee.'
        }
      ]
    },
    pyloop: {
      title: 'Rastréalo: for + range en Python',
      code: ['total = 1', 'for i in range(3):', '    total = total + i * 3', 'print(total)'],
      steps: [
        {
          l: 0,
          v: { total:1, i:'–' },
          n: 'total empieza en 1, no en 0: comprueba siempre el valor inicial.'
        },
        {
          l: 1,
          v: { total:1, i:0 },
          n: 'range(3) da 0, 1, 2. Empieza en 0 y nunca llega a 3.'
        },
        {
          l: 2,
          v: { total:1, i:0 },
          n: '1 + 0 * 3 = 1. La multiplicación va antes que la suma.'
        },
        {
          l: 2,
          v: { total:4, i:1 },
          n: '1 + 1 * 3 = 4.'
        },
        {
          l: 2,
          v: { total:10, i:2 },
          n: '4 + 2 * 3 = 10. Ese era el último valor que produce range(3).'
        },
        {
          l: 3,
          v: { total:10, i:2 },
          n: 'El print no tiene sangría, así que se ejecuta una vez, después del bucle. Resultado: 10.'
        }
      ]
    },
    pyreturn: {
      title: 'Rastréalo: dónde está el return lo cambia todo',
      code: ['def count_evens(numbers):', '    count = 0', '    for n in numbers:', '        if n % 2 == 0:', '            count += 1', '        return count', '', 'count_evens([2, 4, 6])'],
      steps: [
        {
          l: 7,
          v: { n:'–', count:'–', returned:'–' },
          n: 'Llamamos a la función con [2, 4, 6]. La respuesta esperada es 3.'
        },
        {
          l: 1,
          v: { n:'–', count:0, returned:'–' },
          n: 'count empieza en 0.'
        },
        {
          l: 2,
          v: { n:2, count:0, returned:'–' },
          n: 'Primera vuelta del bucle: n = 2.'
        },
        {
          l: 4,
          v: { n:2, count:1, returned:'–' },
          n: '2 % 2 == 0, así que count pasa a 1.'
        },
        {
          l: 5,
          v: { n:2, count:1, returned:1 },
          n: 'return tiene sangría DENTRO del bucle for. Se ejecuta en la primera vuelta y sale de la función: resultado 1. El 4 y el 6 nunca se revisan.'
        },
        {
          l: 5,
          v: { n:2, count:1, returned:1 },
          n: 'Corrección: mueve return count cuatro espacios atrás, al mismo nivel que for. Así se ejecuta una vez, después de contar todos los números.'
        }
      ]
    }
  }
};
