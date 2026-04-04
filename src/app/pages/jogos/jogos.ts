import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Produto } from '../../model/produto';

@Component({
  selector: 'app-jogos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jogos.html',
  styleUrl: './jogos.css'
})
export class JogosComponent {

  lista: Produto[] = [
    {
      "id": 1,
      "nome": "Catan",
      "sku": "LUDO-CAT-001",
      "categoria": "Estratégia, Negociação, Tabuleiro",
      "descricao": "Um jogo de estratégia e negociação onde jogadores tentam dominar a ilha de Catan construindo assentamentos, cidades e estradas.",
      "preco": 150,
      "min_jogadores": 3,
      "max_jogadores": 4,
      "keywords": "estratégia, negociação, recursos, tabuleiro",
      "fotos": [],
      detalhes_longos: "Os jogadores são colonos tentando dominar a ilha de Catan. Construa estradas, assentamentos e cidades através da negociação de recursos como madeira, trigo e minério. Um clássico absoluto que revolucionou o mundo dos jogos de tabuleiro.",
      componentes: [
        "19 Hexágonos de terreno", "6 Peças de moldura", "95 Cartas de recurso", "Peças de madeira", "Dados"
      ],
      especificacoes: {
        idade: "10+",
        tempo: "60-120 min",
        idioma: "Português",
        editora: "Devir",
        designer: "Klaus Teuber",
        mecanicas: "Negociação, Construção de Rotas",
        perfil: "Jogo Família / Estratégia"
      }
    },
    {
      "id": 2,
      "nome": "Dixit",
      "sku": "LUDO-DIX-002",
      "categoria": "Imaginação, Família, Cartas",
      "descricao": "Um jogo de cartas ilustradas onde a imaginação e a interpretação são as chaves para a vitória.",
      "preco": 120,
      "min_jogadores": 3,
      "max_jogadores": 6,
      "keywords": "imaginação, criatividade, interpretação, arte",
      "fotos": [
        "Imagens dos Jogos/Dixit/1.jpg",
        "Imagens dos Jogos/Dixit/2.jpg",
        "Imagens dos Jogos/Dixit/3.jpg",
        "Imagens dos Jogos/Dixit/4.jpg",
      ],
      detalhes_longos: "Uma experiência lúdica de tirar o fôlego. Usando cartas com ilustrações surreais, o narrador dá uma dica sobre sua carta e os outros tentam adivinhar qual é. Um jogo focado em criatividade, dedução e belíssimas artes que encantam todas as idades.",
      componentes: [
        "84 Cartas ilustradas",
        "8 Coelhos marcadores",
        "8 Marcadores de ponto",
        "1 Tabuleiro",
        "Livro de regras"
      ],
      especificacoes: {
        idade: "8+",
        tempo: "30 min",
        idioma: "Português",
        lancamento: "2008",
        editora: "Galápagos",
        designer: "Jean Louis Roubira",
        mecanicas: "Narração de Histórias, Votação",
        perfil: "Jogo Família"
      }
    },
    {
      "id": 3,
      "nome": "Ticket to Ride",
      "sku": "LUDO-TTR-003",
      "categoria": "Família, Trens, Estratégia Leve",
      "descricao": "Construa suas rotas ferroviárias através da América do Norte para conectar cidades e completar seus bilhetes de destino.",
      "preco": 200,
      "min_jogadores": 2,
      "max_jogadores": 5,
      "keywords": "trem, rotas, objetivos, família",
      "fotos": [
        "Imagens dos Jogos/Ticket To Ride/1.jpg",
        "Imagens dos Jogos/Ticket To Ride/2.jpg",
        "Imagens dos Jogos/Ticket To Ride/3.jpg",
        "Imagens dos Jogos/Ticket To Ride/4.jpg",
      ],
      detalhes_longos: "Uma aventura ferroviária através da América do Norte. Os jogadores coletam cartas de vagões para dominar rotas entre cidades e completar seus bilhetes de destino. Simples de aprender e elegante, é um dos pilares dos jogos de tabuleiro modernos.",
      componentes: [
        "1 Tabuleiro (Mapa EUA)",
        "240 Trens coloridos",
        "110 Cartas de Vagão",
        "30 Bilhetes de Destino",
        "Manual de Regras"
      ],
      especificacoes: {
        idade: "8+",
        tempo: "60+ min",
        idioma: "Português",
        lancamento: "2014",
        editora: "Galápagos",
        designer: "Alan R. Moon",
        mecanicas: "Construção de Rotas, Colecionar Conjuntos",
        perfil: "Jogo Família"
      }
    },
    {
      "id": 4,
      "nome": "Coup",
      "sku": "LUDO-COU-004",
      "categoria": "Blefe, Party Game, Rápido",
      "descricao": "Em um futuro próximo, você deve usar blefe e estratégia política para eliminar a influência de seus rivais.",
      "preco": 80,
      "min_jogadores": 2,
      "max_jogadores": 6,
      "keywords": "blefe, cartas, rápido, política",
      "fotos": [
        "Imagens dos Jogos/Coup/1.jpg",
        "Imagens dos Jogos/Coup/2.jpg",
        "Imagens dos Jogos/Coup/3.jpg",
        "Imagens dos Jogos/Coup/4.jpg",
      ],
      detalhes_longos: "Em um futuro distópico, você é o chefe de uma família que busca o poder através de blefe e manipulação. Elimine a influência de seus rivais usando as habilidades de personagens como o Duque ou o Assassino. Esta edição inclui a expansão 'A Reforma', adicionando mecânicas de facções religiosas ao jogo.",
      componentes: [
        "25 Cartas de Personagem",
        "5 Cartas de Inquisidor",
        "10 Cartas de Facção (Católico/Protestante)",
        "30 Moedas",
        "1 Tabuleiro central (Asilo)",
        "Manual de Regras"
      ],
      especificacoes: {
        idade: "14+",
        tempo: "15 min",
        idioma: "Português",
        lancamento: "2014",
        editora: "Grok Games",
        designer: "Rikki Tahta",
        mecanicas: "Blefe, Dedução, Papéis Ocultos",
        perfil: "Party Game / Blefe",
      }
    },
    {
      "id": 5,
      "nome": "Munchkin",
      "sku": "LUDO-MUN-005",
      "categoria": "RPG, Humor, Cartas",
      "descricao": "Mate os monstros, roube o tesouro e apunhalte seus amigos neste RPG satírico cheio de humor.",
      "preco": 100,
      "min_jogadores": 3,
      "max_jogadores": 6,
      "keywords": "rpg, humor, monstros, traição",
      "fotos": [
        "Imagens dos Jogos/Munchkin/1.jpg",
        "Imagens dos Jogos/Munchkin/2.jpg",
        "Imagens dos Jogos/Munchkin/3.jpg",
        "Imagens dos Jogos/Munchkin/4.jpg",
      ],
      detalhes_longos: "Uma sátira hilária aos jogos de RPG. Mate monstros, roube tesouros e, o mais importante, apunhalte seus amigos para chegar ao nível 10 primeiro. Equipado com itens absurdos como o 'Chapeu de Napalm', Munchkin prova que mais vale a piada do que o amigo.",
      componentes: [
        "168 Cartas",
        "1 Dado",
        "1 Manual de Regras"
      ],
      especificacoes: {
        idade: "10+",
        tempo: "90+ min",
        idioma: "Português",
        editora: "Galápagos",
        designer: "Steve Jackson",
        mecanicas: "Gestão de mão, Toma essa",
        perfil: "Humor / Cartas",
      }
    },
    {
      "id": 6,
      "nome": "Saboteur",
      "sku": "LUDO-SAB-006",
      "categoria": "Traidor, Blefe, Mineração",
      "descricao": "Os anões buscam ouro na mina, mas cuidado: um deles pode ser o sabotador tentando impedir o progresso.",
      "preco": 70,
      "min_jogadores": 3,
      "max_jogadores": 10,
      "keywords": "sabotador, mineração, equipe, traidor",
      "fotos": [
        "Imagens dos Jogos/Saboteur/1.jpg",
        "Imagens dos Jogos/Saboteur/2.jpg",
        "Imagens dos Jogos/Saboteur/3.jpg",
        "Imagens dos Jogos/Saboteur/4.jpg",
      ],
      detalhes_longos: "Anões mineiros escavam túneis em busca de ouro, mas entre eles há sabotadores tentando impedir o sucesso da missão. Use cartas para construir o caminho ou quebrar ferramentas alheias. O mistério sobre quem é o traidor dura até o último segundo da rodada.",
      componentes: [
        "110 Cartas (Caminho, Ação, Papéis e Ouro)",
        "Livro de Regras"
      ],
      especificacoes: {
        idade: "8+",
        tempo: "30+ min",
        idioma: "Português",
        lancamento: "2017",
        editora: "Galápagos",
        designer: "Frederic Moyersoen",
        mecanicas: "Papéis Ocultos, Traidor, Blefe",
        perfil: "Jogo de Cartas / Festivo"
      }
    },
    {
      "id": 7,
      "nome": "Exploding Kittens",
      "sku": "LUDO-EK-007",
      "categoria": "Party Game, Caótico, Cartas",
      "descricao": "Uma versão altamente estratégica e movida a gatos da Roleta Russa.",
      "preco": 90,
      "min_jogadores": 2,
      "max_jogadores": 5,
      "keywords": "gatos, explosão, cartas, rápido",
      "fotos": [
        "Imagens dos Jogos/Exploding Kittens/1.jpg",
        "Imagens dos Jogos/Exploding Kittens/2.jpg",
        "Imagens dos Jogos/Exploding Kittens/3.jpg",
        "Imagens dos Jogos/Exploding Kittens/4.jpg",
      ],
      detalhes_longos: "Uma versão estratégica da Roleta Russa movida a gatinhos. Os jogadores compram cartas até que alguém encontre um Gatinho Explosivo e seja eliminado. Use lasers, ataques e desarmadores para sobreviver aos bichanos explosivos neste party game caótico e divertido.",
      componentes: [
        "56 Cartas",
        "1 Folheto de regras"
      ],
      especificacoes: {
        idade: "8+",
        tempo: "15 min",
        idioma: "Português",
        lancamento: "2019",
        editora: "Galápagos",
        designer: "Elan Lee, Shane Small",
        mecanicas: "Force sua sorte, Gestão de Mão",
        perfil: "Party Game",
      }
    },
    {
      "id": 8,
      "nome": "Pandemic",
      "sku": "LUDO-PAN-008",
      "categoria": "Cooperativo, Estratégia, Sobrevivência",
      "descricao": "Trabalhem juntos como uma equipe de especialistas para erradicar quatro doenças que ameaçam o mundo.",
      "preco": 180,
      "min_jogadores": 2,
      "max_jogadores": 4,
      "keywords": "cooperativo, doenças, global, estratégia",
      "fotos": [
        "Imagens dos Jogos/Pandemic/1.jpg",
        "Imagens dos Jogos/Pandemic/2.jpg",
        "Imagens dos Jogos/Pandemic/3.jpg",
        "Imagens dos Jogos/Pandemic/4.jpg",
      ],
      detalhes_longos: "Um aclamado jogo cooperativo onde você e seus amigos são especialistas tentando salvar o mundo de quatro doenças fatais. Viajem pelo globo, tratem infecções e descubram as curas antes que o tempo acabe. Trabalhem juntos ou todos perderão para as epidemias.",
      componentes: [
        "1 Tabuleiro",
        "7 Peões e Cartas de Função",
        "96 Cubos de doença",
        "107 Cartas (Jogador e Infecção)",
        "Livro de regras"
      ],
      especificacoes: {
        idade: "14+",
        tempo: "45 min",
        idioma: "Português",
        lancamento: "2015",
        editora: "Galápagos",
        designer: "Matt Leacock",
        mecanicas: "Cooperativo, Gestão de Mão",
        perfil: "Cooperativo",
      }
    },
    {
      "id": 9,
      "nome": "Brass Birmingham",
      "sku": "LUDO-BRS-009",
      "categoria": "Estratégia Pesada, Econômico, Industrial",
      "descricao": "Um jogo de estratégia econômica que conta a história de empreendedores em Birmingham durante a revolução industrial.",
      "preco": 350,
      "min_jogadores": 2,
      "max_jogadores": 4,
      "keywords": "economia, industrial, avançado, pesado",
      "fotos": [
        "Imagens dos Jogos/Brass Birmighan/1.jpg",
        "Imagens dos Jogos/Brass Birmighan/2.jpg",
        "Imagens dos Jogos/Brass Birmighan/3.jpg",
        "Imagens dos Jogos/Brass Birmighan/4.jpg",
        "Imagens dos Jogos/Brass Birmighan/5.jpg",
      ],
      detalhes_longos: "Um jogo de estratégia econômica industrial que conta a história de empreendedores em Birmingham durante a Revolução Industrial. Construa fábricas, ferrovias e canais para dominar o mercado de carvão, ferro e cerveja em um dos jogos mais estratégicos da atualidade.",
      componentes: [
        "1 Tabuleiro", "4 Tabuleiros de Jogador", "78 Fichas de Cerâmica", "180 Indústrias", "Manual de Regras"
      ],
      especificacoes: {
        idade: "14+",
        tempo: "120+ min",
        idioma: "Português",
        lancamento: "2021",
        editora: "Conclave",
        designer: "Gavan Brown, Matt Tolman, Martin Wallace",
        mecanicas: "Gestão de Mão, Construção de Rotas",
        perfil: "Estratégia Pesada"
      }
    },
    {
      "id": 10,
      "nome": "Blokus",
      "sku": "LUDO-BLO-010",
      "categoria": "Abstrato, Estratégia, Peças",
      "descricao": "Um jogo de estratégia abstrata onde você deve colocar todas as suas peças no tabuleiro enquanto bloqueia seus oponentes.",
      "preco": 110,
      "min_jogadores": 2,
      "max_jogadores": 4,
      "keywords": "peças, formas, bloqueio, abstrato",
      "fotos": [
        "Imagens dos Jogos/Blokus/1.jpg",
        "Imagens dos Jogos/Blokus/2.jpg",
        "Imagens dos Jogos/Blokus/3.jpg",
        "Imagens dos Jogos/Blokus/4.jpg",
      ],
      detalhes_longos: "Um jogo de estratégia abstrata onde o objetivo é colocar o maior número possível de peças coloridas no tabuleiro. A regra de ouro é simples: suas peças devem tocar as outras da mesma cor apenas pelos cantos. Um desafio tático que se aprende em um minuto, mas leva uma vida para dominar.",
      componentes: [
        "84 Peças coloridas",
        "1 Tabuleiro",
        "1 Manual de Regras"
      ],
      especificacoes: {
        idade: "7+",
        tempo: "30+ min",
        idioma: "Português",
        lancamento: "2025",
        editora: "Mattel",
        designer: "Bernard Tavitian",
        mecanicas: "Cerco de Área, Colocação de Peças",
        perfil: "Jogo Família"
      }
    }
  ];

    redirecionar(obj:Produto){
      localStorage.setItem("ProdutoSelecionado", JSON.stringify(obj));
      location.href="detalhe";
    }

}