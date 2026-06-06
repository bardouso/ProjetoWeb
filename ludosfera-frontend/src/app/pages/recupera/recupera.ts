import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
@Component({ selector: 'app-recupera', standalone: true, imports: [CommonModule, FormsModule], templateUrl: './recupera.html', styleUrl: './recupera.css' }) export class Recupera { email = ''; codigo = ''; novaSenha = ''; mensagem = ''; constructor(private cs: ClienteService) { } enviarCodigo() { this.cs.recuperarSenha(this.email).subscribe(r => this.mensagem = r.mensagem) } redefinirSenha() { this.cs.redefinirSenha(this.email, this.codigo, this.novaSenha).subscribe(() => this.mensagem = 'Senha alterada com sucesso!') } }
