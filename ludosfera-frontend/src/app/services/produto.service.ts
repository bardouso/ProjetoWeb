import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';
@Injectable({ providedIn: 'root' }) export class ProdutoService { api = 'http://localhost:8080/api/produtos'; constructor(private http: HttpClient) { } listar(): Observable<Produto[]> { return this.http.get<Produto[]>(this.api) } buscarPorId(id: number): Observable<Produto> { return this.http.get<Produto>(`${this.api}/${id}`) } pesquisar(t: string): Observable<Produto[]> { return this.http.get<Produto[]>(`${this.api}/buscar?termo=${encodeURIComponent(t)}`) } }
