import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class CatalogoComponent {

    jogos: any[] = [
    {
      id: 1,
      nome: 'Catan',
      descricao: 'Jogo de estratégia e negociação.',
      preco: 150
    },
    {
      id: 2,
      nome: 'Dixit',
      descricao: 'Jogo de cartas e imaginação.',
      preco: 120
    },
    {
      id: 3,
      nome: 'Ticket to Ride',
      descricao: 'Construa rotas de trem pelo mapa.',
      preco: 200
    }
  ];  
}


