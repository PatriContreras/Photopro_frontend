import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  clientes: Cliente[];
  baseUrl: string;
  privateUrl: string;
  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/clientes';
    this.privateUrl = 'http://localhost:3000/api/clientes/private';

    this.clientes = []

  }


  create(formValues): Promise<any> {
    return this.httpClient.post(this.baseUrl, formValues).toPromise();
  }

  clienteById(): Promise<any> {
    return this.httpClient.get(`${this.privateUrl}/perfil`, this.createHeaders()).toPromise()

  }

  upDateCliente(formValues) {

    return this.httpClient.put(this.privateUrl, formValues, this.createHeaders()).toPromise();
  }

  deleteCliente(): Promise<any> {
    return this.httpClient.delete(`${this.privateUrl}`, this.createHeaders()).toPromise();

  }
  login(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/login_cliente`, formValues).toPromise();
  }

  createHeaders() {
    return {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem('token_cliente')
      })
    }
  }



}
