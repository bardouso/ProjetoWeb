import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email: string = "";
  senha: string = "";
  mensagem: string = "";

  constructor(private router: Router) {}

  fazerLogin() {

    // validação
    if (this.email === "" || this.senha === "") {
      this.mensagem = "Preencha email e senha";
      return;
    }

    // usuário fixo
    if (this.email === "lucas.chung.lc@gmail.com" && this.senha === "1234" || this.email === "admin@admin.com" && this.senha === "admin") {

      const cliente = {
        email: this.email
      };

      localStorage.setItem("cliente", JSON.stringify(cliente));

      alert("Login realizado com sucesso!");
      this.router.navigate(['/']);

    } else {
      this.mensagem = "Email ou senha inválidos";
    }
  }
}