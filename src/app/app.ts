import { Component } from '@angular/core'; // Adicione esta linha
import { RouterOutlet } from '@angular/router'; // Adicione esta linha
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { CommonModule } from '@angular/common';
import { Bemvindo } from './components/bemvindo/bemvindo';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule, Bemvindo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }