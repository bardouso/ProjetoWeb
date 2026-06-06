import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Produto } from '../../model/produto';
import { ProdutoService } from '../../services/produto.service';
@Component({ selector: 'app-jogos', standalone: true, imports: [CommonModule, RouterModule], templateUrl: './jogos.html', styleUrl: './jogos.css' })
export class JogosComponent { lista: Produto[] = []; constructor(private ps: ProdutoService, private route: ActivatedRoute) { } ngOnInit() { this.route.queryParams.subscribe(p => { const b = p['busca']; (b ? this.ps.pesquisar(b) : this.ps.listar()).subscribe(d => this.lista = d) }) } }
