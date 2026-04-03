import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../model/cliente';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
    mensagem: string = "";
    obj: Cliente = new Cliente();

    fazerLogin (){
      if(this.obj.email=="gabriel@gabriel.br" && this.obj.senha=="123456"){
        this.obj.nome = "norton";
        this.obj.logradouro = "norton";
        this.obj.telefone = "norton";
        localStorage.setItem("cliente", JSON.stringify(this.obj));
        location.href = "cadastro";
      }else (
        this.mensagem = "Email ou senha incorreto"
      )
    }

      novoCadastro(){
        localStorage.removeItem
      }

}
