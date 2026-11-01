/* ============================================================
   Minecraft publishing simulation (Kodland Sparks + Kodland Launcher + the lesson card) · ENGLISH (USA)
   For another language: copy this file as content-xx.js and change lang.
   Translate only the text inside quotes / backticks. Keep HTML tags, keys and the button names
   that appear in the real interface (Publish project, Minecraft skin, Image, Public, Only me, Edit, Everyone, Copy link…).
   ============================================================ */
window.CONTENT = { lang: 'en-US' };

CONTENT.ui = {
  title: 'Kodland Sparks · Publish a Minecraft project',
  coachStep: (n, total) => `Step ${n} of ${total}`,
  next: 'Next →',
  finish: 'Finish ✓',
  clickHint: '👆 Click the highlighted spot',
  followStep: 'Follow the highlighted step 🙂',
  langName: 'English',
  studentNick: 'lucas_craft',
  studentName: 'Lucas',
  studentInitial: 'L',
  skinTitle: 'Lucas the explorer',
  skinFile: 'lucas_skin.png',
  towerTitle: 'Watchtower',
  oldTitle: 'My island house',
  fileName: 'watchtower.png',
  packName: 'Rockapples',
  uploaded: 'Uploaded ✓',
  uploaded2: 'Uploaded Oct 26, 2026',
  saved: 'Saved',
  copied: 'Link copied',
  chars: n => `${n} characters`,
  cardTab: 'Kodland platform · Lesson 1',
  cardUrl: 'https://platform.kodland.org/lesson/1'
};

CONTENT.flows = {
  /* Beginner: part 1 = the skin as a Minecraft skin project (Lesson 1); part 2 = a build screenshot as an Image project (Lesson 2 and homework) */
  image: {
    card: { gif: 'assets/crafters-skin.gif', label: 'Link to my Skin in Kodland Sparks', placeholder: 'Paste the link to your Skin here' },
    welcome: {
      kicker: '⚡ Simulation · Minecraft CraftForge Beginner',
      title: 'Publish a <span>skin and a build</span> in Kodland Sparks',
      lead: 'In Minecraft CraftForge Beginner, students publish their work in Kodland Sparks from Lesson 1: first their own <b>skin</b>, then screenshots of their builds as <b>Image</b> projects. Then they paste the project link into the lesson card. Here you play Lucas, a student.',
      seeTitle: 'What you will do',
      see: ['Publish a skin as a <b>Minecraft skin</b> project and choose who can see it.', 'Find the link: <b>My projects → the published project → the address in the browser bar</b>.', 'Paste the link into the lesson card on the Kodland platform.', 'Publish a build screenshot as an <b>Image</b> project, and fix a link nobody else can open.'],
      how: 'A guide card shows you each step. Click the highlighted spot. It takes about 5 minutes.',
      start: 'Start the simulation →'
    },
    steps: {
      start: { title: 'Lucas’s skin is ready', text: 'Lucas has drawn his crafter: a 64×64 PNG skin file. Now he publishes it in Kodland Sparks, so he can wear it in the launcher and send its link in the lesson card.' },
      navPublish: { title: 'Publish project', text: 'In the top bar of Sparks, click <b>Publish project</b>.' },
      typeSkin: { title: 'Project type: Minecraft skin', text: 'There are eight project types. A skin is published as <b>Minecraft skin</b>: Sparks shows it on a 3D model. Click it.' },
      title: { title: 'Give it a name', text: 'Click the title field. A project with a clear name is easy to find later — for the student and for you.' },
      model: { title: 'Steve or Alex', text: 'The <b>Model</b> decides the body shape the skin is shown on: <b>Steve</b> (classic arms) or <b>Alex</b> (slim arms). Steve is selected by default.' },
      upload: { title: 'Skin file (PNG)', text: 'Click <b>Choose file</b> and add the skin: a <b>64×64 PNG</b> (the old 64×32 format also works).' },
      visibility: { title: 'Who can see it', text: '<ul><li><b>Public</b>: in the feed and on the public portfolio.</li><li><b>Friends only</b>: friends, teachers and the student.</li><li><b>Only me</b>: nobody else can open the link — not even you.</li></ul>What matters is that <b>you can open the link</b>.' },
      visPublic: { title: 'Choose Public', text: 'Lucas wants other players to see his crafter. Click <b>Public</b>.' },
      toggles: { title: 'The options at the end', text: '<ul><li><b>Request feedback</b>: other authors can leave structured feedback (public projects only).</li><li><b>Others can modify this project</b>: on by default — others can open their own copy; the original stays untouched.</li><li><b>Discord selection</b>: the day’s best public projects are posted on Discord.</li></ul>' },
      publish: { title: 'Publish', text: 'Click <b>1× 💎 Publish</b>. Publishing also earns a crystal.' },
      findMy: { title: 'Where is the link?', text: 'The skin is published. Now the student needs its link. It isn’t a text to copy from anywhere: it’s the address of the project page. First go to <b>My projects</b>.' },
      openSkin: { title: 'Open the published project', text: 'The profile shows the student’s projects. Click the skin you have just published.' },
      copy: { title: 'Copy the link from the browser bar', text: 'The project page is open. Its link is the address in the <b>browser bar</b>: <code>portfolio.kodland.org/nickname/…</code>. Click the bar to select it and copy it (Ctrl + C / Cmd + C).' },
      toCard: { title: 'Go to the lesson on the platform', text: 'Publishing in Sparks and sending the link on the Kodland platform are <b>two different steps</b>. Open the lesson tab.' },
      paste: { title: 'Paste the link in the card', text: 'This is the card <b>“The Crafter’s Skin”</b> on the platform. Click the field <b>“Link to my Skin in Kodland Sparks”</b> to paste the link (Ctrl + V / Cmd + V). Only the link goes here. Check in Backoffice that the links really arrived.' },
      imageIntro: { title: 'From Lesson 2: builds as Image', text: 'From Lesson 2, students also publish <b>screenshots of their builds</b> (F5 to see yourself, F1 to hide the interface). Lucas has just finished a watchtower. Go back to the Kodland Sparks tab.' },
      navPublish2: { title: 'Publish project', text: 'Click <b>Publish project</b> again.' },
      typeImage: { title: 'Project type: Image', text: 'A screenshot is published as <b>Image</b>. Click it.' },
      title2: { title: 'Name', text: 'Click the title field.' },
      upload2: { title: 'Drawing: the screenshot', text: 'In <b>Drawing</b>, click <b>Choose file</b> (PNG, JPG, WebP or GIF up to 5 MB). On Windows the screenshot is in <b>Pictures → Screenshots</b>; on a Mac, on the desktop.' },
      publish2: { title: 'Publish', text: 'The visibility stays on <b>Public</b>. Click <b>Publish</b>. The link is found the same way: My projects → the project → the browser bar.' },
      problem: { title: 'A link that does not open', text: 'Another case: a student sends a link, and it does not open for you. On the student’s profile, the project shows the <b>Private project</b> tag: it was saved as <b>Only me</b>. Let’s fix it as Lucas.' },
      myProjects: { title: 'My projects', text: 'Click <b>My projects</b>.' },
      privateCard: { title: 'The private project', text: 'Open the project with the <b>Private project</b> tag.' },
      edit: { title: 'Edit', text: 'Click <b>Edit</b>.' },
      fixPublic: { title: 'Change the visibility', text: 'Choose <b>Public</b> (or <b>Friends only</b>, which teachers can also open).' },
      resend: { title: 'Publish again', text: 'Click <b>Publish</b>. The link stays the same and now opens for you.' },
      done: { title: 'Fixed', text: 'The project is public and the link in the browser bar works. If a link still does not open, ask the student to share their screen and repeat the steps together.' }
    },
    finish: {
      kicker: '🏁 Simulation completed',
      title: 'You know how <span>Minecraft work</span> is published',
      intro: 'This is what students do every time a lesson asks them to publish:',
      points: ['Skin: <b>Publish project</b> → <b>Minecraft skin</b> → name → Model (Steve/Alex) → 64×64 PNG → <b>Publish</b>.', 'Build: screenshot (F5, F1) → <b>Publish project</b> → <b>Image</b> → name → Drawing → <b>Publish</b>.', 'The link: <b>My projects → the published project → copy the address from the browser bar</b>, then paste it into the lesson card on the platform. Publishing and sending the link are two different steps.', '<b>Private project</b> = Only me: My projects → project → Edit → Public → Publish. The link stays the same.'],
      back: 'Go back to the training: the module check is now unlocked.',
      again: '↺ Do it again'
    }
  },

  /* Intermediate: the data pack is published from the Kodland Launcher (0.8.20) */
  datapack: {
    card: { gif: 'assets/sign-the-law.gif', label: 'Link to my Law in Kodland Sparks', placeholder: 'Paste the link to your published data pack here' },
    welcome: {
      kicker: '⚡ Simulation · Minecraft CraftForge Intermediate',
      title: 'Publish a <span>data pack</span> in Kodland Sparks',
      lead: 'In Minecraft CraftForge Intermediate, students create laws for the world (recipes, drops, commands) in a <b>data pack</b> in the Kodland Launcher, and publish it to their Sparks profile from the editor. Here you play Lucas, a student who has just created his first recipe.',
      seeTitle: 'What you will do',
      see: ['Open the data pack in the launcher: <b>Create → Data packs → Edit</b>.', 'Publish it with <b>Who can see it? → Everyone</b> and copy the link.', 'Paste the link into the lesson card on the Kodland platform.', 'Fix a link that does not open, and find the link again with <b>Open on Sparks</b>.'],
      how: 'A guide card shows you each step. Click the highlighted spot. It takes about 4 minutes.',
      start: 'Start the simulation →'
    },
    steps: {
      start: { title: 'The law works', text: 'Lucas created a recipe in his data pack, saved it, went back into the world and crafted his item. Now he signs the law: he publishes the data pack in Kodland Sparks. This is the launcher, on the <b>Play</b> tab.' },
      create: { title: 'Create', text: 'The data packs are on the <b>Create</b> tab. Click <b>Create</b>.' },
      edit: { title: 'The data pack', text: 'Here are the student’s data packs. Click <b>Edit</b> on the pack with the recipe.' },
      editor: { title: 'The data pack editor', text: 'On the left, what is inside the pack; in the center, the recipe form. At the top right, <b>Publish</b> is next to the purple <b>Save</b> button.' },
      publish: { title: 'Publish', text: 'Click <b>Publish</b>.' },
      name: { title: 'Name', text: '“Publish to your profile” opens. Click the <b>Name</b> field. <b>About it</b> is optional.' },
      who: { title: 'Who can see it?', text: 'This decides who can open the link. Only with <b>Everyone</b> does the link open for others — you included — without logging in to the student’s account.' },
      everyone: { title: 'Everyone', text: 'Check that <b>Everyone</b> is selected and click it.' },
      submit: { title: 'Publish', text: 'Click <b>Publish</b>.' },
      copy: { title: 'Published! Copy the link', text: '“Published! It is on your profile.” appears with the project link and a crystal. Click <b>Copy link</b>.' },
      close: { title: 'Done', text: 'The button now says <b>Copied!</b>. Click <b>Done</b>.' },
      toCard: { title: 'Go to the lesson on the platform', text: 'Publishing in Sparks and sending the link on the Kodland platform are <b>two different steps</b>. Open the lesson tab.' },
      paste: { title: 'Paste the link in the card', text: 'This is the card <b>“Sign the Law”</b> on the platform. Click the field <b>“Link to my Law in Kodland Sparks”</b> to paste the link (Ctrl + V / Cmd + V). Check in Backoffice that the links really arrived.' },
      problem: { title: 'A link that does not open', text: 'Next lesson, Lucas publishes an update, and the link does not open for you. Most likely “Who can see it?” was set to <b>Only me</b>. The fix: publish again with Everyone.' },
      backLauncher: { title: 'Back to the launcher', text: 'Open the Kodland Launcher tab.' },
      republish: { title: 'Publish again', text: 'Click <b>Publish</b> in the editor.' },
      fixEveryone: { title: 'Everyone', text: 'The data pack was published as <b>Only me</b>. Choose <b>Everyone</b>.' },
      resubmit: { title: 'Publish', text: 'Click <b>Publish</b>. Now the link opens for everyone.' },
      lostLink: { title: 'Lost the link?', text: 'If the student closed the window without copying the link, it can always be found again: <b>Open on Sparks</b> (here, or at the top of the editor) opens the project page. Click it.' },
      done: { title: 'The project page', text: 'The data pack opens on the student’s Sparks profile. The link is the address in the browser bar — the student copies it from there and pastes it into the card.' }
    },
    finish: {
      kicker: '🏁 Simulation completed',
      title: 'You know how a <span>data pack</span> is published',
      intro: 'This is what students do every time a lesson asks them to publish their laws:',
      points: ['Launcher: <b>Create → Data packs → Edit</b> → <b>Publish</b> (next to Save).', '“Publish to your profile”: name → <b>Who can see it? → Everyone</b> → Publish → <b>Copy link</b> → Done.', 'Paste the link into the lesson card on the platform. Publishing and sending the link are two different steps.', 'Link does not open → publish again with <b>Everyone</b>. Link lost → <b>Open on Sparks</b> and copy the address from the browser bar.'],
      back: 'Go back to the training: the module check is now unlocked.',
      again: '↺ Do it again'
    }
  }
};
