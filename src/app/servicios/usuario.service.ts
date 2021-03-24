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

    this.baseUrl = 'http://localhost:3000/clientes';
    this.privateUrl = 'http://localhost:3000/api/clientes/private';

    this.clientes = []

  }


  create(formValues): Promise<any> {
    return this.httpClient.post(this.baseUrl, formValues).toPromise();
  }

  clienteById(pId): Promise<any> {
    return this.httpClient.get(`${this.privateUrl}/${pId}`, this.createHeaders()).toPromise()

  }

  upDateCliente(formValues, pId) {
    formValues.id = pId;
    return this.httpClient.put(this.privateUrl, formValues, this.createHeaders()).toPromise();
  }

  deleteCliente(pId): Promise<any> {
    return this.httpClient.delete(`${this.privateUrl}/${pId}`, this.createHeaders()).toPromise();

  }
  login(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/login_cliente`, formValues).toPromise();
  }

  createHeaders() {
    return {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem('token_fotografo')
      })
    }
  }



}
