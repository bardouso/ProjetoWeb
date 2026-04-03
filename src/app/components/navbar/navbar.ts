import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router'; // Importe o Router
import { CommonModule } from '@angular/common'; // Importe para usar o @if
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {

rotaAtual: string = '';

  constructor(private router: Router) {
    // Escuta as mudanças de rota para saber onde o usuário está
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.rotaAtual = event.url;
    });
  }

  // Função auxiliar para checar se é a home
  isNotHome(): boolean {
    // Verifica se a rota não é '/' ou '/home'
    return this.rotaAtual !== '/' && this.rotaAtual !== '/home';
  }

}