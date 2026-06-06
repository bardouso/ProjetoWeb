import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' }) export class PedidoService { api = 'http://localhost:8080/api/pedidos'; constructor(private http: HttpClient) { } finalizarPedido(p: any) { return this.http.post<any>(`${this.api}/finalizar`, p) } }
