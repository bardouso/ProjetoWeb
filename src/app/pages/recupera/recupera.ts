import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../model/cliente';

@Component({
  selector: 'app-recupera',
  imports: [CommonModule, FormsModule],
  templateUrl: './recupera.html',
  styleUrl: './recupera.css',
})
export class Recupera {
  mensagem: string = "";
  obj: Cliente = new Cliente();

    recuperaSenha(){
      this.mensagem = "Um email com as instruções de recuperação de senha foi enviado"
    }
}
