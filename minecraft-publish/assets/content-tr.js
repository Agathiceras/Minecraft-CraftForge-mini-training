/* ============================================================
   Minecraft publishing simulation (Kodland Sparks + Kodland Launcher + the lesson card) · TURKISH
   Translated from content-en.js (the base version). Keep HTML tags, keys and the button names
   that appear in the real interface (Publish project, Minecraft skin, Image, Public, Only me, Edit, Everyone, Copy link…).
   ============================================================ */
window.CONTENT = { lang: 'tr' };

CONTENT.ui = {
  title: 'Kodland Sparks · Bir Minecraft projesi yayınla',
  coachStep: (n, total) => `Adım ${n} / ${total}`,
  next: 'İleri →',
  finish: 'Bitir ✓',
  clickHint: '👆 Vurgulanan yere tıkla',
  followStep: 'Vurgulanan adımı takip et 🙂',
  langName: 'Türkçe',
  studentNick: 'lucas_craft',
  studentName: 'Lucas',
  studentInitial: 'L',
  skinTitle: 'Kaşif Lucas',
  skinFile: 'lucas_skin.png',
  towerTitle: 'Gözetleme kulesi',
  oldTitle: 'Adadaki evim',
  fileName: 'watchtower.png',
  packName: 'Taş Elmalar',
  uploaded: 'Yüklendi ✓',
  uploaded2: '26 Eki 2026’da yüklendi',
  saved: 'Kaydedildi',
  copied: 'Bağlantı kopyalandı',
  chars: n => `${n} karakter`,
  cardTab: 'Kodland platformu · 1. Ders',
  cardUrl: 'https://platform.kodland.org/lesson/1'
};

CONTENT.flows = {
  /* Beginner: part 1 = the skin as a Minecraft skin project (Lesson 1); part 2 = a build screenshot as an Image project (Lesson 2 and homework) */
  image: {
    card: { gif: 'assets/crafters-skin.gif', label: 'Kodland Sparks’taki Skin’imin bağlantısı', placeholder: 'Skin’inin bağlantısını buraya yapıştır' },
    welcome: {
      kicker: '⚡ Simülasyon · Minecraft CraftForge Beginner',
      title: 'Kodland Sparks’ta <span>bir skin ve bir yapı</span> yayınla',
      lead: 'Minecraft CraftForge Beginner’da öğrenciler 1. Dersten itibaren çalışmalarını Kodland Sparks’ta yayınlar: önce kendi <b>skin</b>’lerini, ardından yapılarının ekran görüntülerini <b>Image</b> projeleri olarak. Sonra proje bağlantısını ders kartına yapıştırırlar. Burada bir öğrenci olan Lucas’ı canlandırıyorsun.',
      seeTitle: 'Neler yapacaksın',
      see: ['Bir skin’i <b>Minecraft skin</b> projesi olarak yayınla ve kimlerin görebileceğini seç.', 'Bağlantıyı bul: <b>My projects → yayınlanan proje → tarayıcının adres çubuğundaki adres</b>.', 'Bağlantıyı Kodland platformundaki ders kartına yapıştır.', 'Bir yapının ekran görüntüsünü <b>Image</b> projesi olarak yayınla ve başka kimsenin açamadığı bir bağlantıyı düzelt.'],
      how: 'Bir rehber kart sana her adımı gösterir. Vurgulanan yere tıkla. Yaklaşık 5 dakika sürer.',
      start: 'Simülasyonu başlat →'
    },
    steps: {
      start: { title: 'Lucas’ın skin’i hazır', text: 'Lucas zanaatkârını çizdi: 64×64 PNG bir skin dosyası. Şimdi onu launcher’da giyebilmek ve bağlantısını ders kartında gönderebilmek için Kodland Sparks’ta yayınlıyor.' },
      navPublish: { title: 'Publish project', text: 'Sparks’ın üst çubuğunda <b>Publish project</b>’e tıkla.' },
      typeSkin: { title: 'Proje türü: Minecraft skin', text: 'Sekiz proje türü vardır. Bir skin, <b>Minecraft skin</b> olarak yayınlanır: Sparks onu 3D bir model üzerinde gösterir. Ona tıkla.' },
      title: { title: 'Bir ad ver', text: 'Başlık alanına tıkla. Açık bir adı olan proje daha sonra kolayca bulunur — hem öğrenci hem de senin için.' },
      model: { title: 'Steve veya Alex', text: '<b>Model</b>, skin’in gösterileceği vücut şeklini belirler: <b>Steve</b> (klasik kollar) veya <b>Alex</b> (ince kollar). Varsayılan olarak Steve seçilidir.' },
      upload: { title: 'Skin dosyası (PNG)', text: '<b>Choose file</b>’a tıkla ve skin’i ekle: <b>64×64 PNG</b> (eski 64×32 formatı da çalışır).' },
      visibility: { title: 'Kimler görebilir', text: '<ul><li><b>Public</b>: akışta ve herkese açık portfolyoda.</li><li><b>Friends only</b>: arkadaşlar, öğretmenler ve öğrencinin kendisi.</li><li><b>Only me</b>: bağlantıyı başka kimse açamaz — sen bile.</li></ul>Önemli olan, <b>bağlantıyı senin açabilmendir</b>.' },
      visPublic: { title: 'Public’i seç', text: 'Lucas diğer oyuncuların zanaatkârını görmesini istiyor. <b>Public</b>’e tıkla.' },
      toggles: { title: 'Sondaki seçenekler', text: '<ul><li><b>Request feedback</b>: diğer yazarlar yapılandırılmış geri bildirim bırakabilir (yalnızca herkese açık projelerde).</li><li><b>Others can modify this project</b>: varsayılan olarak açıktır — başkaları kendi kopyalarını açabilir; orijinal proje değişmez.</li><li><b>Discord selection</b>: günün en iyi herkese açık projeleri Discord’da paylaşılır.</li></ul>' },
      publish: { title: 'Publish', text: '<b>1× 💎 Publish</b>’e tıkla. Yayınlamak ayrıca bir kristal kazandırır.' },
      findMy: { title: 'Bağlantı nerede?', text: 'Skin yayınlandı. Şimdi öğrencinin bağlantısına ihtiyacı var. Bu, bir yerden kopyalanacak bir metin değildir: proje sayfasının adresidir. Önce <b>My projects</b>’e git.' },
      openSkin: { title: 'Yayınlanan projeyi aç', text: 'Profil, öğrencinin projelerini gösterir. Az önce yayınladığın skin’e tıkla.' },
      copy: { title: 'Bağlantıyı tarayıcı çubuğundan kopyala', text: 'Proje sayfası açık. Bağlantısı, <b>tarayıcı çubuğundaki</b> adrestir: <code>portfolio.kodland.org/nickname/…</code>. Seçmek için çubuğa tıkla ve kopyala (Ctrl + C / Cmd + C).' },
      toCard: { title: 'Platformdaki derse git', text: 'Sparks’ta yayınlamak ve Kodland platformunda bağlantıyı göndermek <b>iki farklı adımdır</b>. Ders sekmesini aç.' },
      paste: { title: 'Bağlantıyı karta yapıştır', text: 'Bu, platformdaki <b>“Zanaatkârın Skin’i”</b> kartıdır. Bağlantıyı yapıştırmak için <b>“Kodland Sparks’taki Skin’imin bağlantısı”</b> alanına tıkla (Ctrl + V / Cmd + V). Buraya yalnızca bağlantı yazılır. Bağlantıların gerçekten ulaştığını Backoffice’te kontrol et.' },
      imageIntro: { title: '2. Dersten itibaren: Image olarak yapılar', text: '2. Dersten itibaren öğrenciler <b>yapılarının ekran görüntülerini</b> de yayınlar (kendini görmek için F5, arayüzü gizlemek için F1). Lucas az önce bir gözetleme kulesini bitirdi. Kodland Sparks sekmesine geri dön.' },
      navPublish2: { title: 'Publish project', text: 'Tekrar <b>Publish project</b>’e tıkla.' },
      typeImage: { title: 'Proje türü: Image', text: 'Bir ekran görüntüsü <b>Image</b> olarak yayınlanır. Ona tıkla.' },
      title2: { title: 'Ad', text: 'Başlık alanına tıkla.' },
      upload2: { title: 'Drawing: ekran görüntüsü', text: '<b>Drawing</b> bölümünde <b>Choose file</b>’a tıkla (en fazla 5 MB PNG, JPG, WebP veya GIF). Windows’ta ekran görüntüsü <b>Resimler → Ekran Görüntüleri</b> klasöründedir; Mac’te masaüstündedir.' },
      publish2: { title: 'Publish', text: 'Görünürlük <b>Public</b> olarak kalır. <b>Publish</b>’e tıkla. Bağlantı aynı şekilde bulunur: My projects → proje → tarayıcı çubuğu.' },
      problem: { title: 'Açılmayan bir bağlantı', text: 'Başka bir durum: bir öğrenci bağlantı gönderiyor ve bağlantı senin için açılmıyor. Öğrencinin profilinde projede <b>Private project</b> etiketi görünüyor: proje <b>Only me</b> olarak kaydedilmiş. Lucas olarak bunu düzeltelim.' },
      myProjects: { title: 'My projects', text: '<b>My projects</b>’e tıkla.' },
      privateCard: { title: 'Gizli proje', text: '<b>Private project</b> etiketli projeyi aç.' },
      edit: { title: 'Edit', text: '<b>Edit</b>’e tıkla.' },
      fixPublic: { title: 'Görünürlüğü değiştir', text: '<b>Public</b>’i seç (veya öğretmenlerin de açabildiği <b>Friends only</b>’yi).' },
      resend: { title: 'Tekrar yayınla', text: '<b>Publish</b>’e tıkla. Bağlantı aynı kalır ve artık senin için açılır.' },
      done: { title: 'Düzeltildi', text: 'Proje herkese açık ve tarayıcı çubuğundaki bağlantı çalışıyor. Bir bağlantı hâlâ açılmıyorsa öğrenciden ekranını paylaşmasını iste ve adımları birlikte tekrarlayın.' }
    },
    finish: {
      kicker: '🏁 Simülasyon tamamlandı',
      title: '<span>Minecraft çalışmalarının</span> nasıl yayınlandığını biliyorsun',
      intro: 'Bir ders yayınlamayı istediğinde öğrenciler her zaman bunu yapar:',
      points: ['Skin: <b>Publish project</b> → <b>Minecraft skin</b> → ad → Model (Steve/Alex) → 64×64 PNG → <b>Publish</b>.', 'Yapı: ekran görüntüsü (F5, F1) → <b>Publish project</b> → <b>Image</b> → ad → Drawing → <b>Publish</b>.', 'Bağlantı: <b>My projects → yayınlanan proje → adresi tarayıcı çubuğundan kopyala</b>, ardından platformdaki ders kartına yapıştır. Yayınlamak ve bağlantıyı göndermek iki farklı adımdır.', '<b>Private project</b> = Only me: My projects → proje → Edit → Public → Publish. Bağlantı aynı kalır.'],
      back: 'Eğitime geri dön: modül kontrolü artık açık.',
      again: '↺ Tekrar yap'
    }
  },

  /* Intermediate: the data pack is published from the Kodland Launcher (0.8.20) */
  datapack: {
    card: { gif: 'assets/sign-the-law.gif', label: 'Kodland Sparks’taki Yasamın bağlantısı', placeholder: 'Yayınladığın data pack’in bağlantısını buraya yapıştır' },
    welcome: {
      kicker: '⚡ Simülasyon · Minecraft CraftForge Intermediate',
      title: 'Kodland Sparks’ta <span>bir data pack</span> yayınla',
      lead: 'Minecraft CraftForge Intermediate’da öğrenciler Kodland Launcher’da bir <b>data pack</b> içinde dünya için yasalar (tarifler, droplar, komutlar) oluşturur ve onu düzenleyiciden Sparks profillerinde yayınlar. Burada ilk tarifini az önce oluşturan bir öğrenci olan Lucas’ı canlandırıyorsun.',
      seeTitle: 'Neler yapacaksın',
      see: ['Data pack’i launcher’da aç: <b>Create → Data packs → Edit</b>.', '<b>Who can see it? → Everyone</b> ile yayınla ve bağlantıyı kopyala.', 'Bağlantıyı Kodland platformundaki ders kartına yapıştır.', 'Açılmayan bir bağlantıyı düzelt ve bağlantıyı <b>Open on Sparks</b> ile yeniden bul.'],
      how: 'Bir rehber kart sana her adımı gösterir. Vurgulanan yere tıkla. Yaklaşık 4 dakika sürer.',
      start: 'Simülasyonu başlat →'
    },
    steps: {
      start: { title: 'Yasa çalışıyor', text: 'Lucas data pack’inde bir tarif oluşturdu, kaydetti, dünyaya geri döndü ve eşyasını üretti. Şimdi yasayı imzalıyor: data pack’i Kodland Sparks’ta yayınlıyor. Burası launcher, <b>Play</b> sekmesinde.' },
      create: { title: 'Create', text: 'Data pack’ler <b>Create</b> sekmesindedir. <b>Create</b>’e tıkla.' },
      edit: { title: 'Data pack', text: 'Öğrencinin data pack’leri burada. Tarifin olduğu paketteki <b>Edit</b>’e tıkla.' },
      editor: { title: 'Data pack düzenleyicisi', text: 'Solda paketin içindekiler, ortada tarif formu. Sağ üstte <b>Publish</b>, mor <b>Save</b> düğmesinin yanındadır.' },
      publish: { title: 'Publish', text: '<b>Publish</b>’e tıkla.' },
      name: { title: 'Ad', text: '“Publish to your profile” açılır. <b>Name</b> alanına tıkla. <b>About it</b> isteğe bağlıdır.' },
      who: { title: 'Who can see it?', text: 'Bu, bağlantıyı kimlerin açabileceğini belirler. Bağlantı yalnızca <b>Everyone</b> ile, öğrencinin hesabına giriş yapmadan başkaları için — sen de dahil — açılır.' },
      everyone: { title: 'Everyone', text: '<b>Everyone</b>’ın seçili olduğunu kontrol et ve ona tıkla.' },
      submit: { title: 'Publish', text: '<b>Publish</b>’e tıkla.' },
      copy: { title: 'Yayınlandı! Bağlantıyı kopyala', text: 'Proje bağlantısı ve bir kristalle birlikte “Published! It is on your profile.” mesajı görünür. <b>Copy link</b>’e tıkla.' },
      close: { title: 'Done', text: 'Düğmede artık <b>Copied!</b> yazıyor. <b>Done</b>’a tıkla.' },
      toCard: { title: 'Platformdaki derse git', text: 'Sparks’ta yayınlamak ve Kodland platformunda bağlantıyı göndermek <b>iki farklı adımdır</b>. Ders sekmesini aç.' },
      paste: { title: 'Bağlantıyı karta yapıştır', text: 'Bu, platformdaki <b>“Yasayı İmzala”</b> kartıdır. Bağlantıyı yapıştırmak için <b>“Kodland Sparks’taki Yasamın bağlantısı”</b> alanına tıkla (Ctrl + V / Cmd + V). Bağlantıların gerçekten ulaştığını Backoffice’te kontrol et.' },
      problem: { title: 'Açılmayan bir bağlantı', text: 'Sonraki derste Lucas bir güncelleme yayınlıyor ve bağlantı senin için açılmıyor. Büyük olasılıkla “Who can see it?” <b>Only me</b> olarak ayarlanmış. Çözüm: Everyone ile tekrar yayınlamak.' },
      backLauncher: { title: 'Launcher’a geri dön', text: 'Kodland Launcher sekmesini aç.' },
      republish: { title: 'Tekrar yayınla', text: 'Düzenleyicide <b>Publish</b>’e tıkla.' },
      fixEveryone: { title: 'Everyone', text: 'Data pack <b>Only me</b> olarak yayınlanmış. <b>Everyone</b>’ı seç.' },
      resubmit: { title: 'Publish', text: '<b>Publish</b>’e tıkla. Bağlantı artık herkes için açılıyor.' },
      lostLink: { title: 'Bağlantıyı mı kaybettin?', text: 'Öğrenci bağlantıyı kopyalamadan pencereyi kapattıysa, bağlantı her zaman yeniden bulunabilir: <b>Open on Sparks</b> (burada veya düzenleyicinin üstünde) proje sayfasını açar. Ona tıkla.' },
      done: { title: 'Proje sayfası', text: 'Data pack, öğrencinin Sparks profilinde açılır. Bağlantı, tarayıcı çubuğundaki adrestir — öğrenci onu oradan kopyalar ve karta yapıştırır.' }
    },
    finish: {
      kicker: '🏁 Simülasyon tamamlandı',
      title: '<span>Bir data pack’in</span> nasıl yayınlandığını biliyorsun',
      intro: 'Bir ders yasalarını yayınlamalarını istediğinde öğrenciler her zaman bunu yapar:',
      points: ['Launcher: <b>Create → Data packs → Edit</b> → <b>Publish</b> (Save’in yanında).', '“Publish to your profile”: ad → <b>Who can see it? → Everyone</b> → Publish → <b>Copy link</b> → Done.', 'Bağlantıyı platformdaki ders kartına yapıştır. Yayınlamak ve bağlantıyı göndermek iki farklı adımdır.', 'Bağlantı açılmıyor → <b>Everyone</b> ile tekrar yayınla. Bağlantı kayboldu → <b>Open on Sparks</b> ve adresi tarayıcı çubuğundan kopyala.'],
      back: 'Eğitime geri dön: modül kontrolü artık açık.',
      again: '↺ Tekrar yap'
    }
  }
};
