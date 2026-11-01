/* ============================================================
   Minecraft publishing simulation (Kodland Sparks + Kodland Launcher + the lesson card) · INDONESIAN
   Translated from content-en.js. Translate only the text inside quotes / backticks. Keep HTML tags, keys and the button names
   that appear in the real interface (Publish project, Minecraft skin, Image, Public, Only me, Edit, Everyone, Copy link…).
   TODO: replace the Backoffice code and link (2226 / 2227) with the Indonesian course when it exists.
   ============================================================ */
window.CONTENT = { lang: 'id' };

CONTENT.ui = {
  title: 'Kodland Sparks · Publikasikan proyek Minecraft',
  coachStep: (n, total) => `Langkah ${n} dari ${total}`,
  next: 'Berikutnya →',
  finish: 'Selesai ✓',
  clickHint: '👆 Klik bagian yang disorot',
  followStep: 'Ikuti langkah yang disorot 🙂',
  langName: 'Bahasa Indonesia',
  studentNick: 'lucas_craft',
  studentName: 'Lucas',
  studentInitial: 'L',
  skinTitle: 'Lucas sang penjelajah',
  skinFile: 'lucas_skin.png',
  towerTitle: 'Menara pengawas',
  oldTitle: 'Rumah pulauku',
  fileName: 'watchtower.png',
  packName: 'Rockapples',
  uploaded: 'Terunggah ✓',
  uploaded2: 'Diunggah 26 Okt 2026',
  saved: 'Tersimpan',
  copied: 'Tautan disalin',
  chars: n => `${n} karakter`,
  cardTab: 'Platform Kodland · Pelajaran 1',
  cardUrl: 'https://platform.kodland.org/lesson/1'
};

CONTENT.flows = {
  /* Beginner: part 1 = the skin as a Minecraft skin project (Lesson 1); part 2 = a build screenshot as an Image project (Lesson 2 and homework) */
  image: {
    card: { gif: 'assets/crafters-skin.gif', label: 'Tautan ke Skin saya di Kodland Sparks', placeholder: 'Tempel tautan ke Skin kamu di sini' },
    welcome: {
      kicker: '⚡ Simulasi · Minecraft CraftForge Beginner',
      title: 'Publikasikan <span>skin dan bangunan</span> di Kodland Sparks',
      lead: 'Di Minecraft CraftForge Beginner, siswa memublikasikan karya mereka di Kodland Sparks sejak Pelajaran 1: pertama <b>skin</b> mereka sendiri, lalu screenshot bangunan mereka sebagai proyek <b>Image</b>. Setelah itu mereka menempelkan tautan proyeknya di kartu pelajaran. Di sini Anda berperan sebagai Lucas, seorang siswa.',
      seeTitle: 'Yang akan Anda lakukan',
      see: ['Memublikasikan skin sebagai proyek <b>Minecraft skin</b> dan memilih siapa yang bisa melihatnya.', 'Menemukan tautannya: <b>My projects → proyek yang sudah dipublikasikan → alamat di bilah browser</b>.', 'Menempelkan tautan di kartu pelajaran di platform Kodland.', 'Memublikasikan screenshot bangunan sebagai proyek <b>Image</b>, dan memperbaiki tautan yang tidak bisa dibuka orang lain.'],
      how: 'Kartu panduan menunjukkan setiap langkah. Klik bagian yang disorot. Waktunya sekitar 5 menit.',
      start: 'Mulai simulasi →'
    },
    steps: {
      start: { title: 'Skin Lucas sudah siap', text: 'Lucas sudah menggambar crafter-nya: file skin PNG 64×64. Sekarang ia memublikasikannya di Kodland Sparks, agar bisa memakainya di launcher dan mengirim tautannya di kartu pelajaran.' },
      navPublish: { title: 'Publish project', text: 'Di bilah atas Sparks, klik <b>Publish project</b>.' },
      typeSkin: { title: 'Jenis proyek: Minecraft skin', text: 'Ada delapan jenis proyek. Skin dipublikasikan sebagai <b>Minecraft skin</b>: Sparks menampilkannya pada model 3D. Klik jenis ini.' },
      title: { title: 'Beri nama', text: 'Klik kolom judul. Proyek dengan nama yang jelas mudah ditemukan nanti — bagi siswa dan bagi Anda.' },
      model: { title: 'Steve atau Alex', text: '<b>Model</b> menentukan bentuk tubuh tempat skin ditampilkan: <b>Steve</b> (lengan klasik) atau <b>Alex</b> (lengan ramping). Steve dipilih secara default.' },
      upload: { title: 'Skin file (PNG)', text: 'Klik <b>Choose file</b> dan tambahkan skin-nya: <b>PNG 64×64</b> (format lama 64×32 juga bisa).' },
      visibility: { title: 'Siapa yang bisa melihat', text: '<ul><li><b>Public</b>: di feed dan di portofolio publik.</li><li><b>Friends only</b>: teman, guru, dan siswa itu sendiri.</li><li><b>Only me</b>: tidak ada orang lain yang bisa membuka tautannya — termasuk Anda.</li></ul>Yang penting, <b>Anda bisa membuka tautannya</b>.' },
      visPublic: { title: 'Pilih Public', text: 'Lucas ingin pemain lain melihat crafter-nya. Klik <b>Public</b>.' },
      toggles: { title: 'Opsi di bagian akhir', text: '<ul><li><b>Request feedback</b>: kreator lain bisa memberikan umpan balik yang terstruktur (hanya untuk proyek publik).</li><li><b>Others can modify this project</b>: aktif secara default — orang lain bisa membuka salinannya sendiri; aslinya tetap utuh.</li><li><b>Discord selection</b>: proyek publik terbaik hari itu diunggah di Discord.</li></ul>' },
      publish: { title: 'Publish', text: 'Klik <b>1× 💎 Publish</b>. Memublikasikan juga memberi satu kristal.' },
      findMy: { title: 'Di mana tautannya?', text: 'Skin sudah dipublikasikan. Sekarang siswa memerlukan tautannya. Tautan itu bukan teks yang disalin dari suatu tempat: tautannya adalah alamat halaman proyek. Pertama, buka <b>My projects</b>.' },
      openSkin: { title: 'Buka proyek yang sudah dipublikasikan', text: 'Profil menampilkan proyek-proyek siswa. Klik skin yang baru saja Anda publikasikan.' },
      copy: { title: 'Salin tautan dari bilah browser', text: 'Halaman proyek sudah terbuka. Tautannya adalah alamat di <b>bilah browser</b>: <code>portfolio.kodland.org/nickname/…</code>. Klik bilahnya untuk memilih alamat itu dan salin (Ctrl + C / Cmd + C).' },
      toCard: { title: 'Buka pelajaran di platform', text: 'Memublikasikan di Sparks dan mengirim tautan di platform Kodland adalah <b>dua langkah yang berbeda</b>. Buka tab pelajaran.' },
      paste: { title: 'Tempel tautan di kartu', text: 'Ini adalah kartu <b>“Skin Sang Crafter”</b> di platform. Klik kolom <b>“Tautan ke Skin saya di Kodland Sparks”</b> untuk menempelkan tautannya (Ctrl + V / Cmd + V). Hanya tautan yang dimasukkan di sini. Cek di Backoffice bahwa tautannya benar-benar masuk.' },
      imageIntro: { title: 'Mulai Pelajaran 2: bangunan sebagai Image', text: 'Mulai Pelajaran 2, siswa juga memublikasikan <b>screenshot bangunan mereka</b> (F5 untuk melihat diri sendiri, F1 untuk menyembunyikan antarmuka). Lucas baru saja menyelesaikan menara pengawas. Kembali ke tab Kodland Sparks.' },
      navPublish2: { title: 'Publish project', text: 'Klik <b>Publish project</b> lagi.' },
      typeImage: { title: 'Jenis proyek: Image', text: 'Screenshot dipublikasikan sebagai <b>Image</b>. Klik jenis ini.' },
      title2: { title: 'Nama', text: 'Klik kolom judul.' },
      upload2: { title: 'Drawing: screenshot-nya', text: 'Di <b>Drawing</b>, klik <b>Choose file</b> (PNG, JPG, WebP, atau GIF hingga 5 MB). Di Windows, screenshot ada di <b>Pictures → Screenshots</b>; di Mac, di desktop.' },
      publish2: { title: 'Publish', text: 'Visibilitas tetap <b>Public</b>. Klik <b>Publish</b>. Tautannya ditemukan dengan cara yang sama: My projects → proyeknya → bilah browser.' },
      problem: { title: 'Tautan yang tidak bisa dibuka', text: 'Kasus lain: seorang siswa mengirim tautan, tetapi tautannya tidak bisa Anda buka. Di profil siswa, proyek itu menampilkan label <b>Private project</b>: proyeknya disimpan sebagai <b>Only me</b>. Mari kita perbaiki sebagai Lucas.' },
      myProjects: { title: 'My projects', text: 'Klik <b>My projects</b>.' },
      privateCard: { title: 'Proyek privat', text: 'Buka proyek yang berlabel <b>Private project</b>.' },
      edit: { title: 'Edit', text: 'Klik <b>Edit</b>.' },
      fixPublic: { title: 'Ubah visibilitas', text: 'Pilih <b>Public</b> (atau <b>Friends only</b>, yang juga bisa dibuka guru).' },
      resend: { title: 'Publikasikan lagi', text: 'Klik <b>Publish</b>. Tautannya tetap sama dan sekarang bisa Anda buka.' },
      done: { title: 'Sudah diperbaiki', text: 'Proyeknya sudah publik dan tautan di bilah browser berfungsi. Jika tautan masih tidak bisa dibuka, minta siswa membagikan layarnya dan ulangi langkah-langkahnya bersama.' }
    },
    finish: {
      kicker: '🏁 Simulasi selesai',
      title: 'Anda sudah tahu cara <span>karya Minecraft</span> dipublikasikan',
      intro: 'Inilah yang dilakukan siswa setiap kali pelajaran meminta mereka memublikasikan karya:',
      points: ['Skin: <b>Publish project</b> → <b>Minecraft skin</b> → nama → Model (Steve/Alex) → PNG 64×64 → <b>Publish</b>.', 'Bangunan: screenshot (F5, F1) → <b>Publish project</b> → <b>Image</b> → nama → Drawing → <b>Publish</b>.', 'Tautannya: <b>My projects → proyek yang sudah dipublikasikan → salin alamat dari bilah browser</b>, lalu tempel di kartu pelajaran di platform. Memublikasikan dan mengirim tautan adalah dua langkah yang berbeda.', '<b>Private project</b> = Only me: My projects → proyek → Edit → Public → Publish. Tautannya tetap sama.'],
      back: 'Kembali ke pelatihan: evaluasi modul sekarang sudah terbuka.',
      again: '↺ Ulangi lagi'
    }
  },

  /* Intermediate: the data pack is published from the Kodland Launcher (0.8.20) */
  datapack: {
    card: { gif: 'assets/sign-the-law.gif', label: 'Tautan ke Hukum saya di Kodland Sparks', placeholder: 'Tempel tautan ke data pack yang sudah kamu publikasikan di sini' },
    welcome: {
      kicker: '⚡ Simulasi · Minecraft CraftForge Intermediate',
      title: 'Publikasikan <span>data pack</span> di Kodland Sparks',
      lead: 'Di Minecraft CraftForge Intermediate, siswa membuat hukum untuk dunia (resep, drop, perintah) di sebuah <b>data pack</b> di Kodland Launcher, lalu memublikasikannya ke profil Sparks mereka dari editor. Di sini Anda berperan sebagai Lucas, seorang siswa yang baru saja membuat resep pertamanya.',
      seeTitle: 'Yang akan Anda lakukan',
      see: ['Membuka data pack di launcher: <b>Create → Data packs → Edit</b>.', 'Memublikasikannya dengan <b>Who can see it? → Everyone</b> dan menyalin tautannya.', 'Menempelkan tautan di kartu pelajaran di platform Kodland.', 'Memperbaiki tautan yang tidak bisa dibuka, dan menemukan lagi tautannya dengan <b>Open on Sparks</b>.'],
      how: 'Kartu panduan menunjukkan setiap langkah. Klik bagian yang disorot. Waktunya sekitar 4 menit.',
      start: 'Mulai simulasi →'
    },
    steps: {
      start: { title: 'Hukumnya berfungsi', text: 'Lucas membuat resep di data pack-nya, menyimpannya, kembali ke dunia, dan meng-craft item-nya. Sekarang ia menandatangani hukumnya: ia memublikasikan data pack di Kodland Sparks. Ini launcher-nya, di tab <b>Play</b>.' },
      create: { title: 'Create', text: 'Data pack ada di tab <b>Create</b>. Klik <b>Create</b>.' },
      edit: { title: 'Data pack-nya', text: 'Inilah data pack milik siswa. Klik <b>Edit</b> pada pack yang berisi resep.' },
      editor: { title: 'Editor data pack', text: 'Di kiri, isi pack-nya; di tengah, formulir resep. Di kanan atas, <b>Publish</b> ada di samping tombol ungu <b>Save</b>.' },
      publish: { title: 'Publish', text: 'Klik <b>Publish</b>.' },
      name: { title: 'Nama', text: '“Publish to your profile” terbuka. Klik kolom <b>Name</b>. <b>About it</b> bersifat opsional.' },
      who: { title: 'Who can see it?', text: 'Pilihan ini menentukan siapa yang bisa membuka tautannya. Hanya dengan <b>Everyone</b> tautannya bisa dibuka orang lain — termasuk Anda — tanpa login ke akun siswa.' },
      everyone: { title: 'Everyone', text: 'Pastikan <b>Everyone</b> dipilih, lalu klik.' },
      submit: { title: 'Publish', text: 'Klik <b>Publish</b>.' },
      copy: { title: 'Published! Salin tautannya', text: '“Published! It is on your profile.” muncul dengan tautan proyek dan satu kristal. Klik <b>Copy link</b>.' },
      close: { title: 'Done', text: 'Tombolnya sekarang bertuliskan <b>Copied!</b>. Klik <b>Done</b>.' },
      toCard: { title: 'Buka pelajaran di platform', text: 'Memublikasikan di Sparks dan mengirim tautan di platform Kodland adalah <b>dua langkah yang berbeda</b>. Buka tab pelajaran.' },
      paste: { title: 'Tempel tautan di kartu', text: 'Ini adalah kartu <b>“Tanda Tangani Hukum”</b> di platform. Klik kolom <b>“Tautan ke Hukum saya di Kodland Sparks”</b> untuk menempelkan tautannya (Ctrl + V / Cmd + V). Cek di Backoffice bahwa tautannya benar-benar masuk.' },
      problem: { title: 'Tautan yang tidak bisa dibuka', text: 'Di pelajaran berikutnya, Lucas memublikasikan pembaruan, tetapi tautannya tidak bisa Anda buka. Kemungkinan besar “Who can see it?” diatur ke <b>Only me</b>. Solusinya: publikasikan lagi dengan Everyone.' },
      backLauncher: { title: 'Kembali ke launcher', text: 'Buka tab Kodland Launcher.' },
      republish: { title: 'Publikasikan lagi', text: 'Klik <b>Publish</b> di editor.' },
      fixEveryone: { title: 'Everyone', text: 'Data pack ini dipublikasikan sebagai <b>Only me</b>. Pilih <b>Everyone</b>.' },
      resubmit: { title: 'Publish', text: 'Klik <b>Publish</b>. Sekarang tautannya bisa dibuka semua orang.' },
      lostLink: { title: 'Tautannya hilang?', text: 'Jika siswa menutup jendela tanpa menyalin tautannya, tautan itu selalu bisa ditemukan lagi: <b>Open on Sparks</b> (di sini, atau di bagian atas editor) membuka halaman proyek. Klik tombol itu.' },
      done: { title: 'Halaman proyek', text: 'Data pack terbuka di profil Sparks siswa. Tautannya adalah alamat di bilah browser — siswa menyalinnya dari sana dan menempelkannya di kartu.' }
    },
    finish: {
      kicker: '🏁 Simulasi selesai',
      title: 'Anda sudah tahu cara <span>data pack</span> dipublikasikan',
      intro: 'Inilah yang dilakukan siswa setiap kali pelajaran meminta mereka memublikasikan hukumnya:',
      points: ['Launcher: <b>Create → Data packs → Edit</b> → <b>Publish</b> (di samping Save).', '“Publish to your profile”: nama → <b>Who can see it? → Everyone</b> → Publish → <b>Copy link</b> → Done.', 'Tempel tautan di kartu pelajaran di platform. Memublikasikan dan mengirim tautan adalah dua langkah yang berbeda.', 'Tautan tidak bisa dibuka → publikasikan lagi dengan <b>Everyone</b>. Tautan hilang → <b>Open on Sparks</b> dan salin alamat dari bilah browser.'],
      back: 'Kembali ke pelatihan: evaluasi modul sekarang sudah terbuka.',
      again: '↺ Ulangi lagi'
    }
  }
};
