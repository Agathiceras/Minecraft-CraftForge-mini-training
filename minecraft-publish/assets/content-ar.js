/* ============================================================
   Minecraft publishing simulation (Kodland Sparks + Kodland Launcher + the lesson card) · ARABIC (RTL) · Modern Standard Arabic (GCC)
   Translated from content-en.js. Translate only the text inside quotes / backticks. Keep HTML tags, keys and the button names
   that appear in the real interface (Publish project, Minecraft skin, Image, Public, Only me, Edit, Everyone, Copy link…).
   TODO: replace the Backoffice code and link (2226 / 2227) with the Arabic (GCC) course when it exists.
   ============================================================ */
window.CONTENT = { lang: 'ar', dir: 'rtl' };

CONTENT.ui = {
  title: 'Kodland Sparks · انشر مشروع Minecraft',
  coachStep: (n, total) => `الخطوة ${n} من ${total}`,
  next: 'التالي ←',
  finish: 'إنهاء ✓',
  clickHint: '👆 انقر على المكان المميَّز',
  followStep: 'اتبع الخطوة المميَّزة 🙂',
  langName: 'العربية',
  studentNick: 'lucas_craft',
  studentName: 'لوكاس',
  studentInitial: 'ل',
  skinTitle: 'لوكاس المستكشف',
  skinFile: 'lucas_skin.png',
  towerTitle: 'برج المراقبة',
  oldTitle: 'بيتي على الجزيرة',
  fileName: 'watchtower.png',
  packName: 'تفاح الصخور',
  uploaded: 'تم الرفع ✓',
  uploaded2: 'تم الرفع في 26 أكتوبر 2026',
  saved: 'تم الحفظ',
  copied: 'تم نسخ الرابط',
  chars: n => `${n} حرفًا`,
  cardTab: 'منصة Kodland · الدرس 1',
  cardUrl: 'https://platform.kodland.org/lesson/1'
};

CONTENT.flows = {
  /* Beginner: part 1 = the skin as a Minecraft skin project (Lesson 1); part 2 = a build screenshot as an Image project (Lesson 2 and homework) */
  image: {
    card: { gif: 'assets/crafters-skin.gif', label: 'رابط السكين الخاص بي على Kodland Sparks', placeholder: 'الصق رابط السكين الخاص بك هنا' },
    welcome: {
      kicker: '⚡ محاكاة · Minecraft CraftForge Beginner',
      title: 'انشر <span>سكينًا وبناءً</span> على Kodland Sparks',
      lead: 'في Minecraft CraftForge Beginner، ينشر الطلاب أعمالهم على Kodland Sparks بدءًا من الدرس 1: أولًا <b>السكين (skin)</b> الخاص بهم، ثم لقطات شاشة لأبنيتهم كمشاريع <b>Image</b>. ثم يلصقون رابط المشروع في بطاقة الدرس. هنا تؤدّي دور لوكاس، أحد الطلاب.',
      seeTitle: 'ما الذي ستفعله',
      see: ['انشر سكينًا كمشروع <b>Minecraft skin</b> واختر من يستطيع رؤيته.', 'اعثر على الرابط: <b>My projects ← المشروع المنشور ← العنوان في شريط المتصفح</b>.', 'الصق الرابط في بطاقة الدرس على منصة Kodland.', 'انشر لقطة شاشة لبناء كمشروع <b>Image</b>، وأصلح رابطًا لا يستطيع أحد غير الطالب فتحه.'],
      how: 'تُريك بطاقة إرشادية كل خطوة. انقر على المكان المميَّز. تستغرق نحو 5 دقائق.',
      start: 'ابدأ المحاكاة ←'
    },
    steps: {
      start: { title: 'سكين لوكاس جاهز', text: 'رسم لوكاس شخصيته: ملف سكين بصيغة PNG بمقاس 64×64. الآن ينشره على Kodland Sparks، ليتمكّن من ارتدائه في المشغّل وإرسال رابطه في بطاقة الدرس.' },
      navPublish: { title: 'Publish project', text: 'في الشريط العلوي من Sparks، انقر <b>Publish project</b>.' },
      typeSkin: { title: 'نوع المشروع: Minecraft skin', text: 'هناك ثمانية أنواع من المشاريع. يُنشر السكين كمشروع <b>Minecraft skin</b>: يعرضه Sparks على نموذج ثلاثي الأبعاد. انقر عليه.' },
      title: { title: 'أعطه اسمًا', text: 'انقر على حقل العنوان. المشروع الذي يحمل اسمًا واضحًا يسهل العثور عليه لاحقًا — على الطالب وعليك.' },
      model: { title: 'Steve أو Alex', text: 'يحدّد <b>Model</b> شكل الجسم الذي يُعرض عليه السكين: <b>Steve</b> (ذراعان عاديتان) أو <b>Alex</b> (ذراعان نحيفتان). يكون Steve مختارًا افتراضيًا.' },
      upload: { title: 'ملف السكين (PNG)', text: 'انقر <b>Choose file</b> وأضف السكين: ملف <b>PNG بمقاس 64×64</b> (المقاس القديم 64×32 يعمل أيضًا).' },
      visibility: { title: 'من يستطيع رؤيته', text: '<ul><li><b>Public</b>: في الصفحة الرئيسية وفي ملف الأعمال العام.</li><li><b>Friends only</b>: الأصدقاء والمعلمون والطالب.</li><li><b>Only me</b>: لا يستطيع أحد غير الطالب فتح الرابط — ولا حتى أنت.</li></ul>المهم أن <b>تستطيع أنت فتح الرابط</b>.' },
      visPublic: { title: 'اختر Public', text: 'يريد لوكاس أن يرى اللاعبون الآخرون شخصيته. انقر <b>Public</b>.' },
      toggles: { title: 'الخيارات في النهاية', text: '<ul><li><b>Request feedback</b>: يستطيع المؤلّفون الآخرون ترك تغذية راجعة منظّمة (للمشاريع العامة فقط).</li><li><b>Others can modify this project</b>: مفعّل افتراضيًا — يستطيع الآخرون فتح نسختهم الخاصة؛ ويبقى الأصل كما هو.</li><li><b>Discord selection</b>: تُنشر أفضل المشاريع العامة في اليوم على Discord.</li></ul>' },
      publish: { title: 'Publish', text: 'انقر <b>1× 💎 Publish</b>. النشر يمنح أيضًا بلّورة.' },
      findMy: { title: 'أين الرابط؟', text: 'نُشر السكين. الآن يحتاج الطالب إلى رابطه. الرابط ليس نصًا يُنسخ من مكان ما: إنه عنوان صفحة المشروع. اذهب أولًا إلى <b>My projects</b>.' },
      openSkin: { title: 'افتح المشروع المنشور', text: 'يعرض الملف الشخصي مشاريع الطالب. انقر على السكين الذي نشرته للتوّ.' },
      copy: { title: 'انسخ الرابط من شريط المتصفح', text: 'صفحة المشروع مفتوحة. رابطها هو العنوان في <b>شريط المتصفح</b>: <code>portfolio.kodland.org/nickname/…</code>. انقر على الشريط لتحديده وانسخه (Ctrl + C / Cmd + C).' },
      toCard: { title: 'اذهب إلى الدرس على المنصة', text: 'النشر على Sparks وإرسال الرابط على منصة Kodland <b>خطوتان مختلفتان</b>. افتح علامة تبويب الدرس.' },
      paste: { title: 'الصق الرابط في البطاقة', text: 'هذه هي البطاقة <b>«سكين الصانع»</b> على المنصة. انقر على الحقل <b>«رابط السكين الخاص بي على Kodland Sparks»</b> لتلصق الرابط (Ctrl + V / Cmd + V). يوضع هنا الرابط فقط. تحقّق في Backoffice من أن الروابط وصلت فعلًا.' },
      imageIntro: { title: 'من الدرس 2: الأبنية كمشاريع Image', text: 'من الدرس 2، ينشر الطلاب أيضًا <b>لقطات شاشة لأبنيتهم</b> (F5 لرؤية نفسك، وF1 لإخفاء الواجهة). أنهى لوكاس للتوّ برج مراقبة. عُد إلى علامة تبويب Kodland Sparks.' },
      navPublish2: { title: 'Publish project', text: 'انقر <b>Publish project</b> مرة أخرى.' },
      typeImage: { title: 'نوع المشروع: Image', text: 'تُنشر لقطة الشاشة كمشروع <b>Image</b>. انقر عليه.' },
      title2: { title: 'الاسم', text: 'انقر على حقل العنوان.' },
      upload2: { title: 'Drawing: لقطة الشاشة', text: 'في <b>Drawing</b>، انقر <b>Choose file</b> (PNG أو JPG أو WebP أو GIF بحجم يصل إلى 5 MB). في Windows توجد لقطة الشاشة في <b>Pictures ← Screenshots</b>؛ وفي Mac على سطح المكتب.' },
      publish2: { title: 'Publish', text: 'يبقى مستوى الظهور على <b>Public</b>. انقر <b>Publish</b>. ويُعثر على الرابط بالطريقة نفسها: My projects ← المشروع ← شريط المتصفح.' },
      problem: { title: 'رابط لا يُفتح', text: 'حالة أخرى: يرسل طالب رابطًا، ولا يُفتح عندك. في الملف الشخصي للطالب، تظهر على المشروع علامة <b>Private project</b>: حُفظ بخيار <b>Only me</b>. لنُصلحه بصفتنا لوكاس.' },
      myProjects: { title: 'My projects', text: 'انقر <b>My projects</b>.' },
      privateCard: { title: 'المشروع الخاص', text: 'افتح المشروع الذي يحمل علامة <b>Private project</b>.' },
      edit: { title: 'Edit', text: 'انقر <b>Edit</b>.' },
      fixPublic: { title: 'غيّر مستوى الظهور', text: 'اختر <b>Public</b> (أو <b>Friends only</b>، الذي يستطيع المعلمون أيضًا فتحه).' },
      resend: { title: 'انشر من جديد', text: 'انقر <b>Publish</b>. يبقى الرابط كما هو، والآن يُفتح عندك.' },
      done: { title: 'تمّ الإصلاح', text: 'المشروع عام والرابط في شريط المتصفح يعمل. إذا ظلّ رابط ما لا يُفتح، اطلب من الطالب مشاركة شاشته وكرّرا الخطوات معًا.' }
    },
    finish: {
      kicker: '🏁 اكتملت المحاكاة',
      title: 'أنت تعرف الآن كيف تُنشر <span>أعمال Minecraft</span>',
      intro: 'هذا ما يفعله الطلاب في كل مرة يطلب منهم الدرس النشر:',
      points: ['السكين: <b>Publish project</b> ← <b>Minecraft skin</b> ← الاسم ← Model (Steve/Alex) ← PNG بمقاس 64×64 ← <b>Publish</b>.', 'البناء: لقطة شاشة (F5، F1) ← <b>Publish project</b> ← <b>Image</b> ← الاسم ← Drawing ← <b>Publish</b>.', 'الرابط: <b>My projects ← المشروع المنشور ← انسخ العنوان من شريط المتصفح</b>، ثم الصقه في بطاقة الدرس على المنصة. النشر وإرسال الرابط خطوتان مختلفتان.', '<b>Private project</b> = Only me: My projects ← المشروع ← Edit ← Public ← Publish. يبقى الرابط كما هو.'],
      back: 'عُد إلى التدريب: أصبح اختبار الوحدة متاحًا الآن.',
      again: '↺ أعد المحاكاة'
    }
  },

  /* Intermediate: the data pack is published from the Kodland Launcher (0.8.20) */
  datapack: {
    card: { gif: 'assets/sign-the-law.gif', label: 'رابط القانون الخاص بي على Kodland Sparks', placeholder: 'الصق رابط الـ data pack المنشور هنا' },
    welcome: {
      kicker: '⚡ محاكاة · Minecraft CraftForge Intermediate',
      title: 'انشر <span>data pack</span> على Kodland Sparks',
      lead: 'في Minecraft CraftForge Intermediate، يصنع الطلاب قوانين للعالم (وصفات، وإسقاطات، وأوامر) في <b>data pack</b> داخل Kodland Launcher، وينشرونه في ملفهم على Sparks من المحرّر. هنا تؤدّي دور لوكاس، طالب صنع للتوّ أول وصفة له.',
      seeTitle: 'ما الذي ستفعله',
      see: ['افتح الـ data pack في المشغّل: <b>Create ← Data packs ← Edit</b>.', 'انشره مع <b>Who can see it? ← Everyone</b> وانسخ الرابط.', 'الصق الرابط في بطاقة الدرس على منصة Kodland.', 'أصلح رابطًا لا يُفتح، واعثر على الرابط من جديد باستخدام <b>Open on Sparks</b>.'],
      how: 'تُريك بطاقة إرشادية كل خطوة. انقر على المكان المميَّز. تستغرق نحو 4 دقائق.',
      start: 'ابدأ المحاكاة ←'
    },
    steps: {
      start: { title: 'القانون يعمل', text: 'صنع لوكاس وصفة في الـ data pack الخاص به، وحفظها، وعاد إلى العالم وصنع عنصره. الآن يوقّع على القانون: ينشر الـ data pack على Kodland Sparks. هذا هو المشغّل، على علامة التبويب <b>Play</b>.' },
      create: { title: 'Create', text: 'توجد الـ data packs في علامة التبويب <b>Create</b>. انقر <b>Create</b>.' },
      edit: { title: 'الـ data pack', text: 'هذه هي الـ data packs الخاصة بالطالب. انقر <b>Edit</b> على الحزمة التي فيها الوصفة.' },
      editor: { title: 'محرّر الـ data pack', text: 'على اليسار، ما بداخل الحزمة؛ وفي الوسط، نموذج الوصفة. وفي أعلى اليمين، يوجد <b>Publish</b> بجانب الزر البنفسجي <b>Save</b>.' },
      publish: { title: 'Publish', text: 'انقر <b>Publish</b>.' },
      name: { title: 'الاسم', text: 'تُفتح نافذة «Publish to your profile». انقر على الحقل <b>Name</b>. حقل <b>About it</b> اختياري.' },
      who: { title: 'Who can see it?', text: 'هذا الخيار يحدّد من يستطيع فتح الرابط. مع <b>Everyone</b> فقط يُفتح الرابط للآخرين — وأنت منهم — من دون الدخول إلى حساب الطالب.' },
      everyone: { title: 'Everyone', text: 'تحقّق من أن <b>Everyone</b> مختار وانقر عليه.' },
      submit: { title: 'Publish', text: 'انقر <b>Publish</b>.' },
      copy: { title: 'تم النشر! انسخ الرابط', text: 'تظهر رسالة «Published! It is on your profile.» مع رابط المشروع وبلّورة. انقر <b>Copy link</b>.' },
      close: { title: 'Done', text: 'أصبح الزر يقول الآن <b>Copied!</b>. انقر <b>Done</b>.' },
      toCard: { title: 'اذهب إلى الدرس على المنصة', text: 'النشر على Sparks وإرسال الرابط على منصة Kodland <b>خطوتان مختلفتان</b>. افتح علامة تبويب الدرس.' },
      paste: { title: 'الصق الرابط في البطاقة', text: 'هذه هي البطاقة <b>«وقّع على القانون»</b> على المنصة. انقر على الحقل <b>«رابط القانون الخاص بي على Kodland Sparks»</b> لتلصق الرابط (Ctrl + V / Cmd + V). تحقّق في Backoffice من أن الروابط وصلت فعلًا.' },
      problem: { title: 'رابط لا يُفتح', text: 'في الدرس التالي، ينشر لوكاس تحديثًا، ولا يُفتح الرابط عندك. على الأرجح كان خيار «Who can see it?» على <b>Only me</b>. الحل: انشر من جديد مع Everyone.' },
      backLauncher: { title: 'العودة إلى المشغّل', text: 'افتح علامة تبويب Kodland Launcher.' },
      republish: { title: 'انشر من جديد', text: 'انقر <b>Publish</b> في المحرّر.' },
      fixEveryone: { title: 'Everyone', text: 'نُشر الـ data pack بخيار <b>Only me</b>. اختر <b>Everyone</b>.' },
      resubmit: { title: 'Publish', text: 'انقر <b>Publish</b>. الآن يُفتح الرابط للجميع.' },
      lostLink: { title: 'ضاع الرابط؟', text: 'إذا أغلق الطالب النافذة من دون نسخ الرابط، يمكن العثور عليه من جديد دائمًا: <b>Open on Sparks</b> (هنا، أو في أعلى المحرّر) يفتح صفحة المشروع. انقر عليه.' },
      done: { title: 'صفحة المشروع', text: 'يُفتح الـ data pack في ملف الطالب على Sparks. الرابط هو العنوان في شريط المتصفح — ينسخه الطالب من هناك ويلصقه في البطاقة.' }
    },
    finish: {
      kicker: '🏁 اكتملت المحاكاة',
      title: 'أنت تعرف الآن كيف يُنشر <span>data pack</span>',
      intro: 'هذا ما يفعله الطلاب في كل مرة يطلب منهم الدرس نشر قوانينهم:',
      points: ['المشغّل: <b>Create ← Data packs ← Edit</b> ← <b>Publish</b> (بجانب Save).', '«Publish to your profile»: الاسم ← <b>Who can see it? ← Everyone</b> ← Publish ← <b>Copy link</b> ← Done.', 'الصق الرابط في بطاقة الدرس على المنصة. النشر وإرسال الرابط خطوتان مختلفتان.', 'الرابط لا يُفتح ← انشر من جديد مع <b>Everyone</b>. ضاع الرابط ← <b>Open on Sparks</b> وانسخ العنوان من شريط المتصفح.'],
      back: 'عُد إلى التدريب: أصبح اختبار الوحدة متاحًا الآن.',
      again: '↺ أعد المحاكاة'
    }
  }
};
