import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
@Component({ selector: 'app-login', standalone: true, imports: [CommonModule, FormsModule, RouterModule], templateUrl: './login.html', styleUrl: './login.css' }) export class Login { email = ''; senha = ''; mensagem = ''; constructor(private cs: ClienteService, private r: Router) { } fazerLogin() { this.cs.login(this.email, this.senha).subscribe({ next: res => { localStorage.setItem('cliente', JSON.stringify(res.cliente)); alert('Login realizado!'); this.r.navigate(['/home']) }, error: () => this.mensagem = 'Email ou senha inválidos' }) } }
