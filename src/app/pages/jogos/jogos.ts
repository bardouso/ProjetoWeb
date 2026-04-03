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
      "fotos": []
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
      "fotos": []
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
      ]
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
      "fotos": []
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
      "fotos": []
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
      "fotos": []
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
      "fotos": []
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
      "fotos": []
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
      "fotos": []
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
      "fotos": []
    }
  ];

    redirecionar(obj:Produto){
      localStorage.setItem("ProdutoSelecionado", JSON.stringify(obj));
      location.href="detalhe";
    }

}