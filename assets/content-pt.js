/* ============================================================
   EM course training · Minecraft CraftForge (Beginner + Intermediate) [2230 · 2231] · PORTUGUESE (pt-BR)
   Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names, commands and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by region (see COURSE.code and the 'bo' section).
   ============================================================ */
window.COURSE = { lang: 'pt' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Formação de curso EM',
  footer: 'kodland · Novo Modelo Educacional · Formação de curso',
  devLink: '🛠 Developer',
  logoSub: 'Novo Modelo Educacional',
  navHome: '← Início',
  navBackModule: '← Voltar ao módulo',
  moduleN: 'Módulo {n}',
  badgeStart: 'Começar →',
  badgeLocked: '🔒 Conclua o Módulo {n}',
  badgeDone: '✓ Concluído · {score}%',
  progLabel: 'módulos concluídos',
  progAllDone: 'Módulos concluídos 🎉',
  eyebrow: '{course} · Módulo {n} de {total}',
  ctaTitle: 'Verificação do módulo',
  ctaText: '{n} perguntas curtas. Acerte 70% ou mais para passar.',
  lockSim: '🔒 Conclua a simulação de publicação no Kodland Sparks (acima) para liberar a verificação.',
  startCheck: 'Começar a verificação →',
  retake: '🔁 Refazer a verificação',
  qmeta: '{e} Verificação do Módulo {n} · Pergunta {i} de {total}',
  fbRight: '✅ <b>Correto!</b> ',
  fbWrong: '❌ <b>Não exatamente.</b> ',
  nextQuestion: 'Próxima pergunta →',
  seeResult: 'Ver meu resultado →',
  passedTitle: 'Você passou!',
  failTitle: 'Quase lá',
  scoreLine: 'Você acertou <b>{score} de {n}</b>.',
  failText: 'É preciso acertar 70% ou mais. Revise o módulo e tente de novo — você pode refazer quantas vezes precisar.',
  nextUnlocked: '<b>Módulo {n} · {title}</b> foi liberado.',
  goModule: 'Ir para o Módulo {n} →',
  allDoneText: 'Você concluiu todos os módulos desta formação.',
  seeNext: 'Ver o próximo passo →',
  reviewModule: '📖 Revisar o módulo',
  homeDoneTitle: 'Módulos concluídos!',
  homeDoneText: 'Falta um último passo: o teste DST na página da formação no LMS.',
  homeDoneBtn: 'Ver o que fazer agora →',
  doneBadge: '✓ Concluído',
  doneBack: 'Voltar aos módulos',
  lockedTitle: 'Ainda bloqueado',
  lockedModule: 'Conclua primeiro o Módulo {n}.',
  lockedStep: 'Conclua o passo anterior para liberar este.',
  ok: 'OK',
  linkOpen: 'Abrir ↗',
  projPlay: '▶ Abrir no Kodland Sparks ↗',
  simOpen: '▶ Abrir a simulação aqui',
  simClose: '✕ Fechar a simulação',
  simNewTab: 'Abrir em outra aba ↗',
  simDone: '✅ Simulação concluída',
  simTodo: '○ Simulação pendente',
  checkTag: 'Marque',
  mythTag: 'Mito',
  mythTap: 'Toque para ver a realidade →',
  mythReality: 'Realidade ✓',
  sortWrong: '✗ Não exatamente.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'mccf';
COURSE.code = '2230';
COURSE.title = 'Minecraft CraftForge';
COURSE.color = '#16A34A';

COURSE.home = {
  kicker: '🎓 Formação de curso · [2230 · 2231]',
  title: 'Minecraft <span class="hl">CraftForge</span>',
  lead: '<b>Beginner</b> — Para alunos de 8–9 anos: no Minecraft, eles deixam de ser jogadores e passam a ser criadores — com o próprio herói e a própria casa, mecanismos de Redstone e um robô Assistente programado em Lua. <b>Intermediate</b> — Para alunos de 10–12 anos: eles escrevem as leis do mundo do Minecraft com data packs e programas em Python que constroem pontes, torres e mundos inteiros. Quatro módulos: o conteúdo do curso Beginner e do Intermediate, as habilidades de que você precisa para o curso e a parte técnica das aulas.',
  facts: [
    ['🧑‍💻', '<b>No seu ritmo.</b> O progresso fica salvo neste navegador. Cada módulo termina com uma verificação curta.'],
    ['⚡', '<b>Prática incluída.</b> Uma simulação do Kodland Sparks para praticar a publicação de uma construção do Minecraft e a resolução do problema mais comum.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Antes de começar:</b> faça primeiro a <b>formação principal do Novo Modelo Educacional (EM)</b>. Esta formação do curso vem depois e baseia-se no que você já viu lá: o Backoffice e as Teacher Notes, o Classroom com o Follow Mode, o tour pelo Kodland Sparks e a qualidade da aula.' },
  { kind:'warn', e:'🔄', html:'<b>O conteúdo das aulas no Backoffice é atualizado continuamente.</b> A partir do feedback de alunos e tutores, as aulas passam por melhorias constantes. Não se preocupe: quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
];

/* ---------------- Modules ----------------
   Beginner course content → Intermediate course content → Skills for the course → technical side (+ final survey, added by shared/final-survey.js).
   The Skills module is drawn by assets/skills.js from COURSE.skills (end of this file). */
COURSE.modules = [
  { id:'beg', n:1, e:'⛏️', color:'#16A34A', title:'O conteúdo do curso · Beginner',
    desc:'Os dados gerais do curso, o que o aluno conquista e a primeira aula do Módulo 1.',
    obj:'Prepare-se para dar a primeira aula do Minecraft CraftForge Beginner. Nela, alunos de 8 a 9 anos criam a própria skin, publicam a skin no Kodland Sparks, entram no mundo do curso usando essa skin e começam a construir a própria casa.',
    offer:[['🧱','Conhecer os dados gerais do curso e o que o aluno conquista.'],['📖','Saber o que acontece na primeira aula.'],['⚡','Entender como o Sparks AI é usado.'],['📘','Revisar a primeira aula e as Teacher Notes dela no Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'O curso', blocks:[
        { t:'meta', items:[['🧒','Idade','8–9 anos'],['⏱️','Aula','60 min'],['📚','Programa','40 aulas · 10 módulos'],['🌙','Linguagem','Lua']] },
        { t:'trio', items:[
          ['🎬','Primeiro o resultado','Toda aula começa mostrando o resultado pronto e dizendo o que os alunos vão aprender. Depois você mostra o caminho na sua tela e guia a turma um passo por vez.'],
          ['🛠️','De jogador a criador','Num jogo, outra pessoa criou as regras. Aqui o aluno constrói, programa um robô, cria mecanismos — e mostra o resultado para os outros.'],
          ['🔍','O erro faz parte do processo','Quando algo não funciona: <i>O que eu vejo? Por que isso acontece? O que vou tentar? Funcionou?</i> Algumas aulas têm um erro planejado na sua tela para os alunos acharem a causa sozinhos.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Desde a Aula 1, os alunos publicam os trabalhos no <b>Kodland Sparks</b>, o portfólio deles. O <b>Sparks AI</b> sugere ideias e dá feedback, mas quem decide o que aproveitar é o aluno. Ele já vem nos cartões, então os alunos não precisam abrir o Sparks separadamente; normalmente, eles enviam um pedido por tarefa.' }
      ]},
      { id:'goals', e:'🎓', title:'Qual é o resultado para o aluno', blocks:[
        { t:'p', html:'Ao final do curso, o aluno vai alcançar estas conquistas:' },
        { t:'cards', cols:2, items:[
          ['🧱','Cria projetos','Mais de nove projetos no portfólio do Kodland Sparks, além de um projeto de conclusão: o próprio território, onde construções, mecanismos e programas funcionam juntos.'],
          ['🤖','Programa um robô em Lua','Comandos, argumentos, variáveis, laços, condições e funções próprias. O robô constrói, cava, desvia de obstáculos e cumpre missões — e o aluno aprende a dividir uma tarefa grande em passos.'],
          ['⚡','Cria mecanismos e lógica','A Redstone é a "eletricidade" do Minecraft: alavancas, fios, lâmpadas, portas, pistões e armadilhas. O aluno aprende a lógica "se... então" e vê o resultado na hora.'],
          ['🏰','Cria construções e jogos','Constrói com atenção à forma, à cor e à luz, e cria um minijogo com regras próprias para os colegas jogarem.'],
          ['💬','Fala do próprio trabalho com segurança','Explica como tudo funciona no fim de cada aula e apresenta o projeto de conclusão para a turma.'],
          ['🧠','Habilidades para a vida','Criatividade, trabalho em equipe (jogar o jogo dos colegas e dar feedback), comunicação e pensamento crítico: encontrar bugs e usar com bom senso as dicas do Sparks AI.']
        ]}
      ]},
      { id:'les', e:'📖', title:'A primeira aula', blocks:[
        { t:'p', html:'O Módulo 1, <b>"Primeiro Fogo. Meu mundo e os primeiros comandos"</b>, termina com o projeto <b>"Meu herói e minha casa"</b>. Abra a primeira aula e leia o que você precisa saber, o resultado-chave, o seu papel e os pontos de atenção.' },
        { t:'lessons', key:'beg', items:[
          { tab:'M1L1', e:'🔥', h:'Aula 1 — Primeiro Fogo', p:'A primeira aula do curso (7 cartões e tarefa de casa). Os alunos abrem o Kodland Launcher, conhecem a turma, desenham e publicam a própria skin no Kodland Sparks, vestem a skin para entrar no mundo e começam a construir a casa numa ilha.',
            acc:[['📚','O que você precisa saber','<ul><li>O roteiro: conexão e launcher → o que vem pela frente → skin no Kodland Sparks enquanto o Kodland Launcher baixa o jogo → vestir a skin, entrar no mundo e se teletransportar para a ilha → construir a casa → apresentação dos projetos → encerramento e tarefa de casa.</li><li>O <b>estúdio de skins</b> abre dentro do próprio cartão da aula (botão <b>Expand</b> para tela cheia). O aluno não precisa sair da aula para ir ao Kodland Sparks.</li><li>No Kodland Launcher: <b>Create → Skins → a própria skin → Wear</b>, depois <b>Play</b> com o código do mundo, e <b>F5</b> para se ver.</li><li>Os alunos constroem no <b>modo criativo</b>: paredes, uma entrada e uma placa com o apelido. O telhado fica para a tarefa de casa.</li></ul>'],
                 ['🎯','Resultado-chave','<ul><li>🏁 A skin está <b>publicada no Kodland Sparks e o link está na tarefa</b>. Todos chegam aqui por volta dos 29 min; este cartão nunca é encurtado.</li><li>Cada aluno entra no mundo com a própria skin e está na ilha.</li><li>A casa tem paredes, uma entrada e uma placa com o apelido.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Conheça a turma: fale de você, dê a palavra a todos e chame cada um pelo nome durante a aula toda.</li><li>Diga o objetivo da aula em voz alta: "Hoje cada um vai criar a própria skin, e o mundo vai reconhecer vocês".</li><li>Pergunte: "Qual é a diferença entre criar e só jogar?" — num jogo, outra pessoa criou as regras; aqui você cria e mostra para os outros.</li><li><b>Erro planejado, só na sua tela:</b> entre no mundo sem apertar <b>Wear</b> → você fica igual a todo mundo. Pergunte por quê e depois corrija. Assim os alunos já fazem certo.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>Na L1, é quase certo que o Kodland Launcher de alguém não vai abrir. A skin é desenhada no navegador, então o aluno continua trabalhando enquanto você resolve o Kodland Launcher durante o trabalho individual.</li><li>A tecla <b>Esc</b> não funciona dentro do estúdio em tela cheia: use o botão <b>Collapse</b>, na parte de cima.</li><li>O desenho pode não ter fim: "Do seu jeito, não precisa ficar perfeito. Dá para terminar em casa".</li><li>Confira no Backoffice se os links chegaram de verdade, não só se apareceram na tela.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Um dia antes, envie os links do launcher no chat do grupo e peça para os alunos instalarem com antecedência.</li><li>Faça você mesmo o caminho completo: skin no Kodland Sparks → publicar → Skins → Wear → entrar no mundo com o código → teletransporte para a ilha.</li><li>Código do mundo: <b>Welcome to CraftForge</b> (aba Play). O comando de teletransporte está nas Teacher Notes e no cartão.</li><li>Tarefa de casa: terminar a casa, tirar um print (<b>Win + Print Screen</b> no Windows, <b>Cmd + Shift + 4</b> no Mac), anexar o print ao <b>Sparks AI</b>, que já vem no cartão da tarefa, e enviar um pedido. Depois, enviar o print com uma frase sobre o que terminou e o que o Sparks sugeriu.</li></ul>']] },
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'A primeira Teacher Note de cada aula tem o plano completo: resumo, resultado-chave, os tempos de cada cartão, o seu papel e os pontos de atenção. A Aula 1 também tem um vídeo de preparação. <b>Leia todas as Teacher Notes antes da aula.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Revise a primeira aula no Backoffice', blocks:[
        { t:'p', html:'Antes da verificação, abra o curso no Backoffice e leia a primeira aula no seu ritmo — os cartões de atividade e as Teacher Notes estão todos lá. Não há tempo limite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2230', e:'📘', title:'Abrir o curso no Backoffice', small:'[2230] Minecraft CraftForge Beginner — as aulas e as Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'O conteúdo das aulas no Backoffice vai sendo atualizado com o feedback de alunos e tutores. Quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
      ]}
    ]},

  { id:'int', n:2, e:'📜', color:'#0EA5E9', title:'O conteúdo do curso · Intermediate',
    desc:'Os dados gerais do curso, o que o aluno conquista e a primeira aula do Módulo 1.',
    obj:'Prepare-se para dar a primeira aula do Minecraft CraftForge Intermediate. Nela, alunos de 10 a 12 anos criam a primeira lei para o mundo do Minecraft — uma receita num data pack —, testam essa lei no jogo e publicam no Kodland Sparks.',
    offer:[['🧱','Conhecer os dados gerais do curso e o que o aluno conquista.'],['📖','Saber o que acontece na primeira aula.'],['📦','Entender o que é um data pack e como os alunos trabalham com ele.'],['📘','Revisar a primeira aula e as Teacher Notes dela no Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'O curso', blocks:[
        { t:'meta', items:[['🧒','Idade','10–12 anos'],['⏱️','Aula','90 min'],['📚','Programa','40 aulas · 10 módulos'],['🐍','Linguagem','Python']] },
        { t:'trio', items:[
          ['🎬','Primeiro o resultado','Toda aula começa mostrando o resultado pronto e dizendo o objetivo em voz alta. Depois você mostra o caminho completo na sua tela e guia os alunos um passo por vez.'],
          ['📜','De jogador a criador','Normalmente o jogador segue as regras do mundo. Aqui o aluno escreve essas regras: receitas, drops, comandos e, depois, programas em Python que constroem.'],
          ['🔍','O erro faz parte do processo','Quando o mundo não responde: <i>O que eu vejo? Por que isso acontece? O que vou tentar? Funcionou?</i> As aulas têm verificações planejadas para os alunos acharem a causa sozinhos.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Em todas as aulas, os alunos publicam os trabalhos no <b>Kodland Sparks</b>, o portfólio deles. O <b>Sparks AI</b> sugere ideias e cenários de teste, mas quem decide o que aproveitar é o aluno.' }
      ]},
      { id:'goals', e:'🎓', title:'Qual é o resultado para o aluno', blocks:[
        { t:'p', html:'Ao final do curso, o aluno vai alcançar estas conquistas:' },
        { t:'cards', cols:2, items:[
          ['🧱','Cria projetos','Mais de nove projetos no portfólio do Kodland Sparks, além de um projeto autoral de conclusão.'],
          ['🐍','Python que constrói','Escreve programas em Python que fazem aparecer pontes, torres e padrões no mundo do jogo. Comandos, argumentos, variáveis, tipos de dados, laços, condições e funções viram ferramentas do dia a dia.'],
          ['📜','As regras do mundo','Com data packs, define as próprias leis do Minecraft: receitas, comandos personalizados, temporizadores, eventos e pontuação.'],
          ['🌍','Geradores e jogos','Escreve algoritmos que criam pedaços inteiros do mundo e faz minijogos para outras pessoas jogarem.'],
          ['🚀','Leva uma ideia até o Demo Day','Conduz um projeto da ideia até a apresentação para a turma e explica como o código funciona.'],
          ['🧠','Habilidades para a vida','Criatividade, trabalho em equipe (testar os projetos dos colegas), comunicação e pensamento crítico: encontrar bugs e avaliar as respostas do Sparks AI em vez de copiá-las.']
        ]}
      ]},
      { id:'les', e:'📖', title:'A primeira aula', blocks:[
        { t:'p', html:'O Módulo 1, <b>"O Código do Mundo. Primeiros programas e leis do mundo"</b>, termina com o projeto <b>"Monumento de Código"</b>. A primeira aula trata das <b>leis do mundo num data pack</b>. Abra a aula e leia o que você precisa saber, o resultado-chave, o seu papel e os pontos de atenção.' },
        { t:'lessons', key:'int', items:[
          { tab:'M1L1', e:'📜', h:'Aula 1 — A primeira marca no código do mundo', p:'A primeira aula do curso (8 cartões e tarefa de casa). Os alunos abrem o Kodland Launcher, conhecem a turma, testam o treinador de leis, entram no mundo pelo Nether, criam a primeira lei — uma receita — num data pack, testam e publicam no Kodland Sparks. Depois planejam uma base com o Sparks AI e a constroem.',
            acc:[['📚','O que você precisa saber','<ul><li>Um <b>data pack</b> é um conjunto de leis para o mundo. As leis são criadas fora do mundo, no estúdio do Kodland Launcher, e o mundo executa essas leis toda vez que você entra.</li><li>Tipos de leis: <b>receita</b>, <b>drop</b>, <b>comando</b> ao entrar, <b>conquista</b>. Hoje: uma receita.</li><li>Caminho: <b>Esc</b> e sair do mundo salvando → <b>Create → Data packs → Create data pack → Empty</b> → <b>Add → Recipe</b> → mesa de trabalho, itens, resultado → <b>Save</b>.</li><li>O código do mundo é digitado na aba <b>Play</b>. Os alunos constroem no modo criativo.</li></ul>'],
                 ['🎯','Resultado-chave','<ul><li>Todos salvaram um data pack com a própria receita por volta dos 45 min.</li><li>🏁 O data pack está <b>publicado no Kodland Sparks e o link está na tarefa</b> (cartão "Assine a lei", por volta de 1h). Este cartão nunca é encurtado.</li><li>O aluno deu um nome próprio ao item e fez o craft dele numa mesa de trabalho, no mundo.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Conheça a turma enquanto o jogo baixa; chame cada um pelo nome durante a aula toda.</li><li>Diga o objetivo em voz alta: "Hoje cada um vai criar a própria lei para o Minecraft, testar no jogo e publicar no portfólio".</li><li>Não dite receitas: as ideias devem ser diferentes — é isso que torna o projeto pessoal. Pergunte: "Por que este item? Quem vai precisar dele?"</li><li><b>Verificação planejada:</b> tire um item da mesa de trabalho → a recompensa some. Pergunte por quê e use as quatro perguntas. Elogie o aluno que encontra a causa, e não só quem acerta de primeira.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>O data pack não salva → uma das três partes do formulário está vazia.</li><li>A lei não funciona → foi salva com o mundo aberto: saia e entre de novo.</li><li>A receita não sai → os itens não estão na mesma disposição do formulário, ou o craft foi feito no inventário e não na mesa de trabalho.</li><li>O link não abre → em "Who can see it?" não estava <b>Everyone</b>: publique de novo.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Um dia antes, envie os links do Kodland Launcher no chat do grupo.</li><li>Faça você mesmo o caminho completo: código do mundo → margem → sair salvando → data pack com uma receita → voltar ao mundo → mesa de trabalho → recompensa → publicar no Kodland Sparks.</li><li>Código do mundo: <b>Welcome to KodlandCraft</b>.</li><li>Tarefa de casa: acrescentar mais uma lei (mudar a receita, uma receita nova, ou um comando/drop), testar, publicar a atualização e enviar o link.</li></ul>']] },
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'A primeira Teacher Note de cada aula tem o plano completo: resumo, resultado-chave, os tempos de cada cartão, o seu papel e os pontos de atenção. A Aula 1 também tem um vídeo de preparação. <b>Leia todas as Teacher Notes antes da aula.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Revise a primeira aula no Backoffice', blocks:[
        { t:'p', html:'Antes da verificação, abra o curso no Backoffice e leia a primeira aula no seu ritmo — os cartões de atividade e as Teacher Notes estão todos lá. Não há tempo limite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2231', e:'📘', title:'Abrir o curso no Backoffice', small:'[2231] Minecraft CraftForge Intermediate — as aulas e as Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'O conteúdo das aulas no Backoffice vai sendo atualizado com o feedback de alunos e tutores. Quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
      ]}
    ]},

  {
    id: 'skills',
    n: 3,
    e: '🧩',
    color: '#8B5CF6',
    title: 'Habilidades para o curso',
    desc: 'Imersão em Minecraft · Lógica de programação · Prática de programação em Python · Data packs: as leis do mundo',
    obj: 'As habilidades de que um tutor precisa neste curso, em quatro blocos: o mundo do Minecraft, a lógica de programação, a prática de Python e os data packs. Cada bloco termina com uma prática curta: você precisa de 70% para desbloquear o próximo.',
    offer: [
      ['🌍', 'Imersão em Minecraft'],
      ['🧠', 'Lógica de programação'],
      ['🐍', 'Prática de programação em Python'],
      ['📜', 'Data packs: as leis do mundo']
    ],
    sections: [
      {
        id: 'skx',
        e: '🧩',
        title: 'Habilidades para o curso',
        blocks: [
          { t:'skills' }
        ]
      }
    ]
  },

  { id:'tech', n:4, e:'⚙️', color:'#F03D9E', title:'A parte técnica das aulas',
    desc:'O Kodland Launcher, um início forte, a publicação no Kodland Sparks e os problemas mais comuns.',
    obj:'Saiba o que garante o sucesso técnico de uma aula do Minecraft CraftForge: o Kodland Launcher, a verificação do Kodland Launcher antes do conteúdo, os últimos minutos para publicar e mostrar os trabalhos, onde os alunos encontram o link do projeto e as soluções para os problemas mais comuns.',
    needs:['mcPublish','mcPublishDp'],
    offer:[['🟩','Baixar, instalar e entrar no Kodland Launcher.'],['🚀','Fazer a verificação do Kodland Launcher antes do conteúdo e começar pelo resultado.'],['📤','Garantir que todos os alunos publiquem no Kodland Sparks e enviem o link.'],['🛠️','Resolver os problemas mais comuns do launcher e do Minecraft.']],
    sections:[
      { id:'focus', e:'🎯', title:'Os 3 pontos que garantem o sucesso', blocks:[
        { t:'p', html:'Estes são os pontos de foco definidos pelo time de produto para os cursos de Minecraft. Abra cada um:' },
        { t:'acc', items:[
          ['🎬','Primeiro o resultado — e por que criar é diferente de jogar','<p>Nos primeiros minutos, <b>mostre o resultado pronto</b> e diga o que os alunos vão aprender hoje.</p><ul><li>Use o cartão de briefing: "Olhem o que vocês vão ter daqui a uma hora: o próprio crafter e a própria casa na ilha".</li><li>Explique por que construir um projeto <b>é diferente de só jogar</b>: num jogo, outra pessoa criou as regras; aqui o aluno cria e mostra para os outros.</li><li>Pergunte a um ou dois alunos: "Para você, qual é a diferença entre criar e só jogar?"</li></ul>'],
          ['🟩','A verificação do login e do launcher vem antes do conteúdo','<p>Faça a verificação da conexão e do launcher <b>antes</b> da parte de conteúdo, para o jogo baixar enquanto você conhece a turma.</p><ul><li>Conexão: um minuto — câmera, microfone, "Oi!".</li><li>Launcher: 2–3 minutos — envie os links, mostre o login na sua tela e peça um "+" no chat quando aparecer a barra verde.</li><li>Não espere o download terminar e não segure a turma por causa de um ou dois "-": volte a eles durante o trabalho individual.</li><li>A partir da L2: "Abram o Kodland Launcher e iniciem o mundo — deixem carregar enquanto a gente conversa".</li></ul>'],
          ['⏱️','Proteja os últimos 7–10 minutos','<p>Os últimos <b>7–10 minutos</b> são para publicar, mostrar os trabalhos e dar feedback — e não são cedidos para a construção.</p><ul><li>Use paradas firmes: aviso de dois minutos, depois "Parem, mãos fora do teclado. Hora da apresentação!", e chame logo o primeiro aluno pelo nome.</li><li>3 participantes mostram o trabalho; a turma dá um feedback específico: nome, o que funcionou, uma dica.</li><li>Termine com o encerramento, a reflexão, a próxima aula e a tarefa de casa — isso nunca é encurtado.</li></ul>']
        ]}
      ]},
      { id:'launcher', e:'🟩', title:'O Kodland Launcher', blocks:[
        { t:'p', html:'Os alunos abrem o Minecraft pelo <b>Kodland Launcher</b>: ele baixa o jogo, abre o mundo do curso e é onde eles criam e vestem as skins. Você precisa dele instalado e pronto no seu computador antes da primeira aula.' },
        { t:'callout', kind:'warn', e:'🔑', html:'<b>As suas credenciais:</b> você não precisa de nenhuma credencial para baixar o Kodland Launcher. Para entrar, você, como tutor, precisa das suas <b>credenciais do Kodland Sparks</b>, fornecidas pelo <b>departamento de Operações ou de Ensino</b>. Os alunos entram com a mesma conta que usam na plataforma Kodland — não precisam criar uma nova.' },
        { t:'link', href:'https://portfolio.kodland.org/launcher/download#guide', e:'⬇️', title:'Página de download e guia oficial', small:'portfolio.kodland.org/launcher/download — Windows e Mac' },
        { t:'cards', cols:2, items:[
          ['🪟','Windows 10 / 11','<ol><li>Baixe o instalador.</li><li>Abra o arquivo baixado.</li><li>Na tela azul de aviso, clique em <b>More info → Run anyway</b> e siga o instalador.</li></ol>'],
          ['🍎','macOS 13 ou mais recente','<ol><li>Baixe o arquivo do seu processador (Apple → <b>Sobre Este Mac</b>: M1–M4 = Apple Silicon; caso contrário, Intel).</li><li>Abra o arquivo baixado e arraste o <b>Kodland Launcher</b> para <b>Applications</b>. Não abra o launcher por essa janela.</li><li>Abra o <b>Terminal</b>, cole a linha abaixo e aperte Return. É normal não aparecer nenhuma resposta.</li><li>Abra o launcher em <b>Applications</b>.</li></ol>']
        ]},
        { t:'p', html:'<code>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</code>' },
        { t:'steps', items:[
          ['Entrar','Clique em <b>Sign in</b>. Abre uma página no navegador: clique em <b>Sign in with Kodland</b> e use as suas credenciais do Kodland Sparks (os alunos usam a conta da plataforma Kodland). Se o navegador não abrir, use o link abaixo do botão para receber um código curto (válido por 5 minutos).'],
          ['Baixar o jogo','O Kodland Launcher baixa o jogo em várias etapas. Deixe rodando.'],
          ['Jogar','Quando aparecer que está tudo pronto, aperte <b>Play</b>. A primeira abertura pode levar até um minuto. O código do mundo vai na aba <b>Play</b>.'],
          ['Atualizações','Se o Kodland Launcher não atualizar, instale a versão mais recente da página de download por cima da antiga. Os mundos e as skins continuam lá.']
        ]},
        { t:'acc', open:false, items:[
          ['⬇️','Links diretos de download (os mesmos do cartão da aula)','<ul><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-win-x64-setup.exe" target="_blank" rel="noopener">Windows</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-arm64.dmg" target="_blank" rel="noopener">Mac — Apple Silicon (M1–M4)</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-x64.dmg" target="_blank" rel="noopener">Mac — Intel</a></li></ul>']
        ]}
      ]},
      { id:'l1', e:'🧯', title:'Quando o Kodland Launcher de um aluno não funciona', blocks:[
        { t:'p', html:'Na Aula 1, é quase certo que o launcher de alguém não vai abrir. Tudo bem: <b>primeiro dê uma tarefa para os outros</b> e depois fale com o aluno. Peça o compartilhamento de tela e guie por voz: "O que você está vendo agora? Clique neste botão". Se não resolver em alguns minutos: "Acompanhe a minha tela por enquanto, já volto".' },
        { t:'acc', open:false, items:[
          ['📥','O arquivo não baixa','Envie de novo no chat o link do cartão e confira se o aluno escolheu o arquivo do sistema dele.'],
          ['🍎','O Mac não abre o Kodland Launcher','Rode a linha do Terminal do primeiro cartão e abra o Kodland Launcher de novo em <b>Applications</b>.'],
          ['🪟','O Windows pergunta se deve abrir o arquivo','<b>More info → Run anyway</b>.'],
          ['🔑','O aluno não consegue entrar','O mesmo login Kodland das aulas — sem conta nova. A janela de login abre no navegador e muitas vezes fica escondida atrás de outras janelas.'],
          ['⏳','O jogo demora para carregar ou o download para','O primeiro download é demorado, é normal. Se a barra parar: confira a internet, feche o Kodland Launcher e abra de novo — o download continua.'],
          ['🖌️','O Kodland Launcher não funcionou de jeito nenhum','Na Aula 1 o aluno ainda desenha e publica a skin no Kodland Sparks (no navegador), então chega ao resultado principal. No mundo, ele acompanha a sua tela. Depois da aula, ajude com a abertura do Kodland Launcher.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'Se vários alunos tiverem o mesmo erro, mostre a solução para todos de uma vez.' }
      ]},
      { id:'req', e:'💻', title:'Requisitos do computador', blocks:[
        { t:'p', html:'Isto é o que um aluno precisa para o Minecraft CraftForge. Serve quando um aluno tem problemas para instalar ou rodar o jogo:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Computador e sistema','Desktop ou notebook com <b>Windows 10/11 (64 bits)</b> ou <b>macOS 13 ou mais recente</b>. Mac com Apple Silicon (M1 ou mais novo) ou Intel — o cartão da aula tem um download para cada um.'],
          ['🧠','Memória e processador','<b>8 GB de RAM</b> com placa de vídeo dedicada, ou <b>12 GB</b> com placa de vídeo integrada. Processador de <b>4 núcleos</b>.'],
          ['🎮','Placa de vídeo e disco','Placa de vídeo com suporte a <b>Vulkan 1.3</b> e <b>2 GB</b> de memória de vídeo. <b>5 GB</b> livres em disco.'],
          ['🎧','Conexão e equipamento','Internet estável, que aguente videochamadas. Mouse de dois botões, teclado, fone com microfone e câmera.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Publicar no Kodland Sparks (Beginner)', blocks:[
        { t:'p', html:'A publicação é o principal resultado de muitas aulas: o aluno publica o trabalho no Kodland Sparks e cola o link no cartão da aula. No Módulo 1 há dois caminhos:' },
        { t:'cards', cols:2, items:[
          ['🎨','A skin (Aula 1)','Na Aula 1, o estúdio de skins está dentro do cartão: <b>Publish</b> → dar um nome à skin → <b>Publish</b> de novo. Um arquivo de skin também pode ser publicado pelo Kodland Sparks: <b>Publish project → Minecraft skin</b> → nome → <b>Model</b> (Steve ou Alex) → <b>Skin file</b> (PNG 64×64) → <b>Publish</b>.'],
          ['🖼️','Uma construção','Print da construção (F5, F1) → Kodland Sparks → <b>Publish project</b> → <b>Image</b> → nome → <b>Drawing</b>: fazer upload do print → <b>Publish</b>.']
        ]},
        { t:'steps', items:[
          ['Onde fica o link','O link é o endereço da página do projeto. O aluno vai em <b>My projects</b> no Kodland Sparks, abre o <b>projeto publicado</b> e copia o link da <b>barra de endereço do navegador</b>: <code>portfolio.kodland.org/apelido/…</code>.'],
          ['Colar no cartão da aula','Esse link é colado no cartão da aula na plataforma da Kodland (por exemplo, "Link da minha skin no Kodland Sparks").'],
          ['Escolher a visibilidade','<b>Public</b> aparece no Feed e no portfólio. <b>Friends only</b> é para amigos e professores. <b>Only me</b> deixa o projeto privado — ninguém mais consegue abrir o link, nem você.'],
          ['Dois passos diferentes','Vale lembrar: publicar no Kodland Sparks e enviar o link na plataforma são <b>dois passos diferentes</b>. Confira no Backoffice se os links chegaram de verdade.']
        ]},
        { t:'sim', flag:'mcPublish', src:'minecraft-publish/Minecraft_Publish.html?flow=image', e:'⚡', badge:'Simulação', title:'Publicar uma skin e uma construção no Kodland Sparks', text:'Uma réplica do Kodland Sparks e do cartão da aula: como aluno, você publica uma skin, encontra o link em My projects, cola o link no cartão da plataforma, publica o print de uma construção como projeto Image e resolve um link que não abre. Cerca de 5 minutos. A verificação do módulo é liberada quando você termina.' }
      ]},
      { id:'publishdp', e:'📤', title:'Publicar o data pack no Kodland Sparks (Intermediate)', blocks:[
        { t:'p', html:'O Kodland Sparks é o portfólio dos alunos: todos os projetos do curso ficam lá, e é lá que mora o <b>Sparks AI</b>. Os alunos voltam a ele em todas as aulas para publicar e pedir dicas. O data pack é publicado <b>pelo editor do Kodland Launcher</b>:' },
        { t:'steps', items:[
          ['Publish, ao lado de Save','No Kodland Launcher, <b>Create → Data packs → Edit</b> no data pack, depois <b>Publish</b>, ao lado do botão roxo <b>Save</b>.'],
          ['Nome e "Who can see it?" → Everyone','Em "Publish to your profile", o aluno escreve o nome e escolhe <b>Everyone</b>: só assim o link abre para os outros sem entrar na conta do aluno.'],
          ['Copy link','Quando aparecer "Published! It is on your profile.", o aluno clica em <b>Copy link</b>, depois em <b>Done</b>, e cola o link no cartão da aula na plataforma ("Link da minha lei no Kodland Sparks").'],
          ['Perdeu o link?','<b>Open on Sparks</b> (na janela ou no alto do editor) abre a página do projeto no perfil do aluno: o link é o endereço na barra do navegador.'],
          ['Dois passos diferentes','Vale lembrar: publicar no Kodland Sparks e enviar o link na plataforma são <b>dois passos diferentes</b>. Confira no Backoffice se os links chegaram de verdade.'],
          ['Cada atualização é publicada de novo','Quando o aluno acrescenta uma lei, ele salva, testa e publica a atualização de novo.']
        ]},
        { t:'sim', flag:'mcPublishDp', src:'minecraft-publish/Minecraft_Publish.html?flow=datapack&sim=mcPublishDp', e:'⚡', badge:'Simulação', title:'Publicar um data pack no Kodland Sparks', text:'Uma réplica do Kodland Launcher e do cartão da aula: como aluno, você publica um data pack, copia o link, cola no cartão da plataforma, resolve um link que não abre e encontra um link que não foi copiado. Cerca de 4 minutos. A verificação do módulo é liberada quando você termina.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Quando algo dá errado', blocks:[
        { t:'acc', open:false, items:[
          ['🎨','A skin não aparece em Skins','Confira se a skin está publicada no Kodland Sparks e se o launcher usa a mesma conta. Feche e abra de novo a seção <b>Skins</b>.'],
          ['👕','O aluno apertou Wear com o jogo aberto','O launcher avisa que a skin vai aparecer quando o jogo for reiniciado: é só sair do mundo e entrar de novo com <b>Play</b> — isso reinicia o jogo.'],
          ['📍','O teletransporte não funcionou','Peça o compartilhamento de tela: em geral o comando está incompleto ou falta o sinal de menos antes do último número.'],
          ['⛶','O aluno não consegue sair do estúdio em tela cheia','Clique em <b>Collapse</b>, na parte de cima do estúdio — a tecla <b>Esc</b> não funciona lá dentro.'],
          ['🔒','O link do aluno não abre','Provavelmente o projeto foi salvo como <b>Only me</b> (aparece a etiqueta <b>Private project</b>). Peça ao aluno: <b>My projects → abrir o projeto → Edit → Public → Publish</b>. O link continua o mesmo.'],
          ['🖼️','O aluno não encontra o print','O aluno tira o print com <b>Win + Print Screen</b> no Windows (fica salvo em <b>Imagens → Capturas de tela</b>) e com <b>Cmd + Shift + 4</b> no Mac (fica salvo na área de trabalho). Se não encontrar agora, o aluno anexa depois, em casa.'],
          ['💾','O data pack não salva','Confira se as três partes do formulário estão preenchidas: onde o item é feito, o que entra e o que sai.'],
          ['🔁','A lei não funciona depois de uma edição','Clique em <b>Save</b>, saia do mundo e entre de novo — as leis são aplicadas quando você entra.'],
          ['🧩','A receita não sai','Os itens não estão na mesma disposição do formulário, ou o aluno está fazendo o craft no inventário e não na mesa de trabalho.'],
          ['🔗','O aluno fechou a janela sem copiar o link','Clique em <b>Open on Sparks</b>, no alto do editor do data pack: a página do projeto abre, e o link é o endereço na barra do navegador.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist técnico de cada aula', blocks:[
        { t:'check', title:'✅ Meu checklist técnico', groups:[
          { h:'☑️ Antes da aula', items:['Li todas as Teacher Notes da aula e, para a Aula 1, vi o vídeo de preparação.','O meu launcher está instalado e com login feito, e eu mesmo fiz o caminho da aula.','Antes da Aula 1, enviei os links do launcher no chat do grupo.'] },
          { h:'🎬 Durante a aula', items:['Fiz a verificação da conexão e do launcher antes do conteúdo.','Mostrei o resultado pronto e o objetivo da aula nos primeiros minutos.'] },
          { h:'📤 No fim da aula', items:['Protegi os últimos 7–10 minutos para publicar, mostrar os trabalhos e dar feedback.','Todos enviaram o link do projeto publicado no cartão da aula.','Abri alguns links para conferir se estão funcionando.'] }
        ]}
      ]},
      { id:'videos', e:'🎬', title:'Aulas de exemplo com um excelente autoQA', blocks:[
        { t:'p', html:'Veja como é uma aula com um excelente autoQA: a dinâmica da aula, a estrutura e a forma como o tutor conduz o grupo.' },
        { t:'videos', items:[
  ['Módulo 1 · Aula 1', '1s4yfZS34Ep_Eddjzw2wSbp7-NZ7GygVq'],
  ['Módulo 1 · Aula 2', '1xHd6jPqfLenELQQJSFT8XO3DLd43JfeE'],
  ['Módulo 1 · Aula 3', '1U6CSV8d0H-fcgCrvHfpS1nZ8grhbWGbb']
] },
        { t:'callout', kind:'warn', e:'🔄', html:'<b>Observação:</b> o conteúdo destas aulas pode ser diferente do que você verá no Backoffice, porque as aulas vêm sendo atualizadas. Mesmo assim, a dinâmica da aula, a estrutura e a qualidade devem se manter: são bons exemplos para se inspirar nas suas aulas.' }
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ----------------
   The Skills module has no separate check: its four blocks end with their own practice checks (COURSE.skills). */
COURSE.quiz = {
  beg:[
    { q:'Para quem é o Minecraft CraftForge Beginner e quanto dura cada aula?',
      o:['Para alunos de 8–9 anos, com aulas de 60 minutos em grupo.','Para alunos de 10–12 anos, com aulas de 90 minutos.','Para alunos de 13–17 anos, com aulas de 90 minutos.'],
      a:0, e:'O Beginner é para alunos de 8–9 anos: 40 aulas de 60 minutos em grupo.' },
    { q:'Em qual linguagem de programação os alunos programam o robô Assistente?',
      o:['Python.','Blocos do Scratch.','Lua.'],
      a:2, e:'O robô Assistente é programado em Lua: comandos, argumentos, variáveis, laços, condições e funções.' },
    { q:'Como começa uma aula?',
      o:['Com teoria sobre redstone antes de alguém entrar no mundo.','Mostrando o resultado pronto, dizendo o objetivo e explicando por que criar é diferente de só jogar.','Os alunos começam a construir na hora, sem ver um exemplo.'],
      a:1, e:'Primeiro o resultado: os alunos veem aonde vão chegar e por que criar é diferente de jogar.' },
    { q:'O que o aluno leva do curso, no fim?',
      o:['Uma prova final escrita.','Mais de nove projetos no portfólio do Kodland Sparks e um projeto de conclusão — o próprio território, apresentado para a turma.','Só a casa da Aula 1.'],
      a:1, e:'Mais de nove projetos no portfólio e um projeto de conclusão em que construções, mecanismos e programas funcionam juntos.' },
    { q:'Qual é o papel do Sparks AI nas aulas?',
      o:['Faz o projeto no lugar do aluno.','Sugere ideias e dá feedback; o aluno decide o que aproveitar.','Avalia a aula no lugar do tutor.'],
      a:1, e:'O Sparks sugere, o aluno decide — em geral, um pedido por aula.' }
  ],
  int:[
    { q:'Para quem é o Minecraft CraftForge Intermediate e quanto dura cada aula?',
      o:['Para alunos de 8–9 anos, com aulas de 60 minutos.','Para alunos de 10–12 anos, com aulas de 90 minutos em grupo.','Para alunos de 13–17 anos, com aulas de 60 minutos.'],
      a:1, e:'O Intermediate é para alunos de 10–12 anos: 40 aulas de 90 minutos em grupo.' },
    { q:'Qual linguagem de programação os alunos usam no curso?',
      o:['Python.','Lua.','JavaScript.'],
      a:0, e:'Os alunos escrevem programas em Python que constroem no mundo do Minecraft.' },
    { q:'O que é um data pack neste curso?',
      o:['Um arquivo com prints das construções do aluno.','Um conjunto de leis para o mundo (receitas, drops, comandos…) que o Minecraft executa toda vez que você entra.','Um pacote de mundos prontos para baixar.'],
      a:1, e:'Um data pack é um conjunto de leis: o mundo executa essas leis toda vez que o aluno entra.' },
    { q:'O que o aluno leva do curso, no fim?',
      o:['Uma prova final escrita.','Mais de nove projetos no portfólio do Kodland Sparks e um projeto autoral de conclusão apresentado no Demo Day.','Só o data pack da Aula 1.'],
      a:1, e:'Mais de nove projetos no portfólio e um projeto autoral, levado da ideia até o Demo Day.' },
    { q:'Como os alunos devem usar o Sparks AI?',
      o:['Copiar as respostas do jeito que vêm.','Avaliar as sugestões e decidir o que aproveitar.','Nunca usar.'],
      a:1, e:'O Sparks sugere ideias e cenários de teste; o aluno avalia em vez de copiar.' }
  ],
  skills:[],
  tech:[
    { q:'Quando você faz a verificação da conexão e do launcher?',
      o:['No começo da aula, antes do conteúdo, para o jogo baixar enquanto você conhece a turma.','No meio da aula, quando os alunos precisam do Minecraft.','No fim, para não tirar tempo da aula.'],
      a:0, e:'Antes do conteúdo: o jogo baixa enquanto você conhece a turma.' },
    { q:'Quais credenciais você, como tutor, usa para entrar no Kodland Launcher?',
      o:['Uma conta nova que você mesmo cria.','As mesmas credenciais do Kodland Sparks, fornecidas pelo departamento de Operações ou de Ensino.','A conta de um aluno.'],
      a:1, e:'Não é preciso nenhuma credencial para baixar o launcher. Para entrar, você usa as suas credenciais do Kodland Sparks, fornecidas pelo departamento de Operações ou de Ensino.' },
    { q:'Onde o aluno encontra o link para enviar no cartão da aula?',
      o:['Num comentário embaixo do projeto.','No Sparks: My projects → abrir o projeto publicado → copiar o endereço da barra do navegador.','No launcher, na aba Play.'],
      a:1, e:'O link é o endereço da página do projeto: My projects → o projeto publicado → a barra do navegador.' },
    { q:'Para que servem os últimos 7–10 minutos da aula?',
      o:['Mais tempo de construção.','Publicar, mostrar os trabalhos e dar feedback — além do encerramento e da tarefa de casa.','Jogo livre.'],
      a:1, e:'Proteja os últimos minutos: publicação, apresentação com feedback e encerramento.' },
    { ctx:'Na Aula 1, o launcher de um aluno não abre, e o resto da turma está pronto.',
      q:'O que você faz?',
      o:['Para a aula até o launcher funcionar.','Segue com a turma — a skin é desenhada no Sparks, no navegador — e ajuda o aluno durante o trabalho individual.','Pede ao aluno que tente de novo em casa e pule a aula.'],
      a:1, e:'Um problema não deve parar a turma: o aluno ainda desenha e publica a skin, e você resolve o Kodland Launcher durante o trabalho individual.' },
    { q:'Onde o aluno pega o link do data pack publicado?',
      o:['Num comentário no launcher.','Em "Publish to your profile": Copy link (ou Open on Sparks e copiar o endereço da barra do navegador).','Na aba Play do launcher.'],
      a:1, e:'Copy link logo depois de publicar; se o link se perdeu, Open on Sparks mostra a página do projeto, e o endereço dela é o link.' },
    { ctx:'Um aluno publicou o data pack, mas o link não abre para você.',
      q:'Qual é a causa mais provável, e a solução?',
      o:['Em "Who can see it?" não estava Everyone: publicar de novo com Everyone.','O data pack está quebrado: criar um novo do zero.','Os links só abrem no dia seguinte.'],
      a:0, e:'Só com Everyone o link abre sem entrar na conta. Publicar de novo com Everyone resolve.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Último passo: volte ao LMS e faça o DST',
  html: `<p>Você está quase lá! Volte à página da formação no LMS, onde você acessou esta formação. O teste DST está logo abaixo da formação.</p>
    <p>👉 <b>Você precisa fazer e passar no teste DST para que a formação seja considerada concluída.</b> Se você não fizer o DST, a formação vai continuar incompleta e pode expirar.</p>
    <p>A nota mínima para passar é <b>80%</b>.</p>
    <p>Boa sorte! ❤️</p>`,
  nexts: [
    ['📒', '<b>Antes de cada aula:</b> leia as Teacher Notes no Backoffice e faça o caminho da aula no launcher.'],
    ['🟩', '<b>Primeiros minutos:</b> verificação da conexão e do launcher, depois o resultado pronto e o objetivo.'],
    ['🔗', '<b>O link:</b> My projects → o projeto publicado → o endereço na barra do navegador.'],
    ['⏱️', '<b>Últimos 7–10 minutos:</b> publicar, mostrar os trabalhos e dar feedback.']
  ]
};

/* ---------------- Skills for the course ----------------
   Four blocks (Minecraft world, programming logic, Python practice, data packs). Texts come from the proofread
   CraftForge Tutor Training. In each quiz 'c' = number of the correct option (0 = first). Never translate code. */
COURSE.skills = {
  mod: 'skills',
  ui: {
    step_self: 'Avance passo a passo',
    prev: 'Voltar',
    next: 'Próximo passo',
    stepn: 'Passo {s} de {n}',
    check_intro: 'Responda todas as perguntas — você precisa de 70% para desbloquear a próxima etapa. Em cada pergunta, vale a sua primeira resposta.',
    correct: 'Correto!',
    notquite: 'Não exatamente.',
    score: 'Pontuação: {p}% — são necessários 70%',
    retry: 'Tentar de novo',
    unlocked: 'Você desbloqueou a próxima etapa.',
    review_msg: 'Revise as seções acima e tente a verificação de novo.',
    nextBlock: 'Próximo bloco →',
    lockedBlock: '🔒 Seja aprovado no bloco anterior para desbloquear este.',
    ctaTitle: 'Seja aprovado nos quatro blocos',
    ctaText: 'Cada bloco termina com uma prática curta: você precisa de 70% em cada um. Quando for aprovado nos quatro, o módulo estará concluído.',
    progress: '{n} de {t} blocos aprovados',
    ctaDone: 'Módulo concluído: {p}%',
    goNext: 'Ir para o Módulo {n} →',
    practice: 'Prática do bloco',
    blockOf: 'Bloco {n} de {t}',
    passedBlock: 'Bloco aprovado: {p}%'
  },
  blocks: [
    {
      id: 'world',
      ic: '🌍',
      slot: 'Mundo',
      title: 'Imersão em Minecraft',
      sections: [
        {
          t: 'Minecraft básico para tutores (habilidades técnicas)',
          html: '<div class="card class"><p>O Minecraft é um mundo feito de cubos chamados <strong>blocos</strong>. Dá para quebrar, coletar e colocar blocos para construir qualquer coisa. As crianças conhecem muito bem esse mundo; você precisa saber o suficiente para se mover, construir e acompanhar o que elas fazem.</p></div><div class="tbl"><table><tbody><tr><th>Tecla / ação</th><th>O que faz</th></tr><tr><td><code>W A S D</code></td><td>Andar para frente, esquerda, trás, direita</td></tr><tr><td>Mouse</td><td>Olhar em volta</td></tr><tr><td><code>Espaço</code></td><td>Pular. No modo Criativo, aperte duas vezes para voar; segure para subir</td></tr><tr><td><code>Shift</code></td><td>Agachar: você não cai das beiradas. Voando, descer</td></tr><tr><td>Clique esquerdo</td><td>Quebrar um bloco / bater</td></tr><tr><td>Clique direito</td><td>Colocar um bloco / usar (abrir uma porta, apertar um botão, puxar uma alavanca)</td></tr><tr><td><code>1</code>–<code>9</code> ou rodinha do mouse</td><td>Escolher um item da barra rápida (a barra de baixo)</td></tr><tr><td><code>E</code></td><td>Abrir o inventário</td></tr><tr><td><code>T</code> ou <code>/</code></td><td>Abrir o chat / começar a digitar um comando</td></tr><tr><td><code>F3</code></td><td>Ver as coordenadas e informações técnicas</td></tr><tr><td><code>F5</code></td><td>Mudar a visão da câmera</td></tr><tr><td><code>Esc</code></td><td>Menu de pausa e configurações</td></tr></tbody></table></div><div class="cols"><div class="card class"><h4>Modos de jogo</h4><ul><li><strong>Criativo</strong>: blocos infinitos, dá para voar e nada te machuca. Ótimo para construir.</li><li><strong>Sobrevivência</strong>: você coleta recursos, tem vida e fome, e à noite os monstros atacam.</li></ul></div><div class="card class"><h4>Palavras que as crianças usam</h4><ul><li><strong>Mob</strong>: qualquer criatura (uma vaca, um zumbi, um Creeper).</li><li><strong>Spawn</strong>: o lugar onde você aparece.</li><li><strong>Bioma</strong>: um tipo de terreno (deserto, floresta, neve).</li><li><strong>Skin</strong>: a aparência do seu personagem. Steve e Alex são os padrões.</li></ul></div></div>'
        },
        {
          t: '1.1 · A cultura que as crianças trazem',
          html: '<div class="card why"><p>Minecraft tem suas próprias lendas, memes, histórias de terror e piadas internas, e as crianças conhecem bem. Você não precisa ser um jogador expert, mas precisa estar “por dentro”. O caminho mais rápido é um vídeo de <strong>“Minecraft Iceberg”</strong>: fatos escondidos, mitos, conteúdo cortado e lendas, do mais conhecido no topo ao mais obscuro no fundo.</p></div><div class="vid"><iframe src="https://www.youtube.com/embed/AChmq4QfbK0" title="Minecraft Iceberg video" loading="lazy" allowfullscreen=""></iframe></div><div class="tbl"><table><tbody><tr><th>Nome</th><th>O que é</th></tr><tr><td><strong>Herobrine</strong></td><td>A lenda mais famosa de Minecraft: uma figura de olhos brancos que supostamente assombra os mundos. Ele nunca esteve no jogo — por anos, as notas de atualização da Mojang diziam de brincadeira “Herobrine removido”.</td></tr><tr><td><strong>Entity 303</strong></td><td>Outra lenda de terror criada por fãs, sobre uma entidade vingativa com cara de hacker. As crianças adoram perguntar sobre ela — saber o nome já rende um sorriso.</td></tr><tr><td><strong>Notch</strong></td><td>Markus Persson, o criador original do Minecraft.</td></tr><tr><td><strong>A origem do Creeper</strong></td><td>Uma história bem conhecida: ele começou como um modelo de porco que deu errado, com a altura e o comprimento trocados.</td></tr><tr><td><strong>As Terras Distantes (Far Lands)</strong></td><td>Uma falha de terreno em versões antigas do Java, a milhões de blocos do spawn, onde o mundo se quebrava em paredes estranhas.</td></tr><tr><td><strong>Steve e Alex</strong></td><td>Os personagens padrão do jogador.</td></tr></tbody></table></div><div class="card class"><p><strong>Em aula:</strong> um rápido “Sim, eu sei quem é a Entity 303 😉” cria confiança em segundos. Depois traga a conversa de volta para a construção.</p></div>'
        },
        {
          t: '1.2 · Coordenadas: X, Y e Z',
          html: '<div class="tbl"><table><tbody><tr><th>Eixo</th><th>Direção</th><th>Muda quando o jogador…</th></tr><tr><td><strong>X</strong></td><td>Leste ↔ Oeste</td><td>anda para leste ou oeste</td></tr><tr><td><strong>Y</strong></td><td>Cima ↕ Baixo (altura)</td><td>pula, sobe, cai, cava para baixo, constrói uma torre</td></tr><tr><td><strong>Z</strong></td><td>Sul ↔ Norte</td><td>anda para norte ou sul</td></tr></tbody></table></div><div class="card "><p>X e Z são a posição no chão; <strong>Y é a altura</strong>. Qualquer movimento vertical — até um único pulo — muda Y enquanto dura. Para ver as coordenadas: <code>F3</code> na Java Edition, ou ative “Mostrar coordenadas” nas configurações do mundo no Bedrock. O teletransporte usa a mesma ordem: <code>/tp X Y Z</code>.</p></div><div class="card tip"><p><strong>Truque para lembrar:</strong> Y é o que “sobe” nos gráficos da escola — no Minecraft também é o que sobe.</p></div>'
        },
        {
          t: '1.3 · Mobs que todo tutor deve reconhecer',
          html: '<div class="tbl"><table><tbody><tr><th>Mob</th><th>O que saber</th></tr><tr><td><strong>Creeper</strong></td><td>Chega em silêncio e <strong>chia quando o pavio acende — está prestes a explodir</strong> (cerca de 1,5 segundo). Sair do alcance pode cancelar o pavio. Se um raio cai perto dele, vira um <strong>Creeper carregado</strong>, com uma explosão bem maior.</td></tr><tr><td><strong>Zumbi / Esqueleto</strong></td><td>Aparecem no escuro; queimam à luz do dia, a menos que estejam na sombra ou usando capacete. Esqueletos atiram flechas de longe.</td></tr><tr><td><strong>Aranha</strong></td><td>Escala paredes — uma árvore ou um pilar não te protegem. Neutra na luz forte, hostil no escuro.</td></tr><tr><td><strong>Enderman</strong></td><td>Neutro até você olhar para o rosto dele. Aí ele se teletransporta e ataca.</td></tr><tr><td><strong>Phantom</strong></td><td>Aparece no céu se o jogador não dorme há três ou mais dias do jogo.</td></tr></tbody></table></div>'
        },
        {
          t: '1.4 · Sobrevivendo à primeira noite',
          html: '<div class="card "><p>Mobs hostis aparecem na <strong>escuridão</strong>. Na primeira noite do Sobrevivência, sem cama e sem equipamento, o plano mais seguro é simples: <strong>construir um pequeno abrigo fechado e iluminá-lo por dentro</strong>. As paredes mantêm os mobs fora; a luz de dentro impede que eles apareçam ao seu lado. Cavar num morro e bloquear a entrada funciona bem.</p></div><div class="tbl"><table><tbody><tr><th>Ideia tentadora</th><th>Por que falha</th></tr><tr><td>Segurar uma tocha na mão</td><td>No jogo padrão, uma tocha na mão não ilumina a área nem impede que mobs apareçam ao seu redor.</td></tr><tr><td>Esperar no alto de uma árvore</td><td>Aranhas escalam, esqueletos atiram de baixo e cair machuca.</td></tr><tr><td>Explorar desviando dos mobs</td><td>O escuro é justamente onde eles aparecem — cada vez mais à medida que a noite avança.</td></tr></tbody></table></div><div class="card tip"><p>Uma <strong>cama</strong> permite pular a noite e também define seu ponto de renascimento pessoal. Você vai precisar disso no 1.6.</p></div>'
        },
        {
          t: '1.5 · Ferramentas, níveis e qual picareta minera o quê',
          html: '<div class="card "><p>As picaretas sobem por níveis: <strong>Madeira → Pedra → Ferro → Diamante → Netherita</strong>. <strong>O ouro é a armadilha:</strong> minera muito rápido, mas seu nível é tão baixo quanto o da madeira. Se o nível for baixo demais, o bloco quebra mesmo assim — mas não solta nada.</p></div><div class="tbl"><table><tbody><tr><th>Picareta</th><th>Nível mais baixo que consegue minerar…</th></tr><tr><td>Madeira / Ouro</td><td>Pedra, minério de carvão</td></tr><tr><td>Pedra</td><td>Minério de ferro, de cobre, de lápis-lazúli</td></tr><tr><td>Ferro</td><td><strong>Minério de diamante</strong>, de ouro, de redstone, de esmeralda</td></tr><tr><td>Diamante</td><td>Obsidiana, detritos ancestrais</td></tr></tbody></table></div><div class="card class"><p><strong>Em aula:</strong> “Minha picareta quebrou o diamante e não saiu nada!” é uma pergunta real de aluno. Agora você sabe a resposta: o nível era baixo demais.</p></div>'
        },
        {
          t: '1.6 · Pontos de spawn, camas e bússolas',
          html: '<div class="cols"><div class="card "><h4>Spawn do mundo</h4><p>O ponto onde todo jogador aparece pela primeira vez num mundo novo. Nunca muda, a menos que alguém o altere com um comando.</p></div><div class="card "><h4>Ponto de renascimento pessoal</h4><p>Definido ao dormir numa cama (ou usando uma âncora de renascimento no Nether). Você volta para cá depois de morrer.</p></div></div><div class="tbl"><table><tbody><tr><th>Item</th><th>Aponta para</th></tr><tr><td><strong>Bússola comum</strong></td><td>O <strong>spawn do mundo</strong> — não a cama, nem o norte. Ela gira sem parar no Nether e no End.</td></tr><tr><td>Bússola de recuperação</td><td>O lugar onde o jogador morreu pela última vez.</td></tr><tr><td>Bússola de magnetita</td><td>A magnetita à qual foi ligada. É assim que os jogadores fazem uma bússola que aponta para a base.</td></tr></tbody></table></div><div class="card warn"><p><strong>Confusão comum:</strong> definir uma cama nova muda onde você <em>renasce</em>, mas a bússola comum continua apontando para o spawn original do mundo.</p></div>'
        }
      ],
      quiz: [
        {
          p: 'Um jogador cava em linha reta para baixo 10 blocos. Qual coordenada muda?',
          o: ['X', 'Y', 'Z', 'Nenhuma'],
          c: 1,
          f: 'Y é a altura. Cavar para baixo, pular, subir ou construir para cima mudam Y.'
        },
        {
          p: 'Qual é a picareta de nível mais baixo que consegue minerar minério de ferro e realmente obter o minério?',
          o: ['De madeira', 'De pedra', 'De ouro', 'Qualquer picareta serve'],
          c: 1,
          f: 'Pedra basta para o ferro. O ouro é rápido, mas tem o mesmo nível baixo da madeira.'
        },
        {
          p: 'Um Creeper começa a chiar bem atrás de um jogador. Qual é a melhor reação?',
          o: ['Atacar na hora — o chiado significa que ele está fraco', 'Ficar parado para ele perder o interesse', 'Correr para longe — o pavio está aceso e sair do alcance pode cancelá-lo', 'Colocar uma tocha ao lado dele'],
          c: 2,
          f: 'O chiado significa que o pavio está aceso e ele está prestes a explodir. Sair do alcance é a jogada.'
        },
        {
          p: 'Por que um abrigo para a primeira noite precisa de luz por dentro, e não só de paredes?',
          o: ['A luz deixa as paredes mais fortes', 'Mobs hostis aparecem no escuro — a luz impede que apareçam lá dentro com você', 'Tochas curam o jogador', 'A luz de fora atrai os mobs'],
          c: 1,
          f: 'As paredes mantêm os mobs fora; a luz impede que novos mobs apareçam no espaço escuro com você.'
        },
        {
          p: 'Um jogador quer uma bússola que sempre aponte para a base. Do que ele precisa?',
          o: ['Dormir numa cama na base — a bússola vai seguir', 'Usar a bússola numa magnetita colocada na base', 'Uma bússola comum já aponta para a última cama', 'Uma bússola de recuperação'],
          c: 1,
          f: 'A bússola comum aponta para o spawn do mundo. Ligá-la a uma magnetita faz com que aponte para essa magnetita.'
        },
        {
          p: 'Um aluno diz: “O Herobrine está no meu mundo!” Quem é Herobrine?',
          o: ['Um chefe adicionado na atualização do Nether', 'Uma lenda de fãs que nunca esteve no jogo — a Mojang até brincou com “Herobrine removido” nas notas de atualização', 'O desenvolvedor que criou o Creeper', 'Outro nome do Enderman'],
          c: 1,
          f: 'Herobrine é uma lenda. Conhecer a piada ajuda você a se conectar com os alunos num segundo.'
        },
        {
          p: 'Como um Creeper comum vira um Creeper carregado?',
          o: ['Explodindo duas vezes', 'Quando um raio cai perto dele', 'Quando está na água', 'Quando um jogador dá um nome a ele'],
          c: 1,
          f: 'Um raio por perto o carrega, deixando a explosão muito maior.'
        }
      ]
    },
    {
      id: 'logic',
      ic: '🧠',
      slot: 'Lógica',
      title: 'Lógica de programação',
      sections: [
        {
          t: '2.1 · Lógica de programação',
          html: '<div class="card why"><p>Programar não significa apenas conhecer a sintaxe de uma linguagem. Antes de tudo, é saber pensar de forma sequencial, identificar padrões, dividir uma tarefa em etapas e compreender por que um algoritmo funciona da maneira como funciona.</p><p>Durante as aulas, os alunos farão perguntas, cometerão erros, proporão soluções inesperadas e, às vezes, escreverão códigos de maneiras completamente diferentes do que foi planejado. Para ajudá-los, é importante não apenas saber qual comando usar, mas também compreender a lógica por trás do programa.</p><p>Neste bloco, você não precisa conhecer uma linguagem de programação específica. Queremos avaliar o quanto você se sente à vontade para trabalhar com algoritmos, condições, loops e sequências de ações.</p></div><div class="card "><h4>O método da tabela de rastreamento</h4><ol><li>Escreva <strong>cada variável</strong> como uma coluna, com seu valor inicial.</li><li>Faça <strong>um passo de cada vez</strong>, na ordem em que as regras estão escritas.</li><li>Toda condição é verificada com o valor <strong>atual</strong> — o que você acabou de escrever, não o antigo.</li><li>Conte as repetições. “Repetir 4 vezes” significa quatro linhas, nem três, nem cinco.</li></ol></div><div class="tracer" data-tr="robot"></div>'
        },
        {
          t: '2.2 · Transformando regras em condições',
          html: '<div class="card "><p>Perguntas com regras ficam mais fáceis quando você lista <strong>todos os casos possíveis</strong> e verifica cada um. Exemplo de regras:</p><ul><li>Para entrar na sala do portal, o jogador precisa de <strong>sílex ou uma carga de fogo</strong>.</li><li>Se tiver <strong>os dois</strong>, também precisa usar armadura de ouro.</li><li>Se tiver <strong>só um</strong>, não precisa de armadura.</li></ul></div><div class="tbl"><table><tbody><tr><th>Sílex</th><th>Carga de fogo</th><th>Armadura de ouro</th><th>Pode entrar?</th></tr><tr><td>✔</td><td>✘</td><td>—</td><td>Sim (só um item, sem regra extra)</td></tr><tr><td>✘</td><td>✔</td><td>—</td><td>Sim</td></tr><tr><td>✔</td><td>✔</td><td>✔</td><td>Sim</td></tr><tr><td>✔</td><td>✔</td><td>✘</td><td><strong>Não</strong> — o caso “os dois” acrescenta um requisito</td></tr><tr><td>✘</td><td>✘</td><td>—</td><td><strong>Não</strong> — a primeira regra falha</td></tr></tbody></table></div><div class="card warn"><p><strong>Cuidado com detalhes que não importam.</strong> Se as regras dizem que não há requisito extra para quem tem um só item, ter armadura ou uma senha errada é irrelevante para esse jogador. As perguntas costumam incluir esses detalhes para ver se você aplica as regras com exatidão.</p></div>'
        },
        {
          t: '2.3 · Laços com uma condição dentro',
          html: '<div class="card "><p>Quando cada rodada tem dois passos — “mudar o valor, depois verificar uma condição” — a verificação usa o valor <strong>depois</strong> da mudança. E, uma vez ultrapassado um limite, a condição geralmente continua verdadeira em todas as rodadas seguintes.</p></div><div class="tracer" data-tr="coins"></div><div class="card warn"><h4>Os dois erros clássicos</h4><ul><li>Verificar a condição com o valor de <em>antes</em> da mudança.</li><li>Aplicar a condição uma vez só, como se estivesse fora do laço.</li></ul></div>'
        },
        {
          t: '2.4 · Contadores, sinalizadores e regras de parada',
          html: '<div class="card "><p>Um <strong>contador</strong> conta quantas vezes algo aconteceu. Um <strong>sinalizador</strong> (ligado/desligado, True/False) lembra que algo já aconteceu. Uma <strong>regra de parada</strong> encerra o algoritmo antes. Quando várias regras se aplicam ao mesmo item, aplique-as na ordem escrita — um sinalizador ligado por uma regra pode ser usado pela regra seguinte <strong>no mesmo passo</strong>.</p></div><div class="tracer" data-tr="flag"></div><div class="card tip"><p>Se as opções incluem “o algoritmo não vai parar”, leve a sério: rastreie até o último item antes de escolher.</p></div>'
        },
        {
          t: '2.5 · O algoritmo está mesmo correto?',
          html: '<div class="card "><p>Para mostrar que um algoritmo está errado, basta <strong>um contraexemplo</strong>: uma entrada em que ele dá a resposta errada. Teste os casos que as pessoas esquecem: uma coincidência que <em>não</em> envolve o primeiro item, o último item, um item comparado consigo mesmo, todos os itens iguais, uma lista de um só.</p></div><div class="card "><h4>Exemplo</h4><p>Tarefa: decidir se todos os números de uma lista são diferentes. Algoritmo proposto: “compare cada número só com o seguinte; se dois forem iguais, responda Não”.</p><p>Contraexemplo: <code>3, 5, 3</code>. Os vizinhos são 3–5 e 5–3, nunca iguais, então ele responde “todos diferentes” — errado. O algoritmo nunca compara números distantes.</p><p><strong>Correção:</strong> compare <em>cada</em> número com <em>cada</em> número que vem depois. Dois laços: o externo pega cada número por vez, não só o primeiro; o interno o compara com o resto.</p></div><div class="card class"><p><strong>Em aula:</strong> quando o programa de um aluno “funciona”, peça uma entrada que poderia quebrá-lo. Procurar contraexemplos é como os programadores pensam.</p></div>'
        }
      ],
      quiz: [
        {
          p: 'Um robô começa na casa 1 e segue esta regra 4 vezes: se o número da casa for ímpar, avança 3; se for par, volta 1. Onde ele termina?',
          o: ['4', '5', '6', '7'],
          c: 1,
          f: '1 → 4 → 3 → 6 → 5. Cada verificação usa a casa onde ele acabou de parar.'
        },
        {
          p: 'Regras da arena: o jogador precisa de uma espada OU um escudo. Se tiver os dois, também precisa ser nível 5 ou mais. Com só um, não há requisito de nível. Quem NÃO pode entrar?',
          o: ['Só espada, nível 1', 'Só escudo, nível 3', 'Espada e escudo, nível 7', 'Espada e escudo, nível 2'],
          c: 3,
          f: 'Só o caso “os dois” tem a regra extra de nível, e o nível 2 não a cumpre. O nível de quem tem um só item é irrelevante.'
        },
        {
          p: 'A pontuação começa em 1. Repita 3 vezes: multiplique a pontuação por 2; depois, se o resultado for maior que 5, subtraia 3. Qual é a pontuação final?',
          o: ['2', '5', '8', '13'],
          c: 1,
          f: '1 → 2 (não > 5). 2 → 4 (não > 5). 4 → 8 → 8 − 3 = 5.'
        },
        {
          p: 'Números: 3, 8, 5, 10, 1. contador = 0, alarme = desligado. Para cada número, nesta ordem: se o número for maior que 4, some 1 ao contador; quando o contador chegar a 2, ligue o alarme; se o alarme estiver ligado e o número for ímpar, pare. Em qual número ele para?',
          o: ['5', '10', '1', 'Nunca para'],
          c: 0,
          f: '3: nada. 8: contador 1. 5: contador 2 → alarme ligado → no mesmo passo, 5 é ímpar → para no 5.'
        },
        {
          p: 'Para verificar se uma lista está ordenada do menor para o maior, alguém propõe: “compare cada número com o primeiro; se algum for menor que o primeiro, responda Não ordenada.” Qual é o principal problema?',
          o: ['Falha com números negativos', 'Diria “Não ordenada” para qualquer lista', 'Nunca compara vizinhos depois do primeiro, então 1, 5, 3 conta como ordenada', 'Só funciona com listas de tamanho par'],
          c: 2,
          f: '5 e 3 são maiores que 1, então a verificação passa — mas a lista não está ordenada. Um contraexemplo basta.'
        }
      ]
    },
    {
      id: 'python',
      ic: '🐍',
      slot: 'Python',
      title: 'Prática de programação em Python',
      sections: [
        {
          t: '3.1 · Lendo código como o computador',
          html: '<div class="card why"><p>Um bom tutor deve ser capaz não apenas de escrever seus próprios programas, mas também de entender rapidamente o código escrito por outra pessoa. Durante as aulas, você precisará analisar as soluções dos alunos, entender exatamente o que cada programa faz, identificar as causas dos erros e ajudá-los a corrigi-los.</p><p>Neste bloco, vamos trabalhar com Python. O mais importante aqui não é memorizar cada comando, mas entender como o código é executado, como suas diferentes partes interagem e por que o programa produz determinado resultado.</p><p>Você analisará vários programas curtos, identificará erros e resolverá diferentes tarefas práticas. Não se preocupe, não haverá algoritmos complexos. Queremos apenas avaliar o seu domínio dos princípios básicos de programação e sua segurança para trabalhar com código.</p></div><div class="tbl"><table><tbody><tr><th>Item</th><th>O que significa</th></tr><tr><td><code>range(4)</code></td><td>0, 1, 2, 3 — começa em 0 e para <strong>antes</strong> do 4</td></tr><tr><td><code>range(2, 6)</code></td><td>2, 3, 4, 5 — inclui o início, exclui o fim</td></tr><tr><td><code>total += x</code></td><td>O mesmo que <code>total = total + x</code></td></tr><tr><td><code>a % b</code></td><td>Resto. <code>n % 2 == 0</code> significa que n é par; <code>== 1</code> significa ímpar</td></tr><tr><td><code>a // b</code></td><td>Divisão inteira: <code>7 // 2</code> é 3</td></tr><tr><td><code>=</code> vs. <code>==</code></td><td><code>=</code> guarda um valor; <code>==</code> compara dois valores</td></tr><tr><td><code>&gt;</code> vs. <code>&gt;=</code></td><td>“Maior que 10” exclui o 10; “pelo menos 10” o inclui. 0 não é positivo.</td></tr></tbody></table></div><div class="tracer" data-tr="pyloop"></div>'
        },
        {
          t: '3.2 · Listas e índices',
          html: '<pre class="code">numbers = [4, 15, 7, 22]\n# index:    0   1  2   3\n\nnumbers[1]      # 15\nlen(numbers)    # 4\n\nfor n in numbers:              # n is each VALUE: 4, 15, 7, 22\n    ...\nfor i in range(len(numbers)):  # i is each INDEX: 0, 1, 2, 3\n    ...  numbers[i]  ...</pre><div class="card warn"><p>Os índices começam em <strong>0</strong>. Quando a tarefa pede “o índice”, retorne <code>i</code>, não <code>numbers[i]</code>. Confundir índice e valor é uma das opções erradas mais comuns.</p></div>'
        },
        {
          t: '3.3 · return encerra a função na hora',
          html: '<div class="card "><p>Uma função para no momento em que chega a <code>return</code> — mesmo no meio de um laço. O valor depois de <code>return</code> é o que a chamada devolve. <code>print</code> só mostra algo na tela; não retorna nada.</p><p>Em Python, <strong>a indentação decide o que está dentro do quê</strong>. Quatro espaços a mais significam “dentro do laço” ou “dentro do if”. Por isso a posição de uma única linha <code>return</code> pode mudar todo o resultado.</p></div><div class="tracer" data-tr="pyreturn"></div>'
        },
        {
          t: '3.4 · Padrão: “TODOS os itens estão OK?”',
          html: '<div class="card "><p>Para verificar que <em>todos</em> os itens cumprem uma condição, procure <strong>um item que a quebre</strong>. Assim que encontrar um, <code>return False</code>. Só depois que o laço verificou tudo você pode fazer <code>return True</code>.</p></div><pre class="code good">def all_below_100(numbers):\n    for n in numbers:\n        if n &gt;= 100:\n            return False   # one bad item is enough\n    return True            # after the loop: nothing was bad</pre><div class="cols"><div><pre class="code bad"># WRONG: decides after the first item\nfor n in numbers:\n    if n &lt; 100:\n        return True\n    else:\n        return False</pre></div><div><pre class="code bad"># WRONG: returns True as soon as\n# ONE item is OK\nfor n in numbers:\n    if n &lt; 100:\n        return True\nreturn False</pre></div></div><div class="card tip"><p>Verifique também o limite da condição: “positivo” significa <code>&gt; 0</code>, então uma lista que contém 0 não é toda positiva.</p></div>'
        },
        {
          t: '3.5 · Padrão: “encontrar o PRIMEIRO”',
          html: '<div class="card "><p>Para retornar o índice do primeiro item que corresponde: <code>return i</code> dentro do <code>if</code>, assim a função para na primeira correspondência. O valor de “não encontrado” (<code>-1</code>) vai <strong>depois</strong> do laço, porque você só sabe que nada correspondeu depois de verificar todos os itens.</p></div><pre class="code good">def find_first_even(numbers):\n    for i in range(len(numbers)):\n        if numbers[i] % 2 == 0:\n            return i      # first match: stop here\n    return -1             # loop finished: no match\n\nfind_first_even([3, 7, 8, 10])   # 2</pre><div class="tbl"><table><tbody><tr><th>Versão errada</th><th>O que dá errado</th></tr><tr><td><code>else: return -1</code> dentro do laço</td><td>Desiste depois do primeiro item se ele não corresponder.</td></tr><tr><td><code>result = i</code> no laço, <code>return result</code> depois dele</td><td>Fica sobrescrevendo, então retorna a <strong>última</strong> correspondência, não a primeira.</td></tr><tr><td><code>for n in numbers: … return n</code></td><td>Retorna o <strong>valor</strong>, não o índice.</td></tr></tbody></table></div>'
        },
        {
          t: '3.6 · Ajudando um aluno a depurar',
          html: '<div class="card class"><p>Os mesmos hábitos valem nos dois níveis do CraftForge quando você lê o código de um aluno. Não conserte por ele — ajude-o a encontrar:</p><ul><li><strong>Leiam o erro em voz alta juntos.</strong> “Para qual linha ele aponta, e o que você espera que aconteça ali?”</li><li><strong>Isole a última mudança.</strong> “Qual foi a última coisa que você mudou antes de quebrar?”</li><li><strong>Rastreie com uma entrada pequena</strong> — dois ou três itens bastam para revelar a maioria dos erros.</li><li>Se o código veio da IA: “Antes de adicionar isso, me explique o que esta linha faz.”</li></ul></div><div class="tbl"><table><tbody><tr><th>Erro que o aluno vê</th><th>Causa comum</th></tr><tr><td>IndentationError</td><td>Espaços misturados ou faltando no início de uma linha</td></tr><tr><td>SyntaxError</td><td>Falta <code>:</code> depois de <code>for</code>/<code>if</code>/<code>def</code>, ou há <code>=</code> onde é preciso <code>==</code></td></tr><tr><td>NameError</td><td>Um erro de digitação no nome de uma variável, ou usá-la antes de ela existir</td></tr><tr><td>Resultado errado, sem erro</td><td>Lógica: um <code>return</code> no lugar errado, <code>&gt;</code> vs. <code>&gt;=</code>, o valor inicial errado</td></tr></tbody></table></div>'
        }
      ],
      quiz: [
        {
          p: 'O que este programa vai imprimir?<pre class="code">total = 0\nfor i in range(1, 5):\n    total += i * 2\nprint(total)</pre>',
          o: ['10', '12', '20', '30'],
          c: 2,
          f: 'range(1, 5) é 1, 2, 3, 4. Então 2 + 4 + 6 + 8 = 20. (Para 30 seria preciso range(1, 6).)'
        },
        {
          p: 'O que esta chamada retorna?<pre class="code">def mystery(nums):\n    result = 0\n    for n in nums:\n        if n % 2 == 1:\n            result += n\n    return result\n\nmystery([3, 4, 7, 10])</pre>',
          o: ['2', '10', '14', '24'],
          c: 1,
          f: 'Soma só os números ímpares: 3 + 7 = 10. (2 seria contá-los; 24 seria somar tudo.)'
        },
        {
          p: 'count_evens([2, 4, 6]) retorna 1 em vez de 3. Qual mudança corrige para qualquer lista?<pre class="code">def count_evens(numbers):\n    count = 0\n    for n in numbers:\n        if n % 2 == 0:\n            count += 1\n        return count</pre>',
          o: ['Começar count em 1', 'Mover return count para dentro do if', 'Mover return count para fora do laço for, depois dele', 'Trocar == 0 por == 1'],
          c: 2,
          f: 'O return está dentro do laço, então a função termina depois do primeiro número. Colocado depois do laço, roda quando tudo já foi contado.'
        },
        {
          p: 'all_even(numbers) deve retornar True só se todos os números forem pares. Qual versão está correta?',
          o: ['A<pre class="code">for n in numbers:\n    if n % 2 == 0:\n        return True\nreturn False</pre>', 'B<pre class="code">for n in numbers:\n    if n % 2 != 0:\n        return False\nreturn True</pre>', 'C<pre class="code">for n in numbers:\n    if n % 2 != 0:\n        return False\n    else:\n        return True</pre>', 'Nenhuma'],
          c: 1,
          f: 'B retorna False no primeiro número ímpar e True só depois de verificar todos. A para no primeiro número par; C decide depois de olhar um só item.'
        },
        {
          p: 'find_first_negative(numbers) deve retornar o índice do primeiro número negativo, ou -1 se não houver nenhum. Qual versão funciona para qualquer lista?',
          o: ['A<pre class="code">for i in range(len(numbers)):\n    if numbers[i] &lt; 0:\n        return i\n    else:\n        return -1</pre>', 'B<pre class="code">result = -1\nfor i in range(len(numbers)):\n    if numbers[i] &lt; 0:\n        result = i\nreturn result</pre>', 'C<pre class="code">for i in range(len(numbers)):\n    if numbers[i] &lt; 0:\n        return i\nreturn -1</pre>', 'D<pre class="code">for n in numbers:\n    if n &lt; 0:\n        return n\nreturn -1</pre>'],
          c: 2,
          f: 'C para na primeira correspondência e retorna -1 só depois da lista inteira. A desiste depois de um item, B retorna a última correspondência, D retorna o valor em vez do índice.'
        },
        { p:'Quais valores range(2, 6) produz?', o:['2, 3, 4, 5, 6', '2, 3, 4, 5', '3, 4, 5, 6', '0, 1, 2, 3, 4, 5'], c:1, f:'O início é incluído, o fim não.' }
      ]
    },
    {
      id: 'datapacks',
      ic: '📜',
      slot: 'Datapack',
      title: 'Data packs: as leis do mundo',
      sections: [
        {
          t: '4.1 · O que é um data pack',
          html: '<div class="card why"><p>Os data packs permitem que o aluno defina suas próprias <strong>leis</strong> para o Minecraft — novas receitas, comandos personalizados, temporizadores, eventos e pontuação — sem mudar o jogo em si. Eles abrem o ano (módulo 01, “o mundo começa a funcionar pelas regras escritas pelo aluno”) e movem o módulo 06, em que uma área comum vira um jogo.</p></div><pre class="code">my_pack/\n├── pack.mcmeta                    ← required: tells Minecraft this is a data pack\n└── data/\n    ├── forge/                     ← the student\'s namespace\n    │   └── function/\n    │       ├── setup.mcfunction   ← one command per line, no "/"\n    │       └── loop.mcfunction\n    └── minecraft/\n        └── tags/function/\n            ├── load.json          ← lists functions that run when the world loads or /reload runs\n            └── tick.json          ← lists functions that run every game tick</pre><div class="card tip"><p>Os nomes das pastas dependem da versão do jogo: desde a 1.21 ficam no singular (<code>function</code>, <code>recipe</code>); versões antigas usam o plural (<code>functions</code>, <code>recipes</code>). Um nome de pasta errado é uma falha silenciosa — o pack carrega mas nada acontece. Use a estrutura que o ambiente do seu curso fornecer.</p></div>'
        },
        {
          t: '4.2 · load, tick e a regra dos 20 ticks',
          html: '<div class="tbl"><table><tbody><tr><th>Quando</th><th>O que roda</th></tr>\n    <tr><td>Ao carregar o mundo, ou com <code>/reload</code></td><td>As funções listadas em <code>load.json</code> — uma vez. Bom para a preparação: criar placares.</td></tr>\n    <tr><td>A cada tick do jogo — <strong>20 vezes por segundo</strong></td><td>As funções listadas em <code>tick.json</code>. Bom para temporizadores e para verificar condições.</td></tr>\n    <tr><td>Quando você chama</td><td><code>/function forge:setup</code> roda uma função manualmente — ótimo para testar.</td></tr></tbody></table></div><pre class="code"># setup.mcfunction  (in load.json: runs once)\nscoreboard objectives add timer dummy\nscoreboard objectives add points dummy\nscoreboard objectives setdisplay sidebar points\n\n# loop.mcfunction   (in tick.json: runs 20 times per second)\nscoreboard players add #game timer 1\nexecute if score #game timer matches 200 run say Ten seconds!</pre><div class="card "><p>O temporizador sobe 1 a cada tick, então 200 ticks = <strong>10 segundos</strong>. <code>execute if …</code> é a versão de data pack de um <code>if</code>. O placar é como o módulo 06 “conta os pontos”.</p></div>'
        },
        {
          t: '4.3 · Quando uma regra não dispara',
          html: '<div class="tbl"><table><tbody><tr><th>Sintoma</th><th>Primeira coisa a verificar</th></tr>\n    <tr><td>Não acontece nada</td><td>Rodou <code>/reload</code> depois de editar? O pack está ativado (<code>/datapack list</code>)?</td></tr>\n    <tr><td>A preparação nunca aconteceu</td><td>A função está listada em <code>load.json</code>, com o namespace certo?</td></tr>\n    <tr><td>Funciona uma vez, mas não depois de entrar de novo no mundo</td><td>A preparação foi rodada manualmente e não está em <code>load.json</code></td></tr>\n    <tr><td>Dispara sem parar em vez de uma vez</td><td>O comando está numa função tick sem condição</td></tr>\n    <tr><td>A condição nunca dispara</td><td>Confira o nome do objetivo, o alvo e o número — rastreie como qualquer algoritmo</td></tr></tbody></table></div><div class="card class"><p><strong>Em aula:</strong> não conserte por eles. Confiram juntos o gatilho: <em>“Me explica quando isso deveria disparar.”</em> Ao carregar, a cada tick, ou só quando uma condição é verdadeira?</p></div>'
        }
      ],
      quiz: [
        {
          p: 'Quantas vezes por segundo roda uma função listada em tick.json?',
          o: ['1', '10', '20', '60'],
          c: 2,
          f: 'O Minecraft roda 20 ticks de jogo por segundo, e as funções tick rodam em todo tick.'
        },
        {
          p: 'Um temporizador soma 1 a uma pontuação a cada tick. Qual valor significa que passaram 30 segundos?',
          o: ['30', '300', '600', '1800'],
          c: 2,
          f: '20 ticks por segundo × 30 segundos = 600.'
        },
        {
          p: 'Um aluno editou um arquivo de função, mas o jogo continua se comportando como antes. O que ele deve tentar primeiro?',
          o: ['Apagar o mundo', 'Rodar /reload', 'Reiniciar o computador', 'Renomear o namespace'],
          c: 1,
          f: '/reload carrega os arquivos alterados e roda as funções load de novo.'
        },
        {
          p: 'Onde deve ficar o comando que cria um objetivo de placar?',
          o: ['Numa função listada em load.json', 'Numa função listada em tick.json', 'Em pack.mcmeta', 'Deve ser digitado à mão em toda aula'],
          c: 0,
          f: 'A preparação fica numa função load: roda uma vez quando o mundo carrega ou com /reload.'
        },
        {
          p: 'A regra de um aluno não dispara e ele quer que você conserte. O que você diz?',
          o: ['“Deixa que eu reescrevo para você.”', '“Me explica quando isso deveria disparar.”', '“Pede para o Sparks escrever de novo.”', '“Data packs são difíceis demais — pula essa parte.”'],
          c: 1,
          f: 'Conferir o gatilho juntos mantém o aluno resolvendo, passo a passo.'
        }
      ]
    }
  ],
  tracers: {
    robot: {
      title: 'Rastreie: o robô na reta numérica',
      code: ['x = 3', 'repeat 4 times:', '    if x is a multiple of 3:', '        move 2 forward', '    otherwise:', '        move 1 back'],
      steps: [
        {
          l: 0,
          v: { x:3, round:'–' },
          n: 'Anote o valor inicial antes de tudo.'
        },
        {
          l: 2,
          v: { x:3, round:1 },
          n: 'Rodada 1. 3 é múltiplo de 3? Sim.'
        },
        {
          l: 3,
          v: { x:5, round:1 },
          n: '3 + 2 = 5. A próxima rodada verifica o NOVO valor de x, 5.'
        },
        {
          l: 5,
          v: { x:4, round:2 },
          n: 'Rodada 2. 5 não é múltiplo de 3, então volta: 5 − 1 = 4.'
        },
        {
          l: 5,
          v: { x:3, round:3 },
          n: 'Rodada 3. 4 não é múltiplo de 3: 4 − 1 = 3.'
        },
        {
          l: 3,
          v: { x:5, round:4 },
          n: 'Rodada 4. 3 é múltiplo de 3 de novo: 3 + 2 = 5. Quatro rodadas feitas.'
        },
        {
          l: 1,
          v: { x:5, round:'done' },
          n: 'Resposta final: 5. Repare que o robô voltou ao 3 — um laço que revisita um valor é uma armadilha clássica para quem chuta.'
        }
      ]
    },
    coins: {
      title: 'Rastreie: um laço com uma condição dentro',
      code: ['coins = 2', 'repeat 3 times:', '    coins = coins + 3', '    if coins > 6:', '        coins = coins * 2'],
      steps: [
        {
          l: 0,
          v: { coins:2, round:'–' },
          n: 'Valor inicial.'
        },
        {
          l: 2,
          v: { coins:5, round:1 },
          n: 'Rodada 1: primeiro soma. 2 + 3 = 5.'
        },
        {
          l: 3,
          v: { coins:5, round:1 },
          n: 'Agora verifique o valor NOVO: 5 > 6? Não — nada dobra.'
        },
        {
          l: 2,
          v: { coins:8, round:2 },
          n: 'Rodada 2: 5 + 3 = 8.'
        },
        {
          l: 4,
          v: { coins:16, round:2 },
          n: '8 > 6, então dobra: 16.'
        },
        {
          l: 2,
          v: { coins:19, round:3 },
          n: 'Rodada 3: 16 + 3 = 19.'
        },
        {
          l: 4,
          v: { coins:38, round:3 },
          n: '19 > 6, dobra de novo: 38. Depois que o limite é ultrapassado, a duplicação acontece em toda rodada.'
        }
      ]
    },
    flag: {
      title: 'Rastreie: um contador, um sinalizador e uma regra de parada',
      code: ['numbers = 6, 1, 8, 3, 12', 'counter = 0, mode = off', 'for each number, in this order:', '    if number > 5: counter + 1', '    if counter == 2: mode = on', '    if mode is on and number is odd: STOP'],
      steps: [
        {
          l: 1,
          v: { number:'–', counter:0, mode:'off' },
          n: 'Escreva cada variável na própria coluna antes de começar.'
        },
        {
          l: 3,
          v: { number:6, counter:1, mode:'off' },
          n: '6 > 5 → contador 1. O modo continua desligado. E 6 é par, de qualquer forma.'
        },
        {
          l: 5,
          v: { number:1, counter:1, mode:'off' },
          n: '1 não é > 5. O modo está desligado, então a regra de parada não dispara, mesmo 1 sendo ímpar.'
        },
        {
          l: 4,
          v: { number:8, counter:2, mode:'on' },
          n: '8 > 5 → contador 2 → o modo liga neste mesmo passo.'
        },
        {
          l: 5,
          v: { number:8, counter:2, mode:'on' },
          n: 'Terceira regra, mesmo número: o modo está ligado, mas 8 é par. Continue.'
        },
        {
          l: 5,
          v: { number:3, counter:2, mode:'on' },
          n: '3: não é > 5. O modo está ligado e 3 é ímpar → PARA no 3. O 12 nunca é lido.'
        }
      ]
    },
    pyloop: {
      title: 'Rastreie: for + range em Python',
      code: ['total = 1', 'for i in range(3):', '    total = total + i * 3', 'print(total)'],
      steps: [
        {
          l: 0,
          v: { total:1, i:'–' },
          n: 'total começa em 1, não em 0 — sempre confira o valor inicial.'
        },
        {
          l: 1,
          v: { total:1, i:0 },
          n: 'range(3) dá 0, 1, 2. Começa em 0 e nunca chega a 3.'
        },
        {
          l: 2,
          v: { total:1, i:0 },
          n: '1 + 0 * 3 = 1. A multiplicação vem antes da soma.'
        },
        {
          l: 2,
          v: { total:4, i:1 },
          n: '1 + 1 * 3 = 4.'
        },
        {
          l: 2,
          v: { total:10, i:2 },
          n: '4 + 2 * 3 = 10. Esse foi o último valor que range(3) produz.'
        },
        {
          l: 3,
          v: { total:10, i:2 },
          n: 'O print não está indentado, então roda uma vez, depois do laço. Saída: 10.'
        }
      ]
    },
    pyreturn: {
      title: 'Rastreie: onde fica o return muda tudo',
      code: ['def count_evens(numbers):', '    count = 0', '    for n in numbers:', '        if n % 2 == 0:', '            count += 1', '        return count', '', 'count_evens([2, 4, 6])'],
      steps: [
        {
          l: 7,
          v: { n:'–', count:'–', returned:'–' },
          n: 'Chamamos a função com [2, 4, 6]. A resposta esperada é 3.'
        },
        {
          l: 1,
          v: { n:'–', count:0, returned:'–' },
          n: 'count começa em 0.'
        },
        {
          l: 2,
          v: { n:2, count:0, returned:'–' },
          n: 'Primeira volta do laço: n = 2.'
        },
        {
          l: 4,
          v: { n:2, count:1, returned:'–' },
          n: '2 % 2 == 0, então count vira 1.'
        },
        {
          l: 5,
          v: { n:2, count:1, returned:1 },
          n: 'O return está indentado DENTRO do laço for. Ele roda logo na primeira volta e sai da função: resultado 1. O 4 e o 6 nem são olhados.'
        },
        {
          l: 5,
          v: { n:2, count:1, returned:1 },
          n: 'Correção: mova return count quatro espaços para trás, no mesmo nível do for. Aí ele roda uma vez, depois que todos os números foram contados.'
        }
      ]
    }
  }
};
