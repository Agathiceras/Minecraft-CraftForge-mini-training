/* ============================================================
   Minecraft publishing simulation (Kodland Sparks + Kodland Launcher + the lesson card) · PORTUGUESE (pt-BR)
   Translate only the text inside quotes / backticks. Keep HTML tags, keys and the button names
   that appear in the real interface (Publish project, Minecraft skin, Image, Public, Only me, Edit, Everyone, Copy link…).
   ============================================================ */
window.CONTENT = { lang: 'pt' };

CONTENT.ui = {
  title: 'Kodland Sparks · Publicar um projeto do Minecraft',
  coachStep: (n, total) => `Passo ${n} de ${total}`,
  next: 'Próximo →',
  finish: 'Concluir ✓',
  clickHint: '👆 Clique no elemento destacado',
  followStep: 'Siga o passo destacado 🙂',
  langName: 'Português',
  studentNick: 'lucas_craft',
  studentName: 'Lucas',
  studentInitial: 'L',
  skinTitle: 'Lucas, o explorador',
  skinFile: 'lucas_skin.png',
  towerTitle: 'Torre de vigia',
  oldTitle: 'Minha casa na ilha',
  fileName: 'watchtower.png',
  packName: 'Rockapples',
  uploaded: 'Enviado ✓',
  uploaded2: 'Enviado em 26/10/2026',
  saved: 'Salvo',
  copied: 'Link copiado',
  chars: n => `${n} caracteres`,
  cardTab: 'Plataforma Kodland · Aula 1',
  cardUrl: 'https://platform.kodland.org/lesson/1'
};

CONTENT.flows = {
  /* Beginner: part 1 = the skin as a Minecraft skin project (Lesson 1); part 2 = a build screenshot as an Image project (Lesson 2 and homework) */
  image: {
    card: { gif: 'assets/crafters-skin.gif', label: 'Link da minha skin no Kodland Sparks', placeholder: 'Cole aqui o link da sua skin' },
    welcome: {
      kicker: '⚡ Simulação · Minecraft CraftForge Beginner',
      title: 'Publicar uma <span>skin e uma construção</span> no Kodland Sparks',
      lead: 'No Minecraft CraftForge Beginner, os alunos publicam os trabalhos no Kodland Sparks desde a Aula 1: primeiro a própria <b>skin</b>, depois prints das construções como projetos <b>Image</b>. Em seguida, colam o link do projeto no cartão da aula. Aqui você é o Lucas, um aluno.',
      seeTitle: 'O que você vai fazer',
      see: ['Publicar uma skin como projeto <b>Minecraft skin</b> e escolher quem pode ver.', 'Encontrar o link: <b>My projects → o projeto publicado → o endereço na barra do navegador</b>.', 'Colar o link no cartão da aula na plataforma da Kodland.', 'Publicar o print de uma construção como projeto <b>Image</b> e resolver um link que ninguém mais consegue abrir.'],
      how: 'Um cartão-guia mostra cada passo. Clique no elemento destacado. Leva cerca de 5 minutos.',
      start: 'Começar a simulação →'
    },
    steps: {
      start: { title: 'A skin do Lucas está pronta', text: 'O Lucas desenhou o crafter dele: um arquivo de skin PNG 64×64. Agora ele vai publicar a skin no Kodland Sparks, para poder vesti-la no launcher e enviar o link no cartão da aula.' },
      navPublish: { title: 'Publish project', text: 'Na barra superior do Sparks, clique em <b>Publish project</b>.' },
      typeSkin: { title: 'Tipo de projeto: Minecraft skin', text: 'Há oito tipos de projeto. Uma skin é publicada como <b>Minecraft skin</b>: o Sparks mostra a skin num modelo 3D. Clique nele.' },
      title: { title: 'Dê um nome', text: 'Clique no campo do título. Um projeto com um nome claro é fácil de encontrar depois — para o aluno e para você.' },
      model: { title: 'Steve ou Alex', text: 'O <b>Model</b> define o formato do corpo em que a skin aparece: <b>Steve</b> (braços clássicos) ou <b>Alex</b> (braços finos). O Steve vem selecionado por padrão.' },
      upload: { title: 'Arquivo da skin (PNG)', text: 'Clique em <b>Choose file</b> e adicione a skin: um <b>PNG 64×64</b> (o formato antigo 64×32 também funciona).' },
      visibility: { title: 'Quem pode ver', text: '<ul><li><b>Public</b>: no Feed e no portfólio público.</li><li><b>Friends only</b>: amigos, professores e o próprio aluno.</li><li><b>Only me</b>: ninguém mais consegue abrir o link — nem você.</li></ul>O essencial é que <b>você consiga abrir o link</b>.' },
      visPublic: { title: 'Escolha Public', text: 'O Lucas quer que outros jogadores vejam o crafter dele. Clique em <b>Public</b>.' },
      toggles: { title: 'As opções do final', text: '<ul><li><b>Request feedback</b>: outros autores podem deixar um feedback estruturado (só em projetos públicos).</li><li><b>Others can modify this project</b>: ativado por padrão — outras pessoas podem abrir uma cópia própria; o original fica intacto.</li><li><b>Discord selection</b>: os melhores projetos públicos do dia são postados no Discord.</li></ul>' },
      publish: { title: 'Publicar', text: 'Clique em <b>1× 💎 Publish</b>. Publicar também rende um cristal.' },
      findMy: { title: 'Onde está o link?', text: 'A skin foi publicada. Agora o aluno precisa do link. Não é um texto para copiar de algum lugar: é o endereço da página do projeto. Primeiro, vá em <b>My projects</b>.' },
      openSkin: { title: 'Abrir o projeto publicado', text: 'O perfil mostra os projetos do aluno. Clique na skin que você acabou de publicar.' },
      copy: { title: 'Copiar o link da barra do navegador', text: 'A página do projeto está aberta. O link é o endereço na <b>barra do navegador</b>: <code>portfolio.kodland.org/apelido/…</code>. Clique na barra para selecionar e copie (Ctrl + C / Cmd + C).' },
      toCard: { title: 'Ir para a aula na plataforma', text: 'Vale lembrar: publicar no Sparks e enviar o link na plataforma são <b>dois passos diferentes</b>. Abra a aba da aula.' },
      paste: { title: 'Colar o link no cartão', text: 'Este é o cartão <b>«A skin do crafter»</b> na plataforma. Clique no campo <b>«Link da minha skin no Kodland Sparks»</b> para colar o link (Ctrl + V / Cmd + V). Aqui vai só o link. Confira no Backoffice se os links chegaram de verdade.' },
      imageIntro: { title: 'A partir da Aula 2: construções como Image', text: 'A partir da Aula 2, os alunos também publicam <b>prints das construções</b> (F5 para se ver, F1 para esconder a interface). O Lucas acabou de terminar uma torre de vigia. Volte para a aba do Kodland Sparks.' },
      navPublish2: { title: 'Publish project', text: 'Clique de novo em <b>Publish project</b>.' },
      typeImage: { title: 'Tipo de projeto: Image', text: 'Um print é publicado como <b>Image</b>. Clique nele.' },
      title2: { title: 'Nome', text: 'Clique no campo do título.' },
      upload2: { title: 'Drawing: o print', text: 'Em <b>Drawing</b>, clique em <b>Choose file</b> (PNG, JPG, WebP ou GIF de até 5 MB). No Windows, o print fica em <b>Imagens → Capturas de tela</b>; no Mac, na área de trabalho.' },
      publish2: { title: 'Publicar', text: 'A visibilidade continua em <b>Public</b>. Clique em <b>Publish</b>. O link é encontrado do mesmo jeito: My projects → o projeto → a barra do navegador.' },
      problem: { title: 'Um link que não abre', text: 'Outro caso: um aluno envia um link, e ele não abre para você. No perfil do aluno, o projeto mostra a etiqueta <b>Private project</b>: foi salvo como <b>Only me</b>. Vamos resolver como se fôssemos o Lucas.' },
      myProjects: { title: 'My projects', text: 'Clique em <b>My projects</b>.' },
      privateCard: { title: 'O projeto privado', text: 'Abra o projeto com a etiqueta <b>Private project</b>.' },
      edit: { title: 'Edit', text: 'Clique em <b>Edit</b>.' },
      fixPublic: { title: 'Mudar a visibilidade', text: 'Escolha <b>Public</b> (ou <b>Friends only</b>, que os professores também conseguem abrir).' },
      resend: { title: 'Publicar de novo', text: 'Clique em <b>Publish</b>. O link continua o mesmo e agora abre para você.' },
      done: { title: 'Resolvido', text: 'O projeto está público e o link da barra do navegador funciona. Se um link ainda não abrir, peça para o aluno fazer o compartilhamento de tela e repitam os passos juntos.' }
    },
    finish: {
      kicker: '🏁 Simulação concluída',
      title: 'Você sabe como um <span>trabalho de Minecraft</span> é publicado',
      intro: 'É isto que os alunos fazem toda vez que uma aula pede para publicar:',
      points: ['Skin: <b>Publish project</b> → <b>Minecraft skin</b> → nome → Model (Steve/Alex) → PNG 64×64 → <b>Publish</b>.', 'Construção: print (F5, F1) → <b>Publish project</b> → <b>Image</b> → nome → Drawing → <b>Publish</b>.', 'O link: <b>My projects → o projeto publicado → copiar o endereço da barra do navegador</b> e colar no cartão da aula na plataforma. Publicar e enviar o link são dois passos diferentes.', '<b>Private project</b> = Only me: My projects → projeto → Edit → Public → Publish. O link continua o mesmo.'],
      back: 'Pode voltar para a formação: a verificação do módulo já está liberada.',
      again: '↺ Fazer de novo'
    }
  },

  /* Intermediate: the data pack is published from the Kodland Launcher (0.8.20) */
  datapack: {
    card: { gif: 'assets/sign-the-law.gif', label: 'Link da minha lei no Kodland Sparks', placeholder: 'Cole aqui o link do seu data pack publicado' },
    welcome: {
      kicker: '⚡ Simulação · Minecraft CraftForge Intermediate',
      title: 'Publicar um <span>data pack</span> no Kodland Sparks',
      lead: 'No Minecraft CraftForge Intermediate, os alunos criam leis para o mundo (receitas, drops, comandos) num <b>data pack</b> no Kodland Launcher e publicam o data pack no perfil do Sparks pelo editor. Aqui você é o Lucas, um aluno que acabou de criar a primeira receita.',
      seeTitle: 'O que você vai fazer',
      see: ['Abrir o data pack no launcher: <b>Create → Data packs → Edit</b>.', 'Publicar com <b>Who can see it? → Everyone</b> e copiar o link.', 'Colar o link no cartão da aula na plataforma da Kodland.', 'Resolver um link que não abre e encontrar o link de novo com <b>Open on Sparks</b>.'],
      how: 'Um cartão-guia mostra cada passo. Clique no elemento destacado. Leva cerca de 4 minutos.',
      start: 'Começar a simulação →'
    },
    steps: {
      start: { title: 'A lei funciona', text: 'O Lucas criou uma receita no data pack, salvou, voltou ao mundo e fez o craft do item. Agora ele vai assinar a lei: publicar o data pack no Kodland Sparks. Este é o launcher, na aba <b>Play</b>.' },
      create: { title: 'Create', text: 'Os data packs ficam na aba <b>Create</b>. Clique em <b>Create</b>.' },
      edit: { title: 'O data pack', text: 'Estes são os data packs do aluno. Clique em <b>Edit</b> no pacote com a receita.' },
      editor: { title: 'O editor do data pack', text: 'À esquerda, o que tem dentro do pacote; no centro, o formulário da receita. No canto superior direito, <b>Publish</b> fica ao lado do botão roxo <b>Save</b>.' },
      publish: { title: 'Publicar', text: 'Clique em <b>Publish</b>.' },
      name: { title: 'Nome', text: 'Abre a janela «Publish to your profile». Clique no campo <b>Name</b>. O campo <b>About it</b> é opcional.' },
      who: { title: 'Who can see it?', text: 'Aqui se decide quem consegue abrir o link. Só com <b>Everyone</b> o link abre para os outros — inclusive você — sem entrar na conta do aluno.' },
      everyone: { title: 'Everyone', text: 'Confira se <b>Everyone</b> está selecionado e clique nele.' },
      submit: { title: 'Publicar', text: 'Clique em <b>Publish</b>.' },
      copy: { title: 'Publicado! Copie o link', text: 'Aparece «Published! It is on your profile.» com o link do projeto e um cristal. Clique em <b>Copy link</b>.' },
      close: { title: 'Done', text: 'Agora o botão mostra <b>Copied!</b>. Clique em <b>Done</b>.' },
      toCard: { title: 'Ir para a aula na plataforma', text: 'Vale lembrar: publicar no Sparks e enviar o link na plataforma são <b>dois passos diferentes</b>. Abra a aba da aula.' },
      paste: { title: 'Colar o link no cartão', text: 'Este é o cartão <b>«Assine a lei»</b> na plataforma. Clique no campo <b>«Link da minha lei no Kodland Sparks»</b> para colar o link (Ctrl + V / Cmd + V). Confira no Backoffice se os links chegaram de verdade.' },
      problem: { title: 'Um link que não abre', text: 'Na aula seguinte, o Lucas publica uma atualização, e o link não abre para você. O mais provável é que «Who can see it?» estivesse em <b>Only me</b>. A solução: publicar de novo com Everyone.' },
      backLauncher: { title: 'De volta ao launcher', text: 'Abra a aba do Kodland Launcher.' },
      republish: { title: 'Publicar de novo', text: 'Clique em <b>Publish</b> no editor.' },
      fixEveryone: { title: 'Everyone', text: 'O data pack foi publicado como <b>Only me</b>. Escolha <b>Everyone</b>.' },
      resubmit: { title: 'Publicar', text: 'Clique em <b>Publish</b>. Agora o link abre para todos.' },
      lostLink: { title: 'Perdeu o link?', text: 'Se o aluno fechou a janela sem copiar o link, dá para encontrá-lo de novo a qualquer momento: <b>Open on Sparks</b> (aqui ou no alto do editor) abre a página do projeto. Clique nele.' },
      done: { title: 'A página do projeto', text: 'O data pack abre no perfil do aluno no Sparks. O link é o endereço na barra do navegador — o aluno copia de lá e cola no cartão.' }
    },
    finish: {
      kicker: '🏁 Simulação concluída',
      title: 'Você sabe como um <span>data pack</span> é publicado',
      intro: 'É isto que os alunos fazem toda vez que uma aula pede para publicar as leis:',
      points: ['Launcher: <b>Create → Data packs → Edit</b> → <b>Publish</b> (ao lado de Save).', '«Publish to your profile»: nome → <b>Who can see it? → Everyone</b> → Publish → <b>Copy link</b> → Done.', 'Colar o link no cartão da aula na plataforma. Publicar e enviar o link são dois passos diferentes.', 'O link não abre → publicar de novo com <b>Everyone</b>. Perdeu o link → <b>Open on Sparks</b> e copiar o endereço da barra do navegador.'],
      back: 'Pode voltar para a formação: a verificação do módulo já está liberada.',
      again: '↺ Fazer de novo'
    }
  }
};
