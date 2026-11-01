/* ============================================================
   Minecraft publishing simulation (Kodland Sparks + Kodland Launcher + the lesson card) · RUSSIAN
   Translated from content-en.js (base version).
   Translate only the text inside quotes / backticks. Keep HTML tags, keys and the button names
   that appear in the real interface (Publish project, Minecraft skin, Image, Public, Only me, Edit, Everyone, Copy link…).
   ============================================================ */
window.CONTENT = { lang: 'ru' };

CONTENT.ui = {
  title: 'Kodland Sparks · Публикация проекта Minecraft',
  coachStep: (n, total) => `Шаг ${n} из ${total}`,
  next: 'Далее →',
  finish: 'Готово ✓',
  clickHint: '👆 Нажмите на выделенное место',
  followStep: 'Следуйте выделенному шагу 🙂',
  langName: 'Русский',
  studentNick: 'lucas_craft',
  studentName: 'Лукас',
  studentInitial: 'Л',
  skinTitle: 'Лукас-исследователь',
  skinFile: 'lucas_skin.png',
  towerTitle: 'Сторожевая вышка',
  oldTitle: 'Мой дом на острове',
  fileName: 'watchtower.png',
  packName: 'Каменные яблоки',
  uploaded: 'Загружено ✓',
  uploaded2: 'Загружено 26 окт. 2026',
  saved: 'Сохранено',
  copied: 'Ссылка скопирована',
  chars: n => `Символов: ${n}`,
  cardTab: 'Платформа Kodland · Урок 1',
  cardUrl: 'https://platform.kodland.org/lesson/1'
};

CONTENT.flows = {
  /* Beginner: part 1 = the skin as a Minecraft skin project (Lesson 1); part 2 = a build screenshot as an Image project (Lesson 2 and homework) */
  image: {
    card: { gif: 'assets/crafters-skin.gif', label: 'Ссылка на мой облик в Kodland Sparks', placeholder: 'Вставь сюда ссылку на свой облик' },
    welcome: {
      kicker: '⚡ Симуляция · Minecraft CraftForge Beginner',
      title: 'Опубликуйте <span>облик и постройку</span> в Kodland Sparks',
      lead: 'На курсе Minecraft CraftForge Beginner ученики публикуют работы в Kodland Sparks с урока 1: сначала свой <b>облик</b>, затем снимки построек как проекты <b>Image</b>. После этого они вставляют ссылку на проект в карточку урока. Здесь вы играете за Лукаса, ученика.',
      seeTitle: 'Что вы сделаете',
      see: ['Опубликуете облик как проект <b>Minecraft skin</b> и выберете, кто его видит.', 'Найдёте ссылку: <b>My projects → опубликованный проект → адрес в строке браузера</b>.', 'Вставите ссылку в карточку урока на платформе Kodland.', 'Опубликуете снимок постройки как проект <b>Image</b> и почините ссылку, которую никто, кроме автора, не может открыть.'],
      how: 'Карточка-подсказка показывает каждый шаг. Нажимайте на выделенное место. Это займёт около 5 минут.',
      start: 'Начать симуляцию →'
    },
    steps: {
      start: { title: 'Облик Лукаса готов', text: 'Лукас нарисовал своего крафтера: файл облика PNG 64×64. Теперь он публикует его в Kodland Sparks, чтобы надеть облик в лончере и отправить ссылку на него в карточке урока.' },
      navPublish: { title: 'Publish project', text: 'В верхней панели Спаркс нажмите <b>Publish project</b>.' },
      typeSkin: { title: 'Тип проекта: Minecraft skin', text: 'Есть восемь типов проектов. Облик публикуется как <b>Minecraft skin</b>: Спаркс показывает его на 3D-модели. Нажмите на него.' },
      title: { title: 'Дайте название', text: 'Нажмите на поле названия. Проект с понятным названием легко найти потом — и ученику, и вам.' },
      model: { title: 'Steve или Alex', text: '<b>Model</b> определяет форму тела, на которой показан облик: <b>Steve</b> (классические руки) или <b>Alex</b> (тонкие руки). По умолчанию выбран Steve.' },
      upload: { title: 'Skin file (PNG)', text: 'Нажмите <b>Choose file</b> и добавьте облик: <b>PNG 64×64</b> (старый формат 64×32 тоже подходит).' },
      visibility: { title: 'Кто видит проект', text: '<ul><li><b>Public</b>: в ленте и в публичном портфолио.</li><li><b>Friends only</b>: друзья, преподаватели и сам ученик.</li><li><b>Only me</b>: ссылку не откроет никто другой — даже вы.</li></ul>Главное, чтобы <b>вы могли открыть ссылку</b>.' },
      visPublic: { title: 'Выберите Public', text: 'Лукас хочет, чтобы другие игроки увидели его крафтера. Нажмите <b>Public</b>.' },
      toggles: { title: 'Настройки в конце', text: '<ul><li><b>Request feedback</b>: другие авторы могут оставить структурированный отзыв (только для публичных проектов).</li><li><b>Others can modify this project</b>: включено по умолчанию — другие могут открыть свою копию; оригинал не меняется.</li><li><b>Discord selection</b>: лучшие публичные проекты дня публикуются в Discord.</li></ul>' },
      publish: { title: 'Publish', text: 'Нажмите <b>1× 💎 Publish</b>. За публикацию ещё и начисляется кристалл.' },
      findMy: { title: 'Где ссылка?', text: 'Облик опубликован. Теперь ученику нужна ссылка на него. Это не текст, который откуда-то копируют: это адрес страницы проекта. Сначала перейдите в <b>My projects</b>.' },
      openSkin: { title: 'Откройте опубликованный проект', text: 'В профиле видны проекты ученика. Нажмите на облик, который вы только что опубликовали.' },
      copy: { title: 'Скопируйте ссылку из строки браузера', text: 'Страница проекта открыта. Её ссылка — это адрес в <b>строке браузера</b>: <code>portfolio.kodland.org/nickname/…</code>. Нажмите на строку, чтобы выделить адрес, и скопируйте его (Ctrl + C / Cmd + C).' },
      toCard: { title: 'Перейдите к уроку на платформе', text: 'Публикация в Спаркс и отправка ссылки на платформе Kodland — <b>два разных шага</b>. Откройте вкладку урока.' },
      paste: { title: 'Вставьте ссылку в карточку', text: 'Это карточка <b>«Облик крафтера»</b> на платформе. Нажмите на поле <b>«Ссылка на мой облик в Kodland Sparks»</b>, чтобы вставить ссылку (Ctrl + V / Cmd + V). Сюда вставляется только ссылка. Проверьте в Backoffice, что ссылки действительно пришли.' },
      imageIntro: { title: 'С урока 2: постройки как Image', text: 'С урока 2 ученики публикуют ещё и <b>снимки своих построек</b> (F5 — увидеть себя, F1 — скрыть интерфейс). Лукас только что закончил сторожевую вышку. Вернитесь на вкладку Kodland Sparks.' },
      navPublish2: { title: 'Publish project', text: 'Снова нажмите <b>Publish project</b>.' },
      typeImage: { title: 'Тип проекта: Image', text: 'Снимок экрана публикуется как <b>Image</b>. Нажмите на него.' },
      title2: { title: 'Название', text: 'Нажмите на поле названия.' },
      upload2: { title: 'Drawing: снимок экрана', text: 'В разделе <b>Drawing</b> нажмите <b>Choose file</b> (PNG, JPG, WebP или GIF до 5 МБ). На Windows снимок лежит в <b>Изображения → Снимки экрана</b>, на Mac — на рабочем столе.' },
      publish2: { title: 'Publish', text: 'Видимость остаётся <b>Public</b>. Нажмите <b>Publish</b>. Ссылка находится так же: My projects → проект → строка браузера.' },
      problem: { title: 'Ссылка не открывается', text: 'Другая ситуация: ученик присылает ссылку, а у вас она не открывается. В профиле ученика у проекта метка <b>Private project</b>: он сохранён как <b>Only me</b>. Исправим это от лица Лукаса.' },
      myProjects: { title: 'My projects', text: 'Нажмите <b>My projects</b>.' },
      privateCard: { title: 'Закрытый проект', text: 'Откройте проект с меткой <b>Private project</b>.' },
      edit: { title: 'Edit', text: 'Нажмите <b>Edit</b>.' },
      fixPublic: { title: 'Измените видимость', text: 'Выберите <b>Public</b> (или <b>Friends only</b> — такой проект преподаватели тоже могут открыть).' },
      resend: { title: 'Опубликуйте снова', text: 'Нажмите <b>Publish</b>. Ссылка остаётся той же и теперь открывается у вас.' },
      done: { title: 'Исправлено', text: 'Проект публичный, и ссылка из строки браузера работает. Если ссылка всё равно не открывается, попросите ученика показать экран и повторите шаги вместе.' }
    },
    finish: {
      kicker: '🏁 Симуляция пройдена',
      title: 'Вы знаете, как публикуются <span>работы в Minecraft</span>',
      intro: 'Вот что ученики делают каждый раз, когда урок просит опубликовать работу:',
      points: ['Облик: <b>Publish project</b> → <b>Minecraft skin</b> → название → Model (Steve/Alex) → PNG 64×64 → <b>Publish</b>.', 'Постройка: снимок экрана (F5, F1) → <b>Publish project</b> → <b>Image</b> → название → Drawing → <b>Publish</b>.', 'Ссылка: <b>My projects → опубликованный проект → скопировать адрес из строки браузера</b>, затем вставить в карточку урока на платформе. Публикация и отправка ссылки — два разных шага.', '<b>Private project</b> = Only me: My projects → проект → Edit → Public → Publish. Ссылка остаётся той же.'],
      back: 'Вернитесь к обучению: проверка по модулю теперь открыта.',
      again: '↺ Пройти ещё раз'
    }
  },

  /* Intermediate: the data pack is published from the Kodland Launcher (0.8.20) */
  datapack: {
    card: { gif: 'assets/sign-the-law.gif', label: 'Ссылка на мой закон в Kodland Sparks', placeholder: 'Вставь сюда ссылку на опубликованный датапак' },
    welcome: {
      kicker: '⚡ Симуляция · Minecraft CraftForge Intermediate',
      title: 'Опубликуйте <span>датапак</span> в Kodland Sparks',
      lead: 'На курсе Minecraft CraftForge Intermediate ученики создают законы мира (рецепты, дропы, команды) в <b>датапаке</b> в Kodland Launcher и публикуют его в свой профиль Спаркс прямо из редактора. Здесь вы играете за Лукаса — ученика, который только что создал свой первый рецепт.',
      seeTitle: 'Что вы сделаете',
      see: ['Откроете датапак в лончере: <b>Create → Data packs → Edit</b>.', 'Опубликуете его с <b>Who can see it? → Everyone</b> и скопируете ссылку.', 'Вставите ссылку в карточку урока на платформе Kodland.', 'Почините ссылку, которая не открывается, и снова найдёте ссылку через <b>Open on Sparks</b>.'],
      how: 'Карточка-подсказка показывает каждый шаг. Нажимайте на выделенное место. Это займёт около 4 минут.',
      start: 'Начать симуляцию →'
    },
    steps: {
      start: { title: 'Закон работает', text: 'Лукас создал рецепт в своём датапаке, сохранил его, вернулся в мир и скрафтил свой предмет. Теперь он ставит подпись под законом: публикует датапак в Kodland Sparks. Это лончер, вкладка <b>Play</b>.' },
      create: { title: 'Create', text: 'Датапаки находятся на вкладке <b>Create</b>. Нажмите <b>Create</b>.' },
      edit: { title: 'Датапак', text: 'Здесь датапаки ученика. Нажмите <b>Edit</b> у датапака с рецептом.' },
      editor: { title: 'Редактор датапака', text: 'Слева — что лежит в датапаке, в центре — форма рецепта. Справа вверху <b>Publish</b> — рядом с фиолетовой кнопкой <b>Save</b>.' },
      publish: { title: 'Publish', text: 'Нажмите <b>Publish</b>.' },
      name: { title: 'Название', text: 'Открывается окно «Publish to your profile». Нажмите на поле <b>Name</b>. Поле <b>About it</b> заполнять не обязательно.' },
      who: { title: 'Who can see it?', text: 'Здесь решается, кто сможет открыть ссылку. Только с <b>Everyone</b> ссылка откроется у других — и у вас тоже — без входа в аккаунт ученика.' },
      everyone: { title: 'Everyone', text: 'Проверьте, что выбрано <b>Everyone</b>, и нажмите на этот вариант.' },
      submit: { title: 'Publish', text: 'Нажмите <b>Publish</b>.' },
      copy: { title: 'Опубликовано! Скопируйте ссылку', text: 'Появляется «Published! It is on your profile.» со ссылкой на проект и кристаллом. Нажмите <b>Copy link</b>.' },
      close: { title: 'Done', text: 'Теперь на кнопке написано <b>Copied!</b>. Нажмите <b>Done</b>.' },
      toCard: { title: 'Перейдите к уроку на платформе', text: 'Публикация в Спаркс и отправка ссылки на платформе Kodland — <b>два разных шага</b>. Откройте вкладку урока.' },
      paste: { title: 'Вставьте ссылку в карточку', text: 'Это карточка <b>«Подпись под законом»</b> на платформе. Нажмите на поле <b>«Ссылка на мой закон в Kodland Sparks»</b>, чтобы вставить ссылку (Ctrl + V / Cmd + V). Проверьте в Backoffice, что ссылки действительно пришли.' },
      problem: { title: 'Ссылка не открывается', text: 'На следующем уроке Лукас публикует обновление, а ссылка у вас не открывается. Скорее всего, в «Who can see it?» было выбрано <b>Only me</b>. Решение: опубликовать снова с Everyone.' },
      backLauncher: { title: 'Назад в лончер', text: 'Откройте вкладку Kodland Launcher.' },
      republish: { title: 'Опубликуйте снова', text: 'Нажмите <b>Publish</b> в редакторе.' },
      fixEveryone: { title: 'Everyone', text: 'Датапак был опубликован как <b>Only me</b>. Выберите <b>Everyone</b>.' },
      resubmit: { title: 'Publish', text: 'Нажмите <b>Publish</b>. Теперь ссылка открывается у всех.' },
      lostLink: { title: 'Потеряли ссылку?', text: 'Если ученик закрыл окно, не скопировав ссылку, её всегда можно найти снова: <b>Open on Sparks</b> (здесь или вверху редактора) открывает страницу проекта. Нажмите эту кнопку.' },
      done: { title: 'Страница проекта', text: 'Датапак открывается в профиле ученика в Спаркс. Ссылка — это адрес в строке браузера: ученик копирует его оттуда и вставляет в карточку.' }
    },
    finish: {
      kicker: '🏁 Симуляция пройдена',
      title: 'Вы знаете, как публикуется <span>датапак</span>',
      intro: 'Вот что ученики делают каждый раз, когда урок просит опубликовать законы:',
      points: ['Лончер: <b>Create → Data packs → Edit</b> → <b>Publish</b> (рядом с Save).', '«Publish to your profile»: название → <b>Who can see it? → Everyone</b> → Publish → <b>Copy link</b> → Done.', 'Вставить ссылку в карточку урока на платформе. Публикация и отправка ссылки — два разных шага.', 'Ссылка не открывается → опубликовать снова с <b>Everyone</b>. Ссылка потерялась → <b>Open on Sparks</b> и скопировать адрес из строки браузера.'],
      back: 'Вернитесь к обучению: проверка по модулю теперь открыта.',
      again: '↺ Пройти ещё раз'
    }
  }
};
