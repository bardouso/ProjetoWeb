import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../model/produto';
import { ProdutoService } from '../../services/produto.service';
import { ItemCesta } from '../../model/item-cesta';
@Component({ selector: 'app-jogo-detalhe', standalone: true, imports: [CommonModule], templateUrl: './jogo-detalhe.html', styleUrl: './jogo-detalhe.css' })
export class JogoDetalheComponent {
        obj: Produto = new Produto(); indiceFoto = 0; constructor(private route: ActivatedRoute, private ps: ProdutoService) { } ngOnInit() { this.ps.buscarPorId(Number(this.route.snapshot.paramMap.get('id'))).subscribe(p => this.obj = p) } comprar() {
            if (!localStorage.getItem('cliente')) { alert('Você precisa fazer login!'); return } let cesta: ItemCesta[] = JSON.parse(localStorage.getItem('cesta') || '[]');
            let item = cesta.find(i => i.produto.id == this.obj.id); if (item) item.quantidade++; else { let n = new ItemCesta(); n.produto = this.obj; n.preco = this.obj.preco; cesta.push(n) } localStorage.setItem('cesta', JSON.stringify(cesta)); alert('Produto adicionado ao carrinho!')
        } mudarFoto(d: number) { this.indiceFoto += d; if (this.indiceFoto >= this.obj.fotos.length) this.indiceFoto = 0; if (this.indiceFoto < 0) this.indiceFoto = this.obj.fotos.length - 1 }
}
