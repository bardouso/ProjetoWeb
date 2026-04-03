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
      "quantidade": 5,
      "keywords": "estratégia, negociação, recursos, tabuleiro",
      "fotos": [] // Deixando vazio para você colocar depois
    },
    {
      "id": 2,
      "nome": "Dixit",
      "sku": "LUDO-DIX-002",
      "categoria": "Imaginação, Família, Cartas",
      "descricao": "Um jogo de cartas ilustradas onde a imaginação e a interpretação são as chaves para a vitória.",
      "preco": 120,
      "quantidade": 3,
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
      "quantidade": 4,
      "keywords": "trem, rotas, objetivos, família",
      "fotos": []
    },
    {
      "id": 4,
      "nome": "Coup",
      "sku": "LUDO-COU-004",
      "categoria": "Blefe, Party Game, Rápido",
      "descricao": "Em um futuro próximo, você deve usar blefe e estratégia política para eliminar a influência de seus rivais.",
      "preco": 80,
      "quantidade": 10,
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
      "quantidade": 6,
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
      "quantidade": 8,
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
      "quantidade": 12,
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
      "quantidade": 4,
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
      "quantidade": 2,
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
      "quantidade": 7,
      "keywords": "peças, formas, bloqueio, abstrato",
      "fotos": []
    }
  ];

    redirecionar(obj:Produto){
      localStorage.setItem("ProdutoSelecionado", JSON.stringify(obj));
      location.href="detalhe";
    }

}