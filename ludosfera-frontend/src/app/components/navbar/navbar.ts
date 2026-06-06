import { Component } from '@angular/core'; import { CommonModule } from '@angular/common'; 
import { Router, RouterModule } from '@angular/router'; 
@Component({ selector: 'app-navbar', standalone: true, imports: [CommonModule, RouterModule], templateUrl: './navbar.html', styleUrl: './navbar.css' })
 export class NavbarComponent { constructor(private router: Router) { } estaLogado() { return typeof localStorage != 'undefined' && localStorage.getItem('cliente') !== null } 
 logout() { localStorage.removeItem('cliente'); alert('Logout realizado'); this.router.navigate(['/home']) } }
