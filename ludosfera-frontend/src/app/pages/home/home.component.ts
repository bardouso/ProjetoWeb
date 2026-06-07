import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Produto } from '../../model/produto';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  termoBusca: string = '';
  sugestoes: Produto[] = [];
  mostrandoSugestoes: boolean = false;

  private tempoBusca: any;

  constructor(
    private router: Router,
    private produtoService: ProdutoService
  ) {}

  buscar() {
    const termo = this.termoBusca.trim();

    if (termo.length > 0) {
      this.mostrandoSugestoes = false;

      this.router.navigate(['/jogos'], {
        queryParams: { busca: termo }
      });
    }
  }

  aoDigitarBusca() {
    const termo = this.termoBusca.trim();

    clearTimeout(this.tempoBusca);

    if (termo.length < 2) {
      this.sugestoes = [];
      this.mostrandoSugestoes = false;
      return;
    }

    this.tempoBusca = setTimeout(() => {
      this.produtoService.pesquisar(termo).subscribe({
        next: (dados) => {
          this.sugestoes = dados.slice(0, 5);
          this.mostrandoSugestoes = this.sugestoes.length > 0;
        },
        error: () => {
          this.sugestoes = [];
          this.mostrandoSugestoes = false;
        }
      });
    }, 250);
  }

  abrirJogo(produto: Produto) {
    this.termoBusca = produto.nome;
    this.mostrandoSugestoes = false;
    this.router.navigate(['/jogo-detalhe', produto.id]);
  }

  esconderSugestoesComDelay() {
    setTimeout(() => {
      this.mostrandoSugestoes = false;
    }, 180);
  }
}