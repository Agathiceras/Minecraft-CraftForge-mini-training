/* ============================================================
   Minecraft publishing simulation (Kodland Sparks + Kodland Launcher + the lesson card) · POLISH
   For another language: copy this file as content-xx.js and change lang.
   Translate only the text inside quotes / backticks. Keep HTML tags, keys and the button names
   that appear in the real interface (Publish project, Minecraft skin, Image, Public, Only me, Edit, Everyone, Copy link…).
   ============================================================ */
window.CONTENT = { lang: 'pl' };

CONTENT.ui = {
  title: 'Kodland Sparks · Opublikuj projekt z Minecrafta',
  coachStep: (n, total) => `Krok ${n} z ${total}`,
  next: 'Dalej →',
  finish: 'Zakończ ✓',
  clickHint: '👆 Kliknij podświetlone miejsce',
  followStep: 'Wykonaj podświetlony krok 🙂',
  langName: 'Polski',
  studentNick: 'lucas_craft',
  studentName: 'Lucas',
  studentInitial: 'L',
  skinTitle: 'Lucas odkrywca',
  skinFile: 'lucas_skin.png',
  towerTitle: 'Wieża strażnicza',
  oldTitle: 'Mój dom na wyspie',
  fileName: 'watchtower.png',
  packName: 'Rockapples',
  uploaded: 'Przesłano ✓',
  uploaded2: 'Przesłano 26 paź 2026',
  saved: 'Zapisano',
  copied: 'Link skopiowany',
  chars: n => `Znaki: ${n}`,
  cardTab: 'Platforma Kodland · Lekcja 1',
  cardUrl: 'https://platform.kodland.org/lesson/1'
};

CONTENT.flows = {
  /* Beginner: part 1 = the skin as a Minecraft skin project (Lesson 1); part 2 = a build screenshot as an Image project (Lesson 2 and homework) */
  image: {
    card: { gif: 'assets/crafters-skin.gif', label: 'Link do mojego skina w Kodland Sparks', placeholder: 'Wklej tutaj link do swojego skina' },
    welcome: {
      kicker: '⚡ Symulacja · Minecraft CraftForge Beginner',
      title: 'Opublikuj <span>skina i budowlę</span> w Kodland Sparks',
      lead: 'W Minecraft CraftForge Beginner uczniowie publikują swoje prace w Kodland Sparks od lekcji 1: najpierw własnego <b>skina</b>, potem zrzuty ekranu swoich budowli jako projekty <b>Image</b>. Następnie wklejają link do projektu w karcie lekcji. Tutaj wcielasz się w Lucasa, ucznia.',
      seeTitle: 'Co zrobisz',
      see: ['Opublikujesz skina jako projekt <b>Minecraft skin</b> i wybierzesz, kto może go zobaczyć.', 'Znajdziesz link: <b>My projects → opublikowany projekt → adres w pasku przeglądarki</b>.', 'Wkleisz link do karty lekcji na platformie Kodland.', 'Opublikujesz zrzut ekranu budowli jako projekt <b>Image</b> i naprawisz link, którego nikt inny nie może otworzyć.'],
      how: 'Karta przewodnika pokazuje Ci każdy krok. Klikaj podświetlone miejsce. Zajmuje to ok. 5 minut.',
      start: 'Zacznij symulację →'
    },
    steps: {
      start: { title: 'Skin Lucasa jest gotowy', text: 'Lucas narysował swojego craftera: plik skina PNG 64×64. Teraz publikuje go w Kodland Sparks, żeby móc go założyć w launcherze i wysłać jego link w karcie lekcji.' },
      navPublish: { title: 'Publish project', text: 'Na górnym pasku Sparks kliknij <b>Publish project</b>.' },
      typeSkin: { title: 'Typ projektu: Minecraft skin', text: 'Jest osiem typów projektów. Skina publikuje się jako <b>Minecraft skin</b>: Sparks pokazuje go na modelu 3D. Kliknij go.' },
      title: { title: 'Nadaj nazwę', text: 'Kliknij pole tytułu. Projekt z jasną nazwą łatwo potem znaleźć — uczniowi i Tobie.' },
      model: { title: 'Steve czy Alex', text: '<b>Model</b> decyduje o kształcie postaci, na której wyświetla się skin: <b>Steve</b> (klasyczne ręce) albo <b>Alex</b> (szczupłe ręce). Domyślnie wybrany jest Steve.' },
      upload: { title: 'Plik skina (PNG)', text: 'Kliknij <b>Choose file</b> i dodaj skina: <b>PNG 64×64</b> (stary format 64×32 też działa).' },
      visibility: { title: 'Kto może zobaczyć', text: '<ul><li><b>Public</b>: w aktualnościach i w publicznym portfolio.</li><li><b>Friends only</b>: znajomi, nauczyciele i uczeń.</li><li><b>Only me</b>: nikt inny nie otworzy linku — nawet Ty.</li></ul>Najważniejsze, żebyś <b>Ty mógł otworzyć link</b>.' },
      visPublic: { title: 'Wybierz Public', text: 'Lucas chce, żeby inni gracze zobaczyli jego craftera. Kliknij <b>Public</b>.' },
      toggles: { title: 'Opcje na końcu', text: '<ul><li><b>Request feedback</b>: inni autorzy mogą zostawić uporządkowaną opinię (tylko projekty publiczne).</li><li><b>Others can modify this project</b>: domyślnie włączone — inni mogą otworzyć własną kopię; oryginał zostaje nietknięty.</li><li><b>Discord selection</b>: najlepsze publiczne projekty dnia trafiają na Discorda.</li></ul>' },
      publish: { title: 'Publish', text: 'Kliknij <b>1× 💎 Publish</b>. Za publikację dostaje się też kryształ.' },
      findMy: { title: 'Gdzie jest link?', text: 'Skin jest opublikowany. Teraz uczeń potrzebuje jego linku. To nie jest tekst, który się skądś kopiuje: to adres strony projektu. Najpierw przejdź do <b>My projects</b>.' },
      openSkin: { title: 'Otwórz opublikowany projekt', text: 'Profil pokazuje projekty ucznia. Kliknij skina, którego przed chwilą opublikowałeś.' },
      copy: { title: 'Skopiuj link z paska przeglądarki', text: 'Strona projektu jest otwarta. Jej link to adres w <b>pasku przeglądarki</b>: <code>portfolio.kodland.org/nickname/…</code>. Kliknij pasek, żeby go zaznaczyć, i skopiuj (Ctrl + C / Cmd + C).' },
      toCard: { title: 'Przejdź do lekcji na platformie', text: 'Publikacja w Sparks i wysłanie linku na platformie Kodland to <b>dwa różne kroki</b>. Otwórz zakładkę z lekcją.' },
      paste: { title: 'Wklej link do karty', text: 'To jest karta <b>„Skin craftera”</b> na platformie. Kliknij pole <b>„Link do mojego skina w Kodland Sparks”</b>, żeby wkleić link (Ctrl + V / Cmd + V). Tutaj wpisuje się tylko link. Sprawdź w Backoffice, czy linki naprawdę dotarły.' },
      imageIntro: { title: 'Od lekcji 2: budowle jako Image', text: 'Od lekcji 2 uczniowie publikują też <b>zrzuty ekranu swoich budowli</b> (F5, żeby zobaczyć siebie, F1, żeby ukryć interfejs). Lucas właśnie skończył wieżę strażniczą. Wróć do zakładki Kodland Sparks.' },
      navPublish2: { title: 'Publish project', text: 'Ponownie kliknij <b>Publish project</b>.' },
      typeImage: { title: 'Typ projektu: Image', text: 'Zrzut ekranu publikuje się jako <b>Image</b>. Kliknij go.' },
      title2: { title: 'Nazwa', text: 'Kliknij pole tytułu.' },
      upload2: { title: 'Drawing: zrzut ekranu', text: 'W sekcji <b>Drawing</b> kliknij <b>Choose file</b> (PNG, JPG, WebP lub GIF do 5 MB). W Windows zrzut ekranu jest w <b>Obrazy → Zrzuty ekranu</b>; na Macu — na pulpicie.' },
      publish2: { title: 'Publish', text: 'Widoczność zostaje na <b>Public</b>. Kliknij <b>Publish</b>. Link znajduje się tak samo: My projects → projekt → pasek przeglądarki.' },
      problem: { title: 'Link, który się nie otwiera', text: 'Inna sytuacja: uczeń wysyła link, a Tobie się on nie otwiera. Na profilu ucznia projekt ma oznaczenie <b>Private project</b>: został zapisany jako <b>Only me</b>. Naprawmy to jako Lucas.' },
      myProjects: { title: 'My projects', text: 'Kliknij <b>My projects</b>.' },
      privateCard: { title: 'Prywatny projekt', text: 'Otwórz projekt z oznaczeniem <b>Private project</b>.' },
      edit: { title: 'Edit', text: 'Kliknij <b>Edit</b>.' },
      fixPublic: { title: 'Zmień widoczność', text: 'Wybierz <b>Public</b> (albo <b>Friends only</b>, który nauczyciele też mogą otworzyć).' },
      resend: { title: 'Opublikuj ponownie', text: 'Kliknij <b>Publish</b>. Link pozostaje ten sam i teraz Ci się otwiera.' },
      done: { title: 'Naprawione', text: 'Projekt jest publiczny, a link w pasku przeglądarki działa. Jeśli link nadal się nie otwiera, poproś ucznia o udostępnienie ekranu i powtórzcie kroki razem.' }
    },
    finish: {
      kicker: '🏁 Symulacja ukończona',
      title: 'Wiesz, jak publikuje się <span>prace z Minecrafta</span>',
      intro: 'Tak robią uczniowie za każdym razem, gdy lekcja prosi o publikację:',
      points: ['Skin: <b>Publish project</b> → <b>Minecraft skin</b> → nazwa → Model (Steve/Alex) → PNG 64×64 → <b>Publish</b>.', 'Budowla: zrzut ekranu (F5, F1) → <b>Publish project</b> → <b>Image</b> → nazwa → Drawing → <b>Publish</b>.', 'Link: <b>My projects → opublikowany projekt → skopiuj adres z paska przeglądarki</b>, potem wklej go do karty lekcji na platformie. Publikacja i wysłanie linku to dwa różne kroki.', '<b>Private project</b> = Only me: My projects → projekt → Edit → Public → Publish. Link pozostaje ten sam.'],
      back: 'Wróć do szkolenia: sprawdzian modułu jest już odblokowany.',
      again: '↺ Zrób to jeszcze raz'
    }
  },

  /* Intermediate: the data pack is published from the Kodland Launcher (0.8.20) */
  datapack: {
    card: { gif: 'assets/sign-the-law.gif', label: 'Link do mojego prawa w Kodland Sparks', placeholder: 'Wklej tutaj link do opublikowanej paczki danych' },
    welcome: {
      kicker: '⚡ Symulacja · Minecraft CraftForge Intermediate',
      title: 'Opublikuj <span>paczkę danych</span> w Kodland Sparks',
      lead: 'W Minecraft CraftForge Intermediate uczniowie tworzą prawa świata (receptury, dropy, polecenia) w <b>paczce danych</b> (data pack) w Kodland Launcher i publikują ją z edytora na swoim profilu w Sparks. Tutaj wcielasz się w Lucasa, ucznia, który właśnie stworzył swoją pierwszą recepturę.',
      seeTitle: 'Co zrobisz',
      see: ['Otworzysz paczkę danych w launcherze: <b>Create → Data packs → Edit</b>.', 'Opublikujesz ją z <b>Who can see it? → Everyone</b> i skopiujesz link.', 'Wkleisz link do karty lekcji na platformie Kodland.', 'Naprawisz link, który się nie otwiera, i odnajdziesz link przez <b>Open on Sparks</b>.'],
      how: 'Karta przewodnika pokazuje Ci każdy krok. Klikaj podświetlone miejsce. Zajmuje to ok. 4 minut.',
      start: 'Zacznij symulację →'
    },
    steps: {
      start: { title: 'Prawo działa', text: 'Lucas stworzył recepturę w swojej paczce danych, zapisał ją, wrócił do świata i wytworzył swój przedmiot. Teraz podpisuje prawo: publikuje paczkę danych w Kodland Sparks. To jest launcher, zakładka <b>Play</b>.' },
      create: { title: 'Create', text: 'Paczki danych są w zakładce <b>Create</b>. Kliknij <b>Create</b>.' },
      edit: { title: 'Paczka danych', text: 'Oto paczki danych ucznia. Kliknij <b>Edit</b> przy paczce z recepturą.' },
      editor: { title: 'Edytor paczki danych', text: 'Po lewej — zawartość paczki; na środku — formularz receptury. W prawym górnym rogu <b>Publish</b> jest obok fioletowego przycisku <b>Save</b>.' },
      publish: { title: 'Publish', text: 'Kliknij <b>Publish</b>.' },
      name: { title: 'Nazwa', text: 'Otwiera się okno „Publish to your profile”. Kliknij pole <b>Name</b>. Pole <b>About it</b> jest opcjonalne.' },
      who: { title: 'Who can see it?', text: 'To decyduje, kto może otworzyć link. Tylko z <b>Everyone</b> link otwiera się innym — także Tobie — bez logowania na konto ucznia.' },
      everyone: { title: 'Everyone', text: 'Sprawdź, czy wybrane jest <b>Everyone</b>, i kliknij tę opcję.' },
      submit: { title: 'Publish', text: 'Kliknij <b>Publish</b>.' },
      copy: { title: 'Opublikowane! Skopiuj link', text: 'Pojawia się „Published! It is on your profile.” z linkiem do projektu i kryształem. Kliknij <b>Copy link</b>.' },
      close: { title: 'Done', text: 'Przycisk pokazuje teraz <b>Copied!</b>. Kliknij <b>Done</b>.' },
      toCard: { title: 'Przejdź do lekcji na platformie', text: 'Publikacja w Sparks i wysłanie linku na platformie Kodland to <b>dwa różne kroki</b>. Otwórz zakładkę z lekcją.' },
      paste: { title: 'Wklej link do karty', text: 'To jest karta <b>„Podpisz prawo”</b> na platformie. Kliknij pole <b>„Link do mojego prawa w Kodland Sparks”</b>, żeby wkleić link (Ctrl + V / Cmd + V). Sprawdź w Backoffice, czy linki naprawdę dotarły.' },
      problem: { title: 'Link, który się nie otwiera', text: 'Na następnej lekcji Lucas publikuje aktualizację, a link Ci się nie otwiera. Najpewniej w „Who can see it?” ustawiono <b>Only me</b>. Rozwiązanie: opublikuj ponownie z Everyone.' },
      backLauncher: { title: 'Wróć do launchera', text: 'Otwórz zakładkę Kodland Launcher.' },
      republish: { title: 'Opublikuj ponownie', text: 'Kliknij <b>Publish</b> w edytorze.' },
      fixEveryone: { title: 'Everyone', text: 'Paczka danych została opublikowana jako <b>Only me</b>. Wybierz <b>Everyone</b>.' },
      resubmit: { title: 'Publish', text: 'Kliknij <b>Publish</b>. Teraz link otwiera się wszystkim.' },
      lostLink: { title: 'Zgubiony link?', text: 'Jeśli uczeń zamknął okno, nie kopiując linku, zawsze można go odnaleźć: <b>Open on Sparks</b> (tutaj albo na górze edytora) otwiera stronę projektu. Kliknij.' },
      done: { title: 'Strona projektu', text: 'Paczka danych otwiera się na profilu ucznia w Sparks. Link to adres w pasku przeglądarki — uczeń kopiuje go stamtąd i wkleja do karty.' }
    },
    finish: {
      kicker: '🏁 Symulacja ukończona',
      title: 'Wiesz, jak publikuje się <span>paczkę danych</span>',
      intro: 'Tak robią uczniowie za każdym razem, gdy lekcja prosi o publikację ich praw:',
      points: ['Launcher: <b>Create → Data packs → Edit</b> → <b>Publish</b> (obok Save).', '„Publish to your profile”: nazwa → <b>Who can see it? → Everyone</b> → Publish → <b>Copy link</b> → Done.', 'Wklej link do karty lekcji na platformie. Publikacja i wysłanie linku to dwa różne kroki.', 'Link się nie otwiera → opublikuj ponownie z <b>Everyone</b>. Link zgubiony → <b>Open on Sparks</b> i skopiuj adres z paska przeglądarki.'],
      back: 'Wróć do szkolenia: sprawdzian modułu jest już odblokowany.',
      again: '↺ Zrób to jeszcze raz'
    }
  }
};
