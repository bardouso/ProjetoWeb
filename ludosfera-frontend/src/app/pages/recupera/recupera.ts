import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-recupera',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recupera.html',
  styleUrl: './recupera.css'
})
export class Recupera {
  email: string = '';
  codigo: string = '';
  novaSenha: string = '';

  mensagem: string = '';
  tipoMensagem: 'sucesso' | 'erro' | '' = '';

  carregando: boolean = false;

  constructor(private clienteService: ClienteService) {}

  enviarCodigo() {
    if (!this.email.trim()) {
      this.mensagem = 'Digite seu e-mail antes de enviar o código.';
      this.tipoMensagem = 'erro';
      return;
    }

    this.carregando = true;
    this.mensagem = 'Enviando código para o e-mail informado...';
    this.tipoMensagem = 'sucesso';

    this.clienteService.recuperarSenha(this.email).subscribe({
      next: (resposta: any) => {
        console.log('Resposta do backend:', resposta);

        this.mensagem = resposta?.mensagem 
          ? resposta.mensagem 
          : 'Código enviado para o e-mail informado. Verifique sua caixa de entrada e spam.';

        this.tipoMensagem = 'sucesso';
        this.carregando = false;
      },
      error: (erro) => {
        console.log('Erro ao enviar código:', erro);

        this.mensagem = 'Não foi possível enviar o código. Verifique se o e-mail está cadastrado.';
        this.tipoMensagem = 'erro';
        this.carregando = false;
      }
    });
  }

  redefinirSenha() {
    if (!this.email.trim() || !this.codigo.trim() || !this.novaSenha.trim()) {
      this.mensagem = 'Preencha e-mail, código e nova senha.';
      this.tipoMensagem = 'erro';
      return;
    }

    this.clienteService.redefinirSenha(this.email, this.codigo, this.novaSenha).subscribe({
      next: (resposta: any) => {
        console.log('Resposta ao redefinir senha:', resposta);

        this.mensagem = resposta?.mensagem
          ? resposta.mensagem
          : 'Senha alterada com sucesso! Agora você já pode fazer login.';

        this.tipoMensagem = 'sucesso';
      },
      error: (erro) => {
        console.log('Erro ao redefinir senha:', erro);

        this.mensagem = 'Código inválido ou erro ao alterar senha.';
        this.tipoMensagem = 'erro';
      }
    });
  }
}