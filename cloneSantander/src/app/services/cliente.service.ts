import { Cliente } from './../models/cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private BASE_URL = 'http://localhost:8080/clientes'

  constructor(private httpClient: HttpClient) { }


  getUsers(): Observable<Cliente []> {
    return this.httpClient.get<Cliente[]>(this.BASE_URL);
  }


  postUser(cliente: Cliente[]): Observable<Cliente>{
    return this.httpClient.post<Cliente>(this.BASE_URL,cliente)

  }

  //excluir
  deleteUser(id: number): Observable<Cliente>{
    return this.httpClient.delete<Cliente>(`${this.BASE_URL}/id/${id}`)
  }

  //editar usuarios = Updade
  updateUser(id: string, cliente: Cliente): Observable<Cliente>{
    return this.httpClient.put<Cliente>(`${this.BASE_URL}/id/${id}`, cliente)
  }


  getUser(id: string): Observable<Cliente []>{
    return this.httpClient.get<Cliente[]>(`${this.BASE_URL}/id/${id}`)
  }
}
