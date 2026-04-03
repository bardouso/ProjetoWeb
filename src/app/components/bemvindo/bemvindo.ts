import { Cliente } from '../../model/cliente';
import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core'; // Adicionado OnInit
import { isPlatformBrowser, CommonModule } from '@angular/common'; // Adicionado CommonModule para o @if

@Component({
  selector: 'app-bemvindo',
  standalone: true,
  imports: [CommonModule], // Importante se você usar @if ou *ngIf no HTML
  templateUrl: './bemvindo.html',
  styleUrl: './bemvindo.css',
})
export class Bemvindo implements OnInit { // 1. Adicione o "implements OnInit"
  mensagem: string = "Ola, faça seu login!";
  obj: Cliente = new Cliente();

  // 2. Você PRECISA deste constructor para a trava do SSR funcionar
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // 3. Esta é a "trava" que impede o erro no terminal
    if (isPlatformBrowser(this.platformId)) {
      
      let json = localStorage.getItem("Cliente");
      
      if (json != null) {
        this.obj = JSON.parse(json);
        this.mensagem = "Ola, " + this.obj.nome + " seja bem vindo, clique aqui para sair";
      } else {
        this.mensagem = "Ola, faça seu login!";
      }
      
    }
  }
}