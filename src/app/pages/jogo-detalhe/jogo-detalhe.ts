import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../model/produto';
import { JogosComponent } from '../jogos/jogos';
import { ActivatedRoute } from '@angular/router';
import { ItemCesta } from '../../model/item-cesta';

@Component({
  selector: 'app-jogo-detalhe',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './jogo-detalhe.html',
  styleUrl: './jogo-detalhe.css'
})
export class JogoDetalheComponent {
  obj: Produto = new Produto();
  lista = new JogosComponent().lista;
  
  // Variável para controlar qual foto está aparecendo
  indiceFoto: number = 0; 

  comprar() {
  
   const cliente = localStorage.getItem("cliente");

  if (!cliente) {
    alert("Você precisa fazer login!");
    return;
  }
    let cesta: ItemCesta[] = [];

  let json = localStorage.getItem("cesta");

  if (json != null) {
    cesta = JSON.parse(json);
  }

  // Verifica se o produto já está na cesta
  let item = cesta.find(i => i.produto.id == this.obj.id);

  if (item) {
    item.quantidade++;
  } else {
    let novo = new ItemCesta();
    novo.produto = this.obj;
    novo.quantidade = 1;
    novo.preco = this.obj.preco;
    cesta.push(novo);
  }

  localStorage.setItem("cesta", JSON.stringify(cesta));

  alert("Produto adicionado ao carrinho!");
}

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const produtoEncontrado = this.lista.find((p: Produto) => p.id === id);

    if (produtoEncontrado) {
      this.obj = produtoEncontrado;
      
      // Se o seu model não tiver um array de fotos, podemos "inventar" um 
      // baseado no ID para testar o layout da galeria
      if (!this.obj.fotos) {
        this.obj.fotos = [
          `produto_${this.obj.id}.jpg`, 
          `produto_${this.obj.id}_2.jpg`, 
          `produto_${this.obj.id}_3.jpg`
        ];
      }
    }
  }

  // Função para as setinhas
  mudarFoto(direcao: number) {
    this.indiceFoto += direcao;
    if (this.indiceFoto >= this.obj.fotos.length) this.indiceFoto = 0;
    if (this.indiceFoto < 0) this.indiceFoto = this.obj.fotos.length - 1;
  }

  
}