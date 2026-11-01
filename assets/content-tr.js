/* ============================================================
   EM course training · Minecraft CraftForge (Beginner + Intermediate) [2232 · 2233] · TURKISH
   Translated from content-en.js (the base version). Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names, commands and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by region (see COURSE.code and the 'bo' section).
   ============================================================ */
window.COURSE = { lang: 'tr' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'EM kurs eğitimi',
  footer: 'kodland · Yeni Eğitim Modeli · Kurs eğitimi',
  devLink: '🛠 Developer',
  logoSub: 'Yeni Eğitim Modeli',
  navHome: '← Ana sayfa',
  navBackModule: '← Modüle dön',
  moduleN: 'Modül {n}',
  badgeStart: 'Başla →',
  badgeLocked: '🔒 Önce Modül {n}’i tamamla',
  badgeDone: '✓ Tamamlandı · %{score}',
  progLabel: 'modül tamamlandı',
  progAllDone: 'Modüller tamamlandı 🎉',
  eyebrow: '{course} · Modül {n} / {total}',
  ctaTitle: 'Modül kontrolü',
  ctaText: '{n} kısa soru. Geçmek için %70 veya üzeri gerekir.',
  lockSim: '🔒 Kontrolü açmak için yukarıdaki simülasyonu tamamla.',
  startCheck: 'Kontrole başla →',
  retake: '🔁 Kontrolü tekrarla',
  qmeta: '{e} Modül {n} kontrolü · Soru {i} / {total}',
  fbRight: '✅ <b>Doğru!</b> ',
  fbWrong: '❌ <b>Tam olarak değil.</b> ',
  nextQuestion: 'Sonraki soru →',
  seeResult: 'Sonucumu gör →',
  passedTitle: 'Geçtin!',
  failTitle: 'Az kaldı',
  scoreLine: '<b>{n} sorudan {score}</b> tanesini doğru cevapladın.',
  failText: '%70 veya üzeri gerekiyor. Modülü tekrar gözden geçir ve yeniden dene — istediğin kadar tekrar edebilirsin.',
  nextUnlocked: '<b>Modül {n} · {title}</b> açıldı.',
  goModule: 'Modül {n}’e git →',
  allDoneText: 'Bu eğitimin tüm modüllerini tamamladın.',
  seeNext: 'Sıradaki adımı gör →',
  reviewModule: '📖 Modülü gözden geçir',
  homeDoneTitle: 'Modüller tamamlandı!',
  homeDoneText: 'Son bir adım kaldı: LMS’teki eğitim sayfasında DST testi.',
  homeDoneBtn: 'Şimdi ne yapmalıyım →',
  doneBadge: '✓ Tamamlandı',
  doneBack: 'Modüllere dön',
  lockedTitle: 'Henüz kilitli',
  lockedModule: 'Önce Modül {n}’i tamamla.',
  lockedStep: 'Bunu açmak için önceki adımı tamamla.',
  ok: 'Tamam',
  linkOpen: 'Aç ↗',
  projPlay: '▶ Aç ↗',
  simOpen: '▶ Simülasyonu burada aç',
  simClose: '✕ Simülasyonu kapat',
  simNewTab: 'Yeni sekmede aç ↗',
  simDone: '✅ Simülasyon tamamlandı',
  simTodo: '○ Simülasyon bekliyor',
  checkTag: 'İşaretle',
  mythTag: 'Efsane',
  mythTap: 'Gerçeği görmek için dokun →',
  mythReality: 'Gerçek ✓',
  sortWrong: '✗ Tam olarak değil.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'mccf';
COURSE.code = '2232';
COURSE.title = 'Minecraft CraftForge';
COURSE.color = '#16A34A';

COURSE.home = {
  kicker: '🎓 Kurs eğitimi · [2232 · 2233]',
  title: 'Minecraft <span class="hl">CraftForge</span>',
  lead: '<b>Beginner</b> — 8–9 yaş öğrenciler için: Minecraft’ta oyuncu olmaktan çıkıp yaratıcıya dönüşürler — kendi kahramanlarını ve evlerini, redstone mekanizmalarını ve Lua ile programladıkları bir Asistan robotu oluştururlar. <b>Intermediate</b> — 10–12 yaş öğrenciler için: data pack’lerle Minecraft dünyasının yasalarını, Python programlarıyla da köprüler, kuleler ve koca dünyalar inşa eden kodlar yazarlar. Dört modül: Beginner ve Intermediate kurs içeriği, kurs için ihtiyacın olan beceriler ve derslerin teknik tarafı.',
  facts: [
    ['🧑‍💻', '<b>Kendi hızında.</b> İlerlemen bu tarayıcıda kaydedilir. Her modül kısa bir kontrolle biter.'],
    ['⚡', '<b>Uygulama dahil.</b> Bir Minecraft yapısının nasıl yayınlandığını ve en sık karşılaşılan sorunu pratik yapman için bir Kodland Sparks simülasyonu.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Başlamadan önce:</b> önce <b>Yeni Eğitim Modeli (EM) ana eğitimini</b> tamamla. Bu kurs eğitimi ondan sonra gelir ve orada gördüklerinin üzerine kurulur: Backoffice ve öğretmen notları (Teacher Notes), Follow Mode ile Classroom, Kodland Sparks turu ve ders kalitesi.' },
  { kind:'warn', e:'🔄', html:'<b>Backoffice’teki ders içerikleri sürekli güncellenir.</b> Dersler, öğrencilerden ve eğitmenlerden gelen geri bildirimlerle sürekli iyileştirilir. Endişelenme: bir değişiklik olduğunda, dersi hazırlayabilmen için sana önceden haber verilecek.' }
];

/* ---------------- Modules ----------------
   Beginner course content → Intermediate course content → Skills for the course → technical side (+ final survey, added by shared/final-survey.js).
   The Skills module is drawn by assets/skills.js from COURSE.skills (end of this file). */
COURSE.modules = [
  { id:'beg', n:1, e:'⛏️', color:'#16A34A', title:'Kursun içeriği · Beginner',
    desc:'Kursun genel bilgileri, öğrencinin kazanımları ve Modül 1’in ilk dersi.',
    obj:'Minecraft CraftForge Beginner’ın ilk dersine hazırlan. Bu derste 8–9 yaş öğrenciler kendi skin’lerini oluşturur, Kodland Sparks’ta yayınlar, bu skin’i giyerek kursun dünyasına girer ve kendi evlerini inşa etmeye başlar.',
    offer:[['🧱','Kursun genel bilgilerini ve öğrencinin kazanımlarını öğren.'],['📖','İlk derste ne olduğunu öğren.'],['⚡','Sparks AI’ın nasıl kullanıldığını anla.'],['📘','İlk dersi ve öğretmen notlarını Backoffice’te gözden geçir.']],
    sections:[
      { id:'ov', e:'🧱', title:'Kurs', blocks:[
        { t:'meta', items:[['🧒','Yaş','8–9'],['⏱️','Ders','60 dk'],['📚','Program','40 ders · 10 modül'],['🌙','Dil','Lua']] },
        { t:'trio', items:[
          ['🎬','Önce sonuç','Her ders, bitmiş sonucu göstererek ve öğrencilerin ne öğreneceğini söyleyerek açılır. Ardından yolu kendi ekranında gösterir ve onlara adım adım rehberlik edersin.'],
          ['🛠️','Oyuncudan yaratıcıya','Bir oyunda kuralları başkası koymuştur. Burada öğrenci inşa eder, bir robotu programlar, mekanizmalar yapar — ve sonucu başkalarına gösterir.'],
          ['🔍','Hatalar sürecin bir parçasıdır','Bir şey çalışmadığında: <i>Ne görüyorum? Neden böyle? Neyi deneyeceğim? İşe yaradı mı?</i> Bazı derslerde, öğrencilerin nedeni kendilerinin bulması için senin ekranında planlı bir hata yer alır.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Öğrenciler 1. Dersten itibaren çalışmalarını portfolyoları olan <b>Kodland Sparks</b>’ta yayınlar. <b>Sparks AI</b> fikir ve geri bildirim önerir, ancak neyi alacağına öğrenci karar verir. Kartların içine yerleşiktir, bu yüzden öğrencilerin Sparks’ı ayrıca açmasına gerek yoktur; genellikle her görev için bir istek gönderirler.' }
      ]},
      { id:'goals', e:'🎓', title:'Öğrencinin kazanımları', blocks:[
        { t:'p', html:'Kursun sonunda öğrenci şu kazanımlara ulaşır:' },
        { t:'cards', cols:2, items:[
          ['🧱','Projeler oluşturur','Kodland Sparks portfolyosunda dokuzdan fazla proje ve yapıların, mekanizmaların ve programların bir arada çalıştığı kendi arazisini içeren bir mezuniyet projesi.'],
          ['🤖','Lua ile bir robotu programlar','Komutlar, argümanlar, değişkenler, döngüler, koşullar ve kendi fonksiyonları. Robot inşa eder, kazar, engellerden kaçar ve görevleri tamamlar — öğrenci de büyük bir görevi adımlara bölmeyi öğrenir.'],
          ['⚡','Mekanizmalar ve mantık kurar','Redstone, Minecraft’ın “elektrik sistemi” gibidir: anahtarlar, kablolar, lambalar, kapılar, pistonlar ve tuzaklar. Öğrenci “eğer–ise” mantığını öğrenir ve sonucu hemen görür.'],
          ['🏰','Yapılar ve oyunlar oluşturur','Şekil, renk ve ışık gibi ayrıntılara dikkat ederek yapılar inşa eder; sınıf arkadaşlarının da oynayabileceği, kendi kurallarına sahip bir mini oyun oluşturur.'],
          ['💬','Çalışmasını özgüvenle anlatır','Her dersin sonunda her şeyin nasıl çalıştığını açıklar ve mezuniyet projesini gruba sunar.'],
          ['🧠','Hayat becerileri','Yaratıcılık, takım çalışması (birbirinin oyunlarını oynamak ve geri bildirim vermek), iletişim ve eleştirel düşünme: hataları bulmak ve Sparks AI’ın ipuçlarını akıllıca kullanmak.']
        ]}
      ]},
      { id:'les', e:'📖', title:'İlk ders', blocks:[
        { t:'p', html:'Modül 1, <b>“İlk Ateş. Dünyam ve İlk Komutlar”</b>, <b>“Kahramanım ve evim”</b> projesiyle biter. İlk dersi aç ve bilmen gerekenleri, ana sonucu, rolünü ve dikkat edilmesi gerekenleri oku.' },
        { t:'lessons', key:'beg', items:[
          { tab:'M1D1', e:'🔥', h:'1. Ders — İlk Ateş', p:'Kursun ilk dersi (7 kart ve ödev). Öğrenciler launcher’ı başlatır, grupla tanışır, kendi skin’lerini çizip Sparks’ta yayınlar, dünyaya girmek için skin’i giyer ve bir adada kendi evlerini inşa etmeye başlar.',
            acc:[['📚','Bilmen gerekenler','<ul><li>Dersin akışı: bağlantı ve launcher → bizi neler bekliyor → launcher oyunu indirirken Sparks’ta skin → skin’i giy, dünyaya gir ve adaya ışınlan → evini inşa et → proje sunumu → kapanış ve ödev.</li><li><b>Skin stüdyosu</b> doğrudan ders kartının içinde açılır (tam ekran için <b>Expand</b> düğmesi). Öğrencinin Sparks’a gitmek için dersten çıkmasına gerek yoktur.</li><li>Launcher’da: <b>Create → Skins → kendi skin’i → Wear</b>, ardından dünya koduyla <b>Play</b> ve kendini görmek için <b>F5</b>.</li><li>Öğrenciler <b>yaratıcı modda</b> inşa eder: duvarlar, bir giriş ve takma adlarının yazılı olduğu bir tabela. Çatı ödevdir.</li></ul>'],
                 ['🎯','Ana sonuç','<ul><li>🏁 Skin <b>Sparks’ta yayınlanmış ve bağlantısı görevde</b>. Herkes buna yaklaşık 29. dakikada ulaşır; bu kart asla kısaltılmaz.</li><li>Her öğrenci dünyaya kendi skin’iyle girer ve adada durur.</li><li>Evin duvarları, bir girişi ve takma adın yazılı olduğu bir tabelası vardır.</li></ul>'],
                 ['🧑‍🏫','Senin rolün','<ul><li>Grubu tanı: kendinden bahset, herkese söz ver ve ders boyunca isimleri kullan.</li><li>Dersin hedefini yüksek sesle söyle: “Bugün herkes kendi skin’ini oluşturacak ve dünya onu tanıyacak.”</li><li>Sor: “Yaratmak, sadece oynamaktan nasıl farklıdır?” — bir oyunda kuralları başkası koymuştur; burada sen yaratırsın ve başkalarına gösterirsin.</li><li><b>Planlı hata, yalnızca senin ekranında:</b> <b>Wear</b>’a basmadan dünyaya gir → herkese benziyorsun. Nedenini sor, sonra düzelt. Öğrenciler bunu hemen doğru yapar.</li></ul>'],
                 ['📌','Dikkat edilmesi gerekenler','<ul><li>1. Derste birinin launcher’ı neredeyse kesinlikle açılmayacaktır. Skin tarayıcıda çizildiği için öğrenci çalışmaya devam eder, sen de bağımsız çalışma sırasında launcher’ı düzeltirsin.</li><li>Tam ekran stüdyonun içinde <b>Esc</b> çalışmaz: üstteki <b>Collapse</b> düğmesini kullan.</li><li>Çizim sonsuza kadar sürebilir: “Kusursuz değil, senin olsun. Evde bitirebilirsin.”</li><li>Bağlantıların yalnızca ekranda gösterilmediğini, gerçekten ulaştığını Backoffice’te kontrol et.</li></ul>'],
                 ['⚙️','Teknik konular','<ul><li>Bir gün önce launcher bağlantılarını grup sohbetine gönder ve öğrencilerden önceden kurmalarını iste.</li><li>Tüm yolu kendin dene: Sparks’ta skin → yayınla → Skins → Wear → kodla dünyaya gir → adaya ışınlan.</li><li>Dünya kodu: <b>Welcome to CraftForge</b> (Play sekmesi). Işınlanma komutu öğretmen notlarında ve kartta yer alır.</li><li>Ödev: evi bitirmek, ekran görüntüsü almak (Windows’ta <b>Win + Print Screen</b>, Mac’te <b>Cmd + Shift + 4</b>), bunu doğrudan ödev kartına yerleşik <b>Sparks AI</b>’a eklemek ve bir istek göndermek. Ardından ekran görüntüsünü, neyi bitirdiğini ve Sparks’ın ne önerdiğini anlatan bir cümleyle birlikte göndermek.</li></ul>']] },
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'Her dersin ilk öğretmen notunda tam plan yer alır: özet, ana sonuç, her kartın zamanlaması, senin rolün ve riskler. 1. Derste ayrıca bir hazırlık videosu vardır. <b>Dersten önce tüm öğretmen notlarını oku.</b>' }
      ]},
      { id:'bo', e:'📘', title:'İlk dersi Backoffice’te gözden geçir', blocks:[
        { t:'p', html:'Kontrolden önce kursu Backoffice’te aç ve ilk dersi kendi hızında oku — etkinlik kartları ve öğretmen notları orada. Süre sınırı yok.' },
        { t:'link', href:'https://bo.kodland.org/courses/2232', e:'📘', title:'Kursu Backoffice’te aç', small:'[2232] Minecraft CraftForge Beginner — dersler ve öğretmen notları' },
        { t:'callout', kind:'warn', e:'🔄', html:'Backoffice’teki ders içerikleri, öğrencilerden ve eğitmenlerden gelen geri bildirimlere göre güncellenmeye devam edecek. Bir değişiklik olduğunda, dersi hazırlayabilmen için sana önceden haber verilecek.' }
      ]}
    ]},

  { id:'int', n:2, e:'📜', color:'#0EA5E9', title:'Kursun içeriği · Intermediate',
    desc:'Kursun genel bilgileri, öğrencinin kazanımları ve Modül 1’in ilk dersi.',
    obj:'Minecraft CraftForge Intermediate’ın ilk dersine hazırlan. Bu derste 10–12 yaş öğrenciler Minecraft dünyası için ilk yasalarını oluşturur — bir data pack içinde bir tarif — ve bunu oyunda test edip Kodland Sparks’ta yayınlar.',
    offer:[['🧱','Kursun genel bilgilerini ve öğrencinin kazanımlarını öğren.'],['📖','İlk derste ne olduğunu öğren.'],['📦','Data pack’in ne olduğunu ve öğrencilerin onunla nasıl çalıştığını anla.'],['📘','İlk dersi ve öğretmen notlarını Backoffice’te gözden geçir.']],
    sections:[
      { id:'ov', e:'🧱', title:'Kurs', blocks:[
        { t:'meta', items:[['🧒','Yaş','10–12'],['⏱️','Ders','90 dk'],['📚','Program','40 ders · 10 modül'],['🐍','Dil','Python']] },
        { t:'trio', items:[
          ['🎬','Önce sonuç','Her ders, bitmiş sonucu göstererek ve hedefi yüksek sesle söyleyerek açılır. Ardından tüm yolu kendi ekranında gösterir ve öğrencilere adım adım rehberlik edersin.'],
          ['📜','Oyuncudan yaratıcıya','Normalde oyuncu dünyanın kurallarına uyar. Burada öğrenci bu kuralları kendisi yazar: tarifler, droplar, komutlar ve ardından inşa eden Python programları.'],
          ['🔍','Hatalar sürecin bir parçasıdır','Dünya tepki vermediğinde: <i>Ne görüyorum? Neden böyle? Neyi deneyeceğim? İşe yaradı mı?</i> Derslerde, öğrencilerin nedeni kendilerinin bulması için planlı kontroller yer alır.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Öğrenciler her derste çalışmalarını portfolyoları olan <b>Kodland Sparks</b>’ta yayınlar. <b>Sparks AI</b> fikir ve test senaryoları önerir, ancak neyi alacağına öğrenci karar verir.' }
      ]},
      { id:'goals', e:'🎓', title:'Öğrencinin kazanımları', blocks:[
        { t:'p', html:'Kursun sonunda öğrenci şu kazanımlara ulaşır:' },
        { t:'cards', cols:2, items:[
          ['🧱','Projeler oluşturur','Kodland Sparks portfolyosunda dokuzdan fazla proje ve özgün bir mezuniyet projesi.'],
          ['🐍','İnşa eden Python','Oyun dünyasında köprüler, kuleler ve desenler oluşturan Python programları yazar. Komutlar, argümanlar, değişkenler, veri türleri, döngüler, koşullar ve fonksiyonlar gündelik araçlara dönüşür.'],
          ['📜','Dünyanın kuralları','Data pack’lerle Minecraft için kendi yasalarını belirler: tarifler, özel komutlar, zamanlayıcılar, olaylar ve puanlama.'],
          ['🌍','Üreteçler ve oyunlar','Dünyanın koca parçalarını (chunk) oluşturan algoritmalar yazar ve başkalarının oynayacağı mini oyunlar yapar.'],
          ['🚀','Bir fikri Demo Day’e taşır','Bir projeyi fikir aşamasından grup önünde bir sunuma kadar götürür ve kodun nasıl çalıştığını açıklar.'],
          ['🧠','Hayat becerileri','Yaratıcılık, takım çalışması (birbirinin projelerini test etmek), iletişim ve eleştirel düşünme: hataları bulmak ve Sparks AI’ın cevaplarını kopyalamak yerine değerlendirmek.']
        ]}
      ]},
      { id:'les', e:'📖', title:'İlk ders', blocks:[
        { t:'p', html:'Modül 1, <b>“Dünyanın Kodu. İlk Programlar ve Dünya Yasaları”</b>, <b>“Kod Anıtı”</b> projesiyle biter. İlk ders <b>bir data pack içindeki dünya yasaları</b> hakkındadır. Onu aç ve bilmen gerekenleri, ana sonucu, rolünü ve dikkat edilmesi gerekenleri oku.' },
        { t:'lessons', key:'int', items:[
          { tab:'M1D1', e:'📜', h:'1. Ders — Dünyanın Kodundaki İlk İz', p:'Kursun ilk dersi (8 kart ve ödev). Öğrenciler launcher’ı başlatır, grupla tanışır, yasa eğitmenini dener, Nether üzerinden dünyaya girer, bir data pack içinde ilk yasalarını — bir tarif — oluşturur, test eder ve Sparks’ta yayınlar. Ardından Sparks AI ile bir üs planlar ve onu inşa ederler.',
            acc:[['📚','Bilmen gerekenler','<ul><li><b>Data pack</b>, dünya için bir yasalar bütünüdür. Yasalar dünyanın dışında, launcher stüdyosunda oluşturulur ve dünya onları her girişte çalıştırır.</li><li>Yasa türleri: <b>tarif</b>, <b>drop</b>, girişte çalışan <b>komut</b>, <b>başarım</b>. Bugün: bir tarif.</li><li>Yol: <b>Esc</b> ve kaydederek dünyadan çık → <b>Create → Data packs → Create data pack → Empty</b> → <b>Add → Recipe</b> → çalışma masası, eşyalar, sonuç → <b>Save</b>.</li><li>Dünya kodu <b>Play</b> sekmesine girilir. Öğrenciler yaratıcı modda inşa eder.</li></ul>'],
                 ['🎯','Ana sonuç','<ul><li>Herkes yaklaşık 00:45’e kadar kendi tarifini içeren bir data pack kaydetmiştir.</li><li>🏁 Data pack <b>Sparks’ta yayınlanmış ve bağlantısı görevde</b> (“Yasayı imzala” kartı, yaklaşık 01:00’e kadar). Bu kart asla kısaltılmaz.</li><li>Öğrenci eşyaya kendi adını vermiş ve onu dünyada bir çalışma masasında üretmiştir.</li></ul>'],
                 ['🧑‍🏫','Senin rolün','<ul><li>Oyun inerken grubu tanı; ders boyunca isimleri kullan.</li><li>Hedefi yüksek sesle söyle: “Bugün herkes Minecraft için kendi yasasını oluşturacak, oyunda test edecek ve portfolyosunda yayınlayacak.”</li><li>Tarifleri dikte etme: fikirler farklı olmalı — projeyi kişisel yapan budur. Sor: “Neden bu eşya? Kimin işine yarayacak?”</li><li><b>Planlı kontrol:</b> çalışma masasından bir eşyayı çıkar → ödül kaybolur. Nedenini sor, sonra dört soruyu kullan. Yalnızca ilk seferde başaranı değil, nedeni bulan öğrenciyi de öv.</li></ul>'],
                 ['📌','Dikkat edilmesi gerekenler','<ul><li>Data pack kaydedilmiyor → formun üç bölümünden biri boş.</li><li>Yasa çalışmıyor → dünya açıkken kaydedilmiş: çık ve tekrar gir.</li><li>Tarif üretilmiyor → eşyalar formdaki düzende değil veya çalışma masası yerine envanterde üretilmiş.</li><li>Bağlantı açılmıyor → “Who can see it?” <b>Everyone</b> değildi: tekrar yayınla.</li></ul>'],
                 ['⚙️','Teknik konular','<ul><li>Bir gün önce launcher bağlantılarını grup sohbetine gönder.</li><li>Tüm yolu kendin dene: dünya kodu → kıyı → kaydederek çık → tarifli data pack → dünyaya geri dön → çalışma masası → ödül → Sparks’ta yayınla.</li><li>Dünya kodu: <b>Welcome to KodlandCraft</b>.</li><li>Ödev: bir yasa daha eklemek (tarifi değiştirmek, yeni bir tarif ya da bir komut/drop), test etmek, güncellemeyi yayınlamak ve bağlantıyı göndermek.</li></ul>']] },
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'Her dersin ilk öğretmen notunda tam plan yer alır: özet, ana sonuç, her kartın zamanlaması, senin rolün ve riskler. 1. Derste ayrıca bir hazırlık videosu vardır. <b>Dersten önce tüm öğretmen notlarını oku.</b>' }
      ]},
      { id:'bo', e:'📘', title:'İlk dersi Backoffice’te gözden geçir', blocks:[
        { t:'p', html:'Kontrolden önce kursu Backoffice’te aç ve ilk dersi kendi hızında oku — etkinlik kartları ve öğretmen notları orada. Süre sınırı yok.' },
        { t:'link', href:'https://bo.kodland.org/courses/2233', e:'📘', title:'Kursu Backoffice’te aç', small:'[2233] Minecraft CraftForge Intermediate — dersler ve öğretmen notları' },
        { t:'callout', kind:'warn', e:'🔄', html:'Backoffice’teki ders içerikleri, öğrencilerden ve eğitmenlerden gelen geri bildirimlere göre güncellenmeye devam edecek. Bir değişiklik olduğunda, dersi hazırlayabilmen için sana önceden haber verilecek.' }
      ]}
    ]},

  {
    id: 'skills',
    n: 3,
    e: '🧩',
    color: '#8B5CF6',
    title: 'Kurs için gereken beceriler',
    desc: 'Minecraft dünyasına dalış · Programlama mantığı · Python ile programlama pratiği · Veri paketleri: dünyanın yasaları',
    obj: 'Bu kursta bir eğitmenin ihtiyaç duyduğu beceriler dört blokta: Minecraft dünyası, programlama mantığı, Python pratiği ve data pack’ler. Her blok kısa bir alıştırma testiyle biter; bir sonrakinin kilidini açmak için %70 gerekir.',
    offer: [
      ['🌍', 'Minecraft dünyasına dalış'],
      ['🧠', 'Programlama mantığı'],
      ['🐍', 'Python ile programlama pratiği'],
      ['📜', 'Veri paketleri: dünyanın yasaları']
    ],
    sections: [
      {
        id: 'skx',
        e: '🧩',
        title: 'Kurs için gereken beceriler',
        blocks: [
          { t:'skills' }
        ]
      }
    ]
  },

  { id:'tech', n:4, e:'⚙️', color:'#F03D9E', title:'Derslerin teknik tarafı',
    desc:'Kodland Launcher, güçlü bir başlangıç, Sparks’ta yayınlama ve en sık karşılaşılan sorunlar.',
    obj:'Bir Minecraft CraftForge dersini teknik olarak neyin çalıştırdığını öğren: Kodland Launcher, içerikten önce launcher kontrolü, yayınlamaya ve çalışmaları göstermeye ayrılan son dakikalar, öğrencilerin proje bağlantısını nerede bulduğu ve en sık karşılaşılan sorunların çözümleri.',
    needs:['mcPublish','mcPublishDp'],
    offer:[['🟩','Kodland Launcher’ı indir, kur ve giriş yap.'],['🚀','Launcher kontrolünü içerikten önce yap ve derse sonuçla başla.'],['📤','Her öğrencinin projesini Sparks’ta yayımlamasını ve bağlantısını göndermesini sağla.'],['🛠️','Launcher ve Minecraft ile ilgili sık karşılaşılan sorunları çöz.']],
    sections:[
      { id:'focus', e:'🎯', title:'Bir dersi başarılı kılan 3 nokta', blocks:[
        { t:'p', html:'Bunlar, ürün ekibinin Minecraft kursları için belirlediği odak alanlarıdır. Her birini aç:' },
        { t:'acc', items:[
          ['🎬','Önce sonucu göster — ve yaratmanın oynamaktan neden farklı olduğunu','<p>Dersin ilk dakikalarında <b>tamamlanmış projeyi göster</b> ve öğrencilere o derste neler öğreneceklerini anlat.</p><ul><li>Brifing kartını kullan: “Bakın, bir saat sonra neleriniz olacak: kendi zanaatkârınız ve adada kendi eviniz.”</li><li>Bir proje inşa etmenin <b>sadece oynamaktan nasıl farklı olduğunu</b> açıkla: bir oyunda kuralları başkası koymuştur; burada öğrenci yaratır ve başkalarına gösterir.</li><li>Bir veya iki öğrenciye şu soruyu sor: “Sizce bir şey üretmek, sadece oyun oynamaktan nasıl farklı?”</li></ul>'],
          ['🟩','Giriş ve launcher kontrolü içerikten önce gelir','<p>Bağlantı ve launcher kontrolünü içerik bölümünden <b>önce</b> yap; böylece sen grubu tanırken oyun iner.</p><ul><li>Bağlantı: bir dakika — kamera, mikrofon, “Merhaba!”.</li><li>Launcher: 2–3 dakika — bağlantıları gönder, girişi kendi ekranında göster, yeşil çubuk görününce sohbete “+” yazmalarını iste.</li><li>İndirmenin bitmesini bekleme ve bir iki “−” için grubu bekletme: bağımsız çalışma sırasında onlara geri dön.</li><li>2. Dersten itibaren: “Launcher’ı açın ve dünyanızı başlatın — biz konuşurken yüklensin.”</li></ul>'],
          ['⏱️','Son 7–10 dakikayı koru','<p>Son <b>7–10 dakika</b> yayınlamaya, çalışmaları göstermeye ve geri bildirime ayrılır — inşa etmeye verilmez.</p><ul><li>Kesin duraklar kullan: iki dakika uyarısı, ardından “Durun, eller klavyeden çekilsin. Sunum zamanı!” ve hemen ilk öğrencinin adını söyle.</li><li>3 katılımcı çalışmasını gösterir; grup somut geri bildirim verir: isim, neyin işe yaradığı, bir öneri.</li><li>Kapanış, yansıma, sonraki ders ve ödevle bitir — bunlar asla kısaltılmaz.</li></ul>']
        ]}
      ]},
      { id:'launcher', e:'🟩', title:'Kodland Launcher', blocks:[
        { t:'p', html:'Öğrenciler Minecraft’ı <b>Kodland Launcher</b> üzerinden açar: oyunu indirir, kurs dünyasını açar ve skin oluşturup giydikleri yer de burasıdır. İlk dersinden önce bilgisayarında kurulu ve hazır olması gerekir.' },
        { t:'callout', kind:'warn', e:'🔑', html:'<b>Giriş bilgilerin:</b> launcher’ı indirmek için herhangi bir giriş bilgisine ihtiyacın yok. Giriş yapmak için eğitmen olarak <b>Operasyon veya Eğitim departmanı</b> tarafından sağlanan <b>Kodland Sparks giriş bilgilerine</b> ihtiyacın var. Öğrenciler, Kodland platformunda kullandıkları hesapla giriş yapar — yeni bir hesaba ihtiyaçları yoktur.' },
        { t:'link', href:'https://portfolio.kodland.org/launcher/download#guide', e:'⬇️', title:'İndirme sayfası ve resmi rehber', small:'portfolio.kodland.org/launcher/download — Windows ve Mac' },
        { t:'cards', cols:2, items:[
          ['🪟','Windows 10 / 11','<ol><li>Kurulum dosyasını indir.</li><li>İndirilen dosyayı aç.</li><li>Mavi uyarı ekranında <b>More info → Run anyway</b>’e tıkla, ardından kurulum adımlarını izle.</li></ol>'],
          ['🍎','macOS 13 veya üzeri','<ol><li>İşlemcine uygun dosyayı indir (Apple → <b>About This Mac</b>: M1–M4 = Apple Silicon; değilse Intel).</li><li>İndirilen dosyayı aç ve <b>Kodland Launcher</b>’ı <b>Applications</b> klasörüne sürükle. O pencereden açma.</li><li><b>Terminal</b>’i aç, aşağıdaki satırı yapıştır ve Return’e bas. Hiçbir çıktı olmaması normaldir.</li><li>Launcher’ı <b>Applications</b> klasöründen aç.</li></ol>']
        ]},
        { t:'p', html:'<code>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</code>' },
        { t:'steps', items:[
          ['Giriş yap','<b>Sign in</b>’e tıkla. Bir tarayıcı sayfası açılır: <b>Sign in with Kodland</b>’e tıkla ve Kodland Sparks giriş bilgilerini kullan (öğrenciler Kodland platformu hesaplarını kullanır). Tarayıcı açılmazsa, kısa bir kod almak için düğmenin altındaki bağlantıyı kullan (beş dakika geçerlidir).'],
          ['Oyunu indir','Launcher oyunu birkaç adımda indirir. Çalışmaya devam etmesine izin ver.'],
          ['Oyna','Kurulum tamamlandığında <b>Play</b> düğmesine bas. İlk açılış bir dakikaya kadar sürebilir. Dünya kodu <b>Play</b> sekmesine girilir.'],
          ['Güncellemeler','Launcher güncellenmezse, indirme sayfasından en son sürümü eskisinin üzerine kur. Dünyalar ve skin’ler yerinde kalır.']
        ]},
        { t:'acc', open:false, items:[
          ['⬇️','Doğrudan indirme bağlantıları (ders kartındakiler)','<ul><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-win-x64-setup.exe" target="_blank" rel="noopener">Windows</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-arm64.dmg" target="_blank" rel="noopener">Mac — Apple Silicon (M1–M4)</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-x64.dmg" target="_blank" rel="noopener">Mac — Intel</a></li></ul>']
        ]}
      ]},
      { id:'l1', e:'🧯', title:'Bir öğrencinin launcher’ı çalışmadığında', blocks:[
        { t:'p', html:'1. Derste birinin launcher’ı neredeyse kesinlikle açılmayacaktır. Bu sorun değil: <b>önce diğerlerine bir görev ver</b>, ardından öğrenciyle ilgilen. Ekranını paylaşmasını iste ve ona sesli olarak rehberlik et: “Şimdi ne görüyorsun? Bu düğmeye tıkla.” Birkaç dakikada çözülmezse: “Şimdilik benim ekranımı takip et, birazdan sana döneceğim.”' },
        { t:'acc', open:false, items:[
          ['📥','Dosya inmiyor','Karttaki bağlantıyı sohbete tekrar gönder ve öğrencinin kendi sistemine uygun dosyayı seçtiğini kontrol et.'],
          ['🍎','Mac launcher’ı açmıyor','İlk karttaki Terminal satırını çalıştır ve launcher’ı <b>Applications</b> klasöründen yeniden aç.'],
          ['🪟','Windows dosyanın açılıp açılmayacağını soruyor','<b>More info → Run anyway</b>.'],
          ['🔑','Öğrenci giriş yapamıyor','Derslerdeki Kodland girişinin aynısı — yeni hesap yok. Giriş penceresi tarayıcıda açılır ve çoğu zaman diğer pencerelerin arkasında kalır.'],
          ['⏳','Oyun uzun süre yükleniyor veya indirme duruyor','İlk indirme uzun sürer, bu normaldir. Çubuk durursa: interneti kontrol et, launcher’ı kapatıp yeniden aç — indirme kaldığı yerden devam eder.'],
          ['🖌️','Launcher hiç çalışmadı','1. Derste öğrenci yine de skin’i Sparks’ta (tarayıcıda) çizer ve yayınlar, böylece ana sonuca ulaşır. Dünyada ise senin ekranını takip eder. Dersten sonra launcher’ı açması için ona yardım et.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'Birkaç öğrencide aynı hata varsa, çözümü herkese bir kez göster.' }
      ]},
      { id:'req', e:'💻', title:'Bilgisayar gereksinimleri', blocks:[
        { t:'p', html:'Bir öğrencinin Minecraft CraftForge için ihtiyaç duyduğu şeyler bunlardır. Bir öğrenci oyunu kurarken veya çalıştırırken sorun yaşadığında işe yarar:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Bilgisayar ve sistem','<b>Windows 10/11 (64 bit)</b> veya <b>macOS 13 ya da üzeri</b> yüklü masaüstü ya da dizüstü bilgisayar. Apple Silicon (M1 veya daha yeni) ya da Intel işlemcili Mac — ders kartında her biri için ayrı bir indirme bağlantısı vardır.'],
          ['🧠','Bellek ve işlemci','Harici ekran kartıyla <b>8 GB RAM</b> veya dahili grafikle <b>12 GB</b>. <b>4 çekirdekli</b> bir işlemci.'],
          ['🎮','Grafik ve disk','<b>Vulkan 1.3</b> destekli ve <b>2 GB</b> video belleğine sahip bir ekran kartı. <b>5 GB</b> boş disk alanı.'],
          ['🎧','Bağlantı ve ekipman','Görüntülü görüşmeleri kaldırabilecek stabil bir internet bağlantısı. İki tuşlu fare, klavye, mikrofonlu kulaklık ve kamera.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Kodland Sparks’ta yayınlama (Beginner)', blocks:[
        { t:'p', html:'Yayınlama birçok dersin ana sonucudur: öğrenci çalışmasını Sparks’ta yayınlar ve bağlantıyı ders kartına yapıştırır. Modül 1’de iki yol vardır:' },
        { t:'cards', cols:2, items:[
          ['🎨','Skin (1. Ders)','1. Derste skin stüdyosu kartın içindedir: <b>Publish</b> → skin’e bir ad ver → tekrar <b>Publish</b>. Bir skin dosyası Sparks’tan da yayınlanabilir: <b>Publish project → Minecraft skin</b> → ad → <b>Model</b> (Steve veya Alex) → <b>Skin file</b> (64×64 PNG) → <b>Publish</b>.'],
          ['🖼️','Bir yapı','Yapının ekran görüntüsü (F5, F1) → Sparks → <b>Publish project</b> → <b>Image</b> → ad → <b>Drawing</b>: ekran görüntüsünü yükle → <b>Publish</b>.']
        ]},
        { t:'steps', items:[
          ['Bağlantı nerede','Proje bağlantısı, projenin sayfa adresidir. Öğrenci Sparks’ta <b>My projects</b> bölümüne gider, <b>yayımladığı projeyi</b> açar ve bağlantıyı <b>tarayıcının adres çubuğundan</b> kopyalar: <code>portfolio.kodland.org/nickname/…</code>.'],
          ['Ders kartına yapıştır','Bu bağlantı, Kodland platformundaki ders kartına yapıştırılır (örneğin, “Kodland Sparks’taki Skin’imin bağlantısı”).'],
          ['Görünürlüğü seç','<b>Public</b> akışta ve portfolyoda görünür. <b>Friends only</b> arkadaşlar ve öğretmenler içindir. <b>Only me</b> projeyi gizli yapar — bağlantıyı başka kimse açamaz, sen bile.'],
          ['İki farklı adım','Sparks’ta yayınlamak ve Kodland platformunda bağlantıyı göndermek <b>iki farklı adımdır</b>. Bağlantıların gerçekten ulaştığını Backoffice’te kontrol et.']
        ]},
        { t:'sim', flag:'mcPublish', src:'minecraft-publish/Minecraft_Publish.html?flow=image', e:'⚡', badge:'Simülasyon', title:'Kodland Sparks’ta bir skin ve bir yapı yayınla', text:'Kodland Sparks’ın ve ders kartının bir kopyası: öğrenci olarak bir skin yayınlar, bağlantısını My projects’te bulur, platformdaki karta yapıştırır, bir yapının ekran görüntüsünü Image projesi olarak yayınlar ve açılmayan bir bağlantıyı düzeltirsin. Yaklaşık 5 dakika sürer. Bitirdiğinde modül kontrolü açılır.' }
      ]},
      { id:'publishdp', e:'📤', title:'Data pack’i Kodland Sparks’ta yayınlama (Intermediate)', blocks:[
        { t:'p', html:'Sparks öğrencilerin portfolyosudur: kursun tüm projeleri orada saklanır ve <b>Sparks AI</b> da oradadır. Öğrenciler yayınlamak ve ipucu istemek için her derste ona geri döner. Data pack <b>launcher düzenleyicisinden</b> yayınlanır:' },
        { t:'steps', items:[
          ['Save’in yanındaki Publish','Launcher’da data pack’in üzerinde <b>Create → Data packs → Edit</b>, ardından mor <b>Save</b> düğmesinin yanındaki <b>Publish</b>.'],
          ['Ad ve “Who can see it?” → Everyone','“Publish to your profile” penceresinde adı yaz ve <b>Everyone</b>’ı seç: bağlantı ancak bu şekilde, öğrencinin hesabına giriş yapmadan başkaları için de açılır.'],
          ['Copy link','“Published! It is on your profile.” mesajı görününce <b>Copy link</b>’e, ardından <b>Done</b>’a tıkla ve bağlantıyı platformdaki ders kartına yapıştır (“Kodland Sparks’taki Yasamın bağlantısı”).'],
          ['Bağlantıyı mı kaybettin?','<b>Open on Sparks</b> (pencerede veya düzenleyicinin üstünde), öğrencinin profilindeki proje sayfasını açar: bağlantı, tarayıcı çubuğundaki adrestir.'],
          ['İki farklı adım','Sparks’ta yayınlamak ve Kodland platformunda bağlantıyı göndermek <b>iki farklı adımdır</b>. Bağlantıların gerçekten ulaştığını Backoffice’te kontrol et.'],
          ['Her güncelleme yeniden yayınlanır','Öğrenci bir yasa eklediğinde kaydeder, test eder ve güncellemeyi yeniden yayınlar.']
        ]},
        { t:'sim', flag:'mcPublishDp', src:'minecraft-publish/Minecraft_Publish.html?flow=datapack&sim=mcPublishDp', e:'⚡', badge:'Simülasyon', title:'Kodland Sparks’ta bir data pack yayınla', text:'Kodland Launcher’ın ve ders kartının bir kopyası: öğrenci olarak bir data pack yayınlar, bağlantısını kopyalar, platformdaki karta yapıştırır, açılmayan bir bağlantıyı düzeltir ve kopyalanmamış bir bağlantıyı bulursun. Yaklaşık 4 dakika sürer. Bitirdiğinde modül kontrolü açılır.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Bir şey ters gittiğinde', blocks:[
        { t:'acc', open:false, items:[
          ['🎨','Skin “Skins” bölümünde yok','Skin’in Sparks’ta yayınlandığını ve launcher’ın aynı hesabı kullandığını kontrol et. <b>Skins</b> bölümünü kapatıp yeniden aç.'],
          ['👕','Öğrenci oyun açıkken “Wear”a bastı','Launcher, skin’in oyun yeniden başladığında görüneceğini söyler: dünyadan çık ve <b>Play</b> ile tekrar katıl — bu, oyunu yeniden başlatır.'],
          ['📍','Işınlanma çalışmadı','Öğrenciden ekranını paylaşmasını iste: genellikle komut eksiktir veya son sayının önündeki eksi işareti unutulmuştur.'],
          ['⛶','Öğrenci tam ekran stüdyodan çıkamıyor','Stüdyonun üstündeki <b>Collapse</b>’a tıkla — içeride <b>Esc</b> çalışmaz.'],
          ['🔒','Öğrencinin bağlantısı açılmıyor','Proje muhtemelen <b>Only me</b> olarak kaydedilmiştir (<b>Private project</b> etiketi görünür). Öğrenciden şunu yapmasını iste: <b>My projects → projeyi aç → Edit → Public → Publish</b>. Bağlantı aynı kalır.'],
          ['🖼️','Öğrenci ekran görüntüsünü bulamıyor','Öğrenciler ekran görüntüsünü Windows’ta <b>Win + Print Screen</b> ile alır (<b>Resimler → Ekran Görüntüleri</b> klasörüne kaydedilir), Mac’te ise <b>Cmd + Shift + 4</b> ile alır (masaüstüne kaydedilir). Şu an bulunamazsa öğrenci daha sonra evde ekler.'],
          ['💾','Data pack kaydedilmiyor','Formun üç bölümünün de dolu olduğunu kontrol et: eşyanın nerede üretildiği, içine ne girdiği ve ne çıktığı.'],
          ['🔁','Yasa bir düzenlemeden sonra çalışmıyor','<b>Save</b>’e tıkla, dünyadan çık ve tekrar gir — yasalar dünyaya girerken uygulanır.'],
          ['🧩','Tarif üretilmiyor','Eşyalar formdaki düzende değil veya öğrenci çalışma masası yerine envanterde üretim yapıyor.'],
          ['🔗','Öğrenci bağlantıyı kopyalamadan pencereyi kapattı','Data pack düzenleyicisinin üstündeki <b>Open on Sparks</b>’a tıkla: proje sayfası açılır ve bağlantı, tarayıcı çubuğundaki adrestir.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Her ders için teknik kontrol listesi', blocks:[
        { t:'check', title:'✅ Teknik kontrol listem', groups:[
          { h:'☑️ Dersten önce', items:['Dersin tüm öğretmen notlarını okudum ve 1. Ders için hazırlık videosunu izledim.','Launcher’ım kurulu ve giriş yapılmış durumda; dersin yolunu kendim denedim.','1. Dersten önce launcher bağlantılarını grup sohbetine gönderdim.'] },
          { h:'🎬 Ders sırasında', items:['Bağlantı ve launcher kontrolünü içerikten önce yaptım.','İlk dakikalarda bitmiş sonucu ve dersin hedefini gösterdim.'] },
          { h:'📤 Dersin sonunda', items:['Son 7–10 dakikayı yayınlamaya, çalışmaları göstermeye ve geri bildirime ayırdım.','Herkes yayınlanan projenin bağlantısını ders kartına gönderdi.','Çalıştıklarını kontrol etmek için bazı bağlantıları açtım.'] }
        ]}
      ]},
      { id:'videos', e:'🎬', title:'Mükemmel autoQA’ya sahip örnek dersler', blocks:[
        { t:'p', html:'Mükemmel autoQA’ya sahip bir dersin nasıl göründüğünü izle: dersin dinamiği, yapısı ve eğitmenin grubu nasıl yönettiği.' },
        { t:'videos', items:[
  ['Modül 1 · Ders 1', '1LjUZSxPBLqG_l7t-aEy5Rm42Rr21Js_f'],
  ['Modül 1 · Ders 2', '1DrKI-oktSC6M-TEgjmbyH9zq92sKxKQO'],
  ['Modül 1 · Ders 3', '1YWsFmDUR0S3HHz4x1bhs-2Uwk006s80a']
] },
        { t:'callout', kind:'warn', e:'🔄', html:'<b>Not:</b> Dersler sürekli güncellendiği için bu derslerin içeriği Backoffice’te göreceğinden farklı olabilir. Ancak dersin dinamiği, yapısı ve kalitesi aynı kalmalıdır: kendi derslerin için ilham alabileceğin iyi örneklerdir.' }
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ----------------
   The Skills module has no separate check: its four blocks end with their own practice checks (COURSE.skills). */
COURSE.quiz = {
  beg:[
    { q:'Minecraft CraftForge Beginner kimler içindir ve her ders ne kadar sürer?',
      o:['8–9 yaş öğrenciler için, 60 dakikalık grup dersleri.','10–12 yaş öğrenciler için, 90 dakikalık dersler.','13–17 yaş öğrenciler için, 90 dakikalık dersler.'],
      a:0, e:'Beginner, 8–9 yaş öğrenciler içindir: grupla yapılan 60 dakikalık 40 ders.' },
    { q:'Öğrenciler Asistan robotu hangi programlama diliyle programlar?',
      o:['Python.','Scratch blokları.','Lua.'],
      a:2, e:'Asistan robot Lua ile programlanır: komutlar, argümanlar, değişkenler, döngüler, koşullar ve fonksiyonlar.' },
    { q:'Bir ders nasıl başlar?',
      o:['Kimse dünyaya girmeden önce redstone hakkında teoriyle.','Bitmiş sonucu göstererek, hedefi söyleyerek ve yaratmanın sadece oynamaktan nasıl farklı olduğunu açıklayarak.','Öğrenciler bir örnek görmeden hemen inşa etmeye başlar.'],
      a:1, e:'Önce sonuç: öğrenciler nereye gittiklerini ve yaratmanın oynamaktan neden farklı olduğunu görür.' },
    { q:'Öğrenci kurstan neyle ayrılır?',
      o:['Yazılı bir final sınavıyla.','Kodland Sparks portfolyosunda dokuzdan fazla proje ve gruba sunulan bir mezuniyet projesiyle — kendi arazisi.','Yalnızca 1. Dersteki evle.'],
      a:1, e:'Portfolyoda dokuzdan fazla proje ve yapıların, mekanizmaların ve programların birlikte çalıştığı bir mezuniyet projesi.' },
    { q:'Sparks AI’ın derslerdeki rolü nedir?',
      o:['Projeyi öğrenci yerine inşa eder.','Fikir ve geri bildirim önerir; neyi alacağına öğrenci karar verir.','Dersi eğitmen yerine değerlendirir.'],
      a:1, e:'Sparks önerir, öğrenci karar verir — genellikle ders başına bir istek.' }
  ],
  int:[
    { q:'Minecraft CraftForge Intermediate kimler içindir ve her ders ne kadar sürer?',
      o:['8–9 yaş öğrenciler için, 60 dakikalık dersler.','10–12 yaş öğrenciler için, 90 dakikalık grup dersleri.','13–17 yaş öğrenciler için, 60 dakikalık dersler.'],
      a:1, e:'Intermediate, 10–12 yaş öğrenciler içindir: grupla yapılan 90 dakikalık 40 ders.' },
    { q:'Öğrenciler kursta hangi programlama dilini kullanır?',
      o:['Python.','Lua.','JavaScript.'],
      a:0, e:'Öğrenciler Minecraft dünyasında inşa eden Python programları yazar.' },
    { q:'Bu kursta data pack nedir?',
      o:['Öğrencinin yapılarının ekran görüntülerini içeren bir dosya.','Minecraft’ın her girişte çalıştırdığı, dünya için bir yasalar bütünü (tarifler, droplar, komutlar…).','İndirilecek hazır dünyalardan oluşan bir paket.'],
      a:1, e:'Data pack bir yasalar bütünüdür: öğrenci dünyaya her girdiğinde dünya onları çalıştırır.' },
    { q:'Öğrenci kurstan neyle ayrılır?',
      o:['Yazılı bir final sınavıyla.','Kodland Sparks portfolyosunda dokuzdan fazla proje ve Demo Day’de sunulan özgün bir mezuniyet projesiyle.','Yalnızca 1. Dersteki data pack ile.'],
      a:1, e:'Portfolyoda dokuzdan fazla proje ve fikirden Demo Day’e taşınan özgün bir proje.' },
    { q:'Öğrenciler Sparks AI’ı nasıl kullanmalıdır?',
      o:['Cevaplarını olduğu gibi kopyalamalıdır.','Önerilerini değerlendirmeli ve neyi alacaklarına karar vermelidir.','Hiç kullanmamalıdır.'],
      a:1, e:'Sparks fikir ve test senaryoları önerir; öğrenci bunları kopyalamak yerine değerlendirir.' }
  ],
  skills:[],
  tech:[
    { q:'Bağlantı ve launcher kontrolünü ne zaman yaparsın?',
      o:['Dersin başında, içerikten önce; böylece sen grubu tanırken oyun iner.','Dersin ortasında, öğrencilerin Minecraft’a ihtiyacı olduğunda.','Sonunda, dersten zaman almasın diye.'],
      a:0, e:'İçerikten önce: sen grubu tanırken oyun iner.' },
    { q:'Eğitmen olarak Kodland Launcher’a giriş yapmak için hangi giriş bilgilerini kullanırsın?',
      o:['Kendi oluşturduğun yeni bir hesabı.','Operasyon veya Eğitim departmanının sağladığı, Kodland Sparks ile aynı giriş bilgilerini.','Bir öğrencinin hesabını.'],
      a:1, e:'Launcher’ı indirmek için giriş bilgisi gerekmez. Giriş yapmak için Operasyon veya Eğitim departmanının sağladığı Kodland Sparks giriş bilgilerini kullanırsın.' },
    { q:'Öğrenci, ders kartına göndereceği bağlantıyı nerede bulur?',
      o:['Projenin altındaki bir yorumda.','Sparks’ta: My projects → yayınlanan projeyi aç → adresi tarayıcı çubuğundan kopyala.','Launcher’da, Play sekmesinde.'],
      a:1, e:'Bağlantı, proje sayfasının adresidir: My projects → yayınlanan proje → tarayıcı çubuğu.' },
    { q:'Dersin son 7–10 dakikası ne içindir?',
      o:['Ek inşa süresi.','Yayınlama, çalışmaları gösterme ve geri bildirim — artı kapanış ve ödev.','Serbest oyun.'],
      a:1, e:'Son dakikaları koru: yayınlama, geri bildirimli sunum ve kapanış.' },
    { ctx:'1. Derste bir öğrencinin launcher’ı açılmıyor, grubun geri kalanı ise hazır.',
      q:'Ne yaparsın?',
      o:['Launcher çalışana kadar dersi durdurursun.','Grubu devam ettirirsin — skin Sparks’ta, tarayıcıda çizilir — ve bağımsız çalışma sırasında öğrenciye yardım edersin.','Öğrenciye evde tekrar denemesini söyler ve dersi atlarsın.'],
      a:1, e:'Tek bir sorun grubu durdurmamalı: öğrenci yine de skin’i çizip yayınlar, sen de bağımsız çalışma sırasında launcher’ı düzeltirsin.' },
    { q:'Öğrenci, yayınlanan data pack’in bağlantısını nereden alır?',
      o:['Launcher’daki bir yorumdan.','“Publish to your profile” penceresinden: Copy link (veya Open on Sparks ve adresi tarayıcı çubuğundan kopyalamak).','Launcher’ın Play sekmesinden.'],
      a:1, e:'Yayınladıktan hemen sonra Copy link; bağlantı kaybolduysa Open on Sparks proje sayfasını açar ve sayfanın adresi bağlantının kendisidir.' },
    { ctx:'Bir öğrenci data pack’i yayınladı ama bağlantı senin için açılmıyor.',
      q:'En olası neden ve çözüm nedir?',
      o:['“Who can see it?” Everyone olarak ayarlanmamış: Everyone ile tekrar yayınla.','Data pack bozuk: sıfırdan yenisini oluştur.','Bağlantılar ancak ertesi gün açılır.'],
      a:0, e:'Bağlantı yalnızca Everyone seçildiğinde giriş yapmadan açılır. Everyone ile tekrar yayınlamak sorunu çözer.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Son adım: LMS’e dön ve DST’yi tamamla',
  html: `<p>Neredeyse bitirdin! Bu eğitime eriştiğin LMS eğitim sayfasına geri dön. DST testi, eğitimin hemen altında yer alıyor.</p>
    <p>👉 <b>Eğitimin başarıyla tamamlanmış sayılması için DST testini yapman ve geçmen gerekir.</b> DST testini yapmazsan eğitim tamamlanmamış olarak kalır ve süresi dolabilir.</p>
    <p>Geçme notu en az <b>%80</b>’dir.</p>
    <p>Bol şans! ❤️</p>`,
  nexts: [
    ['📒', '<b>Her dersten önce:</b> Backoffice’teki öğretmen notlarını oku ve dersin yolunu launcher’da dene.'],
    ['🟩', '<b>İlk dakikalar:</b> bağlantı ve launcher kontrolü, ardından bitmiş sonuç ve hedef.'],
    ['🔗', '<b>Bağlantı:</b> My projects → yayınlanan proje → tarayıcı çubuğundaki adres.'],
    ['⏱️', '<b>Son 7–10 dakika:</b> yayınlama, çalışmaları gösterme ve geri bildirim.']
  ]
};

/* ---------------- Skills for the course ----------------
   Four blocks (Minecraft world, programming logic, Python practice, data packs). Texts come from the proofread
   CraftForge Tutor Training. In each quiz 'c' = number of the correct option (0 = first). Never translate code. */
COURSE.skills = {
  mod: 'skills',
  ui: {
    step_self: 'Adım adım kendin ilerle',
    prev: 'Geri',
    next: 'Sonraki adım',
    stepn: 'Adım {s} / {n}',
    check_intro: 'Tüm soruları yanıtla — sonraki adımı açmak için %70 gerekir. Her soruda ilk cevabın sayılır.',
    correct: 'Doğru!',
    notquite: 'Tam değil.',
    score: 'Puan: %{p} — %70 gerekli',
    retry: 'Kontrolü tekrar dene',
    unlocked: 'Sonraki adımı açtın.',
    review_msg: 'Yukarıdaki bölümleri gözden geçir, sonra kontrolü tekrar dene.',
    nextBlock: 'Sonraki blok →',
    lockedBlock: '🔒 Bunun kilidini açmak için önceki bloğu geç.',
    ctaTitle: 'Dört bloğu da geç',
    ctaText: 'Her blok kısa bir alıştırma testiyle biter: her birinde %70 gerekir. Dördünü de geçtiğinde bu modül tamamlanır.',
    progress: '{t} bloktan {n} tanesi geçildi',
    ctaDone: 'Modül tamamlandı: %{p}',
    goNext: '{n}. modüle git →',
    practice: 'Blok alıştırması',
    blockOf: 'Blok {n} / {t}',
    passedBlock: 'Blok geçildi: %{p}'
  },
  blocks: [
    {
      id: 'world',
      ic: '🌍',
      slot: 'Dünya',
      title: 'Minecraft dünyasına dalış',
      sections: [
        {
          t: 'Eğitmenler için temel Minecraft (teknik beceriler)',
          html: '<div class="card class"><p>Minecraft, <strong>blok</strong> adı verilen küplerden oluşan bir dünyadır. Blokları kırabilir, toplayabilir ve istediğin her şeyi inşa etmek için yerleştirebilirsin. Çocuklar bu dünyayı çok iyi tanır; senin de hareket edecek, inşa edecek ve onların yaptıklarını takip edecek kadar bilmen yeterli.</p></div><div class="tbl"><table><tbody><tr><th>Tuş / eylem</th><th>Ne işe yarar</th></tr><tr><td><code>W A S D</code></td><td>İleri, sola, geri, sağa yürümek</td></tr><tr><td>Fare</td><td>Etrafa bakmak</td></tr><tr><td><code>Boşluk</code></td><td>Zıplamak. Yaratıcı modda uçmak için iki kez bas; yükselmek için basılı tut</td></tr><tr><td><code>Shift</code></td><td>Eğilmek: kenarlardan düşmezsin. Uçarken alçalmak</td></tr><tr><td>Sol tık</td><td>Blok kırmak / vurmak</td></tr><tr><td>Sağ tık</td><td>Blok yerleştirmek / kullanmak (kapı açmak, düğmeye basmak, kolu çekmek)</td></tr><tr><td><code>1</code>–<code>9</code> veya fare tekerleği</td><td>Hızlı erişim çubuğundan (alttaki çubuk) bir eşya seçmek</td></tr><tr><td><code>E</code></td><td>Envanteri açmak</td></tr><tr><td><code>T</code> veya <code>/</code></td><td>Sohbeti açmak / komut yazmaya başlamak</td></tr><tr><td><code>F3</code></td><td>Koordinatları ve teknik bilgileri görmek</td></tr><tr><td><code>F5</code></td><td>Kamera görünümünü değiştirmek</td></tr><tr><td><code>Esc</code></td><td>Duraklatma menüsü ve ayarlar</td></tr></tbody></table></div><div class="cols"><div class="card class"><h4>Oyun modları</h4><ul><li><strong>Yaratıcı</strong>: sınırsız blok, uçabilirsin ve hiçbir şey sana zarar veremez. İnşa etmek için ideal.</li><li><strong>Hayatta kalma</strong>: kaynak toplarsın, canın ve açlığın vardır, geceleri canavarlar saldırır.</li></ul></div><div class="card class"><h4>Çocukların kullandığı kelimeler</h4><ul><li><strong>Mob</strong>: herhangi bir canlı (bir inek, bir zombi, bir Creeper).</li><li><strong>Spawn</strong>: ortaya çıktığın yer.</li><li><strong>Biyom</strong>: bir arazi türü (çöl, orman, kar).</li><li><strong>Skin</strong>: karakterinin görünüşü. Steve ve Alex varsayılan karakterlerdir.</li></ul></div></div>'
        },
        {
          t: '1.1 · Çocukların getirdiği kültür',
          html: '<div class="card why"><p>Minecraft’ın kendine ait efsaneleri, memleri, korku hikâyeleri ve iç şakaları vardır ve çocuklar bunları iyi bilir. Uzman bir oyuncu olmana gerek yok, ama “olaylardan haberdar” olman gerekir. En hızlı yol bir <strong>“Minecraft Iceberg”</strong> videosudur: gizli bilgiler, mitler, kesilmiş içerikler ve efsaneler — en bilinenler tepede, en az bilinenler dipte.</p></div><div class="vid"><iframe src="https://www.youtube.com/embed/AChmq4QfbK0" title="Minecraft Iceberg video" loading="lazy" allowfullscreen=""></iframe></div><div class="tbl"><table><tbody><tr><th>Ad</th><th>Nedir</th></tr><tr><td><strong>Herobrine</strong></td><td>Minecraft’ın en ünlü efsanesi: dünyalara musallat olduğu söylenen, beyaz gözlü bir figür. Oyunda hiç var olmadı — yıllarca Mojang’ın güncelleme notlarında şaka olarak “Herobrine kaldırıldı” yazdı.</td></tr><tr><td><strong>Entity 303</strong></td><td>Hayranların uydurduğu bir başka korku efsanesi; intikamcı, hacker benzeri bir varlık hakkında. Çocuklar sormayı çok sever — adını bilmen bile bir gülümseme için yeter.</td></tr><tr><td><strong>Notch</strong></td><td>Markus Persson, Minecraft’ın asıl yaratıcısı.</td></tr><tr><td><strong>Creeper’ın kökeni</strong></td><td>Bilinen bir hikâye: boyu ile uzunluğu karışmış, başarısız bir domuz modeli olarak doğdu.</td></tr><tr><td><strong>Uzak Diyarlar (Far Lands)</strong></td><td>Eski Java sürümlerinde, doğma noktasından milyonlarca blok uzakta, dünyanın tuhaf duvarlara dönüştüğü bir arazi hatası.</td></tr><tr><td><strong>Steve ve Alex</strong></td><td>Varsayılan oyuncu karakterleri.</td></tr></tbody></table></div><div class="card class"><p><strong>Derste:</strong> kısa bir “Evet, Entity 303’ü biliyorum 😉” saniyeler içinde güven oluşturur. Sonra sohbeti yapıya geri getir.</p></div>'
        },
        {
          t: '1.2 · Koordinatlar: X, Y ve Z',
          html: '<div class="tbl"><table><tbody><tr><th>Eksen</th><th>Yön</th><th>Oyuncu şunu yapınca değişir…</th></tr><tr><td><strong>X</strong></td><td>Doğu ↔ Batı</td><td>doğuya veya batıya yürürse</td></tr><tr><td><strong>Y</strong></td><td>Yukarı ↕ Aşağı (yükseklik)</td><td>zıplar, tırmanır, düşer, aşağı kazar, kule yaparsa</td></tr><tr><td><strong>Z</strong></td><td>Güney ↔ Kuzey</td><td>kuzeye veya güneye yürürse</td></tr></tbody></table></div><div class="card "><p>X ve Z zemindeki konumdur; <strong>Y yüksekliktir</strong>. Her dikey hareket — tek bir zıplama bile — sürdüğü sürece Y’yi değiştirir. Koordinatları görmek için: Java Edition’da <code>F3</code>, Bedrock’ta dünya ayarlarından “Koordinatları göster”i aç. Işınlanma da aynı sırayı kullanır: <code>/tp X Y Z</code>.</p></div><div class="card tip"><p><strong>Akılda tutma ipucu:</strong> Okuldaki grafiklerde “yukarı” giden Y’dir — Minecraft’ta da yukarı giden odur.</p></div>'
        },
        {
          t: '1.3 · Her eğitmenin tanıması gereken moblar',
          html: '<div class="tbl"><table><tbody><tr><th>Mob</th><th>Bilinmesi gereken</th></tr><tr><td><strong>Creeper</strong></td><td>Sessizce yaklaşır ve <strong>fitili yanınca tıslar — patlamak üzeredir</strong> (yaklaşık 1,5 saniye). Menzilinden kaçmak fitili iptal edebilir. Yakınına yıldırım düşerse çok daha büyük patlayan bir <strong>Yüklü Creeper</strong>’a dönüşür.</td></tr><tr><td><strong>Zombi / İskelet</strong></td><td>Karanlıkta doğarlar; gölgede değillerse ya da kask takmıyorlarsa gün ışığında yanarlar. İskeletler uzaktan ok atar.</td></tr><tr><td><strong>Örümcek</strong></td><td>Duvarlara tırmanır — bir ağaç ya da sütun seni korumaz. Parlak ışıkta tarafsız, karanlıkta düşmancadır.</td></tr><tr><td><strong>Enderman</strong></td><td>Yüzüne bakana kadar tarafsızdır. Sonra ışınlanır ve saldırır.</td></tr><tr><td><strong>Phantom</strong></td><td>Oyuncu üç ya da daha fazla oyun günü uyumazsa gökyüzünde belirir.</td></tr></tbody></table></div>'
        },
        {
          t: '1.4 · İlk geceyi atlatmak',
          html: '<div class="card "><p>Düşman moblar <strong>karanlıkta</strong> doğar. Hayatta Kalma modunun ilk gecesinde, yatak ve ekipman yokken en güvenli plan basittir: <strong>küçük, kapalı bir sığınak yap ve içini aydınlat</strong>. Duvarlar mobları dışarıda tutar; içerideki ışık yanında mob doğmasını engeller. Bir yamaca oyuk açıp girişi kapatmak da işe yarar.</p></div><div class="tbl"><table><tbody><tr><th>Cazip fikir</th><th>Neden işe yaramaz</th></tr><tr><td>Elde meşale tutmak</td><td>Standart oyunda elde tutulan meşale etrafı aydınlatmaz ve çevrende mob doğmasını engellemez.</td></tr><tr><td>Yüksek bir ağacın tepesinde beklemek</td><td>Örümcekler tırmanır, iskeletler aşağıdan ok atar ve düşmek can yakar.</td></tr><tr><td>Mobların arasından sıyrılarak keşfe çıkmak</td><td>Karanlık tam da doğdukları yerdir — gece ilerledikçe sayıları artar.</td></tr></tbody></table></div><div class="card tip"><p><strong>Yatak</strong> geceyi atlamanı sağlar ve kişisel yeniden doğma noktanı da belirler. Buna 1.6’da ihtiyacın olacak.</p></div>'
        },
        {
          t: '1.5 · Aletler, seviyeler ve hangi kazma neyi kazar',
          html: '<div class="card "><p>Kazmalar seviye seviye yükselir: <strong>Tahta → Taş → Demir → Elmas → Netherit</strong>. <strong>Altın tuzaktır:</strong> çok hızlı kazar ama seviyesi tahta kadar düşüktür. Seviye yetersizse blok yine kırılır — ama hiçbir şey düşmez.</p></div><div class="tbl"><table><tbody><tr><th>Kazma</th><th>Kazabilen en düşük seviye…</th></tr><tr><td>Tahta / Altın</td><td>Taş, kömür madeni</td></tr><tr><td>Taş</td><td>Demir madeni, bakır madeni, lapis lazuli madeni</td></tr><tr><td>Demir</td><td><strong>Elmas madeni</strong>, altın madeni, kızıltaş madeni, zümrüt madeni</td></tr><tr><td>Elmas</td><td>Obsidyen, kadim kalıntı</td></tr></tbody></table></div><div class="card class"><p><strong>Derste:</strong> “Kazmam elması kırdı ama hiçbir şey çıkmadı!” gerçek bir öğrenci sorusudur. Artık cevabını biliyorsun: seviye çok düşüktü.</p></div>'
        },
        {
          t: '1.6 · Doğma noktaları, yataklar ve pusulalar',
          html: '<div class="cols"><div class="card "><h4>Dünyanın doğma noktası</h4><p>Her oyuncunun yeni bir dünyada ilk belirdiği nokta. Biri komutla değiştirmedikçe hiç yer değiştirmez.</p></div><div class="card "><h4>Kişisel yeniden doğma noktası</h4><p>Bir yatakta uyuyarak (ya da Nether’de yeniden doğma çapası kullanarak) belirlenir. Öldükten sonra buraya dönersin.</p></div></div><div class="tbl"><table><tbody><tr><th>Eşya</th><th>Gösterdiği yer</th></tr><tr><td><strong>Sıradan pusula</strong></td><td><strong>Dünyanın doğma noktası</strong> — yatak da değil, kuzey de değil. Nether’de ve End’de rastgele döner.</td></tr><tr><td>Kurtarma pusulası</td><td>Oyuncunun en son öldüğü yer.</td></tr><tr><td>Mıknatıs taşı pusulası</td><td>Bağlandığı mıknatıs taşı. Oyuncular üslerini gösteren pusulayı böyle yapar.</td></tr></tbody></table></div><div class="card warn"><p><strong>Sık yapılan karışıklık:</strong> yeni bir yatak, <em>yeniden doğduğun</em> yeri değiştirir; ama sıradan pusula dünyanın asıl doğma noktasını göstermeye devam eder.</p></div>'
        }
      ],
      quiz: [
        {
          p: 'Bir oyuncu dümdüz aşağı 10 blok kazıyor. Hangi koordinat değişir?',
          o: ['X', 'Y', 'Z', 'Hiçbiri'],
          c: 1,
          f: 'Y yüksekliktir. Aşağı kazmak, zıplamak, tırmanmak ya da yukarı inşa etmek Y’yi değiştirir.'
        },
        {
          p: 'Demir madenini kazıp madeni gerçekten alabilen en düşük seviyeli kazma hangisidir?',
          o: ['Tahta', 'Taş', 'Altın', 'Her kazma olur'],
          c: 1,
          f: 'Demir için taş yeterlidir. Altın hızlıdır ama seviyesi tahta kadar düşüktür.'
        },
        {
          p: 'Bir Creeper, oyuncunun hemen arkasında tıslamaya başlıyor. En iyi tepki nedir?',
          o: ['Hemen saldırmak — tıslama zayıf olduğu anlamına gelir', 'İlgisini kaybetsin diye kıpırdamadan durmak', 'Koşarak uzaklaşmak — fitil yanıyor ve menzilden çıkmak onu iptal edebilir', 'Yanına bir meşale koymak'],
          c: 2,
          f: 'Tıslama, fitilin yandığı ve patlamak üzere olduğu anlamına gelir. Doğru hamle menzilden çıkmaktır.'
        },
        {
          p: 'İlk gece sığınağının neden yalnızca duvara değil, içeride ışığa da ihtiyacı var?',
          o: ['Işık duvarları güçlendirir', 'Düşman moblar karanlıkta doğar — ışık, içeride seninle birlikte doğmalarını engeller', 'Meşaleler oyuncuyu iyileştirir', 'Moblar dışarıdaki ışığa çekilir'],
          c: 1,
          f: 'Duvarlar mobları dışarıda tutar; ışık, seninle birlikte karanlık alanda yeni mobların doğmasını engeller.'
        },
        {
          p: 'Bir oyuncu her zaman üssünü gösteren bir pusula istiyor. Neye ihtiyacı var?',
          o: ['Üste bir yatakta uyumak — pusula onu takip eder', 'Pusulayı üste konmuş bir mıknatıs taşına kullanmak', 'Sıradan pusula zaten son yatağı gösterir', 'Kurtarma pusulası'],
          c: 1,
          f: 'Sıradan pusula dünyanın doğma noktasını gösterir. Onu bir mıknatıs taşına bağlamak, o taşı göstermesini sağlar.'
        },
        {
          p: 'Bir öğrenci “Herobrine benim dünyamda!” diyor. Herobrine kimdir?',
          o: ['Nether güncellemesiyle eklenen bir boss', 'Oyunda hiç olmamış bir hayran efsanesi — Mojang güncelleme notlarında “Herobrine kaldırıldı” diye şaka bile yaptı', 'Creeper’ı yaratan geliştirici', 'Enderman’ın başka bir adı'],
          c: 1,
          f: 'Herobrine bir efsanedir. Şakayı bilmek, öğrencilerle bir saniyede bağ kurmana yardım eder.'
        },
        {
          p: 'Sıradan bir Creeper nasıl Yüklü Creeper olur?',
          o: ['İki kez patlayarak', 'Yakınına yıldırım düşünce', 'Sudayken', 'Bir oyuncu ona isim verince'],
          c: 1,
          f: 'Yakına düşen yıldırım onu yükler ve patlaması çok daha büyük olur.'
        }
      ]
    },
    {
      id: 'logic',
      ic: '🧠',
      slot: 'Mantık',
      title: 'Programlama mantığı',
      sections: [
        {
          t: '2.1 · Programlama mantığı',
          html: '<div class="card why"><p>Programlama sadece bir programlama dilinin sözdizimini bilmekten ibaret değildir. Asıl önemli olan; sıralı düşünebilmek, kalıpları fark edebilmek, bir görevi adımlara bölebilmek ve bir algoritmanın neden o şekilde çalıştığını anlayabilmektir.</p><p>Dersler sırasında öğrenciler sürekli sorular soracak, hatalar yapacak, beklenmedik çözümler önerecek ve bazen kodu beklenenden tamamen farklı bir şekilde yazacaklar. Onlara yardımcı olmak için sadece doğru komutu bilmek değil, programın arkasındaki mantığı anlamak da önemlidir.</p><p>Bu bölümde belirli bir programlama dili bilmenize gerek yok. Burada algoritmalar, koşullar, döngüler ve işlem sıraları konusunda ne kadar rahat olduğunuzu göreceğiz.</p></div><div class="card "><h4>İzleme tablosu yöntemi</h4><ol><li><strong>Her değişkeni</strong> başlangıç değeriyle birlikte bir sütun olarak yaz.</li><li>Kuralların yazıldığı sırayla, <strong>her seferinde bir adım</strong> ilerle.</li><li>Her koşul, <strong>güncel</strong> değere göre kontrol edilir — az önce yazdığın değere, eskisine değil.</li><li>Tekrarları say. “4 kez tekrarla” dört satır demektir; üç değil, beş değil.</li></ol></div><div class="tracer" data-tr="robot"></div>'
        },
        {
          t: '2.2 · Kuralları koşullara çevirmek',
          html: '<div class="card "><p>Kural soruları, <strong>her olası durumu</strong> yazıp tek tek kontrol ettiğinde en kolay hâle gelir. Örnek kural seti:</p><ul><li>Portal odasına girmek için oyuncunun <strong>çakmaktaşı ya da ateş topu</strong> olması gerekir.</li><li><strong>İkisi birden</strong> varsa altın zırh da giymelidir.</li><li><strong>Sadece biri</strong> varsa zırh gerekmez.</li></ul></div><div class="tbl"><table><tbody><tr><th>Çakmaktaşı</th><th>Ateş topu</th><th>Altın zırh</th><th>Girebilir mi?</th></tr><tr><td>✔</td><td>✘</td><td>—</td><td>Evet (tek eşya, ek kural yok)</td></tr><tr><td>✘</td><td>✔</td><td>—</td><td>Evet</td></tr><tr><td>✔</td><td>✔</td><td>✔</td><td>Evet</td></tr><tr><td>✔</td><td>✔</td><td>✘</td><td><strong>Hayır</strong> — “ikisi birden” durumu bir şart ekler</td></tr><tr><td>✘</td><td>✘</td><td>—</td><td><strong>Hayır</strong> — ilk kural sağlanmıyor</td></tr></tbody></table></div><div class="card warn"><p><strong>Önemsiz ayrıntılara dikkat et.</strong> Kurallar tek eşyası olan oyuncu için ek şart olmadığını söylüyorsa, zırhının olup olmaması ya da şifresinin yanlış olması onun için önemsizdir. Sorular, kuralları tam uygulayıp uygulamadığını sınamak için sık sık böyle ayrıntılar ekler.</p></div>'
        },
        {
          t: '2.3 · İçinde koşul olan döngüler',
          html: '<div class="card "><p>Her turda iki adım varsa — “değeri değiştir, sonra koşulu kontrol et” — kontrol, değişiklikten <strong>sonraki</strong> değeri kullanır. Ve bir eşik bir kez aşıldığında koşul genellikle sonraki tüm turlarda doğru kalır.</p></div><div class="tracer" data-tr="coins"></div><div class="card warn"><h4>İki klasik hata</h4><ul><li>Koşulu değişiklikten <em>önceki</em> değere göre kontrol etmek.</li><li>Koşulu, döngünün dışındaymış gibi yalnızca bir kez uygulamak.</li></ul></div>'
        },
        {
          t: '2.4 · Sayaçlar, bayraklar ve durma kuralları',
          html: '<div class="card "><p><strong>Sayaç</strong> bir şeyin kaç kez olduğunu sayar. <strong>Bayrak</strong> (açık/kapalı, True/False) bir şeyin zaten olduğunu hatırlar. <strong>Durma kuralı</strong> algoritmayı erken bitirir. Aynı öğeye birkaç kural uygulanıyorsa onları yazıldıkları sırayla uygula — bir kuralın açtığı bayrağı bir sonraki kural <strong>aynı adımda</strong> kullanabilir.</p></div><div class="tracer" data-tr="flag"></div><div class="card tip"><p>Seçenekler arasında “algoritma durmaz” varsa ciddiye al: seçmeden önce son öğeye kadar izle.</p></div>'
        },
        {
          t: '2.5 · Algoritma gerçekten doğru mu?',
          html: '<div class="card "><p>Bir algoritmanın yanlış olduğunu göstermek için <strong>tek bir karşı örnek</strong> yeter: yanlış cevap verdiği bir girdi. İnsanların unuttuğu durumları dene: ilk öğeyi <em>içermeyen</em> bir eşleşme, son öğe, kendisiyle karşılaştırılan bir öğe, tüm öğelerin aynı olması, tek öğeli bir liste.</p></div><div class="card "><h4>Örnek</h4><p>Görev: bir listedeki tüm sayıların farklı olup olmadığını bulmak. Önerilen algoritma: “her sayıyı yalnızca bir sonrakiyle karşılaştır; ikisi eşitse Hayır de”.</p><p>Karşı örnek: <code>3, 5, 3</code>. Komşular 3–5 ve 5–3, hiç eşit değil, bu yüzden “hepsi farklı” der — yanlış. Algoritma birbirinden uzak sayıları hiç karşılaştırmaz.</p><p><strong>Düzeltme:</strong> <em>her</em> sayıyı kendinden sonraki <em>her</em> sayıyla karşılaştır. İki döngü: dıştaki sırayla her sayıyı alır, yalnızca ilkini değil; içteki onu geri kalanlarla karşılaştırır.</p></div><div class="card class"><p><strong>Derste:</strong> bir öğrencinin programı “çalışıyorsa”, onu bozabilecek bir girdi bulmasını iste. Karşı örnek aramak, programcıların düşünme biçimidir.</p></div>'
        }
      ],
      quiz: [
        {
          p: 'Bir robot 1 numaralı kareden başlıyor ve bu kuralı 4 kez uyguluyor: kare numarası tekse 3 ileri, çiftse 1 geri gider. Nerede biter?',
          o: ['4', '5', '6', '7'],
          c: 1,
          f: '1 → 4 → 3 → 6 → 5. Her kontrol, robotun az önce geldiği kareyi kullanır.'
        },
        {
          p: 'Arena kuralları: oyuncunun kılıcı YA DA kalkanı olmalı. İkisi birden varsa seviyesi de 5 veya üzeri olmalı. Yalnızca biri varsa seviye şartı yok. Kim giremez?',
          o: ['Yalnızca kılıç, seviye 1', 'Yalnızca kalkan, seviye 3', 'Kılıç ve kalkan, seviye 7', 'Kılıç ve kalkan, seviye 2'],
          c: 3,
          f: 'Ek seviye kuralı yalnızca “ikisi birden” durumunda var ve seviye 2 bunu karşılamıyor. Tek eşyası olan oyuncunun seviyesi önemsizdir.'
        },
        {
          p: 'Puan 1’den başlıyor. 3 kez tekrarla: puanı 2 ile çarp; sonra sonuç 5’ten büyükse 3 çıkar. Son puan kaçtır?',
          o: ['2', '5', '8', '13'],
          c: 1,
          f: '1 → 2 (> 5 değil). 2 → 4 (> 5 değil). 4 → 8 → 8 − 3 = 5.'
        },
        {
          p: 'Sayılar: 3, 8, 5, 10, 1. sayaç = 0, alarm = kapalı. Her sayı için bu sırayla: sayı 4’ten büyükse sayaca 1 ekle; sayaç 2 olunca alarmı aç; alarm açıksa ve sayı tekse dur. Hangi sayıda durur?',
          o: ['5', '10', '1', 'Hiç durmaz'],
          c: 0,
          f: '3: hiçbir şey. 8: sayaç 1. 5: sayaç 2 → alarm açık → aynı adımda 5 tek → 5’te durur.'
        },
        {
          p: 'Bir listenin küçükten büyüğe sıralı olup olmadığını kontrol etmek için biri şunu öneriyor: “her sayıyı ilk sayıyla karşılaştır; biri ilkinden küçükse Sıralı değil de.” Asıl sorun nedir?',
          o: ['Negatif sayılarda çalışmaz', 'Her liste için “Sıralı değil” der', 'İlkinden sonraki komşuları hiç karşılaştırmaz, bu yüzden 1, 5, 3 sıralı sayılır', 'Yalnızca çift uzunluktaki listelerde çalışır'],
          c: 2,
          f: '5 ve 3, 1’den büyüktür, bu yüzden kontrol geçer — ama liste sıralı değildir. Tek bir karşı örnek yeter.'
        }
      ]
    },
    {
      id: 'python',
      ic: '🐍',
      slot: 'Python',
      title: 'Python ile programlama pratiği',
      sections: [
        {
          t: '3.1 · Kodu bilgisayar gibi okumak',
          html: '<div class="card why"><p>İyi bir eğitmen sadece kendi programını yazabilmeli değil, aynı zamanda başkasının kodunu hızlıca anlayabilmelidir. Dersler sırasında öğrencilerin çözümlerini okumanız, programın tam olarak ne yaptığını çözmeniz, hataların nedenlerini bulmanız ve bunları düzeltmeye yardımcı olmanız gerekecek.</p><p>Bu bölümde Python ile çalışacağız. Burada en önemli şey her komutu ezbere hatırlamak değil, kodun nasıl yürütüldüğünü, parçalarının nasıl etkileşime girdiğini ve programın neden belirli bir sonuç ürettiğini anlamaktır.</p><p>Birkaç kısa program okumanız, hataları bulmanız ve birkaç pratik görevi çözmeniz gerekecek. Endişelenmeyin, burada karmaşık algoritmalar olmayacak. Bizim için önemli olan, temel programlama ilkelerine ne kadar hâkim olduğunuz.</p></div><div class="tbl"><table><tbody><tr><th>Öğe</th><th>Anlamı</th></tr><tr><td><code>range(4)</code></td><td>0, 1, 2, 3 — 0’dan başlar, 4’ten <strong>önce</strong> durur</td></tr><tr><td><code>range(2, 6)</code></td><td>2, 3, 4, 5 — başlangıç dahil, bitiş hariç</td></tr><tr><td><code>total += x</code></td><td><code>total = total + x</code> ile aynı</td></tr><tr><td><code>a % b</code></td><td>Kalan. <code>n % 2 == 0</code> n’nin çift olduğu, <code>== 1</code> tek olduğu anlamına gelir</td></tr><tr><td><code>a // b</code></td><td>Tam sayı bölmesi: <code>7 // 2</code> 3’tür</td></tr><tr><td><code>=</code> ile <code>==</code></td><td><code>=</code> bir değer saklar; <code>==</code> iki değeri karşılaştırır</td></tr><tr><td><code>&gt;</code> ile <code>&gt;=</code></td><td>“10’dan büyük” 10’u dışarıda bırakır; “en az 10” 10’u içerir. 0 pozitif değildir.</td></tr></tbody></table></div><div class="tracer" data-tr="pyloop"></div>'
        },
        {
          t: '3.2 · Listeler ve indeksler',
          html: '<pre class="code">numbers = [4, 15, 7, 22]\n# index:    0   1  2   3\n\nnumbers[1]      # 15\nlen(numbers)    # 4\n\nfor n in numbers:              # n is each VALUE: 4, 15, 7, 22\n    ...\nfor i in range(len(numbers)):  # i is each INDEX: 0, 1, 2, 3\n    ...  numbers[i]  ...</pre><div class="card warn"><p>İndeksler <strong>0</strong>’dan başlar. Görev “indeks” isterse <code>i</code> döndür, <code>numbers[i]</code> değil. İndeks ile değeri karıştırmak en sık görülen yanlış seçeneklerden biridir.</p></div>'
        },
        {
          t: '3.3 · return fonksiyonu hemen bitirir',
          html: '<div class="card "><p>Bir fonksiyon <code>return</code>’e ulaştığı anda durur — döngünün ortasında bile. <code>return</code>’den sonraki değer, çağrının geri verdiği şeydir. <code>print</code> yalnızca ekranda bir şey gösterir; hiçbir şey döndürmez.</p><p>Python’da <strong>girinti neyin neyin içinde olduğuna karar verir</strong>. Dört boşluk fazlası “döngünün içinde” ya da “if’in içinde” demektir. Bu yüzden tek bir <code>return</code> satırının konumu tüm sonucu değiştirebilir.</p></div><div class="tracer" data-tr="pyreturn"></div>'
        },
        {
          t: '3.4 · Kalıp: “TÜM öğeler uygun mu?”',
          html: '<div class="card "><p><em>Tüm</em> öğelerin bir koşulu sağladığını kontrol etmek için <strong>onu bozan tek bir öğe</strong> ara. Bulur bulmaz <code>return False</code>. Ancak döngü her şeyi kontrol ettikten sonra <code>return True</code> yapabilirsin.</p></div><pre class="code good">def all_below_100(numbers):\n    for n in numbers:\n        if n &gt;= 100:\n            return False   # one bad item is enough\n    return True            # after the loop: nothing was bad</pre><div class="cols"><div><pre class="code bad"># WRONG: decides after the first item\nfor n in numbers:\n    if n &lt; 100:\n        return True\n    else:\n        return False</pre></div><div><pre class="code bad"># WRONG: returns True as soon as\n# ONE item is OK\nfor n in numbers:\n    if n &lt; 100:\n        return True\nreturn False</pre></div></div><div class="card tip"><p>Koşulun sınırını da kontrol et: “pozitif” <code>&gt; 0</code> demektir, yani 0 içeren bir listenin hepsi pozitif değildir.</p></div>'
        },
        {
          t: '3.5 · Kalıp: “İLKİNİ bul”',
          html: '<div class="card "><p>Eşleşen ilk öğenin indeksini döndürmek için: <code>if</code>’in içinde <code>return i</code>, böylece fonksiyon ilk eşleşmede durur. “Bulunamadı” değeri (<code>-1</code>) döngüden <strong>sonra</strong> gelir, çünkü hiçbir şeyin eşleşmediğini ancak tüm öğeleri kontrol edince bilirsin.</p></div><pre class="code good">def find_first_even(numbers):\n    for i in range(len(numbers)):\n        if numbers[i] % 2 == 0:\n            return i      # first match: stop here\n    return -1             # loop finished: no match\n\nfind_first_even([3, 7, 8, 10])   # 2</pre><div class="tbl"><table><tbody><tr><th>Yanlış sürüm</th><th>Ne ters gider</th></tr><tr><td>Döngünün içinde <code>else: return -1</code></td><td>İlk öğe eşleşmezse hemen pes eder.</td></tr><tr><td>Döngüde <code>result = i</code>, sonrasında <code>return result</code></td><td>Sürekli üzerine yazar, bu yüzden ilk eşleşmeyi değil <strong>son</strong> eşleşmeyi döndürür.</td></tr><tr><td><code>for n in numbers: … return n</code></td><td>İndeksi değil <strong>değeri</strong> döndürür.</td></tr></tbody></table></div>'
        },
        {
          t: '3.6 · Bir öğrenciye hata ayıklamada yardım etmek',
          html: '<div class="card class"><p>Bir öğrencinin kodunu okurken iki CraftForge seviyesinde de aynı alışkanlıklar geçerlidir. Onun yerine düzeltme — bulmasına yardım et:</p><ul><li><strong>Hatayı birlikte yüksek sesle okuyun.</strong> “Hangi satırı gösteriyor ve orada ne olmasını bekliyorsun?”</li><li><strong>Son değişikliği ayır.</strong> “Bozulmadan önce en son neyi değiştirdin?”</li><li><strong>Küçük bir girdiyle izle</strong> — hataların çoğunu ortaya çıkarmak için iki üç öğe yeter.</li><li>Kod yapay zekâdan geldiyse: “Bunu eklemeden önce — bu satırın ne yaptığını bana açıkla.”</li></ul></div><div class="tbl"><table><tbody><tr><th>Öğrencinin gördüğü hata</th><th>Olağan neden</th></tr><tr><td>IndentationError</td><td>Satır başında karışık ya da eksik boşluklar</td></tr><tr><td>SyntaxError</td><td><code>for</code>/<code>if</code>/<code>def</code>’ten sonra <code>:</code> eksik ya da <code>==</code> gereken yerde <code>=</code> var</td></tr><tr><td>NameError</td><td>Değişken adında yazım hatası ya da değişkeni oluşturulmadan kullanmak</td></tr><tr><td>Hata yok ama sonuç yanlış</td><td>Mantık: yanlış yerde bir <code>return</code>, <code>&gt;</code> ile <code>&gt;=</code>, yanlış başlangıç değeri</td></tr></tbody></table></div>'
        }
      ],
      quiz: [
        {
          p: 'Bu program ne yazdırır?<pre class="code">total = 0\nfor i in range(1, 5):\n    total += i * 2\nprint(total)</pre>',
          o: ['10', '12', '20', '30'],
          c: 2,
          f: 'range(1, 5) 1, 2, 3, 4’tür. Yani 2 + 4 + 6 + 8 = 20. (30 için range(1, 6) gerekirdi.)'
        },
        {
          p: 'Bu çağrı ne döndürür?<pre class="code">def mystery(nums):\n    result = 0\n    for n in nums:\n        if n % 2 == 1:\n            result += n\n    return result\n\nmystery([3, 4, 7, 10])</pre>',
          o: ['2', '10', '14', '24'],
          c: 1,
          f: 'Yalnızca tek sayıları toplar: 3 + 7 = 10. (2 onları saymak, 24 hepsini toplamak olurdu.)'
        },
        {
          p: 'count_evens([2, 4, 6]) 3 yerine 1 döndürüyor. Hangi değişiklik bunu her liste için düzeltir?<pre class="code">def count_evens(numbers):\n    count = 0\n    for n in numbers:\n        if n % 2 == 0:\n            count += 1\n        return count</pre>',
          o: ['count’u 1’den başlatmak', 'return count’u if’in içine taşımak', 'return count’u for döngüsünün dışına, sonrasına taşımak', '== 0’ı == 1 yapmak'],
          c: 2,
          f: 'return döngünün içinde, bu yüzden fonksiyon ilk sayıdan sonra biter. Döngüden sonra konursa her şey sayıldıktan sonra çalışır.'
        },
        {
          p: 'all_even(numbers) yalnızca her sayı çiftse True döndürmeli. Hangi sürüm doğru?',
          o: ['A<pre class="code">for n in numbers:\n    if n % 2 == 0:\n        return True\nreturn False</pre>', 'B<pre class="code">for n in numbers:\n    if n % 2 != 0:\n        return False\nreturn True</pre>', 'C<pre class="code">for n in numbers:\n    if n % 2 != 0:\n        return False\n    else:\n        return True</pre>', 'Hiçbiri'],
          c: 1,
          f: 'B ilk tek sayıda False döndürür, True’yu ancak hepsini kontrol ettikten sonra döndürür. A ilk çift sayıda durur; C tek bir öğeye bakıp karar verir.'
        },
        {
          p: 'find_first_negative(numbers), ilk negatif sayının indeksini ya da hiç yoksa -1 döndürmeli. Hangi sürüm her listede çalışır?',
          o: ['A<pre class="code">for i in range(len(numbers)):\n    if numbers[i] &lt; 0:\n        return i\n    else:\n        return -1</pre>', 'B<pre class="code">result = -1\nfor i in range(len(numbers)):\n    if numbers[i] &lt; 0:\n        result = i\nreturn result</pre>', 'C<pre class="code">for i in range(len(numbers)):\n    if numbers[i] &lt; 0:\n        return i\nreturn -1</pre>', 'D<pre class="code">for n in numbers:\n    if n &lt; 0:\n        return n\nreturn -1</pre>'],
          c: 2,
          f: 'C ilk eşleşmede durur ve -1’i ancak tüm listeden sonra döndürür. A tek öğeden sonra pes eder, B son eşleşmeyi döndürür, D indeks yerine değeri döndürür.'
        },
        { p:'range(2, 6) hangi değerleri üretir?', o:['2, 3, 4, 5, 6', '2, 3, 4, 5', '3, 4, 5, 6', '0, 1, 2, 3, 4, 5'], c:1, f:'Başlangıç dahil, bitiş hariç.' }
      ]
    },
    {
      id: 'datapacks',
      ic: '📜',
      slot: 'Veri',
      title: 'Veri paketleri: dünyanın yasaları',
      sections: [
        {
          t: '4.1 · Veri paketi nedir',
          html: '<div class="card why"><p>Veri paketleri, öğrencinin oyunu değiştirmeden Minecraft için kendi <strong>yasalarını</strong> koymasını sağlar — yeni tarifler, özel komutlar, zamanlayıcılar, olaylar ve puanlama. Yılı açarlar (01. modül: “dünya öğrencinin yazdığı kurallara göre çalışmaya başlar”) ve sıradan bir alanın oyuna dönüştüğü 06. modüle güç verirler.</p></div><pre class="code">my_pack/\n├── pack.mcmeta                    ← required: tells Minecraft this is a data pack\n└── data/\n    ├── forge/                     ← the student\'s namespace\n    │   └── function/\n    │       ├── setup.mcfunction   ← one command per line, no "/"\n    │       └── loop.mcfunction\n    └── minecraft/\n        └── tags/function/\n            ├── load.json          ← lists functions that run when the world loads or /reload runs\n            └── tick.json          ← lists functions that run every game tick</pre><div class="card tip"><p>Klasör adları oyun sürümüne bağlıdır: 1.21’den beri tekildir (<code>function</code>, <code>recipe</code>); eski sürümler çoğul kullanır (<code>functions</code>, <code>recipes</code>). Yanlış klasör adı sessiz bir hatadır — paket yüklenir ama hiçbir şey olmaz. Kurs ortamının sağladığı yapıyı kullan.</p></div>'
        },
        {
          t: '4.2 · load, tick ve 20 tick kuralı',
          html: '<div class="tbl"><table><tbody><tr><th>Ne zaman</th><th>Ne çalışır</th></tr>\n    <tr><td>Dünya yüklenince ya da <code>/reload</code> ile</td><td><code>load.json</code>’da listelenen fonksiyonlar — bir kez. Hazırlık için uygundur: skor tabloları oluşturmak.</td></tr>\n    <tr><td>Her oyun tick’inde — <strong>saniyede 20 kez</strong></td><td><code>tick.json</code>’da listelenen fonksiyonlar. Zamanlayıcılar ve koşul kontrolü için uygundur.</td></tr>\n    <tr><td>Sen çağırdığında</td><td><code>/function forge:setup</code> tek bir fonksiyonu elle çalıştırır — test için harika.</td></tr></tbody></table></div><pre class="code"># setup.mcfunction  (in load.json: runs once)\nscoreboard objectives add timer dummy\nscoreboard objectives add points dummy\nscoreboard objectives setdisplay sidebar points\n\n# loop.mcfunction   (in tick.json: runs 20 times per second)\nscoreboard players add #game timer 1\nexecute if score #game timer matches 200 run say Ten seconds!</pre><div class="card "><p>Zamanlayıcı her tick’te 1 artar, yani 200 tick = <strong>10 saniye</strong>. <code>execute if …</code>, <code>if</code>’in veri paketi sürümüdür. Skor tablosu, 06. modülün “puan tutma” yoludur.</p></div>'
        },
        {
          t: '4.3 · Bir kural tetiklenmediğinde',
          html: '<div class="tbl"><table><tbody><tr><th>Belirti</th><th>İlk kontrol edilecek şey</th></tr>\n    <tr><td>Hiçbir şey olmuyor</td><td>Düzenlemeden sonra <code>/reload</code> çalıştırdılar mı? Paket etkin mi (<code>/datapack list</code>)?</td></tr>\n    <tr><td>Hazırlık hiç gerçekleşmedi</td><td>Fonksiyon, doğru ad alanıyla <code>load.json</code>’da listelenmiş mi?</td></tr>\n    <tr><td>Bir kez çalışıyor, dünyaya yeniden girince çalışmıyor</td><td>Hazırlık elle çalıştırılmış ve <code>load.json</code>’da yok</td></tr>\n    <tr><td>Bir kez yerine sürekli tetikleniyor</td><td>Komut, koşulsuz bir tick fonksiyonunda duruyor</td></tr>\n    <tr><td>Koşul hiç tetiklenmiyor</td><td>Hedef adını, hedeflenen varlığı ve sayıyı kontrol et — herhangi bir algoritma gibi izle</td></tr></tbody></table></div><div class="card class"><p><strong>Derste:</strong> onların yerine düzeltme. Tetikleyiciyi birlikte kontrol edin: <em>“Bunun ne zaman tetiklenmesi gerektiğini bana açıkla.”</em> Yüklemede mi, her tick’te mi, yoksa yalnızca bir koşul doğru olduğunda mı?</p></div>'
        }
      ],
      quiz: [
        {
          p: 'tick.json’da listelenen bir fonksiyon saniyede kaç kez çalışır?',
          o: ['1', '10', '20', '60'],
          c: 2,
          f: 'Minecraft saniyede 20 oyun tick’i çalıştırır ve tick fonksiyonları her tick’te çalışır.'
        },
        {
          p: 'Bir zamanlayıcı her tick’te puana 1 ekliyor. Hangi değer 30 saniye geçtiği anlamına gelir?',
          o: ['30', '300', '600', '1800'],
          c: 2,
          f: 'Saniyede 20 tick × 30 saniye = 600.'
        },
        {
          p: 'Bir öğrenci bir fonksiyon dosyasını düzenledi ama oyun hâlâ eskisi gibi davranıyor. Önce ne denemeli?',
          o: ['Dünyayı silmek', '/reload çalıştırmak', 'Bilgisayarı yeniden başlatmak', 'Ad alanının adını değiştirmek'],
          c: 1,
          f: '/reload değişen dosyaları yükler ve load fonksiyonlarını yeniden çalıştırır.'
        },
        {
          p: 'Bir skor tablosu hedefi oluşturan komut nereye konmalı?',
          o: ['load.json’da listelenen bir fonksiyona', 'tick.json’da listelenen bir fonksiyona', 'pack.mcmeta’ya', 'Her derste elle yazılmalı'],
          c: 0,
          f: 'Hazırlık bir load fonksiyonuna aittir: dünya yüklenince ya da /reload ile bir kez çalışır.'
        },
        {
          p: 'Bir öğrencinin kuralı tetiklenmiyor ve onu düzeltmeni istiyor. Ne dersin?',
          o: ['“Dur, senin yerine yeniden yazayım.”', '“Bunun ne zaman tetiklenmesi gerektiğini bana açıkla.”', '“Sparks’tan yeniden yazmasını iste.”', '“Veri paketleri çok zor — bunu geç.”'],
          c: 1,
          f: 'Tetikleyiciyi birlikte kontrol etmek, çözmeyi adım adım öğrencide tutar.'
        }
      ]
    }
  ],
  tracers: {
    robot: {
      title: 'Kendin izle: sayı doğrusundaki robot',
      code: ['x = 3', 'repeat 4 times:', '    if x is a multiple of 3:', '        move 2 forward', '    otherwise:', '        move 1 back'],
      steps: [
        {
          l: 0,
          v: { x:3, round:'–' },
          n: 'Her şeyden önce başlangıç değerini yaz.'
        },
        {
          l: 2,
          v: { x:3, round:1 },
          n: '1. tur. 3, 3’ün katı mı? Evet.'
        },
        {
          l: 3,
          v: { x:5, round:1 },
          n: '3 + 2 = 5. Sonraki tur x’in YENİ değerini, 5’i kontrol eder.'
        },
        {
          l: 5,
          v: { x:4, round:2 },
          n: '2. tur. 5, 3’ün katı değil, bu yüzden geri: 5 − 1 = 4.'
        },
        {
          l: 5,
          v: { x:3, round:3 },
          n: '3. tur. 4, 3’ün katı değil: 4 − 1 = 3.'
        },
        {
          l: 3,
          v: { x:5, round:4 },
          n: '4. tur. 3 yine 3’ün katı: 3 + 2 = 5. Dört tur tamam.'
        },
        {
          l: 1,
          v: { x:5, round:'done' },
          n: 'Son cevap: 5. Robotun 3’e geri döndüğüne dikkat et — aynı değere geri dönen bir döngü, tahmin edenler için klasik bir tuzaktır.'
        }
      ]
    },
    coins: {
      title: 'Kendin izle: içinde koşul olan bir döngü',
      code: ['coins = 2', 'repeat 3 times:', '    coins = coins + 3', '    if coins > 6:', '        coins = coins * 2'],
      steps: [
        {
          l: 0,
          v: { coins:2, round:'–' },
          n: 'Başlangıç değeri.'
        },
        {
          l: 2,
          v: { coins:5, round:1 },
          n: '1. tur: önce topla. 2 + 3 = 5.'
        },
        {
          l: 3,
          v: { coins:5, round:1 },
          n: 'Şimdi YENİ değeri kontrol et: 5 > 6 mı? Hayır — hiçbir şey ikiye katlanmaz.'
        },
        {
          l: 2,
          v: { coins:8, round:2 },
          n: '2. tur: 5 + 3 = 8.'
        },
        {
          l: 4,
          v: { coins:16, round:2 },
          n: '8 > 6, öyleyse ikiye katla: 16.'
        },
        {
          l: 2,
          v: { coins:19, round:3 },
          n: '3. tur: 16 + 3 = 19.'
        },
        {
          l: 4,
          v: { coins:38, round:3 },
          n: '19 > 6, yine ikiye katla: 38. Eşik bir kez aşıldığında ikiye katlama her turda gerçekleşir.'
        }
      ]
    },
    flag: {
      title: 'Kendin izle: bir sayaç, bir bayrak ve bir durma kuralı',
      code: ['numbers = 6, 1, 8, 3, 12', 'counter = 0, mode = off', 'for each number, in this order:', '    if number > 5: counter + 1', '    if counter == 2: mode = on', '    if mode is on and number is odd: STOP'],
      steps: [
        {
          l: 1,
          v: { number:'–', counter:0, mode:'off' },
          n: 'Başlamadan önce her değişkeni kendi sütununa yaz.'
        },
        {
          l: 3,
          v: { number:6, counter:1, mode:'off' },
          n: '6 > 5 → sayaç 1. Mod hâlâ kapalı. Zaten 6 çift.'
        },
        {
          l: 5,
          v: { number:1, counter:1, mode:'off' },
          n: '1, > 5 değil. Mod kapalı, bu yüzden 1 tek olsa da durma kuralı tetiklenemez.'
        },
        {
          l: 4,
          v: { number:8, counter:2, mode:'on' },
          n: '8 > 5 → sayaç 2 → mod bu aynı adımda açılır.'
        },
        {
          l: 5,
          v: { number:8, counter:2, mode:'on' },
          n: 'Üçüncü kural, aynı sayı: mod açık ama 8 çift. Devam.'
        },
        {
          l: 5,
          v: { number:3, counter:2, mode:'on' },
          n: '3: > 5 değil. Mod açık ve 3 tek → 3’te DUR. 12 hiç okunmaz.'
        }
      ]
    },
    pyloop: {
      title: 'Kendin izle: Python’da for + range',
      code: ['total = 1', 'for i in range(3):', '    total = total + i * 3', 'print(total)'],
      steps: [
        {
          l: 0,
          v: { total:1, i:'–' },
          n: 'total 0’dan değil 1’den başlar — başlangıç değerini her zaman kontrol et.'
        },
        {
          l: 1,
          v: { total:1, i:0 },
          n: 'range(3) 0, 1, 2 verir. 0’dan başlar ve hiç 3’e ulaşmaz.'
        },
        {
          l: 2,
          v: { total:1, i:0 },
          n: '1 + 0 * 3 = 1. Çarpma toplamadan önce yapılır.'
        },
        {
          l: 2,
          v: { total:4, i:1 },
          n: '1 + 1 * 3 = 4.'
        },
        {
          l: 2,
          v: { total:10, i:2 },
          n: '4 + 2 * 3 = 10. Bu, range(3)’ün ürettiği son değerdi.'
        },
        {
          l: 3,
          v: { total:10, i:2 },
          n: 'print girintili değil, bu yüzden döngüden sonra bir kez çalışır. Çıktı: 10.'
        }
      ]
    },
    pyreturn: {
      title: 'Kendin izle: return’ün yeri her şeyi değiştirir',
      code: ['def count_evens(numbers):', '    count = 0', '    for n in numbers:', '        if n % 2 == 0:', '            count += 1', '        return count', '', 'count_evens([2, 4, 6])'],
      steps: [
        {
          l: 7,
          v: { n:'–', count:'–', returned:'–' },
          n: 'Fonksiyonu [2, 4, 6] ile çağırıyoruz. Beklenen cevap 3.'
        },
        {
          l: 1,
          v: { n:'–', count:0, returned:'–' },
          n: 'count 0’dan başlar.'
        },
        {
          l: 2,
          v: { n:2, count:0, returned:'–' },
          n: 'Döngünün ilk turu: n = 2.'
        },
        {
          l: 4,
          v: { n:2, count:1, returned:'–' },
          n: '2 % 2 == 0, bu yüzden count 1 olur.'
        },
        {
          l: 5,
          v: { n:2, count:1, returned:1 },
          n: 'return, for döngüsünün İÇİNDE girintili. Daha ilk turda çalışır ve fonksiyondan çıkar: sonuç 1. 4’e ve 6’ya hiç bakılmaz.'
        },
        {
          l: 5,
          v: { n:2, count:1, returned:1 },
          n: 'Düzeltme: return count’u dört boşluk geri, for ile aynı seviyeye al. Böylece tüm sayılar sayıldıktan sonra bir kez çalışır.'
        }
      ]
    }
  }
};
