import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../model/cliente';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  mensagem: string="";
  obj:Cliente = new Cliente();

  ngOnInit(){
    let json = localStorage.getItem("Cliente");
    if (json=null){
      this.obj = JSON.parse(json)
    };
  }
  cadastrar(){
    localStorage.setItem("Cliente", JSON.stringify(this.obj));
    this.mensagem = "Cadastro realizado com sucesso!";
  }
}
