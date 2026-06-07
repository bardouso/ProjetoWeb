import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email: string = '';
  senha: string = '';
  mensagem: string = '';
  tipoMensagem: 'sucesso' | 'erro' | '' = '';
  carregando: boolean = false;

  constructor(
    private cs: ClienteService,
    private r: Router
  ) {}

  fazerLogin() {
    if (!this.email.trim() || !this.senha.trim()) {
      this.mensagem = 'Preencha e-mail e senha.';
      this.tipoMensagem = 'erro';
      return;
    }

    this.carregando = true;
    this.mensagem = 'Verificando seus dados...';
    this.tipoMensagem = 'sucesso';

    this.cs.login(this.email, this.senha).subscribe({
      next: res => {
        localStorage.setItem('cliente', JSON.stringify(res.cliente));

        this.mensagem = 'Login realizado com sucesso! Redirecionando...';
        this.tipoMensagem = 'sucesso';
        this.carregando = false;

        setTimeout(() => {
          this.r.navigate(['/home']);
        }, 1200);
      },
      error: () => {
        this.mensagem = 'E-mail ou senha inválidos.';
        this.tipoMensagem = 'erro';
        this.carregando = false;
      }
    });
  }
}