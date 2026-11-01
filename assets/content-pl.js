/* ============================================================
   EM course training · Minecraft CraftForge (Beginner + Intermediate) [2228 · 2229] · POLISH
   For another language: copy this file as content-xx.js and change lang.
   Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names, commands and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by region (see COURSE.code and the 'bo' section).
   ============================================================ */
window.COURSE = { lang: 'pl' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Szkolenie z kursu EM',
  footer: 'kodland · Nowy Model Edukacyjny · Szkolenie z kursu',
  devLink: '🛠 Deweloper',
  logoSub: 'Nowy Model Edukacyjny',
  navHome: '← Strona główna',
  navBackModule: '← Wróć do modułu',
  moduleN: 'Moduł {n}',
  badgeStart: 'Zacznij →',
  badgeLocked: '🔒 Ukończ moduł {n}',
  badgeDone: '✓ Ukończono · {score}%',
  progLabel: 'ukończonych modułów',
  progAllDone: 'Moduły ukończone 🎉',
  eyebrow: '{course} · Moduł {n} z {total}',
  ctaTitle: 'Sprawdzian modułu',
  ctaText: 'Liczba krótkich pytań: {n}. Zdobądź co najmniej 70%, aby zaliczyć.',
  lockSim: '🔒 Ukończ symulację powyżej, aby odblokować sprawdzian.',
  startCheck: 'Zacznij sprawdzian →',
  retake: '🔁 Powtórz sprawdzian',
  qmeta: '{e} Sprawdzian modułu {n} · Pytanie {i} z {total}',
  fbRight: '✅ <b>Dobrze!</b> ',
  fbWrong: '❌ <b>Niezupełnie.</b> ',
  nextQuestion: 'Następne pytanie →',
  seeResult: 'Zobacz mój wynik →',
  passedTitle: 'Zaliczone!',
  failTitle: 'Prawie się udało',
  scoreLine: 'Poprawnych odpowiedzi: <b>{score} z {n}</b>.',
  failText: 'Potrzebujesz co najmniej 70%. Powtórz moduł i spróbuj jeszcze raz — możesz podchodzić do sprawdzianu tyle razy, ile potrzebujesz.',
  nextUnlocked: '<b>Moduł {n} · {title}</b> jest już odblokowany.',
  goModule: 'Przejdź do modułu {n} →',
  allDoneText: 'Ukończyłeś wszystkie moduły tego szkolenia.',
  seeNext: 'Zobacz kolejne kroki →',
  reviewModule: '📖 Powtórz moduł',
  homeDoneTitle: 'Moduły ukończone!',
  homeDoneText: 'Ostatni krok: test DST na stronie szkolenia w LMS.',
  homeDoneBtn: 'Zobacz, co robić dalej →',
  doneBadge: '✓ Ukończono',
  doneBack: 'Wróć do modułów',
  lockedTitle: 'Jeszcze zablokowane',
  lockedModule: 'Najpierw ukończ moduł {n}.',
  lockedStep: 'Ukończ poprzedni krok, aby odblokować ten.',
  ok: 'OK',
  linkOpen: 'Otwórz ↗',
  projPlay: '▶ Otwórz ↗',
  simOpen: '▶ Otwórz symulację tutaj',
  simClose: '✕ Zamknij symulację',
  simNewTab: 'Otwórz w nowej karcie ↗',
  simDone: '✅ Symulacja ukończona',
  simTodo: '○ Symulacja do wykonania',
  checkTag: 'Odhaczaj',
  mythTag: 'Mit',
  mythTap: 'Kliknij, aby zobaczyć, jak jest naprawdę →',
  mythReality: 'Rzeczywistość ✓',
  sortWrong: '✗ Niezupełnie.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'mccf';
COURSE.code = '2228';
COURSE.title = 'Minecraft CraftForge';
COURSE.color = '#16A34A';

COURSE.home = {
  kicker: '🎓 Szkolenie z kursu · [2228 · 2229]',
  title: 'Minecraft <span class="hl">CraftForge</span>',
  lead: '<b>Beginner</b> — Dla dzieci w wieku 8–9 lat: w Minecrafcie z graczy stają się twórcami — projektują własnego bohatera i dom, budują mechanizmy z redstone’a oraz programują robota Asystenta w języku Lua. <b>Intermediate</b> — Dla uczniów w wieku 10–12 lat: piszą prawa świata Minecrafta w paczkach danych (data packach) i programy w Pythonie, które budują mosty, wieże i całe światy. Cztery moduły: treści kursu Beginner i Intermediate, umiejętności potrzebne na kursie oraz techniczna strona lekcji.',
  facts: [
    ['🧑‍💻', '<b>We własnym tempie.</b> Twój postęp zapisuje się w tej przeglądarce. Każdy moduł kończy się krótkim sprawdzianem.'],
    ['⚡', '<b>Praktyka w zestawie.</b> Symulacja Kodland Sparks, w której przećwiczysz publikowanie budowli z Minecrafta i najczęstszy problem.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Zanim zaczniesz:</b> najpierw ukończ <b>główne szkolenie z Nowego Modelu Edukacyjnego (EM)</b>. To szkolenie z kursu jest jego kontynuacją i opiera się na tym, co tam poznałeś: Backoffice i Teacher Notes, Classroom z Follow Mode, wycieczka po Kodland Sparks i jakość lekcji.' },
  { kind:'warn', e:'🔄', html:'<b>Treści lekcji w Backoffice są stale aktualizowane.</b> Lekcje są ciągle ulepszane na podstawie opinii uczniów i tutorów. Spokojnie: gdy coś się zmieni, dostaniesz informację z wyprzedzeniem, żeby przygotować lekcję.' }
];

/* ---------------- Modules ----------------
   Beginner course content → Intermediate course content → Skills for the course → technical side (+ final survey, added by shared/final-survey.js).
   The Skills module is drawn by assets/skills.js from COURSE.skills (end of this file). */
COURSE.modules = [
  { id:'beg', n:1, e:'⛏️', color:'#16A34A', title:'Treści kursu · Beginner',
    desc:'Ogólne informacje o kursie, co osiąga uczeń i pierwsza lekcja modułu 1.',
    obj:'Przygotuj się do poprowadzenia pierwszej lekcji Minecraft CraftForge Beginner. Uczniowie w wieku 8–9 lat tworzą na niej własnego skina, publikują go w Kodland Sparks, wchodzą w nim do świata kursu i zaczynają budować własny dom.',
    offer:[['🧱','Poznasz ogólne informacje o kursie i to, co osiąga uczeń.'],['📖','Dowiesz się, co dzieje się na pierwszej lekcji.'],['⚡','Zrozumiesz, jak wykorzystuje się Sparks AI.'],['📘','Przejrzysz pierwszą lekcję i jej Teacher Notes w Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'Kurs', blocks:[
        { t:'meta', items:[['🧒','Wiek','8–9 lat'],['⏱️','Lekcja','60 min'],['📚','Program','40 lekcji · 10 modułów'],['🌙','Język','Lua']] },
        { t:'trio', items:[
          ['🎬','Najpierw wynik','Każda lekcja zaczyna się od pokazania gotowego wyniku i powiedzenia, czego uczniowie się nauczą. Potem pokazujesz drogę na swoim ekranie i prowadzisz ich krok po kroku.'],
          ['🛠️','Z gracza w twórcę','W grze zasady ustalił ktoś inny. Tutaj uczeń buduje, programuje robota i tworzy mechanizmy — a potem pokazuje wynik innym.'],
          ['🔍','Błędy są częścią procesu','Gdy coś nie działa: <i>Co widzę? Dlaczego tak jest? Co spróbuję? Czy zadziałało?</i> Niektóre lekcje mają zaplanowany błąd na Twoim ekranie, żeby uczniowie sami znaleźli przyczynę.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Uczniowie publikują swoje prace w <b>Kodland Sparks</b>, swoim portfolio, już od lekcji 1. <b>Sparks AI</b> podsuwa pomysły i opinie, ale to uczeń decyduje, co weźmie. Jest wbudowany w karty, więc uczniowie nie muszą osobno otwierać Sparks; zwykle wysyłają jedno zapytanie na zadanie.' }
      ]},
      { id:'goals', e:'🎓', title:'Co osiąga uczeń', blocks:[
        { t:'p', html:'Na koniec kursu uczeń osiągnie te cele:' },
        { t:'cards', cols:2, items:[
          ['🧱','Tworzy projekty','Ponad dziewięć projektów w portfolio Kodland Sparks oraz projekt końcowy: własną krainę, w której budowle, mechanizmy i programy działają razem.'],
          ['🤖','Programuje robota w Lua','Polecenia, argumenty, zmienne, pętle, warunki i własne funkcje. Robot buduje, kopie, omija przeszkody i wykonuje misje — a uczeń uczy się dzielić duże zadanie na kroki.'],
          ['⚡','Buduje mechanizmy i logikę','Redstone to „prąd” w Minecrafcie: dźwignie, przewody, lampy, drzwi, tłoki i pułapki. Uczeń poznaje logikę „jeśli–to” i od razu widzi efekt.'],
          ['🏰','Tworzy budowle i gry','Buduje, dbając o kształt, kolor i światło, oraz tworzy minigrę z własnymi zasadami, w którą grają koledzy z grupy.'],
          ['💬','Pewnie opowiada o swojej pracy','Na koniec każdej lekcji wyjaśnia, jak wszystko działa, i prezentuje grupie projekt końcowy.'],
          ['🧠','Umiejętności na całe życie','Kreatywność, praca w zespole (granie w gry innych i dawanie informacji zwrotnej), komunikacja i krytyczne myślenie: szukanie błędów i mądre korzystanie z podpowiedzi Sparks AI.']
        ]}
      ]},
      { id:'les', e:'📖', title:'Pierwsza lekcja', blocks:[
        { t:'p', html:'Moduł 1, <b>„Pierwszy ogień. Mój świat i pierwsze polecenia”</b>, kończy się projektem <b>„Mój bohater i mój dom”</b>. Otwórz pierwszą lekcję i przeczytaj, co musisz wiedzieć, jaki jest kluczowy wynik, jaka jest Twoja rola i na co uważać.' },
        { t:'lessons', key:'beg', items:[
          { tab:'M1L1', e:'🔥', h:'Lekcja 1 — Pierwszy ogień', p:'Pierwsza lekcja kursu (7 kart i zadanie domowe). Uczniowie uruchamiają launcher, poznają grupę, rysują i publikują własnego skina w Sparks, zakładają go, żeby wejść do świata, i zaczynają budować swój dom na wyspie.',
            acc:[['📚','Co musisz wiedzieć','<ul><li>Przebieg: połączenie i launcher → co nas czeka → skin w Sparks, podczas gdy launcher pobiera grę → założenie skina, wejście do świata i teleport na wyspę → budowa domu → prezentacja projektów → podsumowanie i zadanie domowe.</li><li><b>Studio skinów</b> otwiera się bezpośrednio w karcie lekcji (przycisk <b>Expand</b> — pełny ekran). Uczeń nie musi wychodzić z lekcji, żeby przejść do Sparks.</li><li>W launcherze: <b>Create → Skins → własny skin → Wear</b>, potem <b>Play</b> z kodem świata i <b>F5</b>, żeby zobaczyć siebie.</li><li>Uczniowie budują w <b>trybie kreatywnym</b>: ściany, wejście i tabliczkę ze swoim nickiem. Dach to zadanie domowe.</li></ul>'],
                 ['🎯','Kluczowy wynik','<ul><li>🏁 Skin jest <b>opublikowany w Sparks, a jego link jest w zadaniu</b>. Wszyscy docierają do tego mniej więcej do 29. minuty; tej karty nigdy się nie skraca.</li><li>Każdy uczeń wchodzi do świata we własnym skinie i stoi na wyspie.</li><li>Dom ma ściany, wejście i tabliczkę z nickiem.</li></ul>'],
                 ['🧑‍🏫','Twoja rola','<ul><li>Poznaj grupę: opowiedz o sobie, daj każdemu głos i zwracaj się do uczniów po imieniu przez całą lekcję.</li><li>Powiedz na głos cel lekcji: „Dziś każdy stworzy własnego skina, a świat go rozpozna”.</li><li>Zapytaj: „Czym tworzenie różni się od zwykłego grania?” — w grze zasady ustalił ktoś inny; tutaj tworzysz i pokazujesz innym.</li><li><b>Zaplanowany błąd, tylko na Twoim ekranie:</b> wejdź do świata bez klikania <b>Wear</b> → wyglądasz jak wszyscy. Zapytaj dlaczego, potem to popraw. Uczniowie od razu robią to dobrze.</li></ul>'],
                 ['📌','Uważaj','<ul><li>Na L1 komuś prawie na pewno nie uruchomi się launcher. Skina rysuje się w przeglądarce, więc uczeń dalej pracuje, a Ty naprawiasz launcher w czasie pracy samodzielnej.</li><li><b>Esc</b> nie działa w studiu na pełnym ekranie: użyj przycisku <b>Collapse</b> na górze.</li><li>Rysowanie może trwać w nieskończoność: „Ma być Twoje, nie idealne. Możesz dokończyć w domu”.</li><li>Sprawdź w Backoffice, czy linki naprawdę dotarły, a nie tylko czy były pokazane na ekranie.</li></ul>'],
                 ['⚙️','Aspekty techniczne','<ul><li>Dzień wcześniej wyślij linki do launchera na czat grupy i poproś uczniów, żeby zainstalowali go wcześniej.</li><li>Przejdź całą ścieżkę sam: skin w Sparks → publikacja → Skins → Wear → wejście do świata z kodem → teleport na wyspę.</li><li>Kod świata: <b>Welcome to CraftForge</b> (zakładka Play). Polecenie teleportu jest w Teacher Notes i na karcie.</li><li>Zadanie domowe: dokończyć dom, zrobić zrzut ekranu (<b>Win + Print Screen</b> w Windows, <b>Cmd + Shift + 4</b> na Macu), dołączyć go do <b>Sparks AI</b>, wbudowanego bezpośrednio w kartę zadania domowego, i wysłać jedno zapytanie. Następnie przesłać zrzut ekranu z jednym zdaniem o tym, co udało się dokończyć i co zasugerował Sparks.</li></ul>']] },
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'Pierwsza Teacher Note każdej lekcji zawiera pełny plan: podsumowanie, kluczowy wynik, czas każdej karty, Twoją rolę i ryzyka. Lekcja 1 ma też film przygotowawczy. <b>Przeczytaj wszystkie Teacher Notes przed lekcją.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Przejrzyj pierwszą lekcję w Backoffice', blocks:[
        { t:'p', html:'Przed sprawdzianem otwórz kurs w Backoffice i przejrzyj pierwszą lekcję we własnym tempie — są tam wszystkie karty aktywności i Teacher Notes. Nie ma limitu czasu.' },
        { t:'link', href:'https://bo.kodland.org/courses/2228', e:'📘', title:'Otwórz kurs w Backoffice', small:'[2228] Minecraft CraftForge Beginner — lekcje i ich Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'Treści lekcji w Backoffice będą dalej aktualizowane na podstawie opinii uczniów i tutorów. Gdy coś się zmieni, dostaniesz informację z wyprzedzeniem, żeby przygotować lekcję.' }
      ]}
    ]},

  { id:'int', n:2, e:'📜', color:'#0EA5E9', title:'Treści kursu · Intermediate',
    desc:'Ogólne informacje o kursie, co osiąga uczeń i pierwsza lekcja modułu 1.',
    obj:'Przygotuj się do poprowadzenia pierwszej lekcji Minecraft CraftForge Intermediate. Uczniowie w wieku 10–12 lat tworzą na niej swoje pierwsze prawo świata Minecrafta — recepturę w paczce danych — testują je w grze i publikują w Kodland Sparks.',
    offer:[['🧱','Poznasz ogólne informacje o kursie i to, co osiąga uczeń.'],['📖','Dowiesz się, co dzieje się na pierwszej lekcji.'],['📦','Zrozumiesz, czym jest paczka danych i jak uczniowie z nią pracują.'],['📘','Przejrzysz pierwszą lekcję i jej Teacher Notes w Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'Kurs', blocks:[
        { t:'meta', items:[['🧒','Wiek','10–12 lat'],['⏱️','Lekcja','90 min'],['📚','Program','40 lekcji · 10 modułów'],['🐍','Język','Python']] },
        { t:'trio', items:[
          ['🎬','Najpierw wynik','Każda lekcja zaczyna się od pokazania gotowego wyniku i powiedzenia celu na głos. Potem pokazujesz całą drogę na swoim ekranie i prowadzisz uczniów krok po kroku.'],
          ['📜','Z gracza w twórcę','Zwykle gracz przestrzega zasad świata. Tutaj uczeń je pisze: receptury, dropy, polecenia, a potem programy w Pythonie, które budują.'],
          ['🔍','Błędy są częścią procesu','Gdy świat nie reaguje: <i>Co widzę? Dlaczego tak jest? Co spróbuję? Czy zadziałało?</i> Lekcje mają zaplanowane testy, żeby uczniowie sami znaleźli przyczynę.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Uczniowie publikują swoje prace w <b>Kodland Sparks</b>, swoim portfolio, na każdej lekcji. <b>Sparks AI</b> podsuwa pomysły i scenariusze testów, ale to uczeń decyduje, co weźmie.' }
      ]},
      { id:'goals', e:'🎓', title:'Co osiąga uczeń', blocks:[
        { t:'p', html:'Na koniec kursu uczeń osiągnie te cele:' },
        { t:'cards', cols:2, items:[
          ['🧱','Tworzy projekty','Ponad dziewięć projektów w portfolio Kodland Sparks oraz autorski projekt końcowy.'],
          ['🐍','Python, który buduje','Pisze programy w Pythonie, dzięki którym w świecie gry pojawiają się mosty, wieże i wzory. Polecenia, argumenty, zmienne, typy danych, pętle, warunki i funkcje stają się codziennymi narzędziami.'],
          ['📜','Zasady świata','Za pomocą paczek danych ustala własne prawa Minecrafta: receptury, własne polecenia, timery, zdarzenia i punktację.'],
          ['🌍','Generatory i gry','Pisze algorytmy, które tworzą całe fragmenty świata (chunki), i buduje minigry, w które grają inni.'],
          ['🚀','Prowadzi pomysł aż do Demo Day','Przeprowadza projekt od koncepcji do prezentacji przed grupą i wyjaśnia, jak działa kod.'],
          ['🧠','Umiejętności na całe życie','Kreatywność, praca w zespole (testowanie projektów innych), komunikacja i krytyczne myślenie: szukanie błędów i ocenianie odpowiedzi Sparks AI zamiast ich kopiowania.']
        ]}
      ]},
      { id:'les', e:'📖', title:'Pierwsza lekcja', blocks:[
        { t:'p', html:'Moduł 1, <b>„Kod świata. Pierwsze programy i prawa świata”</b>, kończy się projektem <b>„Pomnik kodu”</b>. Pierwsza lekcja dotyczy <b>praw świata w paczce danych</b>. Otwórz ją i przeczytaj, co musisz wiedzieć, jaki jest kluczowy wynik, jaka jest Twoja rola i na co uważać.' },
        { t:'lessons', key:'int', items:[
          { tab:'M1L1', e:'📜', h:'Lekcja 1 — Pierwszy ślad w kodzie świata', p:'Pierwsza lekcja kursu (8 kart i zadanie domowe). Uczniowie uruchamiają launcher, poznają grupę, próbują trenażera praw, wchodzą do świata przez Nether, tworzą w paczce danych swoje pierwsze prawo — recepturę — testują je i publikują w Sparks. Potem z pomocą Sparks AI planują bazę i ją budują.',
            acc:[['📚','Co musisz wiedzieć','<ul><li><b>Paczka danych</b> (data pack) to zestaw praw świata. Prawa tworzy się poza światem, w studiu launchera, a świat wykonuje je za każdym razem, gdy do niego wchodzisz.</li><li>Rodzaje praw: <b>receptura</b>, <b>drop</b>, <b>polecenie</b> przy wejściu, <b>osiągnięcie</b>. Dziś: receptura.</li><li>Ścieżka: <b>Esc</b> i wyjście ze świata z zapisem → <b>Create → Data packs → Create data pack → Empty</b> → <b>Add → Recipe</b> → stół rzemieślniczy, przedmioty, wynik → <b>Save</b>.</li><li>Kod świata wpisuje się w zakładce <b>Play</b>. Uczniowie budują w trybie kreatywnym.</li></ul>'],
                 ['🎯','Kluczowy wynik','<ul><li>Wszyscy mają zapisaną paczkę danych z własną recepturą mniej więcej do 00:45.</li><li>🏁 Paczka danych jest <b>opublikowana w Sparks, a jej link jest w zadaniu</b> (karta „Podpisz prawo”, mniej więcej do 01:00). Tej karty nigdy się nie skraca.</li><li>Uczeń nadał przedmiotowi własną nazwę i wytworzył go na stole rzemieślniczym w świecie.</li></ul>'],
                 ['🧑‍🏫','Twoja rola','<ul><li>Poznaj grupę, kiedy gra się pobiera; zwracaj się do uczniów po imieniu przez całą lekcję.</li><li>Powiedz cel na głos: „Dziś każdy stworzy własne prawo dla Minecrafta, przetestuje je w grze i opublikuje w portfolio”.</li><li>Nie narzucaj receptur: pomysły powinny być różne — to sprawia, że projekt jest osobisty. Zapytaj: „Dlaczego ten przedmiot? Komu się przyda?”.</li><li><b>Zaplanowany test:</b> usuń jeden przedmiot ze stołu rzemieślniczego → nagroda znika. Zapytaj dlaczego, potem użyj czterech pytań. Chwal ucznia, który znajdzie przyczynę, a nie tylko tego, któremu udało się za pierwszym razem.</li></ul>'],
                 ['📌','Uważaj','<ul><li>Paczka danych się nie zapisuje → jedna z trzech części formularza jest pusta.</li><li>Prawo nie działa → zostało zapisane przy otwartym świecie: wyjdź i wejdź ponownie.</li><li>Receptura nie działa → przedmioty nie są ułożone tak jak w formularzu albo uczeń tworzy w ekwipunku zamiast na stole rzemieślniczym.</li><li>Link się nie otwiera → w „Who can see it?” nie wybrano <b>Everyone</b>: opublikuj ponownie.</li></ul>'],
                 ['⚙️','Aspekty techniczne','<ul><li>Dzień wcześniej wyślij linki do launchera na czat grupy.</li><li>Przejdź całą ścieżkę sam: kod świata → brzeg → wyjście z zapisem → paczka danych z recepturą → powrót do świata → stół rzemieślniczy → nagroda → publikacja w Sparks.</li><li>Kod świata: <b>Welcome to KodlandCraft</b>.</li><li>Zadanie domowe: dodać jeszcze jedno prawo (zmienić recepturę, nowa receptura albo polecenie/drop), przetestować je, opublikować aktualizację i wysłać link.</li></ul>']] },
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'Pierwsza Teacher Note każdej lekcji zawiera pełny plan: podsumowanie, kluczowy wynik, czas każdej karty, Twoją rolę i ryzyka. Lekcja 1 ma też film przygotowawczy. <b>Przeczytaj wszystkie Teacher Notes przed lekcją.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Przejrzyj pierwszą lekcję w Backoffice', blocks:[
        { t:'p', html:'Przed sprawdzianem otwórz kurs w Backoffice i przejrzyj pierwszą lekcję we własnym tempie — są tam wszystkie karty aktywności i Teacher Notes. Nie ma limitu czasu.' },
        { t:'link', href:'https://bo.kodland.org/courses/2229', e:'📘', title:'Otwórz kurs w Backoffice', small:'[2229] Minecraft CraftForge Intermediate — lekcje i ich Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'Treści lekcji w Backoffice będą dalej aktualizowane na podstawie opinii uczniów i tutorów. Gdy coś się zmieni, dostaniesz informację z wyprzedzeniem, żeby przygotować lekcję.' }
      ]}
    ]},

  {
    id: 'skills',
    n: 3,
    e: '🧩',
    color: '#8B5CF6',
    title: 'Umiejętności potrzebne na kursie',
    desc: 'Zanurzenie w Minecrafcie · Logika programowania · Praktyka programowania w Pythonie · Data packi: prawa świata',
    obj: 'Umiejętności, których tutor potrzebuje na tym kursie, w czterech blokach: świat Minecrafta, logika programowania, praktyka w Pythonie i data packi. Każdy blok kończy się krótkim sprawdzianem — potrzebujesz 70%, żeby odblokować kolejny.',
    offer: [
      ['🌍', 'Zanurzenie w Minecrafcie'],
      ['🧠', 'Logika programowania'],
      ['🐍', 'Praktyka programowania w Pythonie'],
      ['📜', 'Data packi: prawa świata']
    ],
    sections: [
      {
        id: 'skx',
        e: '🧩',
        title: 'Umiejętności potrzebne na kursie',
        blocks: [
          { t:'skills' }
        ]
      }
    ]
  },

  { id:'tech', n:4, e:'⚙️', color:'#F03D9E', title:'Techniczna strona lekcji',
    desc:'Kodland Launcher, mocny start, publikowanie w Sparks i najczęstsze problemy.',
    obj:'Dowiedz się, dzięki czemu lekcja Minecraft CraftForge działa od strony technicznej: Kodland Launcher, sprawdzenie launchera przed treściami, ostatnie minuty na publikację i pokazanie prac, gdzie uczniowie znajdują link do swojego projektu i jak rozwiązać najczęstsze problemy.',
    needs:['mcPublish','mcPublishDp'],
    offer:[['🟩','Pobierzesz, zainstalujesz Kodland Launcher i zalogujesz się do niego.'],['🚀','Przeprowadzisz sprawdzenie launchera przed treściami i zaczniesz od wyniku.'],['📤','Dopilnujesz, żeby każdy uczeń opublikował pracę w Sparks i wysłał link.'],['🛠️','Rozwiążesz najczęstsze problemy z launcherem i Minecraftem.']],
    sections:[
      { id:'focus', e:'🎯', title:'3 rzeczy, dzięki którym lekcja działa', blocks:[
        { t:'p', html:'To obszary, na których zespół produktowy kazał się skupić w kursach Minecraft. Otwórz każdy z nich:' },
        { t:'acc', items:[
          ['🎬','Najpierw pokaż wynik — i czym tworzenie różni się od grania','<p>W pierwszych minutach <b>pokaż gotowy wynik</b> i powiedz, czego uczniowie dziś się nauczą.</p><ul><li>Użyj karty wprowadzającej: „Zobaczcie, co będziecie mieć za godzinę: własnego craftera i własny dom na wyspie”.</li><li>Wyjaśnij, czym budowanie projektu <b>różni się od zwykłego grania</b>: w grze zasady ustalił ktoś inny; tutaj uczeń tworzy i pokazuje to innym.</li><li>Zapytaj jednego lub dwóch uczniów: „Jak myślisz, czym tworzenie różni się od zwykłego grania?”.</li></ul>'],
          ['🟩','Sprawdzenie logowania i launchera jest przed treściami','<p>Sprawdź połączenie i launcher <b>przed</b> częścią merytoryczną, żeby gra pobierała się, kiedy poznajesz grupę.</p><ul><li>Połączenie: jedna minuta — kamera, mikrofon, „Cześć!”.</li><li>Launcher: 2–3 minuty — wyślij linki, pokaż logowanie na swoim ekranie, poproś o „+” na czacie, gdy pojawi się zielony pasek.</li><li>Nie czekaj, aż pobieranie się skończy, i nie zatrzymuj grupy z powodu jednego czy dwóch „−”: wróć do nich w czasie pracy samodzielnej.</li><li>Od lekcji 2: „Otwórzcie launcher i uruchomcie swój świat — niech się ładuje, kiedy rozmawiamy”.</li></ul>'],
          ['⏱️','Chroń ostatnie 7–10 minut','<p>Ostatnie <b>7–10 minut</b> jest na publikację, pokazanie prac i informację zwrotną — i nie oddaje się ich na budowanie.</p><ul><li>Stosuj twarde stopy: ostrzeżenie dwie minuty wcześniej, potem „Stop, ręce z klawiatury. Czas na prezentacje!” i od razu wskaż pierwszego ucznia.</li><li>3 osoby pokazują swoją pracę; grupa daje konkretną informację zwrotną: imię, co się udało, jedna wskazówka.</li><li>Zakończ podsumowaniem, refleksją, zapowiedzią następnej lekcji i zadaniem domowym — tego nigdy się nie skraca.</li></ul>']
        ]}
      ]},
      { id:'launcher', e:'🟩', title:'Kodland Launcher', blocks:[
        { t:'p', html:'Uczniowie otwierają Minecrafta przez <b>Kodland Launcher</b>: pobiera on grę, otwiera świat kursu i to w nim uczniowie tworzą i zakładają skiny. Musisz mieć go zainstalowanego i gotowego na swoim komputerze przed pierwszą lekcją.' },
        { t:'callout', kind:'warn', e:'🔑', html:'<b>Twoje dane logowania:</b> do pobrania launchera nie potrzebujesz żadnych danych logowania. Aby się zalogować, jako tutor potrzebujesz <b>danych logowania do Kodland Sparks</b>, które przekazuje Ci <b>dział operacyjny lub dydaktyczny</b>. Uczniowie logują się tym samym kontem, którego używają na platformie Kodland — nie potrzebują nowego.' },
        { t:'link', href:'https://portfolio.kodland.org/launcher/download#guide', e:'⬇️', title:'Strona pobierania i oficjalny poradnik', small:'portfolio.kodland.org/launcher/download — Windows i Mac' },
        { t:'cards', cols:2, items:[
          ['🪟','Windows 10 / 11','<ol><li>Pobierz instalator.</li><li>Otwórz pobrany plik.</li><li>Na niebieskim ekranie ostrzeżenia kliknij <b>More info → Run anyway</b>, a potem postępuj zgodnie z instalatorem.</li></ol>'],
          ['🍎','macOS 13 lub nowszy','<ol><li>Pobierz plik dla swojego procesora (Apple → <b>About This Mac</b>: M1–M4 = Apple Silicon; w przeciwnym razie Intel).</li><li>Otwórz pobrany plik i przeciągnij <b>Kodland Launcher</b> do <b>Applications</b>. Nie otwieraj go z tego okna.</li><li>Otwórz <b>Terminal</b>, wklej poniższą linię i naciśnij Return. Brak komunikatu jest normalny.</li><li>Otwórz launcher z <b>Applications</b>.</li></ol>']
        ]},
        { t:'p', html:'<code>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</code>' },
        { t:'steps', items:[
          ['Logowanie','Kliknij <b>Sign in</b>. Otworzy się strona w przeglądarce: kliknij <b>Sign in with Kodland</b> i użyj swoich danych logowania do Kodland Sparks (uczniowie używają konta z platformy Kodland). Jeśli przeglądarka się nie otworzy, użyj linku pod przyciskiem, żeby dostać krótki kod (ważny pięć minut).'],
          ['Pobranie gry','Launcher pobiera grę w kilku etapach. Zostaw go uruchomionego.'],
          ['Gra','Gdy pojawi się informacja, że wszystko gotowe, kliknij <b>Play</b>. Pierwsze uruchomienie może potrwać do minuty. Kod świata wpisuje się w zakładce <b>Play</b>.'],
          ['Aktualizacje','Jeśli launcher się nie aktualizuje, zainstaluj najnowszą wersję ze strony pobierania na starą. Światy i skiny zostają na miejscu.']
        ]},
        { t:'acc', open:false, items:[
          ['⬇️','Bezpośrednie linki do pobrania (te same co na karcie lekcji)','<ul><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-win-x64-setup.exe" target="_blank" rel="noopener">Windows</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-arm64.dmg" target="_blank" rel="noopener">Mac — Apple Silicon (M1–M4)</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-x64.dmg" target="_blank" rel="noopener">Mac — Intel</a></li></ul>']
        ]}
      ]},
      { id:'l1', e:'🧯', title:'Gdy launcher ucznia nie działa', blocks:[
        { t:'p', html:'Na lekcji 1 komuś prawie na pewno nie uruchomi się launcher. To nic złego: <b>najpierw daj pozostałym zadanie</b>, potem połącz się z uczniem. Poproś, żeby udostępnił ekran, i prowadź go głosem: „Co teraz widzisz? Kliknij ten przycisk”. Jeśli w ciągu kilku minut się nie uda: „Na razie śledź mój ekran, zaraz wrócę”.' },
        { t:'acc', open:false, items:[
          ['📥','Plik się nie pobiera','Wyślij jeszcze raz link z karty na czat i sprawdź, czy uczeń wybrał plik dla swojego systemu.'],
          ['🍎','Mac nie otwiera launchera','Uruchom linię w Terminalu z pierwszej karty i otwórz launcher ponownie z <b>Applications</b>.'],
          ['🪟','Windows pyta, czy otworzyć plik','<b>More info → Run anyway</b>.'],
          ['🔑','Uczeń nie może się zalogować','To samo logowanie Kodland co na lekcjach — bez nowego konta. Okno logowania otwiera się w przeglądarce i często chowa się za innymi oknami.'],
          ['⏳','Gra długo się ładuje albo pobieranie stoi','Pierwsze pobieranie trwa długo, to normalne. Jeśli pasek stanął: sprawdź internet, zamknij launcher i otwórz go ponownie — pobieranie będzie kontynuowane.'],
          ['🖌️','Launcher w ogóle nie zadziałał','Na lekcji 1 uczeń i tak rysuje i publikuje skina w Sparks (w przeglądarce), więc osiąga główny wynik. W świecie śledzi Twój ekran. Po lekcji pomóż mu uruchomić launcher.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'Jeśli kilku uczniów ma ten sam błąd, pokaż rozwiązanie wszystkim naraz.' }
      ]},
      { id:'req', e:'💻', title:'Wymagania sprzętowe', blocks:[
        { t:'p', html:'Tego potrzebuje uczeń do Minecraft CraftForge. Przydaje się, gdy uczeń ma problem z instalacją lub uruchomieniem gry:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Komputer i system','Komputer stacjonarny lub laptop z <b>Windows 10/11 (64-bit)</b> albo <b>macOS 13 lub nowszym</b>. Mac z procesorem Apple Silicon (M1 lub nowszy) lub Intel — karta lekcji zawiera plik do pobrania dla każdego z nich.'],
          ['🧠','Pamięć i procesor','<b>8 GB RAM</b> z dedykowaną kartą graficzną lub <b>12 GB</b> ze zintegrowaną grafiką. Procesor <b>4-rdzeniowy</b>.'],
          ['🎮','Grafika i dysk','Karta graficzna z obsługą <b>Vulkan 1.3</b> i <b>2 GB</b> pamięci wideo. <b>5 GB</b> wolnego miejsca na dysku.'],
          ['🎧','Połączenie i sprzęt','Stabilne łącze internetowe, które poradzi sobie z rozmowami wideo. Mysz z dwoma przyciskami, klawiatura, słuchawki z mikrofonem i kamera.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Publikowanie w Kodland Sparks (Beginner)', blocks:[
        { t:'p', html:'Publikacja to główny wynik wielu lekcji: uczeń publikuje pracę w Sparks i wkleja link do karty lekcji. W module 1 są dwa sposoby:' },
        { t:'cards', cols:2, items:[
          ['🎨','Skin (lekcja 1)','Na lekcji 1 studio skinów jest w karcie: <b>Publish</b> → nazwa skina → ponownie <b>Publish</b>. Plik skina można też opublikować ze Sparks: <b>Publish project → Minecraft skin</b> → nazwa → <b>Model</b> (Steve lub Alex) → <b>Skin file</b> (PNG 64×64) → <b>Publish</b>.'],
          ['🖼️','Budowla','Zrzut ekranu budowli (F5, F1) → Sparks → <b>Publish project</b> → <b>Image</b> → nazwa → <b>Drawing</b>: prześlij zrzut ekranu → <b>Publish</b>.']
        ]},
        { t:'steps', items:[
          ['Gdzie jest link','Link to adres strony projektu. Uczeń wchodzi w Sparks do <b>My projects</b>, otwiera <b>opublikowany projekt</b> i kopiuje link z <b>paska adresu przeglądarki</b>: <code>portfolio.kodland.org/nickname/…</code>.'],
          ['Wklej go do karty lekcji','Ten link wkleja się do karty lekcji na platformie Kodland (na przykład „Link do mojego skina w Kodland Sparks”).'],
          ['Wybierz widoczność','<b>Public</b> — projekt pojawia się w aktualnościach i w portfolio. <b>Friends only</b> — dla znajomych i nauczycieli. <b>Only me</b> — projekt jest prywatny i nikt inny nie otworzy linku, nawet Ty.'],
          ['Dwa różne kroki','Publikacja w Sparks i wysłanie linku na platformie Kodland to <b>dwa różne kroki</b>. Sprawdź w Backoffice, czy linki naprawdę dotarły.']
        ]},
        { t:'sim', flag:'mcPublish', src:'minecraft-publish/Minecraft_Publish.html?flow=image', e:'⚡', badge:'Symulacja', title:'Opublikuj skina i budowlę w Kodland Sparks', text:'Replika Kodland Sparks i karty lekcji: jako uczeń publikujesz skina, znajdujesz jego link w My projects, wklejasz go do karty na platformie, publikujesz zrzut ekranu budowli jako projekt Image i naprawiasz link, który się nie otwiera. Zajmuje to ok. 5 minut. Sprawdzian modułu odblokuje się, gdy skończysz.' }
      ]},
      { id:'publishdp', e:'📤', title:'Publikowanie paczki danych w Kodland Sparks (Intermediate)', blocks:[
        { t:'p', html:'Sparks to portfolio uczniów: są tam wszystkie projekty z kursu i mieszka tam <b>Sparks AI</b>. Uczniowie wracają do niego na każdej lekcji, żeby publikować i prosić o podpowiedzi. Paczkę danych publikuje się <b>z edytora w launcherze</b>:' },
        { t:'steps', items:[
          ['Publish, obok Save','W launcherze <b>Create → Data packs → Edit</b> przy paczce danych, potem <b>Publish</b>, obok fioletowego przycisku <b>Save</b>.'],
          ['Nazwa i „Who can see it?” → Everyone','W oknie „Publish to your profile” wpisz nazwę i wybierz <b>Everyone</b>: tylko wtedy link otworzy się innym bez logowania na konto ucznia.'],
          ['Copy link','Gdy pojawi się „Published! It is on your profile.”, kliknij <b>Copy link</b>, potem <b>Done</b>, i wklej link do karty lekcji na platformie („Link do mojego prawa w Kodland Sparks”).'],
          ['Zgubiony link?','<b>Open on Sparks</b> (w oknie dialogowym lub na górze edytora) otwiera stronę projektu na profilu ucznia: link to adres w pasku przeglądarki.'],
          ['Dwa różne kroki','Publikacja w Sparks i wysłanie linku na platformie Kodland to <b>dwa różne kroki</b>. Sprawdź w Backoffice, czy linki naprawdę dotarły.'],
          ['Każdą aktualizację publikuje się ponownie','Gdy uczeń dodaje prawo, zapisuje, testuje i ponownie publikuje aktualizację.']
        ]},
        { t:'sim', flag:'mcPublishDp', src:'minecraft-publish/Minecraft_Publish.html?flow=datapack&sim=mcPublishDp', e:'⚡', badge:'Symulacja', title:'Opublikuj paczkę danych w Kodland Sparks', text:'Replika Kodland Launcher i karty lekcji: jako uczeń publikujesz paczkę danych, kopiujesz jej link, wklejasz go do karty na platformie, naprawiasz link, który się nie otwiera, i odnajdujesz link, który nie został skopiowany. Zajmuje to ok. 4 minut. Sprawdzian modułu odblokuje się, gdy skończysz.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Gdy coś pójdzie nie tak', blocks:[
        { t:'acc', open:false, items:[
          ['🎨','Skina nie ma w „Skins”','Sprawdź, czy skin jest opublikowany w Sparks i czy launcher używa tego samego konta. Zamknij i ponownie otwórz sekcję <b>Skins</b>.'],
          ['👕','Uczeń kliknął „Wear” przy otwartej grze','Launcher informuje, że skin pojawi się po ponownym uruchomieniu gry: trzeba wyjść ze świata i dołączyć ponownie przyciskiem <b>Play</b> — to uruchamia grę od nowa.'],
          ['📍','Teleport nie zadziałał','Poproś ucznia o udostępnienie ekranu: zwykle polecenie jest niepełne albo brakuje minusa przed ostatnią liczbą.'],
          ['⛶','Uczeń nie może wyjść ze studia na pełnym ekranie','Kliknij <b>Collapse</b> na górze studia — <b>Esc</b> w nim nie działa.'],
          ['🔒','Link ucznia się nie otwiera','Projekt został prawdopodobnie zapisany jako <b>Only me</b> (ma oznaczenie <b>Private project</b>). Poproś ucznia: <b>My projects → otwórz projekt → Edit → Public → Publish</b>. Link pozostaje ten sam.'],
          ['🖼️','Uczeń nie może znaleźć zrzutu ekranu','Uczniowie robią go skrótem <b>Win + Print Screen</b> w Windows (zapisuje się w <b>Obrazy → Zrzuty ekranu</b>) i <b>Cmd + Shift + 4</b> na Macu (zapisuje się na pulpicie). Jeśli teraz go nie znajdzie, uczeń dołączy go później w domu.'],
          ['💾','Paczka danych się nie zapisuje','Sprawdź, czy wypełnione są wszystkie trzy części formularza: gdzie powstaje przedmiot, co wchodzi i co wychodzi.'],
          ['🔁','Prawo nie działa po edycji','Kliknij <b>Save</b>, wyjdź ze świata i wejdź ponownie — prawa są stosowane przy wejściu.'],
          ['🧩','Receptura nie działa','Przedmioty nie są ułożone tak jak w formularzu albo uczeń tworzy w ekwipunku zamiast na stole rzemieślniczym.'],
          ['🔗','Uczeń zamknął okno, nie kopiując linku','Kliknij <b>Open on Sparks</b> na górze edytora paczki danych: otworzy się strona projektu, a link to adres w pasku przeglądarki.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Techniczna lista kontrolna na każdą lekcję', blocks:[
        { t:'check', title:'✅ Moja techniczna lista kontrolna', groups:[
          { h:'☑️ Przed lekcją', items:['Przeczytałem wszystkie Teacher Notes lekcji i, w przypadku lekcji 1, obejrzałem film przygotowawczy.','Mój launcher jest zainstalowany i zalogowany, a ścieżkę lekcji przeszedłem sam.','Przed lekcją 1 wysłałem linki do launchera na czat grupy.'] },
          { h:'🎬 W trakcie lekcji', items:['Sprawdziłem połączenie i launcher przed treściami.','W pierwszych minutach pokazałem gotowy wynik i cel lekcji.'] },
          { h:'📤 Na koniec lekcji', items:['Oszczędziłem ostatnie 7–10 minut na publikację, pokazanie prac i informację zwrotną.','Wszyscy wysłali w karcie lekcji link do opublikowanego projektu.','Otworzyłem kilka linków, żeby sprawdzić, czy działają.'] }
        ]}
      ]},
      { id:'videos', e:'🎬', title:'Przykładowe lekcje z doskonałym autoQA', blocks:[
        { t:'p', html:'Zobacz, jak wygląda lekcja z doskonałym autoQA: dynamika zajęć, struktura i sposób, w jaki tutor prowadzi grupę.' },
        { t:'videos', items:[
  ['Moduł 1 · Lekcja 1', '1neDnsAk5Era0jVCxXms211UXHhA83i6r'],
  ['Moduł 1 · Lekcja 2', '1xcXMlfFkbk_gLURtrV0kfiBTCyELumSe'],
  ['Moduł 1 · Lekcja 3', '1daYtRqaDRKCJBk1PXe-1NNBMg-AOzplQ']
] },
        { t:'callout', kind:'warn', e:'🔄', html:'<b>Uwaga:</b> treść tych lekcji może się różnić od tej, którą zobaczysz w Backoffice, ponieważ lekcje są stale aktualizowane. Dynamika zajęć, struktura i jakość powinny jednak pozostać takie same — to dobre przykłady, z których możesz czerpać inspirację na swoich zajęciach.' }
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ----------------
   The Skills module has no separate check: its four blocks end with their own practice checks (COURSE.skills). */
COURSE.quiz = {
  beg:[
    { q:'Dla kogo jest Minecraft CraftForge Beginner i ile trwa każda lekcja?',
      o:['Dla uczniów w wieku 8–9 lat; lekcje grupowe po 60 minut.','Dla uczniów w wieku 10–12 lat; lekcje po 90 minut.','Dla uczniów w wieku 13–17 lat; lekcje po 90 minut.'],
      a:0, e:'Beginner jest dla uczniów w wieku 8–9 lat: 40 lekcji po 60 minut w grupie.' },
    { q:'W jakim języku programowania uczniowie programują robota Asystenta?',
      o:['Python.','Bloki Scratch.','Lua.'],
      a:2, e:'Robota Asystenta programuje się w Lua: polecenia, argumenty, zmienne, pętle, warunki i funkcje.' },
    { q:'Jak zaczyna się lekcja?',
      o:['Od teorii o redstone, zanim ktokolwiek wejdzie do świata.','Od pokazania gotowego wyniku, powiedzenia celu i wyjaśnienia, czym tworzenie różni się od zwykłego grania.','Uczniowie od razu zaczynają budować, nie widząc przykładu.'],
      a:1, e:'Najpierw wynik: uczniowie widzą, dokąd zmierzają i czym tworzenie różni się od grania.' },
    { q:'Z czym uczeń kończy kurs?',
      o:['Z pisemnym egzaminem końcowym.','Z ponad dziewięcioma projektami w portfolio Kodland Sparks i projektem końcowym — własną krainą, zaprezentowaną grupie.','Tylko z domem z lekcji 1.'],
      a:1, e:'Ponad dziewięć projektów w portfolio i projekt końcowy, w którym budowle, mechanizmy i programy działają razem.' },
    { q:'Jaka jest rola Sparks AI na lekcjach?',
      o:['Buduje projekt za ucznia.','Podsuwa pomysły i opinie; uczeń decyduje, co weźmie.','Ocenia lekcję zamiast tutora.'],
      a:1, e:'Sparks podpowiada, uczeń decyduje — zwykle jedno zapytanie na lekcję.' }
  ],
  int:[
    { q:'Dla kogo jest Minecraft CraftForge Intermediate i ile trwa każda lekcja?',
      o:['Dla uczniów w wieku 8–9 lat; lekcje po 60 minut.','Dla uczniów w wieku 10–12 lat; lekcje grupowe po 90 minut.','Dla uczniów w wieku 13–17 lat; lekcje po 60 minut.'],
      a:1, e:'Intermediate jest dla uczniów w wieku 10–12 lat: 40 lekcji po 90 minut w grupie.' },
    { q:'Jakiego języka programowania uczniowie używają na kursie?',
      o:['Python.','Lua.','JavaScript.'],
      a:0, e:'Uczniowie piszą programy w Pythonie, które budują w świecie Minecrafta.' },
    { q:'Czym jest paczka danych na tym kursie?',
      o:['Plikiem ze zrzutami ekranu budowli ucznia.','Zestawem praw świata (receptury, dropy, polecenia…), które Minecraft wykonuje za każdym razem, gdy wchodzisz do świata.','Paczką gotowych światów do pobrania.'],
      a:1, e:'Paczka danych to zestaw praw: świat wykonuje je za każdym razem, gdy uczeń do niego wchodzi.' },
    { q:'Z czym uczeń kończy kurs?',
      o:['Z pisemnym egzaminem końcowym.','Z ponad dziewięcioma projektami w portfolio Kodland Sparks i autorskim projektem końcowym zaprezentowanym na Demo Day.','Tylko z paczką danych z lekcji 1.'],
      a:1, e:'Ponad dziewięć projektów w portfolio i autorski projekt, doprowadzony od pomysłu do Demo Day.' },
    { q:'Jak uczniowie powinni korzystać ze Sparks AI?',
      o:['Kopiować jego odpowiedzi bez zmian.','Oceniać jego propozycje i decydować, co wziąć.','Nigdy z niego nie korzystać.'],
      a:1, e:'Sparks podsuwa pomysły i scenariusze testów; uczeń je ocenia zamiast kopiować.' }
  ],
  skills:[],
  tech:[
    { q:'Kiedy sprawdzasz połączenie i launcher?',
      o:['Na początku lekcji, przed treściami, żeby gra pobierała się, kiedy poznajesz grupę.','W połowie lekcji, kiedy uczniowie potrzebują Minecrafta.','Na końcu, żeby nie zabierać czasu lekcji.'],
      a:0, e:'Przed treściami: gra pobiera się, kiedy poznajesz grupę.' },
    { q:'Jakich danych logowania używasz jako tutor, żeby zalogować się do Kodland Launcher?',
      o:['Nowego konta, które zakładasz sam.','Tych samych danych co w Kodland Sparks, przekazanych przez dział operacyjny lub dydaktyczny.','Konta ucznia.'],
      a:1, e:'Do pobrania launchera nie potrzeba żadnych danych logowania. Aby się zalogować, używasz swoich danych logowania do Kodland Sparks, przekazanych przez dział operacyjny lub dydaktyczny.' },
    { q:'Gdzie uczeń znajduje link, który wysyła w karcie lekcji?',
      o:['W komentarzu pod projektem.','W Sparks: My projects → otwórz opublikowany projekt → skopiuj adres z paska przeglądarki.','W launcherze, w zakładce Play.'],
      a:1, e:'Link to adres strony projektu: My projects → opublikowany projekt → pasek przeglądarki.' },
    { q:'Na co jest ostatnie 7–10 minut lekcji?',
      o:['Na dodatkowy czas budowania.','Na publikację, pokazanie prac i informację zwrotną — plus podsumowanie i zadanie domowe.','Na swobodną grę.'],
      a:1, e:'Chroń ostatnie minuty: publikacja, prezentacja z informacją zwrotną i podsumowanie.' },
    { ctx:'Na lekcji 1 jednemu uczniowi nie uruchamia się launcher, a reszta grupy jest gotowa.',
      q:'Co robisz?',
      o:['Przerywasz lekcję, dopóki launcher nie zadziała.','Prowadzisz grupę dalej — skina rysuje się w Sparks, w przeglądarce — i pomagasz uczniowi w czasie pracy samodzielnej.','Mówisz uczniowi, żeby spróbował w domu i opuścił lekcję.'],
      a:1, e:'Jeden problem nie powinien zatrzymywać grupy: uczeń i tak rysuje i publikuje skina, a Ty naprawiasz launcher w czasie pracy samodzielnej.' },
    { q:'Skąd uczeń bierze link do opublikowanej paczki danych?',
      o:['Z komentarza w launcherze.','Z okna „Publish to your profile”: Copy link (albo Open on Sparks i skopiowanie adresu z paska przeglądarki).','Z zakładki Play w launcherze.'],
      a:1, e:'Copy link zaraz po publikacji; jeśli link zginął, Open on Sparks pokazuje stronę projektu, a jej adres to link.' },
    { ctx:'Uczeń opublikował paczkę danych, ale link Ci się nie otwiera.',
      q:'Jaka jest najbardziej prawdopodobna przyczyna i jak to naprawić?',
      o:['W „Who can see it?” nie ustawiono Everyone: opublikuj ponownie z Everyone.','Paczka danych jest uszkodzona: utwórz nową od zera.','Linki otwierają się dopiero następnego dnia.'],
      a:0, e:'Tylko z Everyone link otwiera się bez logowania. Ponowna publikacja z Everyone rozwiązuje problem.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Ostatni krok: wróć do LMS i wykonaj test DST',
  html: `<p>Prawie koniec! Wróć na stronę szkolenia w LMS, z której otworzyłeś to szkolenie. Test DST znajdziesz tuż pod szkoleniem.</p>
    <p>👉 <b>Aby szkolenie zostało uznane za ukończone, musisz wykonać test DST i go zaliczyć.</b> Jeśli nie ukończysz testu DST, szkolenie pozostanie nieukończone i może wygasnąć.</p>
    <p>Minimalny wynik zaliczający to <b>80%</b>.</p>
    <p>Powodzenia! ❤️</p>`,
  nexts: [
    ['📒', '<b>Przed każdą lekcją:</b> przeczytaj Teacher Notes w Backoffice i przejdź ścieżkę lekcji w launcherze.'],
    ['🟩', '<b>Pierwsze minuty:</b> sprawdzenie połączenia i launchera, potem gotowy wynik i cel.'],
    ['🔗', '<b>Link:</b> My projects → opublikowany projekt → adres w pasku przeglądarki.'],
    ['⏱️', '<b>Ostatnie 7–10 minut:</b> publikacja, pokazanie prac i informacja zwrotna.']
  ]
};

/* ---------------- Skills for the course ----------------
   Four blocks (Minecraft world, programming logic, Python practice, data packs). Texts come from the proofread
   CraftForge Tutor Training. In each quiz 'c' = number of the correct option (0 = first). Never translate code. */
COURSE.skills = {
  mod: 'skills',
  ui: {
    step_self: 'Przejdź krok po kroku',
    prev: 'Wstecz',
    next: 'Następny krok',
    stepn: 'Krok {s} z {n}',
    check_intro: 'Odpowiedz na wszystkie pytania — potrzebujesz 70%, aby odblokować kolejny krok. Liczy się pierwsza odpowiedź na każde pytanie.',
    correct: 'Dobrze!',
    notquite: 'Nie do końca.',
    score: 'Wynik: {p}% — wymagane 70%',
    retry: 'Spróbuj ponownie',
    unlocked: 'Kolejny krok został odblokowany.',
    review_msg: 'Powtórz sekcje powyżej i spróbuj ponownie.',
    nextBlock: 'Następny blok →',
    lockedBlock: '🔒 Zalicz poprzedni blok, żeby odblokować ten.',
    ctaTitle: 'Zalicz cztery bloki',
    ctaText: 'Każdy blok kończy się krótkim sprawdzianem: w każdym potrzebujesz 70%. Gdy zaliczysz wszystkie cztery, moduł zostanie ukończony.',
    progress: 'Zaliczone bloki: {n} z {t}',
    ctaDone: 'Moduł ukończony: {p}%',
    goNext: 'Przejdź do modułu {n} →',
    practice: 'Sprawdzian bloku',
    blockOf: 'Blok {n} z {t}',
    passedBlock: 'Blok zaliczony: {p}%'
  },
  blocks: [
    {
      id: 'world',
      ic: '🌍',
      slot: 'Świat',
      title: 'Zanurzenie w Minecrafcie',
      sections: [
        {
          t: 'Podstawy Minecrafta dla tutorów (umiejętności techniczne)',
          html: '<div class="card class"><p>Minecraft to świat zbudowany z sześcianów, czyli <strong>bloków</strong>. Można je niszczyć, zbierać i stawiać, żeby zbudować cokolwiek. Dzieci znają ten świat bardzo dobrze — Ty potrzebujesz tyle, żeby się poruszać, budować i nadążać za tym, co robią.</p></div><div class="tbl"><table><tbody><tr><th>Klawisz / akcja</th><th>Co robi</th></tr><tr><td><code>W A S D</code></td><td>Chodzenie do przodu, w lewo, do tyłu, w prawo</td></tr><tr><td>Mysz</td><td>Rozglądanie się</td></tr><tr><td><code>Spacja</code></td><td>Skok. W trybie kreatywnym naciśnij dwa razy, żeby latać; przytrzymaj, żeby wznosić się</td></tr><tr><td><code>Shift</code></td><td>Skradanie: nie spadniesz z krawędzi. W locie — opadanie</td></tr><tr><td>Lewy przycisk myszy</td><td>Niszczenie bloku / uderzenie</td></tr><tr><td>Prawy przycisk myszy</td><td>Stawianie bloku / użycie (otwarcie drzwi, wciśnięcie przycisku, przełączenie dźwigni)</td></tr><tr><td><code>1</code>–<code>9</code> lub kółko myszy</td><td>Wybór przedmiotu z paska szybkiego dostępu (na dole)</td></tr><tr><td><code>E</code></td><td>Otwarcie ekwipunku</td></tr><tr><td><code>T</code> lub <code>/</code></td><td>Otwarcie czatu / wpisywanie komendy</td></tr><tr><td><code>F3</code></td><td>Współrzędne i informacje techniczne</td></tr><tr><td><code>F5</code></td><td>Zmiana widoku kamery</td></tr><tr><td><code>Esc</code></td><td>Menu pauzy i ustawienia</td></tr></tbody></table></div><div class="cols"><div class="card class"><h4>Tryby gry</h4><ul><li><strong>Kreatywny</strong>: nieograniczone bloki, latanie, nic Ci nie grozi — najlepszy do budowania.</li><li><strong>Przetrwanie</strong>: zbierasz surowce, masz zdrowie i głód, a nocą atakują potwory.</li></ul></div><div class="card class"><h4>Słowa, których używają dzieci</h4><ul><li><strong>Mob</strong>: każde stworzenie (krowa, zombie, Creeper).</li><li><strong>Spawn</strong>: miejsce, w którym się pojawiasz.</li><li><strong>Biom</strong>: rodzaj terenu (pustynia, las, śnieg).</li><li><strong>Skin</strong>: wygląd postaci. Steve i Alex to domyślne postacie.</li></ul></div></div>'
        },
        {
          t: '1.1 · Kultura, którą przynoszą dzieci',
          html: '<div class="card why"><p>Minecraft ma własne legendy, memy, straszne historie i wewnętrzne żarty, a dzieci dobrze je znają. Nie musisz być ekspertem, ale musisz być „na bieżąco”. Najszybciej pomoże film <strong>„Minecraft Iceberg”</strong>: ukryte fakty, mity, wycięte treści i legendy — od najbardziej znanych na górze po najbardziej niszowe na dole.</p></div><div class="vid"><iframe src="https://www.youtube.com/embed/AChmq4QfbK0" title="Minecraft Iceberg video" loading="lazy" allowfullscreen=""></iframe></div><div class="tbl"><table><tbody><tr><th>Nazwa</th><th>Co to jest</th></tr><tr><td><strong>Herobrine</strong></td><td>Najsłynniejsza legenda Minecrafta: postać o białych oczach, która rzekomo nawiedza światy. Nigdy nie była w grze — przez lata notatki do aktualizacji Mojang żartobliwie podawały „Usunięto Herobrine’a”.</td></tr><tr><td><strong>Entity 303</strong></td><td>Kolejna fanowska legenda grozy o mściwej istocie w stylu hakera. Dzieci uwielbiają o nią pytać — sama znajomość nazwy wystarczy, żeby wywołać uśmiech.</td></tr><tr><td><strong>Notch</strong></td><td>Markus Persson, pierwotny twórca Minecrafta.</td></tr><tr><td><strong>Pochodzenie Creepera</strong></td><td>Znana historia: zaczął jako nieudany model świni z zamienioną wysokością i długością.</td></tr><tr><td><strong>Dalekie Ziemie (Far Lands)</strong></td><td>Błąd terenu w starych wersjach Java, miliony bloków od punktu odrodzenia, gdzie świat rozpadał się na dziwne ściany.</td></tr><tr><td><strong>Steve i Alex</strong></td><td>Domyślne postacie gracza.</td></tr></tbody></table></div><div class="card class"><p><strong>Na zajęciach:</strong> szybkie „Tak, wiem, kim jest Entity 303 😉” buduje zaufanie w kilka sekund. Potem wróć z rozmową do budowli.</p></div>'
        },
        {
          t: '1.2 · Współrzędne: X, Y i Z',
          html: '<div class="tbl"><table><tbody><tr><th>Oś</th><th>Kierunek</th><th>Zmienia się, gdy gracz…</th></tr><tr><td><strong>X</strong></td><td>Wschód ↔ Zachód</td><td>idzie na wschód lub zachód</td></tr><tr><td><strong>Y</strong></td><td>Góra ↕ Dół (wysokość)</td><td>skacze, wspina się, spada, kopie w dół, buduje wieżę</td></tr><tr><td><strong>Z</strong></td><td>Południe ↔ Północ</td><td>idzie na północ lub południe</td></tr></tbody></table></div><div class="card "><p>X i Z to pozycja na ziemi; <strong>Y to wysokość</strong>. Każdy ruch w pionie — nawet jeden skok — zmienia Y, dopóki trwa. Aby zobaczyć współrzędne: <code>F3</code> w Java Edition albo włącz „Pokaż współrzędne” w ustawieniach świata w Bedrock. Teleportacja używa tej samej kolejności: <code>/tp X Y Z</code>.</p></div><div class="card tip"><p><strong>Sposób na zapamiętanie:</strong> Y to ta oś, która w szkolnych wykresach idzie „w górę” — w Minecrafcie też idzie w górę.</p></div>'
        },
        {
          t: '1.3 · Moby, które każdy tutor powinien rozpoznawać',
          html: '<div class="tbl"><table><tbody><tr><th>Mob</th><th>Co warto wiedzieć</th></tr><tr><td><strong>Creeper</strong></td><td>Podchodzi bezgłośnie i <strong>syczy, gdy zapala się lont — zaraz wybuchnie</strong> (po około 1,5 sekundy). Ucieczka poza jego zasięg może przerwać lont. Jeśli w pobliżu uderzy piorun, staje się <strong>naładowanym Creeperem</strong> z dużo większym wybuchem.</td></tr><tr><td><strong>Zombie / Szkielet</strong></td><td>Pojawiają się w ciemności; płoną w świetle dnia, chyba że są w cieniu lub mają hełm. Szkielety strzelają z łuku z dystansu.</td></tr><tr><td><strong>Pająk</strong></td><td>Wspina się po ścianach — drzewo ani filar cię nie ochronią. W jasnym świetle neutralny, w ciemności wrogi.</td></tr><tr><td><strong>Enderman</strong></td><td>Neutralny, dopóki nie spojrzysz mu w twarz. Wtedy teleportuje się i atakuje.</td></tr><tr><td><strong>Phantom</strong></td><td>Pojawia się na niebie, jeśli gracz nie spał przez trzy lub więcej dni w grze.</td></tr></tbody></table></div>'
        },
        {
          t: '1.4 · Przetrwać pierwszą noc',
          html: '<div class="card "><p>Wrogie moby pojawiają się w <strong>ciemności</strong>. Pierwszej nocy w trybie Przetrwania, bez łóżka i sprzętu, najbezpieczniejszy plan jest prosty: <strong>zbudować małe zamknięte schronienie i oświetlić je od środka</strong>. Ściany trzymają moby na zewnątrz; światło w środku sprawia, że nie pojawią się obok ciebie. Dobrze sprawdza się wkopanie w zbocze i zablokowanie wejścia.</p></div><div class="tbl"><table><tbody><tr><th>Kuszący pomysł</th><th>Dlaczego to nie działa</th></tr><tr><td>Trzymanie pochodni w ręce</td><td>W standardowej grze pochodnia w ręce nie oświetla terenu i nie powstrzymuje mobów przed pojawianiem się wokół ciebie.</td></tr><tr><td>Czekanie na szczycie wysokiego drzewa</td><td>Pająki się wspinają, szkielety strzelają z dołu, a upadek boli.</td></tr><tr><td>Zwiedzanie i unikanie mobów</td><td>Ciemność to właśnie miejsce, gdzie się pojawiają — i jest ich coraz więcej w miarę upływu nocy.</td></tr></tbody></table></div><div class="card tip"><p><strong>Łóżko</strong> pozwala przespać noc i ustawia twój osobisty punkt odrodzenia. Przyda się w 1.6.</p></div>'
        },
        {
          t: '1.5 · Narzędzia, poziomy i który kilof co wydobywa',
          html: '<div class="card "><p>Kilofy idą w górę poziomami: <strong>Drewno → Kamień → Żelazo → Diament → Netheryt</strong>. <strong>Złoto to pułapka:</strong> kopie bardzo szybko, ale jego poziom jest tak niski jak drewna. Jeśli poziom jest za niski, blok i tak się rozbije — ale nic z niego nie wypadnie.</p></div><div class="tbl"><table><tbody><tr><th>Kilof</th><th>Najniższy poziom, który wydobędzie…</th></tr><tr><td>Drewno / Złoto</td><td>Kamień, rudę węgla</td></tr><tr><td>Kamień</td><td>Rudę żelaza, miedzi, lazurytu</td></tr><tr><td>Żelazo</td><td><strong>Rudę diamentu</strong>, złota, redstone’u, szmaragdu</td></tr><tr><td>Diament</td><td>Obsydian, starożytne szczątki</td></tr></tbody></table></div><div class="card class"><p><strong>Na zajęciach:</strong> „Mój kilof rozbił diament i nic nie wypadło!” to prawdziwe pytanie ucznia. Teraz znasz odpowiedź: poziom był za niski.</p></div>'
        },
        {
          t: '1.6 · Punkty odrodzenia, łóżka i kompasy',
          html: '<div class="cols"><div class="card "><h4>Punkt odrodzenia świata</h4><p>Miejsce, w którym każdy gracz pojawia się po raz pierwszy w nowym świecie. Nigdy się nie przesuwa, chyba że ktoś zmieni je komendą.</p></div><div class="card "><h4>Osobisty punkt odrodzenia</h4><p>Ustawiany przez sen w łóżku (lub kotwicę odrodzenia w Netherze). Tu wracasz po śmierci.</p></div></div><div class="tbl"><table><tbody><tr><th>Przedmiot</th><th>Wskazuje na</th></tr><tr><td><strong>Zwykły kompas</strong></td><td><strong>Punkt odrodzenia świata</strong> — nie łóżko, nie północ. W Netherze i w Endzie kręci się losowo.</td></tr><tr><td>Kompas powrotu</td><td>Miejsce, w którym gracz ostatnio zginął.</td></tr><tr><td>Kompas z magnetytem</td><td>Magnetyt, z którym został połączony. Tak gracze robią kompas wskazujący ich bazę.</td></tr></tbody></table></div><div class="card warn"><p><strong>Częsta pomyłka:</strong> nowe łóżko zmienia miejsce, w którym się <em>odradzasz</em>, ale zwykły kompas dalej wskazuje pierwotny punkt odrodzenia świata.</p></div>'
        }
      ],
      quiz: [
        {
          p: 'Gracz kopie prosto w dół na 10 bloków. Która współrzędna się zmienia?',
          o: ['X', 'Y', 'Z', 'Żadna'],
          c: 1,
          f: 'Y to wysokość. Kopanie w dół, skakanie, wspinanie się i budowanie w górę zmieniają Y.'
        },
        {
          p: 'Który kilof najniższego poziomu wydobędzie rudę żelaza tak, żeby naprawdę ją zdobyć?',
          o: ['Drewniany', 'Kamienny', 'Złoty', 'Każdy kilof się nada'],
          c: 1,
          f: 'Kamień wystarczy do żelaza. Złoto jest szybkie, ale ma tak samo niski poziom jak drewno.'
        },
        {
          p: 'Creeper zaczyna syczeć tuż za graczem. Jaka jest najlepsza reakcja?',
          o: ['Zaatakować go od razu — syk oznacza, że jest słaby', 'Stać w miejscu, żeby stracił zainteresowanie', 'Uciec sprintem — lont się pali, a wyjście poza zasięg może go przerwać', 'Postawić obok niego pochodnię'],
          c: 2,
          f: 'Syk oznacza, że lont się pali i zaraz nastąpi wybuch. Wyjście poza zasięg to właściwy ruch.'
        },
        {
          p: 'Dlaczego schronienie na pierwszą noc potrzebuje światła w środku, a nie tylko ścian?',
          o: ['Światło wzmacnia ściany', 'Wrogie moby pojawiają się w ciemności — światło sprawia, że nie pojawią się w środku razem z tobą', 'Pochodnie leczą gracza', 'Moby przyciąga światło na zewnątrz'],
          c: 1,
          f: 'Ściany trzymają moby na zewnątrz; światło nie pozwala nowym mobom pojawić się w ciemnej przestrzeni razem z tobą.'
        },
        {
          p: 'Gracz chce kompas, który zawsze wskazuje jego bazę. Czego potrzebuje?',
          o: ['Przespać się w łóżku w bazie — kompas za tym pójdzie', 'Użyć kompasu na magnetycie postawionym w bazie', 'Zwykły kompas już wskazuje ostatnie łóżko', 'Kompasu powrotu'],
          c: 1,
          f: 'Zwykły kompas wskazuje punkt odrodzenia świata. Połączenie go z magnetytem sprawia, że wskazuje ten magnetyt.'
        },
        {
          p: 'Uczeń mówi: „Herobrine jest w moim świecie!”. Kim jest Herobrine?',
          o: ['Bossem dodanym w aktualizacji Netheru', 'Fanowską legendą, której nigdy nie było w grze — Mojang żartował nawet „Usunięto Herobrine’a” w notatkach do aktualizacji', 'Twórcą, który zaprojektował Creepera', 'Inną nazwą Endermana'],
          c: 1,
          f: 'Herobrine to legenda. Znajomość tego żartu pomaga w sekundę złapać kontakt z uczniami.'
        },
        {
          p: 'Jak zwykły Creeper staje się naładowanym Creeperem?',
          o: ['Wybuchając dwa razy', 'Gdy w pobliżu uderzy piorun', 'Gdy jest w wodzie', 'Gdy gracz nada mu imię'],
          c: 1,
          f: 'Pobliskie uderzenie pioruna go ładuje, przez co jego wybuch jest dużo większy.'
        }
      ]
    },
    {
      id: 'logic',
      ic: '🧠',
      slot: 'Logika',
      title: 'Logika programowania',
      sections: [
        {
          t: '2.1 · Logika programowania',
          html: '<div class="card why"><p>Programowanie to nie tylko znajomość składni języka programowania. Przede wszystkim to umiejętność myślenia sekwencyjnego, identyfikowania wzorców, dzielenia zadania na kroki i rozumienia, dlaczego algorytm działa w taki, a nie inny sposób.</p><p>Podczas zajęć uczniowie będą nieustannie zadawać pytania, popełniać błędy, proponować nieoczekiwane rozwiązania, a czasem pisać kod w zupełnie inny sposób, niż zamierzano. Aby im pomóc, ważne jest nie tylko znać poprawną komendę, ale rozumieć logikę stojącą za programem.</p><p>W tym bloku nie musisz znać konkretnego języka programowania. Tutaj zobaczymy, jak swobodnie pracujesz z algorytmami, warunkami, pętlami i sekwencjami działań.</p></div><div class="card "><h4>Metoda tabeli śledzenia</h4><ol><li>Zapisz <strong>każdą zmienną</strong> jako kolumnę, z wartością początkową.</li><li>Wykonuj <strong>jeden krok naraz</strong>, w kolejności, w jakiej zapisano reguły.</li><li>Każdy warunek sprawdzasz na <strong>bieżącej</strong> wartości — tej, którą właśnie zapisałeś, a nie starej.</li><li>Licz powtórzenia. „Powtórz 4 razy” to cztery wiersze, nie trzy i nie pięć.</li></ol></div><div class="tracer" data-tr="robot"></div>'
        },
        {
          t: '2.2 · Zamiana reguł na warunki',
          html: '<div class="card "><p>Pytania z regułami są najłatwiejsze, gdy wypiszesz <strong>każdy możliwy przypadek</strong> i sprawdzisz każdy z nich. Przykładowy zestaw reguł:</p><ul><li>Aby wejść do sali z portalem, gracz potrzebuje <strong>krzesiwa lub ładunku ognia</strong>.</li><li>Jeśli ma <strong>oba</strong>, musi też nosić złotą zbroję.</li><li>Jeśli ma <strong>tylko jedno</strong>, zbroja nie jest potrzebna.</li></ul></div><div class="tbl"><table><tbody><tr><th>Krzesiwo</th><th>Ładunek ognia</th><th>Złota zbroja</th><th>Może wejść?</th></tr><tr><td>✔</td><td>✘</td><td>—</td><td>Tak (tylko jeden przedmiot, bez dodatkowej reguły)</td></tr><tr><td>✘</td><td>✔</td><td>—</td><td>Tak</td></tr><tr><td>✔</td><td>✔</td><td>✔</td><td>Tak</td></tr><tr><td>✔</td><td>✔</td><td>✘</td><td><strong>Nie</strong> — przypadek „oba” dodaje wymaganie</td></tr><tr><td>✘</td><td>✘</td><td>—</td><td><strong>Nie</strong> — pierwsza reguła nie jest spełniona</td></tr></tbody></table></div><div class="card warn"><p><strong>Uważaj na szczegóły, które nie mają znaczenia.</strong> Jeśli reguły mówią, że gracza z jednym przedmiotem nie dotyczy żadne dodatkowe wymaganie, to czy ma zbroję albo złe hasło — w jego przypadku nie ma znaczenia. Pytania często dodają takie szczegóły, by sprawdzić, czy stosujesz reguły dokładnie.</p></div>'
        },
        {
          t: '2.3 · Pętle z warunkiem w środku',
          html: '<div class="card "><p>Gdy każda runda ma dwa kroki — „zmień wartość, potem sprawdź warunek” — sprawdzenie używa wartości <strong>po</strong> zmianie. A gdy próg zostanie przekroczony, warunek zwykle pozostaje prawdziwy we wszystkich kolejnych rundach.</p></div><div class="tracer" data-tr="coins"></div><div class="card warn"><h4>Dwa klasyczne błędy</h4><ul><li>Sprawdzanie warunku na wartości <em>sprzed</em> zmiany.</li><li>Zastosowanie warunku tylko raz, jakby był poza pętlą.</li></ul></div>'
        },
        {
          t: '2.4 · Liczniki, flagi i reguły zatrzymania',
          html: '<div class="card "><p><strong>Licznik</strong> liczy, ile razy coś się stało. <strong>Flaga</strong> (wł./wył., True/False) pamięta, że coś już się wydarzyło. <strong>Reguła zatrzymania</strong> kończy algorytm wcześniej. Gdy kilka reguł dotyczy tego samego elementu, stosuj je w zapisanej kolejności — flagę włączoną przez jedną regułę może wykorzystać następna reguła <strong>w tym samym kroku</strong>.</p></div><div class="tracer" data-tr="flag"></div><div class="card tip"><p>Jeśli wśród odpowiedzi jest „algorytm się nie zatrzyma”, potraktuj ją poważnie: prześledź do ostatniego elementu, zanim wybierzesz.</p></div>'
        },
        {
          t: '2.5 · Czy algorytm jest naprawdę poprawny?',
          html: '<div class="card "><p>Aby pokazać, że algorytm jest błędny, wystarczy <strong>jeden kontrprzykład</strong>: dane wejściowe, dla których daje złą odpowiedź. Testuj przypadki, o których się zapomina: dopasowanie, które <em>nie</em> dotyczy pierwszego elementu, ostatni element, element porównany sam ze sobą, wszystkie elementy jednakowe, lista jednoelementowa.</p></div><div class="card "><h4>Przykład</h4><p>Zadanie: ustal, czy wszystkie liczby na liście są różne. Proponowany algorytm: „porównuj każdą liczbę tylko z następną; jeśli dwie są równe, odpowiedz Nie”.</p><p>Kontrprzykład: <code>3, 5, 3</code>. Sąsiedzi to 3–5 i 5–3, nigdy równi, więc odpowiada „wszystkie różne” — błędnie. Algorytm nigdy nie porównuje liczb, które są daleko od siebie.</p><p><strong>Poprawka:</strong> porównaj <em>każdą</em> liczbę z <em>każdą</em> liczbą po niej. Dwie pętle: zewnętrzna bierze po kolei każdą liczbę, nie tylko pierwszą; wewnętrzna porównuje ją z resztą.</p></div><div class="card class"><p><strong>Na zajęciach:</strong> gdy program ucznia „działa”, poproś o dane, które mogłyby go zepsuć. Szukanie kontrprzykładów to sposób myślenia programistów.</p></div>'
        }
      ],
      quiz: [
        {
          p: 'Robot startuje na polu 1 i 4 razy stosuje regułę: jeśli numer pola jest nieparzysty, idzie 3 do przodu; jeśli parzysty, 1 do tyłu. Gdzie kończy?',
          o: ['4', '5', '6', '7'],
          c: 1,
          f: '1 → 4 → 3 → 6 → 5. Każde sprawdzenie dotyczy pola, na które właśnie trafił.'
        },
        {
          p: 'Zasady areny: gracz potrzebuje miecza LUB tarczy. Jeśli ma oba, musi też mieć poziom 5 lub wyższy. Z jednym przedmiotem nie ma wymagań co do poziomu. Kto NIE może wejść?',
          o: ['Tylko miecz, poziom 1', 'Tylko tarcza, poziom 3', 'Miecz i tarcza, poziom 7', 'Miecz i tarcza, poziom 2'],
          c: 3,
          f: 'Tylko przypadek „oba” ma dodatkową regułę poziomu, a poziom 2 jej nie spełnia. Poziom gracza z jednym przedmiotem nie ma znaczenia.'
        },
        {
          p: 'Wynik zaczyna się od 1. Powtórz 3 razy: pomnóż wynik przez 2; potem, jeśli wynik jest większy niż 5, odejmij 3. Jaki jest wynik końcowy?',
          o: ['2', '5', '8', '13'],
          c: 1,
          f: '1 → 2 (nie > 5). 2 → 4 (nie > 5). 4 → 8 → 8 − 3 = 5.'
        },
        {
          p: 'Liczby: 3, 8, 5, 10, 1. licznik = 0, alarm = wył. Dla każdej liczby, w tej kolejności: jeśli liczba jest większa niż 4, dodaj 1 do licznika; gdy licznik osiągnie 2, włącz alarm; jeśli alarm jest włączony, a liczba nieparzysta — zatrzymaj się. Na której liczbie się zatrzyma?',
          o: ['5', '10', '1', 'Nigdy się nie zatrzyma'],
          c: 0,
          f: '3: nic. 8: licznik 1. 5: licznik 2 → alarm wł. → w tym samym kroku 5 jest nieparzyste → stop na 5.'
        },
        {
          p: 'Aby sprawdzić, czy lista jest posortowana od najmniejszej do największej, ktoś proponuje: „porównaj każdą liczbę z pierwszą; jeśli któraś jest mniejsza od pierwszej, odpowiedz Nieposortowana”. Jaki jest główny problem?',
          o: ['Nie działa dla liczb ujemnych', 'Dla każdej listy powie „Nieposortowana”', 'Nigdy nie porównuje sąsiadów po pierwszym elemencie, więc 1, 5, 3 uzna za posortowaną', 'Działa tylko dla list o parzystej długości'],
          c: 2,
          f: '5 i 3 są większe od 1, więc test przechodzi — a lista nie jest posortowana. Jeden kontrprzykład wystarczy.'
        }
      ]
    },
    {
      id: 'python',
      ic: '🐍',
      slot: 'Python',
      title: 'Praktyka programowania w Pythonie',
      sections: [
        {
          t: '3.1 · Czytanie kodu jak komputer',
          html: '<div class="card why"><p>Dobry tutor musi umieć nie tylko napisać własny program, ale także szybko zrozumieć cudzy kod. Podczas zajęć będziesz musiał czytać rozwiązania uczniów, dokładnie ustalić, co robi program, znaleźć przyczyny błędów i pomóc je poprawić.</p><p>W tym bloku będziemy pracować z Pythonem. Najważniejsze tutaj nie jest zapamiętywanie każdej komendy na pamięć, ale zrozumienie, jak wykonywany jest kod, jak współdziałają jego części i dlaczego program daje określony wynik.</p><p>Będziesz musiał przeczytać kilka krótkich programów, zidentyfikować błędy i rozwiązać kilka praktycznych zadań. Nie martw się, nie będzie tu skomplikowanych algorytmów - interesuje nas tylko pewne opanowanie podstawowych zasad programowania.</p></div><div class="tbl"><table><tbody><tr><th>Element</th><th>Co oznacza</th></tr><tr><td><code>range(4)</code></td><td>0, 1, 2, 3 — zaczyna od 0, kończy <strong>przed</strong> 4</td></tr><tr><td><code>range(2, 6)</code></td><td>2, 3, 4, 5 — początek włącznie, koniec wyłącznie</td></tr><tr><td><code>total += x</code></td><td>To samo co <code>total = total + x</code></td></tr><tr><td><code>a % b</code></td><td>Reszta z dzielenia. <code>n % 2 == 0</code> oznacza, że n jest parzyste; <code>== 1</code> — nieparzyste</td></tr><tr><td><code>a // b</code></td><td>Dzielenie całkowite: <code>7 // 2</code> to 3</td></tr><tr><td><code>=</code> a <code>==</code></td><td><code>=</code> zapisuje wartość; <code>==</code> porównuje dwie wartości</td></tr><tr><td><code>&gt;</code> a <code>&gt;=</code></td><td>„Większe niż 10” wyklucza 10; „co najmniej 10” je obejmuje. 0 nie jest dodatnie.</td></tr></tbody></table></div><div class="tracer" data-tr="pyloop"></div>'
        },
        {
          t: '3.2 · Listy i indeksy',
          html: '<pre class="code">numbers = [4, 15, 7, 22]\n# index:    0   1  2   3\n\nnumbers[1]      # 15\nlen(numbers)    # 4\n\nfor n in numbers:              # n is each VALUE: 4, 15, 7, 22\n    ...\nfor i in range(len(numbers)):  # i is each INDEX: 0, 1, 2, 3\n    ...  numbers[i]  ...</pre><div class="card warn"><p>Indeksy zaczynają się od <strong>0</strong>. Gdy zadanie prosi o „indeks”, zwróć <code>i</code>, a nie <code>numbers[i]</code>. Mylenie indeksu z wartością to jedna z najczęstszych błędnych odpowiedzi.</p></div>'
        },
        {
          t: '3.3 · return natychmiast kończy funkcję',
          html: '<div class="card "><p>Funkcja zatrzymuje się w chwili, gdy dojdzie do <code>return</code> — nawet w środku pętli. Wartość po <code>return</code> jest tym, co zwraca wywołanie. <code>print</code> tylko pokazuje coś na ekranie; niczego nie zwraca.</p><p>W Pythonie <strong>wcięcia decydują, co jest wewnątrz czego</strong>. Cztery spacje więcej oznaczają „wewnątrz pętli” albo „wewnątrz if”. Dlatego położenie jednej linii <code>return</code> może zmienić cały wynik.</p></div><div class="tracer" data-tr="pyreturn"></div>'
        },
        {
          t: '3.4 · Wzorzec: „czy WSZYSTKIE elementy są OK?”',
          html: '<div class="card "><p>Aby sprawdzić, czy <em>wszystkie</em> elementy spełniają warunek, szukaj <strong>jednego elementu, który go łamie</strong>. Gdy tylko go znajdziesz — <code>return False</code>. Dopiero gdy pętla sprawdzi wszystko, możesz zrobić <code>return True</code>.</p></div><pre class="code good">def all_below_100(numbers):\n    for n in numbers:\n        if n &gt;= 100:\n            return False   # one bad item is enough\n    return True            # after the loop: nothing was bad</pre><div class="cols"><div><pre class="code bad"># WRONG: decides after the first item\nfor n in numbers:\n    if n &lt; 100:\n        return True\n    else:\n        return False</pre></div><div><pre class="code bad"># WRONG: returns True as soon as\n# ONE item is OK\nfor n in numbers:\n    if n &lt; 100:\n        return True\nreturn False</pre></div></div><div class="card tip"><p>Sprawdź też granicę warunku: „dodatnie” oznacza <code>&gt; 0</code>, więc lista zawierająca 0 nie jest cała dodatnia.</p></div>'
        },
        {
          t: '3.5 · Wzorzec: „znajdź PIERWSZY”',
          html: '<div class="card "><p>Aby zwrócić indeks pierwszego pasującego elementu: <code>return i</code> wewnątrz <code>if</code>, więc funkcja zatrzymuje się na pierwszym dopasowaniu. Wartość „nie znaleziono” (<code>-1</code>) idzie <strong>po</strong> pętli, bo dopiero po sprawdzeniu wszystkich elementów wiesz, że nic nie pasowało.</p></div><pre class="code good">def find_first_even(numbers):\n    for i in range(len(numbers)):\n        if numbers[i] % 2 == 0:\n            return i      # first match: stop here\n    return -1             # loop finished: no match\n\nfind_first_even([3, 7, 8, 10])   # 2</pre><div class="tbl"><table><tbody><tr><th>Błędna wersja</th><th>Co idzie nie tak</th></tr><tr><td><code>else: return -1</code> wewnątrz pętli</td><td>Poddaje się po pierwszym elemencie, jeśli ten nie pasuje.</td></tr><tr><td><code>result = i</code> w pętli, <code>return result</code> po niej</td><td>Ciągle nadpisuje, więc zwraca <strong>ostatnie</strong> dopasowanie, a nie pierwsze.</td></tr><tr><td><code>for n in numbers: … return n</code></td><td>Zwraca <strong>wartość</strong>, a nie indeks.</td></tr></tbody></table></div>'
        },
        {
          t: '3.6 · Pomoc uczniowi w debugowaniu',
          html: '<div class="card class"><p>Te same nawyki obowiązują na obu poziomach CraftForge, gdy czytasz kod ucznia. Nie naprawiaj za niego — pomóż mu znaleźć błąd:</p><ul><li><strong>Przeczytajcie błąd na głos razem.</strong> „Na którą linię wskazuje i co według ciebie powinno się tam stać?”</li><li><strong>Wyizoluj ostatnią zmianę.</strong> „Co zmieniłeś na końcu, zanim się zepsuło?”</li><li><strong>Prześledź na małych danych</strong> — dwa lub trzy elementy wystarczą, by ujawnić większość błędów.</li><li>Jeśli kod pochodzi od AI: „Zanim to dodasz — wyjaśnij mi, co robi ta linia”.</li></ul></div><div class="tbl"><table><tbody><tr><th>Błąd, który widzi uczeń</th><th>Typowa przyczyna</th></tr><tr><td>IndentationError</td><td>Pomieszane lub brakujące spacje na początku linii</td></tr><tr><td>SyntaxError</td><td>Brak <code>:</code> po <code>for</code>/<code>if</code>/<code>def</code> albo <code>=</code> tam, gdzie potrzeba <code>==</code></td></tr><tr><td>NameError</td><td>Literówka w nazwie zmiennej albo użycie jej, zanim powstała</td></tr><tr><td>Zły wynik, brak błędu</td><td>Logika: <code>return</code> w złym miejscu, <code>&gt;</code> a <code>&gt;=</code>, zła wartość początkowa</td></tr></tbody></table></div>'
        }
      ],
      quiz: [
        {
          p: 'Co wypisze ten program?<pre class="code">total = 0\nfor i in range(1, 5):\n    total += i * 2\nprint(total)</pre>',
          o: ['10', '12', '20', '30'],
          c: 2,
          f: 'range(1, 5) to 1, 2, 3, 4. Więc 2 + 4 + 6 + 8 = 20. (30 wymagałoby range(1, 6).)'
        },
        {
          p: 'Co zwróci to wywołanie?<pre class="code">def mystery(nums):\n    result = 0\n    for n in nums:\n        if n % 2 == 1:\n            result += n\n    return result\n\nmystery([3, 4, 7, 10])</pre>',
          o: ['2', '10', '14', '24'],
          c: 1,
          f: 'Dodaje tylko liczby nieparzyste: 3 + 7 = 10. (2 to byłoby ich policzenie; 24 — zsumowanie wszystkiego.)'
        },
        {
          p: 'count_evens([2, 4, 6]) zwraca 1 zamiast 3. Która zmiana naprawi to dla dowolnej listy?<pre class="code">def count_evens(numbers):\n    count = 0\n    for n in numbers:\n        if n % 2 == 0:\n            count += 1\n        return count</pre>',
          o: ['Zacząć count od 1', 'Przenieść return count do wnętrza if', 'Przenieść return count poza pętlę for, za nią', 'Zmienić == 0 na == 1'],
          c: 2,
          f: 'return jest wewnątrz pętli, więc funkcja kończy się po pierwszej liczbie. Umieszczony za pętlą wykona się, gdy wszystko zostanie policzone.'
        },
        {
          p: 'all_even(numbers) ma zwrócić True tylko wtedy, gdy każda liczba jest parzysta. Która wersja jest poprawna?',
          o: ['A<pre class="code">for n in numbers:\n    if n % 2 == 0:\n        return True\nreturn False</pre>', 'B<pre class="code">for n in numbers:\n    if n % 2 != 0:\n        return False\nreturn True</pre>', 'C<pre class="code">for n in numbers:\n    if n % 2 != 0:\n        return False\n    else:\n        return True</pre>', 'Żadna'],
          c: 1,
          f: 'B zwraca False przy pierwszej nieparzystej liczbie, a True dopiero po sprawdzeniu wszystkich. A zatrzymuje się na pierwszej parzystej; C decyduje po obejrzeniu jednego elementu.'
        },
        {
          p: 'find_first_negative(numbers) ma zwrócić indeks pierwszej liczby ujemnej albo -1, jeśli takiej nie ma. Która wersja działa dla dowolnej listy?',
          o: ['A<pre class="code">for i in range(len(numbers)):\n    if numbers[i] &lt; 0:\n        return i\n    else:\n        return -1</pre>', 'B<pre class="code">result = -1\nfor i in range(len(numbers)):\n    if numbers[i] &lt; 0:\n        result = i\nreturn result</pre>', 'C<pre class="code">for i in range(len(numbers)):\n    if numbers[i] &lt; 0:\n        return i\nreturn -1</pre>', 'D<pre class="code">for n in numbers:\n    if n &lt; 0:\n        return n\nreturn -1</pre>'],
          c: 2,
          f: 'C zatrzymuje się na pierwszym dopasowaniu i zwraca -1 dopiero po całej liście. A poddaje się po jednym elemencie, B zwraca ostatnie dopasowanie, D zwraca wartość zamiast indeksu.'
        },
        { p:'Jakie wartości daje range(2, 6)?', o:['2, 3, 4, 5, 6', '2, 3, 4, 5', '3, 4, 5, 6', '0, 1, 2, 3, 4, 5'], c:1, f:'Początek jest włącznie, koniec nie.' }
      ]
    },
    {
      id: 'datapacks',
      ic: '📜',
      slot: 'Datapack',
      title: 'Data packi: prawa świata',
      sections: [
        {
          t: '4.1 · Czym jest data pack',
          html: '<div class="card why"><p>Data packi pozwalają uczniowi ustalić własne <strong>prawa</strong> Minecrafta — nowe receptury, własne polecenia, liczniki czasu, zdarzenia i punktację — bez zmieniania samej gry. Otwierają rok (moduł 01, „świat zaczyna działać według reguł zapisanych przez ucznia”) i napędzają moduł 06, w którym zwykły teren staje się grą.</p></div><pre class="code">my_pack/\n├── pack.mcmeta                    ← required: tells Minecraft this is a data pack\n└── data/\n    ├── forge/                     ← the student\'s namespace\n    │   └── function/\n    │       ├── setup.mcfunction   ← one command per line, no "/"\n    │       └── loop.mcfunction\n    └── minecraft/\n        └── tags/function/\n            ├── load.json          ← lists functions that run when the world loads or /reload runs\n            └── tick.json          ← lists functions that run every game tick</pre><div class="card tip"><p>Nazwy folderów zależą od wersji gry: od 1.21 są w liczbie pojedynczej (<code>function</code>, <code>recipe</code>); starsze wersje używają liczby mnogiej (<code>functions</code>, <code>recipes</code>). Zła nazwa folderu to cichy błąd — pack się ładuje, ale nic się nie dzieje. Używaj struktury, którą zapewnia środowisko twojego kursu.</p></div>'
        },
        {
          t: '4.2 · load, tick i zasada 20 ticków',
          html: '<div class="tbl"><table><tbody><tr><th>Kiedy</th><th>Co się uruchamia</th></tr>\n    <tr><td>Wczytanie świata lub <code>/reload</code></td><td>Funkcje wymienione w <code>load.json</code> — jeden raz. Dobre do przygotowania: tworzenia tablic wyników.</td></tr>\n    <tr><td>Każdy tick gry — <strong>20 razy na sekundę</strong></td><td>Funkcje wymienione w <code>tick.json</code>. Dobre do liczników czasu i sprawdzania warunków.</td></tr>\n    <tr><td>Gdy ją wywołasz</td><td><code>/function forge:setup</code> uruchamia jedną funkcję ręcznie — świetne do testów.</td></tr></tbody></table></div><pre class="code"># setup.mcfunction  (in load.json: runs once)\nscoreboard objectives add timer dummy\nscoreboard objectives add points dummy\nscoreboard objectives setdisplay sidebar points\n\n# loop.mcfunction   (in tick.json: runs 20 times per second)\nscoreboard players add #game timer 1\nexecute if score #game timer matches 200 run say Ten seconds!</pre><div class="card "><p>Licznik rośnie o 1 co tick, więc 200 ticków = <strong>10 sekund</strong>. <code>execute if …</code> to data packowa wersja <code>if</code>. Tablica wyników to sposób, w jaki moduł 06 „liczy punkty”.</p></div>'
        },
        {
          t: '4.3 · Gdy reguła się nie uruchamia',
          html: '<div class="tbl"><table><tbody><tr><th>Objaw</th><th>Co sprawdzić najpierw</th></tr>\n    <tr><td>Nic się nie dzieje</td><td>Czy po edycji uruchomili <code>/reload</code>? Czy pack jest włączony (<code>/datapack list</code>)?</td></tr>\n    <tr><td>Przygotowanie nigdy się nie wykonało</td><td>Czy funkcja jest wymieniona w <code>load.json</code>, z właściwą przestrzenią nazw?</td></tr>\n    <tr><td>Działa raz, ale nie po ponownym wejściu do świata</td><td>Przygotowanie uruchomiono ręcznie i nie ma go w <code>load.json</code></td></tr>\n    <tr><td>Uruchamia się bez przerwy zamiast raz</td><td>Polecenie siedzi w funkcji tick bez warunku</td></tr>\n    <tr><td>Warunek nigdy się nie spełnia</td><td>Sprawdź nazwę celu, obiekt i liczbę — prześledź to jak każdy algorytm</td></tr></tbody></table></div><div class="card class"><p><strong>Na zajęciach:</strong> nie naprawiaj za nich. Sprawdźcie razem wyzwalacz: <em>„Wyjaśnij mi, kiedy to powinno się uruchomić”.</em> Przy wczytaniu, co tick, czy tylko wtedy, gdy warunek jest prawdziwy?</p></div>'
        }
      ],
      quiz: [
        {
          p: 'Ile razy na sekundę wykonuje się funkcja wymieniona w tick.json?',
          o: ['1', '10', '20', '60'],
          c: 2,
          f: 'Minecraft wykonuje 20 ticków gry na sekundę, a funkcje tick działają w każdym ticku.'
        },
        {
          p: 'Licznik dodaje 1 do wyniku co tick. Która wartość oznacza, że minęło 30 sekund?',
          o: ['30', '300', '600', '1800'],
          c: 2,
          f: '20 ticków na sekundę × 30 sekund = 600.'
        },
        {
          p: 'Uczeń edytował plik funkcji, ale gra dalej zachowuje się po staremu. Co powinien sprawdzić najpierw?',
          o: ['Usunąć świat', 'Uruchomić /reload', 'Zrestartować komputer', 'Zmienić nazwę przestrzeni nazw'],
          c: 1,
          f: '/reload wczytuje zmienione pliki i ponownie uruchamia funkcje load.'
        },
        {
          p: 'Gdzie powinno trafić polecenie tworzące cel tablicy wyników?',
          o: ['Do funkcji wymienionej w load.json', 'Do funkcji wymienionej w tick.json', 'Do pack.mcmeta', 'Trzeba je wpisywać ręcznie na każdej lekcji'],
          c: 0,
          f: 'Przygotowanie należy do funkcji load: wykonuje się raz przy wczytaniu świata lub po /reload.'
        },
        {
          p: 'Reguła ucznia się nie uruchamia, a on chce, żebyś ją naprawił. Co mówisz?',
          o: ['„Daj, przepiszę ci to”.', '„Wyjaśnij mi, kiedy to powinno się uruchomić”.', '„Poproś Sparks, żeby napisał to od nowa”.', '„Data packi są za trudne — pomiń to”.'],
          c: 1,
          f: 'Wspólne sprawdzenie wyzwalacza sprawia, że to uczeń rozwiązuje problem, krok po kroku.'
        }
      ]
    }
  ],
  tracers: {
    robot: {
      title: 'Prześledź: robot na osi liczbowej',
      code: ['x = 3', 'repeat 4 times:', '    if x is a multiple of 3:', '        move 2 forward', '    otherwise:', '        move 1 back'],
      steps: [
        {
          l: 0,
          v: { x:3, round:'–' },
          n: 'Najpierw zapisz wartość początkową.'
        },
        {
          l: 2,
          v: { x:3, round:1 },
          n: 'Runda 1. Czy 3 jest wielokrotnością 3? Tak.'
        },
        {
          l: 3,
          v: { x:5, round:1 },
          n: '3 + 2 = 5. Kolejna runda sprawdza NOWĄ wartość x, 5.'
        },
        {
          l: 5,
          v: { x:4, round:2 },
          n: 'Runda 2. 5 nie jest wielokrotnością 3, więc cofamy się: 5 − 1 = 4.'
        },
        {
          l: 5,
          v: { x:3, round:3 },
          n: 'Runda 3. 4 nie jest wielokrotnością 3: 4 − 1 = 3.'
        },
        {
          l: 3,
          v: { x:5, round:4 },
          n: 'Runda 4. 3 znów jest wielokrotnością 3: 3 + 2 = 5. Cztery rundy gotowe.'
        },
        {
          l: 1,
          v: { x:5, round:'done' },
          n: 'Odpowiedź końcowa: 5. Zauważ, że robot wrócił na 3 — pętla, która wraca do tej samej wartości, to klasyczna pułapka na zgadywanie.'
        }
      ]
    },
    coins: {
      title: 'Prześledź: pętla z warunkiem w środku',
      code: ['coins = 2', 'repeat 3 times:', '    coins = coins + 3', '    if coins > 6:', '        coins = coins * 2'],
      steps: [
        {
          l: 0,
          v: { coins:2, round:'–' },
          n: 'Wartość początkowa.'
        },
        {
          l: 2,
          v: { coins:5, round:1 },
          n: 'Runda 1: najpierw dodaj. 2 + 3 = 5.'
        },
        {
          l: 3,
          v: { coins:5, round:1 },
          n: 'Teraz sprawdź NOWĄ wartość: czy 5 > 6? Nie — nic się nie podwaja.'
        },
        {
          l: 2,
          v: { coins:8, round:2 },
          n: 'Runda 2: 5 + 3 = 8.'
        },
        {
          l: 4,
          v: { coins:16, round:2 },
          n: '8 > 6, więc podwajamy: 16.'
        },
        {
          l: 2,
          v: { coins:19, round:3 },
          n: 'Runda 3: 16 + 3 = 19.'
        },
        {
          l: 4,
          v: { coins:38, round:3 },
          n: '19 > 6, znów podwajamy: 38. Po przekroczeniu progu podwajanie działa w każdej rundzie.'
        }
      ]
    },
    flag: {
      title: 'Prześledź: licznik, flaga i reguła zatrzymania',
      code: ['numbers = 6, 1, 8, 3, 12', 'counter = 0, mode = off', 'for each number, in this order:', '    if number > 5: counter + 1', '    if counter == 2: mode = on', '    if mode is on and number is odd: STOP'],
      steps: [
        {
          l: 1,
          v: { number:'–', counter:0, mode:'off' },
          n: 'Zanim zaczniesz, zapisz każdą zmienną w osobnej kolumnie.'
        },
        {
          l: 3,
          v: { number:6, counter:1, mode:'off' },
          n: '6 > 5 → licznik 1. Tryb nadal wyłączony. Zresztą 6 jest parzyste.'
        },
        {
          l: 5,
          v: { number:1, counter:1, mode:'off' },
          n: '1 nie jest > 5. Tryb jest wyłączony, więc reguła zatrzymania nie zadziała, choć 1 jest nieparzyste.'
        },
        {
          l: 4,
          v: { number:8, counter:2, mode:'on' },
          n: '8 > 5 → licznik 2 → tryb włącza się w tym samym kroku.'
        },
        {
          l: 5,
          v: { number:8, counter:2, mode:'on' },
          n: 'Trzecia reguła, ta sama liczba: tryb jest włączony, ale 8 jest parzyste. Idziemy dalej.'
        },
        {
          l: 5,
          v: { number:3, counter:2, mode:'on' },
          n: '3: nie > 5. Tryb włączony i 3 jest nieparzyste → STOP na 3. 12 nie zostanie nawet odczytane.'
        }
      ]
    },
    pyloop: {
      title: 'Prześledź: for + range w Pythonie',
      code: ['total = 1', 'for i in range(3):', '    total = total + i * 3', 'print(total)'],
      steps: [
        {
          l: 0,
          v: { total:1, i:'–' },
          n: 'total zaczyna od 1, nie od 0 — zawsze sprawdzaj wartość początkową.'
        },
        {
          l: 1,
          v: { total:1, i:0 },
          n: 'range(3) daje 0, 1, 2. Zaczyna od 0 i nigdy nie dochodzi do 3.'
        },
        {
          l: 2,
          v: { total:1, i:0 },
          n: '1 + 0 * 3 = 1. Mnożenie wykonuje się przed dodawaniem.'
        },
        {
          l: 2,
          v: { total:4, i:1 },
          n: '1 + 1 * 3 = 4.'
        },
        {
          l: 2,
          v: { total:10, i:2 },
          n: '4 + 2 * 3 = 10. To była ostatnia wartość, jaką daje range(3).'
        },
        {
          l: 3,
          v: { total:10, i:2 },
          n: 'print nie ma wcięcia, więc wykona się raz, po pętli. Wynik: 10.'
        }
      ]
    },
    pyreturn: {
      title: 'Prześledź: miejsce return zmienia wszystko',
      code: ['def count_evens(numbers):', '    count = 0', '    for n in numbers:', '        if n % 2 == 0:', '            count += 1', '        return count', '', 'count_evens([2, 4, 6])'],
      steps: [
        {
          l: 7,
          v: { n:'–', count:'–', returned:'–' },
          n: 'Wywołujemy funkcję z [2, 4, 6]. Oczekiwana odpowiedź to 3.'
        },
        {
          l: 1,
          v: { n:'–', count:0, returned:'–' },
          n: 'count zaczyna od 0.'
        },
        {
          l: 2,
          v: { n:2, count:0, returned:'–' },
          n: 'Pierwszy przebieg pętli: n = 2.'
        },
        {
          l: 4,
          v: { n:2, count:1, returned:'–' },
          n: '2 % 2 == 0, więc count staje się 1.'
        },
        {
          l: 5,
          v: { n:2, count:1, returned:1 },
          n: 'return ma wcięcie WEWNĄTRZ pętli for. Wykonuje się w pierwszym przebiegu i opuszcza funkcję: wynik 1. 4 i 6 nie są nawet sprawdzane.'
        },
        {
          l: 5,
          v: { n:2, count:1, returned:1 },
          n: 'Poprawka: przesuń return count o cztery spacje w lewo, na poziom for. Wtedy wykona się raz, gdy wszystkie liczby zostaną policzone.'
        }
      ]
    }
  }
};
