/* ============================================================
   EM course training · Minecraft CraftForge (Beginner + Intermediate) [2226 · 2227] · ENGLISH (base version)
   For another language: copy this file as content-xx.js and change lang.
   Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names, commands and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by region (see COURSE.code and the 'bo' section).
   ============================================================ */
window.COURSE = { lang: 'en' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'EM course training',
  footer: 'kodland · New Educational Model · Course training',
  devLink: '🛠 Developer',
  logoSub: 'New Educational Model',
  navHome: '← Home',
  navBackModule: '← Back to the module',
  moduleN: 'Module {n}',
  badgeStart: 'Start →',
  badgeLocked: '🔒 Complete Module {n}',
  badgeDone: '✓ Completed · {score}%',
  progLabel: 'modules complete',
  progAllDone: 'Modules completed 🎉',
  eyebrow: '{course} · Module {n} of {total}',
  ctaTitle: 'Module check',
  ctaText: '{n} short questions. Score 70% or more to pass.',
  lockSim: '🔒 Complete the simulation above to unlock the check.',
  startCheck: 'Start the check →',
  retake: '🔁 Retake the check',
  qmeta: '{e} Module {n} check · Question {i} of {total}',
  fbRight: '✅ <b>Correct!</b> ',
  fbWrong: '❌ <b>Not quite.</b> ',
  nextQuestion: 'Next question →',
  seeResult: 'See my result →',
  passedTitle: 'You passed!',
  failTitle: 'Almost there',
  scoreLine: 'You answered <b>{score} of {n}</b> correctly.',
  failText: 'You need 70% or more. Review the module and try again — you can retake it as many times as you need.',
  nextUnlocked: '<b>Module {n} · {title}</b> is now unlocked.',
  goModule: 'Go to Module {n} →',
  allDoneText: 'You’ve completed all the modules of this training.',
  seeNext: 'See what’s next →',
  reviewModule: '📖 Review the module',
  homeDoneTitle: 'Modules completed!',
  homeDoneText: 'One last step: the DST test on the LMS training page.',
  homeDoneBtn: 'See what to do next →',
  doneBadge: '✓ Done',
  doneBack: 'Back to the modules',
  lockedTitle: 'Still locked',
  lockedModule: 'Complete Module {n} first.',
  lockedStep: 'Complete the previous step to unlock this one.',
  ok: 'OK',
  linkOpen: 'Open ↗',
  projPlay: '▶ Open ↗',
  simOpen: '▶ Open the simulation here',
  simClose: '✕ Close the simulation',
  simNewTab: 'Open in a new tab ↗',
  simDone: '✅ Simulation completed',
  simTodo: '○ Simulation pending',
  checkTag: 'Tick them off',
  mythTag: 'Myth',
  mythTap: 'Tap to see the reality →',
  mythReality: 'Reality ✓',
  sortWrong: '✗ Not quite.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'mccf';
COURSE.code = '2226';
COURSE.title = 'Minecraft CraftForge';
COURSE.color = '#16A34A';

COURSE.home = {
  kicker: '🎓 Course training · [2226 · 2227]',
  title: 'Minecraft <span class="hl">CraftForge</span>',
  lead: '<b>Beginner</b> — For students aged 8–9: in Minecraft, they go from player to creator — their own hero and home, redstone mechanisms, and an Assistant robot they program in Lua. <b>Intermediate</b> — For students aged 10–12: they write the laws of the Minecraft world with data packs and Python programs that build bridges, towers and whole worlds. Four modules: the course content of Beginner and of Intermediate, the skills you need for the course, and the technical side of the lessons.',
  facts: [
    ['🧑‍💻', '<b>At your own pace.</b> Your progress is saved in this browser. Each module ends with a short check.'],
    ['⚡', '<b>Practice included.</b> A simulation of Kodland Sparks to practise how a Minecraft build is published and the most common problem.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Before you start:</b> complete the <b>core New Educational Model (EM) training</b> first. This course training comes after it and builds on what you saw there: Backoffice and the Teacher Notes, Classroom with Follow Mode, the Kodland Sparks tour and lesson quality.' },
  { kind:'warn', e:'🔄', html:'<b>The lesson content in Backoffice is updated continuously.</b> Lessons are constantly improved with feedback from students and tutors. Don’t worry: whenever something changes, you’ll be notified in advance so you can prepare the lesson.' }
];

/* ---------------- Modules ----------------
   Beginner course content → Intermediate course content → Skills for the course → technical side (+ final survey, added by shared/final-survey.js).
   The Skills module is drawn by assets/skills.js from COURSE.skills (end of this file). */
COURSE.modules = [
  { id:'beg', n:1, e:'⛏️', color:'#16A34A', title:'The course content · Beginner',
    desc:'The general course details, what the student achieves, and the first lesson of Module 1.',
    obj:'Get ready to teach the first lesson of Minecraft CraftForge Beginner. In it, students aged 8–9 create their own skin, publish it in Kodland Sparks, enter the course world wearing it and start building their own house.',
    offer:[['🧱','Know the general course details and what the student achieves.'],['📖','Know what happens in the first lesson.'],['⚡','Understand how Sparks AI is used.'],['📘','Review the first lesson and its Teacher Notes in Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'The course', blocks:[
        { t:'meta', items:[['🧒','Age','8–9 years'],['⏱️','Lesson','60 min'],['📚','Programme','40 lessons · 10 modules'],['🌙','Language','Lua']] },
        { t:'trio', items:[
          ['🎬','The result first','Every lesson opens by showing the finished result and saying what students will learn. Then you show the path on your screen and guide them one step at a time.'],
          ['🛠️','From player to creator','In a game, someone else made the rules. Here the student builds, programs a robot and makes mechanisms — and shows the result to others.'],
          ['🔍','Mistakes are part of the process','When something doesn’t work: <i>What do I see? Why is that? What will I try? Did it work?</i> Some lessons include a planned mistake on your screen so students find the cause themselves.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Students publish their work in <b>Kodland Sparks</b>, their portfolio, starting from Lesson 1. <b>Sparks AI</b> suggests ideas and feedback, but the student decides what to take. It is built into the cards, so students don’t need to open Sparks separately; usually they send one request per task.' }
      ]},
      { id:'goals', e:'🎓', title:'What the student achieves', blocks:[
        { t:'p', html:'By the end of the course, the student will reach these achievements:' },
        { t:'cards', cols:2, items:[
          ['🧱','Creates projects','More than nine projects in their Kodland Sparks portfolio, plus a graduation project: their own land, where builds, mechanisms and programs work together.'],
          ['🤖','Programs a robot in Lua','Commands, arguments, variables, loops, conditions and their own functions. The robot builds, digs, avoids obstacles and completes missions — and the student learns to break a big task into steps.'],
          ['⚡','Builds mechanisms and logic','Redstone is Minecraft’s “electricity”: levers, wires, lamps, doors, pistons and traps. The student learns “if–then” logic and sees the result straight away.'],
          ['🏰','Creates builds and games','Builds with attention to shape, colour and light, and a mini-game with its own rules that classmates play.'],
          ['💬','Talks about their work with confidence','Explains how everything works at the end of every lesson and presents the graduation project to the group.'],
          ['🧠','Skills for life','Creativity, teamwork (playing each other’s games and giving feedback), communication, and critical thinking: finding bugs and using hints from Sparks AI wisely.']
        ]}
      ]},
      { id:'les', e:'📖', title:'The first lesson', blocks:[
        { t:'p', html:'Module 1, <b>“First Fire. My World and First Commands”</b>, ends with the project <b>“My hero and my home”</b>. Open the first lesson and read what you need to know, the key result, your role and the points to watch out for.' },
        { t:'lessons', key:'beg', items:[
          { tab:'M1L1', e:'🔥', h:'Lesson 1 — First Fire', p:'The first lesson of the course (7 cards and homework). Students launch the launcher, meet the group, draw and publish their own skin in Sparks, wear it to enter the world, and start building their own house on an island.',
            acc:[['📚','What you need to know','<ul><li>The route: connection and launcher → what’s ahead → skin in Sparks while the launcher downloads the game → wear the skin, enter the world and teleport to the island → build your house → project showcase → wrap-up and homework.</li><li>The <b>skin studio</b> opens right inside the lesson card (button <b>Expand</b> for full screen). The student does not need to leave the lesson to go to Sparks.</li><li>In the launcher: <b>Create → Skins → own skin → Wear</b>, then <b>Play</b> with the world code, and <b>F5</b> to see yourself.</li><li>Students build in <b>creative mode</b>: walls, an entrance and a sign with their nickname. The roof is homework.</li></ul>'],
                 ['🎯','Key result','<ul><li>🏁 The skin is <b>published in Sparks and its link is in the task</b>. Everyone reaches it by about minute 29; this card is never shortened.</li><li>Each student enters the world wearing their own skin and stands on the island.</li><li>The house has walls, an entrance and a sign with the nickname.</li></ul>'],
                 ['🧑‍🏫','Your role','<ul><li>Get to know the group: talk about yourself, give everyone the floor and use names all lesson.</li><li>Say the lesson goal out loud: “Today everyone will create their own skin, and the world will recognise them.”</li><li>Ask: “How is creating different from just playing?” — in a game someone else made the rules; here you create and show others.</li><li><b>Planned mistake, only on your screen:</b> enter the world without pressing <b>Wear</b> → you look like everyone else. Ask why, then fix it. Students do it right straight away.</li></ul>'],
                 ['📌','Watch out','<ul><li>In L1 someone’s launcher almost certainly won’t start. The skin is drawn in the browser, so the student keeps working while you fix the launcher during independent work.</li><li><b>Esc</b> doesn’t work inside the full-screen studio: use the <b>Collapse</b> button at the top.</li><li>Drawing can go on forever: “Your own, not perfect. You can finish it at home.”</li><li>Check in Backoffice that the links really arrived, not only that they were shown on screen.</li></ul>'],
                 ['⚙️','Technical aspects','<ul><li>A day before, send the launcher links to the group chat and ask students to install it in advance.</li><li>Go through the whole path yourself: skin in Sparks → publish → Skins → Wear → enter the world with the code → teleport to the island.</li><li>World code: <b>Welcome to CraftForge</b> (Play tab). The teleport command is in the Teacher Notes and on the card.</li><li>Homework: finish the house, take a screenshot (<b>Win + Print Screen</b> on Windows, <b>Cmd + Shift + 4</b> on a Mac), attach it to <b>Sparks AI</b>, built right into the homework card, and send one request. Then submit the screenshot with one sentence about what they finished and what Sparks suggested.</li></ul>']] },
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'The first Teacher Note of each lesson has the full plan: summary, key result, the timing of each card, your role and the risks. Lesson 1 also has a preparation video. <b>Read all the Teacher Notes before the lesson.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Review the first lesson in Backoffice', blocks:[
        { t:'p', html:'Before the check, open the course in Backoffice and read through the first lesson at your own pace — the activity cards and the Teacher Notes are all there. Nothing is timed.' },
        { t:'link', href:'https://bo.kodland.org/courses/2226', e:'📘', title:'Open the course in Backoffice', small:'[2226] Minecraft CraftForge Beginner — the lessons and their Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'The lesson content in Backoffice will keep being updated with feedback from students and tutors. Whenever something changes, you’ll be notified in advance so you can prepare the lesson.' }
      ]}
    ]},

  { id:'int', n:2, e:'📜', color:'#0EA5E9', title:'The course content · Intermediate',
    desc:'The general course details, what the student achieves, and the first lesson of Module 1.',
    obj:'Get ready to teach the first lesson of Minecraft CraftForge Intermediate. In it, students aged 10–12 create their first law for the Minecraft world — a recipe in a data pack — test it in the game and publish it in Kodland Sparks.',
    offer:[['🧱','Know the general course details and what the student achieves.'],['📖','Know what happens in the first lesson.'],['📦','Understand what a data pack is and how students work with it.'],['📘','Review the first lesson and its Teacher Notes in Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'The course', blocks:[
        { t:'meta', items:[['🧒','Age','10–12 years'],['⏱️','Lesson','90 min'],['📚','Programme','40 lessons · 10 modules'],['🐍','Language','Python']] },
        { t:'trio', items:[
          ['🎬','The result first','Every lesson opens by showing the finished result and saying the goal out loud. Then you show the whole path on your screen and guide students one step at a time.'],
          ['📜','From player to creator','Usually a player follows the rules of the world. Here the student writes them: recipes, drops, commands, and then Python programs that build.'],
          ['🔍','Mistakes are part of the process','When the world doesn’t respond: <i>What do I see? Why is that? What will I try? Did it work?</i> Lessons include planned checks so students find the cause themselves.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Students publish their work in <b>Kodland Sparks</b>, their portfolio, in every lesson. <b>Sparks AI</b> suggests ideas and test scenarios, but the student decides what to take.' }
      ]},
      { id:'goals', e:'🎓', title:'What the student achieves', blocks:[
        { t:'p', html:'By the end of the course, the student will reach these achievements:' },
        { t:'cards', cols:2, items:[
          ['🧱','Creates projects','More than nine projects in their Kodland Sparks portfolio, plus an original graduation project.'],
          ['🐍','Python that builds','Writes Python programs that make bridges, towers and patterns appear in the game world. Commands, arguments, variables, data types, loops, conditions and functions become everyday tools.'],
          ['📜','The rules of the world','With data packs, sets their own laws for Minecraft: recipes, custom commands, timers, events and scoring.'],
          ['🌍','Generators and games','Writes algorithms that create whole chunks of the world, and builds mini-games for others to play.'],
          ['🚀','Takes an idea to Demo Day','Carries a project from concept to a presentation in front of the group, and explains how the code works.'],
          ['🧠','Skills for life','Creativity, teamwork (testing each other’s projects), communication, and critical thinking: finding bugs and evaluating Sparks AI answers instead of copying them.']
        ]}
      ]},
      { id:'les', e:'📖', title:'The first lesson', blocks:[
        { t:'p', html:'Module 1, <b>“Code of the World. First Programs and World Laws”</b>, ends with the project <b>“Code Monument”</b>. The first lesson is about <b>world laws in a data pack</b>. Open it and read what you need to know, the key result, your role and the points to watch out for.' },
        { t:'lessons', key:'int', items:[
          { tab:'M1L1', e:'📜', h:'Lesson 1 — First Trace in the World’s Code', p:'The first lesson of the course (8 cards and homework). Students launch the launcher, meet the group, try the law trainer, enter the world through the Nether, create their first law — a recipe — in a data pack, test it, and publish it in Sparks. Then they plan a base with Sparks AI and build it.',
            acc:[['📚','What you need to know','<ul><li>A <b>data pack</b> is a set of laws for the world. Laws are created outside the world, in the launcher studio, and the world runs them every time you enter.</li><li>Kinds of laws: <b>recipe</b>, <b>drop</b>, <b>command</b> on entering, <b>achievement</b>. Today: a recipe.</li><li>Path: <b>Esc</b> and exit the world saving → <b>Create → Data packs → Create data pack → Empty</b> → <b>Add → Recipe</b> → crafting table, items, result → <b>Save</b>.</li><li>The world code is entered on the <b>Play</b> tab. Students build in creative mode.</li></ul>'],
                 ['🎯','Key result','<ul><li>Everyone has saved a data pack with their own recipe by about 00:45.</li><li>🏁 The data pack is <b>published in Sparks and its link is in the task</b> (card “Sign the Law”, by about 01:00). This card is never shortened.</li><li>The student gave the item its own name, and crafted it on a crafting table in the world.</li></ul>'],
                 ['🧑‍🏫','Your role','<ul><li>Get to know the group while the game downloads; use names all lesson.</li><li>Say the goal out loud: “Today everyone will create their own law for Minecraft, test it in the game and publish it in the portfolio.”</li><li>Don’t dictate recipes: ideas should be different — that’s what makes the project personal. Ask: “Why this item? Who will need it?”</li><li><b>Planned check:</b> remove one item from the crafting table → the reward disappears. Ask why, then use the four questions. Praise the student who finds the cause, not only the one who succeeds first time.</li></ul>'],
                 ['📌','Watch out','<ul><li>The data pack doesn’t save → one of the three parts of the form is empty.</li><li>The law doesn’t work → it was saved with the world open: exit and enter again.</li><li>The recipe doesn’t craft → items not in the same layout as in the form, or crafted in the inventory instead of on a crafting table.</li><li>The link doesn’t open → “Who can see it?” was not <b>Everyone</b>: publish again.</li></ul>'],
                 ['⚙️','Technical aspects','<ul><li>A day before, send the launcher links to the group chat.</li><li>Go through the whole path yourself: world code → shore → exit saving → data pack with a recipe → back into the world → crafting table → reward → publish in Sparks.</li><li>World code: <b>Welcome to KodlandCraft</b>.</li><li>Homework: add one more law (change the recipe, a new recipe, or a command/drop), test it, publish the update and send the link.</li></ul>']] },
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'The first Teacher Note of each lesson has the full plan: summary, key result, the timing of each card, your role and the risks. Lesson 1 also has a preparation video. <b>Read all the Teacher Notes before the lesson.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Review the first lesson in Backoffice', blocks:[
        { t:'p', html:'Before the check, open the course in Backoffice and read through the first lesson at your own pace — the activity cards and the Teacher Notes are all there. Nothing is timed.' },
        { t:'link', href:'https://bo.kodland.org/courses/2227', e:'📘', title:'Open the course in Backoffice', small:'[2227] Minecraft CraftForge Intermediate — the lessons and their Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'The lesson content in Backoffice will keep being updated with feedback from students and tutors. Whenever something changes, you’ll be notified in advance so you can prepare the lesson.' }
      ]}
    ]},

  {
    id: 'skills',
    n: 3,
    e: '🧩',
    color: '#8B5CF6',
    title: 'Skills for the course',
    desc: 'Immersion in Minecraft · Programming logic · Programming practice in Python · Data packs: the laws of the world',
    obj: 'The skills a tutor needs in this course, in four blocks: the Minecraft world, programming logic, Python practice and data packs. Each block ends with a short practice check — you need 70% to unlock the next one.',
    offer: [
      ['🌍', 'Immersion in Minecraft'],
      ['🧠', 'Programming logic'],
      ['🐍', 'Programming practice in Python'],
      ['📜', 'Data packs: the laws of the world']
    ],
    sections: [
      {
        id: 'skx',
        e: '🧩',
        title: 'Skills for the course',
        blocks: [
          { t:'skills' }
        ]
      }
    ]
  },

  { id:'tech', n:4, e:'⚙️', color:'#F03D9E', title:'The technical side of the lessons',
    desc:'The Kodland Launcher, a strong start, publishing in Sparks and the most common problems.',
    obj:'Learn what makes a Minecraft CraftForge lesson work technically: the Kodland Launcher, the launcher check before the content, the last minutes for publishing and showing work, where students find the link to their project, and the fixes for the most common problems.',
    needs:['mcPublish','mcPublishDp'],
    offer:[['🟩','Download, install and sign in to the Kodland Launcher.'],['🚀','Run the launcher check before the content, and start with the result.'],['📤','Make sure every student publishes in Sparks and sends the link.'],['🛠️','Solve the most common launcher and Minecraft problems.']],
    sections:[
      { id:'focus', e:'🎯', title:'The 3 points that make a lesson work', blocks:[
        { t:'p', html:'These are the focus areas set by the product team for the Minecraft courses. Open each one:' },
        { t:'acc', items:[
          ['🎬','Show the result first — and why creating is different from playing','<p>In the first minutes, <b>show the finished result</b> and say what students will learn today.</p><ul><li>Use the briefing card: “Look what you’ll have in an hour: your own crafter and your own house on the island.”</li><li>Explain how building a project <b>differs from just playing</b>: in a game, someone else made the rules; here the student creates and shows it to others.</li><li>Ask one or two students: “How do you think creating is different from just playing?”</li></ul>'],
          ['🟩','The login and launcher check comes before the content','<p>Run the connection and launcher check <b>before</b> the content part, so the game downloads while you get to know the group.</p><ul><li>Connection: one minute — camera, microphone, “Hello!”.</li><li>Launcher: 2–3 minutes — send the links, show the sign-in on your screen, ask for a “+” in the chat when the green bar appears.</li><li>Don’t wait for the download to finish, and don’t hold the group for one or two “−”: come back to them during independent work.</li><li>From Lesson 2 on: “Open the launcher and start your world — let it load while we talk.”</li></ul>'],
          ['⏱️','Protect the last 7–10 minutes','<p>The last <b>7–10 minutes</b> are for publishing, showing work and feedback — and they are not given away to building.</p><ul><li>Use hard stops: two-minute warning, then “Stop, hands off the keyboard. Showcase time!”, and name the first student straight away.</li><li>3 participants show their work; the group gives specific feedback: name, what worked, one tip.</li><li>Finish with the wrap-up, reflection, next lesson and homework — these are never shortened.</li></ul>']
        ]}
      ]},
      { id:'launcher', e:'🟩', title:'The Kodland Launcher', blocks:[
        { t:'p', html:'Students open Minecraft through the <b>Kodland Launcher</b>: it downloads the game, opens the course world, and is where they create skins and wear them. You need it installed and ready on your computer before your first lesson.' },
        { t:'callout', kind:'warn', e:'🔑', html:'<b>Your credentials:</b> you don’t need any credentials to download the launcher. To sign in, you as a tutor need your <b>Kodland Sparks credentials</b>, provided by the <b>Operations or Teaching department</b>. Students sign in with the same account they use on the Kodland platform — they don’t need a new one.' },
        { t:'link', href:'https://portfolio.kodland.org/launcher/download#guide', e:'⬇️', title:'Download page and official guide', small:'portfolio.kodland.org/launcher/download — Windows and Mac' },
        { t:'cards', cols:2, items:[
          ['🪟','Windows 10 / 11','<ol><li>Download the installer.</li><li>Open the downloaded file.</li><li>On the blue warning screen, click <b>More info → Run anyway</b>, then follow the installer.</li></ol>'],
          ['🍎','macOS 13 or later','<ol><li>Download the file for your processor (Apple → <b>About This Mac</b>: M1–M4 = Apple Silicon; otherwise, Intel).</li><li>Open the downloaded file and drag <b>Kodland Launcher</b> into <b>Applications</b>. Don’t open it from that window.</li><li>Open <b>Terminal</b>, paste the line below and press Return. No output is normal.</li><li>Open the launcher from <b>Applications</b>.</li></ol>']
        ]},
        { t:'p', html:'<code>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</code>' },
        { t:'steps', items:[
          ['Sign in','Click <b>Sign in</b>. A browser page opens: click <b>Sign in with Kodland</b> and use your Kodland Sparks credentials (students use their Kodland platform account). If the browser doesn’t open, use the link under the button to get a short code (valid for five minutes).'],
          ['Download the game','The launcher downloads the game in several steps. Leave it running.'],
          ['Play','When it says all done, press <b>Play</b>. The first launch can take up to a minute. The world code goes on the <b>Play</b> tab.'],
          ['Updates','If the launcher doesn’t update, install the latest version from the download page over the old one. Worlds and skins stay in place.']
        ]},
        { t:'acc', open:false, items:[
          ['⬇️','Direct download links (the ones on the lesson card)','<ul><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-win-x64-setup.exe" target="_blank" rel="noopener">Windows</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-arm64.dmg" target="_blank" rel="noopener">Mac — Apple Silicon (M1–M4)</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-x64.dmg" target="_blank" rel="noopener">Mac — Intel</a></li></ul>']
        ]}
      ]},
      { id:'l1', e:'🧯', title:'When a student’s launcher doesn’t work', blocks:[
        { t:'p', html:'In Lesson 1, someone’s launcher will almost certainly not start. That’s fine: <b>first give the others a task</b>, then connect with the student. Ask them to share their screen and guide them by voice: “What do you see now? Click this button.” If it isn’t solved in a couple of minutes: “Follow my screen for now, I’ll be back soon.”' },
        { t:'acc', open:false, items:[
          ['📥','The file doesn’t download','Send the link from the card to the chat again and check that the student chose the file for their system.'],
          ['🍎','The Mac doesn’t open the launcher','Run the Terminal line from the first card and open the launcher again from <b>Applications</b>.'],
          ['🪟','Windows asks whether to open the file','<b>More info → Run anyway</b>.'],
          ['🔑','The student can’t sign in','The same Kodland login as for the lessons — no new account. The sign-in window opens in the browser and often hides behind other windows.'],
          ['⏳','The game loads for a long time or the download stops','The first download is long, that’s normal. If the bar stops: check the internet, close the launcher and open it again — the download continues.'],
          ['🖌️','The launcher never worked','In Lesson 1 the student still draws and publishes the skin in Sparks (in the browser), so they get the main result. In the world they follow your screen. After the lesson, help them with the launch.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'If several students have the same error, show the solution to everyone once.' }
      ]},
      { id:'req', e:'💻', title:'Computer requirements', blocks:[
        { t:'p', html:'This is what a student needs for Minecraft CraftForge. It’s useful when a student has problems installing or running the game:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Computer and system','Desktop or laptop with <b>Windows 10/11 (64-bit)</b> or <b>macOS 13 or later</b>. Mac with Apple Silicon (M1 or newer) or Intel — the lesson card has a download for each.'],
          ['🧠','Memory and processor','<b>8 GB of RAM</b> with a dedicated graphics card, or <b>12 GB</b> with integrated graphics. A <b>4-core</b> processor.'],
          ['🎮','Graphics and disk','A graphics card with <b>Vulkan 1.3</b> support and <b>2 GB</b> of video memory. <b>5 GB</b> of free disk space.'],
          ['🎧','Connection and equipment','A stable internet connection that can handle video calls. A two-button mouse, keyboard, headset with a microphone, and camera.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Publishing in Kodland Sparks (Beginner)', blocks:[
        { t:'p', html:'Publishing is the main result of many lessons: the student publishes the work in Sparks and pastes the link into the lesson card. There are two ways in Module 1:' },
        { t:'cards', cols:2, items:[
          ['🎨','The skin (Lesson 1)','In Lesson 1 the skin studio is inside the card: <b>Publish</b> → give the skin a name → <b>Publish</b> again. A skin file can also be published from Sparks: <b>Publish project → Minecraft skin</b> → name → <b>Model</b> (Steve or Alex) → <b>Skin file</b> (64×64 PNG) → <b>Publish</b>.'],
          ['🖼️','A build','Screenshot of the build (F5, F1) → Sparks → <b>Publish project</b> → <b>Image</b> → name → <b>Drawing</b>: upload the screenshot → <b>Publish</b>.']
        ]},
        { t:'steps', items:[
          ['Where the link is','The link is the address of the project page. The student goes to <b>My projects</b> in Sparks, opens the <b>published project</b> and copies the link from the <b>browser’s address bar</b>: <code>portfolio.kodland.org/nickname/…</code>.'],
          ['Paste it in the lesson card','That link is pasted into the lesson card on the Kodland platform (for example, “Link to my Skin in Kodland Sparks”).'],
          ['Choose the visibility','<b>Public</b> appears in the feed and on the portfolio. <b>Friends only</b> is for friends and teachers. <b>Only me</b> makes the project private — nobody else can open the link, not even you.'],
          ['Two different steps','Publishing in Sparks and sending the link on the Kodland platform are <b>two different steps</b>. Check in Backoffice that the links really arrived.']
        ]},
        { t:'sim', flag:'mcPublish', src:'minecraft-publish/Minecraft_Publish.html?flow=image', e:'⚡', badge:'Simulation', title:'Publish a skin and a build in Kodland Sparks', text:'A replica of Kodland Sparks and the lesson card: as a student, you publish a skin, find its link in My projects, paste it into the card on the platform, publish a build screenshot as an Image project, and fix a link that doesn’t open. It takes about 5 minutes. The module check unlocks when you finish.' }
      ]},
      { id:'publishdp', e:'📤', title:'Publishing the data pack in Kodland Sparks (Intermediate)', blocks:[
        { t:'p', html:'Sparks is the students’ portfolio: all the course projects are kept there, and <b>Sparks AI</b> lives there. Students come back to it in every lesson to publish and ask for hints. The data pack is published <b>from the launcher editor</b>:' },
        { t:'steps', items:[
          ['Publish, next to Save','In the launcher, <b>Create → Data packs → Edit</b> on the data pack, then <b>Publish</b>, next to the purple <b>Save</b> button.'],
          ['Name and “Who can see it?” → Everyone','In “Publish to your profile”, write the name and choose <b>Everyone</b>: only then does the link open for others without logging in to the student’s account.'],
          ['Copy link','When “Published! It is on your profile.” appears, click <b>Copy link</b>, then <b>Done</b>, and paste the link into the lesson card on the platform (“Link to my Law in Kodland Sparks”).'],
          ['Lost the link?','<b>Open on Sparks</b> (in the dialog or at the top of the editor) opens the project page on the student’s profile: the link is the address in the browser bar.'],
          ['Two different steps','Publishing in Sparks and sending the link on the Kodland platform are <b>two different steps</b>. Check in Backoffice that the links really arrived.'],
          ['Each update is published again','When the student adds a law, they save, test, and publish the update again.']
        ]},
        { t:'sim', flag:'mcPublishDp', src:'minecraft-publish/Minecraft_Publish.html?flow=datapack&sim=mcPublishDp', e:'⚡', badge:'Simulation', title:'Publish a data pack in Kodland Sparks', text:'A replica of the Kodland Launcher and the lesson card: as a student, you publish a data pack, copy its link, paste it into the card on the platform, fix a link that doesn’t open and find a link that wasn’t copied. It takes about 4 minutes. The module check unlocks when you finish.' }
      ]},
      { id:'trouble', e:'🛠️', title:'When something goes wrong', blocks:[
        { t:'acc', open:false, items:[
          ['🎨','The skin isn’t in “Skins”','Check that the skin is published in Sparks and that the launcher uses the same account. Close and reopen the <b>Skins</b> section.'],
          ['👕','The student pressed “Wear” while the game was open','The launcher says the skin will appear when the game starts again: leave the world and join again with <b>Play</b> — that starts the game again.'],
          ['📍','The teleport didn’t work','Ask the student to share the screen: usually the command isn’t complete or the minus before the last number is missing.'],
          ['⛶','The student can’t leave the full-screen studio','Click <b>Collapse</b> at the top of the studio — <b>Esc</b> doesn’t work inside it.'],
          ['🔒','The student’s link doesn’t open','The project was probably saved as <b>Only me</b> (it shows the <b>Private project</b> tag). Ask the student: <b>My projects → open the project → Edit → Public → Publish</b>. The link stays the same.'],
          ['🖼️','The student can’t find the screenshot','Students take it with <b>Win + Print Screen</b> on Windows (saved in <b>Pictures → Screenshots</b>) and <b>Cmd + Shift + 4</b> on a Mac (saved on the desktop). If it can’t be found now, the student attaches it later at home.'],
          ['💾','The data pack doesn’t save','Check that all three parts of the form are filled in: where the item is made, what goes in, and what comes out.'],
          ['🔁','The law doesn’t work after an edit','Click <b>Save</b>, exit the world and enter it again — laws are applied when you enter.'],
          ['🧩','The recipe doesn’t craft','The items aren’t in the same layout as in the form, or the student is crafting in the inventory instead of on a crafting table.'],
          ['🔗','The student closed the window without copying the link','Click <b>Open on Sparks</b> at the top of the data pack editor: the project page opens, and the link is the address in the browser bar.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Technical checklist for every lesson', blocks:[
        { t:'check', title:'✅ My technical checklist', groups:[
          { h:'☑️ Before the lesson', items:['I read all the Teacher Notes of the lesson and, for Lesson 1, watched the preparation video.','My launcher is installed and signed in, and I went through the lesson path myself.','Before Lesson 1, I sent the launcher links to the group chat.'] },
          { h:'🎬 During the lesson', items:['I ran the connection and launcher check before the content.','I showed the finished result and the lesson goal in the first minutes.'] },
          { h:'📤 At the end of the lesson', items:['I protected the last 7–10 minutes for publishing, showing work and feedback.','Everyone sent the link to the published project in the lesson card.','I opened some links to check that they work.'] }
        ]}
      ]},
      { id:'videos', e:'🎬', title:'Example lessons with an excellent autoQA', blocks:[
        { t:'p', html:'Watch how a lesson with an excellent autoQA looks: the class dynamics, the structure and the way the tutor leads the group.' },
        { t:'videos', items:[
  ['Module 1 · Lesson 1', '11QZ6vSQ7UdQBgA08PJSRZ52IJl6Kuovr'],
  ['Module 1 · Lesson 2', '19XhEcyny9ZEdeXoeFravwQ2G8n8xq7Ik'],
  ['Module 1 · Lesson 3', '1ggXmYlok7-T3DWgG4LYJgoCnJ9GFOxvX']
] },
        { t:'callout', kind:'warn', e:'🔄', html:'<b>Note:</b> the content of these lessons may be different from what you will see in Backoffice, because the lessons keep being updated. The class dynamics, the structure and the quality must stay the same — they are good examples to take inspiration from for your own lessons.' }
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ----------------
   The Skills module has no separate check: its four blocks end with their own practice checks (COURSE.skills). */
COURSE.quiz = {
  beg:[
    { q:'Who is Minecraft CraftForge Beginner for, and how long is each lesson?',
      o:['Students aged 8–9, with 60-minute group lessons.','Students aged 10–12, with 90-minute lessons.','Students aged 13–17, with 90-minute lessons.'],
      a:0, e:'Beginner is for students aged 8–9: 40 lessons of 60 minutes in a group.' },
    { q:'In which programming language do students program the Assistant robot?',
      o:['Python.','Scratch blocks.','Lua.'],
      a:2, e:'The Assistant robot is programmed in Lua: commands, arguments, variables, loops, conditions and functions.' },
    { q:'How does a lesson start?',
      o:['With theory about redstone before anyone enters the world.','By showing the finished result, saying the goal and explaining how creating is different from just playing.','Students start building straight away without seeing an example.'],
      a:1, e:'The result first: students see where they are going and why creating is different from playing.' },
    { q:'What does the student leave the course with?',
      o:['A written final exam.','More than nine projects in their Kodland Sparks portfolio and a graduation project — their own land, presented to the group.','Only the house from Lesson 1.'],
      a:1, e:'Nine+ projects in the portfolio and a graduation project where builds, mechanisms and programs work together.' },
    { q:'What is the role of Sparks AI in the lessons?',
      o:['It builds the project for the student.','It suggests ideas and feedback; the student decides what to take.','It grades the lesson instead of the tutor.'],
      a:1, e:'Sparks suggests, the student decides — usually one request per lesson.' }
  ],
  int:[
    { q:'Who is Minecraft CraftForge Intermediate for, and how long is each lesson?',
      o:['Students aged 8–9, with 60-minute lessons.','Students aged 10–12, with 90-minute group lessons.','Students aged 13–17, with 60-minute lessons.'],
      a:1, e:'Intermediate is for students aged 10–12: 40 lessons of 90 minutes in a group.' },
    { q:'Which programming language do students use in the course?',
      o:['Python.','Lua.','JavaScript.'],
      a:0, e:'Students write Python programs that build in the Minecraft world.' },
    { q:'What is a data pack in this course?',
      o:['A file with screenshots of the student’s builds.','A set of laws for the world (recipes, drops, commands…) that Minecraft runs every time you enter.','A pack of ready-made worlds to download.'],
      a:1, e:'A data pack is a set of laws: the world runs them every time the student enters.' },
    { q:'What does the student leave the course with?',
      o:['A written final exam.','More than nine projects in their Kodland Sparks portfolio and an original graduation project presented on Demo Day.','Only the data pack from Lesson 1.'],
      a:1, e:'Nine+ projects in the portfolio and an original project, taken from idea to Demo Day.' },
    { q:'How should students use Sparks AI?',
      o:['Copy its answers as they are.','Evaluate its suggestions and decide what to take.','Never use it.'],
      a:1, e:'Sparks suggests ideas and test scenarios; the student evaluates them instead of copying.' }
  ],
  skills:[],
  tech:[
    { q:'When do you run the connection and launcher check?',
      o:['At the start of the lesson, before the content, so the game downloads while you get to know the group.','In the middle of the lesson, when students need Minecraft.','At the end, so it doesn’t take time from the lesson.'],
      a:0, e:'Before the content: the game downloads while you get to know the group.' },
    { q:'Which credentials do you, as a tutor, use to sign in to the Kodland Launcher?',
      o:['A new account that you create yourself.','The same credentials as Kodland Sparks, provided by the Operations or Teaching department.','A student’s account.'],
      a:1, e:'No credentials are needed to download the launcher. To sign in, you use your Kodland Sparks credentials, provided by the Operations or Teaching department.' },
    { q:'Where does a student find the link to send in the lesson card?',
      o:['In a comment under the project.','In Sparks: My projects → open the published project → copy the address from the browser bar.','In the launcher, on the Play tab.'],
      a:1, e:'The link is the address of the project page: My projects → the published project → the browser bar.' },
    { q:'What are the last 7–10 minutes of the lesson for?',
      o:['Extra building time.','Publishing, showing work and feedback — plus the wrap-up and homework.','Free play.'],
      a:1, e:'Protect the last minutes: publishing, the showcase with feedback, and the wrap-up.' },
    { ctx:'In Lesson 1, one student’s launcher doesn’t start, and the rest of the group is ready.',
      q:'What do you do?',
      o:['Stop the lesson until the launcher works.','Keep the group going — the skin is drawn in Sparks, in the browser — and help the student during independent work.','Tell the student to try again at home and skip the lesson.'],
      a:1, e:'One problem shouldn’t stop the group: the student still draws and publishes the skin, and you fix the launcher during independent work.' },
    { q:'Where does a student get the link to the published data pack?',
      o:['From a comment in the launcher.','In “Publish to your profile”: Copy link (or Open on Sparks and copy the address from the browser bar).','From the Play tab of the launcher.'],
      a:1, e:'Copy link right after publishing; if it was lost, Open on Sparks shows the project page, whose address is the link.' },
    { ctx:'A student published the data pack, but the link doesn’t open for you.',
      q:'What is the most likely cause, and the fix?',
      o:['“Who can see it?” was not set to Everyone: publish again with Everyone.','The data pack is broken: create a new one from scratch.','Links only open the next day.'],
      a:0, e:'Only with Everyone does the link open without logging in. Publishing again with Everyone fixes it.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Last step: Return to the LMS and complete the DST',
  html: `<p>You’re almost done! Return to the LMS training page where you accessed this training. The DST test is available right below the training.</p>
    <p>👉 <b>You must complete and pass the DST test for the training to be considered successfully completed.</b> If you do not complete the DST test, the training will remain incomplete and may expire.</p>
    <p>The minimum passing score is <b>80%</b>.</p>
    <p>Good luck! ❤️</p>`,
  nexts: [
    ['📒', '<b>Before every lesson:</b> read the Teacher Notes in Backoffice and go through the lesson path in the launcher.'],
    ['🟩', '<b>First minutes:</b> connection and launcher check, then the finished result and the goal.'],
    ['🔗', '<b>The link:</b> My projects → the published project → the address in the browser bar.'],
    ['⏱️', '<b>Last 7–10 minutes:</b> publishing, showing work and feedback.']
  ]
};

/* ---------------- Skills for the course ----------------
   Four blocks (Minecraft world, programming logic, Python practice, data packs). Texts come from the proofread
   CraftForge Tutor Training. In each quiz 'c' = number of the correct option (0 = first). Never translate code. */
COURSE.skills = {
  mod: 'skills',
  ui: {
    step_self: 'Step through it yourself',
    prev: 'Back',
    next: 'Next step',
    stepn: 'Step {s} of {n}',
    check_intro: 'Answer every question — you need 70% to unlock the next step. Each question counts on your first answer.',
    correct: 'Correct.',
    notquite: 'Not quite.',
    score: 'Score: {p}% — 70% needed',
    retry: 'Try the check again',
    unlocked: 'You’ve unlocked the next step.',
    review_msg: 'Review the sections above, then try the check again.',
    nextBlock: 'Next block →',
    lockedBlock: '🔒 Pass the previous block to unlock this one.',
    ctaTitle: 'Pass the four blocks',
    ctaText: 'Each block ends with a short practice check: you need 70% in each one. When all four are passed, this module is complete.',
    progress: '{n} of {t} blocks passed',
    ctaDone: 'Module complete: {p}%',
    goNext: 'Go to Module {n} →',
    practice: 'Practice check',
    blockOf: 'Block {n} of {t}',
    passedBlock: 'Block passed: {p}%'
  },
  blocks: [
    {
      id: 'world',
      ic: '🌍',
      slot: 'World',
      title: 'Immersion in Minecraft',
      sections: [
        {
          t: 'Minecraft basics for tutors (hard skills)',
          html: '<div class="card class"><p>Minecraft is a world made of cubes called <strong>blocks</strong>. You can break them, collect them and place them to build anything. Children know this world very well — you need enough to move, build and follow what they do.</p></div><div class="tbl"><table><tbody><tr><th>Key / action</th><th>What it does</th></tr><tr><td><code>W A S D</code></td><td>Walk forward, left, back, right</td></tr><tr><td>Mouse</td><td>Look around</td></tr><tr><td><code>Space</code></td><td>Jump. In Creative mode, press twice to fly; hold to go up</td></tr><tr><td><code>Shift</code></td><td>Sneak: you won’t fall off edges. In flight, go down</td></tr><tr><td>Left click</td><td>Break a block / hit</td></tr><tr><td>Right click</td><td>Place a block / use (open a door, press a button, pull a lever)</td></tr><tr><td><code>1</code>–<code>9</code> or mouse wheel</td><td>Choose an item in the hotbar (the bar at the bottom)</td></tr><tr><td><code>E</code></td><td>Open the inventory</td></tr><tr><td><code>T</code> or <code>/</code></td><td>Open the chat / start typing a command</td></tr><tr><td><code>F3</code></td><td>Show coordinates and technical information</td></tr><tr><td><code>F5</code></td><td>Change the camera view</td></tr><tr><td><code>Esc</code></td><td>Pause menu and settings</td></tr></tbody></table></div><div class="cols"><div class="card class"><h4>Game modes</h4><ul><li><strong>Creative</strong>: unlimited blocks, flying, nothing can hurt you — best for building.</li><li><strong>Survival</strong>: you collect resources, have health and hunger, and monsters attack at night.</li></ul></div><div class="card class"><h4>Words children use</h4><ul><li><strong>Mob</strong>: any creature (a cow, a zombie, a Creeper).</li><li><strong>Spawn</strong>: the place where you appear.</li><li><strong>Biome</strong>: a type of land (desert, forest, snow).</li><li><strong>Skin</strong>: the look of your character. Steve and Alex are the default ones.</li></ul></div></div>'
        },
        {
          t: '1.1 · The culture kids bring with them',
          html: '<div class="card why"><p>Minecraft has its own legends, memes, scary stories and inside jokes, and children know them well. You don\'t need to be an expert player, but you need to be "in the know". The fastest way in is a <strong>"Minecraft Iceberg"</strong> video: hidden facts, myths, cut content and legends, from the well-known at the top to the obscure at the bottom.</p></div><div class="vid"><iframe src="https://www.youtube.com/embed/AChmq4QfbK0" title="Minecraft Iceberg video" loading="lazy" allowfullscreen=""></iframe></div><div class="tbl"><table><tbody><tr><th>Name</th><th>What it is</th></tr><tr><td><strong>Herobrine</strong></td><td>The most famous Minecraft legend: a white-eyed figure who supposedly haunts worlds. He has never been in the game — for years Mojang\'s update notes jokingly listed "Removed Herobrine".</td></tr><tr><td><strong>Entity 303</strong></td><td>Another fan-made horror legend, about a vengeful hacker-like entity. Kids love to ask about it — knowing the name is enough to earn a smile.</td></tr><tr><td><strong>Notch</strong></td><td>Markus Persson, the original creator of Minecraft.</td></tr><tr><td><strong>The Creeper\'s origin</strong></td><td>A well-known story: it began as a failed pig model with the height and length swapped.</td></tr><tr><td><strong>The Far Lands</strong></td><td>A terrain glitch in old Java versions, millions of blocks from spawn, where the world broke into strange walls.</td></tr><tr><td><strong>Steve and Alex</strong></td><td>The default player characters.</td></tr></tbody></table></div><div class="card class"><p><strong>In class:</strong> a quick "Yes, I know who Entity 303 is 😉" builds trust in seconds. Then bring the conversation back to the build.</p></div>'
        },
        {
          t: '1.2 · Coordinates: X, Y and Z',
          html: '<div class="tbl"><table><tbody><tr><th>Axis</th><th>Direction</th><th>Changes when the player…</th></tr><tr><td><strong>X</strong></td><td>East ↔ West</td><td>walks east or west</td></tr><tr><td><strong>Y</strong></td><td>Up ↕ Down (height)</td><td>jumps, climbs, falls, digs down, builds a tower</td></tr><tr><td><strong>Z</strong></td><td>South ↔ North</td><td>walks north or south</td></tr></tbody></table></div><div class="card "><p>X and Z are the position on the ground; <strong>Y is height</strong>. Any vertical movement — even a single jump — changes Y while it lasts. To see coordinates: <code>F3</code> in Java Edition, or turn on "Show coordinates" in the world settings in Bedrock. Teleporting uses the same order: <code>/tp X Y Z</code>.</p></div><div class="card tip"><p><strong>Memory trick:</strong> Y is the one that goes "up" in a graph at school — in Minecraft it is also the one that goes up.</p></div>'
        },
        {
          t: '1.3 · Mobs every tutor should recognise',
          html: '<div class="tbl"><table><tbody><tr><th>Mob</th><th>What to know</th></tr><tr><td><strong>Creeper</strong></td><td>Walks up silently and <strong>hisses when its fuse is lit — it is about to explode</strong> (about 1.5 seconds). Running out of range can cancel the fuse. If lightning strikes near it, it becomes a <strong>Charged Creeper</strong> with a much bigger explosion.</td></tr><tr><td><strong>Zombie / Skeleton</strong></td><td>Spawn in the dark; burn in daylight unless shaded or wearing a helmet. Skeletons shoot arrows from a distance.</td></tr><tr><td><strong>Spider</strong></td><td>Climbs walls — a tree or a pillar does not keep you safe. Neutral in bright light, hostile in darkness.</td></tr><tr><td><strong>Enderman</strong></td><td>Neutral until you look at its face. Then it teleports and attacks.</td></tr><tr><td><strong>Phantom</strong></td><td>Appears in the sky if the player has not slept for three or more in-game days.</td></tr></tbody></table></div>'
        },
        {
          t: '1.4 · Surviving the first night',
          html: '<div class="card "><p>Hostile mobs spawn in <strong>darkness</strong>. On the first night of Survival, with no bed and no gear, the safest plan is simple: <strong>build a small enclosed shelter and light it from the inside</strong>. Walls keep mobs out; light inside stops them spawning next to you. Digging into a hillside and blocking the entrance works well.</p></div><div class="tbl"><table><tbody><tr><th>Tempting idea</th><th>Why it fails</th></tr><tr><td>Holding a torch in your hand</td><td>In the standard game, a torch in your hand does not light the area or stop mobs from spawning around you.</td></tr><tr><td>Waiting on top of a tall tree</td><td>Spiders climb, skeletons shoot from below, and falling off hurts.</td></tr><tr><td>Exploring and dodging mobs</td><td>The dark is exactly where they spawn — more and more of them as the night goes on.</td></tr></tbody></table></div><div class="card tip"><p>A <strong>bed</strong> lets you skip the night and also sets your personal respawn point. You will need that in 1.6.</p></div>'
        },
        {
          t: '1.5 · Tools, tiers and which pickaxe mines what',
          html: '<div class="card "><p>Pickaxes go up in tiers: <strong>Wood → Stone → Iron → Diamond → Netherite</strong>. <strong>Gold is the trap:</strong> it mines very fast, but its tier is as low as wood. If the tier is too low, the block still breaks — but it drops nothing.</p></div><div class="tbl"><table><tbody><tr><th>Pickaxe</th><th>Lowest tier that can mine…</th></tr><tr><td>Wood / Gold</td><td>Stone, coal ore</td></tr><tr><td>Stone</td><td>Iron ore, copper ore, lapis lazuli ore</td></tr><tr><td>Iron</td><td><strong>Diamond ore</strong>, gold ore, redstone ore, emerald ore</td></tr><tr><td>Diamond</td><td>Obsidian, ancient debris</td></tr></tbody></table></div><div class="card class"><p><strong>In class:</strong> "My pickaxe broke the diamond and nothing came out!" is a real pupil question. Now you know the answer: the tier was too low.</p></div>'
        },
        {
          t: '1.6 · Spawn points, beds and compasses',
          html: '<div class="cols"><div class="card "><h4>World spawn</h4><p>The point where every player first appears in a new world. It never moves unless someone changes it with a command.</p></div><div class="card "><h4>Personal respawn point</h4><p>Set by sleeping in a bed (or using a respawn anchor in the Nether). You come back here after dying.</p></div></div><div class="tbl"><table><tbody><tr><th>Item</th><th>Points to</th></tr><tr><td><strong>Ordinary compass</strong></td><td>The <strong>world spawn point</strong> — not the bed, not north. It spins randomly in the Nether and the End.</td></tr><tr><td>Recovery compass</td><td>The place where the player last died.</td></tr><tr><td>Lodestone compass</td><td>The lodestone it was linked to. This is how players make a compass that points to their base.</td></tr></tbody></table></div><div class="card warn"><p><strong>Common confusion:</strong> setting a new bed changes where you <em>respawn</em>, but an ordinary compass keeps pointing to the original world spawn.</p></div>'
        }
      ],
      quiz: [
        {
          p: 'A player digs straight down for 10 blocks. Which coordinate changes?',
          o: ['X', 'Y', 'Z', 'None of them'],
          c: 1,
          f: 'Y is height. Digging down, jumping, climbing or building up all change Y.'
        },
        {
          p: 'Which is the lowest-tier pickaxe that can mine Iron Ore and actually get the ore?',
          o: ['Wooden', 'Stone', 'Golden', 'Any pickaxe works'],
          c: 1,
          f: 'Stone is enough for iron. Gold is fast but has the same low tier as wood.'
        },
        {
          p: 'A Creeper starts hissing right behind a player. What is the best reaction?',
          o: ['Attack it immediately — the hiss means it is weak', 'Stand still so it loses interest', 'Sprint away — the fuse is lit and moving out of range can cancel it', 'Place a torch next to it'],
          c: 2,
          f: 'The hiss means the fuse is lit and it is about to explode. Getting out of range is the move.'
        },
        {
          p: 'Why does a first-night shelter need light on the inside, not only walls?',
          o: ['Light makes the walls stronger', 'Hostile mobs spawn in darkness — light stops them spawning inside with you', 'Torches heal the player', 'Mobs are attracted to light outside'],
          c: 1,
          f: 'Walls keep mobs out; light prevents new mobs from spawning in the dark space with you.'
        },
        {
          p: 'A player wants a compass that always points to their base. What do they need?',
          o: ['Sleep in a bed at the base — the compass will follow', 'Use the compass on a lodestone placed at the base', 'An ordinary compass already points to the last bed', 'A recovery compass'],
          c: 1,
          f: 'An ordinary compass points to the world spawn. Linking it to a lodestone makes it point to that lodestone.'
        },
        {
          p: 'A pupil says: "Herobrine is in my world!" Who is Herobrine?',
          o: ['A boss mob added in the Nether update', 'A fan legend that has never been in the game — Mojang even joked "Removed Herobrine" in update notes', 'The developer who created the Creeper', 'Another name for the Enderman'],
          c: 1,
          f: 'Herobrine is a legend. Knowing the joke helps you connect with pupils in a second.'
        },
        {
          p: 'How does an ordinary Creeper become a Charged Creeper?',
          o: ['By exploding twice', 'When lightning strikes near it', 'When it is in water', 'When a player names it'],
          c: 1,
          f: 'A lightning strike nearby charges it, making its explosion much bigger.'
        }
      ]
    },
    {
      id: 'logic',
      ic: '🧠',
      slot: 'Logic',
      title: 'Programming logic',
      sections: [
        {
          t: '2.1 · Programming logic',
          html: '<div class="card why"><p>Programming is not only about knowing the syntax of a programming language. First and foremost, it is the ability to think sequentially, identify patterns, break a task down into steps and understand why an algorithm works the way it does.</p><p>During the studies, pupils will constantly ask questions, make mistakes, suggest unexpected solutions, and sometimes write code in a completely different way from what was intended. To help them, it is important not simply to know the correct command, but to understand the logic behind the program.</p><p>In this block, you do not need to know a specific programming language. Here we will see how comfortable you are working with algorithms, conditions, loops, and sequences of actions.</p></div><div class="card "><h4>The trace table method</h4><ol><li>Write <strong>every variable</strong> as a column, with its starting value.</li><li>Do <strong>one step at a time</strong>, in the order the rules are written.</li><li>Every condition is checked against the <strong>current</strong> value — the one you just wrote, not the old one.</li><li>Count the repetitions. "Repeat 4 times" means four rows, not three, not five.</li></ol></div><div class="tracer" data-tr="robot"></div>'
        },
        {
          t: '2.2 · Turning rules into conditions',
          html: '<div class="card "><p>Rule questions are easiest when you list <strong>every possible case</strong> and check each one. Example rule set:</p><ul><li>To enter the portal room, a player needs <strong>flint or a fire charge</strong>.</li><li>If they have <strong>both</strong>, they must also be wearing gold armor.</li><li>If they have <strong>only one</strong>, no armor is needed.</li></ul></div><div class="tbl"><table><tbody><tr><th>Flint</th><th>Fire charge</th><th>Gold armor</th><th>Can enter?</th></tr><tr><td>✔</td><td>✘</td><td>—</td><td>Yes (only one item, no extra rule)</td></tr><tr><td>✘</td><td>✔</td><td>—</td><td>Yes</td></tr><tr><td>✔</td><td>✔</td><td>✔</td><td>Yes</td></tr><tr><td>✔</td><td>✔</td><td>✘</td><td><strong>No</strong> — the "both" case adds a requirement</td></tr><tr><td>✘</td><td>✘</td><td>—</td><td><strong>No</strong> — the first rule fails</td></tr></tbody></table></div><div class="card warn"><p><strong>Watch for details that don\'t matter.</strong> If the rules say no extra requirement applies to a player with one item, then whether they have armor, or a wrong password, is irrelevant for them. Questions often add such details to test whether you apply the rules exactly.</p></div>'
        },
        {
          t: '2.3 · Loops with a condition inside',
          html: '<div class="card "><p>When each round has two steps — "change the value, then check a condition" — the check uses the value <strong>after</strong> the change. And once a threshold is crossed, the condition usually stays true in every following round.</p></div><div class="tracer" data-tr="coins"></div><div class="card warn"><h4>The two classic mistakes</h4><ul><li>Checking the condition on the value from <em>before</em> the change.</li><li>Applying the condition only once, as if it were outside the loop.</li></ul></div>'
        },
        {
          t: '2.4 · Counters, flags and stop rules',
          html: '<div class="card "><p>A <strong>counter</strong> counts how many times something happened. A <strong>flag</strong> (on/off, True/False) remembers that something has already happened. A <strong>stop rule</strong> ends the algorithm early. When several rules apply to the same item, apply them in the order written — a flag switched on by one rule can be used by the next rule <strong>in the same step</strong>.</p></div><div class="tracer" data-tr="flag"></div><div class="card tip"><p>If the answer options include "the algorithm will not stop", check it seriously: trace to the very last item before choosing.</p></div>'
        },
        {
          t: '2.5 · Is the algorithm actually correct?',
          html: '<div class="card "><p>To show that an algorithm is wrong, you only need <strong>one counterexample</strong>: an input where it gives the wrong answer. Test the cases people forget: a match that does <em>not</em> involve the first item, the last item, an item compared with itself, all items the same, a list of one.</p></div><div class="card "><h4>Example</h4><p>Task: decide whether all numbers in a list are different. Proposed algorithm: "compare each number only with the next one; if any two are equal, answer No".</p><p>Counterexample: <code>3, 5, 3</code>. The neighbours are 3–5 and 5–3, never equal, so it answers "all different" — wrong. The algorithm never compares numbers that are far apart.</p><p><strong>Fix:</strong> compare <em>every</em> number with <em>every</em> number after it. Two loops: the outer one picks each number in turn, not only the first; the inner one compares it with the rest.</p></div><div class="card class"><p><strong>In class:</strong> when a pupil\'s program "works", ask them for an input that could break it. Finding counterexamples is how programmers think.</p></div>'
        }
      ],
      quiz: [
        {
          p: 'A robot starts on cell 1 and follows this rule 4 times: if the cell number is odd, move 3 forward; if it is even, move 1 back. Where does it end?',
          o: ['4', '5', '6', '7'],
          c: 1,
          f: '1 → 4 → 3 → 6 → 5. Each check uses the cell it just landed on.'
        },
        {
          p: 'Arena rules: a player needs a sword OR a shield. If they have both, they must also be level 5 or higher. With only one, there is no level requirement. Who can NOT enter?',
          o: ['Only a sword, level 1', 'Only a shield, level 3', 'Sword and shield, level 7', 'Sword and shield, level 2'],
          c: 3,
          f: 'Only the "both" case has the extra level rule, and level 2 does not meet it. The level of a one-item player is irrelevant.'
        },
        {
          p: 'The score starts at 1. Repeat 3 times: multiply the score by 2; then, if the result is greater than 5, subtract 3. What is the final score?',
          o: ['2', '5', '8', '13'],
          c: 1,
          f: '1 → 2 (not > 5). 2 → 4 (not > 5). 4 → 8 → 8 − 3 = 5.'
        },
        {
          p: 'Numbers: 3, 8, 5, 10, 1. counter = 0, alarm = off. For each number, in this order: if the number is greater than 4, add 1 to counter; when counter becomes 2, turn the alarm on; if the alarm is on and the number is odd, stop. At which number does it stop?',
          o: ['5', '10', '1', 'It never stops'],
          c: 0,
          f: '3: nothing. 8: counter 1. 5: counter 2 → alarm on → same step, 5 is odd → stop at 5.'
        },
        {
          p: 'To check whether a list is sorted from smallest to largest, someone proposes: "compare every number with the first one; if any is smaller than the first, answer Not sorted." What is the main problem?',
          o: ['It fails for negative numbers', 'It would say "Not sorted" for every list', 'It never compares neighbours after the first, so 1, 5, 3 counts as sorted', 'It only works for lists with an even length'],
          c: 2,
          f: '5 and 3 are both bigger than 1, so the check passes — yet the list is not sorted. One counterexample is enough.'
        }
      ]
    },
    {
      id: 'python',
      ic: '🐍',
      slot: 'Python',
      title: 'Programming practice in Python',
      sections: [
        {
          t: '3.1 · Reading code like the computer',
          html: '<div class="card why"><p>A good tutor must be able not only to write their own program, but also to quickly make sense of someone else’s code. During lessons, you will have to read pupils’ solutions, figure out exactly what the program does, find the causes of errors and help correct them.</p><p>In this block, we will work with Python. The most important thing here is not to remember every command by heart, but to understand how the code is executed, how its parts interact, and why the program produces a particular result.</p><p>You will have to read several short programs, identify errors, and solve several practical tasks. Do not worry, there will be no complex algorithms here - we are only interested in confident grasp over of basic programming principles.</p></div><div class="tbl"><table><tbody><tr><th>Thing</th><th>What it means</th></tr><tr><td><code>range(4)</code></td><td>0, 1, 2, 3 — starts at 0, stops <strong>before</strong> 4</td></tr><tr><td><code>range(2, 6)</code></td><td>2, 3, 4, 5 — includes the start, excludes the end</td></tr><tr><td><code>total += x</code></td><td>Same as <code>total = total + x</code></td></tr><tr><td><code>a % b</code></td><td>Remainder. <code>n % 2 == 0</code> means n is even; <code>== 1</code> means odd</td></tr><tr><td><code>a // b</code></td><td>Whole-number division: <code>7 // 2</code> is 3</td></tr><tr><td><code>=</code> vs <code>==</code></td><td><code>=</code> stores a value; <code>==</code> compares two values</td></tr><tr><td><code>&gt;</code> vs <code>&gt;=</code></td><td>"Greater than 10" excludes 10; "at least 10" includes it. 0 is not positive.</td></tr></tbody></table></div><div class="tracer" data-tr="pyloop"></div>'
        },
        {
          t: '3.2 · Lists and indexes',
          html: '<pre class="code">numbers = [4, 15, 7, 22]\n# index:    0   1  2   3\n\nnumbers[1]      # 15\nlen(numbers)    # 4\n\nfor n in numbers:              # n is each VALUE: 4, 15, 7, 22\n    ...\nfor i in range(len(numbers)):  # i is each INDEX: 0, 1, 2, 3\n    ...  numbers[i]  ...</pre><div class="card warn"><p>Indexes start at <strong>0</strong>. When a task asks for "the index", return <code>i</code>, not <code>numbers[i]</code>. Mixing up index and value is one of the most common wrong options.</p></div>'
        },
        {
          t: '3.3 · return ends the function immediately',
          html: '<div class="card "><p>A function stops the moment it reaches <code>return</code> — even in the middle of a loop. The value after <code>return</code> is what the call gives back. <code>print</code> only shows something on screen; it does not return anything.</p><p>In Python, <strong>indentation decides what is inside what</strong>. Four spaces more means "inside the loop" or "inside the if". That is why the position of one <code>return</code> line can change the whole result.</p></div><div class="tracer" data-tr="pyreturn"></div>'
        },
        {
          t: '3.4 · Pattern: "are ALL items OK?"',
          html: '<div class="card "><p>To check that <em>all</em> items meet a condition, look for <strong>one item that breaks it</strong>. As soon as you find one, <code>return False</code>. Only after the loop has checked everything can you <code>return True</code>.</p></div><pre class="code good">def all_below_100(numbers):\n    for n in numbers:\n        if n &gt;= 100:\n            return False   # one bad item is enough\n    return True            # after the loop: nothing was bad</pre><div class="cols"><div><pre class="code bad"># WRONG: decides after the first item\nfor n in numbers:\n    if n &lt; 100:\n        return True\n    else:\n        return False</pre></div><div><pre class="code bad"># WRONG: returns True as soon as\n# ONE item is OK\nfor n in numbers:\n    if n &lt; 100:\n        return True\nreturn False</pre></div></div><div class="card tip"><p>Check the condition boundary too: "positive" means <code>&gt; 0</code>, so a list containing 0 is not all positive.</p></div>'
        },
        {
          t: '3.5 · Pattern: "find the FIRST one"',
          html: '<div class="card "><p>To return the index of the first item that matches: <code>return i</code> inside the <code>if</code>, so the function stops at the first match. The "not found" value (<code>-1</code>) goes <strong>after</strong> the loop, because you only know nothing matched once every item has been checked.</p></div><pre class="code good">def find_first_even(numbers):\n    for i in range(len(numbers)):\n        if numbers[i] % 2 == 0:\n            return i      # first match: stop here\n    return -1             # loop finished: no match\n\nfind_first_even([3, 7, 8, 10])   # 2</pre><div class="tbl"><table><tbody><tr><th>Wrong version</th><th>What goes wrong</th></tr><tr><td><code>else: return -1</code> inside the loop</td><td>Gives up after the first item if it doesn\'t match.</td></tr><tr><td><code>result = i</code> in the loop, <code>return result</code> after it</td><td>Keeps overwriting, so it returns the <strong>last</strong> match, not the first.</td></tr><tr><td><code>for n in numbers: … return n</code></td><td>Returns the <strong>value</strong>, not the index.</td></tr></tbody></table></div>'
        },
        {
          t: '3.6 · Helping a pupil debug',
          html: '<div class="card class"><p>The same habits apply at both CraftForge levels when you read a pupil\'s code. Don\'t fix it for them — help them find it:</p><ul><li><strong>Read the error out loud together.</strong> "Which line is this pointing to, and what do you expect to happen there?"</li><li><strong>Isolate the last change.</strong> "What was the last thing you changed before it broke?"</li><li><strong>Trace with a small input</strong> — two or three items is enough to expose most bugs.</li><li>If the code came from AI: "Before you add this — explain to me what this line does."</li></ul></div><div class="tbl"><table><tbody><tr><th>Error a pupil sees</th><th>Usual cause</th></tr><tr><td>IndentationError</td><td>Mixed or missing spaces at the start of a line</td></tr><tr><td>SyntaxError</td><td>Missing <code>:</code> after <code>for</code>/<code>if</code>/<code>def</code>, or <code>=</code> where <code>==</code> is needed</td></tr><tr><td>NameError</td><td>A typo in a variable name, or using it before it exists</td></tr><tr><td>Wrong result, no error</td><td>Logic: a <code>return</code> in the wrong place, <code>&gt;</code> vs <code>&gt;=</code>, the wrong starting value</td></tr></tbody></table></div>'
        }
      ],
      quiz: [
        {
          p: 'What will this program print?<pre class="code">total = 0\nfor i in range(1, 5):\n    total += i * 2\nprint(total)</pre>',
          o: ['10', '12', '20', '30'],
          c: 2,
          f: 'range(1, 5) is 1, 2, 3, 4. So 2 + 4 + 6 + 8 = 20. (30 would need range(1, 6).)'
        },
        {
          p: 'What does this call return?<pre class="code">def mystery(nums):\n    result = 0\n    for n in nums:\n        if n % 2 == 1:\n            result += n\n    return result\n\nmystery([3, 4, 7, 10])</pre>',
          o: ['2', '10', '14', '24'],
          c: 1,
          f: 'It adds only the odd numbers: 3 + 7 = 10. (2 would be counting them; 24 would be adding everything.)'
        },
        {
          p: 'count_evens([2, 4, 6]) returns 1 instead of 3. Which change fixes it for any list?<pre class="code">def count_evens(numbers):\n    count = 0\n    for n in numbers:\n        if n % 2 == 0:\n            count += 1\n        return count</pre>',
          o: ['Start count at 1', 'Move return count inside the if', 'Move return count outside the for loop, after it', 'Change == 0 to == 1'],
          c: 2,
          f: 'return is inside the loop, so the function ends after the first number. Placed after the loop, it runs once everything has been counted.'
        },
        {
          p: 'all_even(numbers) must return True only if every number is even. Which version is correct?',
          o: ['A<pre class="code">for n in numbers:\n    if n % 2 == 0:\n        return True\nreturn False</pre>', 'B<pre class="code">for n in numbers:\n    if n % 2 != 0:\n        return False\nreturn True</pre>', 'C<pre class="code">for n in numbers:\n    if n % 2 != 0:\n        return False\n    else:\n        return True</pre>', 'None of them'],
          c: 1,
          f: 'B returns False at the first odd number and True only after checking all of them. A stops at the first even number; C decides after looking at one item.'
        },
        {
          p: 'find_first_negative(numbers) should return the index of the first negative number, or -1 if there is none. Which version works for any list?',
          o: ['A<pre class="code">for i in range(len(numbers)):\n    if numbers[i] &lt; 0:\n        return i\n    else:\n        return -1</pre>', 'B<pre class="code">result = -1\nfor i in range(len(numbers)):\n    if numbers[i] &lt; 0:\n        result = i\nreturn result</pre>', 'C<pre class="code">for i in range(len(numbers)):\n    if numbers[i] &lt; 0:\n        return i\nreturn -1</pre>', 'D<pre class="code">for n in numbers:\n    if n &lt; 0:\n        return n\nreturn -1</pre>'],
          c: 2,
          f: 'C stops at the first match and returns -1 only after the whole list. A gives up after one item, B returns the last match, D returns the value instead of the index.'
        },
        {
          p: 'Which values does range(2, 6) produce?',
          o: ['2, 3, 4, 5, 6', '2, 3, 4, 5', '3, 4, 5, 6', '0, 1, 2, 3, 4, 5'],
          c: 1,
          f: 'The start is included, the end is not.'
        }
      ]
    },
    {
      id: 'datapacks',
      ic: '📜',
      slot: 'Datapack',
      title: 'Data packs: the laws of the world',
      sections: [
        {
          t: '4.1 · What a data pack is',
          html: '<div class="card why"><p>Data packs let the student set their own <strong>laws</strong> for Minecraft — new recipes, custom commands, timers, events and scoring — without changing the game itself. They open the year (module 01, "the world starts working by the rules written by the student") and power module 06, where an ordinary area becomes a game.</p></div><pre class="code">my_pack/\n├── pack.mcmeta                    ← required: tells Minecraft this is a data pack\n└── data/\n    ├── forge/                     ← the student\'s namespace\n    │   └── function/\n    │       ├── setup.mcfunction   ← one command per line, no "/"\n    │       └── loop.mcfunction\n    └── minecraft/\n        └── tags/function/\n            ├── load.json          ← lists functions that run when the world loads or /reload runs\n            └── tick.json          ← lists functions that run every game tick</pre><div class="card tip"><p>Folder names depend on the game version: since 1.21 they are singular (<code>function</code>, <code>recipe</code>); older versions use plural (<code>functions</code>, <code>recipes</code>). A wrong folder name is a silent failure — the pack loads but nothing happens. Use whatever structure your course environment provides.</p></div>'
        },
        {
          t: '4.2 · load, tick, and the 20-ticks rule',
          html: '<div class="tbl"><table><tbody><tr><th>When</th><th>What runs</th></tr>\n    <tr><td>World load, or <code>/reload</code></td><td>Functions listed in <code>load.json</code> — once. Good for setup: creating scoreboards.</td></tr>\n    <tr><td>Every game tick — <strong>20 times per second</strong></td><td>Functions listed in <code>tick.json</code>. Good for timers and checking conditions.</td></tr>\n    <tr><td>When you call it</td><td><code>/function forge:setup</code> runs one function by hand — great for testing.</td></tr></tbody></table></div><pre class="code"># setup.mcfunction  (in load.json: runs once)\nscoreboard objectives add timer dummy\nscoreboard objectives add points dummy\nscoreboard objectives setdisplay sidebar points\n\n# loop.mcfunction   (in tick.json: runs 20 times per second)\nscoreboard players add #game timer 1\nexecute if score #game timer matches 200 run say Ten seconds!</pre><div class="card "><p>The timer goes up by 1 every tick, so 200 ticks = <strong>10 seconds</strong>. <code>execute if …</code> is the data pack version of an <code>if</code>. A scoreboard is how module 06 "tracks points".</p></div>'
        },
        {
          t: '4.3 · When a rule does not fire',
          html: '<div class="tbl"><table><tbody><tr><th>Symptom</th><th>First thing to check</th></tr>\n    <tr><td>Nothing happens at all</td><td>Did they run <code>/reload</code> after editing? Is the pack enabled (<code>/datapack list</code>)?</td></tr>\n    <tr><td>Setup never happened</td><td>Is the function listed in <code>load.json</code>, with the right namespace?</td></tr>\n    <tr><td>Works once, not after re-entering the world</td><td>The setup ran by hand and is not in <code>load.json</code></td></tr>\n    <tr><td>Fires constantly instead of once</td><td>The command sits in a tick function with no condition</td></tr>\n    <tr><td>The condition never fires</td><td>Check the objective name, the target and the number — trace it like any algorithm</td></tr></tbody></table></div><div class="card class"><p><strong>In class:</strong> don’t fix it for them. Check the trigger together: <em>"Explain to me when this should fire."</em> Is it on load, every tick, or only when a condition is true?</p></div>'
        }
      ],
      quiz: [
        {
          p: 'How many times per second does a function listed in tick.json run?',
          o: ['1', '10', '20', '60'],
          c: 2,
          f: 'Minecraft runs 20 game ticks per second, and tick functions run on every tick.'
        },
        {
          p: 'A timer adds 1 to a score every tick. Which value means 30 seconds have passed?',
          o: ['30', '300', '600', '1800'],
          c: 2,
          f: '20 ticks per second × 30 seconds = 600.'
        },
        {
          p: 'A student edited a function file, but the game still behaves the old way. What should they try first?',
          o: ['Delete the world', 'Run /reload', 'Restart the computer', 'Rename the namespace'],
          c: 1,
          f: '/reload loads the changed files and runs the load functions again.'
        },
        {
          p: 'Where should the command that creates a scoreboard objective go?',
          o: ['In a function listed in load.json', 'In a function listed in tick.json', 'In pack.mcmeta', 'It must be typed by hand every lesson'],
          c: 0,
          f: 'Setup belongs in a load function: it runs once when the world loads or on /reload.'
        },
        {
          p: 'A student’s rule does not fire and they want you to fix it. What do you say?',
          o: ['"Let me rewrite it for you."', '"Explain to me when this should fire."', '"Ask Sparks to write it again."', '"Data packs are too hard — skip it."'],
          c: 1,
          f: 'Checking the trigger together keeps the student solving it, step by step.'
        }
      ]
    }
  ],
  tracers: {
    robot: {
      title: 'Trace it: the robot on the number line',
      code: ['x = 3', 'repeat 4 times:', '    if x is a multiple of 3:', '        move 2 forward', '    otherwise:', '        move 1 back'],
      steps: [
        {
          l: 0,
          v: { x:3, round:'–' },
          n: 'Write the starting value down before anything else.'
        },
        {
          l: 2,
          v: { x:3, round:1 },
          n: 'Round 1. Is 3 a multiple of 3? Yes.'
        },
        {
          l: 3,
          v: { x:5, round:1 },
          n: '3 + 2 = 5. The next round checks the NEW value of x, 5.'
        },
        {
          l: 5,
          v: { x:4, round:2 },
          n: 'Round 2. 5 is not a multiple of 3, so move back: 5 − 1 = 4.'
        },
        {
          l: 5,
          v: { x:3, round:3 },
          n: 'Round 3. 4 is not a multiple of 3: 4 − 1 = 3.'
        },
        {
          l: 3,
          v: { x:5, round:4 },
          n: 'Round 4. 3 is a multiple of 3 again: 3 + 2 = 5. Four rounds done.'
        },
        {
          l: 1,
          v: { x:5, round:'done' },
          n: 'Final answer: 5. Notice the robot came back to 3 — a loop that revisits a value is a classic trap for guessing.'
        }
      ]
    },
    coins: {
      title: 'Trace it: a loop with a condition inside',
      code: ['coins = 2', 'repeat 3 times:', '    coins = coins + 3', '    if coins > 6:', '        coins = coins * 2'],
      steps: [
        {
          l: 0,
          v: { coins:2, round:'–' },
          n: 'Start value.'
        },
        {
          l: 2,
          v: { coins:5, round:1 },
          n: 'Round 1: add first. 2 + 3 = 5.'
        },
        {
          l: 3,
          v: { coins:5, round:1 },
          n: 'Now check the NEW value: is 5 > 6? No — nothing doubles.'
        },
        {
          l: 2,
          v: { coins:8, round:2 },
          n: 'Round 2: 5 + 3 = 8.'
        },
        {
          l: 4,
          v: { coins:16, round:2 },
          n: '8 > 6, so double: 16.'
        },
        {
          l: 2,
          v: { coins:19, round:3 },
          n: 'Round 3: 16 + 3 = 19.'
        },
        {
          l: 4,
          v: { coins:38, round:3 },
          n: '19 > 6, double again: 38. Once the threshold is crossed, the doubling fires every round.'
        }
      ]
    },
    flag: {
      title: 'Trace it: a counter, a flag and a stop rule',
      code: ['numbers = 6, 1, 8, 3, 12', 'counter = 0, mode = off', 'for each number, in this order:', '    if number > 5: counter + 1', '    if counter == 2: mode = on', '    if mode is on and number is odd: STOP'],
      steps: [
        {
          l: 1,
          v: { number:'–', counter:0, mode:'off' },
          n: 'Write every variable in its own column before you start.'
        },
        {
          l: 3,
          v: { number:6, counter:1, mode:'off' },
          n: '6 > 5 → counter 1. Mode stays off. 6 is even anyway.'
        },
        {
          l: 5,
          v: { number:1, counter:1, mode:'off' },
          n: '1 is not > 5. Mode is off, so the stop rule cannot fire even though 1 is odd.'
        },
        {
          l: 4,
          v: { number:8, counter:2, mode:'on' },
          n: '8 > 5 → counter 2 → mode switches on in this same step.'
        },
        {
          l: 5,
          v: { number:8, counter:2, mode:'on' },
          n: 'Third rule, same number: mode is on, but 8 is even. Keep going.'
        },
        {
          l: 5,
          v: { number:3, counter:2, mode:'on' },
          n: '3: not > 5. Mode is on and 3 is odd → STOP at 3. 12 is never read.'
        }
      ]
    },
    pyloop: {
      title: 'Trace it: for + range in Python',
      code: ['total = 1', 'for i in range(3):', '    total = total + i * 3', 'print(total)'],
      steps: [
        {
          l: 0,
          v: { total:1, i:'–' },
          n: 'total starts at 1, not 0 — always check the starting value.'
        },
        {
          l: 1,
          v: { total:1, i:0 },
          n: 'range(3) gives 0, 1, 2. It starts at 0 and never reaches 3.'
        },
        {
          l: 2,
          v: { total:1, i:0 },
          n: '1 + 0 * 3 = 1. Multiplication happens before addition.'
        },
        {
          l: 2,
          v: { total:4, i:1 },
          n: '1 + 1 * 3 = 4.'
        },
        {
          l: 2,
          v: { total:10, i:2 },
          n: '4 + 2 * 3 = 10. That was the last value range(3) produces.'
        },
        {
          l: 3,
          v: { total:10, i:2 },
          n: 'The print is not indented, so it runs once, after the loop. Output: 10.'
        }
      ]
    },
    pyreturn: {
      title: 'Trace it: where return sits changes everything',
      code: ['def count_evens(numbers):', '    count = 0', '    for n in numbers:', '        if n % 2 == 0:', '            count += 1', '        return count', '', 'count_evens([2, 4, 6])'],
      steps: [
        {
          l: 7,
          v: { n:'–', count:'–', returned:'–' },
          n: 'We call the function with [2, 4, 6]. The expected answer is 3.'
        },
        {
          l: 1,
          v: { n:'–', count:0, returned:'–' },
          n: 'count starts at 0.'
        },
        {
          l: 2,
          v: { n:2, count:0, returned:'–' },
          n: 'First pass of the loop: n = 2.'
        },
        {
          l: 4,
          v: { n:2, count:1, returned:'–' },
          n: '2 % 2 == 0, so count becomes 1.'
        },
        {
          l: 5,
          v: { n:2, count:1, returned:1 },
          n: 'return is indented INSIDE the for loop. It runs on the very first pass and leaves the function: result 1. The 4 and the 6 are never looked at.'
        },
        {
          l: 5,
          v: { n:2, count:1, returned:1 },
          n: 'Fix: move return count back four spaces, to the same level as for. Then it runs once, after every number has been counted.'
        }
      ]
    }
  }
};
