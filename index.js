//Trabalho de Sistemas de Apoio à Decisão - Gabriel Bernardo Martins
//Utilizei as avaliações do aplicativo do Twitter na playstore para treinar o algoritmo
//Para rodar a aplicação tem que executar o seguinte comando: npm install wink-naive-bayes-text-classifier --save
//depois só rodar o comando: node index

// Load Naive Bayes Text Classifier
var Classifier = require( 'wink-naive-bayes-text-classifier' );
// Instantiate
var nbc = Classifier();
// Load wink nlp and its model
const winkNLP = require( 'wink-nlp' );
// Load language model
const model = require( 'wink-eng-lite-web-model' );
const nlp = winkNLP( model );
const its = nlp.its;

const prepTask = function ( text ) {
  const tokens = [];
  nlp.readDoc(text)
      .tokens()
      // Use only words ignoring punctuations etc and from them remove stop words
      .filter( (t) => ( t.out(its.type) === 'word' && !t.out(its.stopWordFlag) ) )
      // Handle negation and extract stem of the word
      .each( (t) => tokens.push( (t.out(its.negationFlag)) ? '!' + t.out(its.stem) : t.out(its.stem) ) );

  return tokens;
};
nbc.definePrepTasks( [ prepTask ] );
// Configure behavior
nbc.defineConfig( { considerOnlyPresence: true, smoothingFactor: 0.5 } );

// Treinamento!

// -> Avaliações Boas
nbc.learn( 'App interativo e versátil. Nas próximas atualizações é importante aprimorar a capacidade de consumir menos memória nos smartphones em geral. No mais, recomendo a utilização para smartphones com 6GB de RAM para cima e com bom processador. Também focar na segurança e não vazamento dos dados dos usuários', 'BOM' );
nbc.learn( 'Sou nova no aplicativo, mas ele parece muito bom! Única coisa que eu acho é sobre fazer as postagens; se você erra não tem a opção para editar, aí você exclui a postagem para corrigir seu erro e publicar novamente. Estou conhecendo o aplicativo.', 'BOM' );
nbc.learn( 'Uma experiência incrível e emocionante, é muito legal conversar e interagir com pessoas que têm os mesmos gostos que os seus. Pena que às vezes, o fato de você ser meio que excluído porque não têm muitos seguidores seja muito triste, é horrível essa sensação de ser ignorado, sei que não é culpa do App, mas só queria desabafar um pouco. Acho que é uma das plataformas que eu mais gosto. Acho fofo e lindo o jeito que os emojis ficam. Amo Twitter! ', 'BOM' );
nbc.learn( 'O Twitter é um aplicativo útil e intuitivo que permite ficar atualizado com as últimas notícias e tendências, seguir personalidades favoritas e se conectar com pessoas que compartilham os mesmos interesses. É fácil de usar e possui recursos de mídia incorporados.', 'BOM' );
nbc.learn( 'Pra min é quase perfeito, ainda mais agora que temos mais liberdade, com responsabilidade e claro! Tem vídeos ,fotos , textos etc , é completo e com uma base qualificada em todos os aspectos.', 'BOM' );
nbc.learn( 'Agora, estou aprendendo a usar eacredito que as mudanças na plataforma, ao menos pra mim melhorou, tô tendo mais visibilidade e podendo discutir idéias, o que nos permite aperfeiçoa-las.', 'BOM' );
nbc.learn( 'Ok,eu gosto desse aplicativo! eu estou namorando com uma pessoa de lá, então sim,o Twitter tem seu lado bom. De uma chance para o Twitter porque ele tirou minha depressão!', 'BOM' );
nbc.learn( 'Enquanto o Twitter estiver mantendo a liberdade de expressão, estarei usando diariamente. Quanto ao app, é muito bom e tem um algoritmo de interesses infinitamente superior ao Instagram', 'BOM' );
nbc.learn( 'Para mim o aplicativo funciona perfeitamente, é fácil de usar, cumpre o que promete, não tenho o que reclamar, para mim é a rede com a maior interação social do mundo e ultimamente com o novo dono o senhor Elon Musk, ficou ainda melhor, é no twitter que obtenho informações sobre o que está acontecendo no mundo inteiro. Só tenho muito que agradecer por ter uma plataforma como está e sem custo algum! Parabéns! Nota 10!', 'BOM' );
nbc.learn( 'Excelente app e a plataforma. As pessoas no planeta, conectados e interagindo. O Twitter representa a liberdade de expressão e de pensamento.', 'BOM' );
nbc.learn( 'Uma rede social sensacional, onde pode interagir por livre de grupo, e simultaneamente continuar utilizando a navegação. ', 'BOM' );
nbc.learn( 'O aplicativo é o melhor entre redes sociais, pena que no Brasil é controlado pelo governo esquerdista e seus militantes apoiadores onde controlam o que vc pode ou não dizer. Ou será cancelado e terá conta bloqueada. Mas o aplicativo em si é ótimo.', 'BOM' );
nbc.learn( 'A plataforma está ótima, e as mudanças recentes estão permitindo a verdadeira liberdade de expressão e comunicação descentralizada das grandes mídias. Excelente!', 'BOM' );
nbc.learn( 'Muito entretenimento, fácil acesso. Muito aprendizado e diversão. Responsabilidade e respeito ao consumidor. Isso sem falar na biodiversidade e variedades de conteúdos. Ótimo.', 'BOM' );
nbc.learn( 'Melhor app de rede social de todos os tempos. É minha principal fonte de informação sobre todos os assuntos, desde cultura a economia. Imprescindível!!!', 'BOM' );
nbc.learn( 'Última atualização melhorou! Não conseguia postar nenhum conteúdo salvo no rascunho, foi corrigido! Parece tudo OK.', 'BOM' );
nbc.learn( 'É um bom aplicativo não tenho o que reclamar: sempre me atende em precisão! Eu falo mais com família.', 'BOM' );
nbc.learn( 'Gosto muito de interagir na plataforma. Possibilita bastante ver as opiniões e ideias das pessoas.', 'BOM' );
nbc.learn( 'show, massa de mais, aplicativo top, da pra usar naqueles minutinhos esperando o ônibus, e ficar escrevendo tudo que pensa', 'BOM' );
nbc.learn( 'Os anúncios são bem equilibrados em relação as vezes que são expostos para que faz uso do app e a qualidade é muito boa .gostei. E de uma forma que não incomoda .', 'BOM' );

// -> Avaliações Ruins
nbc.learn( 'A reprodução de vídeo está péssima. Acontece muito de nem carregarem, travarem na metade, perderem a sincronia entre audio e imagem, pularem partes por conta própria. ta insuportável usar essa rede, infelizmente está piorando exponencialmente', 'RUIM' );
nbc.learn( 'Ultimamente não consigo assistir a um vídeo completo porque ou ele para de rodar do nada e fica estático, ou então de repente sem som; sem contar que essa função de quantas visualizações um tweet tem na verdade tá poluindo a timeline pois são muitas informações ao mesmo tempo. Algo bacana de adicionar no lugar disso seria baixar vídeo/GIF dentro do próprio aplicativo mesmo, seria mais prático.', 'RUIM' );
nbc.learn( 'Suspensão sem sentido de contas, interface cada dia mais poluída visualmente, bugs constantes, mal funcionamento do app, dentre outros. Só não migro pra outro aplicativo porque tenho coisa importante salva nessa plataforma horrível.', 'RUIM' );
nbc.learn( 'O search nas configurações não funciona 100%, pesquisei "economia" e não apareceu a opção de economia de dados, só porque ela está dentro da categoria "uso de dados". A nova info de "views" de um tweet só polui a interface, e a aba de "engraçado" é ridícula e deveria ser escolha do usuário mostrá-la ou não.', 'RUIM' );
nbc.learn( 'A homepage do app tá terrível da sempre a sensação que tá tudo bagunçado, nada contra os desenvolveres mas a barra "para você" e "seguindo" são muito desnecessárias, além da adição da quantidade de view que o tweet pegou e a mudança desse ícone de view da esquerda pra direita, bem no local onde ficava o botão de curtir', 'RUIM' );
nbc.learn( 'Agora não consigo mais acessar meu perfil apenas pq decidi trocar a senha, tenho verificação em 2 etapas mas o SMS com o código de verificação simplesmente não chega. Já enviei vários formulários e nada de solução. Uma pena, acho que perdi o perfil', 'RUIM' );
nbc.learn( 'o que aconteceu com o Twitter nessa última atualização??? não consigo entrar em nenhum tweet, não consigo responder ninguém, não consigo entrar no perfil de ninguém.... o app fecha sozinho! já desinstalei 2 vezes, fiquei uma semana usando pela web. atualizando: estou usando o Twitter pela web tem 3 meses. simplesmente não resolveram o problema que tive. era meu app de rede social preferido.', 'RUIM' );
nbc.learn( 'Acabem com a aba "Para você". Entendam que as pessoas usam o Twitter para ver os tweets mais recentes SEMPRE, à medida que são publicados, em ordem cronológica. Isso ainda nos perturba no Instagram, que mostra posts de 2, 3 dias atrás, só porque ele é compatível (mas nem tanto) com o algoritmo. Ninguém quer a aba "Para você".', 'RUIM' );
nbc.learn( 'já passou da hora de vocês criarem uma atualização que realmente seja útil. ao invés de adicionar funções como editar tweets, organizar os itens salvos e afins, ficam colocando coisas que absolutamente ninguém quer ou precisa. e que ideia foi essa de tirar a edição dos moments? ele interferia em que? simplesmente deplorável o que estão fazendo com o que era para ser uma das melhores redes sociais.', 'RUIM' );
nbc.learn( 'O app antes da atualização estava ótimo, após a última atualização já começou os bugs. Quando clico em qualquer link a tela fica preta e trava, tive que aderir ao dual apps pra ver se melhorava e piorou, agora quando clico nos links vai lá pro Google na versão para computador, se eu retirar da opção para computador fica dizendo para logar pelo app e mesmo logada não sai da versão mobile. Voltem com a atualização anterior mano.', 'RUIM' );
nbc.learn( 'As legendas automáticas nos Spaces viraram um pesadelo, além dos problemas de travar áudios, salas caírem, etc.. Os poucos caracteres para postar, esse limite é ridículo e não poder editar em caso de erro de digitação é também brincadeira, a nova plataforma Koo está ganhando cada vez mais espaço com esses recursos que citei, só falta os Spaces para eles superarem o Twitter de vez.', 'RUIM' );
nbc.learn( 'Simplesmente uma péssima experiência não conseguir retirar as legendas automáticas que cobrem metade da tela ao assistir um vídeo. Pra Android não tem a opção "CC" no canto superior direito do vídeo, como alguns falaram que tem no IOS, e nas configurações do meu celular nunca estiveram ativas as legendas de acessibilidade.', 'RUIM' );
nbc.learn( 'Simplesmente HORRÍVEL essa atualização com visualizações. Ficou extremamente poluído visualmente, uma experiência irritante e chata. Não há razões para querer ver as views de outros usuários e se quiséssemos ver nossa própria mantinha como estava antes. Está sendo desgastante tantos números na tela. Apenas voltem como antes, pelo amor de Deus.', 'RUIM' );
nbc.learn( 'Não consigo personalizar minha conta, após algum dia a configuração de data de nascimento apresentou problemas (eu colocava e dava erro, e não mudava nada) e isso afeta TODO o resto da personalização, pois n consigo alterar a foto, a bio, NADA, POR CONTA DE ERRO DO APP NA DATA DE NASCIMENTO. Eu arrumei alguma forma de tentar falar com o twitter mas eles fazem questão de não deixar nenhuma forma de contatar eles, não há outro lugar para eu informar sobre esse bug e minha insatisfação além daqui.', 'RUIM' );
nbc.learn( 'os vídeos estão com vários bugs, as vezes a imagem congela mas o áudio continua, as vezes não tem audio e a imagem tá acelerada, as vezes não tem nenhum dos dois, e a minutagem do vídeo acaba ultrapassando o tempo de vídeo', 'RUIM' );
nbc.learn( 'Aplicativo ficou péssimo após a última atualização, só trava, fecha sozinho, não deixa eu fazer nada, uma verdadeira porcaria, da até raiva.', 'RUIM' );
nbc.learn( 'O app não funciona, toda vez que abre da erro e fica saindo sozinho, o único aplicativo que dá problema no meu celular.', 'RUIM' );
nbc.learn( 'Nossa mn, twitter é uma bagunça, sinceramente. E eu acho terrível a ideia de que não dá pra apagar mensagens na dm, sério msm? que tipo de app não tem a opção de eu querer apagar a minha própria mensagem pra todos? mais defeitos que qualidades.', 'RUIM' );
nbc.learn( 'Não consigo usar o Twitter pelo app. Fica falando que não foi possível atualizar o feed. Não consigo postar nada. E pelo PC funciona tudo normal. Já faz quase uns 2 dias isso.', 'RUIM' );
nbc.learn( 'atualização horrorosa com esse recurso de visualização, muita informação no feed e muita poluição. Poderiam privar a visualização de novo!', 'RUIM' );
// Término do treino!!
nbc.consolidate();

// TESTES
// - > experiencia ruim
console.log( nbc.predict( 'Tive uma péssima experiencia com esse aplicativo' ) );
// -> experiencia boa
console.log( nbc.predict( 'Ótimo aplicativo, estou adorando!' ) );

// -> experiencia ruim
console.log( nbc.predict( 'Depois da última atualização, não consigo mais assistir simples vídeos (travam muito, às vezes aceleram repentinamente)' ) );
console.log( nbc.predict( 'Ultimamente o aplicativo está travando, não me deixa tweetar, responder, ou retweetar nenhum tweet direito, trava e fecha. Até achei que o app estava desatualizado, mas não tem atualização pendente.' ) );
console.log( nbc.predict( 'O aplicativo era bom, mas agora só trava e pra piorar eu fui bloqueada, antes vcs davam um aviso qnd n se podia mais seguir, mas agora vocês deixam seguir até vcs bloquearem, e eu tento colocar um número de celular e dá como não suportado' ) );
console.log( nbc.predict( 'Depois da última atualização, toda vez que eu vejo os comentários, ao voltar para a página anterior ele volta para o início dos comentários! Tá horrível demais isso! Haja paciência. Não recebo novas notificações, preciso entrar na aba e atualizar para visualizar quando recebo novos comentários ou curtidas.' ) );
// -> experiencia boa
console.log( nbc.predict( 'Melhor app de rede social de todos os tempos. É minha principal fonte de informação sobre todos os assuntos, desde cultura a economia. Imprescindível' ) );
console.log( nbc.predict( 'Rede social maravilhosa. Aplicativo ultimamente tem apresentado alguns bugs, mas ainda assim é muito bom de se utilizar.' ) );
console.log( nbc.predict( 'Ótimo aplicativo e Rede Social! Me ajuda não ser alienado pelas notícias da imprensa. Gosto de saber como está a política e economia do meu país e do mundo.' ) );
console.log( nbc.predict( 'Excelente sob todas as óticas , vale a pena , diversão , conversação ,atualidades , política , lazer , educação , música , etc .' ) );