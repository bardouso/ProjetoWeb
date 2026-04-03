
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo';
import { JogoDetalheComponent } from './pages/jogo-detalhe/jogo-detalhe';
import { Carrinho } from './pages/carrinho/carrinho';
import { JogosComponent } from './pages/jogos/jogos';
import { Cadastro } from './pages/cadastro/cadastro';
import { Login } from './pages/login/login';
import { Recupera } from './pages/recupera/recupera';
import { Bemvindo } from './components/bemvindo/bemvindo';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'jogos', component: JogosComponent },
  { path: 'jogo-detalhe/:id', component: JogoDetalheComponent },
  { path: 'carrinho', component: Carrinho},
  { path: 'cadastro', component: Cadastro },// Redireciona a página vazia para /home
  { path: 'login', component: Login},
  { path: 'recupera', component: Recupera },
  { path: 'bemvindo', component: Bemvindo}
];