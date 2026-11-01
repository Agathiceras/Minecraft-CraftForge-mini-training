/* ============================================================
   EM course training · Minecraft CraftForge (Beginner + Intermediate) [2242] · INDONESIAN
   Translated from content-en.js. Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names, commands and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by region (see COURSE.code and the 'bo' section).
   ============================================================ */
window.COURSE = { lang: 'id' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Pelatihan kursus EM',
  footer: 'kodland · Model Pendidikan Baru · Pelatihan kursus',
  devLink: '🛠 Pengembang',
  logoSub: 'Model Pendidikan Baru',
  navHome: '← Beranda',
  navBackModule: '← Kembali ke modul',
  moduleN: 'Modul {n}',
  badgeStart: 'Mulai →',
  badgeLocked: '🔒 Selesaikan Modul {n}',
  badgeDone: '✓ Selesai · {score}%',
  progLabel: 'modul selesai',
  progAllDone: 'Semua modul selesai 🎉',
  eyebrow: '{course} · Modul {n} dari {total}',
  ctaTitle: 'Evaluasi modul',
  ctaText: '{n} pertanyaan singkat. Raih skor 70% atau lebih untuk lulus.',
  lockSim: '🔒 Selesaikan simulasi di atas untuk membuka evaluasi.',
  startCheck: 'Mulai evaluasi →',
  retake: '🔁 Ulangi evaluasi',
  qmeta: '{e} Evaluasi Modul {n} · Pertanyaan {i} dari {total}',
  fbRight: '✅ <b>Benar!</b> ',
  fbWrong: '❌ <b>Belum tepat.</b> ',
  nextQuestion: 'Pertanyaan berikutnya →',
  seeResult: 'Lihat hasil saya →',
  passedTitle: 'Anda lulus!',
  failTitle: 'Sedikit lagi',
  scoreLine: 'Anda menjawab <b>{score} dari {n}</b> pertanyaan dengan benar.',
  failText: 'Anda memerlukan skor 70% atau lebih. Pelajari lagi modulnya, lalu coba kembali — Anda bisa mengulanginya sebanyak yang diperlukan.',
  nextUnlocked: '<b>Modul {n} · {title}</b> sekarang sudah terbuka.',
  goModule: 'Ke Modul {n} →',
  allDoneText: 'Anda sudah menyelesaikan semua modul pelatihan ini.',
  seeNext: 'Lihat langkah selanjutnya →',
  reviewModule: '📖 Pelajari lagi modulnya',
  homeDoneTitle: 'Semua modul selesai!',
  homeDoneText: 'Satu langkah terakhir: tes DST di halaman pelatihan LMS.',
  homeDoneBtn: 'Lihat langkah selanjutnya →',
  doneBadge: '✓ Selesai',
  doneBack: 'Kembali ke modul',
  lockedTitle: 'Masih terkunci',
  lockedModule: 'Selesaikan Modul {n} terlebih dahulu.',
  lockedStep: 'Selesaikan langkah sebelumnya untuk membuka langkah ini.',
  ok: 'OK',
  linkOpen: 'Buka ↗',
  projPlay: '▶ Buka ↗',
  simOpen: '▶ Buka simulasi di sini',
  simClose: '✕ Tutup simulasi',
  simNewTab: 'Buka di tab baru ↗',
  simDone: '✅ Simulasi selesai',
  simTodo: '○ Simulasi belum dikerjakan',
  checkTag: 'Centang semuanya',
  mythTag: 'Mitos',
  mythTap: 'Ketuk untuk melihat faktanya →',
  mythReality: 'Faktanya ✓',
  sortWrong: '✗ Belum tepat.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'mccf';
COURSE.code = '2242';
COURSE.title = 'Minecraft CraftForge';
COURSE.color = '#16A34A';

COURSE.home = {
  kicker: '🎓 Pelatihan kursus · [2242]',
  title: 'Minecraft <span class="hl">CraftForge</span>',
  lead: 'Untuk siswa usia 10–12 tahun: mereka menulis hukum dunia Minecraft dengan data pack dan program Python yang membangun jembatan, menara, hingga dunia utuh. Tiga modul: materi kursus Intermediate, keterampilan yang Anda butuhkan untuk kursus, dan sisi teknis pelajaran.',
  facts: [
    ['🧑‍💻', '<b>Sesuai kecepatan Anda.</b> Progres Anda tersimpan di browser ini. Setiap modul diakhiri dengan evaluasi singkat.'],
    ['⚡', '<b>Dilengkapi latihan.</b> Simulasi untuk berlatih cara memublikasikan data pack di Kodland Sparks dan mengatasi masalah yang paling sering muncul.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Sebelum mulai:</b> selesaikan dulu <b>pelatihan inti Model Pendidikan Baru (EM)</b>. Pelatihan kursus ini adalah lanjutannya dan dibangun di atas apa yang sudah Anda pelajari di sana: Backoffice dan Teacher Notes, Classroom dengan Follow Mode, tur Kodland Sparks, dan kualitas pelajaran.' },
  { kind:'warn', e:'🔄', html:'<b>Konten pelajaran di Backoffice terus diperbarui.</b> Pelajaran terus disempurnakan berdasarkan umpan balik dari siswa dan tutor. Jangan khawatir: setiap kali ada perubahan, Anda akan diberi tahu lebih dulu agar bisa menyiapkan pelajarannya.' }
];

/* ---------------- Modules ----------------
   Intermediate course content → Skills for the course → technical side (+ final survey, added by shared/final-survey.js).
   The Skills module is drawn by assets/skills.js from COURSE.skills (end of this file). */
COURSE.modules = [
  { id:'int', n:1, e:'📜', color:'#0EA5E9', title:'Materi kursus · Intermediate',
    desc:'Informasi umum kursus, apa yang dicapai siswa, dan pelajaran pertama Modul 1.',
    obj:'Bersiap mengajar pelajaran pertama Minecraft CraftForge Intermediate. Di dalamnya, siswa usia 10–12 tahun membuat hukum pertama mereka untuk dunia Minecraft — sebuah resep di data pack — mengujinya di game, lalu mempublikasikannya di Kodland Sparks.',
    offer:[['🧱','Mengetahui informasi umum kursus dan apa yang dicapai siswa.'],['📖','Mengetahui apa yang terjadi di pelajaran pertama.'],['📦','Memahami apa itu data pack dan cara siswa bekerja dengannya.'],['📘','Mempelajari pelajaran pertama dan Teacher Notes-nya di Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'Kursusnya', blocks:[
        { t:'meta', items:[['🧒','Usia','10–12 tahun'],['⏱️','Pelajaran','90 menit'],['📚','Program','40 pelajaran · 10 modul'],['🐍','Bahasa','Python']] },
        { t:'trio', items:[
          ['🎬','Hasil akhir lebih dulu','Setiap pelajaran dibuka dengan menunjukkan hasil akhir dan menyebutkan tujuannya dengan lantang. Lalu Anda menunjukkan seluruh langkahnya di layar Anda dan membimbing siswa selangkah demi selangkah.'],
          ['📜','Dari pemain menjadi kreator','Biasanya pemain mengikuti aturan dunia. Di sini siswa yang menulisnya: resep, drop, perintah, lalu program Python yang membangun.'],
          ['🔍','Kesalahan adalah bagian dari proses','Saat dunia tidak merespons: <i>Apa yang saya lihat? Kenapa begitu? Apa yang akan saya coba? Berhasil tidak?</i> Pelajaran berisi pengecekan masalah berulang agar siswa menemukan penyebabnya sendiri.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Siswa memublikasikan karya mereka di <b>Kodland Sparks</b>, portofolio mereka, di setiap pelajaran. <b>Sparks AI</b> memberi ide dan skenario pengujian, tetapi siswa yang memutuskan apa yang akan digunakan sebagai proyeknya.' }
      ]},
      { id:'goals', e:'🎓', title:'Apa yang dicapai siswa', blocks:[
        { t:'p', html:'Di akhir kursus, siswa akan meraih pencapaian berikut:' },
        { t:'cards', cols:2, items:[
          ['🧱','Membuat proyek','Lebih dari sembilan proyek di portofolio Kodland Sparks, ditambah proyek kelulusan yang orisinal.'],
          ['🐍','Python yang membangun','Menulis program Python yang memunculkan jembatan, menara, dan pola di dunia game. Perintah, argumen, variabel, tipe data, perulangan, kondisi, dan fungsi menjadi alat sehari-hari.'],
          ['📜','Aturan dunia','Dengan data pack, menetapkan hukumnya sendiri untuk Minecraft: resep, perintah khusus, timer, event, dan sistem skor.'],
          ['🌍','Generator dan game','Menulis algoritma yang membuat potongan dunia secara utuh, dan membangun mini-game untuk dimainkan orang lain.'],
          ['🚀','Membawa ide ke Demo Day','Mengembangkan proyek dari konsep hingga presentasi di depan grup, dan menjelaskan cara kerja kodenya.'],
          ['🧠','Keterampilan untuk hidup','Kreativitas, kerja sama (menguji proyek teman), komunikasi, dan berpikir kritis: menemukan bug dan menilai jawaban Sparks AI alih-alih menyalinnya.']
        ]}
      ]},
      { id:'les', e:'📖', title:'Pelajaran pertama', blocks:[
        { t:'p', html:'Modul 1, <b>“Kode Dunia. Program Pertama dan Hukum Dunia”</b>, diakhiri dengan proyek <b>“Monumen Kode”</b>. Pelajaran pertama membahas <b>hukum dunia dalam data pack</b>. Buka pelajarannya dan baca apa yang perlu Anda ketahui, hasil utamanya, peran Anda, dan hal-hal yang perlu diperhatikan.' },
        { t:'lessons', key:'int', items:[
          { tab:'M1L1', e:'📜', h:'Pelajaran 1 — Jejak Pertama di Kode Dunia', p:'Pelajaran pertama kursus (8 kartu dan PR). Siswa menjalankan launcher, berkenalan dengan grup, mencoba latihan hukum, masuk ke dunia melalui Nether, membuat hukum pertama mereka — sebuah resep — di data pack, mengujinya, lalu memublikasikannya di Sparks. Setelah itu mereka merencanakan markas bersama Sparks AI dan membangunnya.',
            acc:[['📚','Yang perlu Anda ketahui','<ul><li><b>Data pack</b> adalah kumpulan hukum untuk dunia. Hukum dibuat di luar dunia, di studio launcher, dan dunia menjalankannya setiap kali Anda masuk.</li><li>Jenis-jenis hukum: <b>resep</b>, <b>drop</b>, <b>perintah</b> saat masuk, <b>pencapaian</b>. Hari ini: resep.</li><li>Alurnya: <b>Esc</b> dan keluar dari dunia sambil menyimpan → <b>Create → Data packs → Create data pack → Empty</b> → <b>Add → Recipe</b> → crafting table, item, hasil → <b>Save</b>.</li><li>Kode dunia dimasukkan di tab <b>Play</b>. Siswa membangun dalam creative mode.</li></ul>'],
                 ['🎯','Hasil utama','<ul><li>Semua siswa sudah menyimpan data pack dengan resep mereka sendiri sekitar pukul 00:45.</li><li>🏁 Data pack sudah <b>dipublikasikan di Sparks dan tautannya ada di tugas</b> (kartu “Tanda Tangani Hukum”, sekitar pukul 01:00). Kartu ini tidak pernah dipersingkat.</li><li>Siswa memberi nama sendiri pada item-nya, dan membuatnya di crafting table di dalam dunia.</li></ul>'],
                 ['🧑‍🏫','Peran Anda','<ul><li>Kenali grupnya selagi game terunduh; panggil nama siswa sepanjang pelajaran.</li><li>Sebutkan tujuannya dengan lantang: “Hari ini setiap orang akan membuat hukumnya sendiri untuk Minecraft, mengujinya di game, dan memublikasikannya di portofolio.”</li><li>Jangan menentukan resepnya: idenya harus berbeda-beda — itulah yang membuat proyeknya personal. Tanyakan: “Kenapa item ini? Siapa yang akan membutuhkannya?”</li><li><b>Mengecek proyek setiap siswa:</b> ambil satu item dari crafting table → hadiahnya hilang. Tanyakan kenapa, lalu gunakan empat pertanyaan. Puji siswa yang menemukan penyebabnya, bukan hanya yang berhasil pertama kali.</li></ul>'],
                 ['📌','Perhatikan','<ul><li>Data pack tidak tersimpan → salah satu dari tiga bagian formulir masih kosong.</li><li>Hukum tidak berfungsi → disimpan saat dunia sedang terbuka: keluar lalu masuk lagi.</li><li>Resep tidak bisa di-craft → susunan item tidak sama dengan di formulir, atau di-craft di inventaris, bukan di crafting table.</li><li>Tautan tidak bisa dibuka → “Who can see it?” tidak diatur ke <b>Everyone</b>: publikasikan lagi.</li></ul>'],
                 ['⚙️','Aspek teknis','<ul><li>Sehari sebelumnya, kirim tautan launcher ke chat grup.</li><li>Coba sendiri seluruh alurnya: kode dunia → pantai → keluar sambil menyimpan → data pack dengan resep → kembali ke dunia → crafting table → hadiah → publikasikan di Sparks.</li><li>Kode dunia: <b>Welcome to KodlandCraft</b>.</li><li>PR: tambahkan satu hukum lagi (ubah resepnya, resep baru, atau perintah/drop), uji, publikasikan pembaruannya, dan kirim tautannya.</li></ul>']] },
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'Teacher Note pertama di setiap pelajaran berisi rencana lengkapnya: ringkasan, hasil utama, durasi setiap kartu, peran Anda, dan risikonya. Pelajaran 1 juga dilengkapi video persiapan. <b>Baca semua Teacher Notes sebelum pelajaran.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Pelajari pelajaran pertama di Backoffice', blocks:[
        { t:'p', html:'Sebelum evaluasi, buka kursusnya di Backoffice dan baca pelajaran pertama sesuai kecepatan Anda — semua kartu aktivitas dan Teacher Notes ada di sana. Tidak ada batas waktu.' },
        { t:'link', href:'https://bo.kodland.org/courses/2242', e:'📘', title:'Buka kursus di Backoffice', small:'[2242] Minecraft CraftForge Intermediate — pelajaran dan Teacher Notes-nya' },
        { t:'callout', kind:'warn', e:'🔄', html:'Konten pelajaran di Backoffice akan terus diperbarui berdasarkan umpan balik dari siswa dan tutor. Setiap kali ada perubahan, Anda akan diberi tahu lebih dulu agar bisa menyiapkan pelajarannya.' }
      ]}
    ]},

  {
    id: 'skills',
    n: 2,
    e: '🧩',
    color: '#8B5CF6',
    title: 'Keterampilan untuk kursus',
    desc: 'Mengenal dunia Minecraft · Logika pemrograman · Praktik pemrograman Python · Data pack: hukum dunia',
    obj: 'Keterampilan yang dibutuhkan tutor di kursus ini, dalam empat blok: dunia Minecraft, logika pemrograman, latihan Python, dan data pack. Setiap blok diakhiri dengan latihan singkat — kamu perlu 70% untuk membuka blok berikutnya.',
    offer: [
      ['🌍', 'Mengenal dunia Minecraft'],
      ['🧠', 'Logika pemrograman'],
      ['🐍', 'Praktik pemrograman Python'],
      ['📜', 'Data pack: hukum dunia']
    ],
    sections: [
      {
        id: 'skx',
        e: '🧩',
        title: 'Keterampilan untuk kursus',
        blocks: [
          { t:'skills' }
        ]
      }
    ]
  },

  { id:'tech', n:3, e:'⚙️', color:'#F03D9E', title:'Sisi teknis pelajaran',
    desc:'Kodland Launcher, awal pelajaran yang kuat, publikasi data pack di Sparks, dan masalah yang paling sering muncul.',
    obj:'Pelajari apa yang membuat pelajaran Minecraft CraftForge berjalan lancar secara teknis: Kodland Launcher, pengecekan launcher sebelum materi, menit-menit terakhir untuk publikasi dan pamer karya, tempat siswa mendapatkan tautan data pack-nya, dan solusi untuk masalah yang paling sering muncul.',
    needs:['mcPublish'],
    offer:[['🟩','Mengunduh, menginstal, dan masuk ke Kodland Launcher.'],['🚀','Melakukan pengecekan launcher sebelum materi, dan memulai dengan hasil akhir.'],['📤','Memastikan setiap siswa memublikasikan data pack dan mengirim tautannya.'],['🛠️','Mengatasi masalah launcher, data pack, dan perintah yang paling sering muncul.']],
    sections:[
      { id:'focus', e:'🎯', title:'3 hal yang membuat pelajaran berhasil', blocks:[
        { t:'p', html:'Inilah fokus utama yang ditetapkan tim produk untuk kursus-kursus Minecraft. Buka satu per satu:' },
        { t:'acc', items:[
          ['🎬','Tunjukkan hasil akhir lebih dulu — dan kenapa membuat berbeda dari bermain','<p>Di menit-menit pertama, <b>tunjukkan hasil akhirnya</b> dan sebutkan apa yang akan dipelajari siswa hari ini.</p><ul><li>Sebutkan tujuannya dengan lantang, misalnya: “Hari ini setiap orang akan membuat hukumnya sendiri untuk Minecraft, mengujinya di game, dan memublikasikannya.”</li><li>Jelaskan bahwa membangun proyek <b>berbeda dari sekadar bermain</b>: biasanya semua aturan dibuat orang lain; di sini siswa yang membuatnya, dan dunia menjalankan ide mereka.</li><li>Tanyakan kepada satu atau dua siswa: “Pernahkah kalian mengubah aturan sebuah game? Bagaimana caranya?”</li></ul>'],
          ['🟩','Pengecekan login dan launcher dilakukan sebelum materi','<p>Lakukan pengecekan koneksi dan launcher <b>sebelum</b> bagian materi. Selagi mengunduh game, Anda bisa berkenalan dengan para siswa.</p><ul><li>Koneksi: satu menit — kamera, mikrofon, “Halo!”.</li><li>Launcher: kirim tautannya, tunjukkan cara masuk di layar Anda, minta siswa mengetik “+” di chat saat bilah hijau muncul.</li><li>Jangan menunggu unduhan selesai, dan jangan menahan grup karena satu atau dua “−”: bantu mereka saat kerja mandiri (studio hukum atau markas).</li><li>Mulai Pelajaran 2: “Buka launcher dan jalankan dunia kalian — biarkan memuat selagi kita mengobrol.”</li></ul>'],
          ['⏱️','Jaga 7–10 menit terakhir','<p><b>7–10 menit</b> terakhir dipakai untuk publikasi, pamer karya, dan umpan balik, bukan untuk membangun proyek.</p><ul><li>Gunakan batas waktu yang tegas: peringatan dua menit, lalu “Stop, lepaskan tangan dari keyboard. Saatnya pamer karya!”, dan langsung sebut nama siswa pertama.</li><li>Saat pamer karya, siswa menunjukkan hukumnya beraksi (meng-craft item secara langsung, menghancurkan blok, masuk lagi ke dunia); grup memberi umpan balik: nama + detail.</li><li>Akhiri dengan rekap, refleksi, pelajaran berikutnya, dan PR. Jangan persingkat bagian ini.</li></ul>']
        ]}
      ]},
      { id:'launcher', e:'🟩', title:'Kodland Launcher', blocks:[
        { t:'p', html:'Siswa membuka Minecraft melalui <b>Kodland Launcher</b>: launcher ini mengunduh game, membuka dunia kursus, dan menjadi tempat mereka membuat data pack dan memublikasikannya di Sparks. Launcher harus sudah terinstal dan siap di komputer Anda sebelum pelajaran pertama.' },
        { t:'callout', kind:'warn', e:'🔑', html:'<b>Kredensial Anda:</b> Anda tidak memerlukan kredensial apa pun untuk mengunduh launcher. Untuk masuk, sebagai tutor Anda memerlukan <b>kredensial Kodland Sparks</b> Anda, yang diberikan oleh <b>Departemen Teaching atau Team Leader</b>. Siswa masuk dengan akun yang sama dengan yang mereka gunakan di platform Kodland — mereka tidak perlu akun baru.' },
        { t:'link', href:'https://portfolio.kodland.org/launcher/download#guide', e:'⬇️', title:'Halaman unduhan dan panduan resmi', small:'portfolio.kodland.org/launcher/download — Windows dan Mac' },
        { t:'cards', cols:2, items:[
          ['🪟','Windows 10 / 11','<ol><li>Unduh installer-nya.</li><li>Buka file yang sudah diunduh.</li><li>Di layar peringatan berwarna biru, klik <b>More info → Run anyway</b>, lalu ikuti installer-nya.</li></ol>'],
          ['🍎','macOS 13 atau lebih baru','<ol><li>Unduh file untuk prosesor Anda (Apple → <b>About This Mac</b>: M1–M4 = Apple Silicon; selain itu, Intel).</li><li>Buka file yang sudah diunduh dan seret <b>Kodland Launcher</b> ke <b>Applications</b>. Jangan membukanya dari jendela itu.</li><li>Buka <b>Terminal</b>, tempel baris di bawah ini dan tekan Return. Tidak muncul apa-apa itu normal.</li><li>Buka launcher dari <b>Applications</b>.</li></ol>']
        ]},
        { t:'p', html:'<code>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</code>' },
        { t:'steps', items:[
          ['Masuk','Klik <b>Sign in</b>. Halaman browser akan terbuka: klik <b>Sign in with Kodland</b> dan gunakan kredensial Kodland Sparks Anda (siswa menggunakan akun platform Kodland mereka). Jika browser tidak terbuka, gunakan tautan di bawah tombol untuk mendapatkan kode pendek (berlaku lima menit).'],
          ['Unduh game','Launcher mengunduh game dalam beberapa tahap. Biarkan berjalan.'],
          ['Play','Saat muncul keterangan semuanya selesai, tekan <b>Play</b>. Peluncuran pertama bisa memakan waktu hingga satu menit. Kode dunia dimasukkan di tab <b>Play</b>.'],
          ['Pembaruan','Jika launcher tidak memperbarui diri, instal versi terbaru dari halaman unduhan di atas versi lama. Dunia tetap aman.']
        ]},
        { t:'acc', open:false, items:[
          ['⬇️','Tautan unduhan langsung (yang ada di kartu pelajaran)','<ul><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-win-x64-setup.exe" target="_blank" rel="noopener">Windows</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-arm64.dmg" target="_blank" rel="noopener">Mac — Apple Silicon (M1–M4)</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-x64.dmg" target="_blank" rel="noopener">Mac — Intel</a></li></ul>']
        ]}
      ]},
      { id:'l1', e:'🧯', title:'Saat launcher siswa tidak berfungsi', blocks:[
        { t:'p', html:'Di Pelajaran 1, hampir pasti ada siswa yang kesulitan menjalankan launcher. Satu masalah tidak boleh menghentikan grup: <b>beri tugas singkat dulu kepada siswa lain</b>, lalu hubungi siswa tersebut. Minta ia membagikan layarnya dan pandu dengan suara. Jika tidak selesai dalam beberapa menit: “Ikuti layar saya dulu, nanti saya kembali.” Waktu terbaik untuk kembali membantunya adalah saat kerja mandiri — studio hukum atau markas.' },
        { t:'acc', open:false, items:[
          ['🍎','Mac tidak mau membuka launcher','Jalankan baris Terminal dari kartu pertama dan buka lagi launcher-nya.'],
          ['🪟','Windows bertanya apakah file boleh dibuka','<b>More info → Run anyway</b>.'],
          ['🔑','Siswa tidak bisa masuk','Login Kodland yang sama dengan untuk pelajaran. Jendela masuk terbuka di browser dan sering tersembunyi di balik jendela lain.'],
          ['⏳','Unduhan game berhenti','Cek internet, tutup launcher lalu buka lagi — unduhan akan berlanjut.'],
          ['👀','Launcher tidak pernah berhasil jalan','Siswa mengikuti layar Anda, menjawab di chat, dan saat pamer karya menceritakan hukum apa yang ingin ia buat. Setelah pelajaran, bantu ia menjalankan launcher agar bisa mengerjakan PR sendiri.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'Jika beberapa siswa mengalami error yang sama, tunjukkan solusinya sekali untuk semua — dan tetap jaga kontak dengan siswa lain lewat pertanyaan singkat di chat setiap menit.' }
      ]},
      { id:'req', e:'💻', title:'Persyaratan komputer', blocks:[
        { t:'p', html:'Inilah yang dibutuhkan siswa untuk Minecraft CraftForge. Informasi ini berguna saat siswa kesulitan menginstal atau menjalankan game:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Komputer dan sistem','Komputer desktop atau laptop dengan <b>Windows 10/11 (64-bit)</b> atau <b>macOS 13 atau lebih baru</b>. Mac dengan Apple Silicon (M1 atau lebih baru) atau Intel — kartu pelajaran menyediakan unduhan untuk masing-masing.'],
          ['🧠','Memori dan prosesor','<b>RAM 8 GB</b> dengan kartu grafis terpisah, atau <b>12 GB</b> dengan grafis terintegrasi. Prosesor <b>4 inti</b>.'],
          ['🎮','Grafis dan disk','Kartu grafis yang mendukung <b>Vulkan 1.3</b> dengan memori video <b>2 GB</b>. Ruang disk kosong <b>5 GB</b>.'],
          ['🎧','Koneksi dan perlengkapan','Koneksi internet stabil yang kuat untuk panggilan video. Mouse dua tombol, keyboard, headset dengan mikrofon, dan kamera.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Memublikasikan data pack di Kodland Sparks', blocks:[
        { t:'p', html:'Sparks adalah portofolio siswa: semua proyek kursus disimpan di sana, dan <b>Sparks AI</b> juga ada di sana. Siswa kembali ke Sparks di setiap pelajaran untuk memublikasikan karya dan meminta petunjuk. Data pack dipublikasikan <b>dari editor launcher</b>:' },
        { t:'steps', items:[
          ['Publish, di samping Save','Di launcher, <b>Create → Data packs → Edit</b> pada data pack, lalu <b>Publish</b>, di samping tombol ungu <b>Save</b>.'],
          ['Nama dan “Who can see it?” → Everyone','Di “Publish to your profile”, tulis namanya dan pilih <b>Everyone</b>: hanya dengan begitu tautannya bisa dibuka orang lain tanpa login ke akun siswa.'],
          ['Copy link','Saat muncul “Published! It is on your profile.”, klik <b>Copy link</b>, lalu <b>Done</b>, dan tempel tautannya di kartu pelajaran di platform (“Tautan ke Hukum saya di Kodland Sparks”).'],
          ['Tautannya hilang?','<b>Open on Sparks</b> (di dialog atau di bagian atas editor) membuka halaman proyek di profil siswa: tautannya adalah alamat di bilah browser.'],
          ['Dua langkah yang berbeda','Memublikasikan di Sparks dan mengirim tautan di platform Kodland adalah <b>dua langkah yang berbeda</b>. Cek di Backoffice bahwa tautannya benar-benar masuk.'],
          ['Setiap pembaruan dipublikasikan lagi','Saat siswa menambahkan hukum, ia menyimpan, menguji, lalu memublikasikan pembaruannya lagi.']
        ]},
        { t:'sim', flag:'mcPublish', src:'minecraft-publish/Minecraft_Publish.html?flow=datapack', e:'⚡', badge:'Simulasi', title:'Publikasikan data pack di Kodland Sparks', text:'Replika Kodland Launcher dan kartu pelajaran: sebagai siswa, Anda memublikasikan data pack, menyalin tautannya, menempelkannya di kartu di platform, memperbaiki tautan yang tidak bisa dibuka, dan menemukan tautan yang belum disalin. Waktunya sekitar 4 menit. Evaluasi modul terbuka setelah Anda selesai.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Saat ada yang tidak sesuai', blocks:[
        { t:'acc', open:false, items:[
          ['💾','Data pack tidak tersimpan','Pastikan ketiga bagian formulir sudah diisi: tempat item dibuat, apa yang dimasukkan, dan apa yang dihasilkan.'],
          ['🔁','Hukum tidak berfungsi setelah diedit','Klik <b>Save</b>, keluar dari dunia, lalu masuk lagi — hukum diterapkan saat Anda masuk.'],
          ['🧩','Resep tidak bisa di-craft','Susunan item tidak sama dengan di formulir, atau siswa meng-craft di inventaris, bukan di crafting table.'],
          ['🔒','Tautan tidak bisa dibuka','“Who can see it?” tidak diatur ke <b>Everyone</b>. Publikasikan lagi dengan Everyone — tautannya lalu bisa dibuka tanpa login.'],
          ['🔗','Siswa menutup jendela tanpa menyalin tautan','Klik <b>Open on Sparks</b> di bagian atas editor data pack: halaman proyek terbuka, dan tautannya adalah alamat di bilah browser.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Daftar periksa teknis untuk setiap pelajaran', blocks:[
        { t:'check', title:'✅ Daftar periksa teknis saya', groups:[
          { h:'☑️ Sebelum pelajaran', items:['Saya sudah membaca semua Teacher Notes pelajaran dan, untuk Pelajaran 1, menonton video persiapannya.','Launcher saya sudah terinstal dan sudah login, dan saya sudah mencoba alur pelajarannya di data pack saya sendiri.','Sebelum Pelajaran 1, saya sudah mengirim tautan launcher ke chat grup.'] },
          { h:'🎬 Selama pelajaran', items:['Saya melakukan pengecekan koneksi dan launcher sebelum materi.','Saya menunjukkan hasil akhir dan menyebutkan tujuan pelajaran di menit-menit pertama.'] },
          { h:'📤 Di akhir pelajaran', items:['Saya menjaga 7–10 menit terakhir untuk publikasi, pamer karya, dan umpan balik.','Semua siswa sudah mengirim tautan data pack yang dipublikasikan di kartu pelajaran.','Saya membuka beberapa tautan untuk memastikan tautannya berfungsi.'] }
        ]}
      ]},
      { id:'videos', e:'🎬', title:'Contoh pelajaran dengan autoQA yang sangat baik', blocks:[
        { t:'p', html:'Lihat seperti apa pelajaran dengan autoQA yang sangat baik: dinamika kelas, strukturnya, dan cara tutor memandu kelompok.' },
        { t:'videos', items:[
  ['Modul 1 · Pelajaran 1', '1S_n6qGkPZncBiKcPKqabeN1QFBK-uqFs'],
  ['Modul 1 · Pelajaran 2', '1BvnGl01n99mBGvoxZ9Pb5oWoCDYoUtzZ'],
  ['Modul 1 · Pelajaran 3', '1T2ABi_H5_x4Zjx5aq49iqpy5gczqtvZy']
] },
        { t:'callout', kind:'warn', e:'🔄', html:'<b>Catatan:</b> isi pelajaran ini bisa berbeda dari yang akan kamu lihat di Backoffice, karena pelajaran terus diperbarui. Namun dinamika kelas, struktur, dan kualitasnya harus tetap sama: ini contoh yang baik untuk menjadi inspirasi di kelasmu.' }
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ----------------
   The Skills module has no separate check: its four blocks end with their own practice checks (COURSE.skills). */
COURSE.quiz = {
  int:[
    { q:'Untuk siapa Minecraft CraftForge Intermediate, dan berapa lama setiap pelajarannya?',
      o:['Siswa usia 8–9 tahun, dengan pelajaran 60 menit.','Siswa usia 10–12 tahun, dengan pelajaran grup 90 menit.','Siswa usia 13–17 tahun, dengan pelajaran 60 menit.'],
      a:1, e:'Intermediate ditujukan untuk siswa usia 10–12 tahun: 40 pelajaran grup, masing-masing 90 menit.' },
    { q:'Bahasa pemrograman apa yang digunakan siswa di kursus ini?',
      o:['Python.','Lua.','JavaScript.'],
      a:0, e:'Siswa menulis program Python yang membangun di dunia Minecraft.' },
    { q:'Apa itu data pack di kursus ini?',
      o:['File berisi screenshot bangunan siswa.','Kumpulan hukum untuk dunia (resep, drop, perintah…) yang dijalankan Minecraft setiap kali Anda masuk.','Paket dunia siap pakai untuk diunduh.'],
      a:1, e:'Data pack adalah kumpulan hukum: dunia menjalankannya setiap kali siswa masuk.' },
    { q:'Apa yang dibawa siswa setelah menyelesaikan kursus?',
      o:['Ujian akhir tertulis.','Lebih dari sembilan proyek di portofolio Kodland Sparks dan proyek kelulusan orisinal yang dipresentasikan di Demo Day.','Hanya data pack dari Pelajaran 1.'],
      a:1, e:'Lebih dari sembilan proyek di portofolio dan sebuah proyek orisinal, dari ide hingga Demo Day.' },
    { q:'Bagaimana seharusnya siswa menggunakan Sparks AI?',
      o:['Menyalin jawabannya apa adanya.','Menilai sarannya dan memutuskan apa yang diambil.','Tidak pernah menggunakannya.'],
      a:1, e:'Sparks memberi ide dan skenario pengujian; siswa menilainya alih-alih menyalinnya.' }
  ],
  skills:[],
  tech:[
    { q:'Kapan Anda melakukan pengecekan koneksi dan launcher?',
      o:['Di awal pelajaran, sebelum materi. Selagi mengunduh game, Anda bisa berkenalan dengan para siswa.','Di tengah pelajaran, saat siswa membutuhkan Minecraft.','Di akhir, agar tidak menyita waktu pelajaran.'],
      a:0, e:'Sebelum materi: selagi mengunduh game, Anda bisa berkenalan dengan para siswa.' },
    { q:'Kredensial apa yang Anda, sebagai tutor, gunakan untuk masuk ke Kodland Launcher?',
      o:['Akun baru yang Anda buat sendiri.','Kredensial yang sama dengan Kodland Sparks, yang diberikan oleh Departemen Teaching atau Team Leader.','Akun milik siswa.'],
      a:1, e:'Tidak diperlukan kredensial apa pun untuk mengunduh launcher. Untuk masuk, Anda menggunakan kredensial Kodland Sparks Anda, yang diberikan oleh Departemen Teaching atau Team Leader.' },
    { q:'Dari mana siswa mendapatkan tautan ke data pack yang sudah dipublikasikan?',
      o:['Dari komentar di launcher.','Di “Publish to your profile”: Copy link (atau Open on Sparks lalu salin alamat dari bilah browser).','Dari tab Play di launcher.'],
      a:1, e:'Copy link tepat setelah memublikasikan; jika tautannya hilang, Open on Sparks menampilkan halaman proyek, dan alamat halaman itulah tautannya.' },
    { q:'Untuk apa 7–10 menit terakhir pelajaran?',
      o:['Waktu tambahan untuk membangun.','Publikasi, pamer karya, dan umpan balik — ditambah rekap dan PR.','Bermain bebas.'],
      a:1, e:'Jaga menit-menit terakhir: publikasi, pamer karya dengan umpan balik, dan rekap.' },
    { ctx:'Seorang siswa sudah memublikasikan data pack, tetapi tautannya tidak bisa Anda buka.',
      q:'Apa penyebab yang paling mungkin, dan bagaimana solusinya?',
      o:['“Who can see it?” tidak diatur ke Everyone: publikasikan lagi dengan Everyone.','Data pack-nya rusak: buat yang baru dari awal.','Tautan baru bisa dibuka keesokan harinya.'],
      a:0, e:'Hanya dengan Everyone tautannya bisa dibuka tanpa login. Memublikasikan lagi dengan Everyone akan memperbaikinya.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Langkah terakhir: Kembali ke LMS dan selesaikan DST',
  html: `<p>Anda hampir selesai! Kembalilah ke halaman pelatihan LMS tempat Anda membuka pelatihan ini. Tes DST tersedia tepat di bawah pelatihan.</p>
    <p>👉 <b>Anda wajib mengerjakan dan lulus tes DST agar pelatihan dianggap selesai dengan sukses.</b> Jika Anda tidak mengerjakan tes DST, pelatihan akan tetap berstatus belum selesai dan bisa kedaluwarsa.</p>
    <p>Nilai minimum kelulusan adalah <b>80%</b>.</p>
    <p>Semoga sukses! ❤️</p>`,
  nexts: [
    ['📒', '<b>Sebelum setiap pelajaran:</b> baca Teacher Notes di Backoffice dan coba alur pelajarannya di data pack Anda sendiri.'],
    ['🟩', '<b>Menit-menit pertama:</b> pengecekan koneksi dan launcher, lalu hasil akhir dan tujuan pelajaran.'],
    ['🔗', '<b>Tautannya:</b> Publish → Everyone → Copy link, lalu tempel di kartu pelajaran.'],
    ['⏱️', '<b>7–10 menit terakhir:</b> publikasi, pamer karya, dan umpan balik.']
  ]
};

/* ---------------- Skills for the course ----------------
   Four blocks (Minecraft world, programming logic, Python practice, data packs). Texts come from the proofread
   CraftForge Tutor Training. In each quiz 'c' = number of the correct option (0 = first). Never translate code. */
COURSE.skills = {
  mod: 'skills',
  ui: {
    step_self: 'Telusuri langkah demi langkah',
    prev: 'Kembali',
    next: 'Langkah berikutnya',
    stepn: 'Langkah {s} dari {n}',
    check_intro: 'Jawab semua pertanyaan — kamu perlu 70% untuk membuka langkah berikutnya. Untuk setiap pertanyaan, yang dihitung adalah jawaban pertamamu.',
    correct: 'Benar!',
    notquite: 'Belum tepat.',
    score: 'Skor: {p}% — perlu 70%',
    retry: 'Coba cek lagi',
    unlocked: 'Kamu telah membuka langkah berikutnya.',
    review_msg: 'Ulas kembali bagian di atas, lalu coba cek lagi.',
    nextBlock: 'Blok berikutnya →',
    lockedBlock: '🔒 Lulus blok sebelumnya untuk membuka blok ini.',
    ctaTitle: 'Lulus keempat blok',
    ctaText: 'Setiap blok diakhiri dengan latihan singkat: kamu perlu 70% di setiap blok. Setelah keempatnya lulus, modul ini selesai.',
    progress: '{n} dari {t} blok lulus',
    ctaDone: 'Modul selesai: {p}%',
    goNext: 'Ke Modul {n} →',
    practice: 'Latihan blok',
    blockOf: 'Blok {n} dari {t}',
    passedBlock: 'Blok lulus: {p}%'
  },
  blocks: [
    {
      id: 'world',
      ic: '🌍',
      slot: 'Dunia',
      title: 'Mengenal dunia Minecraft',
      sections: [
        {
          t: 'Dasar Minecraft untuk tutor (keterampilan teknis)',
          html: '<div class="card class"><p>Minecraft adalah dunia yang terbuat dari kubus yang disebut <strong>blok</strong>. Kamu bisa menghancurkan, mengumpulkan, dan memasang blok untuk membangun apa saja. Anak-anak sangat mengenal dunia ini — kamu cukup tahu cara bergerak, membangun, dan mengikuti apa yang mereka lakukan.</p></div><div class="tbl"><table><tbody><tr><th>Tombol / aksi</th><th>Fungsinya</th></tr><tr><td><code>W A S D</code></td><td>Jalan ke depan, kiri, belakang, kanan</td></tr><tr><td>Mouse</td><td>Melihat ke sekeliling</td></tr><tr><td><code>Spasi</code></td><td>Melompat. Di mode Kreatif, tekan dua kali untuk terbang; tahan untuk naik</td></tr><tr><td><code>Shift</code></td><td>Mengendap: kamu tidak jatuh dari tepi. Saat terbang, turun</td></tr><tr><td>Klik kiri</td><td>Menghancurkan blok / memukul</td></tr><tr><td>Klik kanan</td><td>Memasang blok / memakai (membuka pintu, menekan tombol, menarik tuas)</td></tr><tr><td><code>1</code>–<code>9</code> atau roda mouse</td><td>Memilih barang di hotbar (bilah di bawah)</td></tr><tr><td><code>E</code></td><td>Membuka inventaris</td></tr><tr><td><code>T</code> atau <code>/</code></td><td>Membuka chat / mulai mengetik perintah</td></tr><tr><td><code>F3</code></td><td>Menampilkan koordinat dan info teknis</td></tr><tr><td><code>F5</code></td><td>Mengganti sudut kamera</td></tr><tr><td><code>Esc</code></td><td>Menu jeda dan pengaturan</td></tr></tbody></table></div><div class="cols"><div class="card class"><h4>Mode permainan</h4><ul><li><strong>Kreatif</strong>: blok tak terbatas, bisa terbang, tidak ada yang bisa melukaimu. Paling cocok untuk membangun.</li><li><strong>Bertahan hidup</strong>: kamu mengumpulkan sumber daya, punya nyawa dan rasa lapar, dan monster menyerang di malam hari.</li></ul></div><div class="card class"><h4>Kata-kata yang dipakai anak-anak</h4><ul><li><strong>Mob</strong>: makhluk apa pun (sapi, zombie, Creeper).</li><li><strong>Spawn</strong>: tempat kamu muncul.</li><li><strong>Bioma</strong>: jenis daerah (gurun, hutan, salju).</li><li><strong>Skin</strong>: tampilan karaktermu. Steve dan Alex adalah karakter bawaan.</li></ul></div></div>'
        },
        {
          t: '1.1 · Budaya yang dibawa anak-anak',
          html: '<div class="card why"><p>Minecraft punya legenda, meme, cerita seram, dan lelucon internal sendiri, dan anak-anak mengenalnya dengan baik. Kamu tidak harus jadi pemain ahli, tapi kamu perlu “nyambung”. Cara tercepat adalah video <strong>“Minecraft Iceberg”</strong>: fakta tersembunyi, mitos, konten yang dihapus, dan legenda — dari yang paling terkenal di atas sampai yang paling langka di bawah.</p></div><div class="vid"><iframe src="https://www.youtube.com/embed/AChmq4QfbK0" title="Minecraft Iceberg video" loading="lazy" allowfullscreen=""></iframe></div><div class="tbl"><table><tbody><tr><th>Nama</th><th>Apa itu</th></tr><tr><td><strong>Herobrine</strong></td><td>Legenda Minecraft paling terkenal: sosok bermata putih yang katanya menghantui dunia. Ia tidak pernah ada di dalam game — selama bertahun-tahun catatan pembaruan Mojang bercanda menulis “Herobrine dihapus”.</td></tr><tr><td><strong>Entity 303</strong></td><td>Legenda horor buatan penggemar lainnya, tentang entitas pendendam yang mirip peretas. Anak-anak suka menanyakannya — cukup tahu namanya saja sudah bisa membuat mereka tersenyum.</td></tr><tr><td><strong>Notch</strong></td><td>Markus Persson, pencipta awal Minecraft.</td></tr><tr><td><strong>Asal-usul Creeper</strong></td><td>Cerita yang terkenal: awalnya ia adalah model babi yang gagal, dengan tinggi dan panjang yang tertukar.</td></tr><tr><td><strong>Far Lands (Tanah Jauh)</strong></td><td>Glitch medan di versi Java lama, jutaan blok dari titik spawn, tempat dunia pecah menjadi dinding-dinding aneh.</td></tr><tr><td><strong>Steve dan Alex</strong></td><td>Karakter pemain bawaan.</td></tr></tbody></table></div><div class="card class"><p><strong>Di kelas:</strong> “Iya, aku tahu siapa Entity 303 😉” yang singkat bisa membangun kepercayaan dalam hitungan detik. Lalu bawa obrolan kembali ke bangunan.</p></div>'
        },
        {
          t: '1.2 · Koordinat: X, Y, dan Z',
          html: '<div class="tbl"><table><tbody><tr><th>Sumbu</th><th>Arah</th><th>Berubah ketika pemain…</th></tr><tr><td><strong>X</strong></td><td>Timur ↔ Barat</td><td>berjalan ke timur atau barat</td></tr><tr><td><strong>Y</strong></td><td>Atas ↕ Bawah (ketinggian)</td><td>melompat, memanjat, jatuh, menggali ke bawah, membangun menara</td></tr><tr><td><strong>Z</strong></td><td>Selatan ↔ Utara</td><td>berjalan ke utara atau selatan</td></tr></tbody></table></div><div class="card "><p>X dan Z adalah posisi di tanah; <strong>Y adalah ketinggian</strong>. Setiap gerakan vertikal — bahkan satu lompatan — mengubah Y selama berlangsung. Untuk melihat koordinat: <code>F3</code> di Java Edition, atau aktifkan “Tampilkan koordinat” di pengaturan dunia di Bedrock. Teleportasi memakai urutan yang sama: <code>/tp X Y Z</code>.</p></div><div class="card tip"><p><strong>Trik mengingat:</strong> Y adalah sumbu yang “naik” di grafik sekolah — di Minecraft juga yang naik.</p></div>'
        },
        {
          t: '1.3 · Mob yang harus dikenali setiap tutor',
          html: '<div class="tbl"><table><tbody><tr><th>Mob</th><th>Yang perlu diketahui</th></tr><tr><td><strong>Creeper</strong></td><td>Mendekat diam-diam dan <strong>mendesis saat sumbunya menyala — ia akan meledak</strong> (sekitar 1,5 detik). Lari keluar jangkauan bisa membatalkan sumbunya. Jika petir menyambar di dekatnya, ia menjadi <strong>Creeper Bermuatan</strong> dengan ledakan jauh lebih besar.</td></tr><tr><td><strong>Zombie / Skeleton</strong></td><td>Muncul di tempat gelap; terbakar di siang hari kecuali berada di bayangan atau memakai helm. Skeleton menembakkan panah dari jauh.</td></tr><tr><td><strong>Laba-laba</strong></td><td>Bisa memanjat dinding — pohon atau pilar tidak membuatmu aman. Netral di cahaya terang, bermusuhan dalam gelap.</td></tr><tr><td><strong>Enderman</strong></td><td>Netral sampai kamu menatap wajahnya. Lalu ia berteleportasi dan menyerang.</td></tr><tr><td><strong>Phantom</strong></td><td>Muncul di langit jika pemain tidak tidur selama tiga hari game atau lebih.</td></tr></tbody></table></div>'
        },
        {
          t: '1.4 · Bertahan di malam pertama',
          html: '<div class="card "><p>Mob yang bermusuhan muncul dalam <strong>kegelapan</strong>. Di malam pertama mode Survival, tanpa kasur dan perlengkapan, rencana paling aman itu sederhana: <strong>bangun tempat berlindung kecil yang tertutup dan terangi bagian dalamnya</strong>. Dinding menahan mob di luar; cahaya di dalam mencegah mob muncul di sebelahmu. Menggali ke lereng bukit lalu menutup pintunya juga ampuh.</p></div><div class="tbl"><table><tbody><tr><th>Ide yang menggoda</th><th>Kenapa gagal</th></tr><tr><td>Memegang obor di tangan</td><td>Di game standar, obor yang dipegang tidak menerangi area dan tidak mencegah mob muncul di sekitarmu.</td></tr><tr><td>Menunggu di puncak pohon yang tinggi</td><td>Laba-laba bisa memanjat, skeleton menembak dari bawah, dan jatuh itu sakit.</td></tr><tr><td>Menjelajah sambil menghindari mob</td><td>Kegelapan justru tempat mereka muncul — makin banyak seiring malam berjalan.</td></tr></tbody></table></div><div class="card tip"><p><strong>Kasur</strong> memungkinkanmu melewati malam dan sekaligus menetapkan titik respawn pribadimu. Kamu akan membutuhkannya di 1.6.</p></div>'
        },
        {
          t: '1.5 · Alat, tingkatan, dan beliung mana menambang apa',
          html: '<div class="card "><p>Beliung naik bertingkat: <strong>Kayu → Batu → Besi → Berlian → Netherite</strong>. <strong>Emas adalah jebakan:</strong> menambang sangat cepat, tapi tingkatannya serendah kayu. Kalau tingkatannya terlalu rendah, bloknya tetap hancur — tapi tidak menjatuhkan apa-apa.</p></div><div class="tbl"><table><tbody><tr><th>Beliung</th><th>Tingkat terendah yang bisa menambang…</th></tr><tr><td>Kayu / Emas</td><td>Batu, bijih batu bara</td></tr><tr><td>Batu</td><td>Bijih besi, bijih tembaga, bijih lapis lazuli</td></tr><tr><td>Besi</td><td><strong>Bijih berlian</strong>, bijih emas, bijih redstone, bijih zamrud</td></tr><tr><td>Berlian</td><td>Obsidian, puing kuno</td></tr></tbody></table></div><div class="card class"><p><strong>Di kelas:</strong> “Beliungku menghancurkan berlian tapi tidak keluar apa-apa!” adalah pertanyaan murid yang nyata. Sekarang kamu tahu jawabannya: tingkatannya terlalu rendah.</p></div>'
        },
        {
          t: '1.6 · Titik spawn, kasur, dan kompas',
          html: '<div class="cols"><div class="card "><h4>Spawn dunia</h4><p>Titik tempat setiap pemain pertama kali muncul di dunia baru. Tidak pernah berpindah kecuali seseorang mengubahnya dengan perintah.</p></div><div class="card "><h4>Titik respawn pribadi</h4><p>Ditetapkan dengan tidur di kasur (atau memakai respawn anchor di Nether). Kamu kembali ke sini setelah mati.</p></div></div><div class="tbl"><table><tbody><tr><th>Item</th><th>Menunjuk ke</th></tr><tr><td><strong>Kompas biasa</strong></td><td><strong>Titik spawn dunia</strong> — bukan kasur, bukan utara. Kompas berputar acak di Nether dan End.</td></tr><tr><td>Recovery compass</td><td>Tempat pemain terakhir kali mati.</td></tr><tr><td>Kompas lodestone</td><td>Lodestone yang ditautkan dengannya. Begitulah pemain membuat kompas yang menunjuk ke markas mereka.</td></tr></tbody></table></div><div class="card warn"><p><strong>Kesalahpahaman umum:</strong> memasang kasur baru mengubah tempat kamu <em>respawn</em>, tapi kompas biasa tetap menunjuk ke spawn dunia yang asli.</p></div>'
        }
      ],
      quiz: [
        {
          p: 'Seorang pemain menggali lurus ke bawah sejauh 10 blok. Koordinat mana yang berubah?',
          o: ['X', 'Y', 'Z', 'Tidak ada'],
          c: 1,
          f: 'Y adalah ketinggian. Menggali ke bawah, melompat, memanjat, atau membangun ke atas semuanya mengubah Y.'
        },
        {
          p: 'Beliung dengan tingkat terendah mana yang bisa menambang bijih besi dan benar-benar mendapatkan bijihnya?',
          o: ['Kayu', 'Batu', 'Emas', 'Beliung apa saja bisa'],
          c: 1,
          f: 'Batu sudah cukup untuk besi. Emas memang cepat, tapi tingkatnya sama rendahnya dengan kayu.'
        },
        {
          p: 'Creeper mulai mendesis tepat di belakang pemain. Apa reaksi terbaik?',
          o: ['Langsung serang — desisan berarti ia lemah', 'Diam saja supaya ia kehilangan minat', 'Berlari menjauh — sumbunya menyala dan keluar dari jangkauan bisa membatalkannya', 'Pasang obor di sebelahnya'],
          c: 2,
          f: 'Desisan berarti sumbunya menyala dan ia akan meledak. Keluar dari jangkauan adalah langkah yang tepat.'
        },
        {
          p: 'Kenapa tempat berlindung malam pertama butuh cahaya di dalam, bukan hanya dinding?',
          o: ['Cahaya membuat dinding lebih kuat', 'Mob bermusuhan muncul dalam gelap — cahaya mencegah mereka muncul di dalam bersamamu', 'Obor menyembuhkan pemain', 'Mob tertarik pada cahaya di luar'],
          c: 1,
          f: 'Dinding menahan mob di luar; cahaya mencegah mob baru muncul di ruang gelap bersamamu.'
        },
        {
          p: 'Seorang pemain ingin kompas yang selalu menunjuk ke markasnya. Apa yang ia perlukan?',
          o: ['Tidur di kasur di markas — kompasnya akan mengikuti', 'Menggunakan kompas pada lodestone yang dipasang di markas', 'Kompas biasa sudah menunjuk ke kasur terakhir', 'Recovery compass'],
          c: 1,
          f: 'Kompas biasa menunjuk ke spawn dunia. Menautkannya ke lodestone membuatnya menunjuk ke lodestone itu.'
        },
        {
          p: 'Seorang murid berkata: “Herobrine ada di duniaku!” Siapa Herobrine?',
          o: ['Bos yang ditambahkan di pembaruan Nether', 'Legenda penggemar yang tidak pernah ada di game — Mojang bahkan bercanda “Herobrine dihapus” di catatan pembaruan', 'Pengembang yang menciptakan Creeper', 'Nama lain Enderman'],
          c: 1,
          f: 'Herobrine adalah legenda. Tahu leluconnya membantumu nyambung dengan murid dalam sekejap.'
        },
        {
          p: 'Bagaimana Creeper biasa menjadi Creeper Bermuatan?',
          o: ['Dengan meledak dua kali', 'Saat petir menyambar di dekatnya', 'Saat berada di air', 'Saat pemain memberinya nama'],
          c: 1,
          f: 'Sambaran petir di dekatnya memberinya muatan, sehingga ledakannya jauh lebih besar.'
        }
      ]
    },
    {
      id: 'logic',
      ic: '🧠',
      slot: 'Logika',
      title: 'Logika pemrograman',
      sections: [
        {
          t: '2.1 · Logika pemrograman',
          html: '<div class="card why"><p>Pemrograman bukan hanya tentang mengetahui sintaks bahasa pemrograman. Pertama dan terutama, ini adalah kemampuan untuk berpikir secara berurutan, mengidentifikasi pola, memecah tugas menjadi langkah-langkah, dan memahami mengapa suatu algoritma bekerja seperti itu.</p><p>Selama pelajaran, murid akan terus-menerus bertanya, membuat kesalahan, menyarankan solusi yang tidak terduga, dan kadang-kadang menulis kode dengan cara yang sama sekali berbeda dari yang dimaksudkan. Untuk membantu mereka, penting tidak hanya mengetahui perintah yang benar, tetapi memahami logika di balik program.</p><p>Di blok ini, kamu tidak perlu mengetahui bahasa pemrograman tertentu. Di sini kita akan melihat seberapa nyaman kamu bekerja dengan algoritma, kondisi, perulangan, dan urutan tindakan.</p></div><div class="card "><h4>Metode tabel penelusuran</h4><ol><li>Tulis <strong>setiap variabel</strong> sebagai kolom, dengan nilai awalnya.</li><li>Kerjakan <strong>satu langkah setiap kali</strong>, sesuai urutan aturan yang tertulis.</li><li>Setiap kondisi diperiksa terhadap nilai <strong>saat ini</strong> — yang baru saja kamu tulis, bukan yang lama.</li><li>Hitung pengulangannya. “Ulangi 4 kali” berarti empat baris, bukan tiga, bukan lima.</li></ol></div><div class="tracer" data-tr="robot"></div>'
        },
        {
          t: '2.2 · Mengubah aturan menjadi kondisi',
          html: '<div class="card "><p>Soal aturan paling mudah jika kamu menuliskan <strong>setiap kemungkinan kasus</strong> dan memeriksa satu per satu. Contoh aturan:</p><ul><li>Untuk masuk ke ruang portal, pemain butuh <strong>batu api atau fire charge</strong>.</li><li>Jika punya <strong>keduanya</strong>, ia juga harus memakai zirah emas.</li><li>Jika hanya punya <strong>salah satu</strong>, zirah tidak diperlukan.</li></ul></div><div class="tbl"><table><tbody><tr><th>Batu api</th><th>Fire charge</th><th>Zirah emas</th><th>Boleh masuk?</th></tr><tr><td>✔</td><td>✘</td><td>—</td><td>Ya (hanya satu item, tanpa aturan tambahan)</td></tr><tr><td>✘</td><td>✔</td><td>—</td><td>Ya</td></tr><tr><td>✔</td><td>✔</td><td>✔</td><td>Ya</td></tr><tr><td>✔</td><td>✔</td><td>✘</td><td><strong>Tidak</strong> — kasus “keduanya” menambah syarat</td></tr><tr><td>✘</td><td>✘</td><td>—</td><td><strong>Tidak</strong> — aturan pertama tidak terpenuhi</td></tr></tbody></table></div><div class="card warn"><p><strong>Waspadai detail yang tidak penting.</strong> Jika aturan menyebut tidak ada syarat tambahan bagi pemain dengan satu item, maka apakah ia memakai zirah, atau kata sandinya salah, tidak berpengaruh baginya. Soal sering menambahkan detail seperti itu untuk menguji apakah kamu menerapkan aturan dengan tepat.</p></div>'
        },
        {
          t: '2.3 · Perulangan dengan kondisi di dalamnya',
          html: '<div class="card "><p>Jika setiap putaran punya dua langkah — “ubah nilainya, lalu periksa kondisi” — pemeriksaan memakai nilai <strong>setelah</strong> perubahan. Dan begitu ambang terlewati, kondisinya biasanya tetap benar di setiap putaran berikutnya.</p></div><div class="tracer" data-tr="coins"></div><div class="card warn"><h4>Dua kesalahan klasik</h4><ul><li>Memeriksa kondisi dengan nilai dari <em>sebelum</em> perubahan.</li><li>Menerapkan kondisi hanya sekali, seolah-olah berada di luar perulangan.</li></ul></div>'
        },
        {
          t: '2.4 · Penghitung, flag, dan aturan berhenti',
          html: '<div class="card "><p><strong>Penghitung</strong> menghitung berapa kali sesuatu terjadi. <strong>Flag</strong> (nyala/mati, True/False) mengingat bahwa sesuatu sudah terjadi. <strong>Aturan berhenti</strong> mengakhiri algoritma lebih awal. Jika beberapa aturan berlaku untuk item yang sama, terapkan sesuai urutan tertulis — flag yang dinyalakan satu aturan bisa langsung dipakai aturan berikutnya <strong>di langkah yang sama</strong>.</p></div><div class="tracer" data-tr="flag"></div><div class="card tip"><p>Jika pilihan jawaban mencakup “algoritma tidak akan berhenti”, periksa dengan serius: telusuri sampai item terakhir sebelum memilih.</p></div>'
        },
        {
          t: '2.5 · Apakah algoritmanya benar-benar benar?',
          html: '<div class="card "><p>Untuk menunjukkan algoritma salah, kamu cukup butuh <strong>satu contoh penyangkal</strong>: input yang membuatnya memberi jawaban salah. Uji kasus yang sering dilupakan: kecocokan yang <em>tidak</em> melibatkan item pertama, item terakhir, item yang dibandingkan dengan dirinya sendiri, semua item sama, daftar berisi satu item.</p></div><div class="card "><h4>Contoh</h4><p>Tugas: tentukan apakah semua angka dalam daftar berbeda. Algoritma yang diusulkan: “bandingkan setiap angka hanya dengan angka berikutnya; jika ada dua yang sama, jawab Tidak”.</p><p>Contoh penyangkal: <code>3, 5, 3</code>. Pasangan tetangganya 3–5 dan 5–3, tidak pernah sama, jadi jawabannya “semua berbeda” — salah. Algoritma tidak pernah membandingkan angka yang berjauhan.</p><p><strong>Perbaikan:</strong> bandingkan <em>setiap</em> angka dengan <em>setiap</em> angka sesudahnya. Dua perulangan: yang luar mengambil setiap angka bergiliran, bukan hanya yang pertama; yang dalam membandingkannya dengan sisanya.</p></div><div class="card class"><p><strong>Di kelas:</strong> saat program murid “berhasil”, minta ia mencari input yang bisa merusaknya. Mencari contoh penyangkal adalah cara berpikir programmer.</p></div>'
        }
      ],
      quiz: [
        {
          p: 'Sebuah robot mulai di kotak 1 dan mengikuti aturan ini 4 kali: jika nomor kotaknya ganjil, maju 3; jika genap, mundur 1. Di mana ia berakhir?',
          o: ['4', '5', '6', '7'],
          c: 1,
          f: '1 → 4 → 3 → 6 → 5. Setiap pemeriksaan memakai kotak tempat ia baru mendarat.'
        },
        {
          p: 'Aturan arena: pemain butuh pedang ATAU perisai. Jika punya keduanya, ia juga harus level 5 atau lebih. Jika hanya satu, tidak ada syarat level. Siapa yang TIDAK boleh masuk?',
          o: ['Hanya pedang, level 1', 'Hanya perisai, level 3', 'Pedang dan perisai, level 7', 'Pedang dan perisai, level 2'],
          c: 3,
          f: 'Hanya kasus “keduanya” yang punya aturan level tambahan, dan level 2 tidak memenuhinya. Level pemain dengan satu item tidak berpengaruh.'
        },
        {
          p: 'Skor dimulai dari 1. Ulangi 3 kali: kalikan skor dengan 2; lalu, jika hasilnya lebih dari 5, kurangi 3. Berapa skor akhirnya?',
          o: ['2', '5', '8', '13'],
          c: 1,
          f: '1 → 2 (tidak > 5). 2 → 4 (tidak > 5). 4 → 8 → 8 − 3 = 5.'
        },
        {
          p: 'Angka: 3, 8, 5, 10, 1. penghitung = 0, alarm = mati. Untuk setiap angka, sesuai urutan ini: jika angkanya lebih dari 4, tambah 1 ke penghitung; ketika penghitung menjadi 2, nyalakan alarm; jika alarm menyala dan angkanya ganjil, berhenti. Di angka berapa ia berhenti?',
          o: ['5', '10', '1', 'Tidak pernah berhenti'],
          c: 0,
          f: '3: tidak ada apa-apa. 8: penghitung 1. 5: penghitung 2 → alarm menyala → di langkah yang sama, 5 ganjil → berhenti di 5.'
        },
        {
          p: 'Untuk memeriksa apakah sebuah daftar urut dari terkecil ke terbesar, seseorang mengusulkan: “bandingkan setiap angka dengan angka pertama; jika ada yang lebih kecil dari yang pertama, jawab Tidak urut.” Apa masalah utamanya?',
          o: ['Gagal untuk angka negatif', 'Akan menjawab “Tidak urut” untuk semua daftar', 'Tidak pernah membandingkan tetangga setelah yang pertama, jadi 1, 5, 3 dianggap urut', 'Hanya berfungsi untuk daftar dengan panjang genap'],
          c: 2,
          f: '5 dan 3 sama-sama lebih besar dari 1, jadi pemeriksaannya lolos — padahal daftarnya tidak urut. Satu contoh penyangkal sudah cukup.'
        }
      ]
    },
    {
      id: 'python',
      ic: '🐍',
      slot: 'Python',
      title: 'Praktik pemrograman Python',
      sections: [
        {
          t: '3.1 · Membaca kode seperti komputer',
          html: '<div class="card why"><p>Tutor yang baik harus mampu tidak hanya menulis programnya sendiri, tetapi juga dengan cepat memahami kode orang lain. Selama pelajaran, kamu harus membaca solusi murid, mencari tahu dengan tepat apa yang dilakukan program, menemukan penyebab kesalahan, dan membantu memperbaikinya.</p><p>Di blok ini, kita akan bekerja dengan Python. Hal terpenting di sini bukanlah menghafal setiap perintah, tetapi memahami bagaimana kode dijalankan, bagaimana bagian-bagiannya berinteraksi, dan mengapa program menghasilkan hasil tertentu.</p><p>Kamu harus membaca beberapa program pendek, mengidentifikasi kesalahan, dan menyelesaikan beberapa tugas praktis. Jangan khawatir, tidak akan ada algoritma yang rumit di sini - kami hanya tertarik pada penguasaan yang percaya diri atas prinsip-prinsip dasar pemrograman.</p></div><div class="tbl"><table><tbody><tr><th>Hal</th><th>Artinya</th></tr><tr><td><code>range(4)</code></td><td>0, 1, 2, 3 — mulai dari 0, berhenti <strong>sebelum</strong> 4</td></tr><tr><td><code>range(2, 6)</code></td><td>2, 3, 4, 5 — awal ikut, akhir tidak</td></tr><tr><td><code>total += x</code></td><td>Sama dengan <code>total = total + x</code></td></tr><tr><td><code>a % b</code></td><td>Sisa bagi. <code>n % 2 == 0</code> berarti n genap; <code>== 1</code> berarti ganjil</td></tr><tr><td><code>a // b</code></td><td>Pembagian bulat: <code>7 // 2</code> hasilnya 3</td></tr><tr><td><code>=</code> vs <code>==</code></td><td><code>=</code> menyimpan nilai; <code>==</code> membandingkan dua nilai</td></tr><tr><td><code>&gt;</code> vs <code>&gt;=</code></td><td>“Lebih dari 10” tidak termasuk 10; “paling sedikit 10” termasuk. 0 bukan bilangan positif.</td></tr></tbody></table></div><div class="tracer" data-tr="pyloop"></div>'
        },
        {
          t: '3.2 · List dan indeks',
          html: '<pre class="code">numbers = [4, 15, 7, 22]\n# index:    0   1  2   3\n\nnumbers[1]      # 15\nlen(numbers)    # 4\n\nfor n in numbers:              # n is each VALUE: 4, 15, 7, 22\n    ...\nfor i in range(len(numbers)):  # i is each INDEX: 0, 1, 2, 3\n    ...  numbers[i]  ...</pre><div class="card warn"><p>Indeks dimulai dari <strong>0</strong>. Jika tugas meminta “indeks”, kembalikan <code>i</code>, bukan <code>numbers[i]</code>. Tertukar antara indeks dan nilai adalah salah satu pilihan salah yang paling umum.</p></div>'
        },
        {
          t: '3.3 · return langsung mengakhiri fungsi',
          html: '<div class="card "><p>Fungsi berhenti saat mencapai <code>return</code> — bahkan di tengah perulangan. Nilai setelah <code>return</code> adalah yang dikembalikan pemanggilan. <code>print</code> hanya menampilkan sesuatu di layar; ia tidak mengembalikan apa pun.</p><p>Di Python, <strong>indentasi menentukan apa berada di dalam apa</strong>. Empat spasi lebih berarti “di dalam perulangan” atau “di dalam if”. Karena itu posisi satu baris <code>return</code> bisa mengubah seluruh hasil.</p></div><div class="tracer" data-tr="pyreturn"></div>'
        },
        {
          t: '3.4 · Pola: “apakah SEMUA item OK?”',
          html: '<div class="card "><p>Untuk memeriksa bahwa <em>semua</em> item memenuhi kondisi, cari <strong>satu item yang melanggarnya</strong>. Begitu menemukannya, <code>return False</code>. Hanya setelah perulangan memeriksa semuanya kamu bisa <code>return True</code>.</p></div><pre class="code good">def all_below_100(numbers):\n    for n in numbers:\n        if n &gt;= 100:\n            return False   # one bad item is enough\n    return True            # after the loop: nothing was bad</pre><div class="cols"><div><pre class="code bad"># WRONG: decides after the first item\nfor n in numbers:\n    if n &lt; 100:\n        return True\n    else:\n        return False</pre></div><div><pre class="code bad"># WRONG: returns True as soon as\n# ONE item is OK\nfor n in numbers:\n    if n &lt; 100:\n        return True\nreturn False</pre></div></div><div class="card tip"><p>Periksa juga batas kondisinya: “positif” berarti <code>&gt; 0</code>, jadi daftar yang berisi 0 tidak semuanya positif.</p></div>'
        },
        {
          t: '3.5 · Pola: “temukan yang PERTAMA”',
          html: '<div class="card "><p>Untuk mengembalikan indeks item pertama yang cocok: <code>return i</code> di dalam <code>if</code>, jadi fungsi berhenti di kecocokan pertama. Nilai “tidak ditemukan” (<code>-1</code>) diletakkan <strong>setelah</strong> perulangan, karena kamu baru tahu tidak ada yang cocok setelah semua item diperiksa.</p></div><pre class="code good">def find_first_even(numbers):\n    for i in range(len(numbers)):\n        if numbers[i] % 2 == 0:\n            return i      # first match: stop here\n    return -1             # loop finished: no match\n\nfind_first_even([3, 7, 8, 10])   # 2</pre><div class="tbl"><table><tbody><tr><th>Versi yang salah</th><th>Apa yang salah</th></tr><tr><td><code>else: return -1</code> di dalam perulangan</td><td>Menyerah setelah item pertama jika tidak cocok.</td></tr><tr><td><code>result = i</code> di dalam perulangan, <code>return result</code> sesudahnya</td><td>Terus menimpa nilai, jadi mengembalikan kecocokan <strong>terakhir</strong>, bukan yang pertama.</td></tr><tr><td><code>for n in numbers: … return n</code></td><td>Mengembalikan <strong>nilai</strong>, bukan indeks.</td></tr></tbody></table></div>'
        },
        {
          t: '3.6 · Membantu murid men-debug',
          html: '<div class="card class"><p>Kebiasaan yang sama berlaku di kedua level CraftForge saat kamu membaca kode murid. Jangan perbaiki untuknya — bantu ia menemukannya:</p><ul><li><strong>Bacakan pesan error bersama-sama.</strong> “Baris mana yang ditunjuk, dan apa yang kamu harapkan terjadi di sana?”</li><li><strong>Pisahkan perubahan terakhir.</strong> “Apa hal terakhir yang kamu ubah sebelum rusak?”</li><li><strong>Telusuri dengan input kecil</strong> — dua atau tiga item sudah cukup untuk memunculkan sebagian besar bug.</li><li>Jika kodenya dari AI: “Sebelum kamu menambahkannya — jelaskan padaku apa fungsi baris ini.”</li></ul></div><div class="tbl"><table><tbody><tr><th>Error yang dilihat murid</th><th>Penyebab umum</th></tr><tr><td>IndentationError</td><td>Spasi tercampur atau hilang di awal baris</td></tr><tr><td>SyntaxError</td><td>Kurang <code>:</code> setelah <code>for</code>/<code>if</code>/<code>def</code>, atau <code>=</code> di tempat yang butuh <code>==</code></td></tr><tr><td>NameError</td><td>Salah ketik pada nama variabel, atau memakainya sebelum ada</td></tr><tr><td>Hasil salah, tanpa error</td><td>Logika: <code>return</code> di tempat yang salah, <code>&gt;</code> vs <code>&gt;=</code>, nilai awal yang salah</td></tr></tbody></table></div>'
        }
      ],
      quiz: [
        {
          p: 'Apa yang akan dicetak program ini?<pre class="code">total = 0\nfor i in range(1, 5):\n    total += i * 2\nprint(total)</pre>',
          o: ['10', '12', '20', '30'],
          c: 2,
          f: 'range(1, 5) adalah 1, 2, 3, 4. Jadi 2 + 4 + 6 + 8 = 20. (30 memerlukan range(1, 6).)'
        },
        {
          p: 'Apa yang dikembalikan pemanggilan ini?<pre class="code">def mystery(nums):\n    result = 0\n    for n in nums:\n        if n % 2 == 1:\n            result += n\n    return result\n\nmystery([3, 4, 7, 10])</pre>',
          o: ['2', '10', '14', '24'],
          c: 1,
          f: 'Ia hanya menjumlahkan angka ganjil: 3 + 7 = 10. (2 berarti menghitung jumlahnya; 24 berarti menjumlahkan semuanya.)'
        },
        {
          p: 'count_evens([2, 4, 6]) mengembalikan 1, bukan 3. Perubahan mana yang memperbaikinya untuk daftar apa pun?<pre class="code">def count_evens(numbers):\n    count = 0\n    for n in numbers:\n        if n % 2 == 0:\n            count += 1\n        return count</pre>',
          o: ['Mulai count dari 1', 'Pindahkan return count ke dalam if', 'Pindahkan return count ke luar perulangan for, setelahnya', 'Ubah == 0 menjadi == 1'],
          c: 2,
          f: 'return berada di dalam perulangan, jadi fungsi berakhir setelah angka pertama. Jika diletakkan setelah perulangan, ia berjalan setelah semua dihitung.'
        },
        {
          p: 'all_even(numbers) harus mengembalikan True hanya jika setiap angka genap. Versi mana yang benar?',
          o: ['A<pre class="code">for n in numbers:\n    if n % 2 == 0:\n        return True\nreturn False</pre>', 'B<pre class="code">for n in numbers:\n    if n % 2 != 0:\n        return False\nreturn True</pre>', 'C<pre class="code">for n in numbers:\n    if n % 2 != 0:\n        return False\n    else:\n        return True</pre>', 'Tidak ada'],
          c: 1,
          f: 'B mengembalikan False di angka ganjil pertama dan True hanya setelah memeriksa semuanya. A berhenti di angka genap pertama; C memutuskan setelah melihat satu item saja.'
        },
        {
          p: 'find_first_negative(numbers) harus mengembalikan indeks angka negatif pertama, atau -1 jika tidak ada. Versi mana yang berfungsi untuk daftar apa pun?',
          o: ['A<pre class="code">for i in range(len(numbers)):\n    if numbers[i] &lt; 0:\n        return i\n    else:\n        return -1</pre>', 'B<pre class="code">result = -1\nfor i in range(len(numbers)):\n    if numbers[i] &lt; 0:\n        result = i\nreturn result</pre>', 'C<pre class="code">for i in range(len(numbers)):\n    if numbers[i] &lt; 0:\n        return i\nreturn -1</pre>', 'D<pre class="code">for n in numbers:\n    if n &lt; 0:\n        return n\nreturn -1</pre>'],
          c: 2,
          f: 'C berhenti di kecocokan pertama dan mengembalikan -1 hanya setelah seluruh daftar diperiksa. A menyerah setelah satu item, B mengembalikan kecocokan terakhir, D mengembalikan nilai, bukan indeks.'
        },
        {
          p: 'Nilai apa saja yang dihasilkan range(2, 6)?',
          o: ['2, 3, 4, 5, 6', '2, 3, 4, 5', '3, 4, 5, 6', '0, 1, 2, 3, 4, 5'],
          c: 1,
          f: 'Awalnya ikut, akhirnya tidak.'
        }
      ]
    },
    {
      id: 'datapacks',
      ic: '📜',
      slot: 'Datapack',
      title: 'Data pack: hukum dunia',
      sections: [
        {
          t: '4.1 · Apa itu data pack',
          html: '<div class="card why"><p>Data pack memungkinkan siswa menetapkan <strong>hukum</strong> mereka sendiri untuk Minecraft — resep baru, perintah khusus, timer, event, dan skor — tanpa mengubah game-nya. Data pack membuka tahun ajaran (modul 01, “dunia mulai berjalan dengan aturan yang ditulis siswa”) dan menggerakkan modul 06, saat area biasa berubah menjadi game.</p></div><pre class="code">my_pack/\n├── pack.mcmeta                    ← required: tells Minecraft this is a data pack\n└── data/\n    ├── forge/                     ← the student\'s namespace\n    │   └── function/\n    │       ├── setup.mcfunction   ← one command per line, no "/"\n    │       └── loop.mcfunction\n    └── minecraft/\n        └── tags/function/\n            ├── load.json          ← lists functions that run when the world loads or /reload runs\n            └── tick.json          ← lists functions that run every game tick</pre><div class="card tip"><p>Nama folder tergantung versi game: sejak 1.21 bentuknya tunggal (<code>function</code>, <code>recipe</code>); versi lama memakai bentuk jamak (<code>functions</code>, <code>recipes</code>). Nama folder yang salah adalah kegagalan senyap — pack termuat tapi tidak terjadi apa-apa. Gunakan struktur yang disediakan lingkungan kursusmu.</p></div>'
        },
        {
          t: '4.2 · load, tick, dan aturan 20 tick',
          html: '<div class="tbl"><table><tbody><tr><th>Kapan</th><th>Apa yang dijalankan</th></tr>\n    <tr><td>Saat dunia dimuat, atau <code>/reload</code></td><td>Fungsi yang terdaftar di <code>load.json</code> — sekali. Cocok untuk persiapan: membuat scoreboard.</td></tr>\n    <tr><td>Setiap tick game — <strong>20 kali per detik</strong></td><td>Fungsi yang terdaftar di <code>tick.json</code>. Cocok untuk timer dan memeriksa kondisi.</td></tr>\n    <tr><td>Saat kamu memanggilnya</td><td><code>/function forge:setup</code> menjalankan satu fungsi secara manual — bagus untuk uji coba.</td></tr></tbody></table></div><pre class="code"># setup.mcfunction  (in load.json: runs once)\nscoreboard objectives add timer dummy\nscoreboard objectives add points dummy\nscoreboard objectives setdisplay sidebar points\n\n# loop.mcfunction   (in tick.json: runs 20 times per second)\nscoreboard players add #game timer 1\nexecute if score #game timer matches 200 run say Ten seconds!</pre><div class="card "><p>Timer bertambah 1 setiap tick, jadi 200 tick = <strong>10 detik</strong>. <code>execute if …</code> adalah versi data pack dari <code>if</code>. Scoreboard adalah cara modul 06 “mencatat poin”.</p></div>'
        },
        {
          t: '4.3 · Saat aturan tidak aktif',
          html: '<div class="tbl"><table><tbody><tr><th>Gejala</th><th>Hal pertama yang diperiksa</th></tr>\n    <tr><td>Tidak terjadi apa-apa</td><td>Apakah mereka menjalankan <code>/reload</code> setelah mengedit? Apakah pack-nya aktif (<code>/datapack list</code>)?</td></tr>\n    <tr><td>Persiapan tidak pernah terjadi</td><td>Apakah fungsi terdaftar di <code>load.json</code>, dengan namespace yang benar?</td></tr>\n    <tr><td>Berfungsi sekali, tapi tidak setelah masuk lagi ke dunia</td><td>Persiapan dijalankan manual dan tidak ada di <code>load.json</code></td></tr>\n    <tr><td>Aktif terus-menerus, bukan sekali</td><td>Perintahnya ada di fungsi tick tanpa kondisi</td></tr>\n    <tr><td>Kondisinya tidak pernah aktif</td><td>Periksa nama objective, targetnya, dan angkanya — telusuri seperti algoritma lainnya</td></tr></tbody></table></div><div class="card class"><p><strong>Di kelas:</strong> jangan perbaiki untuk mereka. Periksa pemicunya bersama: <em>“Jelaskan padaku kapan ini seharusnya aktif.”</em> Saat dimuat, setiap tick, atau hanya saat kondisinya benar?</p></div>'
        }
      ],
      quiz: [
        {
          p: 'Berapa kali per detik fungsi yang terdaftar di tick.json berjalan?',
          o: ['1', '10', '20', '60'],
          c: 2,
          f: 'Minecraft menjalankan 20 tick per detik, dan fungsi tick berjalan setiap tick.'
        },
        {
          p: 'Sebuah timer menambah 1 ke skor setiap tick. Nilai mana yang berarti 30 detik telah berlalu?',
          o: ['30', '300', '600', '1800'],
          c: 2,
          f: '20 tick per detik × 30 detik = 600.'
        },
        {
          p: 'Seorang siswa mengedit file fungsi, tapi game masih berperilaku seperti sebelumnya. Apa yang sebaiknya ia coba lebih dulu?',
          o: ['Menghapus dunia', 'Menjalankan /reload', 'Me-restart komputer', 'Mengganti nama namespace'],
          c: 1,
          f: '/reload memuat file yang diubah dan menjalankan lagi fungsi load.'
        },
        {
          p: 'Di mana sebaiknya perintah yang membuat objective scoreboard ditempatkan?',
          o: ['Di fungsi yang terdaftar di load.json', 'Di fungsi yang terdaftar di tick.json', 'Di pack.mcmeta', 'Harus diketik manual setiap pelajaran'],
          c: 0,
          f: 'Persiapan tempatnya di fungsi load: berjalan sekali saat dunia dimuat atau saat /reload.'
        },
        {
          p: 'Aturan seorang siswa tidak aktif dan ia ingin kamu memperbaikinya. Apa yang kamu katakan?',
          o: ['“Sini, biar aku tulis ulang untukmu.”', '“Jelaskan padaku kapan ini seharusnya aktif.”', '“Minta Sparks menulisnya lagi.”', '“Data pack terlalu sulit — lewati saja.”'],
          c: 1,
          f: 'Memeriksa pemicunya bersama membuat siswa tetap memecahkannya sendiri, langkah demi langkah.'
        }
      ]
    }
  ],
  tracers: {
    robot: {
      title: 'Telusuri: robot di garis bilangan',
      code: ['x = 3', 'repeat 4 times:', '    if x is a multiple of 3:', '        move 2 forward', '    otherwise:', '        move 1 back'],
      steps: [
        {
          l: 0,
          v: { x:3, round:'–' },
          n: 'Tulis nilai awalnya sebelum hal lain.'
        },
        {
          l: 2,
          v: { x:3, round:1 },
          n: 'Putaran 1. Apakah 3 kelipatan 3? Ya.'
        },
        {
          l: 3,
          v: { x:5, round:1 },
          n: '3 + 2 = 5. Putaran berikutnya memeriksa nilai x yang BARU, yaitu 5.'
        },
        {
          l: 5,
          v: { x:4, round:2 },
          n: 'Putaran 2. 5 bukan kelipatan 3, jadi mundur: 5 − 1 = 4.'
        },
        {
          l: 5,
          v: { x:3, round:3 },
          n: 'Putaran 3. 4 bukan kelipatan 3: 4 − 1 = 3.'
        },
        {
          l: 3,
          v: { x:5, round:4 },
          n: 'Putaran 4. 3 kelipatan 3 lagi: 3 + 2 = 5. Empat putaran selesai.'
        },
        {
          l: 1,
          v: { x:5, round:'done' },
          n: 'Jawaban akhir: 5. Perhatikan robot kembali ke 3 — perulangan yang kembali ke nilai yang sama adalah jebakan klasik bagi yang menebak.'
        }
      ]
    },
    coins: {
      title: 'Telusuri: perulangan dengan kondisi di dalamnya',
      code: ['coins = 2', 'repeat 3 times:', '    coins = coins + 3', '    if coins > 6:', '        coins = coins * 2'],
      steps: [
        {
          l: 0,
          v: { coins:2, round:'–' },
          n: 'Nilai awal.'
        },
        {
          l: 2,
          v: { coins:5, round:1 },
          n: 'Putaran 1: tambah dulu. 2 + 3 = 5.'
        },
        {
          l: 3,
          v: { coins:5, round:1 },
          n: 'Sekarang periksa nilai BARU: apakah 5 > 6? Tidak — tidak ada yang digandakan.'
        },
        {
          l: 2,
          v: { coins:8, round:2 },
          n: 'Putaran 2: 5 + 3 = 8.'
        },
        {
          l: 4,
          v: { coins:16, round:2 },
          n: '8 > 6, jadi digandakan: 16.'
        },
        {
          l: 2,
          v: { coins:19, round:3 },
          n: 'Putaran 3: 16 + 3 = 19.'
        },
        {
          l: 4,
          v: { coins:38, round:3 },
          n: '19 > 6, digandakan lagi: 38. Begitu ambangnya terlewati, penggandaan terjadi di setiap putaran.'
        }
      ]
    },
    flag: {
      title: 'Telusuri: penghitung, flag, dan aturan berhenti',
      code: ['numbers = 6, 1, 8, 3, 12', 'counter = 0, mode = off', 'for each number, in this order:', '    if number > 5: counter + 1', '    if counter == 2: mode = on', '    if mode is on and number is odd: STOP'],
      steps: [
        {
          l: 1,
          v: { number:'–', counter:0, mode:'off' },
          n: 'Tulis setiap variabel di kolomnya sendiri sebelum mulai.'
        },
        {
          l: 3,
          v: { number:6, counter:1, mode:'off' },
          n: '6 > 5 → penghitung 1. Mode tetap mati. Lagi pula 6 genap.'
        },
        {
          l: 5,
          v: { number:1, counter:1, mode:'off' },
          n: '1 tidak > 5. Mode mati, jadi aturan berhenti tidak bisa aktif walaupun 1 ganjil.'
        },
        {
          l: 4,
          v: { number:8, counter:2, mode:'on' },
          n: '8 > 5 → penghitung 2 → mode menyala di langkah yang sama ini.'
        },
        {
          l: 5,
          v: { number:8, counter:2, mode:'on' },
          n: 'Aturan ketiga, angka yang sama: mode menyala, tapi 8 genap. Lanjut.'
        },
        {
          l: 5,
          v: { number:3, counter:2, mode:'on' },
          n: '3: tidak > 5. Mode menyala dan 3 ganjil → BERHENTI di 3. Angka 12 tidak pernah dibaca.'
        }
      ]
    },
    pyloop: {
      title: 'Telusuri: for + range di Python',
      code: ['total = 1', 'for i in range(3):', '    total = total + i * 3', 'print(total)'],
      steps: [
        {
          l: 0,
          v: { total:1, i:'–' },
          n: 'total dimulai dari 1, bukan 0 — selalu periksa nilai awal.'
        },
        {
          l: 1,
          v: { total:1, i:0 },
          n: 'range(3) memberi 0, 1, 2. Dimulai dari 0 dan tidak pernah mencapai 3.'
        },
        {
          l: 2,
          v: { total:1, i:0 },
          n: '1 + 0 * 3 = 1. Perkalian dikerjakan sebelum penjumlahan.'
        },
        {
          l: 2,
          v: { total:4, i:1 },
          n: '1 + 1 * 3 = 4.'
        },
        {
          l: 2,
          v: { total:10, i:2 },
          n: '4 + 2 * 3 = 10. Itu nilai terakhir yang dihasilkan range(3).'
        },
        {
          l: 3,
          v: { total:10, i:2 },
          n: 'print tidak diindentasi, jadi berjalan sekali, setelah perulangan. Output: 10.'
        }
      ]
    },
    pyreturn: {
      title: 'Telusuri: posisi return mengubah segalanya',
      code: ['def count_evens(numbers):', '    count = 0', '    for n in numbers:', '        if n % 2 == 0:', '            count += 1', '        return count', '', 'count_evens([2, 4, 6])'],
      steps: [
        {
          l: 7,
          v: { n:'–', count:'–', returned:'–' },
          n: 'Kita memanggil fungsi dengan [2, 4, 6]. Jawaban yang diharapkan adalah 3.'
        },
        {
          l: 1,
          v: { n:'–', count:0, returned:'–' },
          n: 'count dimulai dari 0.'
        },
        {
          l: 2,
          v: { n:2, count:0, returned:'–' },
          n: 'Putaran pertama perulangan: n = 2.'
        },
        {
          l: 4,
          v: { n:2, count:1, returned:'–' },
          n: '2 % 2 == 0, jadi count menjadi 1.'
        },
        {
          l: 5,
          v: { n:2, count:1, returned:1 },
          n: 'return diindentasi DI DALAM perulangan for. Ia berjalan di putaran pertama dan keluar dari fungsi: hasilnya 1. Angka 4 dan 6 tidak pernah dilihat.'
        },
        {
          l: 5,
          v: { n:2, count:1, returned:1 },
          n: 'Perbaikan: geser return count mundur empat spasi, sejajar dengan for. Maka ia berjalan sekali, setelah semua angka dihitung.'
        }
      ]
    }
  }
};
