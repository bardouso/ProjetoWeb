import { Component, ViewEncapsulation } from '@angular/core'; // 👈 CORREÇÃO: Adicionado o ViewEncapsulation aqui
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { Router, RouterModule } from '@angular/router'; 
import { Cliente } from '../../model/cliente'; 
import { ClienteService } from '../../services/cliente.service'; 

@Component({ 
    selector: 'app-cadastro', 
    standalone: true, 
    imports: [CommonModule, FormsModule, RouterModule], 
    templateUrl: './cadastro.html', 
    styleUrl: './cadastro.css',
    encapsulation: ViewEncapsulation.None // Agora o Angular sabe exatamente o que é isso!
})

export class Cadastro { obj = new Cliente(); mensagem = ''; constructor(private cs: ClienteService, private r: Router) { } cadastrar() { this.cs.cadastrar(this.obj).subscribe(() => { alert('Cadastro realizado!'); this.r.navigate(['/login']) }) } }
