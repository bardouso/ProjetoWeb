import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCesta } from '../../model/item-cesta';
import { Produto } from '../../model/produto';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css'
})


export class Carrinho {
  mensagem: String = "";
  lista: ItemCesta[] = [];
  total: number = 0;

  ngOnInit(){
    let json = localStorage.getItem("cesta");
    if(json == null){
      this.mensagem = "Sua cesta está vazia!!!";
    } else {
      this.lista = JSON.parse(json);
      this.calculaTotal();
    }
  }

  calculaTotal(){
    this.total = 0;
    for(let obj of this.lista){
      this.total += obj.produto.preco * obj.quantidade;
    }
  }

  salvar(){
    localStorage.setItem("cesta", JSON.stringify(this.lista));
  }

  aumentar(obj: ItemCesta){
    obj.quantidade++;
    this.salvar();
    this.calculaTotal();
  }

  diminuir(obj: ItemCesta){
    obj.quantidade--;
    if(obj.quantidade <= 0){
      this.remover(obj);
    }
    this.salvar();
    this.calculaTotal();
  }

  remover(obj: ItemCesta){
    this.lista = this.lista.filter(i => i.produto.id != obj.produto.id);
    this.salvar();
    this.calculaTotal();
  }

  limpar(){
    localStorage.removeItem("cesta");
    this.lista = [];
    this.total = 0;
    this.mensagem = "Sua cesta está vazia!!!";
  }
}