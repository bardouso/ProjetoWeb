import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../model/cliente';
@Injectable({ providedIn: 'root' }) export class ClienteService { api = 'http://localhost:8080/api/clientes'; constructor(private http: HttpClient) { } cadastrar(c: Cliente) { return this.http.post(`${this.api}/cadastro`, c) } login(email: string, senha: string) { return this.http.post<any>(`${this.api}/login`, { email, senha }) } recuperarSenha(email: string) { return this.http.post<any>(`${this.api}/recuperar-senha`, { email }) } redefinirSenha(email: string, codigo: string, novaSenha: string) { return this.http.post<any>(`${this.api}/redefinir-senha`, { email, codigo, novaSenha }) } }
